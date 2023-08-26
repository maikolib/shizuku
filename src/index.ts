(async () => {
  const version = '0.0.3';
  if (window.MaikoScriptShizukuLoaded !== true) {
    while (!window.bcModSdk) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    window.MaikoScriptShizukuLoaded = true;
    console.log("Shizuku loaded");

    await import('./entry');

    while (ServerBeep) {
      // This means the BCX extension is just loaded, we should wait for the message disapear.
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    ServerBeep = {
      Message: `Shizuku Loaded, Version: ${version}`,
      Timer: CommonTime() + 3000,
    }
  } else {
    console.log("Shizuku already loaded");
  }
})()
