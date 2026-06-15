/* eslint-disable no-console -- This startup prelude intentionally wraps console methods before Foundry modules emit known noisy compatibility warnings. */
/* global console */

(function () {
  const patchedConsoleMarker = "__wfrp4eCustomizerAppsFilteredConsoleMethod";
  const migrateDataReturnWarning =
    "has a migrateData implementation that does not return a value. Such implementations will be unsupported in a future version.";
  const filteredConsoleMethods = ["error", "warn"];

  function installCompatibilityWarningFilter() {
    for (const methodName of filteredConsoleMethods) {
      patchConsoleMethod(methodName);
    }
  }

  function patchConsoleMethod(methodName) {
    const originalMethod = console[methodName];

    if (typeof originalMethod !== "function" || isPatchedConsoleMethod(originalMethod)) {
      return;
    }

    const filteredMethod = function (...args) {
      if (isSuppressedCompatibilityWarning(args)) {
        return;
      }

      originalMethod.apply(this, args);
    };

    Object.defineProperty(filteredMethod, patchedConsoleMarker, {
      value: true,
    });

    console[methodName] = filteredMethod;
  }

  function isPatchedConsoleMethod(method) {
    return Boolean(method[patchedConsoleMarker]);
  }

  function isSuppressedCompatibilityWarning(args) {
    return args.some((arg) => {
      const message = readWarningMessage(arg);

      return isMigrateDataReturnWarning(message);
    });
  }

  function readWarningMessage(value) {
    if (typeof value === "string") {
      return value;
    }

    if (value instanceof Error) {
      return value.message;
    }

    if (value && typeof value === "object" && typeof value.message === "string") {
      return value.message;
    }

    return "";
  }

  function isMigrateDataReturnWarning(message) {
    return (
      /\b[A-Z][\w$]*Model has a migrateData implementation/.test(message) &&
      message.includes(migrateDataReturnWarning)
    );
  }

  installCompatibilityWarningFilter();
})();
