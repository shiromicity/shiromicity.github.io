// script.js - 城見市カウントダウン処理

// 目標となるリリース日を設定 (2026年7月28日 15:00:00)
const targetDate = new Date("July 28, 2026 15:00:00").getTime();

const countdownFunction = setInterval(function() {
    // 現在の時刻を取得
    const now = new Date().getTime();
    
    // 残り時間を計算 (ミリ秒)
    const distance = targetDate - now;
    
    // 日・時間・分・秒に変換
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // HTMLの数字を書き換える (1桁の場合は頭に0をつける)
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    
    // もし目標時間を過ぎたらタイマーを止めて00にする
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
    }
}, 1000); // 1000ミリ秒（1秒）ごとに実行
