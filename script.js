(function () {
  const config = window.SITE_CONFIG;

  if (!config) {
    throw new Error("SITE_CONFIG is missing");
  }

  document.querySelectorAll("[data-site-name]").forEach((element) => {
    element.textContent = config.siteName;
  });

  document.querySelectorAll("[data-tagline]").forEach((element) => {
    element.textContent = config.tagline;
  });

  document.querySelectorAll("[data-primary-link]").forEach((element) => {
    element.href = config.primaryUrl;
  });

  document.querySelectorAll("[data-creator-link]").forEach((element) => {
    element.href = config.creatorUrl;
  });

  const statsList = document.querySelector("#stats-list");
  config.stats.forEach((stat) => {
    const item = document.createElement("div");
    item.className = "stat";

    const value = document.createElement("strong");
    value.textContent = stat.value;

    const label = document.createElement("span");
    label.textContent = stat.label;

    item.append(value, label);
    statsList.append(item);
  });

  const entranceList = document.querySelector("#entrance-list");
  config.entrances.forEach((entrance, index) => {
    const link = document.createElement("a");
    link.className = "entrance";
    link.href = entrance.url;
    link.target = "_blank";
    link.rel = "noreferrer";

    const number = document.createElement("span");
    number.className = "entrance-index";
    number.textContent = String(index + 1).padStart(2, "0");

    const copy = document.createElement("span");
    copy.className = "entrance-copy";

    const name = document.createElement("strong");
    name.textContent = entrance.name;

    const description = document.createElement("small");
    description.textContent = entrance.description;

    copy.append(name, description);

    const status = document.createElement("span");
    status.className = "entrance-status";
    status.innerHTML = '<span class="status-dot" aria-hidden="true"></span>';
    status.append(document.createTextNode(entrance.status));

    const arrow = document.createElement("span");
    arrow.className = "entrance-arrow";
    arrow.innerHTML = '<i data-lucide="arrow-up-right" aria-hidden="true"></i>';

    link.append(number, copy, status, arrow);
    entranceList.append(link);
  });

  document.querySelector("#notice-text").textContent = config.notice.text;
  const noticeDate = document.querySelector("#notice-date");
  noticeDate.textContent = config.notice.date;
  noticeDate.dateTime = config.notice.date;
  document.querySelector("#year").textContent = new Date().getFullYear();

  if (window.lucide) {
    window.lucide.createIcons();
  }
})();
