/**
 * Post-questionnaire responses (Likert 1–5: Strongly disagree … Strongly agree).
 * Rows = participants (n=10). Columns = 8 SUS items + 1 custom follow-up (items in survey order).
 * Edit SUS_RESPONSES if your spreadsheet differs.
 */
const SUS_RESPONSES = [
    [4, 2, 4, 2, 2, 3, 2, 4, 4],
    [4, 1, 5, 1, 1, 5, 3, 4, 5],
    [4, 1, 4, 2, 1, 5, 1, 4, 4],
    [4, 1, 4, 3, 1, 5, 1, 4, 4],
    [4, 2, 3, 3, 1, 4, 2, 3, 5],
    [5, 2, 4, 2, 1, 5, 1, 5, 5],
    [4, 3, 4, 1, 1, 4, 3, 4, 4],
    [4, 1, 4, 1, 1, 4, 1, 4, 4],
    [5, 5, 5, 1, 1, 4, 1, 5, 5],
    [5, 1, 5, 1, 1, 5, 1, 5, 5],
];

const SUS_ITEM_LABELS_EN = [
    'Would use frequently',
    'Unnecessarily complex ✳',
    'Easy to use',
    'Need tech support ✳',
    'Too inconsistent ✳',
    'Learn to use quickly',
    'Inconvenience ✳',
    'Felt confident',
    'Useful features',
];

const SUS_ITEM_LABELS_JA = [
    '頻繁に使いたい',
    '不必要に複雑 ✳',
    '使いやすい',
    '技術サポートが必要 ✳',
    '一貫性に欠ける ✳',
    'すぐに慣れる',
    '不便 ✳',
    '自信を持って使えた',
    '役に立つ機能',
];

function getPortfolioLang() {
    return localStorage.getItem('portfolio-lang') || 'en';
}

function susItemLabels() {
    return getPortfolioLang() === 'ja' ? SUS_ITEM_LABELS_JA : SUS_ITEM_LABELS_EN;
}

function columnMeans(rows) {
    const cols = rows[0].length;
    const out = [];
    for (let j = 0; j < cols; j++) {
        let s = 0;
        for (let i = 0; i < rows.length; i++) s += rows[i][j];
        out.push(Math.round((s / rows.length) * 100) / 100);
    }
    return out;
}

let susChartInstance = null;

function initSusChart() {
    const canvas = document.getElementById('sus-results-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    if (susChartInstance) {
        susChartInstance.destroy();
        susChartInstance = null;
    }

    const means = columnMeans(SUS_RESPONSES);
    const n = SUS_RESPONSES.length;
    const lang = getPortfolioLang();
    const textColor =
        getComputedStyle(document.documentElement).getPropertyValue('--sus-chart-text').trim() || '#555';
    const barColor =
        getComputedStyle(document.documentElement).getPropertyValue('--sus-chart-bar').trim() ||
        'rgba(26, 26, 26, 0.88)';

    const xTitle = lang === 'ja' ? '平均スコア（1～5）' : 'Mean score (1–5)';
    const meanLabel = lang === 'ja' ? `平均（n=${n}）` : `Mean (n=${n})`;

    const isNarrow = typeof window !== 'undefined' && window.innerWidth <= 768;
    const tickFontSize = isNarrow ? 10 : 11;
    const titleFontSize = isNarrow ? 11 : 12;
    /* Horizontal bar: higher aspectRatio = shorter chart; tighter bars via categoryPercentage */
    const aspectRatio = isNarrow ? 1.05 : 1.22;

    /* global Chart */
    susChartInstance = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: susItemLabels(),
            datasets: [
                {
                    label: meanLabel,
                    data: means,
                    backgroundColor: barColor,
                    borderRadius: 4,
                    maxBarThickness: isNarrow ? 16 : 20,
                    categoryPercentage: 0.94,
                    barPercentage: 0.98,
                },
            ],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio,
            layout: {
                padding: {
                    left: isNarrow ? 2 : 6,
                    right: 10,
                    top: 6,
                    bottom: 8,
                },
            },
            scales: {
                x: {
                    min: 1,
                    max: 5,
                    ticks: {
                        stepSize: 0.5,
                        color: textColor,
                        font: { family: "'Inter', sans-serif", size: tickFontSize },
                        maxRotation: 0,
                    },
                    grid: { color: 'rgba(0,0,0,0.06)' },
                    title: {
                        display: true,
                        text: xTitle,
                        color: textColor,
                        font: { family: "'Inter', sans-serif", size: titleFontSize, weight: '500' },
                    },
                },
                y: {
                    offset: true,
                    ticks: {
                        color: textColor,
                        font: { family: "'Inter', sans-serif", size: tickFontSize },
                        autoSkip: false,
                        padding: 4,
                        maxWidth: isNarrow ? 160 : 240,
                    },
                    grid: { display: false },
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label(ctx) {
                            const prefix = lang === 'ja' ? '平均: ' : 'Mean: ';
                            return ` ${prefix}${ctx.raw}`;
                        },
                    },
                },
            },
        },
    });
}

window.refreshSusChartChart = initSusChart;

let susWindowResizeTimer;
function scheduleSusChartReflow() {
    clearTimeout(susWindowResizeTimer);
    susWindowResizeTimer = setTimeout(() => {
        if (document.getElementById('sus-results-chart') && typeof Chart !== 'undefined') {
            initSusChart();
        }
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    initSusChart();
    window.addEventListener('resize', scheduleSusChartReflow);
});
