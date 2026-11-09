// ==========================================
// FUNSTOCK 官网 - 全局自动化组件 (V8 终极死板防错版)
// ==========================================
(function() {
  // 1. 获取当前文件名
  const path = window.location.pathname;
  let page = path.split("/").pop();
  if (!page || page === '') page = "index.html";

  // 2. 判断当前语种
  const isEn = path.includes('/en/');
  const isHans = path.includes('/zh-hans/');
  
  // 3. 资源路径（加载图片、CSS必须用 ../）
  const prefix = (isEn || isHans) ? '../' : '';

  // 4. 内部导航前缀（你在哪个目录，就点哪个目录的导航）
  const navPrefix = isEn ? 'en/' : (isHans ? 'zh-hans/' : '');

  // 5. 语言切换绝对路径（死逻辑，彻底避免路径叠加）
  const pathZh = `/${page}`;                   
  const pathHans = `/zh-hans/${page}`;         
  const pathEn = `/en/${page}`;                

  // 6. 字典
  const navText = {
    zh: { home: "首頁", serv: "核心服務", prod: "產品中心", ec: "跨境電商", proc: "服務流程", abt: "關於趣倉", cont: "聯絡我們", langB: "繁", langS: "简" },
    hans: { home: "首页", serv: "核心服务", prod: "产品中心", ec: "跨境电商", proc: "服务流程", abt: "关于趣仓", cont: "联络我们", langB: "繁", langS: "简" },
    en: { home: "Home", serv: "Services", prod: "Products", ec: "E-commerce", proc: "Process", abt: "About Us", cont: "Contact", langB: "繁", langS: "简" }
  };
  const t = isEn ? navText.en : (isHans ? navText.hans : navText.zh);

  // 7. 生成 Header
  const headerHTML = `
  <header class="custom-nav">
    <div class="nav-container">
      <a href="${prefix}index.html"><img src="${prefix}assets/logo-horizontal.svg" alt="FUNSTOCK" style="height: 40px;"></a>
      <button class="menu-toggle" onclick="document.querySelector('.nav-links').classList.toggle('show')">☰</button>
      <div class="nav-links">
        <!-- 内部导航使用 navPrefix，你在哪个频道就点哪个频道 -->
        <a href="${navPrefix}index.html" class="${page === 'index.html' ? 'active' : ''}">${t.home}</a>
        <a href="${navPrefix}services.html" class="${page === 'services.html' ? 'active' : ''}">${t.serv}</a>
        <a href="${navPrefix}products.html" class="${page === 'products.html' ? 'active' : ''}">${t.prod}</a>
        <a href="${navPrefix}ecommerce.html" class="${page === 'ecommerce.html' ? 'active' : ''}">${t.ec}</a>
        <a href="${navPrefix}process.html" class="${page === 'process.html' ? 'active' : ''}">${t.proc}</a>
        <a href="${navPrefix}about.html" class="${page === 'about.html' ? 'active' : ''}">${t.abt}</a>
        <a href="${navPrefix}contact.html" class="${page === 'contact.html' ? 'active' : ''}">${t.cont}</a>
        
        <!-- 语言切换使用绝对路径（如 /en/services.html），绝不会叠加 -->
        <div class="lang-switch">
          <a href="${pathZh}" class="${!isEn && !isHans ? 'active' : ''}">${t.langB}</a>
          <a href="${pathHans}" class="${isHans ? 'active' : ''}">${t.langS}</a>
          <a href="${pathEn}" class="${isEn ? 'active' : ''}">EN</a>
        </div>
      </div>
    </div>
  </header>
  `;

  // 8. 生成 Footer
  const footerHTML = `
  <footer class="bg-navy text-slate-400 py-12 border-t border-white/10 mt-auto">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
      <img src="${prefix}assets/logo-horizontal-white.svg" alt="FUNSTOCK" class="h-10">
      <div class="text-center md:text-right space-y-1 text-xs">
        <p>Flat 4(20), 4/F, Block D, Tuen Mun Industrial Centre, No.2 San Ping Circuit, Tuen Mun, New Territories.</p>
        <p>© 2026 FUNSTOCK LIMITED. All rights reserved. · <a href="mailto:Funstockhk@gmail.com" class="text-teal-300 hover:text-white transition">Funstockhk@gmail.com</a></p>
      </div>
    </div>
  </footer>
  `;

  // 9. 注入
  document.addEventListener('DOMContentLoaded', function() {
    const headerDiv = document.getElementById('global-header');
    const footerDiv = document.getElementById('global-footer');
    if (headerDiv) headerDiv.innerHTML = headerHTML;
    if (footerDiv) footerDiv.innerHTML = footerHTML;
  });
})();
