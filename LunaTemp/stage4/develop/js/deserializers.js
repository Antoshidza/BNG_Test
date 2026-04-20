var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8790 = root || request.c( 'UnityEngine.JointSpring' )
  var i8791 = data
  i8790.spring = i8791[0]
  i8790.damper = i8791[1]
  i8790.targetPosition = i8791[2]
  return i8790
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8792 = root || request.c( 'UnityEngine.JointMotor' )
  var i8793 = data
  i8792.m_TargetVelocity = i8793[0]
  i8792.m_Force = i8793[1]
  i8792.m_FreeSpin = i8793[2]
  return i8792
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8794 = root || request.c( 'UnityEngine.JointLimits' )
  var i8795 = data
  i8794.m_Min = i8795[0]
  i8794.m_Max = i8795[1]
  i8794.m_Bounciness = i8795[2]
  i8794.m_BounceMinVelocity = i8795[3]
  i8794.m_ContactDistance = i8795[4]
  i8794.minBounce = i8795[5]
  i8794.maxBounce = i8795[6]
  return i8794
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8796 = root || request.c( 'UnityEngine.JointDrive' )
  var i8797 = data
  i8796.m_PositionSpring = i8797[0]
  i8796.m_PositionDamper = i8797[1]
  i8796.m_MaximumForce = i8797[2]
  i8796.m_UseAcceleration = i8797[3]
  return i8796
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8798 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8799 = data
  i8798.m_Spring = i8799[0]
  i8798.m_Damper = i8799[1]
  return i8798
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8800 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8801 = data
  i8800.m_Limit = i8801[0]
  i8800.m_Bounciness = i8801[1]
  i8800.m_ContactDistance = i8801[2]
  return i8800
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8802 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8803 = data
  i8802.m_ExtremumSlip = i8803[0]
  i8802.m_ExtremumValue = i8803[1]
  i8802.m_AsymptoteSlip = i8803[2]
  i8802.m_AsymptoteValue = i8803[3]
  i8802.m_Stiffness = i8803[4]
  return i8802
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8804 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8805 = data
  i8804.m_LowerAngle = i8805[0]
  i8804.m_UpperAngle = i8805[1]
  return i8804
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8806 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8807 = data
  i8806.m_MotorSpeed = i8807[0]
  i8806.m_MaximumMotorTorque = i8807[1]
  return i8806
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8808 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8809 = data
  i8808.m_DampingRatio = i8809[0]
  i8808.m_Frequency = i8809[1]
  i8808.m_Angle = i8809[2]
  return i8808
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8810 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8811 = data
  i8810.m_LowerTranslation = i8811[0]
  i8810.m_UpperTranslation = i8811[1]
  return i8810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8812 = root || new pc.UnityMaterial()
  var i8813 = data
  i8812.name = i8813[0]
  request.r(i8813[1], i8813[2], 0, i8812, 'shader')
  i8812.renderQueue = i8813[3]
  i8812.enableInstancing = !!i8813[4]
  var i8815 = i8813[5]
  var i8814 = []
  for(var i = 0; i < i8815.length; i += 1) {
    i8814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8815[i + 0]) );
  }
  i8812.floatParameters = i8814
  var i8817 = i8813[6]
  var i8816 = []
  for(var i = 0; i < i8817.length; i += 1) {
    i8816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8817[i + 0]) );
  }
  i8812.colorParameters = i8816
  var i8819 = i8813[7]
  var i8818 = []
  for(var i = 0; i < i8819.length; i += 1) {
    i8818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8819[i + 0]) );
  }
  i8812.vectorParameters = i8818
  var i8821 = i8813[8]
  var i8820 = []
  for(var i = 0; i < i8821.length; i += 1) {
    i8820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8821[i + 0]) );
  }
  i8812.textureParameters = i8820
  var i8823 = i8813[9]
  var i8822 = []
  for(var i = 0; i < i8823.length; i += 1) {
    i8822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8823[i + 0]) );
  }
  i8812.materialFlags = i8822
  return i8812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8827 = data
  i8826.name = i8827[0]
  i8826.value = i8827[1]
  return i8826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8831 = data
  i8830.name = i8831[0]
  i8830.value = new pc.Color(i8831[1], i8831[2], i8831[3], i8831[4])
  return i8830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8835 = data
  i8834.name = i8835[0]
  i8834.value = new pc.Vec4( i8835[1], i8835[2], i8835[3], i8835[4] )
  return i8834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8839 = data
  i8838.name = i8839[0]
  request.r(i8839[1], i8839[2], 0, i8838, 'value')
  return i8838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8843 = data
  i8842.name = i8843[0]
  i8842.enabled = !!i8843[1]
  return i8842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8845 = data
  i8844.name = i8845[0]
  i8844.width = i8845[1]
  i8844.height = i8845[2]
  i8844.mipmapCount = i8845[3]
  i8844.anisoLevel = i8845[4]
  i8844.filterMode = i8845[5]
  i8844.hdr = !!i8845[6]
  i8844.format = i8845[7]
  i8844.wrapMode = i8845[8]
  i8844.alphaIsTransparency = !!i8845[9]
  i8844.alphaSource = i8845[10]
  i8844.graphicsFormat = i8845[11]
  i8844.sRGBTexture = !!i8845[12]
  i8844.desiredColorSpace = i8845[13]
  i8844.wrapU = i8845[14]
  i8844.wrapV = i8845[15]
  return i8844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8847 = data
  i8846.position = new pc.Vec3( i8847[0], i8847[1], i8847[2] )
  i8846.scale = new pc.Vec3( i8847[3], i8847[4], i8847[5] )
  i8846.rotation = new pc.Quat(i8847[6], i8847[7], i8847[8], i8847[9])
  return i8846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i8848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i8849 = data
  request.r(i8849[0], i8849[1], 0, i8848, 'sharedMesh')
  return i8848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i8850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i8851 = data
  request.r(i8851[0], i8851[1], 0, i8850, 'additionalVertexStreams')
  i8850.enabled = !!i8851[2]
  request.r(i8851[3], i8851[4], 0, i8850, 'sharedMaterial')
  var i8853 = i8851[5]
  var i8852 = []
  for(var i = 0; i < i8853.length; i += 2) {
  request.r(i8853[i + 0], i8853[i + 1], 2, i8852, '')
  }
  i8850.sharedMaterials = i8852
  i8850.receiveShadows = !!i8851[6]
  i8850.shadowCastingMode = i8851[7]
  i8850.sortingLayerID = i8851[8]
  i8850.sortingOrder = i8851[9]
  i8850.lightmapIndex = i8851[10]
  i8850.lightmapSceneIndex = i8851[11]
  i8850.lightmapScaleOffset = new pc.Vec4( i8851[12], i8851[13], i8851[14], i8851[15] )
  i8850.lightProbeUsage = i8851[16]
  i8850.reflectionProbeUsage = i8851[17]
  return i8850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8857 = data
  i8856.name = i8857[0]
  i8856.tagId = i8857[1]
  i8856.enabled = !!i8857[2]
  i8856.isStatic = !!i8857[3]
  i8856.layer = i8857[4]
  return i8856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8859 = data
  i8858.name = i8859[0]
  i8858.halfPrecision = !!i8859[1]
  i8858.useSimplification = !!i8859[2]
  i8858.useUInt32IndexFormat = !!i8859[3]
  i8858.vertexCount = i8859[4]
  i8858.aabb = i8859[5]
  var i8861 = i8859[6]
  var i8860 = []
  for(var i = 0; i < i8861.length; i += 1) {
    i8860.push( !!i8861[i + 0] );
  }
  i8858.streams = i8860
  i8858.vertices = i8859[7]
  var i8863 = i8859[8]
  var i8862 = []
  for(var i = 0; i < i8863.length; i += 1) {
    i8862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8863[i + 0]) );
  }
  i8858.subMeshes = i8862
  var i8865 = i8859[9]
  var i8864 = []
  for(var i = 0; i < i8865.length; i += 16) {
    i8864.push( new pc.Mat4().setData(i8865[i + 0], i8865[i + 1], i8865[i + 2], i8865[i + 3],  i8865[i + 4], i8865[i + 5], i8865[i + 6], i8865[i + 7],  i8865[i + 8], i8865[i + 9], i8865[i + 10], i8865[i + 11],  i8865[i + 12], i8865[i + 13], i8865[i + 14], i8865[i + 15]) );
  }
  i8858.bindposes = i8864
  var i8867 = i8859[10]
  var i8866 = []
  for(var i = 0; i < i8867.length; i += 1) {
    i8866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8867[i + 0]) );
  }
  i8858.blendShapes = i8866
  return i8858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8873 = data
  i8872.triangles = i8873[0]
  return i8872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8879 = data
  i8878.name = i8879[0]
  var i8881 = i8879[1]
  var i8880 = []
  for(var i = 0; i < i8881.length; i += 1) {
    i8880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8881[i + 0]) );
  }
  i8878.frames = i8880
  return i8878
}

Deserializers["Source.Game.HexMerge.HexTileView"] = function (request, data, root) {
  var i8882 = root || request.c( 'Source.Game.HexMerge.HexTileView' )
  var i8883 = data
  request.r(i8883[0], i8883[1], 0, i8882, 'Renderer')
  return i8882
}

Deserializers["Source.Game.HexMerge.TileCollapseVfxView"] = function (request, data, root) {
  var i8884 = root || request.c( 'Source.Game.HexMerge.TileCollapseVfxView' )
  var i8885 = data
  request.r(i8885[0], i8885[1], 0, i8884, '_particleSystem')
  request.r(i8885[2], i8885[3], 0, i8884, '_subParticleSystem')
  return i8884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8887 = data
  request.r(i8887[0], i8887[1], 0, i8886, 'mesh')
  i8886.meshCount = i8887[2]
  i8886.activeVertexStreamsCount = i8887[3]
  i8886.alignment = i8887[4]
  i8886.renderMode = i8887[5]
  i8886.sortMode = i8887[6]
  i8886.lengthScale = i8887[7]
  i8886.velocityScale = i8887[8]
  i8886.cameraVelocityScale = i8887[9]
  i8886.normalDirection = i8887[10]
  i8886.sortingFudge = i8887[11]
  i8886.minParticleSize = i8887[12]
  i8886.maxParticleSize = i8887[13]
  i8886.pivot = new pc.Vec3( i8887[14], i8887[15], i8887[16] )
  request.r(i8887[17], i8887[18], 0, i8886, 'trailMaterial')
  i8886.applyActiveColorSpace = !!i8887[19]
  i8886.enabled = !!i8887[20]
  request.r(i8887[21], i8887[22], 0, i8886, 'sharedMaterial')
  var i8889 = i8887[23]
  var i8888 = []
  for(var i = 0; i < i8889.length; i += 2) {
  request.r(i8889[i + 0], i8889[i + 1], 2, i8888, '')
  }
  i8886.sharedMaterials = i8888
  i8886.receiveShadows = !!i8887[24]
  i8886.shadowCastingMode = i8887[25]
  i8886.sortingLayerID = i8887[26]
  i8886.sortingOrder = i8887[27]
  i8886.lightmapIndex = i8887[28]
  i8886.lightmapSceneIndex = i8887[29]
  i8886.lightmapScaleOffset = new pc.Vec4( i8887[30], i8887[31], i8887[32], i8887[33] )
  i8886.lightProbeUsage = i8887[34]
  i8886.reflectionProbeUsage = i8887[35]
  return i8886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8891 = data
  i8890.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8891[0], i8890.main)
  i8890.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8891[1], i8890.colorBySpeed)
  i8890.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8891[2], i8890.colorOverLifetime)
  i8890.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8891[3], i8890.emission)
  i8890.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8891[4], i8890.rotationBySpeed)
  i8890.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8891[5], i8890.rotationOverLifetime)
  i8890.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8891[6], i8890.shape)
  i8890.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8891[7], i8890.sizeBySpeed)
  i8890.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8891[8], i8890.sizeOverLifetime)
  i8890.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8891[9], i8890.textureSheetAnimation)
  i8890.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8891[10], i8890.velocityOverLifetime)
  i8890.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8891[11], i8890.noise)
  i8890.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8891[12], i8890.inheritVelocity)
  i8890.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8891[13], i8890.forceOverLifetime)
  i8890.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8891[14], i8890.limitVelocityOverLifetime)
  i8890.useAutoRandomSeed = !!i8891[15]
  i8890.randomSeed = i8891[16]
  return i8890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8892 = root || new pc.ParticleSystemMain()
  var i8893 = data
  i8892.duration = i8893[0]
  i8892.loop = !!i8893[1]
  i8892.prewarm = !!i8893[2]
  i8892.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[3], i8892.startDelay)
  i8892.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[4], i8892.startLifetime)
  i8892.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[5], i8892.startSpeed)
  i8892.startSize3D = !!i8893[6]
  i8892.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[7], i8892.startSizeX)
  i8892.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[8], i8892.startSizeY)
  i8892.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[9], i8892.startSizeZ)
  i8892.startRotation3D = !!i8893[10]
  i8892.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[11], i8892.startRotationX)
  i8892.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[12], i8892.startRotationY)
  i8892.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[13], i8892.startRotationZ)
  i8892.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8893[14], i8892.startColor)
  i8892.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8893[15], i8892.gravityModifier)
  i8892.simulationSpace = i8893[16]
  request.r(i8893[17], i8893[18], 0, i8892, 'customSimulationSpace')
  i8892.simulationSpeed = i8893[19]
  i8892.useUnscaledTime = !!i8893[20]
  i8892.scalingMode = i8893[21]
  i8892.playOnAwake = !!i8893[22]
  i8892.maxParticles = i8893[23]
  i8892.emitterVelocityMode = i8893[24]
  i8892.stopAction = i8893[25]
  return i8892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8894 = root || new pc.MinMaxCurve()
  var i8895 = data
  i8894.mode = i8895[0]
  i8894.curveMin = new pc.AnimationCurve( { keys_flow: i8895[1] } )
  i8894.curveMax = new pc.AnimationCurve( { keys_flow: i8895[2] } )
  i8894.curveMultiplier = i8895[3]
  i8894.constantMin = i8895[4]
  i8894.constantMax = i8895[5]
  return i8894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8896 = root || new pc.MinMaxGradient()
  var i8897 = data
  i8896.mode = i8897[0]
  i8896.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8897[1], i8896.gradientMin)
  i8896.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8897[2], i8896.gradientMax)
  i8896.colorMin = new pc.Color(i8897[3], i8897[4], i8897[5], i8897[6])
  i8896.colorMax = new pc.Color(i8897[7], i8897[8], i8897[9], i8897[10])
  return i8896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8899 = data
  i8898.mode = i8899[0]
  var i8901 = i8899[1]
  var i8900 = []
  for(var i = 0; i < i8901.length; i += 1) {
    i8900.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8901[i + 0]) );
  }
  i8898.colorKeys = i8900
  var i8903 = i8899[2]
  var i8902 = []
  for(var i = 0; i < i8903.length; i += 1) {
    i8902.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8903[i + 0]) );
  }
  i8898.alphaKeys = i8902
  return i8898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8904 = root || new pc.ParticleSystemColorBySpeed()
  var i8905 = data
  i8904.enabled = !!i8905[0]
  i8904.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8905[1], i8904.color)
  i8904.range = new pc.Vec2( i8905[2], i8905[3] )
  return i8904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8909 = data
  i8908.color = new pc.Color(i8909[0], i8909[1], i8909[2], i8909[3])
  i8908.time = i8909[4]
  return i8908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8913 = data
  i8912.alpha = i8913[0]
  i8912.time = i8913[1]
  return i8912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8914 = root || new pc.ParticleSystemColorOverLifetime()
  var i8915 = data
  i8914.enabled = !!i8915[0]
  i8914.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8915[1], i8914.color)
  return i8914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8916 = root || new pc.ParticleSystemEmitter()
  var i8917 = data
  i8916.enabled = !!i8917[0]
  i8916.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8917[1], i8916.rateOverTime)
  i8916.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8917[2], i8916.rateOverDistance)
  var i8919 = i8917[3]
  var i8918 = []
  for(var i = 0; i < i8919.length; i += 1) {
    i8918.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8919[i + 0]) );
  }
  i8916.bursts = i8918
  return i8916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8922 = root || new pc.ParticleSystemBurst()
  var i8923 = data
  i8922.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8923[0], i8922.count)
  i8922.cycleCount = i8923[1]
  i8922.minCount = i8923[2]
  i8922.maxCount = i8923[3]
  i8922.repeatInterval = i8923[4]
  i8922.time = i8923[5]
  return i8922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8924 = root || new pc.ParticleSystemRotationBySpeed()
  var i8925 = data
  i8924.enabled = !!i8925[0]
  i8924.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8925[1], i8924.x)
  i8924.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8925[2], i8924.y)
  i8924.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8925[3], i8924.z)
  i8924.separateAxes = !!i8925[4]
  i8924.range = new pc.Vec2( i8925[5], i8925[6] )
  return i8924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8926 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8927 = data
  i8926.enabled = !!i8927[0]
  i8926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8927[1], i8926.x)
  i8926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8927[2], i8926.y)
  i8926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8927[3], i8926.z)
  i8926.separateAxes = !!i8927[4]
  return i8926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8928 = root || new pc.ParticleSystemShape()
  var i8929 = data
  i8928.enabled = !!i8929[0]
  i8928.shapeType = i8929[1]
  i8928.randomDirectionAmount = i8929[2]
  i8928.sphericalDirectionAmount = i8929[3]
  i8928.randomPositionAmount = i8929[4]
  i8928.alignToDirection = !!i8929[5]
  i8928.radius = i8929[6]
  i8928.radiusMode = i8929[7]
  i8928.radiusSpread = i8929[8]
  i8928.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8929[9], i8928.radiusSpeed)
  i8928.radiusThickness = i8929[10]
  i8928.angle = i8929[11]
  i8928.length = i8929[12]
  i8928.boxThickness = new pc.Vec3( i8929[13], i8929[14], i8929[15] )
  i8928.meshShapeType = i8929[16]
  request.r(i8929[17], i8929[18], 0, i8928, 'mesh')
  request.r(i8929[19], i8929[20], 0, i8928, 'meshRenderer')
  request.r(i8929[21], i8929[22], 0, i8928, 'skinnedMeshRenderer')
  i8928.useMeshMaterialIndex = !!i8929[23]
  i8928.meshMaterialIndex = i8929[24]
  i8928.useMeshColors = !!i8929[25]
  i8928.normalOffset = i8929[26]
  i8928.arc = i8929[27]
  i8928.arcMode = i8929[28]
  i8928.arcSpread = i8929[29]
  i8928.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8929[30], i8928.arcSpeed)
  i8928.donutRadius = i8929[31]
  i8928.position = new pc.Vec3( i8929[32], i8929[33], i8929[34] )
  i8928.rotation = new pc.Vec3( i8929[35], i8929[36], i8929[37] )
  i8928.scale = new pc.Vec3( i8929[38], i8929[39], i8929[40] )
  return i8928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8930 = root || new pc.ParticleSystemSizeBySpeed()
  var i8931 = data
  i8930.enabled = !!i8931[0]
  i8930.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8931[1], i8930.x)
  i8930.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8931[2], i8930.y)
  i8930.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8931[3], i8930.z)
  i8930.separateAxes = !!i8931[4]
  i8930.range = new pc.Vec2( i8931[5], i8931[6] )
  return i8930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8932 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8933 = data
  i8932.enabled = !!i8933[0]
  i8932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8933[1], i8932.x)
  i8932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8933[2], i8932.y)
  i8932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8933[3], i8932.z)
  i8932.separateAxes = !!i8933[4]
  return i8932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8934 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8935 = data
  i8934.enabled = !!i8935[0]
  i8934.mode = i8935[1]
  i8934.animation = i8935[2]
  i8934.numTilesX = i8935[3]
  i8934.numTilesY = i8935[4]
  i8934.useRandomRow = !!i8935[5]
  i8934.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8935[6], i8934.frameOverTime)
  i8934.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8935[7], i8934.startFrame)
  i8934.cycleCount = i8935[8]
  i8934.rowIndex = i8935[9]
  i8934.flipU = i8935[10]
  i8934.flipV = i8935[11]
  i8934.spriteCount = i8935[12]
  var i8937 = i8935[13]
  var i8936 = []
  for(var i = 0; i < i8937.length; i += 2) {
  request.r(i8937[i + 0], i8937[i + 1], 2, i8936, '')
  }
  i8934.sprites = i8936
  return i8934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8940 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8941 = data
  i8940.enabled = !!i8941[0]
  i8940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[1], i8940.x)
  i8940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[2], i8940.y)
  i8940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[3], i8940.z)
  i8940.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[4], i8940.radial)
  i8940.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[5], i8940.speedModifier)
  i8940.space = i8941[6]
  i8940.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[7], i8940.orbitalX)
  i8940.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[8], i8940.orbitalY)
  i8940.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[9], i8940.orbitalZ)
  i8940.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[10], i8940.orbitalOffsetX)
  i8940.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[11], i8940.orbitalOffsetY)
  i8940.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8941[12], i8940.orbitalOffsetZ)
  return i8940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8942 = root || new pc.ParticleSystemNoise()
  var i8943 = data
  i8942.enabled = !!i8943[0]
  i8942.separateAxes = !!i8943[1]
  i8942.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[2], i8942.strengthX)
  i8942.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[3], i8942.strengthY)
  i8942.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[4], i8942.strengthZ)
  i8942.frequency = i8943[5]
  i8942.damping = !!i8943[6]
  i8942.octaveCount = i8943[7]
  i8942.octaveMultiplier = i8943[8]
  i8942.octaveScale = i8943[9]
  i8942.quality = i8943[10]
  i8942.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[11], i8942.scrollSpeed)
  i8942.scrollSpeedMultiplier = i8943[12]
  i8942.remapEnabled = !!i8943[13]
  i8942.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[14], i8942.remapX)
  i8942.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[15], i8942.remapY)
  i8942.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[16], i8942.remapZ)
  i8942.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[17], i8942.positionAmount)
  i8942.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[18], i8942.rotationAmount)
  i8942.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8943[19], i8942.sizeAmount)
  return i8942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8944 = root || new pc.ParticleSystemInheritVelocity()
  var i8945 = data
  i8944.enabled = !!i8945[0]
  i8944.mode = i8945[1]
  i8944.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8945[2], i8944.curve)
  return i8944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8946 = root || new pc.ParticleSystemForceOverLifetime()
  var i8947 = data
  i8946.enabled = !!i8947[0]
  i8946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8947[1], i8946.x)
  i8946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8947[2], i8946.y)
  i8946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8947[3], i8946.z)
  i8946.space = i8947[4]
  i8946.randomized = !!i8947[5]
  return i8946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8948 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8949 = data
  i8948.enabled = !!i8949[0]
  i8948.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8949[1], i8948.limit)
  i8948.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8949[2], i8948.limitX)
  i8948.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8949[3], i8948.limitY)
  i8948.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8949[4], i8948.limitZ)
  i8948.dampen = i8949[5]
  i8948.separateAxes = !!i8949[6]
  i8948.space = i8949[7]
  i8948.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8949[8], i8948.drag)
  i8948.multiplyDragByParticleSize = !!i8949[9]
  i8948.multiplyDragByParticleVelocity = !!i8949[10]
  return i8948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8951 = data
  i8950.name = i8951[0]
  i8950.atlasId = i8951[1]
  i8950.mipmapCount = i8951[2]
  i8950.hdr = !!i8951[3]
  i8950.size = i8951[4]
  i8950.anisoLevel = i8951[5]
  i8950.filterMode = i8951[6]
  var i8953 = i8951[7]
  var i8952 = []
  for(var i = 0; i < i8953.length; i += 4) {
    i8952.push( UnityEngine.Rect.MinMaxRect(i8953[i + 0], i8953[i + 1], i8953[i + 2], i8953[i + 3]) );
  }
  i8950.rects = i8952
  i8950.wrapU = i8951[8]
  i8950.wrapV = i8951[9]
  return i8950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8957 = data
  i8956.name = i8957[0]
  i8956.index = i8957[1]
  i8956.startup = !!i8957[2]
  return i8956
}

Deserializers["HexGame"] = function (request, data, root) {
  var i8958 = root || request.c( 'HexGame' )
  var i8959 = data
  request.r(i8959[0], i8959[1], 0, i8958, '_boardSetup')
  request.r(i8959[2], i8959[3], 0, i8958, '_draggableStackSequenceConfig')
  return i8958
}

Deserializers["Source.Game.HexMerge.HexGamePresenter"] = function (request, data, root) {
  var i8960 = root || request.c( 'Source.Game.HexMerge.HexGamePresenter' )
  var i8961 = data
  request.r(i8961[0], i8961[1], 0, i8960, '_hexColorPaletteConfig')
  request.r(i8961[2], i8961[3], 0, i8960, '_hexGame')
  request.r(i8961[4], i8961[5], 0, i8960, '_camera')
  request.r(i8961[6], i8961[7], 0, i8960, '_cellPrefab')
  request.r(i8961[8], i8961[9], 0, i8960, '_tilePrefab')
  request.r(i8961[10], i8961[11], 0, i8960, '_collapseVfxPrefab')
  request.r(i8961[12], i8961[13], 0, i8960, '_draggableStackSequenceConfig')
  request.r(i8961[14], i8961[15], 0, i8960, '_hexGameFinishedView')
  request.r(i8961[16], i8961[17], 0, i8960, '_tileShader')
  i8960._hexSize = i8961[18]
  i8960._stackHeightStep = i8961[19]
  i8960._tileBaseHeight = i8961[20]
  i8960._mergeDuration = i8961[21]
  i8960._mergeTileStartDelay = i8961[22]
  i8960._mergeArcHeight = i8961[23]
  i8960._mergeArcDistanceFactor = i8961[24]
  i8960._collapseDuration = i8961[25]
  i8960._collapseTileStartDelay = i8961[26]
  i8960._collapseVfxLeadTime = i8961[27]
  var i8963 = i8961[28]
  var i8962 = []
  for(var i = 0; i < i8963.length; i += 2) {
  request.r(i8963[i + 0], i8963[i + 1], 2, i8962, '')
  }
  i8960._draggableSpawnSpots = i8962
  request.r(i8961[29], i8961[30], 0, i8960, '_dragCellMarker')
  i8960._draggablePickRadius = i8961[31]
  i8960._draggableSnapDuration = i8961[32]
  i8960._dragLiftHeight = i8961[33]
  request.r(i8961[34], i8961[35], 0, i8960, '_tileAudioSource')
  i8960._mergeAudio = request.d('Source.Game.HexMerge.HexGamePresenter+AudioCue', i8961[36], i8960._mergeAudio)
  i8960._collapseAudio = request.d('Source.Game.HexMerge.HexGamePresenter+AudioCue', i8961[37], i8960._collapseAudio)
  i8960._showCellCoords = !!i8961[38]
  i8960._coordLabelHeight = i8961[39]
  return i8960
}

Deserializers["Source.Game.HexMerge.HexGamePresenter+AudioCue"] = function (request, data, root) {
  var i8966 = root || request.c( 'Source.Game.HexMerge.HexGamePresenter+AudioCue' )
  var i8967 = data
  request.r(i8967[0], i8967[1], 0, i8966, 'Clip')
  i8966.Pitch = i8967[2]
  return i8966
}

Deserializers["Source.Game.HexMerge.HexDragTutorialController"] = function (request, data, root) {
  var i8968 = root || request.c( 'Source.Game.HexMerge.HexDragTutorialController' )
  var i8969 = data
  request.r(i8969[0], i8969[1], 0, i8968, '_hexGamePresenter')
  request.r(i8969[2], i8969[3], 0, i8968, '_worldCamera')
  request.r(i8969[4], i8969[5], 0, i8968, '_canvas')
  request.r(i8969[6], i8969[7], 0, i8968, '_hand')
  request.r(i8969[8], i8969[9], 0, i8968, '_config')
  return i8968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i8970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i8971 = data
  i8970.color = new pc.Color(i8971[0], i8971[1], i8971[2], i8971[3])
  request.r(i8971[4], i8971[5], 0, i8970, 'sprite')
  i8970.flipX = !!i8971[6]
  i8970.flipY = !!i8971[7]
  i8970.drawMode = i8971[8]
  i8970.size = new pc.Vec2( i8971[9], i8971[10] )
  i8970.tileMode = i8971[11]
  i8970.adaptiveModeThreshold = i8971[12]
  i8970.maskInteraction = i8971[13]
  i8970.spriteSortPoint = i8971[14]
  i8970.enabled = !!i8971[15]
  request.r(i8971[16], i8971[17], 0, i8970, 'sharedMaterial')
  var i8973 = i8971[18]
  var i8972 = []
  for(var i = 0; i < i8973.length; i += 2) {
  request.r(i8973[i + 0], i8973[i + 1], 2, i8972, '')
  }
  i8970.sharedMaterials = i8972
  i8970.receiveShadows = !!i8971[19]
  i8970.shadowCastingMode = i8971[20]
  i8970.sortingLayerID = i8971[21]
  i8970.sortingOrder = i8971[22]
  i8970.lightmapIndex = i8971[23]
  i8970.lightmapSceneIndex = i8971[24]
  i8970.lightmapScaleOffset = new pc.Vec4( i8971[25], i8971[26], i8971[27], i8971[28] )
  i8970.lightProbeUsage = i8971[29]
  i8970.reflectionProbeUsage = i8971[30]
  return i8970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8975 = data
  i8974.aspect = i8975[0]
  i8974.orthographic = !!i8975[1]
  i8974.orthographicSize = i8975[2]
  i8974.backgroundColor = new pc.Color(i8975[3], i8975[4], i8975[5], i8975[6])
  i8974.nearClipPlane = i8975[7]
  i8974.farClipPlane = i8975[8]
  i8974.fieldOfView = i8975[9]
  i8974.depth = i8975[10]
  i8974.clearFlags = i8975[11]
  i8974.cullingMask = i8975[12]
  i8974.rect = i8975[13]
  request.r(i8975[14], i8975[15], 0, i8974, 'targetTexture')
  i8974.usePhysicalProperties = !!i8975[16]
  i8974.focalLength = i8975[17]
  i8974.sensorSize = new pc.Vec2( i8975[18], i8975[19] )
  i8974.lensShift = new pc.Vec2( i8975[20], i8975[21] )
  i8974.gateFit = i8975[22]
  i8974.commandBufferCount = i8975[23]
  i8974.cameraType = i8975[24]
  i8974.enabled = !!i8975[25]
  return i8974
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i8976 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i8977 = data
  i8976.m_RenderShadows = !!i8977[0]
  i8976.m_RequiresDepthTextureOption = i8977[1]
  i8976.m_RequiresOpaqueTextureOption = i8977[2]
  i8976.m_CameraType = i8977[3]
  var i8979 = i8977[4]
  var i8978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i8979.length; i += 2) {
  request.r(i8979[i + 0], i8979[i + 1], 1, i8978, '')
  }
  i8976.m_Cameras = i8978
  i8976.m_RendererIndex = i8977[5]
  i8976.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i8977[6] )
  request.r(i8977[7], i8977[8], 0, i8976, 'm_VolumeTrigger')
  i8976.m_VolumeFrameworkUpdateModeOption = i8977[9]
  i8976.m_RenderPostProcessing = !!i8977[10]
  i8976.m_Antialiasing = i8977[11]
  i8976.m_AntialiasingQuality = i8977[12]
  i8976.m_StopNaN = !!i8977[13]
  i8976.m_Dithering = !!i8977[14]
  i8976.m_ClearDepth = !!i8977[15]
  i8976.m_AllowXRRendering = !!i8977[16]
  i8976.m_AllowHDROutput = !!i8977[17]
  i8976.m_UseScreenCoordOverride = !!i8977[18]
  i8976.m_ScreenSizeOverride = new pc.Vec4( i8977[19], i8977[20], i8977[21], i8977[22] )
  i8976.m_ScreenCoordScaleBias = new pc.Vec4( i8977[23], i8977[24], i8977[25], i8977[26] )
  i8976.m_RequiresDepthTexture = !!i8977[27]
  i8976.m_RequiresColorTexture = !!i8977[28]
  i8976.m_Version = i8977[29]
  i8976.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i8977[30], i8976.m_TaaSettings)
  return i8976
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i8982 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i8983 = data
  i8982.m_Quality = i8983[0]
  i8982.m_FrameInfluence = i8983[1]
  i8982.m_JitterScale = i8983[2]
  i8982.m_MipBias = i8983[3]
  i8982.m_VarianceClampScale = i8983[4]
  i8982.m_ContrastAdaptiveSharpening = i8983[5]
  return i8982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8985 = data
  request.r(i8985[0], i8985[1], 0, i8984, 'clip')
  request.r(i8985[2], i8985[3], 0, i8984, 'outputAudioMixerGroup')
  i8984.playOnAwake = !!i8985[4]
  i8984.loop = !!i8985[5]
  i8984.time = i8985[6]
  i8984.volume = i8985[7]
  i8984.pitch = i8985[8]
  i8984.enabled = !!i8985[9]
  return i8984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8987 = data
  i8986.type = i8987[0]
  i8986.color = new pc.Color(i8987[1], i8987[2], i8987[3], i8987[4])
  i8986.cullingMask = i8987[5]
  i8986.intensity = i8987[6]
  i8986.range = i8987[7]
  i8986.spotAngle = i8987[8]
  i8986.shadows = i8987[9]
  i8986.shadowNormalBias = i8987[10]
  i8986.shadowBias = i8987[11]
  i8986.shadowStrength = i8987[12]
  i8986.shadowResolution = i8987[13]
  i8986.lightmapBakeType = i8987[14]
  i8986.renderMode = i8987[15]
  request.r(i8987[16], i8987[17], 0, i8986, 'cookie')
  i8986.cookieSize = i8987[18]
  i8986.shadowNearPlane = i8987[19]
  i8986.occlusionMaskChannel = i8987[20]
  i8986.enabled = !!i8987[21]
  return i8986
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i8988 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i8989 = data
  i8988.m_Version = i8989[0]
  i8988.m_UsePipelineSettings = !!i8989[1]
  i8988.m_AdditionalLightsShadowResolutionTier = i8989[2]
  i8988.m_LightLayerMask = i8989[3]
  i8988.m_RenderingLayers = i8989[4]
  i8988.m_CustomShadowLayers = !!i8989[5]
  i8988.m_ShadowLayerMask = i8989[6]
  i8988.m_ShadowRenderingLayers = i8989[7]
  i8988.m_LightCookieSize = new pc.Vec2( i8989[8], i8989[9] )
  i8988.m_LightCookieOffset = new pc.Vec2( i8989[10], i8989[11] )
  i8988.m_SoftShadowQuality = i8989[12]
  return i8988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8991 = data
  i8990.pivot = new pc.Vec2( i8991[0], i8991[1] )
  i8990.anchorMin = new pc.Vec2( i8991[2], i8991[3] )
  i8990.anchorMax = new pc.Vec2( i8991[4], i8991[5] )
  i8990.sizeDelta = new pc.Vec2( i8991[6], i8991[7] )
  i8990.anchoredPosition3D = new pc.Vec3( i8991[8], i8991[9], i8991[10] )
  i8990.rotation = new pc.Quat(i8991[11], i8991[12], i8991[13], i8991[14])
  i8990.scale = new pc.Vec3( i8991[15], i8991[16], i8991[17] )
  return i8990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8993 = data
  i8992.planeDistance = i8993[0]
  i8992.referencePixelsPerUnit = i8993[1]
  i8992.isFallbackOverlay = !!i8993[2]
  i8992.renderMode = i8993[3]
  i8992.renderOrder = i8993[4]
  i8992.sortingLayerName = i8993[5]
  i8992.sortingOrder = i8993[6]
  i8992.scaleFactor = i8993[7]
  request.r(i8993[8], i8993[9], 0, i8992, 'worldCamera')
  i8992.overrideSorting = !!i8993[10]
  i8992.pixelPerfect = !!i8993[11]
  i8992.targetDisplay = i8993[12]
  i8992.overridePixelPerfect = !!i8993[13]
  i8992.enabled = !!i8993[14]
  return i8992
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8994 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8995 = data
  i8994.m_UiScaleMode = i8995[0]
  i8994.m_ReferencePixelsPerUnit = i8995[1]
  i8994.m_ScaleFactor = i8995[2]
  i8994.m_ReferenceResolution = new pc.Vec2( i8995[3], i8995[4] )
  i8994.m_ScreenMatchMode = i8995[5]
  i8994.m_MatchWidthOrHeight = i8995[6]
  i8994.m_PhysicalUnit = i8995[7]
  i8994.m_FallbackScreenDPI = i8995[8]
  i8994.m_DefaultSpriteDPI = i8995[9]
  i8994.m_DynamicPixelsPerUnit = i8995[10]
  i8994.m_PresetInfoIsWorld = !!i8995[11]
  return i8994
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8996 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8997 = data
  i8996.m_IgnoreReversedGraphics = !!i8997[0]
  i8996.m_BlockingObjects = i8997[1]
  i8996.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8997[2] )
  return i8996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8999 = data
  i8998.cullTransparentMesh = !!i8999[0]
  return i8998
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i9000 = root || request.c( 'UnityEngine.UI.Image' )
  var i9001 = data
  request.r(i9001[0], i9001[1], 0, i9000, 'm_Sprite')
  i9000.m_Type = i9001[2]
  i9000.m_PreserveAspect = !!i9001[3]
  i9000.m_FillCenter = !!i9001[4]
  i9000.m_FillMethod = i9001[5]
  i9000.m_FillAmount = i9001[6]
  i9000.m_FillClockwise = !!i9001[7]
  i9000.m_FillOrigin = i9001[8]
  i9000.m_UseSpriteMesh = !!i9001[9]
  i9000.m_PixelsPerUnitMultiplier = i9001[10]
  request.r(i9001[11], i9001[12], 0, i9000, 'm_Material')
  i9000.m_Maskable = !!i9001[13]
  i9000.m_Color = new pc.Color(i9001[14], i9001[15], i9001[16], i9001[17])
  i9000.m_RaycastTarget = !!i9001[18]
  i9000.m_RaycastPadding = new pc.Vec4( i9001[19], i9001[20], i9001[21], i9001[22] )
  return i9000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i9002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i9003 = data
  i9002.m_Alpha = i9003[0]
  i9002.m_Interactable = !!i9003[1]
  i9002.m_BlocksRaycasts = !!i9003[2]
  i9002.m_IgnoreParentGroups = !!i9003[3]
  i9002.enabled = !!i9003[4]
  return i9002
}

Deserializers["Source.Game.HexMerge.HexGameFinishedView"] = function (request, data, root) {
  var i9004 = root || request.c( 'Source.Game.HexMerge.HexGameFinishedView' )
  var i9005 = data
  request.r(i9005[0], i9005[1], 0, i9004, '_canvasGroup')
  request.r(i9005[2], i9005[3], 0, i9004, '_button')
  i9004._fadeDuration = i9005[4]
  return i9004
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i9006 = root || request.c( 'UnityEngine.UI.Button' )
  var i9007 = data
  i9006.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i9007[0], i9006.m_OnClick)
  i9006.m_Navigation = request.d('UnityEngine.UI.Navigation', i9007[1], i9006.m_Navigation)
  i9006.m_Transition = i9007[2]
  i9006.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9007[3], i9006.m_Colors)
  i9006.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9007[4], i9006.m_SpriteState)
  i9006.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9007[5], i9006.m_AnimationTriggers)
  i9006.m_Interactable = !!i9007[6]
  request.r(i9007[7], i9007[8], 0, i9006, 'm_TargetGraphic')
  return i9006
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i9008 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i9009 = data
  i9008.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9009[0], i9008.m_PersistentCalls)
  return i9008
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i9010 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i9011 = data
  var i9013 = i9011[0]
  var i9012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i9013.length; i += 1) {
    i9012.add(request.d('UnityEngine.Events.PersistentCall', i9013[i + 0]));
  }
  i9010.m_Calls = i9012
  return i9010
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i9016 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i9017 = data
  request.r(i9017[0], i9017[1], 0, i9016, 'm_Target')
  i9016.m_TargetAssemblyTypeName = i9017[2]
  i9016.m_MethodName = i9017[3]
  i9016.m_Mode = i9017[4]
  i9016.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i9017[5], i9016.m_Arguments)
  i9016.m_CallState = i9017[6]
  return i9016
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i9018 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i9019 = data
  i9018.m_Mode = i9019[0]
  i9018.m_WrapAround = !!i9019[1]
  request.r(i9019[2], i9019[3], 0, i9018, 'm_SelectOnUp')
  request.r(i9019[4], i9019[5], 0, i9018, 'm_SelectOnDown')
  request.r(i9019[6], i9019[7], 0, i9018, 'm_SelectOnLeft')
  request.r(i9019[8], i9019[9], 0, i9018, 'm_SelectOnRight')
  return i9018
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i9020 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i9021 = data
  i9020.m_NormalColor = new pc.Color(i9021[0], i9021[1], i9021[2], i9021[3])
  i9020.m_HighlightedColor = new pc.Color(i9021[4], i9021[5], i9021[6], i9021[7])
  i9020.m_PressedColor = new pc.Color(i9021[8], i9021[9], i9021[10], i9021[11])
  i9020.m_SelectedColor = new pc.Color(i9021[12], i9021[13], i9021[14], i9021[15])
  i9020.m_DisabledColor = new pc.Color(i9021[16], i9021[17], i9021[18], i9021[19])
  i9020.m_ColorMultiplier = i9021[20]
  i9020.m_FadeDuration = i9021[21]
  return i9020
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i9022 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i9023 = data
  request.r(i9023[0], i9023[1], 0, i9022, 'm_HighlightedSprite')
  request.r(i9023[2], i9023[3], 0, i9022, 'm_PressedSprite')
  request.r(i9023[4], i9023[5], 0, i9022, 'm_SelectedSprite')
  request.r(i9023[6], i9023[7], 0, i9022, 'm_DisabledSprite')
  return i9022
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i9024 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i9025 = data
  i9024.m_NormalTrigger = i9025[0]
  i9024.m_HighlightedTrigger = i9025[1]
  i9024.m_PressedTrigger = i9025[2]
  i9024.m_SelectedTrigger = i9025[3]
  i9024.m_DisabledTrigger = i9025[4]
  return i9024
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i9026 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i9027 = data
  i9026.m_hasFontAssetChanged = !!i9027[0]
  request.r(i9027[1], i9027[2], 0, i9026, 'm_baseMaterial')
  i9026.m_maskOffset = new pc.Vec4( i9027[3], i9027[4], i9027[5], i9027[6] )
  i9026.m_text = i9027[7]
  i9026.m_isRightToLeft = !!i9027[8]
  request.r(i9027[9], i9027[10], 0, i9026, 'm_fontAsset')
  request.r(i9027[11], i9027[12], 0, i9026, 'm_sharedMaterial')
  var i9029 = i9027[13]
  var i9028 = []
  for(var i = 0; i < i9029.length; i += 2) {
  request.r(i9029[i + 0], i9029[i + 1], 2, i9028, '')
  }
  i9026.m_fontSharedMaterials = i9028
  request.r(i9027[14], i9027[15], 0, i9026, 'm_fontMaterial')
  var i9031 = i9027[16]
  var i9030 = []
  for(var i = 0; i < i9031.length; i += 2) {
  request.r(i9031[i + 0], i9031[i + 1], 2, i9030, '')
  }
  i9026.m_fontMaterials = i9030
  i9026.m_fontColor32 = UnityEngine.Color32.ConstructColor(i9027[17], i9027[18], i9027[19], i9027[20])
  i9026.m_fontColor = new pc.Color(i9027[21], i9027[22], i9027[23], i9027[24])
  i9026.m_enableVertexGradient = !!i9027[25]
  i9026.m_colorMode = i9027[26]
  i9026.m_fontColorGradient = request.d('TMPro.VertexGradient', i9027[27], i9026.m_fontColorGradient)
  request.r(i9027[28], i9027[29], 0, i9026, 'm_fontColorGradientPreset')
  request.r(i9027[30], i9027[31], 0, i9026, 'm_spriteAsset')
  i9026.m_tintAllSprites = !!i9027[32]
  request.r(i9027[33], i9027[34], 0, i9026, 'm_StyleSheet')
  i9026.m_TextStyleHashCode = i9027[35]
  i9026.m_overrideHtmlColors = !!i9027[36]
  i9026.m_faceColor = UnityEngine.Color32.ConstructColor(i9027[37], i9027[38], i9027[39], i9027[40])
  i9026.m_fontSize = i9027[41]
  i9026.m_fontSizeBase = i9027[42]
  i9026.m_fontWeight = i9027[43]
  i9026.m_enableAutoSizing = !!i9027[44]
  i9026.m_fontSizeMin = i9027[45]
  i9026.m_fontSizeMax = i9027[46]
  i9026.m_fontStyle = i9027[47]
  i9026.m_HorizontalAlignment = i9027[48]
  i9026.m_VerticalAlignment = i9027[49]
  i9026.m_textAlignment = i9027[50]
  i9026.m_characterSpacing = i9027[51]
  i9026.m_wordSpacing = i9027[52]
  i9026.m_lineSpacing = i9027[53]
  i9026.m_lineSpacingMax = i9027[54]
  i9026.m_paragraphSpacing = i9027[55]
  i9026.m_charWidthMaxAdj = i9027[56]
  i9026.m_enableWordWrapping = !!i9027[57]
  i9026.m_wordWrappingRatios = i9027[58]
  i9026.m_overflowMode = i9027[59]
  request.r(i9027[60], i9027[61], 0, i9026, 'm_linkedTextComponent')
  request.r(i9027[62], i9027[63], 0, i9026, 'parentLinkedComponent')
  i9026.m_enableKerning = !!i9027[64]
  i9026.m_enableExtraPadding = !!i9027[65]
  i9026.checkPaddingRequired = !!i9027[66]
  i9026.m_isRichText = !!i9027[67]
  i9026.m_parseCtrlCharacters = !!i9027[68]
  i9026.m_isOrthographic = !!i9027[69]
  i9026.m_isCullingEnabled = !!i9027[70]
  i9026.m_horizontalMapping = i9027[71]
  i9026.m_verticalMapping = i9027[72]
  i9026.m_uvLineOffset = i9027[73]
  i9026.m_geometrySortingOrder = i9027[74]
  i9026.m_IsTextObjectScaleStatic = !!i9027[75]
  i9026.m_VertexBufferAutoSizeReduction = !!i9027[76]
  i9026.m_useMaxVisibleDescender = !!i9027[77]
  i9026.m_pageToDisplay = i9027[78]
  i9026.m_margin = new pc.Vec4( i9027[79], i9027[80], i9027[81], i9027[82] )
  i9026.m_isUsingLegacyAnimationComponent = !!i9027[83]
  i9026.m_isVolumetricText = !!i9027[84]
  request.r(i9027[85], i9027[86], 0, i9026, 'm_Material')
  i9026.m_Maskable = !!i9027[87]
  i9026.m_Color = new pc.Color(i9027[88], i9027[89], i9027[90], i9027[91])
  i9026.m_RaycastTarget = !!i9027[92]
  i9026.m_RaycastPadding = new pc.Vec4( i9027[93], i9027[94], i9027[95], i9027[96] )
  return i9026
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i9032 = root || request.c( 'TMPro.VertexGradient' )
  var i9033 = data
  i9032.topLeft = new pc.Color(i9033[0], i9033[1], i9033[2], i9033[3])
  i9032.topRight = new pc.Color(i9033[4], i9033[5], i9033[6], i9033[7])
  i9032.bottomLeft = new pc.Color(i9033[8], i9033[9], i9033[10], i9033[11])
  i9032.bottomRight = new pc.Color(i9033[12], i9033[13], i9033[14], i9033[15])
  return i9032
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i9034 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i9035 = data
  request.r(i9035[0], i9035[1], 0, i9034, 'm_FirstSelected')
  i9034.m_sendNavigationEvents = !!i9035[2]
  i9034.m_DragThreshold = i9035[3]
  return i9034
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i9036 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i9037 = data
  i9036.m_HorizontalAxis = i9037[0]
  i9036.m_VerticalAxis = i9037[1]
  i9036.m_SubmitButton = i9037[2]
  i9036.m_CancelButton = i9037[3]
  i9036.m_InputActionsPerSecond = i9037[4]
  i9036.m_RepeatDelay = i9037[5]
  i9036.m_ForceModuleActive = !!i9037[6]
  i9036.m_SendPointerHoverToParent = !!i9037[7]
  return i9036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i9038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i9039 = data
  i9038.ambientIntensity = i9039[0]
  i9038.reflectionIntensity = i9039[1]
  i9038.ambientMode = i9039[2]
  i9038.ambientLight = new pc.Color(i9039[3], i9039[4], i9039[5], i9039[6])
  i9038.ambientSkyColor = new pc.Color(i9039[7], i9039[8], i9039[9], i9039[10])
  i9038.ambientGroundColor = new pc.Color(i9039[11], i9039[12], i9039[13], i9039[14])
  i9038.ambientEquatorColor = new pc.Color(i9039[15], i9039[16], i9039[17], i9039[18])
  i9038.fogColor = new pc.Color(i9039[19], i9039[20], i9039[21], i9039[22])
  i9038.fogEndDistance = i9039[23]
  i9038.fogStartDistance = i9039[24]
  i9038.fogDensity = i9039[25]
  i9038.fog = !!i9039[26]
  request.r(i9039[27], i9039[28], 0, i9038, 'skybox')
  i9038.fogMode = i9039[29]
  var i9041 = i9039[30]
  var i9040 = []
  for(var i = 0; i < i9041.length; i += 1) {
    i9040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i9041[i + 0]) );
  }
  i9038.lightmaps = i9040
  i9038.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i9039[31], i9038.lightProbes)
  i9038.lightmapsMode = i9039[32]
  i9038.mixedBakeMode = i9039[33]
  i9038.environmentLightingMode = i9039[34]
  i9038.ambientProbe = new pc.SphericalHarmonicsL2(i9039[35])
  i9038.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i9039[36])
  i9038.useReferenceAmbientProbe = !!i9039[37]
  request.r(i9039[38], i9039[39], 0, i9038, 'customReflection')
  request.r(i9039[40], i9039[41], 0, i9038, 'defaultReflection')
  i9038.defaultReflectionMode = i9039[42]
  i9038.defaultReflectionResolution = i9039[43]
  i9038.sunLightObjectId = i9039[44]
  i9038.pixelLightCount = i9039[45]
  i9038.defaultReflectionHDR = !!i9039[46]
  i9038.hasLightDataAsset = !!i9039[47]
  i9038.hasManualGenerate = !!i9039[48]
  return i9038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i9044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i9045 = data
  request.r(i9045[0], i9045[1], 0, i9044, 'lightmapColor')
  request.r(i9045[2], i9045[3], 0, i9044, 'lightmapDirection')
  request.r(i9045[4], i9045[5], 0, i9044, 'shadowMask')
  return i9044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i9046 = root || new UnityEngine.LightProbes()
  var i9047 = data
  return i9046
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i9054 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i9055 = data
  request.r(i9055[0], i9055[1], 0, i9054, 'panelPrefab')
  var i9057 = i9055[2]
  var i9056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i9057.length; i += 1) {
    i9056.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i9057[i + 0]));
  }
  i9054.prefabs = i9056
  return i9054
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i9060 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i9061 = data
  i9060.type = i9061[0]
  request.r(i9061[1], i9061[2], 0, i9060, 'prefab')
  return i9060
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i9062 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i9063 = data
  i9062.m_Spacing = i9063[0]
  i9062.m_ChildForceExpandWidth = !!i9063[1]
  i9062.m_ChildForceExpandHeight = !!i9063[2]
  i9062.m_ChildControlWidth = !!i9063[3]
  i9062.m_ChildControlHeight = !!i9063[4]
  i9062.m_ChildScaleWidth = !!i9063[5]
  i9062.m_ChildScaleHeight = !!i9063[6]
  i9062.m_ReverseArrangement = !!i9063[7]
  i9062.m_Padding = UnityEngine.RectOffset.FromPaddings(i9063[8], i9063[9], i9063[10], i9063[11])
  i9062.m_ChildAlignment = i9063[12]
  return i9062
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i9064 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i9065 = data
  i9064.m_HorizontalFit = i9065[0]
  i9064.m_VerticalFit = i9065[1]
  return i9064
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i9066 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i9067 = data
  request.r(i9067[0], i9067[1], 0, i9066, 'contentHolder')
  return i9066
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i9068 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i9069 = data
  request.r(i9069[0], i9069[1], 0, i9068, 'nameLabel')
  request.r(i9069[2], i9069[3], 0, i9068, 'scrollRect')
  request.r(i9069[4], i9069[5], 0, i9068, 'viewport')
  request.r(i9069[6], i9069[7], 0, i9068, 'Canvas')
  return i9068
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i9070 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i9071 = data
  i9070.m_IgnoreLayout = !!i9071[0]
  i9070.m_MinWidth = i9071[1]
  i9070.m_MinHeight = i9071[2]
  i9070.m_PreferredWidth = i9071[3]
  i9070.m_PreferredHeight = i9071[4]
  i9070.m_FlexibleWidth = i9071[5]
  i9070.m_FlexibleHeight = i9071[6]
  i9070.m_LayoutPriority = i9071[7]
  return i9070
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i9072 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i9073 = data
  request.r(i9073[0], i9073[1], 0, i9072, 'm_ObjectArgument')
  i9072.m_ObjectArgumentAssemblyTypeName = i9073[2]
  i9072.m_IntArgument = i9073[3]
  i9072.m_FloatArgument = i9073[4]
  i9072.m_StringArgument = i9073[5]
  i9072.m_BoolArgument = !!i9073[6]
  return i9072
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i9074 = root || request.c( 'UnityEngine.UI.Text' )
  var i9075 = data
  i9074.m_FontData = request.d('UnityEngine.UI.FontData', i9075[0], i9074.m_FontData)
  i9074.m_Text = i9075[1]
  request.r(i9075[2], i9075[3], 0, i9074, 'm_Material')
  i9074.m_Maskable = !!i9075[4]
  i9074.m_Color = new pc.Color(i9075[5], i9075[6], i9075[7], i9075[8])
  i9074.m_RaycastTarget = !!i9075[9]
  i9074.m_RaycastPadding = new pc.Vec4( i9075[10], i9075[11], i9075[12], i9075[13] )
  return i9074
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i9076 = root || request.c( 'UnityEngine.UI.FontData' )
  var i9077 = data
  request.r(i9077[0], i9077[1], 0, i9076, 'm_Font')
  i9076.m_FontSize = i9077[2]
  i9076.m_FontStyle = i9077[3]
  i9076.m_BestFit = !!i9077[4]
  i9076.m_MinSize = i9077[5]
  i9076.m_MaxSize = i9077[6]
  i9076.m_Alignment = i9077[7]
  i9076.m_AlignByGeometry = !!i9077[8]
  i9076.m_RichText = !!i9077[9]
  i9076.m_HorizontalOverflow = i9077[10]
  i9076.m_VerticalOverflow = i9077[11]
  i9076.m_LineSpacing = i9077[12]
  return i9076
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i9078 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i9079 = data
  request.r(i9079[0], i9079[1], 0, i9078, 'm_Content')
  i9078.m_Horizontal = !!i9079[2]
  i9078.m_Vertical = !!i9079[3]
  i9078.m_MovementType = i9079[4]
  i9078.m_Elasticity = i9079[5]
  i9078.m_Inertia = !!i9079[6]
  i9078.m_DecelerationRate = i9079[7]
  i9078.m_ScrollSensitivity = i9079[8]
  request.r(i9079[9], i9079[10], 0, i9078, 'm_Viewport')
  request.r(i9079[11], i9079[12], 0, i9078, 'm_HorizontalScrollbar')
  request.r(i9079[13], i9079[14], 0, i9078, 'm_VerticalScrollbar')
  i9078.m_HorizontalScrollbarVisibility = i9079[15]
  i9078.m_VerticalScrollbarVisibility = i9079[16]
  i9078.m_HorizontalScrollbarSpacing = i9079[17]
  i9078.m_VerticalScrollbarSpacing = i9079[18]
  i9078.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i9079[19], i9078.m_OnValueChanged)
  return i9078
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i9080 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i9081 = data
  i9080.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9081[0], i9080.m_PersistentCalls)
  return i9080
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i9082 = root || request.c( 'UnityEngine.UI.Mask' )
  var i9083 = data
  i9082.m_ShowMaskGraphic = !!i9083[0]
  return i9082
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i9084 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i9085 = data
  request.r(i9085[0], i9085[1], 0, i9084, 'm_HandleRect')
  i9084.m_Direction = i9085[2]
  i9084.m_Value = i9085[3]
  i9084.m_Size = i9085[4]
  i9084.m_NumberOfSteps = i9085[5]
  i9084.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i9085[6], i9084.m_OnValueChanged)
  i9084.m_Navigation = request.d('UnityEngine.UI.Navigation', i9085[7], i9084.m_Navigation)
  i9084.m_Transition = i9085[8]
  i9084.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9085[9], i9084.m_Colors)
  i9084.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9085[10], i9084.m_SpriteState)
  i9084.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9085[11], i9084.m_AnimationTriggers)
  i9084.m_Interactable = !!i9085[12]
  request.r(i9085[13], i9085[14], 0, i9084, 'm_TargetGraphic')
  return i9084
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i9086 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i9087 = data
  i9086.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9087[0], i9086.m_PersistentCalls)
  return i9086
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i9088 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i9089 = data
  var i9091 = i9089[0]
  var i9090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i9091.length; i += 1) {
    i9090.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i9091[i + 0]));
  }
  i9088.m_Delegates = i9090
  return i9088
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i9094 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i9095 = data
  i9094.eventID = i9095[0]
  i9094.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i9095[1], i9094.callback)
  return i9094
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i9096 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i9097 = data
  i9096.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9097[0], i9096.m_PersistentCalls)
  return i9096
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i9098 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i9099 = data
  request.r(i9099[0], i9099[1], 0, i9098, 'nameLabel')
  request.r(i9099[2], i9099[3], 0, i9098, 'valueLabel')
  i9098.colorDefault = new pc.Color(i9099[4], i9099[5], i9099[6], i9099[7])
  i9098.colorSelected = new pc.Color(i9099[8], i9099[9], i9099[10], i9099[11])
  return i9098
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i9100 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i9101 = data
  request.r(i9101[0], i9101[1], 0, i9100, 'nameLabel')
  request.r(i9101[2], i9101[3], 0, i9100, 'valueToggle')
  request.r(i9101[4], i9101[5], 0, i9100, 'checkmarkImage')
  i9100.colorDefault = new pc.Color(i9101[6], i9101[7], i9101[8], i9101[9])
  i9100.colorSelected = new pc.Color(i9101[10], i9101[11], i9101[12], i9101[13])
  return i9100
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i9102 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i9103 = data
  i9102.toggleTransition = i9103[0]
  request.r(i9103[1], i9103[2], 0, i9102, 'graphic')
  i9102.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i9103[3], i9102.onValueChanged)
  request.r(i9103[4], i9103[5], 0, i9102, 'm_Group')
  i9102.m_IsOn = !!i9103[6]
  i9102.m_Navigation = request.d('UnityEngine.UI.Navigation', i9103[7], i9102.m_Navigation)
  i9102.m_Transition = i9103[8]
  i9102.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9103[9], i9102.m_Colors)
  i9102.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9103[10], i9102.m_SpriteState)
  i9102.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9103[11], i9102.m_AnimationTriggers)
  i9102.m_Interactable = !!i9103[12]
  request.r(i9103[13], i9103[14], 0, i9102, 'm_TargetGraphic')
  return i9102
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i9104 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i9105 = data
  i9104.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9105[0], i9104.m_PersistentCalls)
  return i9104
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i9106 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i9107 = data
  request.r(i9107[0], i9107[1], 0, i9106, 'nameLabel')
  request.r(i9107[2], i9107[3], 0, i9106, 'valueLabel')
  i9106.colorDefault = new pc.Color(i9107[4], i9107[5], i9107[6], i9107[7])
  i9106.colorSelected = new pc.Color(i9107[8], i9107[9], i9107[10], i9107[11])
  return i9106
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i9108 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i9109 = data
  request.r(i9109[0], i9109[1], 0, i9108, 'nameLabel')
  request.r(i9109[2], i9109[3], 0, i9108, 'valueLabel')
  i9108.colorDefault = new pc.Color(i9109[4], i9109[5], i9109[6], i9109[7])
  i9108.colorSelected = new pc.Color(i9109[8], i9109[9], i9109[10], i9109[11])
  return i9108
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i9110 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i9111 = data
  request.r(i9111[0], i9111[1], 0, i9110, 'nameLabel')
  request.r(i9111[2], i9111[3], 0, i9110, 'valueLabel')
  i9110.colorDefault = new pc.Color(i9111[4], i9111[5], i9111[6], i9111[7])
  i9110.colorSelected = new pc.Color(i9111[8], i9111[9], i9111[10], i9111[11])
  return i9110
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i9112 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i9113 = data
  request.r(i9113[0], i9113[1], 0, i9112, 'nextButtonText')
  request.r(i9113[2], i9113[3], 0, i9112, 'previousButtonText')
  request.r(i9113[4], i9113[5], 0, i9112, 'nameLabel')
  request.r(i9113[6], i9113[7], 0, i9112, 'valueLabel')
  i9112.colorDefault = new pc.Color(i9113[8], i9113[9], i9113[10], i9113[11])
  i9112.colorSelected = new pc.Color(i9113[12], i9113[13], i9113[14], i9113[15])
  return i9112
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i9114 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i9115 = data
  request.r(i9115[0], i9115[1], 0, i9114, 'nameLabel')
  i9114.colorDefault = new pc.Color(i9115[2], i9115[3], i9115[4], i9115[5])
  i9114.colorSelected = new pc.Color(i9115[6], i9115[7], i9115[8], i9115[9])
  return i9114
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i9116 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i9117 = data
  request.r(i9117[0], i9117[1], 0, i9116, 'nameLabel')
  request.r(i9117[2], i9117[3], 0, i9116, 'valueToggle')
  i9116.colorDefault = new pc.Color(i9117[4], i9117[5], i9117[6], i9117[7])
  i9116.colorSelected = new pc.Color(i9117[8], i9117[9], i9117[10], i9117[11])
  return i9116
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i9118 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i9119 = data
  request.r(i9119[0], i9119[1], 0, i9118, 'content')
  request.r(i9119[2], i9119[3], 0, i9118, 'arrowOpened')
  request.r(i9119[4], i9119[5], 0, i9118, 'arrowClosed')
  i9118.toggleTransition = i9119[6]
  request.r(i9119[7], i9119[8], 0, i9118, 'graphic')
  i9118.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i9119[9], i9118.onValueChanged)
  request.r(i9119[10], i9119[11], 0, i9118, 'm_Group')
  i9118.m_IsOn = !!i9119[12]
  i9118.m_Navigation = request.d('UnityEngine.UI.Navigation', i9119[13], i9118.m_Navigation)
  i9118.m_Transition = i9119[14]
  i9118.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9119[15], i9118.m_Colors)
  i9118.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9119[16], i9118.m_SpriteState)
  i9118.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9119[17], i9118.m_AnimationTriggers)
  i9118.m_Interactable = !!i9119[18]
  request.r(i9119[19], i9119[20], 0, i9118, 'm_TargetGraphic')
  return i9118
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i9120 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i9121 = data
  request.r(i9121[0], i9121[1], 0, i9120, 'nameLabel')
  request.r(i9121[2], i9121[3], 0, i9120, 'valueToggle')
  request.r(i9121[4], i9121[5], 0, i9120, 'colorImage')
  request.r(i9121[6], i9121[7], 0, i9120, 'fieldR')
  request.r(i9121[8], i9121[9], 0, i9120, 'fieldG')
  request.r(i9121[10], i9121[11], 0, i9120, 'fieldB')
  request.r(i9121[12], i9121[13], 0, i9120, 'fieldA')
  i9120.colorDefault = new pc.Color(i9121[14], i9121[15], i9121[16], i9121[17])
  i9120.colorSelected = new pc.Color(i9121[18], i9121[19], i9121[20], i9121[21])
  return i9120
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i9122 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i9123 = data
  request.r(i9123[0], i9123[1], 0, i9122, 'nameLabel')
  request.r(i9123[2], i9123[3], 0, i9122, 'valueLabel')
  i9122.colorDefault = new pc.Color(i9123[4], i9123[5], i9123[6], i9123[7])
  i9122.colorSelected = new pc.Color(i9123[8], i9123[9], i9123[10], i9123[11])
  return i9122
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i9124 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i9125 = data
  request.r(i9125[0], i9125[1], 0, i9124, 'nameLabel')
  request.r(i9125[2], i9125[3], 0, i9124, 'valueToggle')
  request.r(i9125[4], i9125[5], 0, i9124, 'fieldX')
  request.r(i9125[6], i9125[7], 0, i9124, 'fieldY')
  i9124.colorDefault = new pc.Color(i9125[8], i9125[9], i9125[10], i9125[11])
  i9124.colorSelected = new pc.Color(i9125[12], i9125[13], i9125[14], i9125[15])
  return i9124
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i9126 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i9127 = data
  request.r(i9127[0], i9127[1], 0, i9126, 'nameLabel')
  request.r(i9127[2], i9127[3], 0, i9126, 'valueToggle')
  request.r(i9127[4], i9127[5], 0, i9126, 'fieldX')
  request.r(i9127[6], i9127[7], 0, i9126, 'fieldY')
  request.r(i9127[8], i9127[9], 0, i9126, 'fieldZ')
  i9126.colorDefault = new pc.Color(i9127[10], i9127[11], i9127[12], i9127[13])
  i9126.colorSelected = new pc.Color(i9127[14], i9127[15], i9127[16], i9127[17])
  return i9126
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i9128 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i9129 = data
  request.r(i9129[0], i9129[1], 0, i9128, 'nameLabel')
  request.r(i9129[2], i9129[3], 0, i9128, 'valueToggle')
  request.r(i9129[4], i9129[5], 0, i9128, 'fieldX')
  request.r(i9129[6], i9129[7], 0, i9128, 'fieldY')
  request.r(i9129[8], i9129[9], 0, i9128, 'fieldZ')
  request.r(i9129[10], i9129[11], 0, i9128, 'fieldW')
  i9128.colorDefault = new pc.Color(i9129[12], i9129[13], i9129[14], i9129[15])
  i9128.colorSelected = new pc.Color(i9129[16], i9129[17], i9129[18], i9129[19])
  return i9128
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i9130 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i9131 = data
  i9130.colorDefault = new pc.Color(i9131[0], i9131[1], i9131[2], i9131[3])
  i9130.colorSelected = new pc.Color(i9131[4], i9131[5], i9131[6], i9131[7])
  return i9130
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i9132 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i9133 = data
  i9132.m_Spacing = i9133[0]
  i9132.m_ChildForceExpandWidth = !!i9133[1]
  i9132.m_ChildForceExpandHeight = !!i9133[2]
  i9132.m_ChildControlWidth = !!i9133[3]
  i9132.m_ChildControlHeight = !!i9133[4]
  i9132.m_ChildScaleWidth = !!i9133[5]
  i9132.m_ChildScaleHeight = !!i9133[6]
  i9132.m_ReverseArrangement = !!i9133[7]
  i9132.m_Padding = UnityEngine.RectOffset.FromPaddings(i9133[8], i9133[9], i9133[10], i9133[11])
  i9132.m_ChildAlignment = i9133[12]
  return i9132
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i9134 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i9135 = data
  i9134.colorDefault = new pc.Color(i9135[0], i9135[1], i9135[2], i9135[3])
  i9134.colorSelected = new pc.Color(i9135[4], i9135[5], i9135[6], i9135[7])
  return i9134
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i9136 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i9137 = data
  request.r(i9137[0], i9137[1], 0, i9136, 'nameLabel')
  request.r(i9137[2], i9137[3], 0, i9136, 'header')
  i9136.colorDefault = new pc.Color(i9137[4], i9137[5], i9137[6], i9137[7])
  i9136.colorSelected = new pc.Color(i9137[8], i9137[9], i9137[10], i9137[11])
  return i9136
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i9138 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i9139 = data
  request.r(i9139[0], i9139[1], 0, i9138, 'nameLabel')
  request.r(i9139[2], i9139[3], 0, i9138, 'valueToggle')
  var i9141 = i9139[4]
  var i9140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i9141.length; i += 2) {
  request.r(i9141[i + 0], i9141[i + 1], 1, i9140, '')
  }
  i9138.toggles = i9140
  i9138.colorDefault = new pc.Color(i9139[5], i9139[6], i9139[7], i9139[8])
  i9138.colorSelected = new pc.Color(i9139[9], i9139[10], i9139[11], i9139[12])
  return i9138
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i9144 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i9145 = data
  request.r(i9145[0], i9145[1], 0, i9144, 'nameLabel')
  request.r(i9145[2], i9145[3], 0, i9144, 'valueToggle')
  request.r(i9145[4], i9145[5], 0, i9144, 'checkmarkImage')
  i9144.colorDefault = new pc.Color(i9145[6], i9145[7], i9145[8], i9145[9])
  i9144.colorSelected = new pc.Color(i9145[10], i9145[11], i9145[12], i9145[13])
  return i9144
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i9146 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i9147 = data
  request.r(i9147[0], i9147[1], 0, i9146, 'nameLabel')
  request.r(i9147[2], i9147[3], 0, i9146, 'valueToggle')
  request.r(i9147[4], i9147[5], 0, i9146, 'checkmarkImage')
  i9146.colorDefault = new pc.Color(i9147[6], i9147[7], i9147[8], i9147[9])
  i9146.colorSelected = new pc.Color(i9147[10], i9147[11], i9147[12], i9147[13])
  return i9146
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i9148 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i9149 = data
  request.r(i9149[0], i9149[1], 0, i9148, 'nextButtonText')
  request.r(i9149[2], i9149[3], 0, i9148, 'previousButtonText')
  request.r(i9149[4], i9149[5], 0, i9148, 'nameLabel')
  request.r(i9149[6], i9149[7], 0, i9148, 'valueLabel')
  i9148.colorDefault = new pc.Color(i9149[8], i9149[9], i9149[10], i9149[11])
  i9148.colorSelected = new pc.Color(i9149[12], i9149[13], i9149[14], i9149[15])
  return i9148
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i9150 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i9151 = data
  request.r(i9151[0], i9151[1], 0, i9150, 'nameLabel')
  request.r(i9151[2], i9151[3], 0, i9150, 'valueToggle')
  i9150.colorDefault = new pc.Color(i9151[4], i9151[5], i9151[6], i9151[7])
  i9150.colorSelected = new pc.Color(i9151[8], i9151[9], i9151[10], i9151[11])
  return i9150
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i9152 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i9153 = data
  request.r(i9153[0], i9153[1], 0, i9152, 'nameLabel')
  i9152.colorDefault = new pc.Color(i9153[2], i9153[3], i9153[4], i9153[5])
  i9152.colorSelected = new pc.Color(i9153[6], i9153[7], i9153[8], i9153[9])
  return i9152
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i9154 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i9155 = data
  request.r(i9155[0], i9155[1], 0, i9154, 'nameLabel')
  request.r(i9155[2], i9155[3], 0, i9154, 'valueLabel')
  request.r(i9155[4], i9155[5], 0, i9154, 'progressBarRect')
  i9154.colorDefault = new pc.Color(i9155[6], i9155[7], i9155[8], i9155[9])
  i9154.colorSelected = new pc.Color(i9155[10], i9155[11], i9155[12], i9155[13])
  return i9154
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i9156 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i9157 = data
  request.r(i9157[0], i9157[1], 0, i9156, 'nameLabel')
  request.r(i9157[2], i9157[3], 0, i9156, 'valueLabel')
  i9156.colorDefault = new pc.Color(i9157[4], i9157[5], i9157[6], i9157[7])
  i9156.colorSelected = new pc.Color(i9157[8], i9157[9], i9157[10], i9157[11])
  return i9156
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i9158 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i9159 = data
  request.r(i9159[0], i9159[1], 0, i9158, 'nameLabel')
  request.r(i9159[2], i9159[3], 0, i9158, 'valueLabel')
  i9158.colorDefault = new pc.Color(i9159[4], i9159[5], i9159[6], i9159[7])
  i9158.colorSelected = new pc.Color(i9159[8], i9159[9], i9159[10], i9159[11])
  return i9158
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i9160 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i9161 = data
  request.r(i9161[0], i9161[1], 0, i9160, 'nextButtonText')
  request.r(i9161[2], i9161[3], 0, i9160, 'previousButtonText')
  request.r(i9161[4], i9161[5], 0, i9160, 'nameLabel')
  request.r(i9161[6], i9161[7], 0, i9160, 'valueLabel')
  i9160.colorDefault = new pc.Color(i9161[8], i9161[9], i9161[10], i9161[11])
  i9160.colorSelected = new pc.Color(i9161[12], i9161[13], i9161[14], i9161[15])
  return i9160
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i9162 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i9163 = data
  request.r(i9163[0], i9163[1], 0, i9162, 'nextButtonText')
  request.r(i9163[2], i9163[3], 0, i9162, 'previousButtonText')
  request.r(i9163[4], i9163[5], 0, i9162, 'nameLabel')
  request.r(i9163[6], i9163[7], 0, i9162, 'valueLabel')
  i9162.colorDefault = new pc.Color(i9163[8], i9163[9], i9163[10], i9163[11])
  i9162.colorSelected = new pc.Color(i9163[12], i9163[13], i9163[14], i9163[15])
  return i9162
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i9164 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i9165 = data
  request.r(i9165[0], i9165[1], 0, i9164, 'panel')
  request.r(i9165[2], i9165[3], 0, i9164, 'valuePrefab')
  return i9164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i9166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i9167 = data
  i9166.AdditionalLightsRenderingMode = i9167[0]
  i9166.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i9167[1], i9166.LightRenderingMode)
  i9166.MainLightRenderingModeValue = i9167[2]
  i9166.SupportsMainLightShadows = !!i9167[3]
  i9166.MainLightShadowmapResolutionValue = i9167[4]
  i9166.SupportsSoftShadows = !!i9167[5]
  i9166.SoftShadowQualityValue = i9167[6]
  i9166.ShadowDistance = i9167[7]
  i9166.ShadowCascadeCount = i9167[8]
  i9166.Cascade2Split = i9167[9]
  i9166.Cascade3Split = new pc.Vec2( i9167[10], i9167[11] )
  i9166.Cascade4Split = new pc.Vec3( i9167[12], i9167[13], i9167[14] )
  i9166.CascadeBorder = i9167[15]
  i9166.ShadowDepthBias = i9167[16]
  i9166.ShadowNormalBias = i9167[17]
  i9166.RequireDepthTexture = !!i9167[18]
  i9166.RequireOpaqueTexture = !!i9167[19]
  i9166.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i9167[20], i9166.scriptableRendererData)
  return i9166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i9168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i9169 = data
  i9168.Disabled = i9169[0]
  i9168.PerVertex = i9169[1]
  i9168.PerPixel = i9169[2]
  return i9168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i9170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i9171 = data
  i9170.opaqueLayerMask = i9171[0]
  i9170.transparentLayerMask = i9171[1]
  var i9173 = i9171[2]
  var i9172 = []
  for(var i = 0; i < i9173.length; i += 1) {
    i9172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i9173[i + 0]) );
  }
  i9170.RenderObjectsFeatures = i9172
  i9170.name = i9171[3]
  return i9170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i9176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i9177 = data
  i9176.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i9177[0], i9176.settings)
  i9176.name = i9177[1]
  i9176.typeName = i9177[2]
  return i9176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i9178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i9179 = data
  var i9181 = i9179[0]
  var i9180 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i9181.length; i += 1) {
    i9180.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i9181[i + 0]));
  }
  i9178.ShaderCompilationErrors = i9180
  i9178.name = i9179[1]
  i9178.guid = i9179[2]
  var i9183 = i9179[3]
  var i9182 = []
  for(var i = 0; i < i9183.length; i += 1) {
    i9182.push( i9183[i + 0] );
  }
  i9178.shaderDefinedKeywords = i9182
  var i9185 = i9179[4]
  var i9184 = []
  for(var i = 0; i < i9185.length; i += 1) {
    i9184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i9185[i + 0]) );
  }
  i9178.passes = i9184
  var i9187 = i9179[5]
  var i9186 = []
  for(var i = 0; i < i9187.length; i += 1) {
    i9186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i9187[i + 0]) );
  }
  i9178.usePasses = i9186
  var i9189 = i9179[6]
  var i9188 = []
  for(var i = 0; i < i9189.length; i += 1) {
    i9188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i9189[i + 0]) );
  }
  i9178.defaultParameterValues = i9188
  request.r(i9179[7], i9179[8], 0, i9178, 'unityFallbackShader')
  i9178.readDepth = !!i9179[9]
  i9178.hasDepthOnlyPass = !!i9179[10]
  i9178.isCreatedByShaderGraph = !!i9179[11]
  i9178.disableBatching = !!i9179[12]
  i9178.compiled = !!i9179[13]
  return i9178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i9192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i9193 = data
  i9192.shaderName = i9193[0]
  i9192.errorMessage = i9193[1]
  return i9192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i9198 = root || new pc.UnityShaderPass()
  var i9199 = data
  i9198.id = i9199[0]
  i9198.subShaderIndex = i9199[1]
  i9198.name = i9199[2]
  i9198.passType = i9199[3]
  i9198.grabPassTextureName = i9199[4]
  i9198.usePass = !!i9199[5]
  i9198.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[6], i9198.zTest)
  i9198.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[7], i9198.zWrite)
  i9198.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[8], i9198.culling)
  i9198.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9199[9], i9198.blending)
  i9198.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9199[10], i9198.alphaBlending)
  i9198.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[11], i9198.colorWriteMask)
  i9198.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[12], i9198.offsetUnits)
  i9198.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[13], i9198.offsetFactor)
  i9198.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[14], i9198.stencilRef)
  i9198.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[15], i9198.stencilReadMask)
  i9198.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9199[16], i9198.stencilWriteMask)
  i9198.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9199[17], i9198.stencilOp)
  i9198.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9199[18], i9198.stencilOpFront)
  i9198.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9199[19], i9198.stencilOpBack)
  var i9201 = i9199[20]
  var i9200 = []
  for(var i = 0; i < i9201.length; i += 1) {
    i9200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i9201[i + 0]) );
  }
  i9198.tags = i9200
  var i9203 = i9199[21]
  var i9202 = []
  for(var i = 0; i < i9203.length; i += 1) {
    i9202.push( i9203[i + 0] );
  }
  i9198.passDefinedKeywords = i9202
  var i9205 = i9199[22]
  var i9204 = []
  for(var i = 0; i < i9205.length; i += 1) {
    i9204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i9205[i + 0]) );
  }
  i9198.passDefinedKeywordGroups = i9204
  var i9207 = i9199[23]
  var i9206 = []
  for(var i = 0; i < i9207.length; i += 1) {
    i9206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9207[i + 0]) );
  }
  i9198.variants = i9206
  var i9209 = i9199[24]
  var i9208 = []
  for(var i = 0; i < i9209.length; i += 1) {
    i9208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9209[i + 0]) );
  }
  i9198.excludedVariants = i9208
  i9198.hasDepthReader = !!i9199[25]
  return i9198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i9210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i9211 = data
  i9210.val = i9211[0]
  i9210.name = i9211[1]
  return i9210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i9212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i9213 = data
  i9212.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9213[0], i9212.src)
  i9212.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9213[1], i9212.dst)
  i9212.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9213[2], i9212.op)
  return i9212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i9214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i9215 = data
  i9214.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9215[0], i9214.pass)
  i9214.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9215[1], i9214.fail)
  i9214.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9215[2], i9214.zFail)
  i9214.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9215[3], i9214.comp)
  return i9214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i9218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i9219 = data
  i9218.name = i9219[0]
  i9218.value = i9219[1]
  return i9218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i9222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i9223 = data
  var i9225 = i9223[0]
  var i9224 = []
  for(var i = 0; i < i9225.length; i += 1) {
    i9224.push( i9225[i + 0] );
  }
  i9222.keywords = i9224
  i9222.hasDiscard = !!i9223[1]
  return i9222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i9228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i9229 = data
  i9228.passId = i9229[0]
  i9228.subShaderIndex = i9229[1]
  var i9231 = i9229[2]
  var i9230 = []
  for(var i = 0; i < i9231.length; i += 1) {
    i9230.push( i9231[i + 0] );
  }
  i9228.keywords = i9230
  i9228.vertexProgram = i9229[3]
  i9228.fragmentProgram = i9229[4]
  i9228.exportedForWebGl2 = !!i9229[5]
  i9228.readDepth = !!i9229[6]
  return i9228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i9234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i9235 = data
  request.r(i9235[0], i9235[1], 0, i9234, 'shader')
  i9234.pass = i9235[2]
  return i9234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i9238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i9239 = data
  i9238.name = i9239[0]
  i9238.type = i9239[1]
  i9238.value = new pc.Vec4( i9239[2], i9239[3], i9239[4], i9239[5] )
  i9238.textureValue = i9239[6]
  i9238.shaderPropertyFlag = i9239[7]
  return i9238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i9240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i9241 = data
  i9240.name = i9241[0]
  request.r(i9241[1], i9241[2], 0, i9240, 'texture')
  i9240.aabb = i9241[3]
  i9240.vertices = i9241[4]
  i9240.triangles = i9241[5]
  i9240.textureRect = UnityEngine.Rect.MinMaxRect(i9241[6], i9241[7], i9241[8], i9241[9])
  i9240.packedRect = UnityEngine.Rect.MinMaxRect(i9241[10], i9241[11], i9241[12], i9241[13])
  i9240.border = new pc.Vec4( i9241[14], i9241[15], i9241[16], i9241[17] )
  i9240.transparency = i9241[18]
  i9240.bounds = i9241[19]
  i9240.pixelsPerUnit = i9241[20]
  i9240.textureWidth = i9241[21]
  i9240.textureHeight = i9241[22]
  i9240.nativeSize = new pc.Vec2( i9241[23], i9241[24] )
  i9240.pivot = new pc.Vec2( i9241[25], i9241[26] )
  i9240.textureRectOffset = new pc.Vec2( i9241[27], i9241[28] )
  return i9240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i9242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i9243 = data
  i9242.name = i9243[0]
  return i9242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i9244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i9245 = data
  i9244.name = i9245[0]
  i9244.ascent = i9245[1]
  i9244.originalLineHeight = i9245[2]
  i9244.fontSize = i9245[3]
  var i9247 = i9245[4]
  var i9246 = []
  for(var i = 0; i < i9247.length; i += 1) {
    i9246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i9247[i + 0]) );
  }
  i9244.characterInfo = i9246
  request.r(i9245[5], i9245[6], 0, i9244, 'texture')
  i9244.originalFontSize = i9245[7]
  return i9244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i9250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i9251 = data
  i9250.index = i9251[0]
  i9250.advance = i9251[1]
  i9250.bearing = i9251[2]
  i9250.glyphWidth = i9251[3]
  i9250.glyphHeight = i9251[4]
  i9250.minX = i9251[5]
  i9250.maxX = i9251[6]
  i9250.minY = i9251[7]
  i9250.maxY = i9251[8]
  i9250.uvBottomLeftX = i9251[9]
  i9250.uvBottomLeftY = i9251[10]
  i9250.uvBottomRightX = i9251[11]
  i9250.uvBottomRightY = i9251[12]
  i9250.uvTopLeftX = i9251[13]
  i9250.uvTopLeftY = i9251[14]
  i9250.uvTopRightX = i9251[15]
  i9250.uvTopRightY = i9251[16]
  return i9250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i9252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i9253 = data
  i9252.name = i9253[0]
  i9252.bytes64 = i9253[1]
  i9252.data = i9253[2]
  return i9252
}

Deserializers["HexBoardSetupConfig"] = function (request, data, root) {
  var i9254 = root || request.c( 'HexBoardSetupConfig' )
  var i9255 = data
  i9254._width = i9255[0]
  i9254._height = i9255[1]
  var i9257 = i9255[2]
  var i9256 = []
  for(var i = 0; i < i9257.length; i += 1) {
    i9256.push( request.d('HexCellStackSetup', i9257[i + 0]) );
  }
  i9254._cells = i9256
  return i9254
}

Deserializers["HexCellStackSetup"] = function (request, data, root) {
  var i9260 = root || request.c( 'HexCellStackSetup' )
  var i9261 = data
  i9260._position = new pc.Vec2( i9261[0], i9261[1] )
  i9260._color = i9261[2]
  i9260._amount = i9261[3]
  return i9260
}

Deserializers["HexDraggableStackSequenceConfig"] = function (request, data, root) {
  var i9262 = root || request.c( 'HexDraggableStackSequenceConfig' )
  var i9263 = data
  var i9265 = i9263[0]
  var i9264 = []
  for(var i = 0; i < i9265.length; i += 1) {
    i9264.push( request.d('HexDraggableStackSetup', i9265[i + 0]) );
  }
  i9262._stacks = i9264
  return i9262
}

Deserializers["HexDraggableStackSetup"] = function (request, data, root) {
  var i9268 = root || request.c( 'HexDraggableStackSetup' )
  var i9269 = data
  var i9271 = i9269[0]
  var i9270 = []
  for(var i = 0; i < i9271.length; i += 1) {
    i9270.push( request.d('HexDraggableTileGroupSetup', i9271[i + 0]) );
  }
  i9268._groups = i9270
  return i9268
}

Deserializers["HexDraggableTileGroupSetup"] = function (request, data, root) {
  var i9274 = root || request.c( 'HexDraggableTileGroupSetup' )
  var i9275 = data
  i9274.Color = i9275[0]
  i9274.Amount = i9275[1]
  return i9274
}

Deserializers["HexColorPaletteConfig"] = function (request, data, root) {
  var i9276 = root || request.c( 'HexColorPaletteConfig' )
  var i9277 = data
  var i9279 = i9277[0]
  var i9278 = []
  for(var i = 0; i < i9279.length; i += 4) {
    i9278.push( new pc.Color(i9279[i + 0], i9279[i + 1], i9279[i + 2], i9279[i + 3]) );
  }
  i9276._colors = i9278
  return i9276
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i9282 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i9283 = data
  request.r(i9283[0], i9283[1], 0, i9282, 'atlas')
  i9282.normalStyle = i9283[2]
  i9282.normalSpacingOffset = i9283[3]
  i9282.boldStyle = i9283[4]
  i9282.boldSpacing = i9283[5]
  i9282.italicStyle = i9283[6]
  i9282.tabSize = i9283[7]
  i9282.hashCode = i9283[8]
  request.r(i9283[9], i9283[10], 0, i9282, 'material')
  i9282.materialHashCode = i9283[11]
  i9282.m_Version = i9283[12]
  i9282.m_SourceFontFileGUID = i9283[13]
  request.r(i9283[14], i9283[15], 0, i9282, 'm_SourceFontFile_EditorRef')
  request.r(i9283[16], i9283[17], 0, i9282, 'm_SourceFontFile')
  i9282.m_AtlasPopulationMode = i9283[18]
  i9282.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9283[19], i9282.m_FaceInfo)
  var i9285 = i9283[20]
  var i9284 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i9285.length; i += 1) {
    i9284.add(request.d('UnityEngine.TextCore.Glyph', i9285[i + 0]));
  }
  i9282.m_GlyphTable = i9284
  var i9287 = i9283[21]
  var i9286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i9287.length; i += 1) {
    i9286.add(request.d('TMPro.TMP_Character', i9287[i + 0]));
  }
  i9282.m_CharacterTable = i9286
  var i9289 = i9283[22]
  var i9288 = []
  for(var i = 0; i < i9289.length; i += 2) {
  request.r(i9289[i + 0], i9289[i + 1], 2, i9288, '')
  }
  i9282.m_AtlasTextures = i9288
  i9282.m_AtlasTextureIndex = i9283[23]
  i9282.m_IsMultiAtlasTexturesEnabled = !!i9283[24]
  i9282.m_ClearDynamicDataOnBuild = !!i9283[25]
  var i9291 = i9283[26]
  var i9290 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9291.length; i += 1) {
    i9290.add(request.d('UnityEngine.TextCore.GlyphRect', i9291[i + 0]));
  }
  i9282.m_UsedGlyphRects = i9290
  var i9293 = i9283[27]
  var i9292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9293.length; i += 1) {
    i9292.add(request.d('UnityEngine.TextCore.GlyphRect', i9293[i + 0]));
  }
  i9282.m_FreeGlyphRects = i9292
  i9282.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i9283[28], i9282.m_fontInfo)
  i9282.m_AtlasWidth = i9283[29]
  i9282.m_AtlasHeight = i9283[30]
  i9282.m_AtlasPadding = i9283[31]
  i9282.m_AtlasRenderMode = i9283[32]
  var i9295 = i9283[33]
  var i9294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i9295.length; i += 1) {
    i9294.add(request.d('TMPro.TMP_Glyph', i9295[i + 0]));
  }
  i9282.m_glyphInfoList = i9294
  i9282.m_KerningTable = request.d('TMPro.KerningTable', i9283[34], i9282.m_KerningTable)
  i9282.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i9283[35], i9282.m_FontFeatureTable)
  var i9297 = i9283[36]
  var i9296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9297.length; i += 2) {
  request.r(i9297[i + 0], i9297[i + 1], 1, i9296, '')
  }
  i9282.fallbackFontAssets = i9296
  var i9299 = i9283[37]
  var i9298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9299.length; i += 2) {
  request.r(i9299[i + 0], i9299[i + 1], 1, i9298, '')
  }
  i9282.m_FallbackFontAssetTable = i9298
  i9282.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i9283[38], i9282.m_CreationSettings)
  var i9301 = i9283[39]
  var i9300 = []
  for(var i = 0; i < i9301.length; i += 1) {
    i9300.push( request.d('TMPro.TMP_FontWeightPair', i9301[i + 0]) );
  }
  i9282.m_FontWeightTable = i9300
  var i9303 = i9283[40]
  var i9302 = []
  for(var i = 0; i < i9303.length; i += 1) {
    i9302.push( request.d('TMPro.TMP_FontWeightPair', i9303[i + 0]) );
  }
  i9282.fontWeights = i9302
  return i9282
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i9304 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i9305 = data
  i9304.m_FaceIndex = i9305[0]
  i9304.m_FamilyName = i9305[1]
  i9304.m_StyleName = i9305[2]
  i9304.m_PointSize = i9305[3]
  i9304.m_Scale = i9305[4]
  i9304.m_UnitsPerEM = i9305[5]
  i9304.m_LineHeight = i9305[6]
  i9304.m_AscentLine = i9305[7]
  i9304.m_CapLine = i9305[8]
  i9304.m_MeanLine = i9305[9]
  i9304.m_Baseline = i9305[10]
  i9304.m_DescentLine = i9305[11]
  i9304.m_SuperscriptOffset = i9305[12]
  i9304.m_SuperscriptSize = i9305[13]
  i9304.m_SubscriptOffset = i9305[14]
  i9304.m_SubscriptSize = i9305[15]
  i9304.m_UnderlineOffset = i9305[16]
  i9304.m_UnderlineThickness = i9305[17]
  i9304.m_StrikethroughOffset = i9305[18]
  i9304.m_StrikethroughThickness = i9305[19]
  i9304.m_TabWidth = i9305[20]
  return i9304
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i9308 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i9309 = data
  i9308.m_Index = i9309[0]
  i9308.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9309[1], i9308.m_Metrics)
  i9308.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9309[2], i9308.m_GlyphRect)
  i9308.m_Scale = i9309[3]
  i9308.m_AtlasIndex = i9309[4]
  i9308.m_ClassDefinitionType = i9309[5]
  return i9308
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i9310 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i9311 = data
  i9310.m_Width = i9311[0]
  i9310.m_Height = i9311[1]
  i9310.m_HorizontalBearingX = i9311[2]
  i9310.m_HorizontalBearingY = i9311[3]
  i9310.m_HorizontalAdvance = i9311[4]
  return i9310
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i9312 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i9313 = data
  i9312.m_X = i9313[0]
  i9312.m_Y = i9313[1]
  i9312.m_Width = i9313[2]
  i9312.m_Height = i9313[3]
  return i9312
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i9316 = root || request.c( 'TMPro.TMP_Character' )
  var i9317 = data
  i9316.m_ElementType = i9317[0]
  i9316.m_Unicode = i9317[1]
  i9316.m_GlyphIndex = i9317[2]
  i9316.m_Scale = i9317[3]
  return i9316
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i9322 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i9323 = data
  i9322.Name = i9323[0]
  i9322.PointSize = i9323[1]
  i9322.Scale = i9323[2]
  i9322.CharacterCount = i9323[3]
  i9322.LineHeight = i9323[4]
  i9322.Baseline = i9323[5]
  i9322.Ascender = i9323[6]
  i9322.CapHeight = i9323[7]
  i9322.Descender = i9323[8]
  i9322.CenterLine = i9323[9]
  i9322.SuperscriptOffset = i9323[10]
  i9322.SubscriptOffset = i9323[11]
  i9322.SubSize = i9323[12]
  i9322.Underline = i9323[13]
  i9322.UnderlineThickness = i9323[14]
  i9322.strikethrough = i9323[15]
  i9322.strikethroughThickness = i9323[16]
  i9322.TabWidth = i9323[17]
  i9322.Padding = i9323[18]
  i9322.AtlasWidth = i9323[19]
  i9322.AtlasHeight = i9323[20]
  return i9322
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i9326 = root || request.c( 'TMPro.TMP_Glyph' )
  var i9327 = data
  i9326.id = i9327[0]
  i9326.x = i9327[1]
  i9326.y = i9327[2]
  i9326.width = i9327[3]
  i9326.height = i9327[4]
  i9326.xOffset = i9327[5]
  i9326.yOffset = i9327[6]
  i9326.xAdvance = i9327[7]
  i9326.scale = i9327[8]
  return i9326
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i9328 = root || request.c( 'TMPro.KerningTable' )
  var i9329 = data
  var i9331 = i9329[0]
  var i9330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i9331.length; i += 1) {
    i9330.add(request.d('TMPro.KerningPair', i9331[i + 0]));
  }
  i9328.kerningPairs = i9330
  return i9328
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i9334 = root || request.c( 'TMPro.KerningPair' )
  var i9335 = data
  i9334.xOffset = i9335[0]
  i9334.m_FirstGlyph = i9335[1]
  i9334.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9335[2], i9334.m_FirstGlyphAdjustments)
  i9334.m_SecondGlyph = i9335[3]
  i9334.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9335[4], i9334.m_SecondGlyphAdjustments)
  i9334.m_IgnoreSpacingAdjustments = !!i9335[5]
  return i9334
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i9336 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i9337 = data
  var i9339 = i9337[0]
  var i9338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i9339.length; i += 1) {
    i9338.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i9339[i + 0]));
  }
  i9336.m_GlyphPairAdjustmentRecords = i9338
  return i9336
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i9342 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i9343 = data
  i9342.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i9343[0], i9342.m_FirstAdjustmentRecord)
  i9342.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i9343[1], i9342.m_SecondAdjustmentRecord)
  i9342.m_FeatureLookupFlags = i9343[2]
  return i9342
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i9344 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i9345 = data
  i9344.m_GlyphIndex = i9345[0]
  i9344.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i9345[1], i9344.m_GlyphValueRecord)
  return i9344
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i9346 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i9347 = data
  i9346.m_XPlacement = i9347[0]
  i9346.m_YPlacement = i9347[1]
  i9346.m_XAdvance = i9347[2]
  i9346.m_YAdvance = i9347[3]
  return i9346
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i9350 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i9351 = data
  i9350.sourceFontFileName = i9351[0]
  i9350.sourceFontFileGUID = i9351[1]
  i9350.pointSizeSamplingMode = i9351[2]
  i9350.pointSize = i9351[3]
  i9350.padding = i9351[4]
  i9350.packingMode = i9351[5]
  i9350.atlasWidth = i9351[6]
  i9350.atlasHeight = i9351[7]
  i9350.characterSetSelectionMode = i9351[8]
  i9350.characterSequence = i9351[9]
  i9350.referencedFontAssetGUID = i9351[10]
  i9350.referencedTextAssetGUID = i9351[11]
  i9350.fontStyle = i9351[12]
  i9350.fontStyleModifier = i9351[13]
  i9350.renderMode = i9351[14]
  i9350.includeFontFeatures = !!i9351[15]
  return i9350
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i9354 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i9355 = data
  request.r(i9355[0], i9355[1], 0, i9354, 'regularTypeface')
  request.r(i9355[2], i9355[3], 0, i9354, 'italicTypeface')
  return i9354
}

Deserializers["HexDragTutorialConfig"] = function (request, data, root) {
  var i9356 = root || request.c( 'HexDragTutorialConfig' )
  var i9357 = data
  i9356.EnabledDraggableIndex = i9357[0]
  i9356.TargetCellOffset = new pc.Vec2( i9357[1], i9357[2] )
  i9356.HandShowDelay = i9357[3]
  i9356.HandMoveDuration = i9357[4]
  i9356.HandLoopDelay = i9357[5]
  return i9356
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i9358 = root || request.c( 'TMPro.TMP_Settings' )
  var i9359 = data
  i9358.m_enableWordWrapping = !!i9359[0]
  i9358.m_enableKerning = !!i9359[1]
  i9358.m_enableExtraPadding = !!i9359[2]
  i9358.m_enableTintAllSprites = !!i9359[3]
  i9358.m_enableParseEscapeCharacters = !!i9359[4]
  i9358.m_EnableRaycastTarget = !!i9359[5]
  i9358.m_GetFontFeaturesAtRuntime = !!i9359[6]
  i9358.m_missingGlyphCharacter = i9359[7]
  i9358.m_warningsDisabled = !!i9359[8]
  request.r(i9359[9], i9359[10], 0, i9358, 'm_defaultFontAsset')
  i9358.m_defaultFontAssetPath = i9359[11]
  i9358.m_defaultFontSize = i9359[12]
  i9358.m_defaultAutoSizeMinRatio = i9359[13]
  i9358.m_defaultAutoSizeMaxRatio = i9359[14]
  i9358.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i9359[15], i9359[16] )
  i9358.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i9359[17], i9359[18] )
  i9358.m_autoSizeTextContainer = !!i9359[19]
  i9358.m_IsTextObjectScaleStatic = !!i9359[20]
  var i9361 = i9359[21]
  var i9360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9361.length; i += 2) {
  request.r(i9361[i + 0], i9361[i + 1], 1, i9360, '')
  }
  i9358.m_fallbackFontAssets = i9360
  i9358.m_matchMaterialPreset = !!i9359[22]
  request.r(i9359[23], i9359[24], 0, i9358, 'm_defaultSpriteAsset')
  i9358.m_defaultSpriteAssetPath = i9359[25]
  i9358.m_enableEmojiSupport = !!i9359[26]
  i9358.m_MissingCharacterSpriteUnicode = i9359[27]
  i9358.m_defaultColorGradientPresetsPath = i9359[28]
  request.r(i9359[29], i9359[30], 0, i9358, 'm_defaultStyleSheet')
  i9358.m_StyleSheetsResourcePath = i9359[31]
  request.r(i9359[32], i9359[33], 0, i9358, 'm_leadingCharacters')
  request.r(i9359[34], i9359[35], 0, i9358, 'm_followingCharacters')
  i9358.m_UseModernHangulLineBreakingRules = !!i9359[36]
  return i9358
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i9362 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i9363 = data
  var i9365 = i9363[0]
  var i9364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i9365.length; i += 1) {
    i9364.add(request.d('TMPro.TMP_Style', i9365[i + 0]));
  }
  i9362.m_StyleList = i9364
  return i9362
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i9368 = root || request.c( 'TMPro.TMP_Style' )
  var i9369 = data
  i9368.m_Name = i9369[0]
  i9368.m_HashCode = i9369[1]
  i9368.m_OpeningDefinition = i9369[2]
  i9368.m_ClosingDefinition = i9369[3]
  i9368.m_OpeningTagArray = i9369[4]
  i9368.m_ClosingTagArray = i9369[5]
  i9368.m_OpeningTagUnicodeArray = i9369[6]
  i9368.m_ClosingTagUnicodeArray = i9369[7]
  return i9368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i9370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i9371 = data
  var i9373 = i9371[0]
  var i9372 = []
  for(var i = 0; i < i9373.length; i += 1) {
    i9372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9373[i + 0]) );
  }
  i9370.files = i9372
  i9370.componentToPrefabIds = i9371[1]
  return i9370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9377 = data
  i9376.path = i9377[0]
  request.r(i9377[1], i9377[2], 0, i9376, 'unityObject')
  return i9376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9379 = data
  var i9381 = i9379[0]
  var i9380 = []
  for(var i = 0; i < i9381.length; i += 1) {
    i9380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9381[i + 0]) );
  }
  i9378.scriptsExecutionOrder = i9380
  var i9383 = i9379[1]
  var i9382 = []
  for(var i = 0; i < i9383.length; i += 1) {
    i9382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9383[i + 0]) );
  }
  i9378.sortingLayers = i9382
  var i9385 = i9379[2]
  var i9384 = []
  for(var i = 0; i < i9385.length; i += 1) {
    i9384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9385[i + 0]) );
  }
  i9378.cullingLayers = i9384
  i9378.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9379[3], i9378.timeSettings)
  i9378.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9379[4], i9378.physicsSettings)
  i9378.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9379[5], i9378.physics2DSettings)
  i9378.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9379[6], i9378.qualitySettings)
  i9378.enableRealtimeShadows = !!i9379[7]
  i9378.enableAutoInstancing = !!i9379[8]
  i9378.enableStaticBatching = !!i9379[9]
  i9378.enableDynamicBatching = !!i9379[10]
  i9378.lightmapEncodingQuality = i9379[11]
  i9378.desiredColorSpace = i9379[12]
  var i9387 = i9379[13]
  var i9386 = []
  for(var i = 0; i < i9387.length; i += 1) {
    i9386.push( i9387[i + 0] );
  }
  i9378.allTags = i9386
  return i9378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9391 = data
  i9390.name = i9391[0]
  i9390.value = i9391[1]
  return i9390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9395 = data
  i9394.id = i9395[0]
  i9394.name = i9395[1]
  i9394.value = i9395[2]
  return i9394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9399 = data
  i9398.id = i9399[0]
  i9398.name = i9399[1]
  return i9398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9401 = data
  i9400.fixedDeltaTime = i9401[0]
  i9400.maximumDeltaTime = i9401[1]
  i9400.timeScale = i9401[2]
  i9400.maximumParticleTimestep = i9401[3]
  return i9400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9403 = data
  i9402.gravity = new pc.Vec3( i9403[0], i9403[1], i9403[2] )
  i9402.defaultSolverIterations = i9403[3]
  i9402.bounceThreshold = i9403[4]
  i9402.autoSyncTransforms = !!i9403[5]
  i9402.autoSimulation = !!i9403[6]
  var i9405 = i9403[7]
  var i9404 = []
  for(var i = 0; i < i9405.length; i += 1) {
    i9404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9405[i + 0]) );
  }
  i9402.collisionMatrix = i9404
  return i9402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9409 = data
  i9408.enabled = !!i9409[0]
  i9408.layerId = i9409[1]
  i9408.otherLayerId = i9409[2]
  return i9408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9411 = data
  request.r(i9411[0], i9411[1], 0, i9410, 'material')
  i9410.gravity = new pc.Vec2( i9411[2], i9411[3] )
  i9410.positionIterations = i9411[4]
  i9410.velocityIterations = i9411[5]
  i9410.velocityThreshold = i9411[6]
  i9410.maxLinearCorrection = i9411[7]
  i9410.maxAngularCorrection = i9411[8]
  i9410.maxTranslationSpeed = i9411[9]
  i9410.maxRotationSpeed = i9411[10]
  i9410.baumgarteScale = i9411[11]
  i9410.baumgarteTOIScale = i9411[12]
  i9410.timeToSleep = i9411[13]
  i9410.linearSleepTolerance = i9411[14]
  i9410.angularSleepTolerance = i9411[15]
  i9410.defaultContactOffset = i9411[16]
  i9410.autoSimulation = !!i9411[17]
  i9410.queriesHitTriggers = !!i9411[18]
  i9410.queriesStartInColliders = !!i9411[19]
  i9410.callbacksOnDisable = !!i9411[20]
  i9410.reuseCollisionCallbacks = !!i9411[21]
  i9410.autoSyncTransforms = !!i9411[22]
  var i9413 = i9411[23]
  var i9412 = []
  for(var i = 0; i < i9413.length; i += 1) {
    i9412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9413[i + 0]) );
  }
  i9410.collisionMatrix = i9412
  return i9410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9417 = data
  i9416.enabled = !!i9417[0]
  i9416.layerId = i9417[1]
  i9416.otherLayerId = i9417[2]
  return i9416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9419 = data
  var i9421 = i9419[0]
  var i9420 = []
  for(var i = 0; i < i9421.length; i += 1) {
    i9420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9421[i + 0]) );
  }
  i9418.qualityLevels = i9420
  var i9423 = i9419[1]
  var i9422 = []
  for(var i = 0; i < i9423.length; i += 1) {
    i9422.push( i9423[i + 0] );
  }
  i9418.names = i9422
  i9418.shadows = i9419[2]
  i9418.anisotropicFiltering = i9419[3]
  i9418.antiAliasing = i9419[4]
  i9418.lodBias = i9419[5]
  i9418.shadowCascades = i9419[6]
  i9418.shadowDistance = i9419[7]
  i9418.shadowmaskMode = i9419[8]
  i9418.shadowProjection = i9419[9]
  i9418.shadowResolution = i9419[10]
  i9418.softParticles = !!i9419[11]
  i9418.softVegetation = !!i9419[12]
  i9418.activeColorSpace = i9419[13]
  i9418.desiredColorSpace = i9419[14]
  i9418.masterTextureLimit = i9419[15]
  i9418.maxQueuedFrames = i9419[16]
  i9418.particleRaycastBudget = i9419[17]
  i9418.pixelLightCount = i9419[18]
  i9418.realtimeReflectionProbes = !!i9419[19]
  i9418.shadowCascade2Split = i9419[20]
  i9418.shadowCascade4Split = new pc.Vec3( i9419[21], i9419[22], i9419[23] )
  i9418.streamingMipmapsActive = !!i9419[24]
  i9418.vSyncCount = i9419[25]
  i9418.asyncUploadBufferSize = i9419[26]
  i9418.asyncUploadTimeSlice = i9419[27]
  i9418.billboardsFaceCameraPosition = !!i9419[28]
  i9418.shadowNearPlaneOffset = i9419[29]
  i9418.streamingMipmapsMemoryBudget = i9419[30]
  i9418.maximumLODLevel = i9419[31]
  i9418.streamingMipmapsAddAllCameras = !!i9419[32]
  i9418.streamingMipmapsMaxLevelReduction = i9419[33]
  i9418.streamingMipmapsRenderersPerFrame = i9419[34]
  i9418.resolutionScalingFixedDPIFactor = i9419[35]
  i9418.streamingMipmapsMaxFileIORequests = i9419[36]
  i9418.currentQualityLevel = i9419[37]
  return i9418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9429 = data
  i9428.weight = i9429[0]
  i9428.vertices = i9429[1]
  i9428.normals = i9429[2]
  i9428.tangents = i9429[3]
  return i9428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i9430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i9431 = data
  i9430.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9431[0], i9430.Event)
  i9430.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i9431[1], i9430.filterSettings)
  i9430.overrideMaterialId = i9431[2]
  i9430.overrideMaterialPassIndex = i9431[3]
  i9430.overrideShaderId = i9431[4]
  i9430.overrideShaderPassIndex = i9431[5]
  i9430.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9431[6], i9430.overrideMode)
  i9430.overrideDepthState = !!i9431[7]
  i9430.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9431[8], i9430.depthCompareFunction)
  i9430.enableWrite = !!i9431[9]
  i9430.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i9431[10], i9430.stencilSettings)
  i9430.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i9431[11], i9430.cameraSettings)
  return i9430
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i9432 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i9433 = data
  i9432.xPlacement = i9433[0]
  i9432.yPlacement = i9433[1]
  i9432.xAdvance = i9433[2]
  i9432.yAdvance = i9433[3]
  return i9432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i9434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i9435 = data
  i9434.Value = i9435[0]
  return i9434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i9436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i9437 = data
  i9436.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9437[0], i9436.RenderQueueType)
  i9436.LayerMask = i9437[1]
  var i9439 = i9437[2]
  var i9438 = []
  for(var i = 0; i < i9439.length; i += 1) {
    i9438.push( i9439[i + 0] );
  }
  i9436.PassNames = i9438
  return i9436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i9440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i9441 = data
  i9440.overrideStencilState = !!i9441[0]
  i9440.stencilReference = i9441[1]
  i9440.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9441[2], i9440.stencilCompareFunctionValue)
  i9440.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9441[3], i9440.passOperationValue)
  i9440.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9441[4], i9440.failOperationValue)
  i9440.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i9441[5], i9440.zFailOperationValue)
  return i9440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i9442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i9443 = data
  i9442.overrideCamera = !!i9443[0]
  i9442.restoreCamera = !!i9443[1]
  i9442.offset = new pc.Vec4( i9443[2], i9443[3], i9443[4], i9443[5] )
  i9442.cameraFieldOfView = i9443[6]
  return i9442
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[98],"99":[17],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[109],"110":[109],"111":[109],"112":[109],"113":[109],"114":[109],"115":[109],"116":[109],"117":[109],"118":[109],"119":[109],"120":[109],"121":[109],"122":[17],"123":[4],"124":[125],"126":[125],"23":[24],"65":[24],"127":[17],"29":[17],"31":[30],"128":[24],"129":[4,24],"39":[24,35],"130":[24],"131":[35,24],"132":[4],"133":[35,24],"134":[24],"135":[24],"136":[24],"34":[23],"36":[35,24],"137":[24],"33":[23],"46":[24],"138":[24],"72":[24],"139":[24],"51":[24],"140":[24],"45":[24],"54":[24],"141":[24],"142":[35,24],"143":[24],"53":[24],"50":[24],"144":[24],"49":[35,24],"58":[24],"145":[41],"146":[41],"42":[41],"147":[41],"148":[17],"149":[17]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Source.Game.HexMerge.HexTileView","Source.Game.HexMerge.TileCollapseVfxView","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","HexGame","HexBoardSetupConfig","HexDraggableStackSequenceConfig","Source.Game.HexMerge.HexGamePresenter","HexColorPaletteConfig","UnityEngine.Camera","UnityEngine.GameObject","Source.Game.HexMerge.HexGameFinishedView","UnityEngine.AudioSource","UnityEngine.AudioClip","Source.Game.HexMerge.HexDragTutorialController","UnityEngine.Canvas","UnityEngine.RectTransform","HexDragTutorialConfig","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.buildID = "c56711c1-2906-4348-9d3a-b9b49e63d4df";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Tweens","Core","TweenEngine","Initialize"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

