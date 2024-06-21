var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_1.png" /> Kecamatan Genteng'
            });
var format_CLIPPED1_2 = new ol.format.GeoJSON();
var features_CLIPPED1_2 = format_CLIPPED1_2.readFeatures(json_CLIPPED1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLIPPED1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLIPPED1_2.addFeatures(features_CLIPPED1_2);
var lyr_CLIPPED1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLIPPED1_2, 
                style: style_CLIPPED1_2,
                popuplayertitle: "CLIPPED 1",
                interactive: true,
                title: '<img src="styles/legend/CLIPPED1_2.png" /> CLIPPED 1'
            });
var format_Dissolved_3 = new ol.format.GeoJSON();
var features_Dissolved_3 = format_Dissolved_3.readFeatures(json_Dissolved_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_3.addFeatures(features_Dissolved_3);
var lyr_Dissolved_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolved_3, 
                style: style_Dissolved_3,
                popuplayertitle: "Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Dissolved_3.png" /> Dissolved'
            });
var format_d_JaringanJalan_Fixed_4 = new ol.format.GeoJSON();
var features_d_JaringanJalan_Fixed_4 = format_d_JaringanJalan_Fixed_4.readFeatures(json_d_JaringanJalan_Fixed_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_JaringanJalan_Fixed_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_JaringanJalan_Fixed_4.addFeatures(features_d_JaringanJalan_Fixed_4);
var lyr_d_JaringanJalan_Fixed_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_JaringanJalan_Fixed_4, 
                style: style_d_JaringanJalan_Fixed_4,
                popuplayertitle: "d_JaringanJalan_Fixed",
                interactive: true,
                title: '<img src="styles/legend/d_JaringanJalan_Fixed_4.png" /> d_JaringanJalan_Fixed'
            });
var format_d_Halte_Surabaya_5 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_5 = format_d_Halte_Surabaya_5.readFeatures(json_d_Halte_Surabaya_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_5.addFeatures(features_d_Halte_Surabaya_5);
var lyr_d_Halte_Surabaya_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_5, 
                style: style_d_Halte_Surabaya_5,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
                title: '<img src="styles/legend/d_Halte_Surabaya_5.png" /> d_Halte_Surabaya'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_CLIPPED1_2.setVisible(true);lyr_Dissolved_3.setVisible(true);lyr_d_JaringanJalan_Fixed_4.setVisible(true);lyr_d_Halte_Surabaya_5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_KecamatanGenteng_1,lyr_CLIPPED1_2,lyr_Dissolved_3,lyr_d_JaringanJalan_Fixed_4,lyr_d_Halte_Surabaya_5];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'KELURAHAN', 'Luas lahan': 'Luas lahan', });
lyr_CLIPPED1_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cost_level': 'cost_level', });
lyr_Dissolved_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cost_level': 'cost_level', });
lyr_d_JaringanJalan_Fixed_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_d_Halte_Surabaya_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'UniqueValues', 'Luas lahan': '', });
lyr_CLIPPED1_2.set('fieldImages', {'fid': '', 'id': '', 'cost_level': '', });
lyr_Dissolved_3.set('fieldImages', {'fid': '', 'id': '', 'cost_level': '', });
lyr_d_JaringanJalan_Fixed_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_d_Halte_Surabaya_5.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Luas lahan': 'no label', });
lyr_CLIPPED1_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cost_level': 'no label', });
lyr_Dissolved_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cost_level': 'no label', });
lyr_d_JaringanJalan_Fixed_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'header label - visible with data', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_d_Halte_Surabaya_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', });
lyr_d_Halte_Surabaya_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});