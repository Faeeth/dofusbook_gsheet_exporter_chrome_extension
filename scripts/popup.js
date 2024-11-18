function updatePopup() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id;

    chrome.scripting.executeScript(
      {
        target: { tabId: activeTabId },
        func: () => {
          // Fonction sécurisée pour sélectionner des éléments
          function safeSelector(selector, fallback = "NaN") {
            try {
              const element = document.querySelector(selector);
              return element ? element.textContent || element.src : fallback;
            } catch {
              return fallback;
            }
          }

          // Bloc 1 : Stats principales
          const block1Stats = [
            { label: "PdV", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(1) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(1) > div > span") },
            { label: "PP", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(2) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(2) > div > span") },
            { label: "PA", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(3) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(3) > div > span") },
            { label: "PM", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(4) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(4) > div > span") },
            { label: "PO", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(5) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div.col-12.pr-0 > div:nth-child(5) > div > span") },
            { label: "Initiative", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(1) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(1) > div > span") },
            { label: "Critique", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(2) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(2) > div > span") },
            { label: "Invocation", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(3) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(3) > div > span") },
            { label: "Soin", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(4) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.px-6.pb-8.content > div > div:nth-child(2) > div:nth-child(4) > div > span") }
          ];

          // Bloc 2 : Stats secondaires
          const block2Stats = [
            { label: "Vitalité", value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(2) > div > span"), selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(2) > img"), baseSelector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2)") },
            { label: "Sagesse", value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(3) > div > span"), selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(3) > img"), baseSelector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3)") },
            { label: "Force", value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(4) > div > span"), selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(4) > img"), baseSelector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(4)") },
            { label: "Intelligence", value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(5) > div > span"), selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(5) > img"), baseSelector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(5)") },
            { label: "Chance", value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(6) > div > span"), selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(6) > img"), baseSelector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(6)") },
            { label: "Agilité", value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(7) > div > span"), selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(7) > img"), baseSelector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(7)") },
            { label: "Puissance", value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(8) > div > span"), selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.mb-8.widget.pt-2 > div.pt-4.px-8.pb-8.content > div > div:nth-child(1) > div:nth-child(8) > img"), baseSelector: "0" }
          ];

          // Bloc 3 : Autres stats
          const block3Stats = [
            { label: "Fuite", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(1) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(1) > div > span") },
            { label: "Esq. PA", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > div > span") },
            { label: "Esq. PM", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(3) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(3) > div > span") },
            { label: "Pods", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(4) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(4) > div > span") },
            { label: "Tacle", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div > span") },
            { label: "Ret. PA", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div > span") },
            { label: "Ret. PM", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(3) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(3) > div > span") },
            { label: "Niv. Stuff", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(4) > img"), value: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div.widget.u-flex1.pt-2 > div.pt-4.px-8.pb-8.content > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(4) > span.number.small") }
          ];

          const blockStuff  = [
            { id: "item-amulette", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(1) > div:nth-child(1) > div > div > div > img") },
            { id: "item-bouclier", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(1) > div:nth-child(2) > div > div > div > img") },
            { id: "item-anneau-gauche", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(1) > div:nth-child(3) > div > div > div > img") },
            { id: "item-ceinture", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(1) > div:nth-child(4) > div > div > div > img") },
            { id: "item-bottes", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(1) > div:nth-child(5) > div > div > div > img") },
            { id: "item-chapeau", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(3) > div:nth-child(1) > div > div > div > img") },
            { id: "item-cac", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(3) > div:nth-child(2) > div > div > div > img") },
            { id: "item-anneau-droit", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(3) > div:nth-child(3) > div > div > div > img") },
            { id: "item-cape", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(3) > div:nth-child(4) > div > div > div > img") },
            { id: "item-monture", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div:nth-child(3) > div:nth-child(5) > div > div > div > img") },
            { id: "item-extra-1", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-bottom > div:nth-child(1) > div > div > div > img") },
            { id: "item-extra-2", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-bottom > div:nth-child(2) > div > div > div > img") },
            { id: "item-extra-3", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-bottom > div:nth-child(3) > div > div > div > img") },
            { id: "item-extra-4", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-bottom > div:nth-child(4) > div > div > div > img") },
            { id: "item-extra-5", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-bottom > div:nth-child(5) > div > div > div > img") },
            { id: "item-extra-6", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-bottom > div:nth-child(6) > div > div > div > img") },
            { id: "img-character", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.pt-4.px-8.pb-8.content > div > div.items-top > div.u-flex1 > div:nth-child(1) > div > div > img") }
          ]
          
          const OthersTextInfos = [
            { id: "stuff-name", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-10.mb-8 > div.stats-main > div:nth-child(1) > div.align-items-center.title-wrapper.row.mx-0.py-8 > div > div > div > div > div > span") },
            { id: "stuff-level", selector: safeSelector("#app > div > div > div.py-8 > div:nth-child(4) > div.row.justify-content-3xl-center > div.col-24.col-xl.col-3xl-13 > div:nth-child(1) > div.col-14.mb-8 > div > div.align-items-center.title-wrapper.row.mx-0.py-8 > div.px-8.col > div > div > div > div > span") }
          ]


          // Retourner les résultats
          return { block1Stats, block2Stats, block3Stats, blockStuff, OthersTextInfos };
        }
      },
      (results) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          return;
        }

        const { block1Stats, block2Stats, block3Stats, blockStuff, OthersTextInfos} = results[0].result;

        // Mettre à jour les stats principales (Bloc 1)
        const block1 = document.getElementById("characteristics-block-1");
        block1Stats.forEach((stat) => {
          block1.innerHTML += `
            <div class="stat-line">
              <span class="stat-value">${stat.value}</span>
              <img src="${stat.selector}">
              <span>${stat.label}</span>
            </div>`;
        });

        // Mettre à jour les stats secondaires (Bloc 2)
        const block2 = document.getElementById("characteristics-block-2");
        block2Stats.forEach((stat) => {
          const baseValue =
            stat.baseSelector && parseInt(stat.baseSelector) > 0
              ? `<span class="stat-base">(BASE : ${stat.baseSelector})</span>`
              : "";
          block2.innerHTML += `
            <div class="stat-line">
              <span class="stat-value">${stat.value}</span>
              <img src="${stat.selector}">
              <span>${stat.label}</span>
              ${baseValue}
            </div>`;
        });

        // Mettre à jour les autres stats (Bloc 3)
        const block3 = document.getElementById("characteristics-block-3");
        block3Stats.forEach((stat) => {
          block3.innerHTML += `
            <div class="stat-line">
              <span class="stat-value">${stat.value}</span>
              <img src="${stat.selector}">
              <span>${stat.label}</span>
            </div>`;
        });
        
        // A AJOUTER LES AUTRES STATS (damage / res)

        // Mettre à jour les items et l'image du perso
        blockStuff.forEach((item) => {
          let element = document.getElementById(item.id);
          element.src = item.selector;
        });

        OthersTextInfos.forEach((item) => {
          let element = document.getElementById(item.id);
          element.innerText = item.selector;
        });

      }
    );
  });
}

// Exécuter la mise à jour
updatePopup();