document.addEventListener('DOMContentLoaded', () => {

        // --- DATA STORE ---
        // All content for the website is stored here.
        const pageData = {
            story: {
                title: "星々の物語",
                image: "https://static.wikia.nocookie.net/capcomdatabase/images/3/3e/StarForce3Art.png", // Image URL for Story
                content: `
                    <p>『流星のロックマン3』は、前作から数ヶ月後の物語です。 「メテオG」と名付けられた巨大な隕石が、地球との衝突コース上にあります。この隕石の内部には、巨大な「ノイズ」の源と、クリムゾンという名の強力で邪悪な電波体が存在します。</p>
                    <p>サテラポリスとその先進部門であるWAZA（ワザ）は、隕石を止めるために活動しています。星河スバルと彼のパートナー、ウォーロック（ロックマンとして）は、ノイズによって変化したウイルスや不正なウィザードとの戦いの中心にいることに気づきます。スバルは、クリムゾンに立ち向かい、地球を壊滅から救うためにノイズの力を習得しなければなりません。</p>
                `
            },
            characters: {
                title: "主な登場人物",
                image: "https://wallpapercave.com/wp/H4GpEiP.jpg", // Image URL for Characters
                content: `
                    <ul>
                        <li><b>星河スバル & ウォーロック:</b> 主人公。AM星人ウォーロックと電波変換することでヒーロー「ロックマン」になる心優しい少年。</li>
                        <li><b>響ミソラ & ハープ:</b> 人気ポップアイドルであり、スバルの親しい友人。ハープ・ノートに変身できる。</li>
                        <li><b>白金ルナ & ヴァルゴ:</b> スバルにもっと社交的になるよう働きかけることが多いクラス委員長。後にクイーン・オヒュカスに変身できる。</li>
                        <li><b>牛島ゴン太 & タウルス:</b> 力持ちで優しい大男で、スバルの忠実な友人の一人。タウルス・ファイアに変身する。</li>
                        <li><b>ソロ:</b> 失われたムー大陸の最後の生き残り。ロックマンの強力で孤高のライバルであり、ブライに変身できる。</li>
                        <li><b>最小院キザマロ & ペディア:</b> 何でも一番に知ることに執着しているスバルの物知りなクラスメート。</li>
                        <li><b>暁シドウ & アシッド:</b> WAZAのエリートメンバーで、アシッド・エースに電波変換できる。当初はスバルを信用していない。</li>
                    </ul>
                `
            },
            gameplay: {
                title: "ゲームプレイとノイズチェンジ",
                image: "https://static.wikitide.net/megamanwiki/b/b6/Cygnus_Noise_Meteor_Light_Barrage.png", // Image URL for Gameplay
                content: `
                    <p>本作は、前作から引き継がれたスピーディーな3x5マスのバトルシステムを維持しています。最も重要な新機能は「ノイズチェンジ」システムです。ロックマンが戦うにつれて、彼のノイズ率が増加します。</p>
                    <p>ノイズ率が50%になると、ランダムでノイズチェンジが発生し、倒したFM星人のボスのデータと融合します。これにより、新たな属性能力、ユニークなチャージショット、そして強力な「ノイズフォースビッグバン」攻撃が利用可能になります。10種類以上の異なるノイズ形態を発見することができ、戦略的な深みとリプレイ性を大幅に高めています。</p>
                `
            },
            versions: {
                title: "ブラックエース & レッドジョーカー",
                image: "https://upload.wikimedia.org/wikipedia/fr/6/67/Mega_Man_Star_Force_3_Logo.png", // Image URL for Versions
                content: `
                    <p>多くのロックマンシリーズと同様に、『流星のロックマン3』は<b>ブラックエース</b>と<b>レッドジョーカー</b>の2つのバージョンでリリースされました。</p>
                    <ul>
                        <li>各バージョンには、専用のギガクラスバトルカードが用意されています。</li>
                        <li>ロックマンが達成できる最終変身形態は、各ゲームで異なります。『ブラックエース』では、迅速かつ精密なブラックエース形態になることができます。『レッドジョーカー』では、破壊的で強力なレッドジョーカー形態にアクセスできます。</li>
                        <li>特定のノイズチェンジ形態も各バージョン専用であり、プレイヤーがライブラリを完成させるために友達と交換や対戦をすることを奨励しています。</li>
                    </ul>
                `
            }
        };

        // --- ELEMENT SELECTORS ---
        const contentArea = document.getElementById('content-area');
        const navLinks = document.querySelectorAll('.nav-link');
        const clockElement = document.getElementById('clock');
        const dateDayElement = document.getElementById('date-day');

        // --- FUNCTIONS ---

        /**
         * Switches the content displayed in the main area.
         * @param {string} pageKey - The key corresponding to the data in pageData.
         */
        function switchContent(pageKey) {
            const data = pageData[pageKey];
            if (!data) return;

            // Add a class to fade out the content
            contentArea.classList.add('fade-out');

            // Wait for the fade-out transition to finish before changing the content
            setTimeout(() => {
                const html = `
                    <div class="content-wrapper">
                        <div class="content-image">
                            <img src="${data.image}" alt="${data.title}">
                        </div>
                        <div class="content-text">
                            <h2>${data.title}</h2>
                            ${data.content}
                        </div>
                    </div>
                `;
                contentArea.innerHTML = html;
                // Remove the class to fade the new content in
                contentArea.classList.remove('fade-out');
            }, 300); // This duration should match the CSS transition duration
        }

        /**
         * Updates the clock and date display.
         */
        function updateClock() {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            
            const timeString = now.toLocaleTimeString('ja-JP', timeOptions);
            const dateDayString = now.toLocaleDateString('ja-JP', dateOptions);

            clockElement.textContent = timeString;
            dateDayElement.textContent = dateDayString;
        }

        // --- EVENT LISTENERS & INITIALIZATION ---

        // Set up navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior

                // Update active class
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Switch content
                const page = link.getAttribute('data-page');
                switchContent(page);
            });
        });

        // --- INITIAL PAGE LOAD ---
        
        // Load the default page content ('story')
        switchContent('story');

        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

    });