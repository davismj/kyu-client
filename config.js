System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 2,
    "optional": [
      "runtime",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-bundle": [
      "npm:kyu-core@0.1.0/dist/main.js",
      "npm:kyu-core@0.1.0.js",
      "npm:core-js@0.9.18/modules/$.fw.js",
      "npm:core-js@0.9.18/modules/$.dom-create.js",
      "npm:core-js@0.9.18/modules/$.shared.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.array-includes.js",
      "npm:core-js@0.9.18/modules/$.replacer.js",
      "npm:core-js@0.9.18/modules/$.throws.js",
      "npm:core-js@0.9.18/modules/$.keyof.js",
      "npm:core-js@0.9.18/modules/$.enum-keys.js",
      "npm:core-js@0.9.18/modules/$.get-names.js",
      "npm:core-js@0.9.18/modules/$.assign.js",
      "npm:core-js@0.9.18/modules/$.same.js",
      "npm:core-js@0.9.18/modules/$.set-proto.js",
      "npm:core-js@0.9.18/modules/es6.object.to-string.js",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives.js",
      "npm:core-js@0.9.18/modules/es6.function.name.js",
      "npm:core-js@0.9.18/modules/es6.function.has-instance.js",
      "npm:core-js@0.9.18/modules/es6.number.constructor.js",
      "npm:core-js@0.9.18/modules/es6.number.statics.js",
      "npm:core-js@0.9.18/modules/es6.math.js",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point.js",
      "npm:core-js@0.9.18/modules/es6.string.raw.js",
      "npm:core-js@0.9.18/modules/$.string-at.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-define.js",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at.js",
      "npm:core-js@0.9.18/modules/es6.string.ends-with.js",
      "npm:core-js@0.9.18/modules/es6.string.includes.js",
      "npm:core-js@0.9.18/modules/$.string-repeat.js",
      "npm:core-js@0.9.18/modules/es6.string.starts-with.js",
      "npm:core-js@0.9.18/modules/$.iter-call.js",
      "npm:core-js@0.9.18/modules/$.iter-detect.js",
      "npm:core-js@0.9.18/modules/es6.array.of.js",
      "npm:core-js@0.9.18/modules/$.unscope.js",
      "npm:core-js@0.9.18/modules/$.species.js",
      "npm:core-js@0.9.18/modules/es6.array.copy-within.js",
      "npm:core-js@0.9.18/modules/es6.array.fill.js",
      "npm:core-js@0.9.18/modules/es6.array.find.js",
      "npm:core-js@0.9.18/modules/es6.array.find-index.js",
      "npm:core-js@0.9.18/modules/es6.regexp.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:process@0.10.1/browser.js",
      "npm:core-js@0.9.18/modules/$.mix.js",
      "npm:core-js@0.9.18/modules/$.collection-strong.js",
      "npm:core-js@0.9.18/modules/$.collection.js",
      "npm:core-js@0.9.18/modules/es6.set.js",
      "npm:core-js@0.9.18/modules/$.collection-weak.js",
      "npm:core-js@0.9.18/modules/es6.weak-set.js",
      "npm:core-js@0.9.18/modules/$.own-keys.js",
      "npm:core-js@0.9.18/modules/es7.array.includes.js",
      "npm:core-js@0.9.18/modules/es7.string.at.js",
      "npm:core-js@0.9.18/modules/$.string-pad.js",
      "npm:core-js@0.9.18/modules/es7.string.rpad.js",
      "npm:core-js@0.9.18/modules/es7.regexp.escape.js",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@0.9.18/modules/es7.object.to-array.js",
      "npm:core-js@0.9.18/modules/$.collection-to-json.js",
      "npm:core-js@0.9.18/modules/es7.set.to-json.js",
      "npm:core-js@0.9.18/modules/js.array.statics.js",
      "npm:core-js@0.9.18/modules/$.partial.js",
      "npm:core-js@0.9.18/modules/web.immediate.js",
      "npm:core-js@0.9.18/modules/web.dom.iterable.js",
      "npm:core-js@0.9.18/modules/core.dict.js",
      "npm:core-js@0.9.18/modules/core.iter-helpers.js",
      "npm:core-js@0.9.18/modules/core.$for.js",
      "npm:core-js@0.9.18/modules/core.delay.js",
      "npm:core-js@0.9.18/modules/core.function.part.js",
      "npm:core-js@0.9.18/modules/core.object.js",
      "npm:core-js@0.9.18/modules/core.array.turn.js",
      "npm:core-js@0.9.18/modules/core.number.iterator.js",
      "npm:core-js@0.9.18/modules/core.number.math.js",
      "npm:core-js@0.9.18/modules/core.string.escape-html.js",
      "npm:core-js@0.9.18/modules/core.date.js",
      "npm:core-js@0.9.18/modules/core.global.js",
      "npm:core-js@0.9.18/modules/core.log.js",
      "github:aurelia/path@0.8.1/aurelia-path.js",
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/es6.symbol.js",
      "npm:core-js@0.9.18/modules/es6.object.assign.js",
      "npm:core-js@0.9.18/modules/es6.object.is.js",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of.js",
      "npm:core-js@0.9.18/modules/es6.string.iterator.js",
      "npm:core-js@0.9.18/modules/es6.string.repeat.js",
      "npm:core-js@0.9.18/modules/es6.array.from.js",
      "npm:core-js@0.9.18/modules/es6.array.iterator.js",
      "npm:core-js@0.9.18/modules/es6.array.species.js",
      "npm:process@0.10.1.js",
      "npm:core-js@0.9.18/modules/es6.map.js",
      "npm:core-js@0.9.18/modules/es6.weak-map.js",
      "npm:core-js@0.9.18/modules/es6.reflect.js",
      "npm:core-js@0.9.18/modules/es7.string.lpad.js",
      "npm:core-js@0.9.18/modules/es7.map.to-json.js",
      "npm:core-js@0.9.18/modules/web.timers.js",
      "github:aurelia/path@0.8.1.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "npm:core-js@0.9.18/modules/es5.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "npm:core-js@0.9.18/modules/$.task.js",
      "npm:core-js@0.9.18/modules/es6.promise.js",
      "npm:core-js@0.9.18/shim.js",
      "npm:core-js@0.9.18/index.js",
      "npm:core-js@0.9.18.js",
      "github:aurelia/http-client@0.10.2/aurelia-http-client.js",
      "github:aurelia/http-client@0.10.2.js",
      "github:aurelia/logging@0.6.2/aurelia-logging.js",
      "github:aurelia/metadata@0.7.2/aurelia-metadata.js",
      "github:aurelia/dependency-injection@0.9.1/aurelia-dependency-injection.js",
      "github:aurelia/task-queue@0.6.1/aurelia-task-queue.js",
      "github:aurelia/logging@0.6.2.js",
      "github:aurelia/metadata@0.7.2.js",
      "github:aurelia/dependency-injection@0.9.1.js",
      "github:aurelia/task-queue@0.6.1.js",
      "github:aurelia/loader@0.8.3/aurelia-loader.js",
      "github:aurelia/binding@0.8.5/aurelia-binding.js",
      "github:aurelia/loader@0.8.3.js",
      "github:aurelia/binding@0.8.5.js",
      "github:aurelia/templating@0.13.16/aurelia-templating.js",
      "github:aurelia/templating@0.13.16.js",
      "github:aurelia/framework@0.14.0/aurelia-framework.js",
      "github:aurelia/framework@0.14.0.js",
      "github:aurelia/logging-console@0.6.1/aurelia-logging-console.js",
      "github:aurelia/logging-console@0.6.1.js",
      "github:aurelia/bootstrapper@0.15.0/aurelia-bootstrapper.js",
      "github:aurelia/bootstrapper@0.15.0.js"
    ],
    "build": [
      "main.js",
      "npm:core-js@0.9.18/modules/$.fw.js",
      "npm:core-js@0.9.18/modules/$.dom-create.js",
      "npm:core-js@0.9.18/modules/$.shared.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.array-includes.js",
      "npm:core-js@0.9.18/modules/$.replacer.js",
      "npm:core-js@0.9.18/modules/$.throws.js",
      "npm:core-js@0.9.18/modules/$.keyof.js",
      "npm:core-js@0.9.18/modules/$.enum-keys.js",
      "npm:core-js@0.9.18/modules/$.get-names.js",
      "npm:core-js@0.9.18/modules/$.assign.js",
      "npm:core-js@0.9.18/modules/$.same.js",
      "npm:core-js@0.9.18/modules/$.set-proto.js",
      "npm:core-js@0.9.18/modules/es6.object.to-string.js",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives.js",
      "npm:core-js@0.9.18/modules/es6.function.name.js",
      "npm:core-js@0.9.18/modules/es6.function.has-instance.js",
      "npm:core-js@0.9.18/modules/es6.number.constructor.js",
      "npm:core-js@0.9.18/modules/es6.number.statics.js",
      "npm:core-js@0.9.18/modules/es6.math.js",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point.js",
      "npm:core-js@0.9.18/modules/es6.string.raw.js",
      "npm:core-js@0.9.18/modules/$.string-at.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-define.js",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at.js",
      "npm:core-js@0.9.18/modules/es6.string.ends-with.js",
      "npm:core-js@0.9.18/modules/es6.string.includes.js",
      "npm:core-js@0.9.18/modules/$.string-repeat.js",
      "npm:core-js@0.9.18/modules/es6.string.starts-with.js",
      "npm:core-js@0.9.18/modules/$.iter-call.js",
      "npm:core-js@0.9.18/modules/$.iter-detect.js",
      "npm:core-js@0.9.18/modules/es6.array.of.js",
      "npm:core-js@0.9.18/modules/$.unscope.js",
      "npm:core-js@0.9.18/modules/$.species.js",
      "npm:core-js@0.9.18/modules/es6.array.copy-within.js",
      "npm:core-js@0.9.18/modules/es6.array.fill.js",
      "npm:core-js@0.9.18/modules/es6.array.find.js",
      "npm:core-js@0.9.18/modules/es6.array.find-index.js",
      "npm:core-js@0.9.18/modules/es6.regexp.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:process@0.10.1/browser.js",
      "npm:core-js@0.9.18/modules/$.mix.js",
      "npm:core-js@0.9.18/modules/$.collection-strong.js",
      "npm:core-js@0.9.18/modules/$.collection.js",
      "npm:core-js@0.9.18/modules/es6.set.js",
      "npm:core-js@0.9.18/modules/$.collection-weak.js",
      "npm:core-js@0.9.18/modules/es6.weak-set.js",
      "npm:core-js@0.9.18/modules/$.own-keys.js",
      "npm:core-js@0.9.18/modules/es7.array.includes.js",
      "npm:core-js@0.9.18/modules/es7.string.at.js",
      "npm:core-js@0.9.18/modules/$.string-pad.js",
      "npm:core-js@0.9.18/modules/es7.string.rpad.js",
      "npm:core-js@0.9.18/modules/es7.regexp.escape.js",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@0.9.18/modules/es7.object.to-array.js",
      "npm:core-js@0.9.18/modules/$.collection-to-json.js",
      "npm:core-js@0.9.18/modules/es7.set.to-json.js",
      "npm:core-js@0.9.18/modules/js.array.statics.js",
      "npm:core-js@0.9.18/modules/$.partial.js",
      "npm:core-js@0.9.18/modules/web.immediate.js",
      "npm:core-js@0.9.18/modules/web.dom.iterable.js",
      "npm:core-js@0.9.18/modules/core.dict.js",
      "npm:core-js@0.9.18/modules/core.iter-helpers.js",
      "npm:core-js@0.9.18/modules/core.$for.js",
      "npm:core-js@0.9.18/modules/core.delay.js",
      "npm:core-js@0.9.18/modules/core.function.part.js",
      "npm:core-js@0.9.18/modules/core.object.js",
      "npm:core-js@0.9.18/modules/core.array.turn.js",
      "npm:core-js@0.9.18/modules/core.number.iterator.js",
      "npm:core-js@0.9.18/modules/core.number.math.js",
      "npm:core-js@0.9.18/modules/core.string.escape-html.js",
      "npm:core-js@0.9.18/modules/core.date.js",
      "npm:core-js@0.9.18/modules/core.global.js",
      "npm:core-js@0.9.18/modules/core.log.js",
      "github:aurelia/logging@0.6.2/aurelia-logging.js",
      "github:aurelia/metadata@0.7.2/aurelia-metadata.js",
      "github:aurelia/dependency-injection@0.9.1/aurelia-dependency-injection.js",
      "github:aurelia/path@0.8.1/aurelia-path.js",
      "github:aurelia/task-queue@0.6.1/aurelia-task-queue.js",
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/es6.symbol.js",
      "npm:core-js@0.9.18/modules/es6.object.assign.js",
      "npm:core-js@0.9.18/modules/es6.object.is.js",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of.js",
      "npm:core-js@0.9.18/modules/es6.string.iterator.js",
      "npm:core-js@0.9.18/modules/es6.string.repeat.js",
      "npm:core-js@0.9.18/modules/es6.array.from.js",
      "npm:core-js@0.9.18/modules/es6.array.iterator.js",
      "npm:core-js@0.9.18/modules/es6.array.species.js",
      "npm:process@0.10.1.js",
      "npm:core-js@0.9.18/modules/es6.map.js",
      "npm:core-js@0.9.18/modules/es6.weak-map.js",
      "npm:core-js@0.9.18/modules/es6.reflect.js",
      "npm:core-js@0.9.18/modules/es7.string.lpad.js",
      "npm:core-js@0.9.18/modules/es7.map.to-json.js",
      "npm:core-js@0.9.18/modules/web.timers.js",
      "github:aurelia/logging@0.6.2.js",
      "github:aurelia/metadata@0.7.2.js",
      "github:aurelia/dependency-injection@0.9.1.js",
      "github:aurelia/path@0.8.1.js",
      "github:aurelia/task-queue@0.6.1.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "github:aurelia/loader@0.8.3/aurelia-loader.js",
      "github:aurelia/binding@0.8.5/aurelia-binding.js",
      "npm:core-js@0.9.18/modules/es5.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "github:aurelia/loader@0.8.3.js",
      "github:aurelia/binding@0.8.5.js",
      "npm:core-js@0.9.18/modules/$.task.js",
      "github:aurelia/templating@0.13.16/aurelia-templating.js",
      "npm:core-js@0.9.18/modules/es6.promise.js",
      "github:aurelia/templating@0.13.16.js",
      "npm:core-js@0.9.18/shim.js",
      "npm:core-js@0.9.18/index.js",
      "npm:core-js@0.9.18.js",
      "github:aurelia/framework@0.14.0/aurelia-framework.js",
      "github:aurelia/framework@0.14.0.js",
      "components/card.js",
      "npm:kyu-core@0.1.0/dist/main.js",
      "npm:kyu-core@0.1.0.js",
      "app.js",
      "components/board.js"
    ],
    "dist/app-bundle": [
      "main.js",
      "npm:core-js@0.9.18/modules/$.fw.js",
      "npm:core-js@0.9.18/modules/$.dom-create.js",
      "npm:core-js@0.9.18/modules/$.shared.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.array-includes.js",
      "npm:core-js@0.9.18/modules/$.replacer.js",
      "npm:core-js@0.9.18/modules/$.throws.js",
      "npm:core-js@0.9.18/modules/$.keyof.js",
      "npm:core-js@0.9.18/modules/$.enum-keys.js",
      "npm:core-js@0.9.18/modules/$.get-names.js",
      "npm:core-js@0.9.18/modules/$.assign.js",
      "npm:core-js@0.9.18/modules/$.same.js",
      "npm:core-js@0.9.18/modules/$.set-proto.js",
      "npm:core-js@0.9.18/modules/es6.object.to-string.js",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives.js",
      "npm:core-js@0.9.18/modules/es6.function.name.js",
      "npm:core-js@0.9.18/modules/es6.function.has-instance.js",
      "npm:core-js@0.9.18/modules/es6.number.constructor.js",
      "npm:core-js@0.9.18/modules/es6.number.statics.js",
      "npm:core-js@0.9.18/modules/es6.math.js",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point.js",
      "npm:core-js@0.9.18/modules/es6.string.raw.js",
      "npm:core-js@0.9.18/modules/$.string-at.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-define.js",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at.js",
      "npm:core-js@0.9.18/modules/es6.string.ends-with.js",
      "npm:core-js@0.9.18/modules/es6.string.includes.js",
      "npm:core-js@0.9.18/modules/$.string-repeat.js",
      "npm:core-js@0.9.18/modules/es6.string.starts-with.js",
      "npm:core-js@0.9.18/modules/$.iter-call.js",
      "npm:core-js@0.9.18/modules/$.iter-detect.js",
      "npm:core-js@0.9.18/modules/es6.array.of.js",
      "npm:core-js@0.9.18/modules/$.unscope.js",
      "npm:core-js@0.9.18/modules/$.species.js",
      "npm:core-js@0.9.18/modules/es6.array.copy-within.js",
      "npm:core-js@0.9.18/modules/es6.array.fill.js",
      "npm:core-js@0.9.18/modules/es6.array.find.js",
      "npm:core-js@0.9.18/modules/es6.array.find-index.js",
      "npm:core-js@0.9.18/modules/es6.regexp.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:process@0.10.1/browser.js",
      "npm:core-js@0.9.18/modules/$.mix.js",
      "npm:core-js@0.9.18/modules/$.collection-strong.js",
      "npm:core-js@0.9.18/modules/$.collection.js",
      "npm:core-js@0.9.18/modules/es6.set.js",
      "npm:core-js@0.9.18/modules/$.collection-weak.js",
      "npm:core-js@0.9.18/modules/es6.weak-set.js",
      "npm:core-js@0.9.18/modules/$.own-keys.js",
      "npm:core-js@0.9.18/modules/es7.array.includes.js",
      "npm:core-js@0.9.18/modules/es7.string.at.js",
      "npm:core-js@0.9.18/modules/$.string-pad.js",
      "npm:core-js@0.9.18/modules/es7.string.rpad.js",
      "npm:core-js@0.9.18/modules/es7.regexp.escape.js",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@0.9.18/modules/es7.object.to-array.js",
      "npm:core-js@0.9.18/modules/$.collection-to-json.js",
      "npm:core-js@0.9.18/modules/es7.set.to-json.js",
      "npm:core-js@0.9.18/modules/js.array.statics.js",
      "npm:core-js@0.9.18/modules/$.partial.js",
      "npm:core-js@0.9.18/modules/web.immediate.js",
      "npm:core-js@0.9.18/modules/web.dom.iterable.js",
      "npm:core-js@0.9.18/modules/core.dict.js",
      "npm:core-js@0.9.18/modules/core.iter-helpers.js",
      "npm:core-js@0.9.18/modules/core.$for.js",
      "npm:core-js@0.9.18/modules/core.delay.js",
      "npm:core-js@0.9.18/modules/core.function.part.js",
      "npm:core-js@0.9.18/modules/core.object.js",
      "npm:core-js@0.9.18/modules/core.array.turn.js",
      "npm:core-js@0.9.18/modules/core.number.iterator.js",
      "npm:core-js@0.9.18/modules/core.number.math.js",
      "npm:core-js@0.9.18/modules/core.string.escape-html.js",
      "npm:core-js@0.9.18/modules/core.date.js",
      "npm:core-js@0.9.18/modules/core.global.js",
      "npm:core-js@0.9.18/modules/core.log.js",
      "github:aurelia/logging@0.6.2/aurelia-logging.js",
      "github:aurelia/metadata@0.7.2/aurelia-metadata.js",
      "github:aurelia/dependency-injection@0.9.1/aurelia-dependency-injection.js",
      "github:aurelia/path@0.8.1/aurelia-path.js",
      "github:aurelia/task-queue@0.6.1/aurelia-task-queue.js",
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/es6.symbol.js",
      "npm:core-js@0.9.18/modules/es6.object.assign.js",
      "npm:core-js@0.9.18/modules/es6.object.is.js",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of.js",
      "npm:core-js@0.9.18/modules/es6.string.iterator.js",
      "npm:core-js@0.9.18/modules/es6.string.repeat.js",
      "npm:core-js@0.9.18/modules/es6.array.from.js",
      "npm:core-js@0.9.18/modules/es6.array.iterator.js",
      "npm:core-js@0.9.18/modules/es6.array.species.js",
      "npm:process@0.10.1.js",
      "npm:core-js@0.9.18/modules/es6.map.js",
      "npm:core-js@0.9.18/modules/es6.weak-map.js",
      "npm:core-js@0.9.18/modules/es6.reflect.js",
      "npm:core-js@0.9.18/modules/es7.string.lpad.js",
      "npm:core-js@0.9.18/modules/es7.map.to-json.js",
      "npm:core-js@0.9.18/modules/web.timers.js",
      "github:aurelia/logging@0.6.2.js",
      "github:aurelia/metadata@0.7.2.js",
      "github:aurelia/dependency-injection@0.9.1.js",
      "github:aurelia/path@0.8.1.js",
      "github:aurelia/task-queue@0.6.1.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "github:aurelia/loader@0.8.3/aurelia-loader.js",
      "github:aurelia/binding@0.8.5/aurelia-binding.js",
      "npm:core-js@0.9.18/modules/es5.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "github:aurelia/loader@0.8.3.js",
      "github:aurelia/binding@0.8.5.js",
      "npm:core-js@0.9.18/modules/$.task.js",
      "github:aurelia/templating@0.13.16/aurelia-templating.js",
      "npm:core-js@0.9.18/modules/es6.promise.js",
      "github:aurelia/templating@0.13.16.js",
      "npm:core-js@0.9.18/shim.js",
      "npm:core-js@0.9.18/index.js",
      "npm:core-js@0.9.18.js",
      "github:aurelia/framework@0.14.0/aurelia-framework.js",
      "github:aurelia/framework@0.14.0.js",
      "components/card.js",
      "npm:kyu-core@0.1.0/dist/main.js",
      "npm:kyu-core@0.1.0.js",
      "app.js",
      "components/board.js",
      "github:aurelia/templating-resources@0.13.4/if.js",
      "github:aurelia/templating-resources@0.13.4/with.js",
      "github:aurelia/templating-resources@0.13.4/repeat.js",
      "github:aurelia/templating-resources@0.13.4/show.js",
      "github:aurelia/templating-resources@0.13.4/global-behavior.js",
      "github:aurelia/templating-resources@0.13.4/sanitize-html.js",
      "github:aurelia/templating-resources@0.13.4/replaceable.js",
      "github:aurelia/templating-resources@0.13.4/focus.js",
      "github:aurelia/templating-resources@0.13.4/compose.js",
      "github:aurelia/templating-resources@0.13.4/aurelia-templating-resources.js",
      "github:aurelia/templating-resources@0.13.4.js",
      "github:aurelia/templating-binding@0.13.2/aurelia-templating-binding.js",
      "github:aurelia/templating-binding@0.13.2.js",
      "github:aurelia/loader-default@0.9.3/aurelia-loader-default.js",
      "github:aurelia/loader-default@0.9.3.js",
      "github:aurelia/logging-console@0.6.1/aurelia-logging-console.js",
      "github:aurelia/logging-console@0.6.1.js",
      "github:aurelia/bootstrapper@0.15.0/aurelia-bootstrapper.js",
      "github:aurelia/bootstrapper@0.15.0.js"
    ]
  },

  map: {
    "aurelia-binding": "github:aurelia/binding@0.8.5",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.15.0",
    "aurelia-framework": "github:aurelia/framework@0.14.0",
    "aurelia-http-client": "github:aurelia/http-client@0.10.2",
    "aurelia-loader-default": "github:aurelia/loader-default@0.9.3",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.2",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.4",
    "babel": "npm:babel-core@5.8.21",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "github:zloirock/core-js@0.9.18",
    "kyu-core": "npm:kyu-core@0.1.0",
    "github:aurelia/binding@0.8.5": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.15.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-framework": "github:aurelia/framework@0.14.0",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.2",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.3",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.1",
      "aurelia-router": "github:aurelia/router@0.10.4",
      "aurelia-templating": "github:aurelia/templating@0.13.16",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.2",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.4",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.2": {
      "aurelia-logging": "github:aurelia/logging@0.6.2"
    },
    "github:aurelia/framework@0.14.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.16",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.2": {
      "aurelia-history": "github:aurelia/history@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.2": {
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.3": {
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2"
    },
    "github:aurelia/loader@0.8.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.2": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.4": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.2": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-templating": "github:aurelia/templating@0.13.16"
    },
    "github:aurelia/templating-resources@0.13.4": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.16",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-router": "github:aurelia/router@0.10.4",
      "aurelia-templating": "github:aurelia/templating@0.13.16"
    },
    "github:aurelia/templating@0.13.16": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
