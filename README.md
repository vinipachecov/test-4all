# test-4all

Esse aplicativo foi desenhado para resolver o teste enviado pela 4All. 
Foram cobertas as features e utilizado filosofia flux com redux para 
gerenciamento do estado da aplicação e isolar as chamadas assíncronas 
das outras partes do código por meio da lib redux-saga.


## Plataformas

O app foi testado em celulares android apenas.

## Testes

Foram feitos testes unitários para cobrir o básico do funcionamento
da aplicação utilizando a lib enzyme.

## Rodando

Caso ocorra algum problema durante a build relacionado a classPaths e a 
support library do Android faça o work around sugerido da comunidade da lib react-native-maps.

Altere o arquivo no caminho: "node_modules / react-native-maps / lib / android / build.gradle"
```
dependencies {
  def googlePlayServicesVersion = safeExtGet('googlePlayServicesVersion', DEFAULT_GOOGLE_PLAY_SERVICES_VERSION)
  // Variable lookup order : googlePlayServicesMapsVersion > googlePlayServicesVersion > DEFAULT_GOOGLE_PLAY_SERVICES_MAPS_VERSION
  def googlePlayServicesMapsVersion = safeExtGet('googlePlayServicesMapsVersion', safeExtGet('googlePlayServicesVersion', DEFAULT_GOOGLE_PLAY_SERVICES_MAPS_VERSION))
  def androidMapsUtilsVersion = safeExtGet('androidMapsUtilsVersion', DEFAULT_ANDROID_MAPS_UTILS_VERSION)

  compileOnly "com.facebook.react:react-native:+"
  implementation "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
  implementation "com.google.android.gms:play-services-maps:$googlePlayServicesMapsVersion"
  implementation "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"

  // ⬇️This line made Gradle sync successfully ******
  implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
}
```

