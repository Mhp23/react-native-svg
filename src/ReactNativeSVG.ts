import Svg from './elements/Svg';

export {default as Shape} from './elements/Shape';
export {default as Rect} from './elements/Rect';
export {default as Circle} from './elements/Circle';
export {default as Ellipse} from './elements/Ellipse';
export {default as Polygon} from './elements/Polygon';
export {default as Polyline} from './elements/Polyline';
export {default as Line} from './elements/Line';
export {default as Path} from './elements/Path';
export {default as G} from './elements/G';
export {default as Text} from './elements/Text';
export {default as TSpan} from './elements/TSpan';
export {default as TextPath} from './elements/TextPath';
export {default as Use} from './elements/Use';
export {default as Image} from './elements/Image';
export {default as Symbol} from './elements/Symbol';
export {default as Defs} from './elements/Defs';
export {default as LinearGradient} from './elements/LinearGradient';
export {default as RadialGradient} from './elements/RadialGradient';
export {default as Stop} from './elements/Stop';
export {default as ClipPath} from './elements/ClipPath';
export {default as Pattern} from './elements/Pattern';
export {default as Mask} from './elements/Mask';
export {default as Marker} from './elements/Marker';
export {default as ForeignObject} from './elements/ForeignObject';

export {parse, SvgAst, SvgFromUri, SvgFromXml, SvgUri, SvgXml} from './xml';

export {
  SvgCss,
  SvgCssUri,
  SvgWithCss,
  SvgWithCssUri,
  inlineStyles,
} from './css';

export {LocalSvg, WithLocalSvg, loadLocalRawResource} from './LocalSvg';

export {
  RNSVGCircle,
  RNSVGClipPath,
  RNSVGDefs,
  RNSVGEllipse,
  RNSVGForeignObject,
  RNSVGGroup,
  RNSVGImage,
  RNSVGLine,
  RNSVGLinearGradient,
  RNSVGMarker,
  RNSVGMask,
  RNSVGPath,
  RNSVGPattern,
  RNSVGRadialGradient,
  RNSVGRect,
  RNSVGSvgAndroid,
  RNSVGSvgIOS,
  RNSVGSymbol,
  RNSVGText,
  RNSVGTextPath,
  RNSVGTSpan,
  RNSVGUse,
} from './fabric';

export type {RectProps} from './elements/Rect';
export type {CircleProps} from './elements/Circle';
export type {EllipseProps} from './elements/Ellipse';
export type {PolygonProps} from './elements/Polygon';
export type {PolylineProps} from './elements/Polyline';
export type {LineProps} from './elements/Line';
export type {SvgProps} from './elements/Svg';
export type {PathProps} from './elements/Path';
export type {GProps} from './elements/G';
export type {TextProps} from './elements/Text';
export type {TSpanProps} from './elements/TSpan';
export type {TextPathProps} from './elements/TextPath';
export type {UseProps} from './elements/Use';
export type {ImageProps} from './elements/Image';
export type {SymbolProps} from './elements/Symbol';
export type {LinearGradientProps} from './elements/LinearGradient';
export type {RadialGradientProps} from './elements/RadialGradient';
export type {StopProps} from './elements/Stop';
export type {ClipPathProps} from './elements/ClipPath';
export type {PatternProps} from './elements/Pattern';
export type {MaskProps} from './elements/Mask';
export type {MarkerProps} from './elements/Marker';
export type {ForeignObjectProps} from './elements/ForeignObject';
export type {LocalProps} from './LocalSvg';
export type {UriProps, XmlProps, AstProps} from './xml';

export type * from './lib/extract/types';

export default Svg;
