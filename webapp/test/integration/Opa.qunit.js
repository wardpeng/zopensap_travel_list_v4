sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ac/ward/zopensaptravellistv4/test/integration/pages/MainListReport' ,
        'com/ac/ward/zopensaptravellistv4/test/integration/pages/MainObjectPage',
        'com/ac/ward/zopensaptravellistv4/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ac/ward/zopensaptravellistv4') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);