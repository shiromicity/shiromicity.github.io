// script.js - 城見市カウントダウン処理

// 目標となるリリース日を設定 (2026年7月20日 15:00:00)
const targetDate = new Date("July 20, 2026 15:00:00").getTime();

// 数字を更新し、変更があった場合のみアニメーションを再生する関数
function updateDigit(id, newValue) {
    const element = document.getElementById(id);
    const formattedValue = String(newValue).padStart(2, '0');
    
    // 現在表示されている数字と新しい数字が違う場合のみ実行
    if (element && element.innerText !== formattedValue) {
        // アニメーションをリセット
        element.classList.remove("roll-up");
        void element.offsetWidth; // リフローを強制してアニメーションを再起動可能にする
        
        // 値を更新してアニメーションクラスを付与
        element.innerText = formattedValue;
        element.classList.add("roll-up");
    }
}

const countdownFunction = setInterval(function() {
    // 現在の時刻を取得
    const now = new Date().getTime();
    
    // 残り時間を計算 (ミリ秒)
    const distance = targetDate - now;
    
    if (distance < 0) {
        clearInterval(countdownFunction);
        updateDigit("days", 0);
        updateDigit("hours", 0);
        updateDigit("minutes", 0);
        updateDigit("seconds", 0);
        return;
    }
    
    // 日・時間・分・秒に変換
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // アニメーション付きでHTMLを更新
    updateDigit("days", days);
    updateDigit("hours", hours);
    updateDigit("minutes", minutes);
    updateDigit("seconds", seconds);
    
}, 1000); // 1000ミリ秒（1秒）ごとに実行
