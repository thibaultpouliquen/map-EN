var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_worldadministrativeboundaries_1 = new ol.format.GeoJSON();
var features_worldadministrativeboundaries_1 = format_worldadministrativeboundaries_1.readFeatures(json_worldadministrativeboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldadministrativeboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldadministrativeboundaries_1.addFeatures(features_worldadministrativeboundaries_1);
var lyr_worldadministrativeboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_worldadministrativeboundaries_1, 
                style: style_worldadministrativeboundaries_1,
                popuplayertitle: 'world-administrative-boundaries',
                interactive: false,
                title: '<img src="styles/legend/worldadministrativeboundaries_1.png" /> world-administrative-boundaries'
            });
var format_projet_grimpe_EN_2 = new ol.format.GeoJSON();
var features_projet_grimpe_EN_2 = format_projet_grimpe_EN_2.readFeatures(json_projet_grimpe_EN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_projet_grimpe_EN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projet_grimpe_EN_2.addFeatures(features_projet_grimpe_EN_2);
var lyr_projet_grimpe_EN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_projet_grimpe_EN_2, 
                style: style_projet_grimpe_EN_2,
                popuplayertitle: 'projet_grimpe_EN',
                interactive: true,
                title: '<img src="styles/legend/projet_grimpe_EN_2.png" /> projet_grimpe_EN'
            });
var format_Projets_coordo_EN_3 = new ol.format.GeoJSON();
var features_Projets_coordo_EN_3 = format_Projets_coordo_EN_3.readFeatures(json_Projets_coordo_EN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projets_coordo_EN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projets_coordo_EN_3.addFeatures(features_Projets_coordo_EN_3);
var lyr_Projets_coordo_EN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projets_coordo_EN_3, 
                style: style_Projets_coordo_EN_3,
                popuplayertitle: 'Projets_coordo_EN',
                interactive: true,
                title: '<img src="styles/legend/Projets_coordo_EN_3.png" /> Projets_coordo_EN'
            });
var format_Projets_primato_EN_4 = new ol.format.GeoJSON();
var features_Projets_primato_EN_4 = format_Projets_primato_EN_4.readFeatures(json_Projets_primato_EN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projets_primato_EN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projets_primato_EN_4.addFeatures(features_Projets_primato_EN_4);
var lyr_Projets_primato_EN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projets_primato_EN_4, 
                style: style_Projets_primato_EN_4,
                popuplayertitle: 'Projets_primato_EN',
                interactive: true,
                title: '<img src="styles/legend/Projets_primato_EN_4.png" /> Projets_primato_EN'
            });
var format_Projets_bota_EN_5 = new ol.format.GeoJSON();
var features_Projets_bota_EN_5 = format_Projets_bota_EN_5.readFeatures(json_Projets_bota_EN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projets_bota_EN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projets_bota_EN_5.addFeatures(features_Projets_bota_EN_5);
var lyr_Projets_bota_EN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projets_bota_EN_5, 
                style: style_Projets_bota_EN_5,
                popuplayertitle: 'Projets_bota_EN',
                interactive: true,
                title: '<img src="styles/legend/Projets_bota_EN_5.png" /> Projets_bota_EN'
            });
var format_projets_chef_EN_6 = new ol.format.GeoJSON();
var features_projets_chef_EN_6 = format_projets_chef_EN_6.readFeatures(json_projets_chef_EN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_projets_chef_EN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projets_chef_EN_6.addFeatures(features_projets_chef_EN_6);
var lyr_projets_chef_EN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_projets_chef_EN_6, 
                style: style_projets_chef_EN_6,
                popuplayertitle: 'projets_chef_EN',
                interactive: true,
                title: '<img src="styles/legend/projets_chef_EN_6.png" /> projets_chef_EN'
            });
var format_Projets_chiro_EN_7 = new ol.format.GeoJSON();
var features_Projets_chiro_EN_7 = format_Projets_chiro_EN_7.readFeatures(json_Projets_chiro_EN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projets_chiro_EN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projets_chiro_EN_7.addFeatures(features_Projets_chiro_EN_7);
var lyr_Projets_chiro_EN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projets_chiro_EN_7, 
                style: style_Projets_chiro_EN_7,
                popuplayertitle: 'Projets_chiro_EN',
                interactive: true,
                title: '<img src="styles/legend/Projets_chiro_EN_7.png" /> Projets_chiro_EN'
            });
var group_EN = new ol.layer.Group({
                                layers: [lyr_projet_grimpe_EN_2,lyr_Projets_coordo_EN_3,lyr_Projets_primato_EN_4,lyr_Projets_bota_EN_5,lyr_projets_chef_EN_6,lyr_Projets_chiro_EN_7,],
                                fold: 'open',
                                title: 'EN'});
var group_ADMIN = new ol.layer.Group({
                                layers: [lyr_worldadministrativeboundaries_1,],
                                fold: 'open',
                                title: 'ADMIN'});
var group_FONDDECARTE = new ol.layer.Group({
                                layers: [lyr_OpenTopoMap_0,],
                                fold: 'open',
                                title: 'FOND DE CARTE'});

lyr_OpenTopoMap_0.setVisible(true);lyr_worldadministrativeboundaries_1.setVisible(true);lyr_projet_grimpe_EN_2.setVisible(true);lyr_Projets_coordo_EN_3.setVisible(true);lyr_Projets_primato_EN_4.setVisible(true);lyr_Projets_bota_EN_5.setVisible(true);lyr_projets_chef_EN_6.setVisible(true);lyr_Projets_chiro_EN_7.setVisible(true);
var layersList = [group_FONDDECARTE,group_ADMIN,group_EN];
lyr_worldadministrativeboundaries_1.set('fieldAliases', {'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1_': 'iso_3166_1_', 'french_shor': 'french_shor', });
lyr_projet_grimpe_EN_2.set('fieldAliases', {'id': 'id', 'Dates': 'Dates', 'Country': 'Country', 'Place': 'Place', 'Name': 'Name', 'Partner': 'Partner', 'Client': 'Client', 'Project': 'Project', 'Images': 'Images', 'Image_2': 'Image_2', 'Image 3': 'Image 3', });
lyr_Projets_coordo_EN_3.set('fieldAliases', {'id': 'id', 'Dates': 'Dates', 'Country': 'Country', 'Place': 'Place', 'Name': 'Name', 'Partner': 'Partner', 'Client': 'Client', 'Project': 'Project', 'Images': 'Images', 'Image_2': 'Image_2', 'Image 3': 'Image 3', });
lyr_Projets_primato_EN_4.set('fieldAliases', {'id': 'id', 'Dates': 'Dates', 'Country': 'Country', 'Place': 'Place', 'Name': 'Name', 'Partner': 'Partner', 'Client': 'Client', 'Project': 'Project', 'Images': 'Images', 'Image_2': 'Image_2', 'Image 3': 'Image 3', });
lyr_Projets_bota_EN_5.set('fieldAliases', {'id': 'id', 'Dates': 'Dates', 'Country': 'Country', 'Place': 'Place', 'Name': 'Name', 'Partner': 'Partner', 'Client': 'Client', 'Project': 'Project', 'Images': 'Images', 'Image_2': 'Image_2', 'Image 3': 'Image 3', });
lyr_projets_chef_EN_6.set('fieldAliases', {'id': 'id', 'Dates': 'Dates', 'Country': 'Country', 'Place': 'Place', 'Name': 'Name', 'Partner': 'Partner', 'Client': 'Client', 'Project': 'Project', 'Images': 'Images', 'Image_2': 'Image_2', 'Image 3': 'Image 3', });
lyr_Projets_chiro_EN_7.set('fieldAliases', {'id': 'id', 'Dates': 'Dates', 'Country': 'Country', 'Place': 'Place', 'Name': 'Name', 'Partner': 'Partner', 'Client': 'Client', 'Project': 'Project', 'Images': 'Images', 'Image_2': 'Image_2', 'Image_3': 'Image_3', });
lyr_worldadministrativeboundaries_1.set('fieldImages', {'iso3': 'TextEdit', 'status': 'TextEdit', 'color_code': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'iso_3166_1_': 'TextEdit', 'french_shor': 'TextEdit', });
lyr_projet_grimpe_EN_2.set('fieldImages', {'id': 'TextEdit', 'Dates': 'TextEdit', 'Country': 'TextEdit', 'Place': 'TextEdit', 'Name': 'TextEdit', 'Partner': 'TextEdit', 'Client': 'TextEdit', 'Project': 'TextEdit', 'Images': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image 3': 'ExternalResource', });
lyr_Projets_coordo_EN_3.set('fieldImages', {'id': 'TextEdit', 'Dates': 'TextEdit', 'Country': 'TextEdit', 'Place': 'TextEdit', 'Name': 'TextEdit', 'Partner': 'TextEdit', 'Client': 'TextEdit', 'Project': 'TextEdit', 'Images': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image 3': 'ExternalResource', });
lyr_Projets_primato_EN_4.set('fieldImages', {'id': 'TextEdit', 'Dates': 'TextEdit', 'Country': 'TextEdit', 'Place': 'TextEdit', 'Name': 'TextEdit', 'Partner': 'TextEdit', 'Client': 'TextEdit', 'Project': 'TextEdit', 'Images': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image 3': 'ExternalResource', });
lyr_Projets_bota_EN_5.set('fieldImages', {'id': 'TextEdit', 'Dates': 'TextEdit', 'Country': 'TextEdit', 'Place': 'TextEdit', 'Name': 'TextEdit', 'Partner': 'TextEdit', 'Client': 'TextEdit', 'Project': 'TextEdit', 'Images': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image 3': 'ExternalResource', });
lyr_projets_chef_EN_6.set('fieldImages', {'id': 'TextEdit', 'Dates': 'TextEdit', 'Country': 'TextEdit', 'Place': 'TextEdit', 'Name': 'TextEdit', 'Partner': 'TextEdit', 'Client': 'TextEdit', 'Project': 'TextEdit', 'Images': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image 3': 'ExternalResource', });
lyr_Projets_chiro_EN_7.set('fieldImages', {'id': 'TextEdit', 'Dates': 'TextEdit', 'Country': 'TextEdit', 'Place': 'TextEdit', 'Name': 'TextEdit', 'Partner': 'TextEdit', 'Client': 'TextEdit', 'Project': 'TextEdit', 'Images': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image_3': 'ExternalResource', });
lyr_worldadministrativeboundaries_1.set('fieldLabels', {'iso3': 'header label - visible with data', 'status': 'header label - visible with data', 'color_code': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_': 'no label', 'french_shor': 'header label - visible with data', });
lyr_projet_grimpe_EN_2.set('fieldLabels', {'id': 'no label', 'Dates': 'inline label - always visible', 'Country': 'inline label - always visible', 'Place': 'inline label - always visible', 'Name': 'inline label - always visible', 'Partner': 'inline label - always visible', 'Client': 'inline label - always visible', 'Project': 'inline label - always visible', 'Images': 'header label - always visible', 'Image_2': 'no label', 'Image 3': 'no label', });
lyr_Projets_coordo_EN_3.set('fieldLabels', {'id': 'no label', 'Dates': 'inline label - always visible', 'Country': 'inline label - always visible', 'Place': 'inline label - always visible', 'Name': 'inline label - always visible', 'Partner': 'inline label - always visible', 'Client': 'inline label - always visible', 'Project': 'inline label - always visible', 'Images': 'header label - always visible', 'Image_2': 'no label', 'Image 3': 'no label', });
lyr_Projets_primato_EN_4.set('fieldLabels', {'id': 'no label', 'Dates': 'inline label - visible with data', 'Country': 'inline label - always visible', 'Place': 'inline label - always visible', 'Name': 'inline label - always visible', 'Partner': 'inline label - always visible', 'Client': 'inline label - always visible', 'Project': 'inline label - always visible', 'Images': 'header label - always visible', 'Image_2': 'no label', 'Image 3': 'no label', });
lyr_Projets_bota_EN_5.set('fieldLabels', {'id': 'no label', 'Dates': 'inline label - always visible', 'Country': 'inline label - always visible', 'Place': 'inline label - always visible', 'Name': 'inline label - always visible', 'Partner': 'inline label - always visible', 'Client': 'inline label - always visible', 'Project': 'inline label - always visible', 'Images': 'header label - always visible', 'Image_2': 'no label', 'Image 3': 'no label', });
lyr_projets_chef_EN_6.set('fieldLabels', {'id': 'no label', 'Dates': 'inline label - always visible', 'Country': 'inline label - always visible', 'Place': 'inline label - always visible', 'Name': 'inline label - always visible', 'Partner': 'inline label - always visible', 'Client': 'inline label - always visible', 'Project': 'inline label - always visible', 'Images': 'header label - always visible', 'Image_2': 'no label', 'Image 3': 'no label', });
lyr_Projets_chiro_EN_7.set('fieldLabels', {'id': 'no label', 'Dates': 'inline label - always visible', 'Country': 'inline label - always visible', 'Place': 'inline label - always visible', 'Name': 'inline label - always visible', 'Partner': 'inline label - always visible', 'Client': 'inline label - always visible', 'Project': 'inline label - always visible', 'Images': 'header label - always visible', 'Image_2': 'no label', 'Image_3': 'no label', });
lyr_Projets_chiro_EN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});