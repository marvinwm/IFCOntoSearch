$(function() {
	var availableTags = [
			"doorstyle","relaggregates","plastic","pivothorizontal","covering","halfturnstair","pavilion_roof","relassignstoactor","elementassembly","joist","valvetype","cablesegmenttype","high_grade_steel","right","relassociatesprofileproperties","railingtype","relassociatesclassification","asset","triplepanelhorizontalwindow","distributionchamberelement","tanktype","winder_stairflight","plate","lightfixturetype","doorstyleconstructionenum","project","rafter","featureelementsubtraction","elementquantity","projectionelement","relvoidselement","constructionproductresource","ductfittingtype","doublepanelverticalwindow","curved_stairflight","structuralpointconnection","relfillselement","distributionport","strut","relprojectselement","left","discreteaccessory","sheet","member","doublereturnstair","stair","furnishingelementtype","unitaryequipmenttype","rollingup","featureelement","structuralcurveconnection","flowsegment","energyproperties","flowstoragedevicetype","subcontractresource","flowtreatmentdevicetype","beam","flowterminaltype","zone","electricappliancetype","straightrunstair","bottomhung","doublepanelhorizontal","railing","root","chillertype","high_grade_steel_window","conditioncriterion","structuralcurvemember","doublepanelhorizontalwindow","spaceprogram","distributionflowelementtype","plastic_window","distributionelement","relschedulescostitems","butterfly_roof","mansard_roof","structurallinearaction","heatexchangertype","freeform","buildingelementproxytype","structuralcurvemembervarying","insulation","triplepanelhorizontal","relconnectsports","slidingvertical","motorconnectiontype","roof","elementcomponent","lintel","elementedwall","column","filtertype","mechanicalfastenertype","wall","straight","windowpanelproperties","distributionflowelement","two_quarter_turn_ramp","coiltype","tiltandturnrighthand","double_door__double_swing","openingelement","reinforcementdefinitionproperties","flowcontroller","membrane","triplepaneltop","structuralanalysismodel","relflowcontrolelements","doorliningproperties","electricgeneratortype","wallstandardcase","half_turn_ramp","threequarterwindingstair","flowfittingtype","quarterwindingstair","cablecarriersegmenttype","gable_roof","slidinghorizontal","mullion","shed_roof","spatialstructureelement","pumptype","collar","door","sanitaryterminaltype","actor","stairflight","triplepanelrightwindow","singlepanel","reldefinesbyproperties","move","occupant","element","support","doubleacting","tendonanchor","curtainwall","electricalelement","ramp","buildingstorey","handrail","airterminaltype","compressortype","folding","structuralsurfaceconnection","windowstyleoperationenum","polygonal","structuralresultgroup","protectivedevicetype","flowcontrollertype","space","reldecomposes","triplepanelright","equipmentstandard","featureelementaddition","plate_member","structuralpointaction","structuralreaction","curvedrunstair","performancehistory","triplepanelverticalwindow","evaporativecoolertype","systemfurnitureelementtype","product","propertyset","triplepanelbottomwindow","pivotvertical","relassociatesconstraint","relconnectsstructuralmember","relassociatesdocument","permit","edgefeature","twostraightrunstair","structuralactivity","middle","windowpanelpositionenum","plumbingwall","relconnectselements","structuralplanaractionvarying","doorpanelpositionenum","buildingelement","triplepanelvertical","typeobject","doublepanelvertical","roundededgefeature","airterminalboxtype","barrel_roof","reinforcingbar","threequarterturnstair","wasteterminaltype","doorstyleopertaionenum","relconnectsporttoelement","sidehungrighthand","double_swing_right","boilertype","t_beam","furnishingelement","triplepanelleftwindow","condensertype","wood_window","distributionelementtype","evaporatortype","flowstoragedevice","pad_footing","relsequence","aluminium_wood","propertydefinition","grid","beamtype","distributioncontrolelementtype","structuralsurfacemembervarying","relconnects","building","task","resource","flowfitting","furniturestandard","curtainwalltype","junctionboxtype","cladding","folding_to_right","swinging","twocurvedrunstair","wood","equipmentelement","straight_stairflight","relnests","slab","flowmovingdevicetype","sleeving","distributionchamberelementtype","timeseriesschedule","dome_roof","rampflight","buildingelementtype","relassignstoprojectorder","flowinstrumenttype","relconnectspathelements","spiral_ramp","servicelifefactor","system","floor","costitem","relconnectsstructuralactivity","soundvalue","scheduletimecontrol","relservicesbuildings","spatialstructureelementtype","relassociatesappliedvalue","footing_beam","standardwall","stackterminaltype","ductsilencertype","transportelementtype","furnituretype","structuralconnection","firesuppressionterminaltype","proxy","elementcomponenttype","airtoairheatrecoverytype","pile_cap","relassignstoproduct","electricdistributionpoint","procedure","site","tiltandturnlefthand","removablecasement","spiral","doorpaneloperationenum","roofslab","relationship","inventory","fastener","freeform_stairflight","wrapping","structuralmember","double_door_sliding","strip_footing","triplepanelleft","halfwindingstair","relcoversbldgelements","flowmovingdevice","electricalbaseproperties","laborresource","shearwall","structuralitem","double_door_folding","tubebundletype","elementtype","aluminium_window","reinforcingmesh","structurallinearactionvarying","vibrationisolatortype","control","sliding_to_right","quarterturnstair","chamferedgefeature","condition","fluidflowproperties","friction","folding_to_left","relassociateslibrary","hip_roof","cablecarrierfittingtype","fantype","ceiling","fixedcasement","tophung","buildingelementcomponent","virtualelement","transportelement","projectorderrecord","reinforcingelement","relassigns","structuralaction","structuralplanaraction","aluminium_plastic","spacetype","brace","pipesegmenttype","twoquarterturnstair","windowpaneloperationenum","transformertype","relassociates","straight_run_ramp","controllertype","relassociatesmaterial","structuralsurfacemember","electricmotortype","buildingelementproxy","spaceheatertype","distributioncontrolelement","spiralstair","relconnectswitheccentricity","relassignstoresource","columntype","fastenertype","curtain_panel","balustrade","switchingdevicetype","annotation","relcontainedinspatialstructure","reloccupiesspaces","gambrel_roof","gasterminaltype","aluminium","windowstyleconstructionenum","structuralpointreaction","hipped_gable_roof","electricheatertype","relassociatesapproval","orderaction","alarmtype","cohesion","constructionmaterialresource","workplan","sliding_to_left","reloverridesproperties","electricflowstoragedevicetype","steel_window","relspaceboundary","spiral_stairflight","double_swing_left","relcoversspaces","projectorder","flowsegmenttype","membertype","buildingelementpart","flooring","constructionequipmentresource","baseslab","port","lamptype","relconnectswithrealizingelements","tendon","walltype","pipefittingtype","workschedule","stringer","flowterminal","humidifiertype","pile","quarter_turn_ramp","guardrail","post","reldefines","outlettype","energyconversiondevicetype","relinteractionrequirements","relassignstasks","mechanicalfastener","flowtreatmentdevice","actuatortype","process","servicelife","windowstyle","stud","relassignstocontrol","cooledbeamtype","workcontrol","triplepanelbottom","two_straight_run_ramp","reldefinesbytype","relconnectsstructuralelement","relreferencedinspatialstructure","chord","single_swing_right","constructionresource","sliding","sidehunglefthand","costschedule","relassignstoprocess","electrictimecontroltype","rampflighttype","dampertype","purlin","soundproperties","slabtype","coveringtype","objectdefinition","platetype","window","revolving","double_door__single_swing__opposite_right","windowliningproperties","double_door__single_swing__opposite_left","sensortype","coolingtowertype","single_swing_left","discreteaccessorytype","crewresource","double_door__single_swing","typeproduct","object","footing","electricalcircuit","roofing","flowmetertype","doorpanelproperties","actionrequest","landing","energyconversiondevice","propertysetdefinition","rainbow_roof","ductsegmenttype","twoquarterwindingstair","relassignstogroup","steel","permeablecoveringproperties","spacethermalloadproperties","triplepaneltopwindow","structuralloadgroup","stairflighttype","flat_roof","group"
		];
		$( "#q" ).autocomplete({
			source: availableTags
		});
});