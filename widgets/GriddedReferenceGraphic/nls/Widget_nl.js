// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Gridded Reference Graphic",newGRGFromAreaButtonLabel:"Bepaal een grid vanuit een gebied",newGRGFromPointButtonLabel:"Bepaal een grid vanuit een punt",newGRGFromAreaTitle:"Bepaal een grid vanuit een gebied",newGRGFromPointTitle:"Bepaal een grid vanuit een punt",newGRGBySizeButtonLabel:"Op Afmeting",newGRGFromRefSystemButtonLabel:"Op Referentiesysteem",newGRGByTimeLabel:"Op Tijd en Snelheid",newGRGFromNonStandardButtonLabel:"Niet-standaard grid bepalen",
newGRGAreaBySizeTitle:"GRG vanuit een gebied op afmeting",newGRGAreaBySizeDefineAreaLabel:"GRG-gebied",addGRGAreaPolygonToolTip:"Teken GRG-gebied d.m.v. polygoon",addGRGAreaExtentToolTip:"Teken GRG-gebied d.m.v. extent",rotation:"Gridrotatie",numberRowsColumnsLabel:"Bepaal aantal rijen en kolommen",newGRGAreaByRefSystemTitle:"GRG vanuit een gebied op referentiesysteem",gridSize:"Gridgrootte",UTMZoneandBand:"Gridzone","100000m":"100.000 meter","10000m":"10.000 meter","1000m":"1000 meter","100m":"100 meter",
"10m":"10 meter",clipGrid:"Snij grid bij tot GRG-gebied",newGRGAreaFromNonStandardTitle:"Nieuwe NRG",newGRGPointBySizeTitle:"GRG vanuit een punt op afmeting",newGRGPointByRefSystemTitle:"GRG vanuit een punt op referentiesysteem",newGRGPointByTimeTitle:"GRG vanuit een punt d.m.v. tijd en snelheid",time:"Tijd",rate:"Snelheid",hours:"Uren",minutes:"Minuten",seconds:"Seconden",ftPerSec:"Voet / seconde",ftPerHour:"Voet / uur",kmPerSec:"Kilometer / seconde",kmPerHour:"Kilometer / uur",mPerSec:"Meter / seconde",
mPerHour:"Meter / uur",miPerSec:"Mijl / seconde",miPerHour:"Mijl / uur",nMPerSec:"Zeemijl / seconde",nMPerHour:"Zeemijl / uur",settingsTitle:"Instellingen",labelSettingsLabel:"Labelinstellingen",labelSettingsButtonLabel:"Labelinstellingen configureren",gridSettingsLabel:"Gridinstellingen",gridSettingsButtonLabel:"Gridinstellingen configureren",transparency:"Transparant",labelStyle:"Labelstijl",font:"Lettertype",textSize:"Tekstgrootte",textColor:"Tekstkleur",halo:"Halo",show:"Weergeven",lockSettings:"Instellingen zijn vergrendeld door de eigenaar van de applicatie",
gridSettings:{cellShape:"Celvorm",cellUnits:"Celunits",cellOutline:"Celrandinstellingen",cellFill:"Celvulinstellingen",gridReferenceSystem:"Referentiesysteem",gridDatum:"Datum: WGS84",labelStartPosition:"Labeloorsprong",labelType:"Labeltype",labelDirection:"Labelrichting",gridOrigin:"Gridoorsprong","default":"Rechthoek",hexagon:"Zeskant",miles:"Mijl",kilometers:"Kilometer",feet:"Voet",meters:"Meter",yards:"Yard","nautical-miles":"Zeemijl",lowerLeft:"Linksonder",lowerRight:"Rechtsonder",upperLeft:"Linksboven",
upperRight:"Rechtsboven",center:"Centreren",alphaNumeric:"Alfanumeriek",alphaAlpha:"Alfa-Alfa",numeric:"Numeriek",horizontal:"Horizontaal",vertical:"Verticaal",MGRS:"MGRS",USNG:"USNG",showLabels:"Labels weergeven",colorPicker:"Kleurenkiezer",bold:"Vet",italic:"Cursief",underline:"Onderstrepen"},publishTitle:"Publiceer GRG naar Portal",publishGRGBtn:"Publiceren",GRGLayerName:"Gepubliceerde GRG-laagnaam",invalidGRGLayerName:"Laagnaam mag alleen alfanumerieke tekens en onderstrepingstekens bevatten",
missingGRGLayerName:"U moet een naam invoeren voor de GRG",publishWorskpaceError:"FOUTMELDING: Fout bij openen werkruimte",publishToNewLayer:"Resultaten publiceren naar een nieuwe feature layer",publishingFailedLayerExists:"Publiceren mislukt: U hebt al een featureservice met de naam {0}. Kies een andere naam.",checkService:"Controleer service: {0}",createService:"Maak service: {0}",unableToCreate:"Niet mogelijk om te maken: {0}",addToDefinition:"Voeg toe aan definitie: {0}",successfullyPublished:"Succesvolle publicatie weblaag{0}Beheer de weblaag",
userRole:"Kan service niet maken omdat de gebruiker niet gemachtigd is",createGRGBtn:"GRG maken",clearGRGBtn:"Annuleren",labelFormat:"Labelopmaak",helpIconTooltip:"Z: Grid Zone Designator (GZD)\nS: 100.000-meter Grid Square Identification (GSID)\nX: Oosterbreedte (X-co\u00f6rdinaat)\nY: Noorderbreedte (Y-co\u00f6rdinaat)\n\nVoorbeelden:\nZSXY is 15SWC8081751205\nZS X,Y is 15SWC 80817,51205",addPointToolTip:"GRG-oorsprong toevoegen",cellWidth:"Celbreedte (x)",cellHeight:"Celhoogte (y)",invalidNumberMessage:"De ingevoerde waarde is niet geldig",
invalidRangeMessage:"Waarde moet groter zijn dan 0",gridAngleInvalidRangeMessage:"De waarde moet tussen -89,9 en 89,9 liggen",formatIconTooltip:"Indeling invoer",coordInputLabel:"GRG-oorsprong",setCoordFormat:"Co\u00f6rdinaatindelingtekst",prefixNumbers:'Voeg "+/-" prefix toe aan positieve en negatieve cijfers',cancelBtn:"Afbreken",applyBtn:"Toepassen",comfirmInputNotation:"Bevestig inputnotatie",notationsMatch:"notaties gevonden die overeenstemmen met uw input. Bevestig welke u wenst te gebruiken:",
numberOfCellsHorizontal:"# Horizontale cellen",numberOfCellsVertical:"# Verticale cellen",gridAngle:"Gridrotatie",tooManyCellsErrorMessage:"U probeert een grid te maken met meer dan 2.000 cellen. We raden u aan om het aantal cellen te verminderen door de gridgrootte of het gridgebied te wijzigen.",missingParametersMessage:"\x3cp\x3eHet GRG creatieformulier heeft ontbrekende of ongeldige parameters, Zorg ervoor dat:\x3c/p\x3e\x3cul\x3e\x3cli\x3eer een GRG-gebied getekend is.\x3c/li\x3e\x3cli\x3eDe celbreedte en -hoogte bevatten ongeldige waarden.\x3c/li\x3e\x3c/ul\x3e",
missingOriginParametersMessage:"\x3cp\x3eHet GRG creatieformulier heeft ontbrekende of ongeldige parameters, Zorg ervoor dat:\x3c/p\x3e\x3cul\x3e\x3cli\x3eer een GRG-oorsprong ingesteld is.\x3c/li\x3e\x3cli\x3eDe tijd-, snelheid- en hoekvelden bevatten ongeldige waarden.\x3c/li\x3e\x3c/ul\x3e",invalidWidthHeightParametersMessage:"\x3cp\x3eHet GRG creatieformulier heeft ontbrekende of ongeldige parameters, Zorg ervoor dat celbreedte en -hoogte geldige waarden bevatten.\x3c/p\x3e",invalidHorizontalVerticalParametersMessage:"\x3cp\x3eHet GRG creatieformulier heeft ontbrekende of ongeldige parameters. Zorg ervoor dat het aantal cellen horizontale en verticale invoerwaarden geldige waarden bevatten.\x3c/p\x3e",
drawPointToolTip:"Klik om een GRG-oorsprongpunt toe te voegen",missingLayerNameMessage:"U moet een geldige laagnaam invoeren voordat u kunt publiceren",parseCoordinatesError:"Kan co\u00f6rdinaten niet parsen. Controleer uw input.",grgPolarRegionError:"De GRG-extent bevindt zich in het poolgebied. Cellen die binnen het poolgebied vallen, worden niet gemaakt.",grgPolarOriginError:"Het GRG-oorsprongpunt mag zich niet in een poolgebied bevinden bij het maken van een GRG op referentiesysteem.",deleteBtn:"Verwijderen",
DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Decimale graden - Breedtegraad/Lengtegraad",DDLongLatNotation:"Decimale graden - Lengtegraad/Breedtegraad",DDMLatLongNotation:"Graden decimale minuten - Breedtegraad/Lengtegraad",DDMLongLatNotation:"Graden decimale minuten - Lengtegraad/Breedtegraad",DMSLatLongNotation:"Graden decimale seconden - Breedtegraad/Lengtegraad",DMSLongLatNotation:"Graden decimale seconden - Lengtegraad/Breedtegraad",
GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - Band Letter",UTMHemNotation:"UTM - Hemisfeer (N/S)",_localized:{}}});