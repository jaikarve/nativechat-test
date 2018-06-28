const observableModule = require("data/observable");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        nativeChatConfig: {
            "botId": "5aec90c92f0cb34333a804a7",
            "channelId": "7a530423-7e17-4b37-8c46-03a910241065",
            "channelToken": "0597259e-ad2c-4563-a92d-1c4d9a6cd33c"
        }
    });

    return viewModel;
}

module.exports = HomeViewModel;
