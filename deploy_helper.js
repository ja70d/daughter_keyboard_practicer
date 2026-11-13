// 在 https://dash.cloudflare.com 页面的 DevTools 控制台粘贴此脚本并执行
// 会自动从 localhost:8765 拉取文件并部署到 Cloudflare Pages
(async () => {
  const accountId = (location.href.match(/dash\.cloudflare\.com\/([a-f0-9]{32})/) || [])[1];
  const projectName = 'keyboard-game2';
  const base = 'http://localhost:8765';

  console.log('Account ID:', accountId);

  // 1. 读取本地文件
  const [html, js, css] = await Promise.all([
    fetch(base + '/index.html').then(r => r.text()),
    fetch(base + '/game.js').then(r => r.text()),
    fetch(base + '/style.css').then(r => r.text()),
  ]);
  console.log('Files loaded:', html.length, js.length, css.length);

  // 2. 创建 deployment
  const depResp = await fetch(`/client/v4/accounts/${accountId}/pages/projects/${projectName}/deployments`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ branch: 'main' })
  });
  const depData = await depResp.json();
  console.log('Deployment response:', depData);

  if (depData.errors && depData.errors.length) {
    console.error('Error creating deployment:', depData.errors);
    return;
  }

  const uploadUrl = depData.result.upload_url || depData.result.upload?.url;
  const deploymentId = depData.result.id;
  console.log('Upload URL:', uploadUrl);
  console.log('Deployment ID:', deploymentId);

  // 3. 上传文件
  const form = new FormData();
  form.append('index.html', new Blob([html], { type: 'text/html' }), 'index.html');
  form.append('game.js', new Blob([js], { type: 'application/javascript' }), 'game.js');
  form.append('style.css', new Blob([css], { type: 'text/css' }), 'style.css');

  const uploadResp = await fetch(uploadUrl, {
    method: 'PUT',
    body: form
  });
  console.log('Upload status:', uploadResp.status);

  // 4. 等待并查看部署状态
  setTimeout(async () => {
    const statusResp = await fetch(`/client/v4/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}`, {
      credentials: 'include'
    });
    const statusData = await statusResp.json();
    console.log('Deployment status:', statusData.result?.status);
    console.log('✅ Done! Visit:', `https://${projectName}.pages.dev`);
    alert('部署完成！访问 https://' + projectName + '.pages.dev');
  }, 3000);
})();
