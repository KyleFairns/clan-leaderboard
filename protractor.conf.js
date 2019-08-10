const {ArtifactArchiver, ConsoleReporter, SerenityBDDReporter} = require('@serenity-js/core'),
    {FileSystem, Path} = require('@serenity-js/core/lib/io');

exports.config = {
    chromeDriver: require('chromedriver/lib/chromedriver').path,
    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    allScriptsTimeout: 11000,

    specs: ['test/features/**/*.feature'],

    framework: 'custom',
    frameworkPath: require.resolve('@serenity-js/protractor/adapter'),

    usesAngular: false,

    serenity: {
        crew: [
            new ArtifactArchiver(new FileSystem(new Path('./target/src/serenity'))),
            new SerenityBDDReporter(),
            new ConsoleReporter()
        ]
    },

    cucumberOpts: {
        require: [
            'test/features/step_definitions/**/*.ts',
            'test/features/support/setup.ts'
        ],
        'require-module': ['ts-node/register']
    },

    baseUrl: "http://localhost:4000",



    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                // -----------------------------
                '--disable-infobars',    //     |
                '--no-sandbox',          //     |   For
                '--disable-gpu',         //     |   Headless
                '--headless',            //     |
                // -----------------------------

                '--window-size=1024x768',
            ]
        }
    }

}
