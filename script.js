document.addEventListener("DOMContentLoaded", function () {
    const originalText = document.getElementById("originalText");
    const wordsToRedact = document.getElementById("wordsToRedact");
    const redactButton = document.getElementById("redactButton");
    const redactedText = document.getElementById("redactedText");

    redactButton.addEventListener("click", function () {
        const text = originalText.value;
        const words = wordsToRedact.value.split(" ");

        const redacted = redactText(text, words);
        redactedText.textContent = redacted;
    });

    function redactText(text, wordsToRedact) {
        const words = text.split(" ");
        for (const word of wordsToRedact) {
            if (word.trim() !== "") {
                const redactedWord = "*".repeat(word.length);
                text = text.replace(new RegExp(word, 'g'), redactedWord);
            }
        }
        return text;
    }
});