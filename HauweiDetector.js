//you can find more device models on GSM Arena: https://www.gsmarena.com/huawei-phones-58.php
const MODELS_REGEX =
  /ALP-|AMN-|ARS-|ANE-|BAC-|BLA-|CAG-|CAM-|CAN-|CAZ-|CDL-|CLT-|CRO-|EVE-|RUNE-|BAL-|AND-|BNE-|DCO-|CET-|CHA-|GOT-|GLA-|NCO-|BAH4-|PAL-|ODN-|FRG-|MLY-|Ags3K-|AGS5-|MGA-|ABR-|JLN-|JuliaQN-|RMX2190-|FIO-|JSC-|WKG-|Wukong-|MLD-|MIL-|RTE-|Hebe-|NAM-|ANG-|JAD-|CHL-|NEN-|NOH-|OCE-|TET-|WGR-|MRR-|DBY-|BRQ-|AGRK-|ANA-|PPA-|NOP-|VID-|LIO-|BAH3-|FRL-|SCMR-|AGS3-|NIK-|DVC-|AQM-|CDY-|Kobe2-|KOB2-|MED-|DRA-|JER-|JEF-|HCT-|ELS-|ART-|JNY-|TAH-|WLZ-|MRX-|TAS-|LTN-|DAN-|LEM-|FGD-|XYAO-|BON-|CLB-|ALN-|ARA-|PNX-|ALT-|BRA-|DBY2-|STG-|MDS-|ARC-|GOA-|FOA-|MNA-|LNA-|DBR-/i;

function isHuaweiBrowser() {
  //todo: add safety tests
  const userAgent = navigator.userAgent;
  return /Huawei/i.test(userAgent);
}

function isHuaweiAndroidPhone() {
  //todo: add safety tests
  const userAgent = navigator.userAgent;
  const isAndroid = /Android/i.test(userAgent);
  if (isAndroid) {
    return MODELS_REGEX.test(navigator.userAgent);
  }
  return false;
}
