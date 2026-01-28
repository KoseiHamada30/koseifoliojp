// Internationalization (i18n) for Portfolio
const translations = {
    ja: {
        // Navigation
        'contact': '連絡する',
        
        // Index page
        'intro-text': 'は、デザインを通じてユーザー中心の体験を創造し、日常の<b>「めんどくさい」</b>の解消を目指してる。',
        'reverie-subtitle': '睡眠はたった30分で変えられる',
        'reverie-category': '(UXハッカソンプロジェクト)',
        'nextscore-subtitle': '予想はもっと、ワクワクできる',
        'nextscore-category': '(株式会社なんでもドラフト)',
        'resume': 'レジュメを見る',
        
        // Info page - Hero
        'info-hero': 'こんにちは, <b>濵田紘誠</b>です。 <br>ユーザーが抱える悩みをどのように解決していくかを考えるUX分野に魅力を感じ、より多くの人を笑顔にできるよう日々勉強しています！',
        
        // Info page - About Me
        'about-me-1': '現在メルボルン大学でUX/UIデザインを学んでおり、これまでのデザインは、スタートアップ企業でのインターン、大学でのデジタルマーケティングやUX/UIプロジェクトの経験をを通じて培われました。人々の体験をよりスムーズで不自由のないものにする、実用的なソリューションをターゲット視点から生み出すことを大切にしています。',
        'about-me-2': '学部で学んでいるUX/UIデザインを活かし、どんなプロジェクトにもクライアントやその他全ての関係者との協力と、ターゲットが直面している問題解決を第一に考えるアプローチで取り組んでいます。論理的に良いデザインが問題をどう解決できるのかに魅了されており、常に何が良いデザインか、なぜそれが悪いデザインであるのかを学び、試行錯誤することを楽しんでいます。',
        'about-me-3': '勉強やデザインをしていないときは、スポーツ観戦やアニメを見たり、メルボルンの素敵なカフェを発掘したりしています。',
        
        // Info page - Skills
        'skill-ux-design': 'UXデザイン',
        'skill-ux-desc': '私のUXデザインの強みは、ユーザーリサーチから課題発見・情報設計・改善提案までを一貫して行い、「なぜ使いやすいのか」をデータと理論の両面から説明し、直感的で快適な体験へと導ける分析的デザイン力です。',
        'skill-problem-discovery': '問題発見',
        'skill-problem-desc': 'ユーザーや状況を観察して本質的な課題を見抜き、それをデータや論理に基づいて具体的な改善策へと落とし込み、再現性のある形で成果に繋げます。',
        'skill-solution': 'ソリューション提案',
        'skill-solution-desc': '発見した問題に対して、創造的で実現可能なソリューションを提案します。アイデア出しからコンセプト設計、プロトタイプ作成まで、ビジネス目標とユーザーが実際に求めていることの両方を満たす解決策を導き出します。',
        
        // Info page - Experience
        'exp-education-title': 'デザイン学部・UXデザイン専攻',
        'exp-education-uni': 'メルボルン大学',
        'exp-education-desc': 'UX/UIデザインを学んでおり、”良いデザイン”と”悪いデザイン”を論理的に分析し、ユーザーリサーチからデザイン設計、そしてフロントエンドの開発まで行っています。',
        'exp-circula-title': 'UXデザイナー',
        'exp-circula-company': 'Circula (大学生主導のスタートアップ)',
        'exp-circula-desc': 'Circulaは、大学内のクラブ活動やイベント情報を一元化し、リアルタイムで可視化するキャンパスマップアプリで、学生が「参加したいイベントを見逃さず、学内生活を最大化できる」体験を提供します。私は10以上のモバイル画面と5つのWebページをデザインし、ユーザーリサーチに基づくUI改善や視認性の向上を通じて、学生が効率的にイベントを発見・管理できるUXを実現します。',
        'exp-draft-title': 'UXデザインインターン',
        'exp-draft-company': '株式会社なんでもドラフト',
        'exp-draft-desc': 'ギャンブル寄りで初心者には敷居が高いという業界課題に対し、カジュアル層でも直感的に楽しめる体験を重視し、ChatGPTやGeminiを活用した数値では表せない部分の予想生成、Google Apps Scriptによる運営自動化を導入。結果として、「使いやすさ」と「楽しさ」を両立した差別化UXを実現し、スポーツ×テクノロジー×エンタメを融合した新しい観戦体験の創出に貢献しました。',
        'exp-location-melbourne': 'メルボルン',
        'exp-location-tokyo': '東京',
        'exp-period-current': '現在',
        
        // Project pages - common
        'challenge': '課題',
        'discovery': '課題発見',
        'research': 'ユーザーリサーチと分析',
        'what-is-app': 'What is this app?',
        'visual-design': 'ビジュアルデザイン',
        'ux-experience': 'UX体験',
        'future': '今後の展望',
        'review': 'レビュー',
        
        // NextScore project
        'nextscore-hero-subtitle': '予想はもっと、ワクワクできる。',
        'nextscore-hero-desc-1': 'NextScoreは、カジュアル層でも楽しめるよう設計したAIスポーツ予想メディアです。',
        'nextscore-hero-desc-2': 'AIが独自の視点で試合の見どころを1行で生成し、予想未経験者でも直感的に楽しめるUXを構築。',
        'nextscore-hero-desc-3': '「スポーツは、始まる前から面白い」という体験価値を提案しています',
        'nextscore-meta-type': 'タイプ',
        'nextscore-meta-duration': '期間',
        'nextscore-meta-role': '自分の役割',
        'nextscore-meta-tools': 'ツール',
        'nextscore-meta-duration-value': '3週間 ~ 現在',
        'nextscore-challenge-title': 'スポーツ予想メディアの不足',
        'nextscore-challenge-desc': '公営ギャンブルやWinnerなどの予想エンタメが散在し、メディアが未整備な現状を背景に、AIによる独自の試合予想をエンジョイ勢に端的に届けることで、誰もが楽しめるスポーツ予想体験をデザインするプロジェクトです。',
        'nextscore-discovery-title': 'スポーツ予想に興味を持てないエンジョイ勢',
        'nextscore-discovery-desc-1': 'スポーツ観戦は好きでも、「予想」はとっつきにくいと感じている人が多く、既存のメディアもスタッツや過去成績に偏りがちで、初心者・スポーツエンジョイ勢には魅力が伝わりづらいという課題がありました。',
        'nextscore-discovery-desc-2': 'そこから、私たちは数字だけの分析に頼らない',
        'nextscore-discovery-desc-3': '予想からワクワクさせる',
        'nextscore-discovery-desc-4': 'という新しい予想体験の創出を目指しました。',
        'nextscore-research-title': 'スポーツファンの予想行動パターン',
        'nextscore-research-survey-title': '①アンケート結果',
        'nextscore-research-survey-1': '予想の根拠',
        'nextscore-research-survey-1-desc': '予想をする際の根拠として、「直感」が最も多く（42%）、次いで「過去の成績」（33%）、「選手の調子」（10%）が続きました。',
        'nextscore-research-survey-2': '予想の動機',
        'nextscore-research-survey-2-desc': 'ほとんどの周りの予想ファンは、予想をしてベットをすると、より自分のチームへの応援に熱が高まると感じている。',
        'nextscore-research-interview-title': '②インタビュー結果',
        'nextscore-research-interview-1': '他の予想サイトの好きなところ',
        'nextscore-research-interview-1-desc': '「同じチームを応援する人と情報交換したい」というニーズが顕著でした。',
        'nextscore-research-interview-2': '予想サイトに求める機能',
        'nextscore-research-interview-2-desc': '「戦績のような数値以外の情報が欲しい」「予想をするまでの準備が要らなくなるようなプラットフォーム」という意見が多数見られました。',
        'nextscore-whatis-title': 'AIが描く、予想の新しいカタチ',
        'nextscore-whatis-desc': '現在はWINNERというスポーツくじで行えるJリーグそしてBリーグの試合予想を対象にしたサービスを考えています。',
        'nextscore-design-title': 'AI予想 × ワクワクを視覚化するデザイン',
        'nextscore-design-desc': 'ユーザーリサーチ・スポーツアプリの研究を基に、以下のビジュアルを意識しました：',
        'nextscore-design-1-title': '1. 単調さを排除',
        'nextscore-design-1-desc': 'スポーツの躍動感を表現するため、動的な要素とグラデーションを活用',
        'nextscore-design-2-title': '2. スプラッシュスクリーン',
        'nextscore-design-2-desc': 'アプリ起動時にはAIが描いた動的なスプラッシュ画面を導入。アニメーションでブランドの世界観を印象づける。',
        'nextscore-design-3-title': '3. レイアウト・色使いの意識',
        'nextscore-design-3-desc': 'カジュアルなスポーツファンに予想そのものを楽しんでもらうため、コメントやリアクション機能を目立つ色、位置に配置。',
        'nextscore-design-4-title': '+α  AI予想の自動化',
        'nextscore-design-4-desc': 'プロンプトを試行錯誤しつつ定性的な予想を誤情報なく試合ごとに自動生成させることを実装化に向けて作成',
        'nextscore-ux-title': 'ユーザーフロー',
        'nextscore-ux-flow1-title': 'ピックアップゲームのAI予想！',
        'nextscore-ux-flow1-desc': 'ユーザーは対戦成績などに加え、NextScoreが選ぶ一つの予想からその試合のスコアを考えます。ベット計算機での勝利後の分配金を視覚化したり、予想コンテストでスコアをアプリ内で予想したり、他のユーザーと議論を楽しむこともできます。',
        'nextscore-ux-flow2-title': '過去の予想・ランキング',
        'nextscore-ux-flow2-desc': '過去の予想データを分析し、的中率や傾向を可視化。ユーザーの予想スキル向上をサポートします。',
        'nextscore-future-title': 'プロジェクトの振り返りと今後の展望',
        'nextscore-future-desc': '4週間の開発期間で、ユーザーリサーチからプロトタイプまで一貫したデザインプロセスを実施できました。',
        'nextscore-future-like-title': '好き・得意と感じたところ：',
        'nextscore-future-like-1': 'スポーツファンの心理を深く理解できたこと',
        'nextscore-future-like-2': '複雑なコンテンツを単純化させてカジュアル層にターゲットすること',
        'nextscore-future-like-3': 'AIでのバイブコーディングや予想作成',
        'nextscore-future-next-title': '今後していくこと：',
        'nextscore-future-next-1': 'リアルタイムデータ連携の実装',
        'nextscore-future-next-2': 'ユーザーの予想スコアなどをベースにしたゲーミフィケーション',
        'nextscore-future-next-3': 'より多様なスポーツへの対応',
        'nextscore-future-next-4': '予想をSNSなどで共有できるようにする',
        'nextscore-future-next-5': '自社メディアやブログで予想を深く知りたいユーザー向けのコンテンツを制作',
        
        // Reverie project
        'reverie-hero-subtitle': '睡眠はたった30分で変えられる',
        'reverie-hero-desc': '当アプリは、「強制する睡眠」からの脱却を提唱します。就寝前後30分のルーティンを最適化することで、単なる睡眠時間の確保ではなく、ユーザー主導で質の高い眠りを創造。パーソナライズされたデータ分析を通じ、毎日最高の気分でスタートできるよう、眠りからサポートします。',
        'reverie-meta-type': 'タイプ',
        'reverie-meta-duration': '実施期間',
        'reverie-meta-role': '自分の役割',
        'reverie-meta-team': 'チーム構成',
        'reverie-meta-duration-value': '3日間',
        'reverie-challenge-title': '不規則な睡眠ルーティーンが生産性の低下を招く',
        'reverie-challenge-desc-1': '「健康と生活習慣」',
        'reverie-challenge-desc-2': 'というハッカソンのテーマをもとに、不規則な生活習慣が引き起こす睡眠の質の低下という課題を解決。就寝前後のルーティン改善で、利用者のウェルビーイング向上を目指すアプリです。',
        'reverie-discovery-title': '朝ごはんを食べていない',
        'reverie-discovery-desc-1': 'ふと疲れていそうなメンバーたちに朝ごはんを食べたか聞いたところ、3人とも食べていないことがわかりました。そこで僕は睡眠の質が原因で時間が取れず朝ごはんが食べれていない、また睡眠の質の悪化がその日の疲れや生産性の低下を引き起こすと考えました。',
        'reverie-discovery-desc-2': 'そこから、私たちは',
        'reverie-discovery-desc-3': '睡眠の質を向上させる',
        'reverie-discovery-desc-4': 'というテーマを掲げました。',
        'reverie-research-title': '睡眠前後のルーティーンの重要性',
        'reverie-research-survey-title': '①アンケート結果',
        'reverie-research-survey-1': '朝食習慣の欠如',
        'reverie-research-survey-1-desc': '回答者の約23.1%が朝食を「全く食べない」と回答。さらに「週に2〜4回」まで含めると過半数近くになりました。',
        'reverie-research-survey-2': '朝食を食べない理由',
        'reverie-research-survey-2-desc': '朝食を摂らない理由として、「授業に遅れる」「起きるのが遅い」「朝食を食べる時間がない」といった、起床や時間管理に関する課題が上位に挙がりました',
        'reverie-research-survey-conclusion': '= 朝のルーティンが睡眠から乱れていることがわかります',
        'reverie-research-sleep-title': '②睡眠の質向上',
        'reverie-research-sleep-1': '寝る前30分前が命',
        'reverie-research-sleep-1-desc': '30分前にリラックスする準備ができないと、体と脳が「まだ起きている状態」を維持してしまい、睡眠の質を下げてしまう。',
        'reverie-research-sleep-2': 'Orthosomnia（オルソソムニア）',
        'reverie-research-sleep-2-desc': 'これは、睡眠アプリの数値を気にしすぎて不安になりかえって眠れなくなる状態で、睡眠アプリ利用者の中で流行っています。理想的なデータと自分の誤差に過度に依存すると、ストレスや不眠を招き、睡眠を妨げていってしまいます。',
        'reverie-research-sleep-conclusion': '= 寝る前のルーティーン・自己管理が睡眠と密接に関わっています',
        'reverie-whatis-title': '睡眠前後30分のルーティーンの最適化',
        'reverie-design-title': 'ミニマムで色を意識したUI',
        'reverie-design-desc': 'ユーザーリサーチ・睡眠関係の研究を基に、以下のビジュアルを意識しました：',
        'reverie-design-1-title': '1. ミニマルデザイン',
        'reverie-design-1-desc': '就寝前後でしか使わないため、シンプルで直感的デザインを意識',
        'reverie-design-2-title': '2. 朝と夜の色使い',
        'reverie-design-2-desc': '寝る前には橙色のような暖かい色、起きた時には青緑のような涼しい色が睡眠の質を最も害さないと言われているため、それに沿った色使い',
        'reverie-design-3-title': '3. 統一感のあるボタン',
        'reverie-design-3-desc': '直感的に押すところがわかる色分けとハイライト',
        'reverie-ux-title': 'ユーザーフロー',
        'reverie-ux-flow1-title': '🛌 寝る前のルーティン',
        'reverie-ux-flow1-desc': 'アプリはユーザーが寝る準備をするタイミング（就寝予定時刻の約30分前）で、通知やウィジェットを通じて起動を促します。',
        'reverie-ux-flow1-note': '（Flowsのタブは閉じてご覧ください）',
        'reverie-ux-flow2-title': '☀️ 起床後のルーティン',
        'reverie-ux-flow2-desc': '歩数で止めるアラームが作動し、前夜に作成したToDoリストの確認、今夜寝る時間の設定を行います。',
        'reverie-ux-flow2-note': '（Flowsのタブは閉じてご覧ください）',
        'reverie-ux-flow3-title': '💡 オンボーディング',
        'reverie-ux-flow3-desc': 'ユーザー情報を簡単に知ることでデモグラフィックを把握し、よりユーザーごとにあった睡眠の提案を提供します。',
        'reverie-ux-flow3-note': '（Flowsのタブは閉じてご覧ください）',
        'reverie-review-title': 'プロジェクトの振り返りと今後の展望',
        'reverie-review-desc': '3日間のハッカソンという限られた時間の中で、ユーザーリサーチからプロトタイプまで一貫したデザインプロセスを実施できました。',
        'reverie-review-like-title': '好き・得意と感じたところ：',
        'reverie-review-like-1': '課題発見とソリューションの発見・デベロップメント',
        'reverie-review-like-2': 'ユーザーにとって見やすい色や模様のデザイン',
        'reverie-review-like-3': '目的志向のプロトタイピング',
        'reverie-review-next-title': '今後の改善点：',
        'reverie-review-next-1': 'プロトタイプのUI面をさらに洗練させ、ユーザーテストを実施',
        'reverie-review-next-2': 'テキストの色使い、フォント、テキスト量など、情報の見せ方を工夫する',
        'reverie-review-next-3': 'シンプルさを保ちつつ、ゲーミフィケーションなどの要素を加え、ユーザーが「使いたくなる」ようなUI設計',
    },
    en: {
        // Navigation
        'contact': 'Contact',
        
        // Index page
        'intro-text': 'creates user-centered experiences through design, aiming to eliminate daily <b>"hassles"</b>.',
        'reverie-subtitle': 'Sleep can be changed in just 30 minutes',
        'reverie-category': '(UX Hackathon Project)',
        'nextscore-subtitle': 'Predictions can be more exciting',
        'nextscore-category': '(Nandemo Draft Inc.)',
        'resume': 'View Resume',
        
        // Info page - Hero
        'info-hero': 'Hello, I\'m <b>Kosei Hamada</b>. <br>I\'m fascinated by the UX field, which considers how to solve users\' problems, and I study daily to bring smiles to more people!',
        
        // Info page - About Me
        'about-me-1': 'I\'m currently studying UX/UI Design at the University of Melbourne. My design experience has been cultivated through internships at startups and university projects in digital marketing and UX/UI. I value creating practical solutions from a target perspective that make people\'s experiences smoother and more seamless.',
        'about-me-2': 'Leveraging the UX/UI design I\'m learning in my studies, I approach every project with collaboration with clients and all stakeholders, prioritizing problem-solving for the target audience. I\'m fascinated by how logically good design can solve problems, and I always enjoy learning what makes good design and why something is bad design, constantly experimenting and iterating.',
        'about-me-3': 'When I\'m not studying or designing, I enjoy watching sports and anime, and discovering Melbourne\'s wonderful cafes.',
        
        // Info page - Skills
        'skill-ux-design': 'UX Design',
        'skill-ux-desc': 'My strength in UX design lies in consistently conducting user research, problem discovery, information architecture, and improvement proposals, explaining "why it\'s easy to use" from both data and theoretical perspectives, and guiding users to intuitive and comfortable experiences through analytical design skills.',
        'skill-problem-discovery': 'Problem Discovery',
        'skill-problem-desc': 'I observe users and situations to identify essential issues, translate them into concrete improvement strategies based on data and logic, and connect them to results in a reproducible way.',
        'skill-solution': 'Solution Proposal',
        'skill-solution-desc': 'For discovered problems, I propose creative and feasible solutions. From ideation to concept design and prototype creation, I derive solutions that satisfy both business goals and what users actually need.',
        
        // Info page - Experience
        'exp-education-title': 'Bachelor of Design, UX Design Major',
        'exp-education-uni': 'University of Melbourne',
        'exp-education-desc': 'I\'m studying UX/UI design, logically analyzing "good design" and "bad design," and working from user research to design and front-end development.',
        'exp-circula-title': 'UX Designer',
        'exp-circula-company': 'Circula (Student-led Startup)',
        'exp-circula-desc': 'Circula is a campus map app that centralizes and visualizes club activities and event information in real-time, providing students with an experience where they "don\'t miss events they want to attend and can maximize their campus life." I designed over 10 mobile screens and 5 web pages, achieving UX that enables students to efficiently discover and manage events through UI improvements and visibility enhancements based on user research.',
        'exp-draft-title': 'UX Design Intern',
        'exp-draft-company': 'Nandemo Draft Inc.',
        'exp-draft-desc': 'Addressing the industry challenge of being gambling-oriented and having a high barrier for beginners, I focused on creating an experience that casual users can intuitively enjoy. I introduced prediction generation for aspects that can\'t be expressed numerically using ChatGPT and Gemini, and operational automation with Google Apps Script. As a result, I achieved differentiated UX that balances "usability" and "fun," contributing to creating a new viewing experience that fuses sports × technology × entertainment.',
        'exp-location-melbourne': 'Melbourne',
        'exp-location-tokyo': 'Tokyo',
        'exp-period-current': 'Current',
        
        // Project pages - common
        'challenge': 'Challenge',
        'discovery': 'Problem Discovery',
        'research': 'User Research & Analysis',
        'what-is-app': 'What is this app?',
        'visual-design': 'Visual Design',
        'ux-experience': 'UX Experience',
        'future': 'Future Outlook',
        'review': 'Review',
        
        // NextScore project
        'nextscore-hero-subtitle': 'Predictions can be more exciting.',
        'nextscore-hero-desc-1': 'NextScore is an AI sports prediction media designed to be enjoyable for casual users.',
        'nextscore-hero-desc-2': 'AI generates match highlights from a unique perspective in one line, building UX that even prediction beginners can intuitively enjoy.',
        'nextscore-hero-desc-3': 'We propose the value proposition that "sports are interesting even before they start."',
        'nextscore-meta-type': 'Type',
        'nextscore-meta-duration': 'Duration',
        'nextscore-meta-role': 'My Role',
        'nextscore-meta-tools': 'Tools',
        'nextscore-meta-duration-value': '3 weeks ~ Current',
        'nextscore-challenge-title': 'Lack of Sports Prediction Media',
        'nextscore-challenge-desc': 'Against the backdrop of scattered prediction entertainment like public gambling and Winner, and an unorganized media landscape, this project designs a sports prediction experience that everyone can enjoy by delivering AI-powered unique match predictions directly to casual fans.',
        'nextscore-discovery-title': 'Casual Fans Who Can\'t Get Interested in Sports Predictions',
        'nextscore-discovery-desc-1': 'Many people who like watching sports feel that "predictions" are difficult to approach, and existing media tends to focus on stats and past records, making it hard to appeal to beginners and casual sports fans.',
        'nextscore-discovery-desc-2': 'From there, we aimed to create a new prediction experience that doesn\'t rely solely on numerical analysis:',
        'nextscore-discovery-desc-3': 'making predictions exciting',
        'nextscore-discovery-desc-4': '',
        'nextscore-research-title': 'Sports Fans\' Prediction Behavior Patterns',
        'nextscore-research-survey-title': '① Survey Results',
        'nextscore-research-survey-1': 'Basis for Predictions',
        'nextscore-research-survey-1-desc': 'As the basis for making predictions, "intuition" was the most common (42%), followed by "past records" (33%), and "player form" (10%).',
        'nextscore-research-survey-2': 'Motivation for Predictions',
        'nextscore-research-survey-2-desc': 'Most prediction fans around me feel that making predictions and betting increases their enthusiasm for supporting their team.',
        'nextscore-research-interview-title': '② Interview Results',
        'nextscore-research-interview-1': 'What They Like About Other Prediction Sites',
        'nextscore-research-interview-1-desc': 'There was a notable need to "exchange information with people who support the same team."',
        'nextscore-research-interview-2': 'Features Desired in Prediction Sites',
        'nextscore-research-interview-2-desc': 'Many opinions were expressed, such as "wanting information beyond numerical records" and "a platform that eliminates the need for preparation before making predictions."',
        'nextscore-whatis-title': 'A New Form of Predictions, Created by AI',
        'nextscore-whatis-desc': 'Currently, we\'re developing a service for J-League and B-League match predictions available through WINNER, a sports lottery.',
        'nextscore-design-title': 'Design That Visualizes AI Predictions × Excitement',
        'nextscore-design-desc': 'Based on user research and sports app studies, we focused on the following visual elements:',
        'nextscore-design-1-title': '1. Eliminating Monotony',
        'nextscore-design-1-desc': 'Utilizing dynamic elements and gradients to express the dynamism of sports',
        'nextscore-design-2-title': '2. Splash Screen',
        'nextscore-design-2-desc': 'Introducing a dynamic splash screen created by AI at app launch. The animation leaves a strong impression of the brand\'s worldview.',
        'nextscore-design-3-title': '3. Layout & Color Awareness',
        'nextscore-design-3-desc': 'To help casual sports fans enjoy predictions themselves, comment and reaction features are placed in prominent colors and positions.',
        'nextscore-design-4-title': '+α AI Prediction Automation',
        'nextscore-design-4-desc': 'Working toward implementation of automatically generating qualitative predictions for each match without misinformation, while iterating on prompts.',
        'nextscore-ux-title': 'User Flow',
        'nextscore-ux-flow1-title': 'AI Predictions for Pickup Games!',
        'nextscore-ux-flow1-desc': 'Users consider the match score from one prediction selected by NextScore, in addition to head-to-head records. They can visualize winnings after victory with the bet calculator, predict scores in prediction contests within the app, and enjoy discussions with other users.',
        'nextscore-ux-flow2-title': 'Past Predictions & Rankings',
        'nextscore-ux-flow2-desc': 'Analyzes past prediction data and visualizes hit rates and trends. Supports users in improving their prediction skills.',
        'nextscore-future-title': 'Project Reflection and Future Outlook',
        'nextscore-future-desc': 'Over a 4-week development period, we were able to implement a consistent design process from user research to prototype.',
        'nextscore-future-like-title': 'What I Liked & Excelled At:',
        'nextscore-future-like-1': 'Deeply understanding sports fans\' psychology',
        'nextscore-future-like-2': 'Simplifying complex content to target casual users',
        'nextscore-future-like-3': 'AI-powered vibe coding and prediction creation',
        'nextscore-future-next-title': 'What I\'ll Do Next:',
        'nextscore-future-next-1': 'Implement real-time data integration',
        'nextscore-future-next-2': 'Gamification based on users\' prediction scores',
        'nextscore-future-next-3': 'Support for more diverse sports',
        'nextscore-future-next-4': 'Enable sharing predictions on SNS',
        'nextscore-future-next-5': 'Create content for users who want to learn more about predictions through our own media and blog',
        
        // Reverie project
        'reverie-hero-subtitle': 'Sleep can be changed in just 30 minutes',
        'reverie-hero-desc': 'This app advocates breaking away from "forced sleep." By optimizing the 30-minute routine before and after sleep, rather than just ensuring sleep time, it creates high-quality sleep led by users. Through personalized data analysis, it supports you from sleep so you can start each day in the best mood.',
        'reverie-meta-type': 'Type',
        'reverie-meta-duration': 'Duration',
        'reverie-meta-role': 'My Role',
        'reverie-meta-team': 'Team Composition',
        'reverie-meta-duration-value': '3 days',
        'reverie-challenge-title': 'Irregular Sleep Routines Lead to Decreased Productivity',
        'reverie-challenge-desc-1': '"Health and Lifestyle Habits"',
        'reverie-challenge-desc-2': 'Based on this hackathon theme, this app solves the problem of decreased sleep quality caused by irregular lifestyle habits. It aims to improve users\' well-being through routine improvements before and after sleep.',
        'reverie-discovery-title': 'Not Eating Breakfast',
        'reverie-discovery-desc-1': 'When I asked tired-looking team members if they had eaten breakfast, all three hadn\'t. I thought that sleep quality was causing them to not have time to eat breakfast, and that deteriorating sleep quality was causing fatigue and decreased productivity that day.',
        'reverie-discovery-desc-2': 'From there, we set the theme of',
        'reverie-discovery-desc-3': 'improving sleep quality',
        'reverie-discovery-desc-4': '.',
        'reverie-research-title': 'The Importance of Pre- and Post-Sleep Routines',
        'reverie-research-survey-title': '① Survey Results',
        'reverie-research-survey-1': 'Lack of Breakfast Habits',
        'reverie-research-survey-1-desc': 'About 23.1% of respondents answered that they "never eat breakfast." Including "2-4 times per week," this reaches nearly half.',
        'reverie-research-survey-2': 'Reasons for Not Eating Breakfast',
        'reverie-research-survey-2-desc': 'Reasons for not eating breakfast included "being late for class," "waking up late," and "not having time to eat breakfast" - issues related to waking up and time management ranked high.',
        'reverie-research-survey-conclusion': '= We can see that morning routines are disrupted by sleep',
        'reverie-research-sleep-title': '② Sleep Quality Improvement',
        'reverie-research-sleep-1': 'The 30 Minutes Before Sleep Are Critical',
        'reverie-research-sleep-1-desc': 'If you can\'t prepare to relax 30 minutes before, your body and brain maintain a "still awake" state, lowering sleep quality.',
        'reverie-research-sleep-2': 'Orthosomnia',
        'reverie-research-sleep-2-desc': 'This is a condition where people become anxious from paying too much attention to sleep app numbers, making them unable to sleep - it\'s prevalent among sleep app users. Over-relying on the gap between ideal data and your own can lead to stress and insomnia, hindering sleep.',
        'reverie-research-sleep-conclusion': '= Pre-sleep routines and self-management are closely related to sleep',
        'reverie-whatis-title': 'Optimizing the 30-Minute Routine Before and After Sleep',
        'reverie-design-title': 'Minimal UI with Color Awareness',
        'reverie-design-desc': 'Based on user research and sleep-related studies, we focused on the following visual elements:',
        'reverie-design-1-title': '1. Minimal Design',
        'reverie-design-1-desc': 'Since it\'s only used before and after sleep, we focused on simple and intuitive design',
        'reverie-design-2-title': '2. Morning and Night Color Usage',
        'reverie-design-2-desc': 'Warm colors like orange before sleep and cool colors like teal when waking are said to least harm sleep quality, so we used colors accordingly',
        'reverie-design-3-title': '3. Unified Buttons',
        'reverie-design-3-desc': 'Color coding and highlights that make it intuitive to know where to press',
        'reverie-ux-title': 'User Flow',
        'reverie-ux-flow1-title': '🛌 Pre-Sleep Routine',
        'reverie-ux-flow1-desc': 'The app prompts activation through notifications and widgets when the user is preparing to sleep (about 30 minutes before scheduled bedtime).',
        'reverie-ux-flow1-note': '(Please close the Flows tab to view)',
        'reverie-ux-flow2-title': '☀️ Post-Wake Routine',
        'reverie-ux-flow2-desc': 'A step-based alarm activates, and users check the ToDo list created the previous night and set tonight\'s bedtime.',
        'reverie-ux-flow2-note': '(Please close the Flows tab to view)',
        'reverie-ux-flow3-title': '💡 Onboarding',
        'reverie-ux-flow3-desc': 'By easily learning user information, we understand demographics and provide sleep suggestions tailored to each user.',
        'reverie-ux-flow3-note': '(Please close the Flows tab to view)',
        'reverie-review-title': 'Project Reflection and Future Outlook',
        'reverie-review-desc': 'Within the limited time of a 3-day hackathon, we were able to implement a consistent design process from user research to prototype.',
        'reverie-review-like-title': 'What I Liked & Excelled At:',
        'reverie-review-like-1': 'Problem discovery and solution discovery & development',
        'reverie-review-like-2': 'Designing colors and patterns that are easy for users to see',
        'reverie-review-like-3': 'Purpose-driven prototyping',
        'reverie-review-next-title': 'Future Improvements:',
        'reverie-review-next-1': 'Further refine the prototype\'s UI and conduct user testing',
        'reverie-review-next-2': 'Improve how information is presented through text colors, fonts, text volume, etc.',
        'reverie-review-next-3': 'Maintain simplicity while adding elements like gamification to create UI that makes users "want to use it"',
    }
};

// Get current language from localStorage or default to Japanese
let currentLang = localStorage.getItem('portfolio-lang') || 'ja';

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    updatePageContent();
    updateLangToggle();
}

// Function to update page content
function updatePageContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.textContent = translations[currentLang][key];
            } else {
                element.innerHTML = translations[currentLang][key];
            }
        }
    });
}

// Function to update language toggle button
function updateLangToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const langText = langToggle.querySelector('.lang-text');
        if (langText) {
            // Show current language: "日本語" when Japanese, "EN" when English
            langText.textContent = currentLang === 'ja' ? '日本語' : 'EN';
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateLangToggle();
    
    // Add click event to language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'ja' ? 'en' : 'ja';
            setLanguage(newLang);
        });
    }
});
