var VersionNumber = "v 1.1.0 - offline";
var CustomColors = false;
var HideSerial = true;
var CustomNames = false;
// if BackupSamples is set to true, it will save the sounds. disabling this creates quick project backups.
// this is now set in the GUI. no need to manually set.
var BackupSamples = true;

// set EnableHMLS to true if you want a new menu option to restore custom sounds
var EnableHMLS = false;
var OptionsDistance = 72
if (EnableHMLS == true) {OptionsDistance = 55};

var TempSku;

// COLORS
var ColorOriginalOrange = "#EF4E34";
var ColorSound = "#FF00E0";
var ColorSpeaker = "#b3a1b7";
var ColorBackupRestoreBtn = ColorSound;
var ColorBatteryCover = "#d6dae4";
var ColorEPFace = "#9496a5";
var ColorStartKnob = "#6b6f90";
var ColorEndKnob = "#3f2e41";
var ColorButtons = "#ef4e27";
var ColorButtons2 = "#000000";
var ColorGrid = "#c7be8b";

var ColorMain = "#b18fb1";
var ColorSecondary = "#a282a8";
var ColorTertiary = "#96abde";
var ColorSlate = "#dbdddb";
var ColorCharcoal = "#232424";
var ColorLightCharcoal = "#b0babe";
var ColorLightGray = "#dcdcdc";
var ColorBlack = "#000000"
var Color0 = "#8c959f";
var ColorMarker0 = Color0;
var Color1 = "#82c9ec";
var ColorMarker1 = Color1;
var Color2 = "#82ec88";
var ColorMarker2 = Color2;
var Color3 = "#faff4a";
var ColorMarker3 = Color3;
var Color4 = "#47f3e3";
var ColorMarker4 = Color4;
var Color5 = "#f45050";
var ColorMarker5 = Color5;
var Color6 = "#a475f9";
var ColorMarker6 = Color6;
var Color7 = "#ee86e6";
var ColorMarker7 = Color7;
var Color8 = "#ffaa00";
var ColorMarker8 = Color8;
var Color9 = "#b88552";
var ColorMarker9 = Color9;

var FontColorLight = "#e5e6e6";
var FontColorDark = "#000000";
var FontColorLogo1 = "#FF0000";
var FontColorLogo2 = ColorSound;

// NAMES
var Bank0 = "Bank 0";
var Bank1 = "Bank 1";
var Bank2 = "Bank 2";
var Bank3 = "Bank 3";
var Bank4 = "Bank 4";
var Bank5 = "Bank 5";
var Bank6 = "Bank 6";
var Bank7 = "Bank 7";
var Bank8 = "Bank 8";
var Bank9 = "Bank 9";
var StartIn = "ST";
var EndOut = "END";
var LibraryTitle = "EP-133 Library";
var FakeSerial = "EP-133"

// SET ORIGINAL NAMES BACK IF USER DOESN'T WANT CUSTOM NAMES
if (CustomNames == false) {
  Bank0 = "KICK";
  Bank1 = "SNARE";
  Bank2 = "CYMB";
  Bank3 = "PERC";
  Bank4 = "BASS";
  Bank5 = "MELOD";
  Bank6 = "LOOP";
  Bank7 = "USER 1";
  Bank8 = "USER 2";
  Bank9 = "SFX";
  StartIn = "IN";
  EndOut = "OUT";
  LibraryTitle = "SAMPLE LIBRARY";
  FakeSerial = null
  if (HideSerial == true) {FakeSerial = "EP-133"};
};
const changeEndianness = (string) => {
  const result = [];
  let len = string.length - 2;
  while (len >= 0) {
    result.push(string.substr(len, 2));
    len -= 2;
  }
  return result.join('');
}
if (CustomColors == false) {
  ColorMain = ColorOriginalOrange;
  ColorSound = "#00a69c";
  ColorSpeaker = ColorLightCharcoal;
  ColorBatteryCover = ColorSlate;
  ColorEPFace = ColorLightCharcoal;
  ColorStartKnob = ColorOriginalOrange;
  ColorEndKnob = ColorCharcoal;
  ColorBackupRestoreBtn = ColorSound;
  ColorButtons = "#ef4e27";
  ColorSecondary = ColorSpeaker;
  ColorTertiary = "#dbdddb";
  Color0 = ColorLightGray;
  Color1 = ColorLightGray;
  Color2 = ColorLightGray;
  Color3 = ColorLightGray;
  Color4 = ColorLightGray;
  Color5 = ColorLightGray;
  Color6 = ColorLightGray;
  Color7 = ColorLightCharcoal;
  Color8 = ColorLightCharcoal;
  Color9 = "#000000";
  ColorMarker0 = ColorOriginalOrange;
  ColorMarker1 = ColorOriginalOrange;
  ColorMarker2 = ColorOriginalOrange;
  ColorMarker3 = ColorOriginalOrange;
  ColorMarker4 = ColorOriginalOrange;
  ColorMarker5 = ColorOriginalOrange;
  ColorMarker6 = ColorOriginalOrange;
  ColorMarker7 = ColorOriginalOrange;
  ColorMarker8 = ColorOriginalOrange;
  ColorMarker9 = ColorOriginalOrange;
  ColorGrid = "#4f4059";
  FontColorLight = "#e5e6e6";
  FontColorDark = "#000000";
  FontColorLogo1 = "#000000";
  FontColorLogo2 = ColorButtons;
};
