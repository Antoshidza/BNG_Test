var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i238 = root || request.c( 'UnityEngine.JointSpring' )
  var i239 = data
  i238.spring = i239[0]
  i238.damper = i239[1]
  i238.targetPosition = i239[2]
  return i238
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i240 = root || request.c( 'UnityEngine.JointMotor' )
  var i241 = data
  i240.m_TargetVelocity = i241[0]
  i240.m_Force = i241[1]
  i240.m_FreeSpin = i241[2]
  return i240
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i242 = root || request.c( 'UnityEngine.JointLimits' )
  var i243 = data
  i242.m_Min = i243[0]
  i242.m_Max = i243[1]
  i242.m_Bounciness = i243[2]
  i242.m_BounceMinVelocity = i243[3]
  i242.m_ContactDistance = i243[4]
  i242.minBounce = i243[5]
  i242.maxBounce = i243[6]
  return i242
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.JointDrive' )
  var i245 = data
  i244.m_PositionSpring = i245[0]
  i244.m_PositionDamper = i245[1]
  i244.m_MaximumForce = i245[2]
  i244.m_UseAcceleration = i245[3]
  return i244
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i247 = data
  i246.m_Spring = i247[0]
  i246.m_Damper = i247[1]
  return i246
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i249 = data
  i248.m_Limit = i249[0]
  i248.m_Bounciness = i249[1]
  i248.m_ContactDistance = i249[2]
  return i248
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i251 = data
  i250.m_ExtremumSlip = i251[0]
  i250.m_ExtremumValue = i251[1]
  i250.m_AsymptoteSlip = i251[2]
  i250.m_AsymptoteValue = i251[3]
  i250.m_Stiffness = i251[4]
  return i250
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i253 = data
  i252.m_LowerAngle = i253[0]
  i252.m_UpperAngle = i253[1]
  return i252
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i255 = data
  i254.m_MotorSpeed = i255[0]
  i254.m_MaximumMotorTorque = i255[1]
  return i254
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i257 = data
  i256.m_DampingRatio = i257[0]
  i256.m_Frequency = i257[1]
  i256.m_Angle = i257[2]
  return i256
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i259 = data
  i258.m_LowerTranslation = i259[0]
  i258.m_UpperTranslation = i259[1]
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i260 = root || new pc.UnityMaterial()
  var i261 = data
  i260.name = i261[0]
  request.r(i261[1], i261[2], 0, i260, 'shader')
  i260.renderQueue = i261[3]
  i260.enableInstancing = !!i261[4]
  var i263 = i261[5]
  var i262 = []
  for(var i = 0; i < i263.length; i += 1) {
    i262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i263[i + 0]) );
  }
  i260.floatParameters = i262
  var i265 = i261[6]
  var i264 = []
  for(var i = 0; i < i265.length; i += 1) {
    i264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i265[i + 0]) );
  }
  i260.colorParameters = i264
  var i267 = i261[7]
  var i266 = []
  for(var i = 0; i < i267.length; i += 1) {
    i266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i267[i + 0]) );
  }
  i260.vectorParameters = i266
  var i269 = i261[8]
  var i268 = []
  for(var i = 0; i < i269.length; i += 1) {
    i268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i269[i + 0]) );
  }
  i260.textureParameters = i268
  var i271 = i261[9]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i271[i + 0]) );
  }
  i260.materialFlags = i270
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i275 = data
  i274.name = i275[0]
  i274.value = i275[1]
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i279 = data
  i278.name = i279[0]
  i278.value = new pc.Color(i279[1], i279[2], i279[3], i279[4])
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i283 = data
  i282.name = i283[0]
  i282.value = new pc.Vec4( i283[1], i283[2], i283[3], i283[4] )
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i287 = data
  i286.name = i287[0]
  request.r(i287[1], i287[2], 0, i286, 'value')
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i291 = data
  i290.name = i291[0]
  i290.enabled = !!i291[1]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i293 = data
  i292.name = i293[0]
  i292.width = i293[1]
  i292.height = i293[2]
  i292.mipmapCount = i293[3]
  i292.anisoLevel = i293[4]
  i292.filterMode = i293[5]
  i292.hdr = !!i293[6]
  i292.format = i293[7]
  i292.wrapMode = i293[8]
  i292.alphaIsTransparency = !!i293[9]
  i292.alphaSource = i293[10]
  i292.graphicsFormat = i293[11]
  i292.sRGBTexture = !!i293[12]
  i292.desiredColorSpace = i293[13]
  i292.wrapU = i293[14]
  i292.wrapV = i293[15]
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i295 = data
  i294.name = i295[0]
  i294.atlasId = i295[1]
  i294.mipmapCount = i295[2]
  i294.hdr = !!i295[3]
  i294.size = i295[4]
  i294.anisoLevel = i295[5]
  i294.filterMode = i295[6]
  var i297 = i295[7]
  var i296 = []
  for(var i = 0; i < i297.length; i += 4) {
    i296.push( UnityEngine.Rect.MinMaxRect(i297[i + 0], i297[i + 1], i297[i + 2], i297[i + 3]) );
  }
  i294.rects = i296
  i294.wrapU = i295[8]
  i294.wrapV = i295[9]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i301 = data
  i300.name = i301[0]
  i300.index = i301[1]
  i300.startup = !!i301[2]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i303 = data
  i302.aspect = i303[0]
  i302.orthographic = !!i303[1]
  i302.orthographicSize = i303[2]
  i302.backgroundColor = new pc.Color(i303[3], i303[4], i303[5], i303[6])
  i302.nearClipPlane = i303[7]
  i302.farClipPlane = i303[8]
  i302.fieldOfView = i303[9]
  i302.depth = i303[10]
  i302.clearFlags = i303[11]
  i302.cullingMask = i303[12]
  i302.rect = i303[13]
  request.r(i303[14], i303[15], 0, i302, 'targetTexture')
  i302.usePhysicalProperties = !!i303[16]
  i302.focalLength = i303[17]
  i302.sensorSize = new pc.Vec2( i303[18], i303[19] )
  i302.lensShift = new pc.Vec2( i303[20], i303[21] )
  i302.gateFit = i303[22]
  i302.commandBufferCount = i303[23]
  i302.cameraType = i303[24]
  i302.enabled = !!i303[25]
  return i302
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i304 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i305 = data
  i304.m_RenderShadows = !!i305[0]
  i304.m_RequiresDepthTextureOption = i305[1]
  i304.m_RequiresOpaqueTextureOption = i305[2]
  i304.m_CameraType = i305[3]
  var i307 = i305[4]
  var i306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i307.length; i += 2) {
  request.r(i307[i + 0], i307[i + 1], 1, i306, '')
  }
  i304.m_Cameras = i306
  i304.m_RendererIndex = i305[5]
  i304.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i305[6] )
  request.r(i305[7], i305[8], 0, i304, 'm_VolumeTrigger')
  i304.m_VolumeFrameworkUpdateModeOption = i305[9]
  i304.m_RenderPostProcessing = !!i305[10]
  i304.m_Antialiasing = i305[11]
  i304.m_AntialiasingQuality = i305[12]
  i304.m_StopNaN = !!i305[13]
  i304.m_Dithering = !!i305[14]
  i304.m_ClearDepth = !!i305[15]
  i304.m_AllowXRRendering = !!i305[16]
  i304.m_AllowHDROutput = !!i305[17]
  i304.m_UseScreenCoordOverride = !!i305[18]
  i304.m_ScreenSizeOverride = new pc.Vec4( i305[19], i305[20], i305[21], i305[22] )
  i304.m_ScreenCoordScaleBias = new pc.Vec4( i305[23], i305[24], i305[25], i305[26] )
  i304.m_RequiresDepthTexture = !!i305[27]
  i304.m_RequiresColorTexture = !!i305[28]
  i304.m_Version = i305[29]
  i304.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i305[30], i304.m_TaaSettings)
  return i304
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i310 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i311 = data
  i310.m_Quality = i311[0]
  i310.m_FrameInfluence = i311[1]
  i310.m_JitterScale = i311[2]
  i310.m_MipBias = i311[3]
  i310.m_VarianceClampScale = i311[4]
  i310.m_ContrastAdaptiveSharpening = i311[5]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i313 = data
  i312.name = i313[0]
  i312.tagId = i313[1]
  i312.enabled = !!i313[2]
  i312.isStatic = !!i313[3]
  i312.layer = i313[4]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i315 = data
  i314.type = i315[0]
  i314.color = new pc.Color(i315[1], i315[2], i315[3], i315[4])
  i314.cullingMask = i315[5]
  i314.intensity = i315[6]
  i314.range = i315[7]
  i314.spotAngle = i315[8]
  i314.shadows = i315[9]
  i314.shadowNormalBias = i315[10]
  i314.shadowBias = i315[11]
  i314.shadowStrength = i315[12]
  i314.shadowResolution = i315[13]
  i314.lightmapBakeType = i315[14]
  i314.renderMode = i315[15]
  request.r(i315[16], i315[17], 0, i314, 'cookie')
  i314.cookieSize = i315[18]
  i314.shadowNearPlane = i315[19]
  i314.occlusionMaskChannel = i315[20]
  i314.enabled = !!i315[21]
  return i314
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i317 = data
  i316.m_Version = i317[0]
  i316.m_UsePipelineSettings = !!i317[1]
  i316.m_AdditionalLightsShadowResolutionTier = i317[2]
  i316.m_LightLayerMask = i317[3]
  i316.m_RenderingLayers = i317[4]
  i316.m_CustomShadowLayers = !!i317[5]
  i316.m_ShadowLayerMask = i317[6]
  i316.m_ShadowRenderingLayers = i317[7]
  i316.m_LightCookieSize = new pc.Vec2( i317[8], i317[9] )
  i316.m_LightCookieOffset = new pc.Vec2( i317[10], i317[11] )
  i316.m_SoftShadowQuality = i317[12]
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i319 = data
  i318.ambientIntensity = i319[0]
  i318.reflectionIntensity = i319[1]
  i318.ambientMode = i319[2]
  i318.ambientLight = new pc.Color(i319[3], i319[4], i319[5], i319[6])
  i318.ambientSkyColor = new pc.Color(i319[7], i319[8], i319[9], i319[10])
  i318.ambientGroundColor = new pc.Color(i319[11], i319[12], i319[13], i319[14])
  i318.ambientEquatorColor = new pc.Color(i319[15], i319[16], i319[17], i319[18])
  i318.fogColor = new pc.Color(i319[19], i319[20], i319[21], i319[22])
  i318.fogEndDistance = i319[23]
  i318.fogStartDistance = i319[24]
  i318.fogDensity = i319[25]
  i318.fog = !!i319[26]
  request.r(i319[27], i319[28], 0, i318, 'skybox')
  i318.fogMode = i319[29]
  var i321 = i319[30]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i321[i + 0]) );
  }
  i318.lightmaps = i320
  i318.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i319[31], i318.lightProbes)
  i318.lightmapsMode = i319[32]
  i318.mixedBakeMode = i319[33]
  i318.environmentLightingMode = i319[34]
  i318.ambientProbe = new pc.SphericalHarmonicsL2(i319[35])
  i318.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i319[36])
  i318.useReferenceAmbientProbe = !!i319[37]
  request.r(i319[38], i319[39], 0, i318, 'customReflection')
  request.r(i319[40], i319[41], 0, i318, 'defaultReflection')
  i318.defaultReflectionMode = i319[42]
  i318.defaultReflectionResolution = i319[43]
  i318.sunLightObjectId = i319[44]
  i318.pixelLightCount = i319[45]
  i318.defaultReflectionHDR = !!i319[46]
  i318.hasLightDataAsset = !!i319[47]
  i318.hasManualGenerate = !!i319[48]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i325 = data
  request.r(i325[0], i325[1], 0, i324, 'lightmapColor')
  request.r(i325[2], i325[3], 0, i324, 'lightmapDirection')
  request.r(i325[4], i325[5], 0, i324, 'shadowMask')
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i326 = root || new UnityEngine.LightProbes()
  var i327 = data
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i335 = data
  i334.AdditionalLightsRenderingMode = i335[0]
  i334.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i335[1], i334.LightRenderingMode)
  i334.MainLightRenderingModeValue = i335[2]
  i334.SupportsMainLightShadows = !!i335[3]
  i334.MainLightShadowmapResolutionValue = i335[4]
  i334.SupportsSoftShadows = !!i335[5]
  i334.SoftShadowQualityValue = i335[6]
  i334.ShadowDistance = i335[7]
  i334.ShadowCascadeCount = i335[8]
  i334.Cascade2Split = i335[9]
  i334.Cascade3Split = new pc.Vec2( i335[10], i335[11] )
  i334.Cascade4Split = new pc.Vec3( i335[12], i335[13], i335[14] )
  i334.CascadeBorder = i335[15]
  i334.ShadowDepthBias = i335[16]
  i334.ShadowNormalBias = i335[17]
  i334.RequireDepthTexture = !!i335[18]
  i334.RequireOpaqueTexture = !!i335[19]
  i334.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i335[20], i334.scriptableRendererData)
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i337 = data
  i336.Disabled = i337[0]
  i336.PerVertex = i337[1]
  i336.PerPixel = i337[2]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i339 = data
  i338.opaqueLayerMask = i339[0]
  i338.transparentLayerMask = i339[1]
  var i341 = i339[2]
  var i340 = []
  for(var i = 0; i < i341.length; i += 1) {
    i340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i341[i + 0]) );
  }
  i338.RenderObjectsFeatures = i340
  i338.name = i339[3]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i345 = data
  i344.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i345[0], i344.settings)
  i344.name = i345[1]
  i344.typeName = i345[2]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i347 = data
  var i349 = i347[0]
  var i348 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i349.length; i += 1) {
    i348.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i349[i + 0]));
  }
  i346.ShaderCompilationErrors = i348
  i346.name = i347[1]
  i346.guid = i347[2]
  var i351 = i347[3]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( i351[i + 0] );
  }
  i346.shaderDefinedKeywords = i350
  var i353 = i347[4]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i353[i + 0]) );
  }
  i346.passes = i352
  var i355 = i347[5]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i355[i + 0]) );
  }
  i346.usePasses = i354
  var i357 = i347[6]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i357[i + 0]) );
  }
  i346.defaultParameterValues = i356
  request.r(i347[7], i347[8], 0, i346, 'unityFallbackShader')
  i346.readDepth = !!i347[9]
  i346.hasDepthOnlyPass = !!i347[10]
  i346.isCreatedByShaderGraph = !!i347[11]
  i346.disableBatching = !!i347[12]
  i346.compiled = !!i347[13]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i361 = data
  i360.shaderName = i361[0]
  i360.errorMessage = i361[1]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i366 = root || new pc.UnityShaderPass()
  var i367 = data
  i366.id = i367[0]
  i366.subShaderIndex = i367[1]
  i366.name = i367[2]
  i366.passType = i367[3]
  i366.grabPassTextureName = i367[4]
  i366.usePass = !!i367[5]
  i366.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[6], i366.zTest)
  i366.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[7], i366.zWrite)
  i366.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[8], i366.culling)
  i366.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i367[9], i366.blending)
  i366.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i367[10], i366.alphaBlending)
  i366.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[11], i366.colorWriteMask)
  i366.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[12], i366.offsetUnits)
  i366.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[13], i366.offsetFactor)
  i366.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[14], i366.stencilRef)
  i366.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[15], i366.stencilReadMask)
  i366.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i367[16], i366.stencilWriteMask)
  i366.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i367[17], i366.stencilOp)
  i366.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i367[18], i366.stencilOpFront)
  i366.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i367[19], i366.stencilOpBack)
  var i369 = i367[20]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i369[i + 0]) );
  }
  i366.tags = i368
  var i371 = i367[21]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( i371[i + 0] );
  }
  i366.passDefinedKeywords = i370
  var i373 = i367[22]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i373[i + 0]) );
  }
  i366.passDefinedKeywordGroups = i372
  var i375 = i367[23]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i375[i + 0]) );
  }
  i366.variants = i374
  var i377 = i367[24]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i377[i + 0]) );
  }
  i366.excludedVariants = i376
  i366.hasDepthReader = !!i367[25]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i379 = data
  i378.val = i379[0]
  i378.name = i379[1]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i381 = data
  i380.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[0], i380.src)
  i380.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[1], i380.dst)
  i380.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[2], i380.op)
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i383 = data
  i382.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i383[0], i382.pass)
  i382.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i383[1], i382.fail)
  i382.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i383[2], i382.zFail)
  i382.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i383[3], i382.comp)
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i387 = data
  i386.name = i387[0]
  i386.value = i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i391 = data
  var i393 = i391[0]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( i393[i + 0] );
  }
  i390.keywords = i392
  i390.hasDiscard = !!i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i397 = data
  i396.passId = i397[0]
  i396.subShaderIndex = i397[1]
  var i399 = i397[2]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( i399[i + 0] );
  }
  i396.keywords = i398
  i396.vertexProgram = i397[3]
  i396.fragmentProgram = i397[4]
  i396.exportedForWebGl2 = !!i397[5]
  i396.readDepth = !!i397[6]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i403 = data
  request.r(i403[0], i403[1], 0, i402, 'shader')
  i402.pass = i403[2]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i407 = data
  i406.name = i407[0]
  i406.type = i407[1]
  i406.value = new pc.Vec4( i407[2], i407[3], i407[4], i407[5] )
  i406.textureValue = i407[6]
  i406.shaderPropertyFlag = i407[7]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i409 = data
  var i411 = i409[0]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i411[i + 0]) );
  }
  i408.files = i410
  i408.componentToPrefabIds = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i415 = data
  i414.path = i415[0]
  request.r(i415[1], i415[2], 0, i414, 'unityObject')
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i417 = data
  var i419 = i417[0]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i419[i + 0]) );
  }
  i416.scriptsExecutionOrder = i418
  var i421 = i417[1]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i421[i + 0]) );
  }
  i416.sortingLayers = i420
  var i423 = i417[2]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i423[i + 0]) );
  }
  i416.cullingLayers = i422
  i416.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i417[3], i416.timeSettings)
  i416.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i417[4], i416.physicsSettings)
  i416.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i417[5], i416.physics2DSettings)
  i416.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i417[6], i416.qualitySettings)
  i416.enableRealtimeShadows = !!i417[7]
  i416.enableAutoInstancing = !!i417[8]
  i416.enableStaticBatching = !!i417[9]
  i416.enableDynamicBatching = !!i417[10]
  i416.lightmapEncodingQuality = i417[11]
  i416.desiredColorSpace = i417[12]
  var i425 = i417[13]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( i425[i + 0] );
  }
  i416.allTags = i424
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i429 = data
  i428.name = i429[0]
  i428.value = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i433 = data
  i432.id = i433[0]
  i432.name = i433[1]
  i432.value = i433[2]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i437 = data
  i436.id = i437[0]
  i436.name = i437[1]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i439 = data
  i438.fixedDeltaTime = i439[0]
  i438.maximumDeltaTime = i439[1]
  i438.timeScale = i439[2]
  i438.maximumParticleTimestep = i439[3]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i441 = data
  i440.gravity = new pc.Vec3( i441[0], i441[1], i441[2] )
  i440.defaultSolverIterations = i441[3]
  i440.bounceThreshold = i441[4]
  i440.autoSyncTransforms = !!i441[5]
  i440.autoSimulation = !!i441[6]
  var i443 = i441[7]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i443[i + 0]) );
  }
  i440.collisionMatrix = i442
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i447 = data
  i446.enabled = !!i447[0]
  i446.layerId = i447[1]
  i446.otherLayerId = i447[2]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'material')
  i448.gravity = new pc.Vec2( i449[2], i449[3] )
  i448.positionIterations = i449[4]
  i448.velocityIterations = i449[5]
  i448.velocityThreshold = i449[6]
  i448.maxLinearCorrection = i449[7]
  i448.maxAngularCorrection = i449[8]
  i448.maxTranslationSpeed = i449[9]
  i448.maxRotationSpeed = i449[10]
  i448.baumgarteScale = i449[11]
  i448.baumgarteTOIScale = i449[12]
  i448.timeToSleep = i449[13]
  i448.linearSleepTolerance = i449[14]
  i448.angularSleepTolerance = i449[15]
  i448.defaultContactOffset = i449[16]
  i448.autoSimulation = !!i449[17]
  i448.queriesHitTriggers = !!i449[18]
  i448.queriesStartInColliders = !!i449[19]
  i448.callbacksOnDisable = !!i449[20]
  i448.reuseCollisionCallbacks = !!i449[21]
  i448.autoSyncTransforms = !!i449[22]
  var i451 = i449[23]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i451[i + 0]) );
  }
  i448.collisionMatrix = i450
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i455 = data
  i454.enabled = !!i455[0]
  i454.layerId = i455[1]
  i454.otherLayerId = i455[2]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i457 = data
  var i459 = i457[0]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i459[i + 0]) );
  }
  i456.qualityLevels = i458
  var i461 = i457[1]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( i461[i + 0] );
  }
  i456.names = i460
  i456.shadows = i457[2]
  i456.anisotropicFiltering = i457[3]
  i456.antiAliasing = i457[4]
  i456.lodBias = i457[5]
  i456.shadowCascades = i457[6]
  i456.shadowDistance = i457[7]
  i456.shadowmaskMode = i457[8]
  i456.shadowProjection = i457[9]
  i456.shadowResolution = i457[10]
  i456.softParticles = !!i457[11]
  i456.softVegetation = !!i457[12]
  i456.activeColorSpace = i457[13]
  i456.desiredColorSpace = i457[14]
  i456.masterTextureLimit = i457[15]
  i456.maxQueuedFrames = i457[16]
  i456.particleRaycastBudget = i457[17]
  i456.pixelLightCount = i457[18]
  i456.realtimeReflectionProbes = !!i457[19]
  i456.shadowCascade2Split = i457[20]
  i456.shadowCascade4Split = new pc.Vec3( i457[21], i457[22], i457[23] )
  i456.streamingMipmapsActive = !!i457[24]
  i456.vSyncCount = i457[25]
  i456.asyncUploadBufferSize = i457[26]
  i456.asyncUploadTimeSlice = i457[27]
  i456.billboardsFaceCameraPosition = !!i457[28]
  i456.shadowNearPlaneOffset = i457[29]
  i456.streamingMipmapsMemoryBudget = i457[30]
  i456.maximumLODLevel = i457[31]
  i456.streamingMipmapsAddAllCameras = !!i457[32]
  i456.streamingMipmapsMaxLevelReduction = i457[33]
  i456.streamingMipmapsRenderersPerFrame = i457[34]
  i456.resolutionScalingFixedDPIFactor = i457[35]
  i456.streamingMipmapsMaxFileIORequests = i457[36]
  i456.currentQualityLevel = i457[37]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i465 = data
  i464.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i465[0], i464.Event)
  i464.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i465[1], i464.filterSettings)
  i464.overrideMaterialId = i465[2]
  i464.overrideMaterialPassIndex = i465[3]
  i464.overrideShaderId = i465[4]
  i464.overrideShaderPassIndex = i465[5]
  i464.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i465[6], i464.overrideMode)
  i464.overrideDepthState = !!i465[7]
  i464.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i465[8], i464.depthCompareFunction)
  i464.enableWrite = !!i465[9]
  i464.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i465[10], i464.stencilSettings)
  i464.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i465[11], i464.cameraSettings)
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i467 = data
  i466.Value = i467[0]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i469 = data
  i468.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i469[0], i468.RenderQueueType)
  i468.LayerMask = i469[1]
  var i471 = i469[2]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( i471[i + 0] );
  }
  i468.PassNames = i470
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i473 = data
  i472.overrideStencilState = !!i473[0]
  i472.stencilReference = i473[1]
  i472.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i473[2], i472.stencilCompareFunctionValue)
  i472.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i473[3], i472.passOperationValue)
  i472.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i473[4], i472.failOperationValue)
  i472.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i473[5], i472.zFailOperationValue)
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i475 = data
  i474.overrideCamera = !!i475[0]
  i474.restoreCamera = !!i475[1]
  i474.offset = new pc.Vec4( i475[2], i475[3], i475[4], i475[5] )
  i474.cameraFieldOfView = i475[6]
  return i474
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"9":[10],"11":[10],"12":[10],"13":[10],"14":[10],"15":[10],"16":[17],"18":[1],"19":[20],"21":[20],"22":[20],"23":[20],"24":[20],"25":[20],"26":[20],"27":[28],"29":[28],"30":[28],"31":[28],"32":[28],"33":[28],"34":[28],"35":[28],"36":[28],"37":[28],"38":[28],"39":[28],"40":[28],"41":[1],"42":[43],"44":[45],"46":[45],"47":[48],"49":[48],"50":[1],"4":[1],"6":[5],"51":[48],"52":[48],"53":[47],"54":[55,48],"56":[48],"57":[47],"58":[48],"59":[48],"60":[48],"61":[48],"62":[48],"63":[48],"64":[48],"65":[48],"66":[48],"67":[55,48],"68":[48],"69":[48],"70":[48],"71":[48],"72":[55,48],"73":[48],"74":[75],"76":[75],"77":[75],"78":[75],"79":[1],"80":[1],"81":[48],"82":[43,48],"83":[48,55],"84":[48],"85":[55,48],"86":[43],"87":[55,48],"88":[48]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "BNG_Test";

Deserializers.lunaInitializationTime = "04/10/2026 12:32:05";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.buildID = "c1a9617a-14a4-4fe9-b0b0-34405d81b137";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

