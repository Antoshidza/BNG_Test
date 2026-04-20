var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.JointSpring' )
  var i3391 = data
  i3390.spring = i3391[0]
  i3390.damper = i3391[1]
  i3390.targetPosition = i3391[2]
  return i3390
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.JointMotor' )
  var i3393 = data
  i3392.m_TargetVelocity = i3393[0]
  i3392.m_Force = i3393[1]
  i3392.m_FreeSpin = i3393[2]
  return i3392
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.JointLimits' )
  var i3395 = data
  i3394.m_Min = i3395[0]
  i3394.m_Max = i3395[1]
  i3394.m_Bounciness = i3395[2]
  i3394.m_BounceMinVelocity = i3395[3]
  i3394.m_ContactDistance = i3395[4]
  i3394.minBounce = i3395[5]
  i3394.maxBounce = i3395[6]
  return i3394
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.JointDrive' )
  var i3397 = data
  i3396.m_PositionSpring = i3397[0]
  i3396.m_PositionDamper = i3397[1]
  i3396.m_MaximumForce = i3397[2]
  i3396.m_UseAcceleration = i3397[3]
  return i3396
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3398 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3399 = data
  i3398.m_Spring = i3399[0]
  i3398.m_Damper = i3399[1]
  return i3398
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3400 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3401 = data
  i3400.m_Limit = i3401[0]
  i3400.m_Bounciness = i3401[1]
  i3400.m_ContactDistance = i3401[2]
  return i3400
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3403 = data
  i3402.m_ExtremumSlip = i3403[0]
  i3402.m_ExtremumValue = i3403[1]
  i3402.m_AsymptoteSlip = i3403[2]
  i3402.m_AsymptoteValue = i3403[3]
  i3402.m_Stiffness = i3403[4]
  return i3402
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3404 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3405 = data
  i3404.m_LowerAngle = i3405[0]
  i3404.m_UpperAngle = i3405[1]
  return i3404
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3406 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3407 = data
  i3406.m_MotorSpeed = i3407[0]
  i3406.m_MaximumMotorTorque = i3407[1]
  return i3406
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3408 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3409 = data
  i3408.m_DampingRatio = i3409[0]
  i3408.m_Frequency = i3409[1]
  i3408.m_Angle = i3409[2]
  return i3408
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3410 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3411 = data
  i3410.m_LowerTranslation = i3411[0]
  i3410.m_UpperTranslation = i3411[1]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3412 = root || new pc.UnityMaterial()
  var i3413 = data
  i3412.name = i3413[0]
  request.r(i3413[1], i3413[2], 0, i3412, 'shader')
  i3412.renderQueue = i3413[3]
  i3412.enableInstancing = !!i3413[4]
  var i3415 = i3413[5]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3415[i + 0]) );
  }
  i3412.floatParameters = i3414
  var i3417 = i3413[6]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3417[i + 0]) );
  }
  i3412.colorParameters = i3416
  var i3419 = i3413[7]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3419[i + 0]) );
  }
  i3412.vectorParameters = i3418
  var i3421 = i3413[8]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3421[i + 0]) );
  }
  i3412.textureParameters = i3420
  var i3423 = i3413[9]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3423[i + 0]) );
  }
  i3412.materialFlags = i3422
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3427 = data
  i3426.name = i3427[0]
  i3426.value = i3427[1]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3431 = data
  i3430.name = i3431[0]
  i3430.value = new pc.Color(i3431[1], i3431[2], i3431[3], i3431[4])
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3435 = data
  i3434.name = i3435[0]
  i3434.value = new pc.Vec4( i3435[1], i3435[2], i3435[3], i3435[4] )
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3439 = data
  i3438.name = i3439[0]
  request.r(i3439[1], i3439[2], 0, i3438, 'value')
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3443 = data
  i3442.name = i3443[0]
  i3442.enabled = !!i3443[1]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3445 = data
  i3444.name = i3445[0]
  i3444.width = i3445[1]
  i3444.height = i3445[2]
  i3444.mipmapCount = i3445[3]
  i3444.anisoLevel = i3445[4]
  i3444.filterMode = i3445[5]
  i3444.hdr = !!i3445[6]
  i3444.format = i3445[7]
  i3444.wrapMode = i3445[8]
  i3444.alphaIsTransparency = !!i3445[9]
  i3444.alphaSource = i3445[10]
  i3444.graphicsFormat = i3445[11]
  i3444.sRGBTexture = !!i3445[12]
  i3444.desiredColorSpace = i3445[13]
  i3444.wrapU = i3445[14]
  i3444.wrapV = i3445[15]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3447 = data
  i3446.position = new pc.Vec3( i3447[0], i3447[1], i3447[2] )
  i3446.scale = new pc.Vec3( i3447[3], i3447[4], i3447[5] )
  i3446.rotation = new pc.Quat(i3447[6], i3447[7], i3447[8], i3447[9])
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3449 = data
  request.r(i3449[0], i3449[1], 0, i3448, 'sharedMesh')
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3451 = data
  request.r(i3451[0], i3451[1], 0, i3450, 'additionalVertexStreams')
  i3450.enabled = !!i3451[2]
  request.r(i3451[3], i3451[4], 0, i3450, 'sharedMaterial')
  var i3453 = i3451[5]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 2, i3452, '')
  }
  i3450.sharedMaterials = i3452
  i3450.receiveShadows = !!i3451[6]
  i3450.shadowCastingMode = i3451[7]
  i3450.sortingLayerID = i3451[8]
  i3450.sortingOrder = i3451[9]
  i3450.lightmapIndex = i3451[10]
  i3450.lightmapSceneIndex = i3451[11]
  i3450.lightmapScaleOffset = new pc.Vec4( i3451[12], i3451[13], i3451[14], i3451[15] )
  i3450.lightProbeUsage = i3451[16]
  i3450.reflectionProbeUsage = i3451[17]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3457 = data
  i3456.name = i3457[0]
  i3456.tagId = i3457[1]
  i3456.enabled = !!i3457[2]
  i3456.isStatic = !!i3457[3]
  i3456.layer = i3457[4]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3459 = data
  i3458.name = i3459[0]
  i3458.halfPrecision = !!i3459[1]
  i3458.useSimplification = !!i3459[2]
  i3458.useUInt32IndexFormat = !!i3459[3]
  i3458.vertexCount = i3459[4]
  i3458.aabb = i3459[5]
  var i3461 = i3459[6]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( !!i3461[i + 0] );
  }
  i3458.streams = i3460
  i3458.vertices = i3459[7]
  var i3463 = i3459[8]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3463[i + 0]) );
  }
  i3458.subMeshes = i3462
  var i3465 = i3459[9]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 16) {
    i3464.push( new pc.Mat4().setData(i3465[i + 0], i3465[i + 1], i3465[i + 2], i3465[i + 3],  i3465[i + 4], i3465[i + 5], i3465[i + 6], i3465[i + 7],  i3465[i + 8], i3465[i + 9], i3465[i + 10], i3465[i + 11],  i3465[i + 12], i3465[i + 13], i3465[i + 14], i3465[i + 15]) );
  }
  i3458.bindposes = i3464
  var i3467 = i3459[10]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3467[i + 0]) );
  }
  i3458.blendShapes = i3466
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3473 = data
  i3472.triangles = i3473[0]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3479 = data
  i3478.name = i3479[0]
  var i3481 = i3479[1]
  var i3480 = []
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3481[i + 0]) );
  }
  i3478.frames = i3480
  return i3478
}

Deserializers["Source.Game.HexMerge.HexTileView"] = function (request, data, root) {
  var i3482 = root || request.c( 'Source.Game.HexMerge.HexTileView' )
  var i3483 = data
  request.r(i3483[0], i3483[1], 0, i3482, 'Renderer')
  return i3482
}

Deserializers["Source.Game.HexMerge.TileCollapseVfxView"] = function (request, data, root) {
  var i3484 = root || request.c( 'Source.Game.HexMerge.TileCollapseVfxView' )
  var i3485 = data
  request.r(i3485[0], i3485[1], 0, i3484, '_particleSystem')
  request.r(i3485[2], i3485[3], 0, i3484, '_subParticleSystem')
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3487 = data
  request.r(i3487[0], i3487[1], 0, i3486, 'mesh')
  i3486.meshCount = i3487[2]
  i3486.activeVertexStreamsCount = i3487[3]
  i3486.alignment = i3487[4]
  i3486.renderMode = i3487[5]
  i3486.sortMode = i3487[6]
  i3486.lengthScale = i3487[7]
  i3486.velocityScale = i3487[8]
  i3486.cameraVelocityScale = i3487[9]
  i3486.normalDirection = i3487[10]
  i3486.sortingFudge = i3487[11]
  i3486.minParticleSize = i3487[12]
  i3486.maxParticleSize = i3487[13]
  i3486.pivot = new pc.Vec3( i3487[14], i3487[15], i3487[16] )
  request.r(i3487[17], i3487[18], 0, i3486, 'trailMaterial')
  i3486.applyActiveColorSpace = !!i3487[19]
  i3486.enabled = !!i3487[20]
  request.r(i3487[21], i3487[22], 0, i3486, 'sharedMaterial')
  var i3489 = i3487[23]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 2) {
  request.r(i3489[i + 0], i3489[i + 1], 2, i3488, '')
  }
  i3486.sharedMaterials = i3488
  i3486.receiveShadows = !!i3487[24]
  i3486.shadowCastingMode = i3487[25]
  i3486.sortingLayerID = i3487[26]
  i3486.sortingOrder = i3487[27]
  i3486.lightmapIndex = i3487[28]
  i3486.lightmapSceneIndex = i3487[29]
  i3486.lightmapScaleOffset = new pc.Vec4( i3487[30], i3487[31], i3487[32], i3487[33] )
  i3486.lightProbeUsage = i3487[34]
  i3486.reflectionProbeUsage = i3487[35]
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3491 = data
  i3490.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3491[0], i3490.main)
  i3490.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3491[1], i3490.colorBySpeed)
  i3490.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3491[2], i3490.colorOverLifetime)
  i3490.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3491[3], i3490.emission)
  i3490.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3491[4], i3490.rotationBySpeed)
  i3490.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3491[5], i3490.rotationOverLifetime)
  i3490.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3491[6], i3490.shape)
  i3490.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3491[7], i3490.sizeBySpeed)
  i3490.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3491[8], i3490.sizeOverLifetime)
  i3490.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3491[9], i3490.textureSheetAnimation)
  i3490.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3491[10], i3490.velocityOverLifetime)
  i3490.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3491[11], i3490.noise)
  i3490.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3491[12], i3490.inheritVelocity)
  i3490.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3491[13], i3490.forceOverLifetime)
  i3490.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3491[14], i3490.limitVelocityOverLifetime)
  i3490.useAutoRandomSeed = !!i3491[15]
  i3490.randomSeed = i3491[16]
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3492 = root || new pc.ParticleSystemMain()
  var i3493 = data
  i3492.duration = i3493[0]
  i3492.loop = !!i3493[1]
  i3492.prewarm = !!i3493[2]
  i3492.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[3], i3492.startDelay)
  i3492.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[4], i3492.startLifetime)
  i3492.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[5], i3492.startSpeed)
  i3492.startSize3D = !!i3493[6]
  i3492.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[7], i3492.startSizeX)
  i3492.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[8], i3492.startSizeY)
  i3492.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[9], i3492.startSizeZ)
  i3492.startRotation3D = !!i3493[10]
  i3492.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[11], i3492.startRotationX)
  i3492.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[12], i3492.startRotationY)
  i3492.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[13], i3492.startRotationZ)
  i3492.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3493[14], i3492.startColor)
  i3492.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[15], i3492.gravityModifier)
  i3492.simulationSpace = i3493[16]
  request.r(i3493[17], i3493[18], 0, i3492, 'customSimulationSpace')
  i3492.simulationSpeed = i3493[19]
  i3492.useUnscaledTime = !!i3493[20]
  i3492.scalingMode = i3493[21]
  i3492.playOnAwake = !!i3493[22]
  i3492.maxParticles = i3493[23]
  i3492.emitterVelocityMode = i3493[24]
  i3492.stopAction = i3493[25]
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3494 = root || new pc.MinMaxCurve()
  var i3495 = data
  i3494.mode = i3495[0]
  i3494.curveMin = new pc.AnimationCurve( { keys_flow: i3495[1] } )
  i3494.curveMax = new pc.AnimationCurve( { keys_flow: i3495[2] } )
  i3494.curveMultiplier = i3495[3]
  i3494.constantMin = i3495[4]
  i3494.constantMax = i3495[5]
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3496 = root || new pc.MinMaxGradient()
  var i3497 = data
  i3496.mode = i3497[0]
  i3496.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3497[1], i3496.gradientMin)
  i3496.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3497[2], i3496.gradientMax)
  i3496.colorMin = new pc.Color(i3497[3], i3497[4], i3497[5], i3497[6])
  i3496.colorMax = new pc.Color(i3497[7], i3497[8], i3497[9], i3497[10])
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3499 = data
  i3498.mode = i3499[0]
  var i3501 = i3499[1]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3501[i + 0]) );
  }
  i3498.colorKeys = i3500
  var i3503 = i3499[2]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 1) {
    i3502.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3503[i + 0]) );
  }
  i3498.alphaKeys = i3502
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3504 = root || new pc.ParticleSystemColorBySpeed()
  var i3505 = data
  i3504.enabled = !!i3505[0]
  i3504.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3505[1], i3504.color)
  i3504.range = new pc.Vec2( i3505[2], i3505[3] )
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3509 = data
  i3508.color = new pc.Color(i3509[0], i3509[1], i3509[2], i3509[3])
  i3508.time = i3509[4]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3513 = data
  i3512.alpha = i3513[0]
  i3512.time = i3513[1]
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3514 = root || new pc.ParticleSystemColorOverLifetime()
  var i3515 = data
  i3514.enabled = !!i3515[0]
  i3514.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3515[1], i3514.color)
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3516 = root || new pc.ParticleSystemEmitter()
  var i3517 = data
  i3516.enabled = !!i3517[0]
  i3516.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[1], i3516.rateOverTime)
  i3516.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[2], i3516.rateOverDistance)
  var i3519 = i3517[3]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3519[i + 0]) );
  }
  i3516.bursts = i3518
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3522 = root || new pc.ParticleSystemBurst()
  var i3523 = data
  i3522.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3523[0], i3522.count)
  i3522.cycleCount = i3523[1]
  i3522.minCount = i3523[2]
  i3522.maxCount = i3523[3]
  i3522.repeatInterval = i3523[4]
  i3522.time = i3523[5]
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3524 = root || new pc.ParticleSystemRotationBySpeed()
  var i3525 = data
  i3524.enabled = !!i3525[0]
  i3524.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[1], i3524.x)
  i3524.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[2], i3524.y)
  i3524.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[3], i3524.z)
  i3524.separateAxes = !!i3525[4]
  i3524.range = new pc.Vec2( i3525[5], i3525[6] )
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3526 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3527 = data
  i3526.enabled = !!i3527[0]
  i3526.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3527[1], i3526.x)
  i3526.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3527[2], i3526.y)
  i3526.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3527[3], i3526.z)
  i3526.separateAxes = !!i3527[4]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3528 = root || new pc.ParticleSystemShape()
  var i3529 = data
  i3528.enabled = !!i3529[0]
  i3528.shapeType = i3529[1]
  i3528.randomDirectionAmount = i3529[2]
  i3528.sphericalDirectionAmount = i3529[3]
  i3528.randomPositionAmount = i3529[4]
  i3528.alignToDirection = !!i3529[5]
  i3528.radius = i3529[6]
  i3528.radiusMode = i3529[7]
  i3528.radiusSpread = i3529[8]
  i3528.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[9], i3528.radiusSpeed)
  i3528.radiusThickness = i3529[10]
  i3528.angle = i3529[11]
  i3528.length = i3529[12]
  i3528.boxThickness = new pc.Vec3( i3529[13], i3529[14], i3529[15] )
  i3528.meshShapeType = i3529[16]
  request.r(i3529[17], i3529[18], 0, i3528, 'mesh')
  request.r(i3529[19], i3529[20], 0, i3528, 'meshRenderer')
  request.r(i3529[21], i3529[22], 0, i3528, 'skinnedMeshRenderer')
  i3528.useMeshMaterialIndex = !!i3529[23]
  i3528.meshMaterialIndex = i3529[24]
  i3528.useMeshColors = !!i3529[25]
  i3528.normalOffset = i3529[26]
  i3528.arc = i3529[27]
  i3528.arcMode = i3529[28]
  i3528.arcSpread = i3529[29]
  i3528.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[30], i3528.arcSpeed)
  i3528.donutRadius = i3529[31]
  i3528.position = new pc.Vec3( i3529[32], i3529[33], i3529[34] )
  i3528.rotation = new pc.Vec3( i3529[35], i3529[36], i3529[37] )
  i3528.scale = new pc.Vec3( i3529[38], i3529[39], i3529[40] )
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3530 = root || new pc.ParticleSystemSizeBySpeed()
  var i3531 = data
  i3530.enabled = !!i3531[0]
  i3530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[1], i3530.x)
  i3530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[2], i3530.y)
  i3530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[3], i3530.z)
  i3530.separateAxes = !!i3531[4]
  i3530.range = new pc.Vec2( i3531[5], i3531[6] )
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3532 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3533 = data
  i3532.enabled = !!i3533[0]
  i3532.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3533[1], i3532.x)
  i3532.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3533[2], i3532.y)
  i3532.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3533[3], i3532.z)
  i3532.separateAxes = !!i3533[4]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3534 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3535 = data
  i3534.enabled = !!i3535[0]
  i3534.mode = i3535[1]
  i3534.animation = i3535[2]
  i3534.numTilesX = i3535[3]
  i3534.numTilesY = i3535[4]
  i3534.useRandomRow = !!i3535[5]
  i3534.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3535[6], i3534.frameOverTime)
  i3534.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3535[7], i3534.startFrame)
  i3534.cycleCount = i3535[8]
  i3534.rowIndex = i3535[9]
  i3534.flipU = i3535[10]
  i3534.flipV = i3535[11]
  i3534.spriteCount = i3535[12]
  var i3537 = i3535[13]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 2) {
  request.r(i3537[i + 0], i3537[i + 1], 2, i3536, '')
  }
  i3534.sprites = i3536
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3540 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3541 = data
  i3540.enabled = !!i3541[0]
  i3540.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[1], i3540.x)
  i3540.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[2], i3540.y)
  i3540.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[3], i3540.z)
  i3540.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[4], i3540.radial)
  i3540.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[5], i3540.speedModifier)
  i3540.space = i3541[6]
  i3540.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[7], i3540.orbitalX)
  i3540.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[8], i3540.orbitalY)
  i3540.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[9], i3540.orbitalZ)
  i3540.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[10], i3540.orbitalOffsetX)
  i3540.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[11], i3540.orbitalOffsetY)
  i3540.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[12], i3540.orbitalOffsetZ)
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3542 = root || new pc.ParticleSystemNoise()
  var i3543 = data
  i3542.enabled = !!i3543[0]
  i3542.separateAxes = !!i3543[1]
  i3542.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[2], i3542.strengthX)
  i3542.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[3], i3542.strengthY)
  i3542.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[4], i3542.strengthZ)
  i3542.frequency = i3543[5]
  i3542.damping = !!i3543[6]
  i3542.octaveCount = i3543[7]
  i3542.octaveMultiplier = i3543[8]
  i3542.octaveScale = i3543[9]
  i3542.quality = i3543[10]
  i3542.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[11], i3542.scrollSpeed)
  i3542.scrollSpeedMultiplier = i3543[12]
  i3542.remapEnabled = !!i3543[13]
  i3542.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[14], i3542.remapX)
  i3542.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[15], i3542.remapY)
  i3542.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[16], i3542.remapZ)
  i3542.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[17], i3542.positionAmount)
  i3542.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[18], i3542.rotationAmount)
  i3542.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[19], i3542.sizeAmount)
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3544 = root || new pc.ParticleSystemInheritVelocity()
  var i3545 = data
  i3544.enabled = !!i3545[0]
  i3544.mode = i3545[1]
  i3544.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[2], i3544.curve)
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3546 = root || new pc.ParticleSystemForceOverLifetime()
  var i3547 = data
  i3546.enabled = !!i3547[0]
  i3546.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[1], i3546.x)
  i3546.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[2], i3546.y)
  i3546.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[3], i3546.z)
  i3546.space = i3547[4]
  i3546.randomized = !!i3547[5]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3548 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3549 = data
  i3548.enabled = !!i3549[0]
  i3548.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[1], i3548.limit)
  i3548.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[2], i3548.limitX)
  i3548.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[3], i3548.limitY)
  i3548.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[4], i3548.limitZ)
  i3548.dampen = i3549[5]
  i3548.separateAxes = !!i3549[6]
  i3548.space = i3549[7]
  i3548.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[8], i3548.drag)
  i3548.multiplyDragByParticleSize = !!i3549[9]
  i3548.multiplyDragByParticleVelocity = !!i3549[10]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3551 = data
  i3550.name = i3551[0]
  i3550.atlasId = i3551[1]
  i3550.mipmapCount = i3551[2]
  i3550.hdr = !!i3551[3]
  i3550.size = i3551[4]
  i3550.anisoLevel = i3551[5]
  i3550.filterMode = i3551[6]
  var i3553 = i3551[7]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 4) {
    i3552.push( UnityEngine.Rect.MinMaxRect(i3553[i + 0], i3553[i + 1], i3553[i + 2], i3553[i + 3]) );
  }
  i3550.rects = i3552
  i3550.wrapU = i3551[8]
  i3550.wrapV = i3551[9]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3557 = data
  i3556.name = i3557[0]
  i3556.index = i3557[1]
  i3556.startup = !!i3557[2]
  return i3556
}

Deserializers["HexGame"] = function (request, data, root) {
  var i3558 = root || request.c( 'HexGame' )
  var i3559 = data
  request.r(i3559[0], i3559[1], 0, i3558, '_boardSetup')
  request.r(i3559[2], i3559[3], 0, i3558, '_draggableStackSequenceConfig')
  return i3558
}

Deserializers["Source.Game.HexMerge.HexGamePresenter"] = function (request, data, root) {
  var i3560 = root || request.c( 'Source.Game.HexMerge.HexGamePresenter' )
  var i3561 = data
  request.r(i3561[0], i3561[1], 0, i3560, '_hexColorPaletteConfig')
  request.r(i3561[2], i3561[3], 0, i3560, '_hexGame')
  request.r(i3561[4], i3561[5], 0, i3560, '_camera')
  request.r(i3561[6], i3561[7], 0, i3560, '_cellPrefab')
  request.r(i3561[8], i3561[9], 0, i3560, '_tilePrefab')
  request.r(i3561[10], i3561[11], 0, i3560, '_collapseVfxPrefab')
  request.r(i3561[12], i3561[13], 0, i3560, '_draggableStackSequenceConfig')
  request.r(i3561[14], i3561[15], 0, i3560, '_hexGameFinishedView')
  request.r(i3561[16], i3561[17], 0, i3560, '_tileShader')
  i3560._hexSize = i3561[18]
  i3560._stackHeightStep = i3561[19]
  i3560._tileBaseHeight = i3561[20]
  i3560._mergeDuration = i3561[21]
  i3560._mergeTileStartDelay = i3561[22]
  i3560._mergeArcHeight = i3561[23]
  i3560._mergeArcDistanceFactor = i3561[24]
  i3560._collapseDuration = i3561[25]
  i3560._collapseTileStartDelay = i3561[26]
  i3560._collapseVfxLeadTime = i3561[27]
  var i3563 = i3561[28]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 2) {
  request.r(i3563[i + 0], i3563[i + 1], 2, i3562, '')
  }
  i3560._draggableSpawnSpots = i3562
  request.r(i3561[29], i3561[30], 0, i3560, '_dragCellMarker')
  i3560._draggablePickRadius = i3561[31]
  i3560._draggableSnapDuration = i3561[32]
  i3560._dragLiftHeight = i3561[33]
  request.r(i3561[34], i3561[35], 0, i3560, '_tileAudioSource')
  i3560._mergeAudio = request.d('Source.Game.HexMerge.HexGamePresenter+AudioCue', i3561[36], i3560._mergeAudio)
  i3560._collapseAudio = request.d('Source.Game.HexMerge.HexGamePresenter+AudioCue', i3561[37], i3560._collapseAudio)
  i3560._showCellCoords = !!i3561[38]
  i3560._coordLabelHeight = i3561[39]
  return i3560
}

Deserializers["Source.Game.HexMerge.HexGamePresenter+AudioCue"] = function (request, data, root) {
  var i3566 = root || request.c( 'Source.Game.HexMerge.HexGamePresenter+AudioCue' )
  var i3567 = data
  request.r(i3567[0], i3567[1], 0, i3566, 'Clip')
  i3566.Pitch = i3567[2]
  return i3566
}

Deserializers["Source.Game.HexMerge.HexDragTutorialController"] = function (request, data, root) {
  var i3568 = root || request.c( 'Source.Game.HexMerge.HexDragTutorialController' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, '_hexGamePresenter')
  request.r(i3569[2], i3569[3], 0, i3568, '_worldCamera')
  request.r(i3569[4], i3569[5], 0, i3568, '_canvas')
  request.r(i3569[6], i3569[7], 0, i3568, '_hand')
  request.r(i3569[8], i3569[9], 0, i3568, '_config')
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3571 = data
  i3570.color = new pc.Color(i3571[0], i3571[1], i3571[2], i3571[3])
  request.r(i3571[4], i3571[5], 0, i3570, 'sprite')
  i3570.flipX = !!i3571[6]
  i3570.flipY = !!i3571[7]
  i3570.drawMode = i3571[8]
  i3570.size = new pc.Vec2( i3571[9], i3571[10] )
  i3570.tileMode = i3571[11]
  i3570.adaptiveModeThreshold = i3571[12]
  i3570.maskInteraction = i3571[13]
  i3570.spriteSortPoint = i3571[14]
  i3570.enabled = !!i3571[15]
  request.r(i3571[16], i3571[17], 0, i3570, 'sharedMaterial')
  var i3573 = i3571[18]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 2) {
  request.r(i3573[i + 0], i3573[i + 1], 2, i3572, '')
  }
  i3570.sharedMaterials = i3572
  i3570.receiveShadows = !!i3571[19]
  i3570.shadowCastingMode = i3571[20]
  i3570.sortingLayerID = i3571[21]
  i3570.sortingOrder = i3571[22]
  i3570.lightmapIndex = i3571[23]
  i3570.lightmapSceneIndex = i3571[24]
  i3570.lightmapScaleOffset = new pc.Vec4( i3571[25], i3571[26], i3571[27], i3571[28] )
  i3570.lightProbeUsage = i3571[29]
  i3570.reflectionProbeUsage = i3571[30]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3575 = data
  i3574.aspect = i3575[0]
  i3574.orthographic = !!i3575[1]
  i3574.orthographicSize = i3575[2]
  i3574.backgroundColor = new pc.Color(i3575[3], i3575[4], i3575[5], i3575[6])
  i3574.nearClipPlane = i3575[7]
  i3574.farClipPlane = i3575[8]
  i3574.fieldOfView = i3575[9]
  i3574.depth = i3575[10]
  i3574.clearFlags = i3575[11]
  i3574.cullingMask = i3575[12]
  i3574.rect = i3575[13]
  request.r(i3575[14], i3575[15], 0, i3574, 'targetTexture')
  i3574.usePhysicalProperties = !!i3575[16]
  i3574.focalLength = i3575[17]
  i3574.sensorSize = new pc.Vec2( i3575[18], i3575[19] )
  i3574.lensShift = new pc.Vec2( i3575[20], i3575[21] )
  i3574.gateFit = i3575[22]
  i3574.commandBufferCount = i3575[23]
  i3574.cameraType = i3575[24]
  i3574.enabled = !!i3575[25]
  return i3574
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i3577 = data
  i3576.m_RenderShadows = !!i3577[0]
  i3576.m_RequiresDepthTextureOption = i3577[1]
  i3576.m_RequiresOpaqueTextureOption = i3577[2]
  i3576.m_CameraType = i3577[3]
  var i3579 = i3577[4]
  var i3578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i3579.length; i += 2) {
  request.r(i3579[i + 0], i3579[i + 1], 1, i3578, '')
  }
  i3576.m_Cameras = i3578
  i3576.m_RendererIndex = i3577[5]
  i3576.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3577[6] )
  request.r(i3577[7], i3577[8], 0, i3576, 'm_VolumeTrigger')
  i3576.m_VolumeFrameworkUpdateModeOption = i3577[9]
  i3576.m_RenderPostProcessing = !!i3577[10]
  i3576.m_Antialiasing = i3577[11]
  i3576.m_AntialiasingQuality = i3577[12]
  i3576.m_StopNaN = !!i3577[13]
  i3576.m_Dithering = !!i3577[14]
  i3576.m_ClearDepth = !!i3577[15]
  i3576.m_AllowXRRendering = !!i3577[16]
  i3576.m_AllowHDROutput = !!i3577[17]
  i3576.m_UseScreenCoordOverride = !!i3577[18]
  i3576.m_ScreenSizeOverride = new pc.Vec4( i3577[19], i3577[20], i3577[21], i3577[22] )
  i3576.m_ScreenCoordScaleBias = new pc.Vec4( i3577[23], i3577[24], i3577[25], i3577[26] )
  i3576.m_RequiresDepthTexture = !!i3577[27]
  i3576.m_RequiresColorTexture = !!i3577[28]
  i3576.m_Version = i3577[29]
  i3576.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i3577[30], i3576.m_TaaSettings)
  return i3576
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i3582 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i3583 = data
  i3582.m_Quality = i3583[0]
  i3582.m_FrameInfluence = i3583[1]
  i3582.m_JitterScale = i3583[2]
  i3582.m_MipBias = i3583[3]
  i3582.m_VarianceClampScale = i3583[4]
  i3582.m_ContrastAdaptiveSharpening = i3583[5]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3585 = data
  request.r(i3585[0], i3585[1], 0, i3584, 'clip')
  request.r(i3585[2], i3585[3], 0, i3584, 'outputAudioMixerGroup')
  i3584.playOnAwake = !!i3585[4]
  i3584.loop = !!i3585[5]
  i3584.time = i3585[6]
  i3584.volume = i3585[7]
  i3584.pitch = i3585[8]
  i3584.enabled = !!i3585[9]
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3587 = data
  i3586.type = i3587[0]
  i3586.color = new pc.Color(i3587[1], i3587[2], i3587[3], i3587[4])
  i3586.cullingMask = i3587[5]
  i3586.intensity = i3587[6]
  i3586.range = i3587[7]
  i3586.spotAngle = i3587[8]
  i3586.shadows = i3587[9]
  i3586.shadowNormalBias = i3587[10]
  i3586.shadowBias = i3587[11]
  i3586.shadowStrength = i3587[12]
  i3586.shadowResolution = i3587[13]
  i3586.lightmapBakeType = i3587[14]
  i3586.renderMode = i3587[15]
  request.r(i3587[16], i3587[17], 0, i3586, 'cookie')
  i3586.cookieSize = i3587[18]
  i3586.shadowNearPlane = i3587[19]
  i3586.occlusionMaskChannel = i3587[20]
  i3586.enabled = !!i3587[21]
  return i3586
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i3588 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i3589 = data
  i3588.m_Version = i3589[0]
  i3588.m_UsePipelineSettings = !!i3589[1]
  i3588.m_AdditionalLightsShadowResolutionTier = i3589[2]
  i3588.m_LightLayerMask = i3589[3]
  i3588.m_RenderingLayers = i3589[4]
  i3588.m_CustomShadowLayers = !!i3589[5]
  i3588.m_ShadowLayerMask = i3589[6]
  i3588.m_ShadowRenderingLayers = i3589[7]
  i3588.m_LightCookieSize = new pc.Vec2( i3589[8], i3589[9] )
  i3588.m_LightCookieOffset = new pc.Vec2( i3589[10], i3589[11] )
  i3588.m_SoftShadowQuality = i3589[12]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3591 = data
  i3590.pivot = new pc.Vec2( i3591[0], i3591[1] )
  i3590.anchorMin = new pc.Vec2( i3591[2], i3591[3] )
  i3590.anchorMax = new pc.Vec2( i3591[4], i3591[5] )
  i3590.sizeDelta = new pc.Vec2( i3591[6], i3591[7] )
  i3590.anchoredPosition3D = new pc.Vec3( i3591[8], i3591[9], i3591[10] )
  i3590.rotation = new pc.Quat(i3591[11], i3591[12], i3591[13], i3591[14])
  i3590.scale = new pc.Vec3( i3591[15], i3591[16], i3591[17] )
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3593 = data
  i3592.planeDistance = i3593[0]
  i3592.referencePixelsPerUnit = i3593[1]
  i3592.isFallbackOverlay = !!i3593[2]
  i3592.renderMode = i3593[3]
  i3592.renderOrder = i3593[4]
  i3592.sortingLayerName = i3593[5]
  i3592.sortingOrder = i3593[6]
  i3592.scaleFactor = i3593[7]
  request.r(i3593[8], i3593[9], 0, i3592, 'worldCamera')
  i3592.overrideSorting = !!i3593[10]
  i3592.pixelPerfect = !!i3593[11]
  i3592.targetDisplay = i3593[12]
  i3592.overridePixelPerfect = !!i3593[13]
  i3592.enabled = !!i3593[14]
  return i3592
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3594 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3595 = data
  i3594.m_UiScaleMode = i3595[0]
  i3594.m_ReferencePixelsPerUnit = i3595[1]
  i3594.m_ScaleFactor = i3595[2]
  i3594.m_ReferenceResolution = new pc.Vec2( i3595[3], i3595[4] )
  i3594.m_ScreenMatchMode = i3595[5]
  i3594.m_MatchWidthOrHeight = i3595[6]
  i3594.m_PhysicalUnit = i3595[7]
  i3594.m_FallbackScreenDPI = i3595[8]
  i3594.m_DefaultSpriteDPI = i3595[9]
  i3594.m_DynamicPixelsPerUnit = i3595[10]
  i3594.m_PresetInfoIsWorld = !!i3595[11]
  return i3594
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3596 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3597 = data
  i3596.m_IgnoreReversedGraphics = !!i3597[0]
  i3596.m_BlockingObjects = i3597[1]
  i3596.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3597[2] )
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3599 = data
  i3598.cullTransparentMesh = !!i3599[0]
  return i3598
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3600 = root || request.c( 'UnityEngine.UI.Image' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'm_Sprite')
  i3600.m_Type = i3601[2]
  i3600.m_PreserveAspect = !!i3601[3]
  i3600.m_FillCenter = !!i3601[4]
  i3600.m_FillMethod = i3601[5]
  i3600.m_FillAmount = i3601[6]
  i3600.m_FillClockwise = !!i3601[7]
  i3600.m_FillOrigin = i3601[8]
  i3600.m_UseSpriteMesh = !!i3601[9]
  i3600.m_PixelsPerUnitMultiplier = i3601[10]
  request.r(i3601[11], i3601[12], 0, i3600, 'm_Material')
  i3600.m_Maskable = !!i3601[13]
  i3600.m_Color = new pc.Color(i3601[14], i3601[15], i3601[16], i3601[17])
  i3600.m_RaycastTarget = !!i3601[18]
  i3600.m_RaycastPadding = new pc.Vec4( i3601[19], i3601[20], i3601[21], i3601[22] )
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3603 = data
  i3602.m_Alpha = i3603[0]
  i3602.m_Interactable = !!i3603[1]
  i3602.m_BlocksRaycasts = !!i3603[2]
  i3602.m_IgnoreParentGroups = !!i3603[3]
  i3602.enabled = !!i3603[4]
  return i3602
}

Deserializers["Source.Game.HexMerge.HexGameFinishedView"] = function (request, data, root) {
  var i3604 = root || request.c( 'Source.Game.HexMerge.HexGameFinishedView' )
  var i3605 = data
  request.r(i3605[0], i3605[1], 0, i3604, '_canvasGroup')
  request.r(i3605[2], i3605[3], 0, i3604, '_button')
  i3604._fadeDuration = i3605[4]
  return i3604
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.UI.Button' )
  var i3607 = data
  i3606.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3607[0], i3606.m_OnClick)
  i3606.m_Navigation = request.d('UnityEngine.UI.Navigation', i3607[1], i3606.m_Navigation)
  i3606.m_Transition = i3607[2]
  i3606.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3607[3], i3606.m_Colors)
  i3606.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3607[4], i3606.m_SpriteState)
  i3606.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3607[5], i3606.m_AnimationTriggers)
  i3606.m_Interactable = !!i3607[6]
  request.r(i3607[7], i3607[8], 0, i3606, 'm_TargetGraphic')
  return i3606
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3609 = data
  i3608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3609[0], i3608.m_PersistentCalls)
  return i3608
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3611 = data
  var i3613 = i3611[0]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.add(request.d('UnityEngine.Events.PersistentCall', i3613[i + 0]));
  }
  i3610.m_Calls = i3612
  return i3610
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'm_Target')
  i3616.m_TargetAssemblyTypeName = i3617[2]
  i3616.m_MethodName = i3617[3]
  i3616.m_Mode = i3617[4]
  i3616.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3617[5], i3616.m_Arguments)
  i3616.m_CallState = i3617[6]
  return i3616
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3619 = data
  i3618.m_Mode = i3619[0]
  i3618.m_WrapAround = !!i3619[1]
  request.r(i3619[2], i3619[3], 0, i3618, 'm_SelectOnUp')
  request.r(i3619[4], i3619[5], 0, i3618, 'm_SelectOnDown')
  request.r(i3619[6], i3619[7], 0, i3618, 'm_SelectOnLeft')
  request.r(i3619[8], i3619[9], 0, i3618, 'm_SelectOnRight')
  return i3618
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3621 = data
  i3620.m_NormalColor = new pc.Color(i3621[0], i3621[1], i3621[2], i3621[3])
  i3620.m_HighlightedColor = new pc.Color(i3621[4], i3621[5], i3621[6], i3621[7])
  i3620.m_PressedColor = new pc.Color(i3621[8], i3621[9], i3621[10], i3621[11])
  i3620.m_SelectedColor = new pc.Color(i3621[12], i3621[13], i3621[14], i3621[15])
  i3620.m_DisabledColor = new pc.Color(i3621[16], i3621[17], i3621[18], i3621[19])
  i3620.m_ColorMultiplier = i3621[20]
  i3620.m_FadeDuration = i3621[21]
  return i3620
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'm_HighlightedSprite')
  request.r(i3623[2], i3623[3], 0, i3622, 'm_PressedSprite')
  request.r(i3623[4], i3623[5], 0, i3622, 'm_SelectedSprite')
  request.r(i3623[6], i3623[7], 0, i3622, 'm_DisabledSprite')
  return i3622
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3625 = data
  i3624.m_NormalTrigger = i3625[0]
  i3624.m_HighlightedTrigger = i3625[1]
  i3624.m_PressedTrigger = i3625[2]
  i3624.m_SelectedTrigger = i3625[3]
  i3624.m_DisabledTrigger = i3625[4]
  return i3624
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3626 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3627 = data
  i3626.m_hasFontAssetChanged = !!i3627[0]
  request.r(i3627[1], i3627[2], 0, i3626, 'm_baseMaterial')
  i3626.m_maskOffset = new pc.Vec4( i3627[3], i3627[4], i3627[5], i3627[6] )
  i3626.m_text = i3627[7]
  i3626.m_isRightToLeft = !!i3627[8]
  request.r(i3627[9], i3627[10], 0, i3626, 'm_fontAsset')
  request.r(i3627[11], i3627[12], 0, i3626, 'm_sharedMaterial')
  var i3629 = i3627[13]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 2) {
  request.r(i3629[i + 0], i3629[i + 1], 2, i3628, '')
  }
  i3626.m_fontSharedMaterials = i3628
  request.r(i3627[14], i3627[15], 0, i3626, 'm_fontMaterial')
  var i3631 = i3627[16]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 2) {
  request.r(i3631[i + 0], i3631[i + 1], 2, i3630, '')
  }
  i3626.m_fontMaterials = i3630
  i3626.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3627[17], i3627[18], i3627[19], i3627[20])
  i3626.m_fontColor = new pc.Color(i3627[21], i3627[22], i3627[23], i3627[24])
  i3626.m_enableVertexGradient = !!i3627[25]
  i3626.m_colorMode = i3627[26]
  i3626.m_fontColorGradient = request.d('TMPro.VertexGradient', i3627[27], i3626.m_fontColorGradient)
  request.r(i3627[28], i3627[29], 0, i3626, 'm_fontColorGradientPreset')
  request.r(i3627[30], i3627[31], 0, i3626, 'm_spriteAsset')
  i3626.m_tintAllSprites = !!i3627[32]
  request.r(i3627[33], i3627[34], 0, i3626, 'm_StyleSheet')
  i3626.m_TextStyleHashCode = i3627[35]
  i3626.m_overrideHtmlColors = !!i3627[36]
  i3626.m_faceColor = UnityEngine.Color32.ConstructColor(i3627[37], i3627[38], i3627[39], i3627[40])
  i3626.m_fontSize = i3627[41]
  i3626.m_fontSizeBase = i3627[42]
  i3626.m_fontWeight = i3627[43]
  i3626.m_enableAutoSizing = !!i3627[44]
  i3626.m_fontSizeMin = i3627[45]
  i3626.m_fontSizeMax = i3627[46]
  i3626.m_fontStyle = i3627[47]
  i3626.m_HorizontalAlignment = i3627[48]
  i3626.m_VerticalAlignment = i3627[49]
  i3626.m_textAlignment = i3627[50]
  i3626.m_characterSpacing = i3627[51]
  i3626.m_wordSpacing = i3627[52]
  i3626.m_lineSpacing = i3627[53]
  i3626.m_lineSpacingMax = i3627[54]
  i3626.m_paragraphSpacing = i3627[55]
  i3626.m_charWidthMaxAdj = i3627[56]
  i3626.m_enableWordWrapping = !!i3627[57]
  i3626.m_wordWrappingRatios = i3627[58]
  i3626.m_overflowMode = i3627[59]
  request.r(i3627[60], i3627[61], 0, i3626, 'm_linkedTextComponent')
  request.r(i3627[62], i3627[63], 0, i3626, 'parentLinkedComponent')
  i3626.m_enableKerning = !!i3627[64]
  i3626.m_enableExtraPadding = !!i3627[65]
  i3626.checkPaddingRequired = !!i3627[66]
  i3626.m_isRichText = !!i3627[67]
  i3626.m_parseCtrlCharacters = !!i3627[68]
  i3626.m_isOrthographic = !!i3627[69]
  i3626.m_isCullingEnabled = !!i3627[70]
  i3626.m_horizontalMapping = i3627[71]
  i3626.m_verticalMapping = i3627[72]
  i3626.m_uvLineOffset = i3627[73]
  i3626.m_geometrySortingOrder = i3627[74]
  i3626.m_IsTextObjectScaleStatic = !!i3627[75]
  i3626.m_VertexBufferAutoSizeReduction = !!i3627[76]
  i3626.m_useMaxVisibleDescender = !!i3627[77]
  i3626.m_pageToDisplay = i3627[78]
  i3626.m_margin = new pc.Vec4( i3627[79], i3627[80], i3627[81], i3627[82] )
  i3626.m_isUsingLegacyAnimationComponent = !!i3627[83]
  i3626.m_isVolumetricText = !!i3627[84]
  request.r(i3627[85], i3627[86], 0, i3626, 'm_Material')
  i3626.m_Maskable = !!i3627[87]
  i3626.m_Color = new pc.Color(i3627[88], i3627[89], i3627[90], i3627[91])
  i3626.m_RaycastTarget = !!i3627[92]
  i3626.m_RaycastPadding = new pc.Vec4( i3627[93], i3627[94], i3627[95], i3627[96] )
  return i3626
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3632 = root || request.c( 'TMPro.VertexGradient' )
  var i3633 = data
  i3632.topLeft = new pc.Color(i3633[0], i3633[1], i3633[2], i3633[3])
  i3632.topRight = new pc.Color(i3633[4], i3633[5], i3633[6], i3633[7])
  i3632.bottomLeft = new pc.Color(i3633[8], i3633[9], i3633[10], i3633[11])
  i3632.bottomRight = new pc.Color(i3633[12], i3633[13], i3633[14], i3633[15])
  return i3632
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3635 = data
  request.r(i3635[0], i3635[1], 0, i3634, 'm_FirstSelected')
  i3634.m_sendNavigationEvents = !!i3635[2]
  i3634.m_DragThreshold = i3635[3]
  return i3634
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3636 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3637 = data
  i3636.m_HorizontalAxis = i3637[0]
  i3636.m_VerticalAxis = i3637[1]
  i3636.m_SubmitButton = i3637[2]
  i3636.m_CancelButton = i3637[3]
  i3636.m_InputActionsPerSecond = i3637[4]
  i3636.m_RepeatDelay = i3637[5]
  i3636.m_ForceModuleActive = !!i3637[6]
  i3636.m_SendPointerHoverToParent = !!i3637[7]
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3639 = data
  i3638.ambientIntensity = i3639[0]
  i3638.reflectionIntensity = i3639[1]
  i3638.ambientMode = i3639[2]
  i3638.ambientLight = new pc.Color(i3639[3], i3639[4], i3639[5], i3639[6])
  i3638.ambientSkyColor = new pc.Color(i3639[7], i3639[8], i3639[9], i3639[10])
  i3638.ambientGroundColor = new pc.Color(i3639[11], i3639[12], i3639[13], i3639[14])
  i3638.ambientEquatorColor = new pc.Color(i3639[15], i3639[16], i3639[17], i3639[18])
  i3638.fogColor = new pc.Color(i3639[19], i3639[20], i3639[21], i3639[22])
  i3638.fogEndDistance = i3639[23]
  i3638.fogStartDistance = i3639[24]
  i3638.fogDensity = i3639[25]
  i3638.fog = !!i3639[26]
  request.r(i3639[27], i3639[28], 0, i3638, 'skybox')
  i3638.fogMode = i3639[29]
  var i3641 = i3639[30]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3641[i + 0]) );
  }
  i3638.lightmaps = i3640
  i3638.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3639[31], i3638.lightProbes)
  i3638.lightmapsMode = i3639[32]
  i3638.mixedBakeMode = i3639[33]
  i3638.environmentLightingMode = i3639[34]
  i3638.ambientProbe = new pc.SphericalHarmonicsL2(i3639[35])
  i3638.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3639[36])
  i3638.useReferenceAmbientProbe = !!i3639[37]
  request.r(i3639[38], i3639[39], 0, i3638, 'customReflection')
  request.r(i3639[40], i3639[41], 0, i3638, 'defaultReflection')
  i3638.defaultReflectionMode = i3639[42]
  i3638.defaultReflectionResolution = i3639[43]
  i3638.sunLightObjectId = i3639[44]
  i3638.pixelLightCount = i3639[45]
  i3638.defaultReflectionHDR = !!i3639[46]
  i3638.hasLightDataAsset = !!i3639[47]
  i3638.hasManualGenerate = !!i3639[48]
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3645 = data
  request.r(i3645[0], i3645[1], 0, i3644, 'lightmapColor')
  request.r(i3645[2], i3645[3], 0, i3644, 'lightmapDirection')
  request.r(i3645[4], i3645[5], 0, i3644, 'shadowMask')
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3646 = root || new UnityEngine.LightProbes()
  var i3647 = data
  return i3646
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i3655 = data
  request.r(i3655[0], i3655[1], 0, i3654, 'panelPrefab')
  var i3657 = i3655[2]
  var i3656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i3657[i + 0]));
  }
  i3654.prefabs = i3656
  return i3654
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i3661 = data
  i3660.type = i3661[0]
  request.r(i3661[1], i3661[2], 0, i3660, 'prefab')
  return i3660
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i3663 = data
  i3662.m_Spacing = i3663[0]
  i3662.m_ChildForceExpandWidth = !!i3663[1]
  i3662.m_ChildForceExpandHeight = !!i3663[2]
  i3662.m_ChildControlWidth = !!i3663[3]
  i3662.m_ChildControlHeight = !!i3663[4]
  i3662.m_ChildScaleWidth = !!i3663[5]
  i3662.m_ChildScaleHeight = !!i3663[6]
  i3662.m_ReverseArrangement = !!i3663[7]
  i3662.m_Padding = UnityEngine.RectOffset.FromPaddings(i3663[8], i3663[9], i3663[10], i3663[11])
  i3662.m_ChildAlignment = i3663[12]
  return i3662
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3665 = data
  i3664.m_HorizontalFit = i3665[0]
  i3664.m_VerticalFit = i3665[1]
  return i3664
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i3666 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i3667 = data
  request.r(i3667[0], i3667[1], 0, i3666, 'contentHolder')
  return i3666
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'nameLabel')
  request.r(i3669[2], i3669[3], 0, i3668, 'scrollRect')
  request.r(i3669[4], i3669[5], 0, i3668, 'viewport')
  request.r(i3669[6], i3669[7], 0, i3668, 'Canvas')
  return i3668
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i3671 = data
  i3670.m_IgnoreLayout = !!i3671[0]
  i3670.m_MinWidth = i3671[1]
  i3670.m_MinHeight = i3671[2]
  i3670.m_PreferredWidth = i3671[3]
  i3670.m_PreferredHeight = i3671[4]
  i3670.m_FlexibleWidth = i3671[5]
  i3670.m_FlexibleHeight = i3671[6]
  i3670.m_LayoutPriority = i3671[7]
  return i3670
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3673 = data
  request.r(i3673[0], i3673[1], 0, i3672, 'm_ObjectArgument')
  i3672.m_ObjectArgumentAssemblyTypeName = i3673[2]
  i3672.m_IntArgument = i3673[3]
  i3672.m_FloatArgument = i3673[4]
  i3672.m_StringArgument = i3673[5]
  i3672.m_BoolArgument = !!i3673[6]
  return i3672
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.UI.Text' )
  var i3675 = data
  i3674.m_FontData = request.d('UnityEngine.UI.FontData', i3675[0], i3674.m_FontData)
  i3674.m_Text = i3675[1]
  request.r(i3675[2], i3675[3], 0, i3674, 'm_Material')
  i3674.m_Maskable = !!i3675[4]
  i3674.m_Color = new pc.Color(i3675[5], i3675[6], i3675[7], i3675[8])
  i3674.m_RaycastTarget = !!i3675[9]
  i3674.m_RaycastPadding = new pc.Vec4( i3675[10], i3675[11], i3675[12], i3675[13] )
  return i3674
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3676 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3677 = data
  request.r(i3677[0], i3677[1], 0, i3676, 'm_Font')
  i3676.m_FontSize = i3677[2]
  i3676.m_FontStyle = i3677[3]
  i3676.m_BestFit = !!i3677[4]
  i3676.m_MinSize = i3677[5]
  i3676.m_MaxSize = i3677[6]
  i3676.m_Alignment = i3677[7]
  i3676.m_AlignByGeometry = !!i3677[8]
  i3676.m_RichText = !!i3677[9]
  i3676.m_HorizontalOverflow = i3677[10]
  i3676.m_VerticalOverflow = i3677[11]
  i3676.m_LineSpacing = i3677[12]
  return i3676
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i3678 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'm_Content')
  i3678.m_Horizontal = !!i3679[2]
  i3678.m_Vertical = !!i3679[3]
  i3678.m_MovementType = i3679[4]
  i3678.m_Elasticity = i3679[5]
  i3678.m_Inertia = !!i3679[6]
  i3678.m_DecelerationRate = i3679[7]
  i3678.m_ScrollSensitivity = i3679[8]
  request.r(i3679[9], i3679[10], 0, i3678, 'm_Viewport')
  request.r(i3679[11], i3679[12], 0, i3678, 'm_HorizontalScrollbar')
  request.r(i3679[13], i3679[14], 0, i3678, 'm_VerticalScrollbar')
  i3678.m_HorizontalScrollbarVisibility = i3679[15]
  i3678.m_VerticalScrollbarVisibility = i3679[16]
  i3678.m_HorizontalScrollbarSpacing = i3679[17]
  i3678.m_VerticalScrollbarSpacing = i3679[18]
  i3678.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i3679[19], i3678.m_OnValueChanged)
  return i3678
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i3680 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i3681 = data
  i3680.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3681[0], i3680.m_PersistentCalls)
  return i3680
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3682 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3683 = data
  i3682.m_ShowMaskGraphic = !!i3683[0]
  return i3682
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i3685 = data
  request.r(i3685[0], i3685[1], 0, i3684, 'm_HandleRect')
  i3684.m_Direction = i3685[2]
  i3684.m_Value = i3685[3]
  i3684.m_Size = i3685[4]
  i3684.m_NumberOfSteps = i3685[5]
  i3684.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i3685[6], i3684.m_OnValueChanged)
  i3684.m_Navigation = request.d('UnityEngine.UI.Navigation', i3685[7], i3684.m_Navigation)
  i3684.m_Transition = i3685[8]
  i3684.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3685[9], i3684.m_Colors)
  i3684.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3685[10], i3684.m_SpriteState)
  i3684.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3685[11], i3684.m_AnimationTriggers)
  i3684.m_Interactable = !!i3685[12]
  request.r(i3685[13], i3685[14], 0, i3684, 'm_TargetGraphic')
  return i3684
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i3686 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i3687 = data
  i3686.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3687[0], i3686.m_PersistentCalls)
  return i3686
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i3689 = data
  var i3691 = i3689[0]
  var i3690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i3691[i + 0]));
  }
  i3688.m_Delegates = i3690
  return i3688
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i3694 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i3695 = data
  i3694.eventID = i3695[0]
  i3694.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i3695[1], i3694.callback)
  return i3694
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i3697 = data
  i3696.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3697[0], i3696.m_PersistentCalls)
  return i3696
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i3698 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i3699 = data
  request.r(i3699[0], i3699[1], 0, i3698, 'nameLabel')
  request.r(i3699[2], i3699[3], 0, i3698, 'valueLabel')
  i3698.colorDefault = new pc.Color(i3699[4], i3699[5], i3699[6], i3699[7])
  i3698.colorSelected = new pc.Color(i3699[8], i3699[9], i3699[10], i3699[11])
  return i3698
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i3700 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i3701 = data
  request.r(i3701[0], i3701[1], 0, i3700, 'nameLabel')
  request.r(i3701[2], i3701[3], 0, i3700, 'valueToggle')
  request.r(i3701[4], i3701[5], 0, i3700, 'checkmarkImage')
  i3700.colorDefault = new pc.Color(i3701[6], i3701[7], i3701[8], i3701[9])
  i3700.colorSelected = new pc.Color(i3701[10], i3701[11], i3701[12], i3701[13])
  return i3700
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i3703 = data
  i3702.toggleTransition = i3703[0]
  request.r(i3703[1], i3703[2], 0, i3702, 'graphic')
  i3702.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3703[3], i3702.onValueChanged)
  request.r(i3703[4], i3703[5], 0, i3702, 'm_Group')
  i3702.m_IsOn = !!i3703[6]
  i3702.m_Navigation = request.d('UnityEngine.UI.Navigation', i3703[7], i3702.m_Navigation)
  i3702.m_Transition = i3703[8]
  i3702.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3703[9], i3702.m_Colors)
  i3702.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3703[10], i3702.m_SpriteState)
  i3702.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3703[11], i3702.m_AnimationTriggers)
  i3702.m_Interactable = !!i3703[12]
  request.r(i3703[13], i3703[14], 0, i3702, 'm_TargetGraphic')
  return i3702
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i3705 = data
  i3704.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3705[0], i3704.m_PersistentCalls)
  return i3704
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i3706 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i3707 = data
  request.r(i3707[0], i3707[1], 0, i3706, 'nameLabel')
  request.r(i3707[2], i3707[3], 0, i3706, 'valueLabel')
  i3706.colorDefault = new pc.Color(i3707[4], i3707[5], i3707[6], i3707[7])
  i3706.colorSelected = new pc.Color(i3707[8], i3707[9], i3707[10], i3707[11])
  return i3706
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i3709 = data
  request.r(i3709[0], i3709[1], 0, i3708, 'nameLabel')
  request.r(i3709[2], i3709[3], 0, i3708, 'valueLabel')
  i3708.colorDefault = new pc.Color(i3709[4], i3709[5], i3709[6], i3709[7])
  i3708.colorSelected = new pc.Color(i3709[8], i3709[9], i3709[10], i3709[11])
  return i3708
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i3711 = data
  request.r(i3711[0], i3711[1], 0, i3710, 'nameLabel')
  request.r(i3711[2], i3711[3], 0, i3710, 'valueLabel')
  i3710.colorDefault = new pc.Color(i3711[4], i3711[5], i3711[6], i3711[7])
  i3710.colorSelected = new pc.Color(i3711[8], i3711[9], i3711[10], i3711[11])
  return i3710
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'nextButtonText')
  request.r(i3713[2], i3713[3], 0, i3712, 'previousButtonText')
  request.r(i3713[4], i3713[5], 0, i3712, 'nameLabel')
  request.r(i3713[6], i3713[7], 0, i3712, 'valueLabel')
  i3712.colorDefault = new pc.Color(i3713[8], i3713[9], i3713[10], i3713[11])
  i3712.colorSelected = new pc.Color(i3713[12], i3713[13], i3713[14], i3713[15])
  return i3712
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i3714 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i3715 = data
  request.r(i3715[0], i3715[1], 0, i3714, 'nameLabel')
  i3714.colorDefault = new pc.Color(i3715[2], i3715[3], i3715[4], i3715[5])
  i3714.colorSelected = new pc.Color(i3715[6], i3715[7], i3715[8], i3715[9])
  return i3714
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i3716 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'nameLabel')
  request.r(i3717[2], i3717[3], 0, i3716, 'valueToggle')
  i3716.colorDefault = new pc.Color(i3717[4], i3717[5], i3717[6], i3717[7])
  i3716.colorSelected = new pc.Color(i3717[8], i3717[9], i3717[10], i3717[11])
  return i3716
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i3718 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i3719 = data
  request.r(i3719[0], i3719[1], 0, i3718, 'content')
  request.r(i3719[2], i3719[3], 0, i3718, 'arrowOpened')
  request.r(i3719[4], i3719[5], 0, i3718, 'arrowClosed')
  i3718.toggleTransition = i3719[6]
  request.r(i3719[7], i3719[8], 0, i3718, 'graphic')
  i3718.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3719[9], i3718.onValueChanged)
  request.r(i3719[10], i3719[11], 0, i3718, 'm_Group')
  i3718.m_IsOn = !!i3719[12]
  i3718.m_Navigation = request.d('UnityEngine.UI.Navigation', i3719[13], i3718.m_Navigation)
  i3718.m_Transition = i3719[14]
  i3718.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3719[15], i3718.m_Colors)
  i3718.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3719[16], i3718.m_SpriteState)
  i3718.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3719[17], i3718.m_AnimationTriggers)
  i3718.m_Interactable = !!i3719[18]
  request.r(i3719[19], i3719[20], 0, i3718, 'm_TargetGraphic')
  return i3718
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i3720 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i3721 = data
  request.r(i3721[0], i3721[1], 0, i3720, 'nameLabel')
  request.r(i3721[2], i3721[3], 0, i3720, 'valueToggle')
  request.r(i3721[4], i3721[5], 0, i3720, 'colorImage')
  request.r(i3721[6], i3721[7], 0, i3720, 'fieldR')
  request.r(i3721[8], i3721[9], 0, i3720, 'fieldG')
  request.r(i3721[10], i3721[11], 0, i3720, 'fieldB')
  request.r(i3721[12], i3721[13], 0, i3720, 'fieldA')
  i3720.colorDefault = new pc.Color(i3721[14], i3721[15], i3721[16], i3721[17])
  i3720.colorSelected = new pc.Color(i3721[18], i3721[19], i3721[20], i3721[21])
  return i3720
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i3723 = data
  request.r(i3723[0], i3723[1], 0, i3722, 'nameLabel')
  request.r(i3723[2], i3723[3], 0, i3722, 'valueLabel')
  i3722.colorDefault = new pc.Color(i3723[4], i3723[5], i3723[6], i3723[7])
  i3722.colorSelected = new pc.Color(i3723[8], i3723[9], i3723[10], i3723[11])
  return i3722
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i3725 = data
  request.r(i3725[0], i3725[1], 0, i3724, 'nameLabel')
  request.r(i3725[2], i3725[3], 0, i3724, 'valueToggle')
  request.r(i3725[4], i3725[5], 0, i3724, 'fieldX')
  request.r(i3725[6], i3725[7], 0, i3724, 'fieldY')
  i3724.colorDefault = new pc.Color(i3725[8], i3725[9], i3725[10], i3725[11])
  i3724.colorSelected = new pc.Color(i3725[12], i3725[13], i3725[14], i3725[15])
  return i3724
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i3726 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i3727 = data
  request.r(i3727[0], i3727[1], 0, i3726, 'nameLabel')
  request.r(i3727[2], i3727[3], 0, i3726, 'valueToggle')
  request.r(i3727[4], i3727[5], 0, i3726, 'fieldX')
  request.r(i3727[6], i3727[7], 0, i3726, 'fieldY')
  request.r(i3727[8], i3727[9], 0, i3726, 'fieldZ')
  i3726.colorDefault = new pc.Color(i3727[10], i3727[11], i3727[12], i3727[13])
  i3726.colorSelected = new pc.Color(i3727[14], i3727[15], i3727[16], i3727[17])
  return i3726
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i3728 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'nameLabel')
  request.r(i3729[2], i3729[3], 0, i3728, 'valueToggle')
  request.r(i3729[4], i3729[5], 0, i3728, 'fieldX')
  request.r(i3729[6], i3729[7], 0, i3728, 'fieldY')
  request.r(i3729[8], i3729[9], 0, i3728, 'fieldZ')
  request.r(i3729[10], i3729[11], 0, i3728, 'fieldW')
  i3728.colorDefault = new pc.Color(i3729[12], i3729[13], i3729[14], i3729[15])
  i3728.colorSelected = new pc.Color(i3729[16], i3729[17], i3729[18], i3729[19])
  return i3728
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i3730 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i3731 = data
  i3730.colorDefault = new pc.Color(i3731[0], i3731[1], i3731[2], i3731[3])
  i3730.colorSelected = new pc.Color(i3731[4], i3731[5], i3731[6], i3731[7])
  return i3730
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3732 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3733 = data
  i3732.m_Spacing = i3733[0]
  i3732.m_ChildForceExpandWidth = !!i3733[1]
  i3732.m_ChildForceExpandHeight = !!i3733[2]
  i3732.m_ChildControlWidth = !!i3733[3]
  i3732.m_ChildControlHeight = !!i3733[4]
  i3732.m_ChildScaleWidth = !!i3733[5]
  i3732.m_ChildScaleHeight = !!i3733[6]
  i3732.m_ReverseArrangement = !!i3733[7]
  i3732.m_Padding = UnityEngine.RectOffset.FromPaddings(i3733[8], i3733[9], i3733[10], i3733[11])
  i3732.m_ChildAlignment = i3733[12]
  return i3732
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i3734 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i3735 = data
  i3734.colorDefault = new pc.Color(i3735[0], i3735[1], i3735[2], i3735[3])
  i3734.colorSelected = new pc.Color(i3735[4], i3735[5], i3735[6], i3735[7])
  return i3734
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i3736 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i3737 = data
  request.r(i3737[0], i3737[1], 0, i3736, 'nameLabel')
  request.r(i3737[2], i3737[3], 0, i3736, 'header')
  i3736.colorDefault = new pc.Color(i3737[4], i3737[5], i3737[6], i3737[7])
  i3736.colorSelected = new pc.Color(i3737[8], i3737[9], i3737[10], i3737[11])
  return i3736
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i3738 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i3739 = data
  request.r(i3739[0], i3739[1], 0, i3738, 'nameLabel')
  request.r(i3739[2], i3739[3], 0, i3738, 'valueToggle')
  var i3741 = i3739[4]
  var i3740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i3741.length; i += 2) {
  request.r(i3741[i + 0], i3741[i + 1], 1, i3740, '')
  }
  i3738.toggles = i3740
  i3738.colorDefault = new pc.Color(i3739[5], i3739[6], i3739[7], i3739[8])
  i3738.colorSelected = new pc.Color(i3739[9], i3739[10], i3739[11], i3739[12])
  return i3738
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i3744 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i3745 = data
  request.r(i3745[0], i3745[1], 0, i3744, 'nameLabel')
  request.r(i3745[2], i3745[3], 0, i3744, 'valueToggle')
  request.r(i3745[4], i3745[5], 0, i3744, 'checkmarkImage')
  i3744.colorDefault = new pc.Color(i3745[6], i3745[7], i3745[8], i3745[9])
  i3744.colorSelected = new pc.Color(i3745[10], i3745[11], i3745[12], i3745[13])
  return i3744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i3746 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'nameLabel')
  request.r(i3747[2], i3747[3], 0, i3746, 'valueToggle')
  request.r(i3747[4], i3747[5], 0, i3746, 'checkmarkImage')
  i3746.colorDefault = new pc.Color(i3747[6], i3747[7], i3747[8], i3747[9])
  i3746.colorSelected = new pc.Color(i3747[10], i3747[11], i3747[12], i3747[13])
  return i3746
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i3748 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i3749 = data
  request.r(i3749[0], i3749[1], 0, i3748, 'nextButtonText')
  request.r(i3749[2], i3749[3], 0, i3748, 'previousButtonText')
  request.r(i3749[4], i3749[5], 0, i3748, 'nameLabel')
  request.r(i3749[6], i3749[7], 0, i3748, 'valueLabel')
  i3748.colorDefault = new pc.Color(i3749[8], i3749[9], i3749[10], i3749[11])
  i3748.colorSelected = new pc.Color(i3749[12], i3749[13], i3749[14], i3749[15])
  return i3748
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i3750 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i3751 = data
  request.r(i3751[0], i3751[1], 0, i3750, 'nameLabel')
  request.r(i3751[2], i3751[3], 0, i3750, 'valueToggle')
  i3750.colorDefault = new pc.Color(i3751[4], i3751[5], i3751[6], i3751[7])
  i3750.colorSelected = new pc.Color(i3751[8], i3751[9], i3751[10], i3751[11])
  return i3750
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i3752 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'nameLabel')
  i3752.colorDefault = new pc.Color(i3753[2], i3753[3], i3753[4], i3753[5])
  i3752.colorSelected = new pc.Color(i3753[6], i3753[7], i3753[8], i3753[9])
  return i3752
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i3754 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i3755 = data
  request.r(i3755[0], i3755[1], 0, i3754, 'nameLabel')
  request.r(i3755[2], i3755[3], 0, i3754, 'valueLabel')
  request.r(i3755[4], i3755[5], 0, i3754, 'progressBarRect')
  i3754.colorDefault = new pc.Color(i3755[6], i3755[7], i3755[8], i3755[9])
  i3754.colorSelected = new pc.Color(i3755[10], i3755[11], i3755[12], i3755[13])
  return i3754
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i3756 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i3757 = data
  request.r(i3757[0], i3757[1], 0, i3756, 'nameLabel')
  request.r(i3757[2], i3757[3], 0, i3756, 'valueLabel')
  i3756.colorDefault = new pc.Color(i3757[4], i3757[5], i3757[6], i3757[7])
  i3756.colorSelected = new pc.Color(i3757[8], i3757[9], i3757[10], i3757[11])
  return i3756
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i3758 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i3759 = data
  request.r(i3759[0], i3759[1], 0, i3758, 'nameLabel')
  request.r(i3759[2], i3759[3], 0, i3758, 'valueLabel')
  i3758.colorDefault = new pc.Color(i3759[4], i3759[5], i3759[6], i3759[7])
  i3758.colorSelected = new pc.Color(i3759[8], i3759[9], i3759[10], i3759[11])
  return i3758
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i3760 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i3761 = data
  request.r(i3761[0], i3761[1], 0, i3760, 'nextButtonText')
  request.r(i3761[2], i3761[3], 0, i3760, 'previousButtonText')
  request.r(i3761[4], i3761[5], 0, i3760, 'nameLabel')
  request.r(i3761[6], i3761[7], 0, i3760, 'valueLabel')
  i3760.colorDefault = new pc.Color(i3761[8], i3761[9], i3761[10], i3761[11])
  i3760.colorSelected = new pc.Color(i3761[12], i3761[13], i3761[14], i3761[15])
  return i3760
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i3762 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i3763 = data
  request.r(i3763[0], i3763[1], 0, i3762, 'nextButtonText')
  request.r(i3763[2], i3763[3], 0, i3762, 'previousButtonText')
  request.r(i3763[4], i3763[5], 0, i3762, 'nameLabel')
  request.r(i3763[6], i3763[7], 0, i3762, 'valueLabel')
  i3762.colorDefault = new pc.Color(i3763[8], i3763[9], i3763[10], i3763[11])
  i3762.colorSelected = new pc.Color(i3763[12], i3763[13], i3763[14], i3763[15])
  return i3762
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i3764 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i3765 = data
  request.r(i3765[0], i3765[1], 0, i3764, 'panel')
  request.r(i3765[2], i3765[3], 0, i3764, 'valuePrefab')
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i3767 = data
  i3766.AdditionalLightsRenderingMode = i3767[0]
  i3766.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3767[1], i3766.LightRenderingMode)
  i3766.MainLightRenderingModeValue = i3767[2]
  i3766.SupportsMainLightShadows = !!i3767[3]
  i3766.MainLightShadowmapResolutionValue = i3767[4]
  i3766.SupportsSoftShadows = !!i3767[5]
  i3766.SoftShadowQualityValue = i3767[6]
  i3766.ShadowDistance = i3767[7]
  i3766.ShadowCascadeCount = i3767[8]
  i3766.Cascade2Split = i3767[9]
  i3766.Cascade3Split = new pc.Vec2( i3767[10], i3767[11] )
  i3766.Cascade4Split = new pc.Vec3( i3767[12], i3767[13], i3767[14] )
  i3766.CascadeBorder = i3767[15]
  i3766.ShadowDepthBias = i3767[16]
  i3766.ShadowNormalBias = i3767[17]
  i3766.RequireDepthTexture = !!i3767[18]
  i3766.RequireOpaqueTexture = !!i3767[19]
  i3766.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i3767[20], i3766.scriptableRendererData)
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i3769 = data
  i3768.Disabled = i3769[0]
  i3768.PerVertex = i3769[1]
  i3768.PerPixel = i3769[2]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i3771 = data
  i3770.opaqueLayerMask = i3771[0]
  i3770.transparentLayerMask = i3771[1]
  var i3773 = i3771[2]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i3773[i + 0]) );
  }
  i3770.RenderObjectsFeatures = i3772
  i3770.name = i3771[3]
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i3777 = data
  i3776.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i3777[0], i3776.settings)
  i3776.name = i3777[1]
  i3776.typeName = i3777[2]
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3779 = data
  var i3781 = i3779[0]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3781[i + 0]));
  }
  i3778.ShaderCompilationErrors = i3780
  i3778.name = i3779[1]
  i3778.guid = i3779[2]
  var i3783 = i3779[3]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( i3783[i + 0] );
  }
  i3778.shaderDefinedKeywords = i3782
  var i3785 = i3779[4]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3785[i + 0]) );
  }
  i3778.passes = i3784
  var i3787 = i3779[5]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3787[i + 0]) );
  }
  i3778.usePasses = i3786
  var i3789 = i3779[6]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3789[i + 0]) );
  }
  i3778.defaultParameterValues = i3788
  request.r(i3779[7], i3779[8], 0, i3778, 'unityFallbackShader')
  i3778.readDepth = !!i3779[9]
  i3778.hasDepthOnlyPass = !!i3779[10]
  i3778.isCreatedByShaderGraph = !!i3779[11]
  i3778.disableBatching = !!i3779[12]
  i3778.compiled = !!i3779[13]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3793 = data
  i3792.shaderName = i3793[0]
  i3792.errorMessage = i3793[1]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3798 = root || new pc.UnityShaderPass()
  var i3799 = data
  i3798.id = i3799[0]
  i3798.subShaderIndex = i3799[1]
  i3798.name = i3799[2]
  i3798.passType = i3799[3]
  i3798.grabPassTextureName = i3799[4]
  i3798.usePass = !!i3799[5]
  i3798.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[6], i3798.zTest)
  i3798.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[7], i3798.zWrite)
  i3798.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[8], i3798.culling)
  i3798.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3799[9], i3798.blending)
  i3798.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3799[10], i3798.alphaBlending)
  i3798.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[11], i3798.colorWriteMask)
  i3798.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[12], i3798.offsetUnits)
  i3798.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[13], i3798.offsetFactor)
  i3798.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[14], i3798.stencilRef)
  i3798.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[15], i3798.stencilReadMask)
  i3798.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3799[16], i3798.stencilWriteMask)
  i3798.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3799[17], i3798.stencilOp)
  i3798.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3799[18], i3798.stencilOpFront)
  i3798.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3799[19], i3798.stencilOpBack)
  var i3801 = i3799[20]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3801[i + 0]) );
  }
  i3798.tags = i3800
  var i3803 = i3799[21]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( i3803[i + 0] );
  }
  i3798.passDefinedKeywords = i3802
  var i3805 = i3799[22]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3805[i + 0]) );
  }
  i3798.passDefinedKeywordGroups = i3804
  var i3807 = i3799[23]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3807[i + 0]) );
  }
  i3798.variants = i3806
  var i3809 = i3799[24]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3809[i + 0]) );
  }
  i3798.excludedVariants = i3808
  i3798.hasDepthReader = !!i3799[25]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3811 = data
  i3810.val = i3811[0]
  i3810.name = i3811[1]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3813 = data
  i3812.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3813[0], i3812.src)
  i3812.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3813[1], i3812.dst)
  i3812.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3813[2], i3812.op)
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3815 = data
  i3814.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[0], i3814.pass)
  i3814.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[1], i3814.fail)
  i3814.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[2], i3814.zFail)
  i3814.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3815[3], i3814.comp)
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3819 = data
  i3818.name = i3819[0]
  i3818.value = i3819[1]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3823 = data
  var i3825 = i3823[0]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( i3825[i + 0] );
  }
  i3822.keywords = i3824
  i3822.hasDiscard = !!i3823[1]
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3829 = data
  i3828.passId = i3829[0]
  i3828.subShaderIndex = i3829[1]
  var i3831 = i3829[2]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( i3831[i + 0] );
  }
  i3828.keywords = i3830
  i3828.vertexProgram = i3829[3]
  i3828.fragmentProgram = i3829[4]
  i3828.exportedForWebGl2 = !!i3829[5]
  i3828.readDepth = !!i3829[6]
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3835 = data
  request.r(i3835[0], i3835[1], 0, i3834, 'shader')
  i3834.pass = i3835[2]
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.type = i3839[1]
  i3838.value = new pc.Vec4( i3839[2], i3839[3], i3839[4], i3839[5] )
  i3838.textureValue = i3839[6]
  i3838.shaderPropertyFlag = i3839[7]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3841 = data
  i3840.name = i3841[0]
  request.r(i3841[1], i3841[2], 0, i3840, 'texture')
  i3840.aabb = i3841[3]
  i3840.vertices = i3841[4]
  i3840.triangles = i3841[5]
  i3840.textureRect = UnityEngine.Rect.MinMaxRect(i3841[6], i3841[7], i3841[8], i3841[9])
  i3840.packedRect = UnityEngine.Rect.MinMaxRect(i3841[10], i3841[11], i3841[12], i3841[13])
  i3840.border = new pc.Vec4( i3841[14], i3841[15], i3841[16], i3841[17] )
  i3840.transparency = i3841[18]
  i3840.bounds = i3841[19]
  i3840.pixelsPerUnit = i3841[20]
  i3840.textureWidth = i3841[21]
  i3840.textureHeight = i3841[22]
  i3840.nativeSize = new pc.Vec2( i3841[23], i3841[24] )
  i3840.pivot = new pc.Vec2( i3841[25], i3841[26] )
  i3840.textureRectOffset = new pc.Vec2( i3841[27], i3841[28] )
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3843 = data
  i3842.name = i3843[0]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3845 = data
  i3844.name = i3845[0]
  i3844.ascent = i3845[1]
  i3844.originalLineHeight = i3845[2]
  i3844.fontSize = i3845[3]
  var i3847 = i3845[4]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3847[i + 0]) );
  }
  i3844.characterInfo = i3846
  request.r(i3845[5], i3845[6], 0, i3844, 'texture')
  i3844.originalFontSize = i3845[7]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3851 = data
  i3850.index = i3851[0]
  i3850.advance = i3851[1]
  i3850.bearing = i3851[2]
  i3850.glyphWidth = i3851[3]
  i3850.glyphHeight = i3851[4]
  i3850.minX = i3851[5]
  i3850.maxX = i3851[6]
  i3850.minY = i3851[7]
  i3850.maxY = i3851[8]
  i3850.uvBottomLeftX = i3851[9]
  i3850.uvBottomLeftY = i3851[10]
  i3850.uvBottomRightX = i3851[11]
  i3850.uvBottomRightY = i3851[12]
  i3850.uvTopLeftX = i3851[13]
  i3850.uvTopLeftY = i3851[14]
  i3850.uvTopRightX = i3851[15]
  i3850.uvTopRightY = i3851[16]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3853 = data
  i3852.name = i3853[0]
  i3852.bytes64 = i3853[1]
  i3852.data = i3853[2]
  return i3852
}

Deserializers["HexBoardSetupConfig"] = function (request, data, root) {
  var i3854 = root || request.c( 'HexBoardSetupConfig' )
  var i3855 = data
  i3854._width = i3855[0]
  i3854._height = i3855[1]
  var i3857 = i3855[2]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.push( request.d('HexCellStackSetup', i3857[i + 0]) );
  }
  i3854._cells = i3856
  return i3854
}

Deserializers["HexCellStackSetup"] = function (request, data, root) {
  var i3860 = root || request.c( 'HexCellStackSetup' )
  var i3861 = data
  i3860._position = new pc.Vec2( i3861[0], i3861[1] )
  i3860._color = i3861[2]
  i3860._amount = i3861[3]
  return i3860
}

Deserializers["HexDraggableStackSequenceConfig"] = function (request, data, root) {
  var i3862 = root || request.c( 'HexDraggableStackSequenceConfig' )
  var i3863 = data
  var i3865 = i3863[0]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( request.d('HexDraggableStackSetup', i3865[i + 0]) );
  }
  i3862._stacks = i3864
  return i3862
}

Deserializers["HexDraggableStackSetup"] = function (request, data, root) {
  var i3868 = root || request.c( 'HexDraggableStackSetup' )
  var i3869 = data
  var i3871 = i3869[0]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( request.d('HexDraggableTileGroupSetup', i3871[i + 0]) );
  }
  i3868._groups = i3870
  return i3868
}

Deserializers["HexDraggableTileGroupSetup"] = function (request, data, root) {
  var i3874 = root || request.c( 'HexDraggableTileGroupSetup' )
  var i3875 = data
  i3874.Color = i3875[0]
  i3874.Amount = i3875[1]
  return i3874
}

Deserializers["HexColorPaletteConfig"] = function (request, data, root) {
  var i3876 = root || request.c( 'HexColorPaletteConfig' )
  var i3877 = data
  var i3879 = i3877[0]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 4) {
    i3878.push( new pc.Color(i3879[i + 0], i3879[i + 1], i3879[i + 2], i3879[i + 3]) );
  }
  i3876._colors = i3878
  return i3876
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3882 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3883 = data
  request.r(i3883[0], i3883[1], 0, i3882, 'atlas')
  i3882.normalStyle = i3883[2]
  i3882.normalSpacingOffset = i3883[3]
  i3882.boldStyle = i3883[4]
  i3882.boldSpacing = i3883[5]
  i3882.italicStyle = i3883[6]
  i3882.tabSize = i3883[7]
  i3882.hashCode = i3883[8]
  request.r(i3883[9], i3883[10], 0, i3882, 'material')
  i3882.materialHashCode = i3883[11]
  i3882.m_Version = i3883[12]
  i3882.m_SourceFontFileGUID = i3883[13]
  request.r(i3883[14], i3883[15], 0, i3882, 'm_SourceFontFile_EditorRef')
  request.r(i3883[16], i3883[17], 0, i3882, 'm_SourceFontFile')
  i3882.m_AtlasPopulationMode = i3883[18]
  i3882.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3883[19], i3882.m_FaceInfo)
  var i3885 = i3883[20]
  var i3884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.add(request.d('UnityEngine.TextCore.Glyph', i3885[i + 0]));
  }
  i3882.m_GlyphTable = i3884
  var i3887 = i3883[21]
  var i3886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.add(request.d('TMPro.TMP_Character', i3887[i + 0]));
  }
  i3882.m_CharacterTable = i3886
  var i3889 = i3883[22]
  var i3888 = []
  for(var i = 0; i < i3889.length; i += 2) {
  request.r(i3889[i + 0], i3889[i + 1], 2, i3888, '')
  }
  i3882.m_AtlasTextures = i3888
  i3882.m_AtlasTextureIndex = i3883[23]
  i3882.m_IsMultiAtlasTexturesEnabled = !!i3883[24]
  i3882.m_ClearDynamicDataOnBuild = !!i3883[25]
  var i3891 = i3883[26]
  var i3890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.add(request.d('UnityEngine.TextCore.GlyphRect', i3891[i + 0]));
  }
  i3882.m_UsedGlyphRects = i3890
  var i3893 = i3883[27]
  var i3892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.add(request.d('UnityEngine.TextCore.GlyphRect', i3893[i + 0]));
  }
  i3882.m_FreeGlyphRects = i3892
  i3882.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3883[28], i3882.m_fontInfo)
  i3882.m_AtlasWidth = i3883[29]
  i3882.m_AtlasHeight = i3883[30]
  i3882.m_AtlasPadding = i3883[31]
  i3882.m_AtlasRenderMode = i3883[32]
  var i3895 = i3883[33]
  var i3894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.add(request.d('TMPro.TMP_Glyph', i3895[i + 0]));
  }
  i3882.m_glyphInfoList = i3894
  i3882.m_KerningTable = request.d('TMPro.KerningTable', i3883[34], i3882.m_KerningTable)
  i3882.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3883[35], i3882.m_FontFeatureTable)
  var i3897 = i3883[36]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3897.length; i += 2) {
  request.r(i3897[i + 0], i3897[i + 1], 1, i3896, '')
  }
  i3882.fallbackFontAssets = i3896
  var i3899 = i3883[37]
  var i3898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3899.length; i += 2) {
  request.r(i3899[i + 0], i3899[i + 1], 1, i3898, '')
  }
  i3882.m_FallbackFontAssetTable = i3898
  i3882.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3883[38], i3882.m_CreationSettings)
  var i3901 = i3883[39]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('TMPro.TMP_FontWeightPair', i3901[i + 0]) );
  }
  i3882.m_FontWeightTable = i3900
  var i3903 = i3883[40]
  var i3902 = []
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.push( request.d('TMPro.TMP_FontWeightPair', i3903[i + 0]) );
  }
  i3882.fontWeights = i3902
  return i3882
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3904 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3905 = data
  i3904.m_FaceIndex = i3905[0]
  i3904.m_FamilyName = i3905[1]
  i3904.m_StyleName = i3905[2]
  i3904.m_PointSize = i3905[3]
  i3904.m_Scale = i3905[4]
  i3904.m_UnitsPerEM = i3905[5]
  i3904.m_LineHeight = i3905[6]
  i3904.m_AscentLine = i3905[7]
  i3904.m_CapLine = i3905[8]
  i3904.m_MeanLine = i3905[9]
  i3904.m_Baseline = i3905[10]
  i3904.m_DescentLine = i3905[11]
  i3904.m_SuperscriptOffset = i3905[12]
  i3904.m_SuperscriptSize = i3905[13]
  i3904.m_SubscriptOffset = i3905[14]
  i3904.m_SubscriptSize = i3905[15]
  i3904.m_UnderlineOffset = i3905[16]
  i3904.m_UnderlineThickness = i3905[17]
  i3904.m_StrikethroughOffset = i3905[18]
  i3904.m_StrikethroughThickness = i3905[19]
  i3904.m_TabWidth = i3905[20]
  return i3904
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3908 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3909 = data
  i3908.m_Index = i3909[0]
  i3908.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3909[1], i3908.m_Metrics)
  i3908.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3909[2], i3908.m_GlyphRect)
  i3908.m_Scale = i3909[3]
  i3908.m_AtlasIndex = i3909[4]
  i3908.m_ClassDefinitionType = i3909[5]
  return i3908
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3910 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3911 = data
  i3910.m_Width = i3911[0]
  i3910.m_Height = i3911[1]
  i3910.m_HorizontalBearingX = i3911[2]
  i3910.m_HorizontalBearingY = i3911[3]
  i3910.m_HorizontalAdvance = i3911[4]
  return i3910
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3912 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3913 = data
  i3912.m_X = i3913[0]
  i3912.m_Y = i3913[1]
  i3912.m_Width = i3913[2]
  i3912.m_Height = i3913[3]
  return i3912
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3916 = root || request.c( 'TMPro.TMP_Character' )
  var i3917 = data
  i3916.m_ElementType = i3917[0]
  i3916.m_Unicode = i3917[1]
  i3916.m_GlyphIndex = i3917[2]
  i3916.m_Scale = i3917[3]
  return i3916
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3922 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3923 = data
  i3922.Name = i3923[0]
  i3922.PointSize = i3923[1]
  i3922.Scale = i3923[2]
  i3922.CharacterCount = i3923[3]
  i3922.LineHeight = i3923[4]
  i3922.Baseline = i3923[5]
  i3922.Ascender = i3923[6]
  i3922.CapHeight = i3923[7]
  i3922.Descender = i3923[8]
  i3922.CenterLine = i3923[9]
  i3922.SuperscriptOffset = i3923[10]
  i3922.SubscriptOffset = i3923[11]
  i3922.SubSize = i3923[12]
  i3922.Underline = i3923[13]
  i3922.UnderlineThickness = i3923[14]
  i3922.strikethrough = i3923[15]
  i3922.strikethroughThickness = i3923[16]
  i3922.TabWidth = i3923[17]
  i3922.Padding = i3923[18]
  i3922.AtlasWidth = i3923[19]
  i3922.AtlasHeight = i3923[20]
  return i3922
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3926 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3927 = data
  i3926.id = i3927[0]
  i3926.x = i3927[1]
  i3926.y = i3927[2]
  i3926.width = i3927[3]
  i3926.height = i3927[4]
  i3926.xOffset = i3927[5]
  i3926.yOffset = i3927[6]
  i3926.xAdvance = i3927[7]
  i3926.scale = i3927[8]
  return i3926
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3928 = root || request.c( 'TMPro.KerningTable' )
  var i3929 = data
  var i3931 = i3929[0]
  var i3930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3931.length; i += 1) {
    i3930.add(request.d('TMPro.KerningPair', i3931[i + 0]));
  }
  i3928.kerningPairs = i3930
  return i3928
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3934 = root || request.c( 'TMPro.KerningPair' )
  var i3935 = data
  i3934.xOffset = i3935[0]
  i3934.m_FirstGlyph = i3935[1]
  i3934.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3935[2], i3934.m_FirstGlyphAdjustments)
  i3934.m_SecondGlyph = i3935[3]
  i3934.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3935[4], i3934.m_SecondGlyphAdjustments)
  i3934.m_IgnoreSpacingAdjustments = !!i3935[5]
  return i3934
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3936 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3937 = data
  var i3939 = i3937[0]
  var i3938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3939[i + 0]));
  }
  i3936.m_GlyphPairAdjustmentRecords = i3938
  return i3936
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3942 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3943 = data
  i3942.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3943[0], i3942.m_FirstAdjustmentRecord)
  i3942.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3943[1], i3942.m_SecondAdjustmentRecord)
  i3942.m_FeatureLookupFlags = i3943[2]
  return i3942
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3944 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3945 = data
  i3944.m_GlyphIndex = i3945[0]
  i3944.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3945[1], i3944.m_GlyphValueRecord)
  return i3944
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3946 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3947 = data
  i3946.m_XPlacement = i3947[0]
  i3946.m_YPlacement = i3947[1]
  i3946.m_XAdvance = i3947[2]
  i3946.m_YAdvance = i3947[3]
  return i3946
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3950 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3951 = data
  i3950.sourceFontFileName = i3951[0]
  i3950.sourceFontFileGUID = i3951[1]
  i3950.pointSizeSamplingMode = i3951[2]
  i3950.pointSize = i3951[3]
  i3950.padding = i3951[4]
  i3950.packingMode = i3951[5]
  i3950.atlasWidth = i3951[6]
  i3950.atlasHeight = i3951[7]
  i3950.characterSetSelectionMode = i3951[8]
  i3950.characterSequence = i3951[9]
  i3950.referencedFontAssetGUID = i3951[10]
  i3950.referencedTextAssetGUID = i3951[11]
  i3950.fontStyle = i3951[12]
  i3950.fontStyleModifier = i3951[13]
  i3950.renderMode = i3951[14]
  i3950.includeFontFeatures = !!i3951[15]
  return i3950
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3954 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3955 = data
  request.r(i3955[0], i3955[1], 0, i3954, 'regularTypeface')
  request.r(i3955[2], i3955[3], 0, i3954, 'italicTypeface')
  return i3954
}

Deserializers["HexDragTutorialConfig"] = function (request, data, root) {
  var i3956 = root || request.c( 'HexDragTutorialConfig' )
  var i3957 = data
  i3956.EnabledDraggableIndex = i3957[0]
  i3956.TargetCellOffset = new pc.Vec2( i3957[1], i3957[2] )
  i3956.HandShowDelay = i3957[3]
  i3956.HandMoveDuration = i3957[4]
  i3956.HandLoopDelay = i3957[5]
  return i3956
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3958 = root || request.c( 'TMPro.TMP_Settings' )
  var i3959 = data
  i3958.m_enableWordWrapping = !!i3959[0]
  i3958.m_enableKerning = !!i3959[1]
  i3958.m_enableExtraPadding = !!i3959[2]
  i3958.m_enableTintAllSprites = !!i3959[3]
  i3958.m_enableParseEscapeCharacters = !!i3959[4]
  i3958.m_EnableRaycastTarget = !!i3959[5]
  i3958.m_GetFontFeaturesAtRuntime = !!i3959[6]
  i3958.m_missingGlyphCharacter = i3959[7]
  i3958.m_warningsDisabled = !!i3959[8]
  request.r(i3959[9], i3959[10], 0, i3958, 'm_defaultFontAsset')
  i3958.m_defaultFontAssetPath = i3959[11]
  i3958.m_defaultFontSize = i3959[12]
  i3958.m_defaultAutoSizeMinRatio = i3959[13]
  i3958.m_defaultAutoSizeMaxRatio = i3959[14]
  i3958.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3959[15], i3959[16] )
  i3958.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3959[17], i3959[18] )
  i3958.m_autoSizeTextContainer = !!i3959[19]
  i3958.m_IsTextObjectScaleStatic = !!i3959[20]
  var i3961 = i3959[21]
  var i3960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3961.length; i += 2) {
  request.r(i3961[i + 0], i3961[i + 1], 1, i3960, '')
  }
  i3958.m_fallbackFontAssets = i3960
  i3958.m_matchMaterialPreset = !!i3959[22]
  request.r(i3959[23], i3959[24], 0, i3958, 'm_defaultSpriteAsset')
  i3958.m_defaultSpriteAssetPath = i3959[25]
  i3958.m_enableEmojiSupport = !!i3959[26]
  i3958.m_MissingCharacterSpriteUnicode = i3959[27]
  i3958.m_defaultColorGradientPresetsPath = i3959[28]
  request.r(i3959[29], i3959[30], 0, i3958, 'm_defaultStyleSheet')
  i3958.m_StyleSheetsResourcePath = i3959[31]
  request.r(i3959[32], i3959[33], 0, i3958, 'm_leadingCharacters')
  request.r(i3959[34], i3959[35], 0, i3958, 'm_followingCharacters')
  i3958.m_UseModernHangulLineBreakingRules = !!i3959[36]
  return i3958
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3962 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3963 = data
  request.r(i3963[0], i3963[1], 0, i3962, 'spriteSheet')
  var i3965 = i3963[2]
  var i3964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.add(request.d('TMPro.TMP_Sprite', i3965[i + 0]));
  }
  i3962.spriteInfoList = i3964
  var i3967 = i3963[3]
  var i3966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3967.length; i += 2) {
  request.r(i3967[i + 0], i3967[i + 1], 1, i3966, '')
  }
  i3962.fallbackSpriteAssets = i3966
  i3962.hashCode = i3963[4]
  request.r(i3963[5], i3963[6], 0, i3962, 'material')
  i3962.materialHashCode = i3963[7]
  i3962.m_Version = i3963[8]
  i3962.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3963[9], i3962.m_FaceInfo)
  var i3969 = i3963[10]
  var i3968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.add(request.d('TMPro.TMP_SpriteCharacter', i3969[i + 0]));
  }
  i3962.m_SpriteCharacterTable = i3968
  var i3971 = i3963[11]
  var i3970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.add(request.d('TMPro.TMP_SpriteGlyph', i3971[i + 0]));
  }
  i3962.m_SpriteGlyphTable = i3970
  return i3962
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3974 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3975 = data
  i3974.name = i3975[0]
  i3974.hashCode = i3975[1]
  i3974.unicode = i3975[2]
  i3974.pivot = new pc.Vec2( i3975[3], i3975[4] )
  request.r(i3975[5], i3975[6], 0, i3974, 'sprite')
  i3974.id = i3975[7]
  i3974.x = i3975[8]
  i3974.y = i3975[9]
  i3974.width = i3975[10]
  i3974.height = i3975[11]
  i3974.xOffset = i3975[12]
  i3974.yOffset = i3975[13]
  i3974.xAdvance = i3975[14]
  i3974.scale = i3975[15]
  return i3974
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3980 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3981 = data
  i3980.m_Name = i3981[0]
  i3980.m_HashCode = i3981[1]
  i3980.m_ElementType = i3981[2]
  i3980.m_Unicode = i3981[3]
  i3980.m_GlyphIndex = i3981[4]
  i3980.m_Scale = i3981[5]
  return i3980
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3984 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3985 = data
  request.r(i3985[0], i3985[1], 0, i3984, 'sprite')
  i3984.m_Index = i3985[2]
  i3984.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3985[3], i3984.m_Metrics)
  i3984.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3985[4], i3984.m_GlyphRect)
  i3984.m_Scale = i3985[5]
  i3984.m_AtlasIndex = i3985[6]
  i3984.m_ClassDefinitionType = i3985[7]
  return i3984
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3986 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3987 = data
  var i3989 = i3987[0]
  var i3988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.add(request.d('TMPro.TMP_Style', i3989[i + 0]));
  }
  i3986.m_StyleList = i3988
  return i3986
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3992 = root || request.c( 'TMPro.TMP_Style' )
  var i3993 = data
  i3992.m_Name = i3993[0]
  i3992.m_HashCode = i3993[1]
  i3992.m_OpeningDefinition = i3993[2]
  i3992.m_ClosingDefinition = i3993[3]
  i3992.m_OpeningTagArray = i3993[4]
  i3992.m_ClosingTagArray = i3993[5]
  i3992.m_OpeningTagUnicodeArray = i3993[6]
  i3992.m_ClosingTagUnicodeArray = i3993[7]
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3995 = data
  var i3997 = i3995[0]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 1) {
    i3996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3997[i + 0]) );
  }
  i3994.files = i3996
  i3994.componentToPrefabIds = i3995[1]
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4001 = data
  i4000.path = i4001[0]
  request.r(i4001[1], i4001[2], 0, i4000, 'unityObject')
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4003 = data
  var i4005 = i4003[0]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4005[i + 0]) );
  }
  i4002.scriptsExecutionOrder = i4004
  var i4007 = i4003[1]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4007[i + 0]) );
  }
  i4002.sortingLayers = i4006
  var i4009 = i4003[2]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4009[i + 0]) );
  }
  i4002.cullingLayers = i4008
  i4002.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4003[3], i4002.timeSettings)
  i4002.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4003[4], i4002.physicsSettings)
  i4002.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4003[5], i4002.physics2DSettings)
  i4002.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4003[6], i4002.qualitySettings)
  i4002.enableRealtimeShadows = !!i4003[7]
  i4002.enableAutoInstancing = !!i4003[8]
  i4002.enableStaticBatching = !!i4003[9]
  i4002.enableDynamicBatching = !!i4003[10]
  i4002.lightmapEncodingQuality = i4003[11]
  i4002.desiredColorSpace = i4003[12]
  var i4011 = i4003[13]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.push( i4011[i + 0] );
  }
  i4002.allTags = i4010
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4015 = data
  i4014.name = i4015[0]
  i4014.value = i4015[1]
  return i4014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4019 = data
  i4018.id = i4019[0]
  i4018.name = i4019[1]
  i4018.value = i4019[2]
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4023 = data
  i4022.id = i4023[0]
  i4022.name = i4023[1]
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4025 = data
  i4024.fixedDeltaTime = i4025[0]
  i4024.maximumDeltaTime = i4025[1]
  i4024.timeScale = i4025[2]
  i4024.maximumParticleTimestep = i4025[3]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4027 = data
  i4026.gravity = new pc.Vec3( i4027[0], i4027[1], i4027[2] )
  i4026.defaultSolverIterations = i4027[3]
  i4026.bounceThreshold = i4027[4]
  i4026.autoSyncTransforms = !!i4027[5]
  i4026.autoSimulation = !!i4027[6]
  var i4029 = i4027[7]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4029[i + 0]) );
  }
  i4026.collisionMatrix = i4028
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4033 = data
  i4032.enabled = !!i4033[0]
  i4032.layerId = i4033[1]
  i4032.otherLayerId = i4033[2]
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4035 = data
  request.r(i4035[0], i4035[1], 0, i4034, 'material')
  i4034.gravity = new pc.Vec2( i4035[2], i4035[3] )
  i4034.positionIterations = i4035[4]
  i4034.velocityIterations = i4035[5]
  i4034.velocityThreshold = i4035[6]
  i4034.maxLinearCorrection = i4035[7]
  i4034.maxAngularCorrection = i4035[8]
  i4034.maxTranslationSpeed = i4035[9]
  i4034.maxRotationSpeed = i4035[10]
  i4034.baumgarteScale = i4035[11]
  i4034.baumgarteTOIScale = i4035[12]
  i4034.timeToSleep = i4035[13]
  i4034.linearSleepTolerance = i4035[14]
  i4034.angularSleepTolerance = i4035[15]
  i4034.defaultContactOffset = i4035[16]
  i4034.autoSimulation = !!i4035[17]
  i4034.queriesHitTriggers = !!i4035[18]
  i4034.queriesStartInColliders = !!i4035[19]
  i4034.callbacksOnDisable = !!i4035[20]
  i4034.reuseCollisionCallbacks = !!i4035[21]
  i4034.autoSyncTransforms = !!i4035[22]
  var i4037 = i4035[23]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4037[i + 0]) );
  }
  i4034.collisionMatrix = i4036
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4041 = data
  i4040.enabled = !!i4041[0]
  i4040.layerId = i4041[1]
  i4040.otherLayerId = i4041[2]
  return i4040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4043 = data
  var i4045 = i4043[0]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4045[i + 0]) );
  }
  i4042.qualityLevels = i4044
  var i4047 = i4043[1]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( i4047[i + 0] );
  }
  i4042.names = i4046
  i4042.shadows = i4043[2]
  i4042.anisotropicFiltering = i4043[3]
  i4042.antiAliasing = i4043[4]
  i4042.lodBias = i4043[5]
  i4042.shadowCascades = i4043[6]
  i4042.shadowDistance = i4043[7]
  i4042.shadowmaskMode = i4043[8]
  i4042.shadowProjection = i4043[9]
  i4042.shadowResolution = i4043[10]
  i4042.softParticles = !!i4043[11]
  i4042.softVegetation = !!i4043[12]
  i4042.activeColorSpace = i4043[13]
  i4042.desiredColorSpace = i4043[14]
  i4042.masterTextureLimit = i4043[15]
  i4042.maxQueuedFrames = i4043[16]
  i4042.particleRaycastBudget = i4043[17]
  i4042.pixelLightCount = i4043[18]
  i4042.realtimeReflectionProbes = !!i4043[19]
  i4042.shadowCascade2Split = i4043[20]
  i4042.shadowCascade4Split = new pc.Vec3( i4043[21], i4043[22], i4043[23] )
  i4042.streamingMipmapsActive = !!i4043[24]
  i4042.vSyncCount = i4043[25]
  i4042.asyncUploadBufferSize = i4043[26]
  i4042.asyncUploadTimeSlice = i4043[27]
  i4042.billboardsFaceCameraPosition = !!i4043[28]
  i4042.shadowNearPlaneOffset = i4043[29]
  i4042.streamingMipmapsMemoryBudget = i4043[30]
  i4042.maximumLODLevel = i4043[31]
  i4042.streamingMipmapsAddAllCameras = !!i4043[32]
  i4042.streamingMipmapsMaxLevelReduction = i4043[33]
  i4042.streamingMipmapsRenderersPerFrame = i4043[34]
  i4042.resolutionScalingFixedDPIFactor = i4043[35]
  i4042.streamingMipmapsMaxFileIORequests = i4043[36]
  i4042.currentQualityLevel = i4043[37]
  return i4042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4053 = data
  i4052.weight = i4053[0]
  i4052.vertices = i4053[1]
  i4052.normals = i4053[2]
  i4052.tangents = i4053[3]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i4055 = data
  i4054.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4055[0], i4054.Event)
  i4054.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i4055[1], i4054.filterSettings)
  i4054.overrideMaterialId = i4055[2]
  i4054.overrideMaterialPassIndex = i4055[3]
  i4054.overrideShaderId = i4055[4]
  i4054.overrideShaderPassIndex = i4055[5]
  i4054.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4055[6], i4054.overrideMode)
  i4054.overrideDepthState = !!i4055[7]
  i4054.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4055[8], i4054.depthCompareFunction)
  i4054.enableWrite = !!i4055[9]
  i4054.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i4055[10], i4054.stencilSettings)
  i4054.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i4055[11], i4054.cameraSettings)
  return i4054
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4056 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4057 = data
  i4056.xPlacement = i4057[0]
  i4056.yPlacement = i4057[1]
  i4056.xAdvance = i4057[2]
  i4056.yAdvance = i4057[3]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i4059 = data
  i4058.Value = i4059[0]
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i4061 = data
  i4060.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4061[0], i4060.RenderQueueType)
  i4060.LayerMask = i4061[1]
  var i4063 = i4061[2]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( i4063[i + 0] );
  }
  i4060.PassNames = i4062
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i4065 = data
  i4064.overrideStencilState = !!i4065[0]
  i4064.stencilReference = i4065[1]
  i4064.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4065[2], i4064.stencilCompareFunctionValue)
  i4064.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4065[3], i4064.passOperationValue)
  i4064.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4065[4], i4064.failOperationValue)
  i4064.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i4065[5], i4064.zFailOperationValue)
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i4067 = data
  i4066.overrideCamera = !!i4067[0]
  i4066.restoreCamera = !!i4067[1]
  i4066.offset = new pc.Vec4( i4067[2], i4067[3], i4067[4], i4067[5] )
  i4066.cameraFieldOfView = i4067[6]
  return i4066
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[99],"100":[17],"101":[102],"103":[102],"104":[102],"105":[102],"106":[102],"107":[102],"108":[102],"109":[110],"111":[110],"112":[110],"113":[110],"114":[110],"115":[110],"116":[110],"117":[110],"118":[110],"119":[110],"120":[110],"121":[110],"122":[110],"123":[17],"124":[4],"125":[126],"127":[126],"23":[24],"65":[24],"128":[17],"29":[17],"31":[30],"129":[24],"130":[4,24],"39":[24,35],"131":[24],"132":[35,24],"133":[4],"134":[35,24],"135":[24],"136":[24],"137":[24],"34":[23],"36":[35,24],"138":[24],"33":[23],"46":[24],"139":[24],"72":[24],"140":[24],"51":[24],"141":[24],"45":[24],"54":[24],"142":[24],"143":[35,24],"144":[24],"53":[24],"50":[24],"145":[24],"49":[35,24],"58":[24],"146":[41],"147":[41],"42":[41],"148":[41],"149":[17],"150":[17]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Source.Game.HexMerge.HexTileView","Source.Game.HexMerge.TileCollapseVfxView","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","HexGame","HexBoardSetupConfig","HexDraggableStackSequenceConfig","Source.Game.HexMerge.HexGamePresenter","HexColorPaletteConfig","UnityEngine.Camera","UnityEngine.GameObject","Source.Game.HexMerge.HexGameFinishedView","UnityEngine.AudioSource","UnityEngine.AudioClip","Source.Game.HexMerge.HexDragTutorialController","UnityEngine.Canvas","UnityEngine.RectTransform","HexDragTutorialConfig","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "BNG_Test";

Deserializers.lunaInitializationTime = "04/10/2026 12:32:05";

Deserializers.lunaDaysRunning = "10.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1724";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3794";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 6;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8053df61-8cbc-49e8-9af8-1d1473ce3679";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Tweens","Core","TweenEngine","Initialize"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

