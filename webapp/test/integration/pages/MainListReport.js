sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ac.ward.zopensaptravellistv4',
            componentId: 'TravelList',
            entitySet: 'Travel'
        },
        AdditionalCustomListReportDefinition
    );
});