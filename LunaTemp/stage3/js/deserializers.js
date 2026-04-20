var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointSpring' )
  var i499 = data
  i498.spring = i499[0]
  i498.damper = i499[1]
  i498.targetPosition = i499[2]
  return i498
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor' )
  var i501 = data
  i500.m_TargetVelocity = i501[0]
  i500.m_Force = i501[1]
  i500.m_FreeSpin = i501[2]
  return i500
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointLimits' )
  var i503 = data
  i502.m_Min = i503[0]
  i502.m_Max = i503[1]
  i502.m_Bounciness = i503[2]
  i502.m_BounceMinVelocity = i503[3]
  i502.m_ContactDistance = i503[4]
  i502.minBounce = i503[5]
  i502.maxBounce = i503[6]
  return i502
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointDrive' )
  var i505 = data
  i504.m_PositionSpring = i505[0]
  i504.m_PositionDamper = i505[1]
  i504.m_MaximumForce = i505[2]
  i504.m_UseAcceleration = i505[3]
  return i504
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i507 = data
  i506.m_Spring = i507[0]
  i506.m_Damper = i507[1]
  return i506
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i509 = data
  i508.m_Limit = i509[0]
  i508.m_Bounciness = i509[1]
  i508.m_ContactDistance = i509[2]
  return i508
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i511 = data
  i510.m_ExtremumSlip = i511[0]
  i510.m_ExtremumValue = i511[1]
  i510.m_AsymptoteSlip = i511[2]
  i510.m_AsymptoteValue = i511[3]
  i510.m_Stiffness = i511[4]
  return i510
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i513 = data
  i512.m_LowerAngle = i513[0]
  i512.m_UpperAngle = i513[1]
  return i512
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i515 = data
  i514.m_MotorSpeed = i515[0]
  i514.m_MaximumMotorTorque = i515[1]
  return i514
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i517 = data
  i516.m_DampingRatio = i517[0]
  i516.m_Frequency = i517[1]
  i516.m_Angle = i517[2]
  return i516
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i519 = data
  i518.m_LowerTranslation = i519[0]
  i518.m_UpperTranslation = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i520 = root || new pc.UnityMaterial()
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'shader')
  i520.renderQueue = i521[3]
  i520.enableInstancing = !!i521[4]
  var i523 = i521[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i523[i + 0]) );
  }
  i520.floatParameters = i522
  var i525 = i521[6]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i525[i + 0]) );
  }
  i520.colorParameters = i524
  var i527 = i521[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i527[i + 0]) );
  }
  i520.vectorParameters = i526
  var i529 = i521[8]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i529[i + 0]) );
  }
  i520.textureParameters = i528
  var i531 = i521[9]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i531[i + 0]) );
  }
  i520.materialFlags = i530
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i539 = data
  i538.name = i539[0]
  i538.value = new pc.Color(i539[1], i539[2], i539[3], i539[4])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i543 = data
  i542.name = i543[0]
  i542.value = new pc.Vec4( i543[1], i543[2], i543[3], i543[4] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'value')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i551 = data
  i550.name = i551[0]
  i550.enabled = !!i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i553 = data
  i552.name = i553[0]
  i552.width = i553[1]
  i552.height = i553[2]
  i552.mipmapCount = i553[3]
  i552.anisoLevel = i553[4]
  i552.filterMode = i553[5]
  i552.hdr = !!i553[6]
  i552.format = i553[7]
  i552.wrapMode = i553[8]
  i552.alphaIsTransparency = !!i553[9]
  i552.alphaSource = i553[10]
  i552.graphicsFormat = i553[11]
  i552.sRGBTexture = !!i553[12]
  i552.desiredColorSpace = i553[13]
  i552.wrapU = i553[14]
  i552.wrapV = i553[15]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i555 = data
  i554.name = i555[0]
  i554.atlasId = i555[1]
  i554.mipmapCount = i555[2]
  i554.hdr = !!i555[3]
  i554.size = i555[4]
  i554.anisoLevel = i555[5]
  i554.filterMode = i555[6]
  var i557 = i555[7]
  var i556 = []
  for(var i = 0; i < i557.length; i += 4) {
    i556.push( UnityEngine.Rect.MinMaxRect(i557[i + 0], i557[i + 1], i557[i + 2], i557[i + 3]) );
  }
  i554.rects = i556
  i554.wrapU = i555[8]
  i554.wrapV = i555[9]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i561 = data
  i560.name = i561[0]
  i560.index = i561[1]
  i560.startup = !!i561[2]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i563 = data
  i562.aspect = i563[0]
  i562.orthographic = !!i563[1]
  i562.orthographicSize = i563[2]
  i562.backgroundColor = new pc.Color(i563[3], i563[4], i563[5], i563[6])
  i562.nearClipPlane = i563[7]
  i562.farClipPlane = i563[8]
  i562.fieldOfView = i563[9]
  i562.depth = i563[10]
  i562.clearFlags = i563[11]
  i562.cullingMask = i563[12]
  i562.rect = i563[13]
  request.r(i563[14], i563[15], 0, i562, 'targetTexture')
  i562.usePhysicalProperties = !!i563[16]
  i562.focalLength = i563[17]
  i562.sensorSize = new pc.Vec2( i563[18], i563[19] )
  i562.lensShift = new pc.Vec2( i563[20], i563[21] )
  i562.gateFit = i563[22]
  i562.commandBufferCount = i563[23]
  i562.cameraType = i563[24]
  i562.enabled = !!i563[25]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i565 = data
  i564.name = i565[0]
  i564.tagId = i565[1]
  i564.enabled = !!i565[2]
  i564.isStatic = !!i565[3]
  i564.layer = i565[4]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i567 = data
  i566.type = i567[0]
  i566.color = new pc.Color(i567[1], i567[2], i567[3], i567[4])
  i566.cullingMask = i567[5]
  i566.intensity = i567[6]
  i566.range = i567[7]
  i566.spotAngle = i567[8]
  i566.shadows = i567[9]
  i566.shadowNormalBias = i567[10]
  i566.shadowBias = i567[11]
  i566.shadowStrength = i567[12]
  i566.shadowResolution = i567[13]
  i566.lightmapBakeType = i567[14]
  i566.renderMode = i567[15]
  request.r(i567[16], i567[17], 0, i566, 'cookie')
  i566.cookieSize = i567[18]
  i566.shadowNearPlane = i567[19]
  i566.occlusionMaskChannel = i567[20]
  i566.enabled = !!i567[21]
  return i566
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i569 = data
  i568.m_Version = i569[0]
  i568.m_UsePipelineSettings = !!i569[1]
  i568.m_AdditionalLightsShadowResolutionTier = i569[2]
  i568.m_LightLayerMask = i569[3]
  i568.m_RenderingLayers = i569[4]
  i568.m_CustomShadowLayers = !!i569[5]
  i568.m_ShadowLayerMask = i569[6]
  i568.m_ShadowRenderingLayers = i569[7]
  i568.m_LightCookieSize = new pc.Vec2( i569[8], i569[9] )
  i568.m_LightCookieOffset = new pc.Vec2( i569[10], i569[11] )
  i568.m_SoftShadowQuality = i569[12]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i571 = data
  i570.ambientIntensity = i571[0]
  i570.reflectionIntensity = i571[1]
  i570.ambientMode = i571[2]
  i570.ambientLight = new pc.Color(i571[3], i571[4], i571[5], i571[6])
  i570.ambientSkyColor = new pc.Color(i571[7], i571[8], i571[9], i571[10])
  i570.ambientGroundColor = new pc.Color(i571[11], i571[12], i571[13], i571[14])
  i570.ambientEquatorColor = new pc.Color(i571[15], i571[16], i571[17], i571[18])
  i570.fogColor = new pc.Color(i571[19], i571[20], i571[21], i571[22])
  i570.fogEndDistance = i571[23]
  i570.fogStartDistance = i571[24]
  i570.fogDensity = i571[25]
  i570.fog = !!i571[26]
  request.r(i571[27], i571[28], 0, i570, 'skybox')
  i570.fogMode = i571[29]
  var i573 = i571[30]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i573[i + 0]) );
  }
  i570.lightmaps = i572
  i570.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i571[31], i570.lightProbes)
  i570.lightmapsMode = i571[32]
  i570.mixedBakeMode = i571[33]
  i570.environmentLightingMode = i571[34]
  i570.ambientProbe = new pc.SphericalHarmonicsL2(i571[35])
  i570.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i571[36])
  i570.useReferenceAmbientProbe = !!i571[37]
  request.r(i571[38], i571[39], 0, i570, 'customReflection')
  request.r(i571[40], i571[41], 0, i570, 'defaultReflection')
  i570.defaultReflectionMode = i571[42]
  i570.defaultReflectionResolution = i571[43]
  i570.sunLightObjectId = i571[44]
  i570.pixelLightCount = i571[45]
  i570.defaultReflectionHDR = !!i571[46]
  i570.hasLightDataAsset = !!i571[47]
  i570.hasManualGenerate = !!i571[48]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'lightmapColor')
  request.r(i577[2], i577[3], 0, i576, 'lightmapDirection')
  request.r(i577[4], i577[5], 0, i576, 'shadowMask')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i578 = root || new UnityEngine.LightProbes()
  var i579 = data
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i587 = data
  i586.pivot = new pc.Vec2( i587[0], i587[1] )
  i586.anchorMin = new pc.Vec2( i587[2], i587[3] )
  i586.anchorMax = new pc.Vec2( i587[4], i587[5] )
  i586.sizeDelta = new pc.Vec2( i587[6], i587[7] )
  i586.anchoredPosition3D = new pc.Vec3( i587[8], i587[9], i587[10] )
  i586.rotation = new pc.Quat(i587[11], i587[12], i587[13], i587[14])
  i586.scale = new pc.Vec3( i587[15], i587[16], i587[17] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i589 = data
  i588.planeDistance = i589[0]
  i588.referencePixelsPerUnit = i589[1]
  i588.isFallbackOverlay = !!i589[2]
  i588.renderMode = i589[3]
  i588.renderOrder = i589[4]
  i588.sortingLayerName = i589[5]
  i588.sortingOrder = i589[6]
  i588.scaleFactor = i589[7]
  request.r(i589[8], i589[9], 0, i588, 'worldCamera')
  i588.overrideSorting = !!i589[10]
  i588.pixelPerfect = !!i589[11]
  i588.targetDisplay = i589[12]
  i588.overridePixelPerfect = !!i589[13]
  i588.enabled = !!i589[14]
  return i588
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i591 = data
  i590.m_UiScaleMode = i591[0]
  i590.m_ReferencePixelsPerUnit = i591[1]
  i590.m_ScaleFactor = i591[2]
  i590.m_ReferenceResolution = new pc.Vec2( i591[3], i591[4] )
  i590.m_ScreenMatchMode = i591[5]
  i590.m_MatchWidthOrHeight = i591[6]
  i590.m_PhysicalUnit = i591[7]
  i590.m_FallbackScreenDPI = i591[8]
  i590.m_DefaultSpriteDPI = i591[9]
  i590.m_DynamicPixelsPerUnit = i591[10]
  i590.m_PresetInfoIsWorld = !!i591[11]
  return i590
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i593 = data
  i592.m_IgnoreReversedGraphics = !!i593[0]
  i592.m_BlockingObjects = i593[1]
  i592.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i593[2] )
  return i592
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'panelPrefab')
  var i597 = i595[2]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i597.length; i += 1) {
    i596.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i597[i + 0]));
  }
  i594.prefabs = i596
  return i594
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i601 = data
  i600.type = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'prefab')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i603 = data
  i602.cullTransparentMesh = !!i603[0]
  return i602
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Image' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_Sprite')
  i604.m_Type = i605[2]
  i604.m_PreserveAspect = !!i605[3]
  i604.m_FillCenter = !!i605[4]
  i604.m_FillMethod = i605[5]
  i604.m_FillAmount = i605[6]
  i604.m_FillClockwise = !!i605[7]
  i604.m_FillOrigin = i605[8]
  i604.m_UseSpriteMesh = !!i605[9]
  i604.m_PixelsPerUnitMultiplier = i605[10]
  request.r(i605[11], i605[12], 0, i604, 'm_Material')
  i604.m_Maskable = !!i605[13]
  i604.m_Color = new pc.Color(i605[14], i605[15], i605[16], i605[17])
  i604.m_RaycastTarget = !!i605[18]
  i604.m_RaycastPadding = new pc.Vec4( i605[19], i605[20], i605[21], i605[22] )
  return i604
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i607 = data
  i606.m_Spacing = i607[0]
  i606.m_ChildForceExpandWidth = !!i607[1]
  i606.m_ChildForceExpandHeight = !!i607[2]
  i606.m_ChildControlWidth = !!i607[3]
  i606.m_ChildControlHeight = !!i607[4]
  i606.m_ChildScaleWidth = !!i607[5]
  i606.m_ChildScaleHeight = !!i607[6]
  i606.m_ReverseArrangement = !!i607[7]
  i606.m_Padding = UnityEngine.RectOffset.FromPaddings(i607[8], i607[9], i607[10], i607[11])
  i606.m_ChildAlignment = i607[12]
  return i606
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i609 = data
  i608.m_HorizontalFit = i609[0]
  i608.m_VerticalFit = i609[1]
  return i608
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'contentHolder')
  return i610
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'nameLabel')
  request.r(i613[2], i613[3], 0, i612, 'scrollRect')
  request.r(i613[4], i613[5], 0, i612, 'viewport')
  request.r(i613[6], i613[7], 0, i612, 'Canvas')
  return i612
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i615 = data
  i614.m_IgnoreLayout = !!i615[0]
  i614.m_MinWidth = i615[1]
  i614.m_MinHeight = i615[2]
  i614.m_PreferredWidth = i615[3]
  i614.m_PreferredHeight = i615[4]
  i614.m_FlexibleWidth = i615[5]
  i614.m_FlexibleHeight = i615[6]
  i614.m_LayoutPriority = i615[7]
  return i614
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Button' )
  var i617 = data
  i616.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i617[0], i616.m_OnClick)
  i616.m_Navigation = request.d('UnityEngine.UI.Navigation', i617[1], i616.m_Navigation)
  i616.m_Transition = i617[2]
  i616.m_Colors = request.d('UnityEngine.UI.ColorBlock', i617[3], i616.m_Colors)
  i616.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i617[4], i616.m_SpriteState)
  i616.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i617[5], i616.m_AnimationTriggers)
  i616.m_Interactable = !!i617[6]
  request.r(i617[7], i617[8], 0, i616, 'm_TargetGraphic')
  return i616
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i619 = data
  i618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i619[0], i618.m_PersistentCalls)
  return i618
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i621 = data
  var i623 = i621[0]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i623.length; i += 1) {
    i622.add(request.d('UnityEngine.Events.PersistentCall', i623[i + 0]));
  }
  i620.m_Calls = i622
  return i620
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_Target')
  i626.m_TargetAssemblyTypeName = i627[2]
  i626.m_MethodName = i627[3]
  i626.m_Mode = i627[4]
  i626.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i627[5], i626.m_Arguments)
  i626.m_CallState = i627[6]
  return i626
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_ObjectArgument')
  i628.m_ObjectArgumentAssemblyTypeName = i629[2]
  i628.m_IntArgument = i629[3]
  i628.m_FloatArgument = i629[4]
  i628.m_StringArgument = i629[5]
  i628.m_BoolArgument = !!i629[6]
  return i628
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i631 = data
  i630.m_Mode = i631[0]
  i630.m_WrapAround = !!i631[1]
  request.r(i631[2], i631[3], 0, i630, 'm_SelectOnUp')
  request.r(i631[4], i631[5], 0, i630, 'm_SelectOnDown')
  request.r(i631[6], i631[7], 0, i630, 'm_SelectOnLeft')
  request.r(i631[8], i631[9], 0, i630, 'm_SelectOnRight')
  return i630
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i633 = data
  i632.m_NormalColor = new pc.Color(i633[0], i633[1], i633[2], i633[3])
  i632.m_HighlightedColor = new pc.Color(i633[4], i633[5], i633[6], i633[7])
  i632.m_PressedColor = new pc.Color(i633[8], i633[9], i633[10], i633[11])
  i632.m_SelectedColor = new pc.Color(i633[12], i633[13], i633[14], i633[15])
  i632.m_DisabledColor = new pc.Color(i633[16], i633[17], i633[18], i633[19])
  i632.m_ColorMultiplier = i633[20]
  i632.m_FadeDuration = i633[21]
  return i632
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_HighlightedSprite')
  request.r(i635[2], i635[3], 0, i634, 'm_PressedSprite')
  request.r(i635[4], i635[5], 0, i634, 'm_SelectedSprite')
  request.r(i635[6], i635[7], 0, i634, 'm_DisabledSprite')
  return i634
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i637 = data
  i636.m_NormalTrigger = i637[0]
  i636.m_HighlightedTrigger = i637[1]
  i636.m_PressedTrigger = i637[2]
  i636.m_SelectedTrigger = i637[3]
  i636.m_DisabledTrigger = i637[4]
  return i636
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Text' )
  var i639 = data
  i638.m_FontData = request.d('UnityEngine.UI.FontData', i639[0], i638.m_FontData)
  i638.m_Text = i639[1]
  request.r(i639[2], i639[3], 0, i638, 'm_Material')
  i638.m_Maskable = !!i639[4]
  i638.m_Color = new pc.Color(i639[5], i639[6], i639[7], i639[8])
  i638.m_RaycastTarget = !!i639[9]
  i638.m_RaycastPadding = new pc.Vec4( i639[10], i639[11], i639[12], i639[13] )
  return i638
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.FontData' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_Font')
  i640.m_FontSize = i641[2]
  i640.m_FontStyle = i641[3]
  i640.m_BestFit = !!i641[4]
  i640.m_MinSize = i641[5]
  i640.m_MaxSize = i641[6]
  i640.m_Alignment = i641[7]
  i640.m_AlignByGeometry = !!i641[8]
  i640.m_RichText = !!i641[9]
  i640.m_HorizontalOverflow = i641[10]
  i640.m_VerticalOverflow = i641[11]
  i640.m_LineSpacing = i641[12]
  return i640
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_Content')
  i642.m_Horizontal = !!i643[2]
  i642.m_Vertical = !!i643[3]
  i642.m_MovementType = i643[4]
  i642.m_Elasticity = i643[5]
  i642.m_Inertia = !!i643[6]
  i642.m_DecelerationRate = i643[7]
  i642.m_ScrollSensitivity = i643[8]
  request.r(i643[9], i643[10], 0, i642, 'm_Viewport')
  request.r(i643[11], i643[12], 0, i642, 'm_HorizontalScrollbar')
  request.r(i643[13], i643[14], 0, i642, 'm_VerticalScrollbar')
  i642.m_HorizontalScrollbarVisibility = i643[15]
  i642.m_VerticalScrollbarVisibility = i643[16]
  i642.m_HorizontalScrollbarSpacing = i643[17]
  i642.m_VerticalScrollbarSpacing = i643[18]
  i642.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i643[19], i642.m_OnValueChanged)
  return i642
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i645 = data
  i644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i645[0], i644.m_PersistentCalls)
  return i644
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Mask' )
  var i647 = data
  i646.m_ShowMaskGraphic = !!i647[0]
  return i646
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'm_HandleRect')
  i648.m_Direction = i649[2]
  i648.m_Value = i649[3]
  i648.m_Size = i649[4]
  i648.m_NumberOfSteps = i649[5]
  i648.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i649[6], i648.m_OnValueChanged)
  i648.m_Navigation = request.d('UnityEngine.UI.Navigation', i649[7], i648.m_Navigation)
  i648.m_Transition = i649[8]
  i648.m_Colors = request.d('UnityEngine.UI.ColorBlock', i649[9], i648.m_Colors)
  i648.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i649[10], i648.m_SpriteState)
  i648.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i649[11], i648.m_AnimationTriggers)
  i648.m_Interactable = !!i649[12]
  request.r(i649[13], i649[14], 0, i648, 'm_TargetGraphic')
  return i648
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i651 = data
  i650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i651[0], i650.m_PersistentCalls)
  return i650
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i655[i + 0]));
  }
  i652.m_Delegates = i654
  return i652
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i659 = data
  i658.eventID = i659[0]
  i658.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i659[1], i658.callback)
  return i658
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i661 = data
  i660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i661[0], i660.m_PersistentCalls)
  return i660
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'nameLabel')
  request.r(i663[2], i663[3], 0, i662, 'valueLabel')
  i662.colorDefault = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.colorSelected = new pc.Color(i663[8], i663[9], i663[10], i663[11])
  return i662
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'nameLabel')
  request.r(i665[2], i665[3], 0, i664, 'valueToggle')
  request.r(i665[4], i665[5], 0, i664, 'checkmarkImage')
  i664.colorDefault = new pc.Color(i665[6], i665[7], i665[8], i665[9])
  i664.colorSelected = new pc.Color(i665[10], i665[11], i665[12], i665[13])
  return i664
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i667 = data
  i666.toggleTransition = i667[0]
  request.r(i667[1], i667[2], 0, i666, 'graphic')
  i666.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i667[3], i666.onValueChanged)
  request.r(i667[4], i667[5], 0, i666, 'm_Group')
  i666.m_IsOn = !!i667[6]
  i666.m_Navigation = request.d('UnityEngine.UI.Navigation', i667[7], i666.m_Navigation)
  i666.m_Transition = i667[8]
  i666.m_Colors = request.d('UnityEngine.UI.ColorBlock', i667[9], i666.m_Colors)
  i666.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i667[10], i666.m_SpriteState)
  i666.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i667[11], i666.m_AnimationTriggers)
  i666.m_Interactable = !!i667[12]
  request.r(i667[13], i667[14], 0, i666, 'm_TargetGraphic')
  return i666
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i669 = data
  i668.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i669[0], i668.m_PersistentCalls)
  return i668
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'nameLabel')
  request.r(i671[2], i671[3], 0, i670, 'valueLabel')
  i670.colorDefault = new pc.Color(i671[4], i671[5], i671[6], i671[7])
  i670.colorSelected = new pc.Color(i671[8], i671[9], i671[10], i671[11])
  return i670
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'nameLabel')
  request.r(i673[2], i673[3], 0, i672, 'valueLabel')
  i672.colorDefault = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.colorSelected = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  return i672
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'nameLabel')
  request.r(i675[2], i675[3], 0, i674, 'valueLabel')
  i674.colorDefault = new pc.Color(i675[4], i675[5], i675[6], i675[7])
  i674.colorSelected = new pc.Color(i675[8], i675[9], i675[10], i675[11])
  return i674
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'nextButtonText')
  request.r(i677[2], i677[3], 0, i676, 'previousButtonText')
  request.r(i677[4], i677[5], 0, i676, 'nameLabel')
  request.r(i677[6], i677[7], 0, i676, 'valueLabel')
  i676.colorDefault = new pc.Color(i677[8], i677[9], i677[10], i677[11])
  i676.colorSelected = new pc.Color(i677[12], i677[13], i677[14], i677[15])
  return i676
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'nameLabel')
  i678.colorDefault = new pc.Color(i679[2], i679[3], i679[4], i679[5])
  i678.colorSelected = new pc.Color(i679[6], i679[7], i679[8], i679[9])
  return i678
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'nameLabel')
  request.r(i681[2], i681[3], 0, i680, 'valueToggle')
  i680.colorDefault = new pc.Color(i681[4], i681[5], i681[6], i681[7])
  i680.colorSelected = new pc.Color(i681[8], i681[9], i681[10], i681[11])
  return i680
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'content')
  request.r(i683[2], i683[3], 0, i682, 'arrowOpened')
  request.r(i683[4], i683[5], 0, i682, 'arrowClosed')
  i682.toggleTransition = i683[6]
  request.r(i683[7], i683[8], 0, i682, 'graphic')
  i682.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i683[9], i682.onValueChanged)
  request.r(i683[10], i683[11], 0, i682, 'm_Group')
  i682.m_IsOn = !!i683[12]
  i682.m_Navigation = request.d('UnityEngine.UI.Navigation', i683[13], i682.m_Navigation)
  i682.m_Transition = i683[14]
  i682.m_Colors = request.d('UnityEngine.UI.ColorBlock', i683[15], i682.m_Colors)
  i682.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i683[16], i682.m_SpriteState)
  i682.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i683[17], i682.m_AnimationTriggers)
  i682.m_Interactable = !!i683[18]
  request.r(i683[19], i683[20], 0, i682, 'm_TargetGraphic')
  return i682
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'nameLabel')
  request.r(i685[2], i685[3], 0, i684, 'valueToggle')
  request.r(i685[4], i685[5], 0, i684, 'colorImage')
  request.r(i685[6], i685[7], 0, i684, 'fieldR')
  request.r(i685[8], i685[9], 0, i684, 'fieldG')
  request.r(i685[10], i685[11], 0, i684, 'fieldB')
  request.r(i685[12], i685[13], 0, i684, 'fieldA')
  i684.colorDefault = new pc.Color(i685[14], i685[15], i685[16], i685[17])
  i684.colorSelected = new pc.Color(i685[18], i685[19], i685[20], i685[21])
  return i684
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'nameLabel')
  request.r(i687[2], i687[3], 0, i686, 'valueLabel')
  i686.colorDefault = new pc.Color(i687[4], i687[5], i687[6], i687[7])
  i686.colorSelected = new pc.Color(i687[8], i687[9], i687[10], i687[11])
  return i686
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'nameLabel')
  request.r(i689[2], i689[3], 0, i688, 'valueToggle')
  request.r(i689[4], i689[5], 0, i688, 'fieldX')
  request.r(i689[6], i689[7], 0, i688, 'fieldY')
  i688.colorDefault = new pc.Color(i689[8], i689[9], i689[10], i689[11])
  i688.colorSelected = new pc.Color(i689[12], i689[13], i689[14], i689[15])
  return i688
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'nameLabel')
  request.r(i691[2], i691[3], 0, i690, 'valueToggle')
  request.r(i691[4], i691[5], 0, i690, 'fieldX')
  request.r(i691[6], i691[7], 0, i690, 'fieldY')
  request.r(i691[8], i691[9], 0, i690, 'fieldZ')
  i690.colorDefault = new pc.Color(i691[10], i691[11], i691[12], i691[13])
  i690.colorSelected = new pc.Color(i691[14], i691[15], i691[16], i691[17])
  return i690
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'nameLabel')
  request.r(i693[2], i693[3], 0, i692, 'valueToggle')
  request.r(i693[4], i693[5], 0, i692, 'fieldX')
  request.r(i693[6], i693[7], 0, i692, 'fieldY')
  request.r(i693[8], i693[9], 0, i692, 'fieldZ')
  request.r(i693[10], i693[11], 0, i692, 'fieldW')
  i692.colorDefault = new pc.Color(i693[12], i693[13], i693[14], i693[15])
  i692.colorSelected = new pc.Color(i693[16], i693[17], i693[18], i693[19])
  return i692
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i695 = data
  i694.colorDefault = new pc.Color(i695[0], i695[1], i695[2], i695[3])
  i694.colorSelected = new pc.Color(i695[4], i695[5], i695[6], i695[7])
  return i694
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i697 = data
  i696.m_Spacing = i697[0]
  i696.m_ChildForceExpandWidth = !!i697[1]
  i696.m_ChildForceExpandHeight = !!i697[2]
  i696.m_ChildControlWidth = !!i697[3]
  i696.m_ChildControlHeight = !!i697[4]
  i696.m_ChildScaleWidth = !!i697[5]
  i696.m_ChildScaleHeight = !!i697[6]
  i696.m_ReverseArrangement = !!i697[7]
  i696.m_Padding = UnityEngine.RectOffset.FromPaddings(i697[8], i697[9], i697[10], i697[11])
  i696.m_ChildAlignment = i697[12]
  return i696
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i699 = data
  i698.colorDefault = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  i698.colorSelected = new pc.Color(i699[4], i699[5], i699[6], i699[7])
  return i698
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'nameLabel')
  request.r(i701[2], i701[3], 0, i700, 'header')
  i700.colorDefault = new pc.Color(i701[4], i701[5], i701[6], i701[7])
  i700.colorSelected = new pc.Color(i701[8], i701[9], i701[10], i701[11])
  return i700
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'nameLabel')
  request.r(i703[2], i703[3], 0, i702, 'valueToggle')
  var i705 = i703[4]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 1, i704, '')
  }
  i702.toggles = i704
  i702.colorDefault = new pc.Color(i703[5], i703[6], i703[7], i703[8])
  i702.colorSelected = new pc.Color(i703[9], i703[10], i703[11], i703[12])
  return i702
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'nameLabel')
  request.r(i709[2], i709[3], 0, i708, 'valueToggle')
  request.r(i709[4], i709[5], 0, i708, 'checkmarkImage')
  i708.colorDefault = new pc.Color(i709[6], i709[7], i709[8], i709[9])
  i708.colorSelected = new pc.Color(i709[10], i709[11], i709[12], i709[13])
  return i708
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'nameLabel')
  request.r(i711[2], i711[3], 0, i710, 'valueToggle')
  request.r(i711[4], i711[5], 0, i710, 'checkmarkImage')
  i710.colorDefault = new pc.Color(i711[6], i711[7], i711[8], i711[9])
  i710.colorSelected = new pc.Color(i711[10], i711[11], i711[12], i711[13])
  return i710
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'nextButtonText')
  request.r(i713[2], i713[3], 0, i712, 'previousButtonText')
  request.r(i713[4], i713[5], 0, i712, 'nameLabel')
  request.r(i713[6], i713[7], 0, i712, 'valueLabel')
  i712.colorDefault = new pc.Color(i713[8], i713[9], i713[10], i713[11])
  i712.colorSelected = new pc.Color(i713[12], i713[13], i713[14], i713[15])
  return i712
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'nameLabel')
  request.r(i715[2], i715[3], 0, i714, 'valueToggle')
  i714.colorDefault = new pc.Color(i715[4], i715[5], i715[6], i715[7])
  i714.colorSelected = new pc.Color(i715[8], i715[9], i715[10], i715[11])
  return i714
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'nameLabel')
  i716.colorDefault = new pc.Color(i717[2], i717[3], i717[4], i717[5])
  i716.colorSelected = new pc.Color(i717[6], i717[7], i717[8], i717[9])
  return i716
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'nameLabel')
  request.r(i719[2], i719[3], 0, i718, 'valueLabel')
  request.r(i719[4], i719[5], 0, i718, 'progressBarRect')
  i718.colorDefault = new pc.Color(i719[6], i719[7], i719[8], i719[9])
  i718.colorSelected = new pc.Color(i719[10], i719[11], i719[12], i719[13])
  return i718
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'nameLabel')
  request.r(i721[2], i721[3], 0, i720, 'valueLabel')
  i720.colorDefault = new pc.Color(i721[4], i721[5], i721[6], i721[7])
  i720.colorSelected = new pc.Color(i721[8], i721[9], i721[10], i721[11])
  return i720
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'nameLabel')
  request.r(i723[2], i723[3], 0, i722, 'valueLabel')
  i722.colorDefault = new pc.Color(i723[4], i723[5], i723[6], i723[7])
  i722.colorSelected = new pc.Color(i723[8], i723[9], i723[10], i723[11])
  return i722
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'nextButtonText')
  request.r(i725[2], i725[3], 0, i724, 'previousButtonText')
  request.r(i725[4], i725[5], 0, i724, 'nameLabel')
  request.r(i725[6], i725[7], 0, i724, 'valueLabel')
  i724.colorDefault = new pc.Color(i725[8], i725[9], i725[10], i725[11])
  i724.colorSelected = new pc.Color(i725[12], i725[13], i725[14], i725[15])
  return i724
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'nextButtonText')
  request.r(i727[2], i727[3], 0, i726, 'previousButtonText')
  request.r(i727[4], i727[5], 0, i726, 'nameLabel')
  request.r(i727[6], i727[7], 0, i726, 'valueLabel')
  i726.colorDefault = new pc.Color(i727[8], i727[9], i727[10], i727[11])
  i726.colorSelected = new pc.Color(i727[12], i727[13], i727[14], i727[15])
  return i726
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'panel')
  request.r(i729[2], i729[3], 0, i728, 'valuePrefab')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i731 = data
  i730.AdditionalLightsRenderingMode = i731[0]
  i730.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i731[1], i730.LightRenderingMode)
  i730.MainLightRenderingModeValue = i731[2]
  i730.SupportsMainLightShadows = !!i731[3]
  i730.MainLightShadowmapResolutionValue = i731[4]
  i730.SupportsSoftShadows = !!i731[5]
  i730.SoftShadowQualityValue = i731[6]
  i730.ShadowDistance = i731[7]
  i730.ShadowCascadeCount = i731[8]
  i730.Cascade2Split = i731[9]
  i730.Cascade3Split = new pc.Vec2( i731[10], i731[11] )
  i730.Cascade4Split = new pc.Vec3( i731[12], i731[13], i731[14] )
  i730.CascadeBorder = i731[15]
  i730.ShadowDepthBias = i731[16]
  i730.ShadowNormalBias = i731[17]
  i730.RequireDepthTexture = !!i731[18]
  i730.RequireOpaqueTexture = !!i731[19]
  i730.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i731[20], i730.scriptableRendererData)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i733 = data
  i732.Disabled = i733[0]
  i732.PerVertex = i733[1]
  i732.PerPixel = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i735 = data
  i734.opaqueLayerMask = i735[0]
  i734.transparentLayerMask = i735[1]
  var i737 = i735[2]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i737[i + 0]) );
  }
  i734.RenderObjectsFeatures = i736
  i734.name = i735[3]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i741 = data
  i740.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i741[0], i740.settings)
  i740.name = i741[1]
  i740.typeName = i741[2]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i743 = data
  var i745 = i743[0]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i745[i + 0]));
  }
  i742.ShaderCompilationErrors = i744
  i742.name = i743[1]
  i742.guid = i743[2]
  var i747 = i743[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i742.shaderDefinedKeywords = i746
  var i749 = i743[4]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i749[i + 0]) );
  }
  i742.passes = i748
  var i751 = i743[5]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i751[i + 0]) );
  }
  i742.usePasses = i750
  var i753 = i743[6]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i753[i + 0]) );
  }
  i742.defaultParameterValues = i752
  request.r(i743[7], i743[8], 0, i742, 'unityFallbackShader')
  i742.readDepth = !!i743[9]
  i742.hasDepthOnlyPass = !!i743[10]
  i742.isCreatedByShaderGraph = !!i743[11]
  i742.disableBatching = !!i743[12]
  i742.compiled = !!i743[13]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i757 = data
  i756.shaderName = i757[0]
  i756.errorMessage = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i762 = root || new pc.UnityShaderPass()
  var i763 = data
  i762.id = i763[0]
  i762.subShaderIndex = i763[1]
  i762.name = i763[2]
  i762.passType = i763[3]
  i762.grabPassTextureName = i763[4]
  i762.usePass = !!i763[5]
  i762.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[6], i762.zTest)
  i762.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[7], i762.zWrite)
  i762.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[8], i762.culling)
  i762.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i763[9], i762.blending)
  i762.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i763[10], i762.alphaBlending)
  i762.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[11], i762.colorWriteMask)
  i762.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[12], i762.offsetUnits)
  i762.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[13], i762.offsetFactor)
  i762.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[14], i762.stencilRef)
  i762.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[15], i762.stencilReadMask)
  i762.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[16], i762.stencilWriteMask)
  i762.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i763[17], i762.stencilOp)
  i762.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i763[18], i762.stencilOpFront)
  i762.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i763[19], i762.stencilOpBack)
  var i765 = i763[20]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i765[i + 0]) );
  }
  i762.tags = i764
  var i767 = i763[21]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i762.passDefinedKeywords = i766
  var i769 = i763[22]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i769[i + 0]) );
  }
  i762.passDefinedKeywordGroups = i768
  var i771 = i763[23]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i771[i + 0]) );
  }
  i762.variants = i770
  var i773 = i763[24]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i773[i + 0]) );
  }
  i762.excludedVariants = i772
  i762.hasDepthReader = !!i763[25]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i775 = data
  i774.val = i775[0]
  i774.name = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i777 = data
  i776.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[0], i776.src)
  i776.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[1], i776.dst)
  i776.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[2], i776.op)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i779 = data
  i778.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[0], i778.pass)
  i778.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[1], i778.fail)
  i778.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[2], i778.zFail)
  i778.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[3], i778.comp)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i783 = data
  i782.name = i783[0]
  i782.value = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i787 = data
  var i789 = i787[0]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i786.keywords = i788
  i786.hasDiscard = !!i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i793 = data
  i792.passId = i793[0]
  i792.subShaderIndex = i793[1]
  var i795 = i793[2]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i792.keywords = i794
  i792.vertexProgram = i793[3]
  i792.fragmentProgram = i793[4]
  i792.exportedForWebGl2 = !!i793[5]
  i792.readDepth = !!i793[6]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'shader')
  i798.pass = i799[2]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i803 = data
  i802.name = i803[0]
  i802.type = i803[1]
  i802.value = new pc.Vec4( i803[2], i803[3], i803[4], i803[5] )
  i802.textureValue = i803[6]
  i802.shaderPropertyFlag = i803[7]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i805 = data
  i804.name = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'texture')
  i804.aabb = i805[3]
  i804.vertices = i805[4]
  i804.triangles = i805[5]
  i804.textureRect = UnityEngine.Rect.MinMaxRect(i805[6], i805[7], i805[8], i805[9])
  i804.packedRect = UnityEngine.Rect.MinMaxRect(i805[10], i805[11], i805[12], i805[13])
  i804.border = new pc.Vec4( i805[14], i805[15], i805[16], i805[17] )
  i804.transparency = i805[18]
  i804.bounds = i805[19]
  i804.pixelsPerUnit = i805[20]
  i804.textureWidth = i805[21]
  i804.textureHeight = i805[22]
  i804.nativeSize = new pc.Vec2( i805[23], i805[24] )
  i804.pivot = new pc.Vec2( i805[25], i805[26] )
  i804.textureRectOffset = new pc.Vec2( i805[27], i805[28] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i807 = data
  i806.name = i807[0]
  i806.ascent = i807[1]
  i806.originalLineHeight = i807[2]
  i806.fontSize = i807[3]
  var i809 = i807[4]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i809[i + 0]) );
  }
  i806.characterInfo = i808
  request.r(i807[5], i807[6], 0, i806, 'texture')
  i806.originalFontSize = i807[7]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i813 = data
  i812.index = i813[0]
  i812.advance = i813[1]
  i812.bearing = i813[2]
  i812.glyphWidth = i813[3]
  i812.glyphHeight = i813[4]
  i812.minX = i813[5]
  i812.maxX = i813[6]
  i812.minY = i813[7]
  i812.maxY = i813[8]
  i812.uvBottomLeftX = i813[9]
  i812.uvBottomLeftY = i813[10]
  i812.uvBottomRightX = i813[11]
  i812.uvBottomRightY = i813[12]
  i812.uvTopLeftX = i813[13]
  i812.uvTopLeftY = i813[14]
  i812.uvTopRightX = i813[15]
  i812.uvTopRightY = i813[16]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i815 = data
  i814.name = i815[0]
  i814.bytes64 = i815[1]
  i814.data = i815[2]
  return i814
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.TMP_Settings' )
  var i817 = data
  i816.m_enableWordWrapping = !!i817[0]
  i816.m_enableKerning = !!i817[1]
  i816.m_enableExtraPadding = !!i817[2]
  i816.m_enableTintAllSprites = !!i817[3]
  i816.m_enableParseEscapeCharacters = !!i817[4]
  i816.m_EnableRaycastTarget = !!i817[5]
  i816.m_GetFontFeaturesAtRuntime = !!i817[6]
  i816.m_missingGlyphCharacter = i817[7]
  i816.m_warningsDisabled = !!i817[8]
  request.r(i817[9], i817[10], 0, i816, 'm_defaultFontAsset')
  i816.m_defaultFontAssetPath = i817[11]
  i816.m_defaultFontSize = i817[12]
  i816.m_defaultAutoSizeMinRatio = i817[13]
  i816.m_defaultAutoSizeMaxRatio = i817[14]
  i816.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i817[15], i817[16] )
  i816.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i817[17], i817[18] )
  i816.m_autoSizeTextContainer = !!i817[19]
  i816.m_IsTextObjectScaleStatic = !!i817[20]
  var i819 = i817[21]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i816.m_fallbackFontAssets = i818
  i816.m_matchMaterialPreset = !!i817[22]
  request.r(i817[23], i817[24], 0, i816, 'm_defaultSpriteAsset')
  i816.m_defaultSpriteAssetPath = i817[25]
  i816.m_enableEmojiSupport = !!i817[26]
  i816.m_MissingCharacterSpriteUnicode = i817[27]
  i816.m_defaultColorGradientPresetsPath = i817[28]
  request.r(i817[29], i817[30], 0, i816, 'm_defaultStyleSheet')
  i816.m_StyleSheetsResourcePath = i817[31]
  request.r(i817[32], i817[33], 0, i816, 'm_leadingCharacters')
  request.r(i817[34], i817[35], 0, i816, 'm_followingCharacters')
  i816.m_UseModernHangulLineBreakingRules = !!i817[36]
  return i816
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'atlas')
  i822.normalStyle = i823[2]
  i822.normalSpacingOffset = i823[3]
  i822.boldStyle = i823[4]
  i822.boldSpacing = i823[5]
  i822.italicStyle = i823[6]
  i822.tabSize = i823[7]
  i822.hashCode = i823[8]
  request.r(i823[9], i823[10], 0, i822, 'material')
  i822.materialHashCode = i823[11]
  i822.m_Version = i823[12]
  i822.m_SourceFontFileGUID = i823[13]
  request.r(i823[14], i823[15], 0, i822, 'm_SourceFontFile_EditorRef')
  request.r(i823[16], i823[17], 0, i822, 'm_SourceFontFile')
  i822.m_AtlasPopulationMode = i823[18]
  i822.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i823[19], i822.m_FaceInfo)
  var i825 = i823[20]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('UnityEngine.TextCore.Glyph', i825[i + 0]));
  }
  i822.m_GlyphTable = i824
  var i827 = i823[21]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('TMPro.TMP_Character', i827[i + 0]));
  }
  i822.m_CharacterTable = i826
  var i829 = i823[22]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i822.m_AtlasTextures = i828
  i822.m_AtlasTextureIndex = i823[23]
  i822.m_IsMultiAtlasTexturesEnabled = !!i823[24]
  i822.m_ClearDynamicDataOnBuild = !!i823[25]
  var i831 = i823[26]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('UnityEngine.TextCore.GlyphRect', i831[i + 0]));
  }
  i822.m_UsedGlyphRects = i830
  var i833 = i823[27]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('UnityEngine.TextCore.GlyphRect', i833[i + 0]));
  }
  i822.m_FreeGlyphRects = i832
  i822.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i823[28], i822.m_fontInfo)
  i822.m_AtlasWidth = i823[29]
  i822.m_AtlasHeight = i823[30]
  i822.m_AtlasPadding = i823[31]
  i822.m_AtlasRenderMode = i823[32]
  var i835 = i823[33]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('TMPro.TMP_Glyph', i835[i + 0]));
  }
  i822.m_glyphInfoList = i834
  i822.m_KerningTable = request.d('TMPro.KerningTable', i823[34], i822.m_KerningTable)
  i822.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i823[35], i822.m_FontFeatureTable)
  var i837 = i823[36]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i822.fallbackFontAssets = i836
  var i839 = i823[37]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 1, i838, '')
  }
  i822.m_FallbackFontAssetTable = i838
  i822.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i823[38], i822.m_CreationSettings)
  var i841 = i823[39]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('TMPro.TMP_FontWeightPair', i841[i + 0]) );
  }
  i822.m_FontWeightTable = i840
  var i843 = i823[40]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('TMPro.TMP_FontWeightPair', i843[i + 0]) );
  }
  i822.fontWeights = i842
  return i822
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i845 = data
  i844.m_FaceIndex = i845[0]
  i844.m_FamilyName = i845[1]
  i844.m_StyleName = i845[2]
  i844.m_PointSize = i845[3]
  i844.m_Scale = i845[4]
  i844.m_UnitsPerEM = i845[5]
  i844.m_LineHeight = i845[6]
  i844.m_AscentLine = i845[7]
  i844.m_CapLine = i845[8]
  i844.m_MeanLine = i845[9]
  i844.m_Baseline = i845[10]
  i844.m_DescentLine = i845[11]
  i844.m_SuperscriptOffset = i845[12]
  i844.m_SuperscriptSize = i845[13]
  i844.m_SubscriptOffset = i845[14]
  i844.m_SubscriptSize = i845[15]
  i844.m_UnderlineOffset = i845[16]
  i844.m_UnderlineThickness = i845[17]
  i844.m_StrikethroughOffset = i845[18]
  i844.m_StrikethroughThickness = i845[19]
  i844.m_TabWidth = i845[20]
  return i844
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i849 = data
  i848.m_Index = i849[0]
  i848.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i849[1], i848.m_Metrics)
  i848.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i849[2], i848.m_GlyphRect)
  i848.m_Scale = i849[3]
  i848.m_AtlasIndex = i849[4]
  i848.m_ClassDefinitionType = i849[5]
  return i848
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i851 = data
  i850.m_Width = i851[0]
  i850.m_Height = i851[1]
  i850.m_HorizontalBearingX = i851[2]
  i850.m_HorizontalBearingY = i851[3]
  i850.m_HorizontalAdvance = i851[4]
  return i850
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i853 = data
  i852.m_X = i853[0]
  i852.m_Y = i853[1]
  i852.m_Width = i853[2]
  i852.m_Height = i853[3]
  return i852
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TMP_Character' )
  var i857 = data
  i856.m_ElementType = i857[0]
  i856.m_Unicode = i857[1]
  i856.m_GlyphIndex = i857[2]
  i856.m_Scale = i857[3]
  return i856
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i863 = data
  i862.Name = i863[0]
  i862.PointSize = i863[1]
  i862.Scale = i863[2]
  i862.CharacterCount = i863[3]
  i862.LineHeight = i863[4]
  i862.Baseline = i863[5]
  i862.Ascender = i863[6]
  i862.CapHeight = i863[7]
  i862.Descender = i863[8]
  i862.CenterLine = i863[9]
  i862.SuperscriptOffset = i863[10]
  i862.SubscriptOffset = i863[11]
  i862.SubSize = i863[12]
  i862.Underline = i863[13]
  i862.UnderlineThickness = i863[14]
  i862.strikethrough = i863[15]
  i862.strikethroughThickness = i863[16]
  i862.TabWidth = i863[17]
  i862.Padding = i863[18]
  i862.AtlasWidth = i863[19]
  i862.AtlasHeight = i863[20]
  return i862
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_Glyph' )
  var i867 = data
  i866.id = i867[0]
  i866.x = i867[1]
  i866.y = i867[2]
  i866.width = i867[3]
  i866.height = i867[4]
  i866.xOffset = i867[5]
  i866.yOffset = i867[6]
  i866.xAdvance = i867[7]
  i866.scale = i867[8]
  return i866
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.KerningTable' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('TMPro.KerningPair', i871[i + 0]));
  }
  i868.kerningPairs = i870
  return i868
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.KerningPair' )
  var i875 = data
  i874.xOffset = i875[0]
  i874.m_FirstGlyph = i875[1]
  i874.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i875[2], i874.m_FirstGlyphAdjustments)
  i874.m_SecondGlyph = i875[3]
  i874.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i875[4], i874.m_SecondGlyphAdjustments)
  i874.m_IgnoreSpacingAdjustments = !!i875[5]
  return i874
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i877 = data
  var i879 = i877[0]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i879[i + 0]));
  }
  i876.m_GlyphPairAdjustmentRecords = i878
  return i876
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i883 = data
  i882.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i883[0], i882.m_FirstAdjustmentRecord)
  i882.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i883[1], i882.m_SecondAdjustmentRecord)
  i882.m_FeatureLookupFlags = i883[2]
  return i882
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i885 = data
  i884.m_GlyphIndex = i885[0]
  i884.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i885[1], i884.m_GlyphValueRecord)
  return i884
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i887 = data
  i886.m_XPlacement = i887[0]
  i886.m_YPlacement = i887[1]
  i886.m_XAdvance = i887[2]
  i886.m_YAdvance = i887[3]
  return i886
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i889 = data
  i888.sourceFontFileName = i889[0]
  i888.sourceFontFileGUID = i889[1]
  i888.pointSizeSamplingMode = i889[2]
  i888.pointSize = i889[3]
  i888.padding = i889[4]
  i888.packingMode = i889[5]
  i888.atlasWidth = i889[6]
  i888.atlasHeight = i889[7]
  i888.characterSetSelectionMode = i889[8]
  i888.characterSequence = i889[9]
  i888.referencedFontAssetGUID = i889[10]
  i888.referencedTextAssetGUID = i889[11]
  i888.fontStyle = i889[12]
  i888.fontStyleModifier = i889[13]
  i888.renderMode = i889[14]
  i888.includeFontFeatures = !!i889[15]
  return i888
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'regularTypeface')
  request.r(i893[2], i893[3], 0, i892, 'italicTypeface')
  return i892
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'spriteSheet')
  var i897 = i895[2]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('TMPro.TMP_Sprite', i897[i + 0]));
  }
  i894.spriteInfoList = i896
  var i899 = i895[3]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i894.fallbackSpriteAssets = i898
  i894.hashCode = i895[4]
  request.r(i895[5], i895[6], 0, i894, 'material')
  i894.materialHashCode = i895[7]
  i894.m_Version = i895[8]
  i894.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i895[9], i894.m_FaceInfo)
  var i901 = i895[10]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('TMPro.TMP_SpriteCharacter', i901[i + 0]));
  }
  i894.m_SpriteCharacterTable = i900
  var i903 = i895[11]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_SpriteGlyph', i903[i + 0]));
  }
  i894.m_SpriteGlyphTable = i902
  return i894
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_Sprite' )
  var i907 = data
  i906.name = i907[0]
  i906.hashCode = i907[1]
  i906.unicode = i907[2]
  i906.pivot = new pc.Vec2( i907[3], i907[4] )
  request.r(i907[5], i907[6], 0, i906, 'sprite')
  i906.id = i907[7]
  i906.x = i907[8]
  i906.y = i907[9]
  i906.width = i907[10]
  i906.height = i907[11]
  i906.xOffset = i907[12]
  i906.yOffset = i907[13]
  i906.xAdvance = i907[14]
  i906.scale = i907[15]
  return i906
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i913 = data
  i912.m_Name = i913[0]
  i912.m_HashCode = i913[1]
  i912.m_ElementType = i913[2]
  i912.m_Unicode = i913[3]
  i912.m_GlyphIndex = i913[4]
  i912.m_Scale = i913[5]
  return i912
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'sprite')
  i916.m_Index = i917[2]
  i916.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i917[3], i916.m_Metrics)
  i916.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i917[4], i916.m_GlyphRect)
  i916.m_Scale = i917[5]
  i916.m_AtlasIndex = i917[6]
  i916.m_ClassDefinitionType = i917[7]
  return i916
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i919 = data
  var i921 = i919[0]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('TMPro.TMP_Style', i921[i + 0]));
  }
  i918.m_StyleList = i920
  return i918
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_Style' )
  var i925 = data
  i924.m_Name = i925[0]
  i924.m_HashCode = i925[1]
  i924.m_OpeningDefinition = i925[2]
  i924.m_ClosingDefinition = i925[3]
  i924.m_OpeningTagArray = i925[4]
  i924.m_ClosingTagArray = i925[5]
  i924.m_OpeningTagUnicodeArray = i925[6]
  i924.m_ClosingTagUnicodeArray = i925[7]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i929[i + 0]) );
  }
  i926.files = i928
  i926.componentToPrefabIds = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i933 = data
  i932.path = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'unityObject')
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i937[i + 0]) );
  }
  i934.scriptsExecutionOrder = i936
  var i939 = i935[1]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i939[i + 0]) );
  }
  i934.sortingLayers = i938
  var i941 = i935[2]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i941[i + 0]) );
  }
  i934.cullingLayers = i940
  i934.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i935[3], i934.timeSettings)
  i934.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i935[4], i934.physicsSettings)
  i934.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i935[5], i934.physics2DSettings)
  i934.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i935[6], i934.qualitySettings)
  i934.enableRealtimeShadows = !!i935[7]
  i934.enableAutoInstancing = !!i935[8]
  i934.enableStaticBatching = !!i935[9]
  i934.enableDynamicBatching = !!i935[10]
  i934.lightmapEncodingQuality = i935[11]
  i934.desiredColorSpace = i935[12]
  var i943 = i935[13]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( i943[i + 0] );
  }
  i934.allTags = i942
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i947 = data
  i946.name = i947[0]
  i946.value = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i951 = data
  i950.id = i951[0]
  i950.name = i951[1]
  i950.value = i951[2]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i955 = data
  i954.id = i955[0]
  i954.name = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i957 = data
  i956.fixedDeltaTime = i957[0]
  i956.maximumDeltaTime = i957[1]
  i956.timeScale = i957[2]
  i956.maximumParticleTimestep = i957[3]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i959 = data
  i958.gravity = new pc.Vec3( i959[0], i959[1], i959[2] )
  i958.defaultSolverIterations = i959[3]
  i958.bounceThreshold = i959[4]
  i958.autoSyncTransforms = !!i959[5]
  i958.autoSimulation = !!i959[6]
  var i961 = i959[7]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i961[i + 0]) );
  }
  i958.collisionMatrix = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i965 = data
  i964.enabled = !!i965[0]
  i964.layerId = i965[1]
  i964.otherLayerId = i965[2]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'material')
  i966.gravity = new pc.Vec2( i967[2], i967[3] )
  i966.positionIterations = i967[4]
  i966.velocityIterations = i967[5]
  i966.velocityThreshold = i967[6]
  i966.maxLinearCorrection = i967[7]
  i966.maxAngularCorrection = i967[8]
  i966.maxTranslationSpeed = i967[9]
  i966.maxRotationSpeed = i967[10]
  i966.baumgarteScale = i967[11]
  i966.baumgarteTOIScale = i967[12]
  i966.timeToSleep = i967[13]
  i966.linearSleepTolerance = i967[14]
  i966.angularSleepTolerance = i967[15]
  i966.defaultContactOffset = i967[16]
  i966.autoSimulation = !!i967[17]
  i966.queriesHitTriggers = !!i967[18]
  i966.queriesStartInColliders = !!i967[19]
  i966.callbacksOnDisable = !!i967[20]
  i966.reuseCollisionCallbacks = !!i967[21]
  i966.autoSyncTransforms = !!i967[22]
  var i969 = i967[23]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i969[i + 0]) );
  }
  i966.collisionMatrix = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i973 = data
  i972.enabled = !!i973[0]
  i972.layerId = i973[1]
  i972.otherLayerId = i973[2]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i977[i + 0]) );
  }
  i974.qualityLevels = i976
  var i979 = i975[1]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i974.names = i978
  i974.shadows = i975[2]
  i974.anisotropicFiltering = i975[3]
  i974.antiAliasing = i975[4]
  i974.lodBias = i975[5]
  i974.shadowCascades = i975[6]
  i974.shadowDistance = i975[7]
  i974.shadowmaskMode = i975[8]
  i974.shadowProjection = i975[9]
  i974.shadowResolution = i975[10]
  i974.softParticles = !!i975[11]
  i974.softVegetation = !!i975[12]
  i974.activeColorSpace = i975[13]
  i974.desiredColorSpace = i975[14]
  i974.masterTextureLimit = i975[15]
  i974.maxQueuedFrames = i975[16]
  i974.particleRaycastBudget = i975[17]
  i974.pixelLightCount = i975[18]
  i974.realtimeReflectionProbes = !!i975[19]
  i974.shadowCascade2Split = i975[20]
  i974.shadowCascade4Split = new pc.Vec3( i975[21], i975[22], i975[23] )
  i974.streamingMipmapsActive = !!i975[24]
  i974.vSyncCount = i975[25]
  i974.asyncUploadBufferSize = i975[26]
  i974.asyncUploadTimeSlice = i975[27]
  i974.billboardsFaceCameraPosition = !!i975[28]
  i974.shadowNearPlaneOffset = i975[29]
  i974.streamingMipmapsMemoryBudget = i975[30]
  i974.maximumLODLevel = i975[31]
  i974.streamingMipmapsAddAllCameras = !!i975[32]
  i974.streamingMipmapsMaxLevelReduction = i975[33]
  i974.streamingMipmapsRenderersPerFrame = i975[34]
  i974.resolutionScalingFixedDPIFactor = i975[35]
  i974.streamingMipmapsMaxFileIORequests = i975[36]
  i974.currentQualityLevel = i975[37]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i983 = data
  i982.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i983[0], i982.Event)
  i982.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i983[1], i982.filterSettings)
  i982.overrideMaterialId = i983[2]
  i982.overrideMaterialPassIndex = i983[3]
  i982.overrideShaderId = i983[4]
  i982.overrideShaderPassIndex = i983[5]
  i982.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i983[6], i982.overrideMode)
  i982.overrideDepthState = !!i983[7]
  i982.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i983[8], i982.depthCompareFunction)
  i982.enableWrite = !!i983[9]
  i982.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i983[10], i982.stencilSettings)
  i982.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i983[11], i982.cameraSettings)
  return i982
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i985 = data
  i984.xPlacement = i985[0]
  i984.yPlacement = i985[1]
  i984.xAdvance = i985[2]
  i984.yAdvance = i985[3]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i987 = data
  i986.Value = i987[0]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i989 = data
  i988.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i989[0], i988.RenderQueueType)
  i988.LayerMask = i989[1]
  var i991 = i989[2]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i988.PassNames = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i993 = data
  i992.overrideStencilState = !!i993[0]
  i992.stencilReference = i993[1]
  i992.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i993[2], i992.stencilCompareFunctionValue)
  i992.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i993[3], i992.passOperationValue)
  i992.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i993[4], i992.failOperationValue)
  i992.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i993[5], i992.zFailOperationValue)
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i995 = data
  i994.overrideCamera = !!i995[0]
  i994.restoreCamera = !!i995[1]
  i994.offset = new pc.Vec4( i995[2], i995[3], i995[4], i995[5] )
  i994.cameraFieldOfView = i995[6]
  return i994
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[1],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[1],"100":[101],"102":[103],"104":[103],"10":[9],"39":[9],"105":[1],"106":[1],"5":[3],"107":[9],"108":[101,9],"109":[9,15],"110":[9],"111":[15,9],"112":[101],"113":[15,9],"114":[9],"115":[9],"116":[9],"13":[10],"16":[15,9],"117":[9],"12":[10],"19":[9],"118":[9],"47":[9],"119":[9],"24":[9],"120":[9],"18":[9],"28":[9],"121":[9],"122":[15,9],"123":[9],"27":[9],"23":[9],"124":[9],"22":[15,9],"32":[9],"125":[126],"127":[126],"128":[126],"129":[126],"130":[1],"131":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.GameObject","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "BNG_Test";

Deserializers.lunaInitializationTime = "04/10/2026 12:32:05";

Deserializers.lunaDaysRunning = "9.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "38617";

Deserializers.projectId = "7eb23bb9abb199e4f8a2e35812d994a9";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1838";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3084";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "c4de5ff4-6730-4178-b644-c2308b6bec7c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Tweens","Core","TweenEngine","Initialize"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

