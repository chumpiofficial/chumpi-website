const contract = ""; // Add the final CHUMPI contract address here before launch.

const contractDisplay = contract || "COMING SOON";
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contractAddress").textContent = contractDisplay;

const copyButton = document.getElementById("copyContract");
copyButton.addEventListener("click", async () => {
  if (!contract) return;
  await navigator.clipboard.writeText(contract);
  const old = copyButton.textContent;
  copyButton.textContent = "COPIED";
  setTimeout(() => copyButton.textContent = old, 1200);
});

// Uniswap opens on Robinhood Chain with ETH as the top/input token.
// Once the CHUMPI contract is added above, it is automatically placed in the bottom/output field.
const uniswapButton = document.getElementById("uniswapButton");
const uniswapUrl = contract
  ? `https://app.uniswap.org/swap?chain=robinhood&inputCurrency=ETH&outputCurrency=${encodeURIComponent(contract)}`
  : "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=ETH";
uniswapButton.href = uniswapUrl;


// Hero headline letter-build animation: repeats every 15 seconds.
// The layout, font size and colors remain unchanged; only individual letters animate.
const heroHeadline = document.getElementById("heroHeadline");
if (heroHeadline) {
  const words = [...heroHeadline.querySelectorAll(".headline-word")];
  words.forEach(word => {
    const value = word.textContent;
    word.textContent = "";
    [...value].forEach(char => {
      const span = document.createElement("span");
      span.className = "headline-char";
      span.textContent = char;
      word.appendChild(span);
    });
  });

  const chars = [...heroHeadline.querySelectorAll(".headline-char")];

  function buildHeadline() {
    chars.forEach((char, index) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 8 + Math.random() * 34;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance * 0.7;
      const rotate = (Math.random() - 0.5) * 80;
      char.style.transition = "none";
      char.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${0.72 + Math.random() * 0.28})`;
      char.style.opacity = "0.15";
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        chars.forEach((char, index) => {
          char.style.transition = `transform 900ms cubic-bezier(.2,.75,.2,1) ${index * 28}ms, opacity 450ms ease ${index * 28}ms`;
          char.style.transform = "translate(0, 0) rotate(0deg) scale(1)";
          char.style.opacity = "1";
        });
      });
    });
  }

  buildHeadline();
  setInterval(buildHeadline, 15000);
}
