export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type WorkJson */
  childrenWorkJson?: Maybe<Array<Maybe<WorkJson>>>;
  /** Returns the first child node of type WorkJson or null if there are no children of given type on this node */
  childWorkJson?: Maybe<WorkJson>;
  /** Returns all children nodes filtered by type SkillsJson */
  childrenSkillsJson?: Maybe<Array<Maybe<SkillsJson>>>;
  /** Returns the first child node of type SkillsJson or null if there are no children of given type on this node */
  childSkillsJson?: Maybe<SkillsJson>;
  /** Returns all children nodes filtered by type SeJson */
  childrenSeJson?: Maybe<Array<Maybe<SeJson>>>;
  /** Returns the first child node of type SeJson or null if there are no children of given type on this node */
  childSeJson?: Maybe<SeJson>;
  /** Returns all children nodes filtered by type RuJson */
  childrenRuJson?: Maybe<Array<Maybe<RuJson>>>;
  /** Returns the first child node of type RuJson or null if there are no children of given type on this node */
  childRuJson?: Maybe<RuJson>;
  /** Returns all children nodes filtered by type Locale */
  childrenLocale?: Maybe<Array<Maybe<Locale>>>;
  /** Returns the first child node of type Locale or null if there are no children of given type on this node */
  childLocale?: Maybe<Locale>;
  /** Returns all children nodes filtered by type HuJson */
  childrenHuJson?: Maybe<Array<Maybe<HuJson>>>;
  /** Returns the first child node of type HuJson or null if there are no children of given type on this node */
  childHuJson?: Maybe<HuJson>;
  /** Returns all children nodes filtered by type FrJson */
  childrenFrJson?: Maybe<Array<Maybe<FrJson>>>;
  /** Returns the first child node of type FrJson or null if there are no children of given type on this node */
  childFrJson?: Maybe<FrJson>;
  /** Returns all children nodes filtered by type FlagsJson */
  childrenFlagsJson?: Maybe<Array<Maybe<FlagsJson>>>;
  /** Returns the first child node of type FlagsJson or null if there are no children of given type on this node */
  childFlagsJson?: Maybe<FlagsJson>;
  /** Returns all children nodes filtered by type EtJson */
  childrenEtJson?: Maybe<Array<Maybe<EtJson>>>;
  /** Returns the first child node of type EtJson or null if there are no children of given type on this node */
  childEtJson?: Maybe<EtJson>;
  /** Returns all children nodes filtered by type EsJson */
  childrenEsJson?: Maybe<Array<Maybe<EsJson>>>;
  /** Returns the first child node of type EsJson or null if there are no children of given type on this node */
  childEsJson?: Maybe<EsJson>;
  /** Returns all children nodes filtered by type EnJson */
  childrenEnJson?: Maybe<Array<Maybe<EnJson>>>;
  /** Returns the first child node of type EnJson or null if there are no children of given type on this node */
  childEnJson?: Maybe<EnJson>;
  /** Returns all children nodes filtered by type EducationJson */
  childrenEducationJson?: Maybe<Array<Maybe<EducationJson>>>;
  /** Returns the first child node of type EducationJson or null if there are no children of given type on this node */
  childEducationJson?: Maybe<EducationJson>;
  /** Returns all children nodes filtered by type DeJson */
  childrenDeJson?: Maybe<Array<Maybe<DeJson>>>;
  /** Returns the first child node of type DeJson or null if there are no children of given type on this node */
  childDeJson?: Maybe<DeJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type DevArticles = Node & {
  id: Scalars['ID'];
  article?: Maybe<Article>;
  featuredImg?: Maybe<File>;
  fields?: Maybe<DevArticlesFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DevArticlesFields = {
  featuredImg?: Maybe<Scalars['String']>;
};

export type Article = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  cover_image?: Maybe<Scalars['String']>;
  social_image?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  positive_reactions_count?: Maybe<Scalars['Int']>;
  type_of?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  readable_publish_date?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  comments_count?: Maybe<Scalars['Int']>;
  public_reactions_count?: Maybe<Scalars['Int']>;
  published_timestamp?: Maybe<Scalars['Date']>;
  canonical_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  edited_at?: Maybe<Scalars['Date']>;
  last_comment_at?: Maybe<Scalars['Date']>;
  reading_time_minutes?: Maybe<Scalars['Int']>;
  tag_list?: Maybe<Scalars['String']>;
  user?: Maybe<DevArticlesArticleUser>;
  body_html?: Maybe<Scalars['String']>;
  body_markdown?: Maybe<Scalars['String']>;
};


export type ArticlePublished_AtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ArticlePublished_TimestampArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ArticleCreated_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ArticleEdited_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ArticleLast_Comment_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DevArticlesArticleUser = {
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  github_username?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  profile_image_90?: Maybe<Scalars['String']>;
};

export type WorkJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  location?: Maybe<Scalars['String']>;
  locationFlag?: Maybe<File>;
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  dates?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SkillsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  skillItems?: Maybe<Array<Maybe<SkillsJsonSkillItems>>>;
};

export type SkillsJsonSkillItems = {
  name?: Maybe<Scalars['String']>;
  src?: Maybe<File>;
  extra?: Maybe<Scalars['String']>;
  subSkills?: Maybe<Array<Maybe<SkillsJsonSkillItemsSubSkills>>>;
  href?: Maybe<Scalars['String']>;
};

export type SkillsJsonSkillItemsSubSkills = {
  name?: Maybe<Scalars['String']>;
  src?: Maybe<File>;
  href?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  subSkills?: Maybe<Array<Maybe<SkillsJsonSkillItemsSubSkillsSubSkills>>>;
};

export type SkillsJsonSkillItemsSubSkillsSubSkills = {
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  src?: Maybe<File>;
};

export type SeJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Banner?: Maybe<SeJsonBanner>;
};

export type SeJsonBanner = {
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type RuJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  About?: Maybe<RuJsonAbout>;
  Acknowledgements?: Maybe<Scalars['String']>;
  Banner?: Maybe<RuJsonBanner>;
  Blog?: Maybe<RuJsonBlog>;
  Contact?: Maybe<RuJsonContact>;
  Education?: Maybe<RuJsonEducation>;
  Experience?: Maybe<RuJsonExperience>;
  PageLinks?: Maybe<RuJsonPageLinks>;
  SectionButtons?: Maybe<RuJsonSectionButtons>;
  Skills?: Maybe<RuJsonSkills>;
  Work?: Maybe<RuJsonWork>;
};

export type RuJsonAbout = {
  AboutMe?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  PhotoDescription?: Maybe<Scalars['String']>;
  ViewCV?: Maybe<Scalars['String']>;
};

export type RuJsonBanner = {
  DexterSibirtsev?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  HelloIAmAProgrammer?: Maybe<Scalars['String']>;
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type RuJsonBlog = {
  Blog?: Maybe<Scalars['String']>;
};

export type RuJsonContact = {
  Contact?: Maybe<Scalars['String']>;
  GetInTouch?: Maybe<Scalars['String']>;
  SendEmail?: Maybe<Scalars['String']>;
};

export type RuJsonEducation = {
  Description?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
};

export type RuJsonExperience = {
  TranslationsUnderConstruction?: Maybe<Scalars['String']>;
};

export type RuJsonPageLinks = {
  Acknowledgements?: Maybe<Scalars['String']>;
  Home?: Maybe<Scalars['String']>;
};

export type RuJsonSectionButtons = {
  About?: Maybe<Scalars['String']>;
  Blog?: Maybe<Scalars['String']>;
  Contact?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type RuJsonSkills = {
  Overview?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type RuJsonWork = {
  Work?: Maybe<Scalars['String']>;
};

export type Locale = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  ns?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
};

export type HuJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  About?: Maybe<HuJsonAbout>;
  Acknowledgements?: Maybe<Scalars['String']>;
  Banner?: Maybe<HuJsonBanner>;
  Blog?: Maybe<HuJsonBlog>;
  Contact?: Maybe<HuJsonContact>;
  Education?: Maybe<HuJsonEducation>;
  Experience?: Maybe<HuJsonExperience>;
  PageLinks?: Maybe<HuJsonPageLinks>;
  SectionButtons?: Maybe<HuJsonSectionButtons>;
  Skills?: Maybe<HuJsonSkills>;
  Work?: Maybe<HuJsonWork>;
};

export type HuJsonAbout = {
  AboutMe?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  PhotoDescription?: Maybe<Scalars['String']>;
  ViewCV?: Maybe<Scalars['String']>;
};

export type HuJsonBanner = {
  DexterSibirtsev?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  HelloIAmAProgrammer?: Maybe<Scalars['String']>;
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type HuJsonBlog = {
  Blog?: Maybe<Scalars['String']>;
};

export type HuJsonContact = {
  Contact?: Maybe<Scalars['String']>;
  GetInTouch?: Maybe<Scalars['String']>;
  SendEmail?: Maybe<Scalars['String']>;
};

export type HuJsonEducation = {
  Description?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
};

export type HuJsonExperience = {
  TranslationsUnderConstruction?: Maybe<Scalars['String']>;
};

export type HuJsonPageLinks = {
  Acknowledgements?: Maybe<Scalars['String']>;
  Home?: Maybe<Scalars['String']>;
};

export type HuJsonSectionButtons = {
  About?: Maybe<Scalars['String']>;
  Blog?: Maybe<Scalars['String']>;
  Contact?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type HuJsonSkills = {
  Overview?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type HuJsonWork = {
  Work?: Maybe<Scalars['String']>;
};

export type FrJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  About?: Maybe<FrJsonAbout>;
  Acknowledgements?: Maybe<Scalars['String']>;
  Banner?: Maybe<FrJsonBanner>;
  Blog?: Maybe<FrJsonBlog>;
  Contact?: Maybe<FrJsonContact>;
  Education?: Maybe<FrJsonEducation>;
  Experience?: Maybe<FrJsonExperience>;
  PageLinks?: Maybe<FrJsonPageLinks>;
  SectionButtons?: Maybe<FrJsonSectionButtons>;
  Skills?: Maybe<FrJsonSkills>;
  Work?: Maybe<FrJsonWork>;
};

export type FrJsonAbout = {
  AboutMe?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  PhotoDescription?: Maybe<Scalars['String']>;
  ViewCV?: Maybe<Scalars['String']>;
};

export type FrJsonBanner = {
  DexterSibirtsev?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  HelloIAmAProgrammer?: Maybe<Scalars['String']>;
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type FrJsonBlog = {
  Blog?: Maybe<Scalars['String']>;
};

export type FrJsonContact = {
  Contact?: Maybe<Scalars['String']>;
  GetInTouch?: Maybe<Scalars['String']>;
  SendEmail?: Maybe<Scalars['String']>;
};

export type FrJsonEducation = {
  Description?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
};

export type FrJsonExperience = {
  TranslationsUnderConstruction?: Maybe<Scalars['String']>;
};

export type FrJsonPageLinks = {
  Acknowledgements?: Maybe<Scalars['String']>;
  Home?: Maybe<Scalars['String']>;
};

export type FrJsonSectionButtons = {
  About?: Maybe<Scalars['String']>;
  Blog?: Maybe<Scalars['String']>;
  Contact?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type FrJsonSkills = {
  Overview?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type FrJsonWork = {
  Work?: Maybe<Scalars['String']>;
};

export type FlagsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  src?: Maybe<File>;
};

export type EtJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  About?: Maybe<EtJsonAbout>;
  Acknowledgements?: Maybe<Scalars['String']>;
  Banner?: Maybe<EtJsonBanner>;
  Blog?: Maybe<EtJsonBlog>;
  Contact?: Maybe<EtJsonContact>;
  Education?: Maybe<EtJsonEducation>;
  Experience?: Maybe<EtJsonExperience>;
  PageLinks?: Maybe<EtJsonPageLinks>;
  SectionButtons?: Maybe<EtJsonSectionButtons>;
  Skills?: Maybe<EtJsonSkills>;
  Work?: Maybe<EtJsonWork>;
};

export type EtJsonAbout = {
  AboutMe?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  PhotoDescription?: Maybe<Scalars['String']>;
  ViewCV?: Maybe<Scalars['String']>;
};

export type EtJsonBanner = {
  DexterSibirtsev?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  HelloIAmAProgrammer?: Maybe<Scalars['String']>;
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type EtJsonBlog = {
  Blog?: Maybe<Scalars['String']>;
};

export type EtJsonContact = {
  Contact?: Maybe<Scalars['String']>;
  GetInTouch?: Maybe<Scalars['String']>;
  SendEmail?: Maybe<Scalars['String']>;
};

export type EtJsonEducation = {
  Description?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
};

export type EtJsonExperience = {
  TranslationsUnderConstruction?: Maybe<Scalars['String']>;
};

export type EtJsonPageLinks = {
  Acknowledgements?: Maybe<Scalars['String']>;
  Home?: Maybe<Scalars['String']>;
};

export type EtJsonSectionButtons = {
  About?: Maybe<Scalars['String']>;
  Blog?: Maybe<Scalars['String']>;
  Contact?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type EtJsonSkills = {
  Overview?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type EtJsonWork = {
  Work?: Maybe<Scalars['String']>;
};

export type EsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  About?: Maybe<EsJsonAbout>;
  Acknowledgements?: Maybe<Scalars['String']>;
  Banner?: Maybe<EsJsonBanner>;
  Blog?: Maybe<EsJsonBlog>;
  Contact?: Maybe<EsJsonContact>;
  Education?: Maybe<EsJsonEducation>;
  Experience?: Maybe<EsJsonExperience>;
  PageLinks?: Maybe<EsJsonPageLinks>;
  SectionButtons?: Maybe<EsJsonSectionButtons>;
  Skills?: Maybe<EsJsonSkills>;
  Work?: Maybe<EsJsonWork>;
};

export type EsJsonAbout = {
  AboutMe?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  PhotoDescription?: Maybe<Scalars['String']>;
  ViewCV?: Maybe<Scalars['String']>;
};

export type EsJsonBanner = {
  DexterSibirtsev?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  HelloIAmAProgrammer?: Maybe<Scalars['String']>;
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type EsJsonBlog = {
  Blog?: Maybe<Scalars['String']>;
};

export type EsJsonContact = {
  Contact?: Maybe<Scalars['String']>;
  GetInTouch?: Maybe<Scalars['String']>;
  SendEmail?: Maybe<Scalars['String']>;
};

export type EsJsonEducation = {
  Description?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
};

export type EsJsonExperience = {
  TranslationsUnderConstruction?: Maybe<Scalars['String']>;
};

export type EsJsonPageLinks = {
  Acknowledgements?: Maybe<Scalars['String']>;
  Home?: Maybe<Scalars['String']>;
};

export type EsJsonSectionButtons = {
  About?: Maybe<Scalars['String']>;
  Blog?: Maybe<Scalars['String']>;
  Contact?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type EsJsonSkills = {
  Overview?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type EsJsonWork = {
  Work?: Maybe<Scalars['String']>;
};

export type EnJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  About?: Maybe<EnJsonAbout>;
  Acknowledgements?: Maybe<Scalars['String']>;
  Banner?: Maybe<EnJsonBanner>;
  Blog?: Maybe<EnJsonBlog>;
  Contact?: Maybe<EnJsonContact>;
  Education?: Maybe<EnJsonEducation>;
  Experience?: Maybe<EnJsonExperience>;
  PageLinks?: Maybe<EnJsonPageLinks>;
  SectionButtons?: Maybe<EnJsonSectionButtons>;
  Skills?: Maybe<EnJsonSkills>;
  Work?: Maybe<EnJsonWork>;
};

export type EnJsonAbout = {
  AboutMe?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  PhotoDescription?: Maybe<Scalars['String']>;
  ViewCV?: Maybe<Scalars['String']>;
};

export type EnJsonBanner = {
  DexterSibirtsev?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  HelloIAmAProgrammer?: Maybe<Scalars['String']>;
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type EnJsonBlog = {
  Blog?: Maybe<Scalars['String']>;
};

export type EnJsonContact = {
  Contact?: Maybe<Scalars['String']>;
  GetInTouch?: Maybe<Scalars['String']>;
  SendEmail?: Maybe<Scalars['String']>;
};

export type EnJsonEducation = {
  Description?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
};

export type EnJsonExperience = {
  TranslationsUnderConstruction?: Maybe<Scalars['String']>;
};

export type EnJsonPageLinks = {
  Acknowledgements?: Maybe<Scalars['String']>;
  Home?: Maybe<Scalars['String']>;
};

export type EnJsonSectionButtons = {
  About?: Maybe<Scalars['String']>;
  Blog?: Maybe<Scalars['String']>;
  Contact?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type EnJsonSkills = {
  Overview?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
};

export type EnJsonWork = {
  Work?: Maybe<Scalars['String']>;
};

export type EducationJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  location?: Maybe<Scalars['String']>;
  locationFlag?: Maybe<File>;
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  dates?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DeJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Banner?: Maybe<DeJsonBanner>;
};

export type DeJsonBanner = {
  SoftwareDeveloper?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  devArticles?: Maybe<DevArticles>;
  allDevArticles: DevArticlesConnection;
  workJson?: Maybe<WorkJson>;
  allWorkJson: WorkJsonConnection;
  skillsJson?: Maybe<SkillsJson>;
  allSkillsJson: SkillsJsonConnection;
  seJson?: Maybe<SeJson>;
  allSeJson: SeJsonConnection;
  ruJson?: Maybe<RuJson>;
  allRuJson: RuJsonConnection;
  locale?: Maybe<Locale>;
  allLocale: LocaleConnection;
  huJson?: Maybe<HuJson>;
  allHuJson: HuJsonConnection;
  frJson?: Maybe<FrJson>;
  allFrJson: FrJsonConnection;
  flagsJson?: Maybe<FlagsJson>;
  allFlagsJson: FlagsJsonConnection;
  etJson?: Maybe<EtJson>;
  allEtJson: EtJsonConnection;
  esJson?: Maybe<EsJson>;
  allEsJson: EsJsonConnection;
  enJson?: Maybe<EnJson>;
  allEnJson: EnJsonConnection;
  educationJson?: Maybe<EducationJson>;
  allEducationJson: EducationJsonConnection;
  deJson?: Maybe<DeJson>;
  allDeJson: DeJsonConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenWorkJson?: InputMaybe<WorkJsonFilterListInput>;
  childWorkJson?: InputMaybe<WorkJsonFilterInput>;
  childrenSkillsJson?: InputMaybe<SkillsJsonFilterListInput>;
  childSkillsJson?: InputMaybe<SkillsJsonFilterInput>;
  childrenSeJson?: InputMaybe<SeJsonFilterListInput>;
  childSeJson?: InputMaybe<SeJsonFilterInput>;
  childrenRuJson?: InputMaybe<RuJsonFilterListInput>;
  childRuJson?: InputMaybe<RuJsonFilterInput>;
  childrenLocale?: InputMaybe<LocaleFilterListInput>;
  childLocale?: InputMaybe<LocaleFilterInput>;
  childrenHuJson?: InputMaybe<HuJsonFilterListInput>;
  childHuJson?: InputMaybe<HuJsonFilterInput>;
  childrenFrJson?: InputMaybe<FrJsonFilterListInput>;
  childFrJson?: InputMaybe<FrJsonFilterInput>;
  childrenFlagsJson?: InputMaybe<FlagsJsonFilterListInput>;
  childFlagsJson?: InputMaybe<FlagsJsonFilterInput>;
  childrenEtJson?: InputMaybe<EtJsonFilterListInput>;
  childEtJson?: InputMaybe<EtJsonFilterInput>;
  childrenEsJson?: InputMaybe<EsJsonFilterListInput>;
  childEsJson?: InputMaybe<EsJsonFilterInput>;
  childrenEnJson?: InputMaybe<EnJsonFilterListInput>;
  childEnJson?: InputMaybe<EnJsonFilterInput>;
  childrenEducationJson?: InputMaybe<EducationJsonFilterListInput>;
  childEducationJson?: InputMaybe<EducationJsonFilterInput>;
  childrenDeJson?: InputMaybe<DeJsonFilterListInput>;
  childDeJson?: InputMaybe<DeJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDevArticlesArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  article?: InputMaybe<ArticleFilterInput>;
  featuredImg?: InputMaybe<FileFilterInput>;
  fields?: InputMaybe<DevArticlesFieldsFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDevArticlesArgs = {
  filter?: InputMaybe<DevArticlesFilterInput>;
  sort?: InputMaybe<DevArticlesSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<StringQueryOperatorInput>;
  locationFlag?: InputMaybe<FileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<FileFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  dates?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllWorkJsonArgs = {
  filter?: InputMaybe<WorkJsonFilterInput>;
  sort?: InputMaybe<WorkJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySkillsJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  skillItems?: InputMaybe<SkillsJsonSkillItemsFilterListInput>;
};


export type QueryAllSkillsJsonArgs = {
  filter?: InputMaybe<SkillsJsonFilterInput>;
  sort?: InputMaybe<SkillsJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySeJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Banner?: InputMaybe<SeJsonBannerFilterInput>;
};


export type QueryAllSeJsonArgs = {
  filter?: InputMaybe<SeJsonFilterInput>;
  sort?: InputMaybe<SeJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryRuJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<RuJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<RuJsonBannerFilterInput>;
  Blog?: InputMaybe<RuJsonBlogFilterInput>;
  Contact?: InputMaybe<RuJsonContactFilterInput>;
  Education?: InputMaybe<RuJsonEducationFilterInput>;
  Experience?: InputMaybe<RuJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<RuJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<RuJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<RuJsonSkillsFilterInput>;
  Work?: InputMaybe<RuJsonWorkFilterInput>;
};


export type QueryAllRuJsonArgs = {
  filter?: InputMaybe<RuJsonFilterInput>;
  sort?: InputMaybe<RuJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryLocaleArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  ns?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllLocaleArgs = {
  filter?: InputMaybe<LocaleFilterInput>;
  sort?: InputMaybe<LocaleSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryHuJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<HuJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<HuJsonBannerFilterInput>;
  Blog?: InputMaybe<HuJsonBlogFilterInput>;
  Contact?: InputMaybe<HuJsonContactFilterInput>;
  Education?: InputMaybe<HuJsonEducationFilterInput>;
  Experience?: InputMaybe<HuJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<HuJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<HuJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<HuJsonSkillsFilterInput>;
  Work?: InputMaybe<HuJsonWorkFilterInput>;
};


export type QueryAllHuJsonArgs = {
  filter?: InputMaybe<HuJsonFilterInput>;
  sort?: InputMaybe<HuJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryFrJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<FrJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<FrJsonBannerFilterInput>;
  Blog?: InputMaybe<FrJsonBlogFilterInput>;
  Contact?: InputMaybe<FrJsonContactFilterInput>;
  Education?: InputMaybe<FrJsonEducationFilterInput>;
  Experience?: InputMaybe<FrJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<FrJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<FrJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<FrJsonSkillsFilterInput>;
  Work?: InputMaybe<FrJsonWorkFilterInput>;
};


export type QueryAllFrJsonArgs = {
  filter?: InputMaybe<FrJsonFilterInput>;
  sort?: InputMaybe<FrJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryFlagsJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  code?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<FileFilterInput>;
};


export type QueryAllFlagsJsonArgs = {
  filter?: InputMaybe<FlagsJsonFilterInput>;
  sort?: InputMaybe<FlagsJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryEtJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<EtJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<EtJsonBannerFilterInput>;
  Blog?: InputMaybe<EtJsonBlogFilterInput>;
  Contact?: InputMaybe<EtJsonContactFilterInput>;
  Education?: InputMaybe<EtJsonEducationFilterInput>;
  Experience?: InputMaybe<EtJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<EtJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<EtJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<EtJsonSkillsFilterInput>;
  Work?: InputMaybe<EtJsonWorkFilterInput>;
};


export type QueryAllEtJsonArgs = {
  filter?: InputMaybe<EtJsonFilterInput>;
  sort?: InputMaybe<EtJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryEsJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<EsJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<EsJsonBannerFilterInput>;
  Blog?: InputMaybe<EsJsonBlogFilterInput>;
  Contact?: InputMaybe<EsJsonContactFilterInput>;
  Education?: InputMaybe<EsJsonEducationFilterInput>;
  Experience?: InputMaybe<EsJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<EsJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<EsJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<EsJsonSkillsFilterInput>;
  Work?: InputMaybe<EsJsonWorkFilterInput>;
};


export type QueryAllEsJsonArgs = {
  filter?: InputMaybe<EsJsonFilterInput>;
  sort?: InputMaybe<EsJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryEnJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<EnJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<EnJsonBannerFilterInput>;
  Blog?: InputMaybe<EnJsonBlogFilterInput>;
  Contact?: InputMaybe<EnJsonContactFilterInput>;
  Education?: InputMaybe<EnJsonEducationFilterInput>;
  Experience?: InputMaybe<EnJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<EnJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<EnJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<EnJsonSkillsFilterInput>;
  Work?: InputMaybe<EnJsonWorkFilterInput>;
};


export type QueryAllEnJsonArgs = {
  filter?: InputMaybe<EnJsonFilterInput>;
  sort?: InputMaybe<EnJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryEducationJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<StringQueryOperatorInput>;
  locationFlag?: InputMaybe<FileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<FileFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  dates?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllEducationJsonArgs = {
  filter?: InputMaybe<EducationJsonFilterInput>;
  sort?: InputMaybe<EducationJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDeJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Banner?: InputMaybe<DeJsonBannerFilterInput>;
};


export type QueryAllDeJsonArgs = {
  filter?: InputMaybe<DeJsonFilterInput>;
  sort?: InputMaybe<DeJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type WorkJsonFilterListInput = {
  elemMatch?: InputMaybe<WorkJsonFilterInput>;
};

export type WorkJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<StringQueryOperatorInput>;
  locationFlag?: InputMaybe<FileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<FileFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  dates?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenWorkJson?: InputMaybe<WorkJsonFilterListInput>;
  childWorkJson?: InputMaybe<WorkJsonFilterInput>;
  childrenSkillsJson?: InputMaybe<SkillsJsonFilterListInput>;
  childSkillsJson?: InputMaybe<SkillsJsonFilterInput>;
  childrenSeJson?: InputMaybe<SeJsonFilterListInput>;
  childSeJson?: InputMaybe<SeJsonFilterInput>;
  childrenRuJson?: InputMaybe<RuJsonFilterListInput>;
  childRuJson?: InputMaybe<RuJsonFilterInput>;
  childrenLocale?: InputMaybe<LocaleFilterListInput>;
  childLocale?: InputMaybe<LocaleFilterInput>;
  childrenHuJson?: InputMaybe<HuJsonFilterListInput>;
  childHuJson?: InputMaybe<HuJsonFilterInput>;
  childrenFrJson?: InputMaybe<FrJsonFilterListInput>;
  childFrJson?: InputMaybe<FrJsonFilterInput>;
  childrenFlagsJson?: InputMaybe<FlagsJsonFilterListInput>;
  childFlagsJson?: InputMaybe<FlagsJsonFilterInput>;
  childrenEtJson?: InputMaybe<EtJsonFilterListInput>;
  childEtJson?: InputMaybe<EtJsonFilterInput>;
  childrenEsJson?: InputMaybe<EsJsonFilterListInput>;
  childEsJson?: InputMaybe<EsJsonFilterInput>;
  childrenEnJson?: InputMaybe<EnJsonFilterListInput>;
  childEnJson?: InputMaybe<EnJsonFilterInput>;
  childrenEducationJson?: InputMaybe<EducationJsonFilterListInput>;
  childEducationJson?: InputMaybe<EducationJsonFilterInput>;
  childrenDeJson?: InputMaybe<DeJsonFilterListInput>;
  childDeJson?: InputMaybe<DeJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SkillsJsonFilterListInput = {
  elemMatch?: InputMaybe<SkillsJsonFilterInput>;
};

export type SkillsJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  skillItems?: InputMaybe<SkillsJsonSkillItemsFilterListInput>;
};

export type SkillsJsonSkillItemsFilterListInput = {
  elemMatch?: InputMaybe<SkillsJsonSkillItemsFilterInput>;
};

export type SkillsJsonSkillItemsFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<FileFilterInput>;
  extra?: InputMaybe<StringQueryOperatorInput>;
  subSkills?: InputMaybe<SkillsJsonSkillItemsSubSkillsFilterListInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
};

export type SkillsJsonSkillItemsSubSkillsFilterListInput = {
  elemMatch?: InputMaybe<SkillsJsonSkillItemsSubSkillsFilterInput>;
};

export type SkillsJsonSkillItemsSubSkillsFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<FileFilterInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  extra?: InputMaybe<StringQueryOperatorInput>;
  subSkills?: InputMaybe<SkillsJsonSkillItemsSubSkillsSubSkillsFilterListInput>;
};

export type SkillsJsonSkillItemsSubSkillsSubSkillsFilterListInput = {
  elemMatch?: InputMaybe<SkillsJsonSkillItemsSubSkillsSubSkillsFilterInput>;
};

export type SkillsJsonSkillItemsSubSkillsSubSkillsFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<FileFilterInput>;
};

export type SeJsonFilterListInput = {
  elemMatch?: InputMaybe<SeJsonFilterInput>;
};

export type SeJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Banner?: InputMaybe<SeJsonBannerFilterInput>;
};

export type SeJsonBannerFilterInput = {
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonFilterListInput = {
  elemMatch?: InputMaybe<RuJsonFilterInput>;
};

export type RuJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<RuJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<RuJsonBannerFilterInput>;
  Blog?: InputMaybe<RuJsonBlogFilterInput>;
  Contact?: InputMaybe<RuJsonContactFilterInput>;
  Education?: InputMaybe<RuJsonEducationFilterInput>;
  Experience?: InputMaybe<RuJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<RuJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<RuJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<RuJsonSkillsFilterInput>;
  Work?: InputMaybe<RuJsonWorkFilterInput>;
};

export type RuJsonAboutFilterInput = {
  AboutMe?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  PhotoDescription?: InputMaybe<StringQueryOperatorInput>;
  ViewCV?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonBannerFilterInput = {
  DexterSibirtsev?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  HelloIAmAProgrammer?: InputMaybe<StringQueryOperatorInput>;
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonBlogFilterInput = {
  Blog?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonContactFilterInput = {
  Contact?: InputMaybe<StringQueryOperatorInput>;
  GetInTouch?: InputMaybe<StringQueryOperatorInput>;
  SendEmail?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonEducationFilterInput = {
  Description?: InputMaybe<StringQueryOperatorInput>;
  Education?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonExperienceFilterInput = {
  TranslationsUnderConstruction?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonPageLinksFilterInput = {
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Home?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonSectionButtonsFilterInput = {
  About?: InputMaybe<StringQueryOperatorInput>;
  Blog?: InputMaybe<StringQueryOperatorInput>;
  Contact?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonSkillsFilterInput = {
  Overview?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type RuJsonWorkFilterInput = {
  Work?: InputMaybe<StringQueryOperatorInput>;
};

export type LocaleFilterListInput = {
  elemMatch?: InputMaybe<LocaleFilterInput>;
};

export type LocaleFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  ns?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonFilterListInput = {
  elemMatch?: InputMaybe<HuJsonFilterInput>;
};

export type HuJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<HuJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<HuJsonBannerFilterInput>;
  Blog?: InputMaybe<HuJsonBlogFilterInput>;
  Contact?: InputMaybe<HuJsonContactFilterInput>;
  Education?: InputMaybe<HuJsonEducationFilterInput>;
  Experience?: InputMaybe<HuJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<HuJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<HuJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<HuJsonSkillsFilterInput>;
  Work?: InputMaybe<HuJsonWorkFilterInput>;
};

export type HuJsonAboutFilterInput = {
  AboutMe?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  PhotoDescription?: InputMaybe<StringQueryOperatorInput>;
  ViewCV?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonBannerFilterInput = {
  DexterSibirtsev?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  HelloIAmAProgrammer?: InputMaybe<StringQueryOperatorInput>;
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonBlogFilterInput = {
  Blog?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonContactFilterInput = {
  Contact?: InputMaybe<StringQueryOperatorInput>;
  GetInTouch?: InputMaybe<StringQueryOperatorInput>;
  SendEmail?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonEducationFilterInput = {
  Description?: InputMaybe<StringQueryOperatorInput>;
  Education?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonExperienceFilterInput = {
  TranslationsUnderConstruction?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonPageLinksFilterInput = {
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Home?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonSectionButtonsFilterInput = {
  About?: InputMaybe<StringQueryOperatorInput>;
  Blog?: InputMaybe<StringQueryOperatorInput>;
  Contact?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonSkillsFilterInput = {
  Overview?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type HuJsonWorkFilterInput = {
  Work?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonFilterListInput = {
  elemMatch?: InputMaybe<FrJsonFilterInput>;
};

export type FrJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<FrJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<FrJsonBannerFilterInput>;
  Blog?: InputMaybe<FrJsonBlogFilterInput>;
  Contact?: InputMaybe<FrJsonContactFilterInput>;
  Education?: InputMaybe<FrJsonEducationFilterInput>;
  Experience?: InputMaybe<FrJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<FrJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<FrJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<FrJsonSkillsFilterInput>;
  Work?: InputMaybe<FrJsonWorkFilterInput>;
};

export type FrJsonAboutFilterInput = {
  AboutMe?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  PhotoDescription?: InputMaybe<StringQueryOperatorInput>;
  ViewCV?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonBannerFilterInput = {
  DexterSibirtsev?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  HelloIAmAProgrammer?: InputMaybe<StringQueryOperatorInput>;
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonBlogFilterInput = {
  Blog?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonContactFilterInput = {
  Contact?: InputMaybe<StringQueryOperatorInput>;
  GetInTouch?: InputMaybe<StringQueryOperatorInput>;
  SendEmail?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonEducationFilterInput = {
  Description?: InputMaybe<StringQueryOperatorInput>;
  Education?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonExperienceFilterInput = {
  TranslationsUnderConstruction?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonPageLinksFilterInput = {
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Home?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonSectionButtonsFilterInput = {
  About?: InputMaybe<StringQueryOperatorInput>;
  Blog?: InputMaybe<StringQueryOperatorInput>;
  Contact?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonSkillsFilterInput = {
  Overview?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type FrJsonWorkFilterInput = {
  Work?: InputMaybe<StringQueryOperatorInput>;
};

export type FlagsJsonFilterListInput = {
  elemMatch?: InputMaybe<FlagsJsonFilterInput>;
};

export type FlagsJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  code?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<FileFilterInput>;
};

export type EtJsonFilterListInput = {
  elemMatch?: InputMaybe<EtJsonFilterInput>;
};

export type EtJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<EtJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<EtJsonBannerFilterInput>;
  Blog?: InputMaybe<EtJsonBlogFilterInput>;
  Contact?: InputMaybe<EtJsonContactFilterInput>;
  Education?: InputMaybe<EtJsonEducationFilterInput>;
  Experience?: InputMaybe<EtJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<EtJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<EtJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<EtJsonSkillsFilterInput>;
  Work?: InputMaybe<EtJsonWorkFilterInput>;
};

export type EtJsonAboutFilterInput = {
  AboutMe?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  PhotoDescription?: InputMaybe<StringQueryOperatorInput>;
  ViewCV?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonBannerFilterInput = {
  DexterSibirtsev?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  HelloIAmAProgrammer?: InputMaybe<StringQueryOperatorInput>;
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonBlogFilterInput = {
  Blog?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonContactFilterInput = {
  Contact?: InputMaybe<StringQueryOperatorInput>;
  GetInTouch?: InputMaybe<StringQueryOperatorInput>;
  SendEmail?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonEducationFilterInput = {
  Description?: InputMaybe<StringQueryOperatorInput>;
  Education?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonExperienceFilterInput = {
  TranslationsUnderConstruction?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonPageLinksFilterInput = {
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Home?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonSectionButtonsFilterInput = {
  About?: InputMaybe<StringQueryOperatorInput>;
  Blog?: InputMaybe<StringQueryOperatorInput>;
  Contact?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonSkillsFilterInput = {
  Overview?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type EtJsonWorkFilterInput = {
  Work?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonFilterListInput = {
  elemMatch?: InputMaybe<EsJsonFilterInput>;
};

export type EsJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<EsJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<EsJsonBannerFilterInput>;
  Blog?: InputMaybe<EsJsonBlogFilterInput>;
  Contact?: InputMaybe<EsJsonContactFilterInput>;
  Education?: InputMaybe<EsJsonEducationFilterInput>;
  Experience?: InputMaybe<EsJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<EsJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<EsJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<EsJsonSkillsFilterInput>;
  Work?: InputMaybe<EsJsonWorkFilterInput>;
};

export type EsJsonAboutFilterInput = {
  AboutMe?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  PhotoDescription?: InputMaybe<StringQueryOperatorInput>;
  ViewCV?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonBannerFilterInput = {
  DexterSibirtsev?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  HelloIAmAProgrammer?: InputMaybe<StringQueryOperatorInput>;
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonBlogFilterInput = {
  Blog?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonContactFilterInput = {
  Contact?: InputMaybe<StringQueryOperatorInput>;
  GetInTouch?: InputMaybe<StringQueryOperatorInput>;
  SendEmail?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonEducationFilterInput = {
  Description?: InputMaybe<StringQueryOperatorInput>;
  Education?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonExperienceFilterInput = {
  TranslationsUnderConstruction?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonPageLinksFilterInput = {
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Home?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonSectionButtonsFilterInput = {
  About?: InputMaybe<StringQueryOperatorInput>;
  Blog?: InputMaybe<StringQueryOperatorInput>;
  Contact?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonSkillsFilterInput = {
  Overview?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type EsJsonWorkFilterInput = {
  Work?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonFilterListInput = {
  elemMatch?: InputMaybe<EnJsonFilterInput>;
};

export type EnJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  About?: InputMaybe<EnJsonAboutFilterInput>;
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Banner?: InputMaybe<EnJsonBannerFilterInput>;
  Blog?: InputMaybe<EnJsonBlogFilterInput>;
  Contact?: InputMaybe<EnJsonContactFilterInput>;
  Education?: InputMaybe<EnJsonEducationFilterInput>;
  Experience?: InputMaybe<EnJsonExperienceFilterInput>;
  PageLinks?: InputMaybe<EnJsonPageLinksFilterInput>;
  SectionButtons?: InputMaybe<EnJsonSectionButtonsFilterInput>;
  Skills?: InputMaybe<EnJsonSkillsFilterInput>;
  Work?: InputMaybe<EnJsonWorkFilterInput>;
};

export type EnJsonAboutFilterInput = {
  AboutMe?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  PhotoDescription?: InputMaybe<StringQueryOperatorInput>;
  ViewCV?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonBannerFilterInput = {
  DexterSibirtsev?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  HelloIAmAProgrammer?: InputMaybe<StringQueryOperatorInput>;
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonBlogFilterInput = {
  Blog?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonContactFilterInput = {
  Contact?: InputMaybe<StringQueryOperatorInput>;
  GetInTouch?: InputMaybe<StringQueryOperatorInput>;
  SendEmail?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonEducationFilterInput = {
  Description?: InputMaybe<StringQueryOperatorInput>;
  Education?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonExperienceFilterInput = {
  TranslationsUnderConstruction?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonPageLinksFilterInput = {
  Acknowledgements?: InputMaybe<StringQueryOperatorInput>;
  Home?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonSectionButtonsFilterInput = {
  About?: InputMaybe<StringQueryOperatorInput>;
  Blog?: InputMaybe<StringQueryOperatorInput>;
  Contact?: InputMaybe<StringQueryOperatorInput>;
  Experience?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonSkillsFilterInput = {
  Overview?: InputMaybe<StringQueryOperatorInput>;
  Skills?: InputMaybe<StringQueryOperatorInput>;
};

export type EnJsonWorkFilterInput = {
  Work?: InputMaybe<StringQueryOperatorInput>;
};

export type EducationJsonFilterListInput = {
  elemMatch?: InputMaybe<EducationJsonFilterInput>;
};

export type EducationJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<StringQueryOperatorInput>;
  locationFlag?: InputMaybe<FileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<FileFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  dates?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type DeJsonFilterListInput = {
  elemMatch?: InputMaybe<DeJsonFilterInput>;
};

export type DeJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Banner?: InputMaybe<DeJsonBannerFilterInput>;
};

export type DeJsonBannerFilterInput = {
  SoftwareDeveloper?: InputMaybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenWorkJson'
  | 'childrenWorkJson___id'
  | 'childrenWorkJson___parent___id'
  | 'childrenWorkJson___parent___parent___id'
  | 'childrenWorkJson___parent___parent___children'
  | 'childrenWorkJson___parent___children'
  | 'childrenWorkJson___parent___children___id'
  | 'childrenWorkJson___parent___children___children'
  | 'childrenWorkJson___parent___internal___content'
  | 'childrenWorkJson___parent___internal___contentDigest'
  | 'childrenWorkJson___parent___internal___description'
  | 'childrenWorkJson___parent___internal___fieldOwners'
  | 'childrenWorkJson___parent___internal___ignoreType'
  | 'childrenWorkJson___parent___internal___mediaType'
  | 'childrenWorkJson___parent___internal___owner'
  | 'childrenWorkJson___parent___internal___type'
  | 'childrenWorkJson___children'
  | 'childrenWorkJson___children___id'
  | 'childrenWorkJson___children___parent___id'
  | 'childrenWorkJson___children___parent___children'
  | 'childrenWorkJson___children___children'
  | 'childrenWorkJson___children___children___id'
  | 'childrenWorkJson___children___children___children'
  | 'childrenWorkJson___children___internal___content'
  | 'childrenWorkJson___children___internal___contentDigest'
  | 'childrenWorkJson___children___internal___description'
  | 'childrenWorkJson___children___internal___fieldOwners'
  | 'childrenWorkJson___children___internal___ignoreType'
  | 'childrenWorkJson___children___internal___mediaType'
  | 'childrenWorkJson___children___internal___owner'
  | 'childrenWorkJson___children___internal___type'
  | 'childrenWorkJson___internal___content'
  | 'childrenWorkJson___internal___contentDigest'
  | 'childrenWorkJson___internal___description'
  | 'childrenWorkJson___internal___fieldOwners'
  | 'childrenWorkJson___internal___ignoreType'
  | 'childrenWorkJson___internal___mediaType'
  | 'childrenWorkJson___internal___owner'
  | 'childrenWorkJson___internal___type'
  | 'childrenWorkJson___location'
  | 'childrenWorkJson___locationFlag___sourceInstanceName'
  | 'childrenWorkJson___locationFlag___absolutePath'
  | 'childrenWorkJson___locationFlag___relativePath'
  | 'childrenWorkJson___locationFlag___extension'
  | 'childrenWorkJson___locationFlag___size'
  | 'childrenWorkJson___locationFlag___prettySize'
  | 'childrenWorkJson___locationFlag___modifiedTime'
  | 'childrenWorkJson___locationFlag___accessTime'
  | 'childrenWorkJson___locationFlag___changeTime'
  | 'childrenWorkJson___locationFlag___birthTime'
  | 'childrenWorkJson___locationFlag___root'
  | 'childrenWorkJson___locationFlag___dir'
  | 'childrenWorkJson___locationFlag___base'
  | 'childrenWorkJson___locationFlag___ext'
  | 'childrenWorkJson___locationFlag___name'
  | 'childrenWorkJson___locationFlag___relativeDirectory'
  | 'childrenWorkJson___locationFlag___dev'
  | 'childrenWorkJson___locationFlag___mode'
  | 'childrenWorkJson___locationFlag___nlink'
  | 'childrenWorkJson___locationFlag___uid'
  | 'childrenWorkJson___locationFlag___gid'
  | 'childrenWorkJson___locationFlag___rdev'
  | 'childrenWorkJson___locationFlag___ino'
  | 'childrenWorkJson___locationFlag___atimeMs'
  | 'childrenWorkJson___locationFlag___mtimeMs'
  | 'childrenWorkJson___locationFlag___ctimeMs'
  | 'childrenWorkJson___locationFlag___atime'
  | 'childrenWorkJson___locationFlag___mtime'
  | 'childrenWorkJson___locationFlag___ctime'
  | 'childrenWorkJson___locationFlag___birthtime'
  | 'childrenWorkJson___locationFlag___birthtimeMs'
  | 'childrenWorkJson___locationFlag___blksize'
  | 'childrenWorkJson___locationFlag___blocks'
  | 'childrenWorkJson___locationFlag___url'
  | 'childrenWorkJson___locationFlag___publicURL'
  | 'childrenWorkJson___locationFlag___childrenImageSharp'
  | 'childrenWorkJson___locationFlag___childrenImageSharp___gatsbyImageData'
  | 'childrenWorkJson___locationFlag___childrenImageSharp___id'
  | 'childrenWorkJson___locationFlag___childrenImageSharp___children'
  | 'childrenWorkJson___locationFlag___childImageSharp___gatsbyImageData'
  | 'childrenWorkJson___locationFlag___childImageSharp___id'
  | 'childrenWorkJson___locationFlag___childImageSharp___children'
  | 'childrenWorkJson___locationFlag___childrenWorkJson'
  | 'childrenWorkJson___locationFlag___childrenWorkJson___id'
  | 'childrenWorkJson___locationFlag___childrenWorkJson___children'
  | 'childrenWorkJson___locationFlag___childrenWorkJson___location'
  | 'childrenWorkJson___locationFlag___childrenWorkJson___title'
  | 'childrenWorkJson___locationFlag___childrenWorkJson___name'
  | 'childrenWorkJson___locationFlag___childrenWorkJson___dates'
  | 'childrenWorkJson___locationFlag___childrenWorkJson___description'
  | 'childrenWorkJson___locationFlag___childWorkJson___id'
  | 'childrenWorkJson___locationFlag___childWorkJson___children'
  | 'childrenWorkJson___locationFlag___childWorkJson___location'
  | 'childrenWorkJson___locationFlag___childWorkJson___title'
  | 'childrenWorkJson___locationFlag___childWorkJson___name'
  | 'childrenWorkJson___locationFlag___childWorkJson___dates'
  | 'childrenWorkJson___locationFlag___childWorkJson___description'
  | 'childrenWorkJson___locationFlag___childrenSkillsJson'
  | 'childrenWorkJson___locationFlag___childrenSkillsJson___id'
  | 'childrenWorkJson___locationFlag___childrenSkillsJson___children'
  | 'childrenWorkJson___locationFlag___childrenSkillsJson___title'
  | 'childrenWorkJson___locationFlag___childrenSkillsJson___skillItems'
  | 'childrenWorkJson___locationFlag___childSkillsJson___id'
  | 'childrenWorkJson___locationFlag___childSkillsJson___children'
  | 'childrenWorkJson___locationFlag___childSkillsJson___title'
  | 'childrenWorkJson___locationFlag___childSkillsJson___skillItems'
  | 'childrenWorkJson___locationFlag___childrenSeJson'
  | 'childrenWorkJson___locationFlag___childrenSeJson___id'
  | 'childrenWorkJson___locationFlag___childrenSeJson___children'
  | 'childrenWorkJson___locationFlag___childSeJson___id'
  | 'childrenWorkJson___locationFlag___childSeJson___children'
  | 'childrenWorkJson___locationFlag___childrenRuJson'
  | 'childrenWorkJson___locationFlag___childrenRuJson___id'
  | 'childrenWorkJson___locationFlag___childrenRuJson___children'
  | 'childrenWorkJson___locationFlag___childrenRuJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childRuJson___id'
  | 'childrenWorkJson___locationFlag___childRuJson___children'
  | 'childrenWorkJson___locationFlag___childRuJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childrenLocale'
  | 'childrenWorkJson___locationFlag___childrenLocale___id'
  | 'childrenWorkJson___locationFlag___childrenLocale___children'
  | 'childrenWorkJson___locationFlag___childrenLocale___language'
  | 'childrenWorkJson___locationFlag___childrenLocale___ns'
  | 'childrenWorkJson___locationFlag___childrenLocale___data'
  | 'childrenWorkJson___locationFlag___childrenLocale___fileAbsolutePath'
  | 'childrenWorkJson___locationFlag___childLocale___id'
  | 'childrenWorkJson___locationFlag___childLocale___children'
  | 'childrenWorkJson___locationFlag___childLocale___language'
  | 'childrenWorkJson___locationFlag___childLocale___ns'
  | 'childrenWorkJson___locationFlag___childLocale___data'
  | 'childrenWorkJson___locationFlag___childLocale___fileAbsolutePath'
  | 'childrenWorkJson___locationFlag___childrenHuJson'
  | 'childrenWorkJson___locationFlag___childrenHuJson___id'
  | 'childrenWorkJson___locationFlag___childrenHuJson___children'
  | 'childrenWorkJson___locationFlag___childrenHuJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childHuJson___id'
  | 'childrenWorkJson___locationFlag___childHuJson___children'
  | 'childrenWorkJson___locationFlag___childHuJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childrenFrJson'
  | 'childrenWorkJson___locationFlag___childrenFrJson___id'
  | 'childrenWorkJson___locationFlag___childrenFrJson___children'
  | 'childrenWorkJson___locationFlag___childrenFrJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childFrJson___id'
  | 'childrenWorkJson___locationFlag___childFrJson___children'
  | 'childrenWorkJson___locationFlag___childFrJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childrenFlagsJson'
  | 'childrenWorkJson___locationFlag___childrenFlagsJson___id'
  | 'childrenWorkJson___locationFlag___childrenFlagsJson___children'
  | 'childrenWorkJson___locationFlag___childrenFlagsJson___code'
  | 'childrenWorkJson___locationFlag___childrenFlagsJson___name'
  | 'childrenWorkJson___locationFlag___childFlagsJson___id'
  | 'childrenWorkJson___locationFlag___childFlagsJson___children'
  | 'childrenWorkJson___locationFlag___childFlagsJson___code'
  | 'childrenWorkJson___locationFlag___childFlagsJson___name'
  | 'childrenWorkJson___locationFlag___childrenEtJson'
  | 'childrenWorkJson___locationFlag___childrenEtJson___id'
  | 'childrenWorkJson___locationFlag___childrenEtJson___children'
  | 'childrenWorkJson___locationFlag___childrenEtJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childEtJson___id'
  | 'childrenWorkJson___locationFlag___childEtJson___children'
  | 'childrenWorkJson___locationFlag___childEtJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childrenEsJson'
  | 'childrenWorkJson___locationFlag___childrenEsJson___id'
  | 'childrenWorkJson___locationFlag___childrenEsJson___children'
  | 'childrenWorkJson___locationFlag___childrenEsJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childEsJson___id'
  | 'childrenWorkJson___locationFlag___childEsJson___children'
  | 'childrenWorkJson___locationFlag___childEsJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childrenEnJson'
  | 'childrenWorkJson___locationFlag___childrenEnJson___id'
  | 'childrenWorkJson___locationFlag___childrenEnJson___children'
  | 'childrenWorkJson___locationFlag___childrenEnJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childEnJson___id'
  | 'childrenWorkJson___locationFlag___childEnJson___children'
  | 'childrenWorkJson___locationFlag___childEnJson___Acknowledgements'
  | 'childrenWorkJson___locationFlag___childrenEducationJson'
  | 'childrenWorkJson___locationFlag___childrenEducationJson___id'
  | 'childrenWorkJson___locationFlag___childrenEducationJson___children'
  | 'childrenWorkJson___locationFlag___childrenEducationJson___location'
  | 'childrenWorkJson___locationFlag___childrenEducationJson___title'
  | 'childrenWorkJson___locationFlag___childrenEducationJson___name'
  | 'childrenWorkJson___locationFlag___childrenEducationJson___dates'
  | 'childrenWorkJson___locationFlag___childrenEducationJson___description'
  | 'childrenWorkJson___locationFlag___childEducationJson___id'
  | 'childrenWorkJson___locationFlag___childEducationJson___children'
  | 'childrenWorkJson___locationFlag___childEducationJson___location'
  | 'childrenWorkJson___locationFlag___childEducationJson___title'
  | 'childrenWorkJson___locationFlag___childEducationJson___name'
  | 'childrenWorkJson___locationFlag___childEducationJson___dates'
  | 'childrenWorkJson___locationFlag___childEducationJson___description'
  | 'childrenWorkJson___locationFlag___childrenDeJson'
  | 'childrenWorkJson___locationFlag___childrenDeJson___id'
  | 'childrenWorkJson___locationFlag___childrenDeJson___children'
  | 'childrenWorkJson___locationFlag___childDeJson___id'
  | 'childrenWorkJson___locationFlag___childDeJson___children'
  | 'childrenWorkJson___locationFlag___id'
  | 'childrenWorkJson___locationFlag___parent___id'
  | 'childrenWorkJson___locationFlag___parent___children'
  | 'childrenWorkJson___locationFlag___children'
  | 'childrenWorkJson___locationFlag___children___id'
  | 'childrenWorkJson___locationFlag___children___children'
  | 'childrenWorkJson___locationFlag___internal___content'
  | 'childrenWorkJson___locationFlag___internal___contentDigest'
  | 'childrenWorkJson___locationFlag___internal___description'
  | 'childrenWorkJson___locationFlag___internal___fieldOwners'
  | 'childrenWorkJson___locationFlag___internal___ignoreType'
  | 'childrenWorkJson___locationFlag___internal___mediaType'
  | 'childrenWorkJson___locationFlag___internal___owner'
  | 'childrenWorkJson___locationFlag___internal___type'
  | 'childrenWorkJson___title'
  | 'childrenWorkJson___logo___sourceInstanceName'
  | 'childrenWorkJson___logo___absolutePath'
  | 'childrenWorkJson___logo___relativePath'
  | 'childrenWorkJson___logo___extension'
  | 'childrenWorkJson___logo___size'
  | 'childrenWorkJson___logo___prettySize'
  | 'childrenWorkJson___logo___modifiedTime'
  | 'childrenWorkJson___logo___accessTime'
  | 'childrenWorkJson___logo___changeTime'
  | 'childrenWorkJson___logo___birthTime'
  | 'childrenWorkJson___logo___root'
  | 'childrenWorkJson___logo___dir'
  | 'childrenWorkJson___logo___base'
  | 'childrenWorkJson___logo___ext'
  | 'childrenWorkJson___logo___name'
  | 'childrenWorkJson___logo___relativeDirectory'
  | 'childrenWorkJson___logo___dev'
  | 'childrenWorkJson___logo___mode'
  | 'childrenWorkJson___logo___nlink'
  | 'childrenWorkJson___logo___uid'
  | 'childrenWorkJson___logo___gid'
  | 'childrenWorkJson___logo___rdev'
  | 'childrenWorkJson___logo___ino'
  | 'childrenWorkJson___logo___atimeMs'
  | 'childrenWorkJson___logo___mtimeMs'
  | 'childrenWorkJson___logo___ctimeMs'
  | 'childrenWorkJson___logo___atime'
  | 'childrenWorkJson___logo___mtime'
  | 'childrenWorkJson___logo___ctime'
  | 'childrenWorkJson___logo___birthtime'
  | 'childrenWorkJson___logo___birthtimeMs'
  | 'childrenWorkJson___logo___blksize'
  | 'childrenWorkJson___logo___blocks'
  | 'childrenWorkJson___logo___url'
  | 'childrenWorkJson___logo___publicURL'
  | 'childrenWorkJson___logo___childrenImageSharp'
  | 'childrenWorkJson___logo___childrenImageSharp___gatsbyImageData'
  | 'childrenWorkJson___logo___childrenImageSharp___id'
  | 'childrenWorkJson___logo___childrenImageSharp___children'
  | 'childrenWorkJson___logo___childImageSharp___gatsbyImageData'
  | 'childrenWorkJson___logo___childImageSharp___id'
  | 'childrenWorkJson___logo___childImageSharp___children'
  | 'childrenWorkJson___logo___childrenWorkJson'
  | 'childrenWorkJson___logo___childrenWorkJson___id'
  | 'childrenWorkJson___logo___childrenWorkJson___children'
  | 'childrenWorkJson___logo___childrenWorkJson___location'
  | 'childrenWorkJson___logo___childrenWorkJson___title'
  | 'childrenWorkJson___logo___childrenWorkJson___name'
  | 'childrenWorkJson___logo___childrenWorkJson___dates'
  | 'childrenWorkJson___logo___childrenWorkJson___description'
  | 'childrenWorkJson___logo___childWorkJson___id'
  | 'childrenWorkJson___logo___childWorkJson___children'
  | 'childrenWorkJson___logo___childWorkJson___location'
  | 'childrenWorkJson___logo___childWorkJson___title'
  | 'childrenWorkJson___logo___childWorkJson___name'
  | 'childrenWorkJson___logo___childWorkJson___dates'
  | 'childrenWorkJson___logo___childWorkJson___description'
  | 'childrenWorkJson___logo___childrenSkillsJson'
  | 'childrenWorkJson___logo___childrenSkillsJson___id'
  | 'childrenWorkJson___logo___childrenSkillsJson___children'
  | 'childrenWorkJson___logo___childrenSkillsJson___title'
  | 'childrenWorkJson___logo___childrenSkillsJson___skillItems'
  | 'childrenWorkJson___logo___childSkillsJson___id'
  | 'childrenWorkJson___logo___childSkillsJson___children'
  | 'childrenWorkJson___logo___childSkillsJson___title'
  | 'childrenWorkJson___logo___childSkillsJson___skillItems'
  | 'childrenWorkJson___logo___childrenSeJson'
  | 'childrenWorkJson___logo___childrenSeJson___id'
  | 'childrenWorkJson___logo___childrenSeJson___children'
  | 'childrenWorkJson___logo___childSeJson___id'
  | 'childrenWorkJson___logo___childSeJson___children'
  | 'childrenWorkJson___logo___childrenRuJson'
  | 'childrenWorkJson___logo___childrenRuJson___id'
  | 'childrenWorkJson___logo___childrenRuJson___children'
  | 'childrenWorkJson___logo___childrenRuJson___Acknowledgements'
  | 'childrenWorkJson___logo___childRuJson___id'
  | 'childrenWorkJson___logo___childRuJson___children'
  | 'childrenWorkJson___logo___childRuJson___Acknowledgements'
  | 'childrenWorkJson___logo___childrenLocale'
  | 'childrenWorkJson___logo___childrenLocale___id'
  | 'childrenWorkJson___logo___childrenLocale___children'
  | 'childrenWorkJson___logo___childrenLocale___language'
  | 'childrenWorkJson___logo___childrenLocale___ns'
  | 'childrenWorkJson___logo___childrenLocale___data'
  | 'childrenWorkJson___logo___childrenLocale___fileAbsolutePath'
  | 'childrenWorkJson___logo___childLocale___id'
  | 'childrenWorkJson___logo___childLocale___children'
  | 'childrenWorkJson___logo___childLocale___language'
  | 'childrenWorkJson___logo___childLocale___ns'
  | 'childrenWorkJson___logo___childLocale___data'
  | 'childrenWorkJson___logo___childLocale___fileAbsolutePath'
  | 'childrenWorkJson___logo___childrenHuJson'
  | 'childrenWorkJson___logo___childrenHuJson___id'
  | 'childrenWorkJson___logo___childrenHuJson___children'
  | 'childrenWorkJson___logo___childrenHuJson___Acknowledgements'
  | 'childrenWorkJson___logo___childHuJson___id'
  | 'childrenWorkJson___logo___childHuJson___children'
  | 'childrenWorkJson___logo___childHuJson___Acknowledgements'
  | 'childrenWorkJson___logo___childrenFrJson'
  | 'childrenWorkJson___logo___childrenFrJson___id'
  | 'childrenWorkJson___logo___childrenFrJson___children'
  | 'childrenWorkJson___logo___childrenFrJson___Acknowledgements'
  | 'childrenWorkJson___logo___childFrJson___id'
  | 'childrenWorkJson___logo___childFrJson___children'
  | 'childrenWorkJson___logo___childFrJson___Acknowledgements'
  | 'childrenWorkJson___logo___childrenFlagsJson'
  | 'childrenWorkJson___logo___childrenFlagsJson___id'
  | 'childrenWorkJson___logo___childrenFlagsJson___children'
  | 'childrenWorkJson___logo___childrenFlagsJson___code'
  | 'childrenWorkJson___logo___childrenFlagsJson___name'
  | 'childrenWorkJson___logo___childFlagsJson___id'
  | 'childrenWorkJson___logo___childFlagsJson___children'
  | 'childrenWorkJson___logo___childFlagsJson___code'
  | 'childrenWorkJson___logo___childFlagsJson___name'
  | 'childrenWorkJson___logo___childrenEtJson'
  | 'childrenWorkJson___logo___childrenEtJson___id'
  | 'childrenWorkJson___logo___childrenEtJson___children'
  | 'childrenWorkJson___logo___childrenEtJson___Acknowledgements'
  | 'childrenWorkJson___logo___childEtJson___id'
  | 'childrenWorkJson___logo___childEtJson___children'
  | 'childrenWorkJson___logo___childEtJson___Acknowledgements'
  | 'childrenWorkJson___logo___childrenEsJson'
  | 'childrenWorkJson___logo___childrenEsJson___id'
  | 'childrenWorkJson___logo___childrenEsJson___children'
  | 'childrenWorkJson___logo___childrenEsJson___Acknowledgements'
  | 'childrenWorkJson___logo___childEsJson___id'
  | 'childrenWorkJson___logo___childEsJson___children'
  | 'childrenWorkJson___logo___childEsJson___Acknowledgements'
  | 'childrenWorkJson___logo___childrenEnJson'
  | 'childrenWorkJson___logo___childrenEnJson___id'
  | 'childrenWorkJson___logo___childrenEnJson___children'
  | 'childrenWorkJson___logo___childrenEnJson___Acknowledgements'
  | 'childrenWorkJson___logo___childEnJson___id'
  | 'childrenWorkJson___logo___childEnJson___children'
  | 'childrenWorkJson___logo___childEnJson___Acknowledgements'
  | 'childrenWorkJson___logo___childrenEducationJson'
  | 'childrenWorkJson___logo___childrenEducationJson___id'
  | 'childrenWorkJson___logo___childrenEducationJson___children'
  | 'childrenWorkJson___logo___childrenEducationJson___location'
  | 'childrenWorkJson___logo___childrenEducationJson___title'
  | 'childrenWorkJson___logo___childrenEducationJson___name'
  | 'childrenWorkJson___logo___childrenEducationJson___dates'
  | 'childrenWorkJson___logo___childrenEducationJson___description'
  | 'childrenWorkJson___logo___childEducationJson___id'
  | 'childrenWorkJson___logo___childEducationJson___children'
  | 'childrenWorkJson___logo___childEducationJson___location'
  | 'childrenWorkJson___logo___childEducationJson___title'
  | 'childrenWorkJson___logo___childEducationJson___name'
  | 'childrenWorkJson___logo___childEducationJson___dates'
  | 'childrenWorkJson___logo___childEducationJson___description'
  | 'childrenWorkJson___logo___childrenDeJson'
  | 'childrenWorkJson___logo___childrenDeJson___id'
  | 'childrenWorkJson___logo___childrenDeJson___children'
  | 'childrenWorkJson___logo___childDeJson___id'
  | 'childrenWorkJson___logo___childDeJson___children'
  | 'childrenWorkJson___logo___id'
  | 'childrenWorkJson___logo___parent___id'
  | 'childrenWorkJson___logo___parent___children'
  | 'childrenWorkJson___logo___children'
  | 'childrenWorkJson___logo___children___id'
  | 'childrenWorkJson___logo___children___children'
  | 'childrenWorkJson___logo___internal___content'
  | 'childrenWorkJson___logo___internal___contentDigest'
  | 'childrenWorkJson___logo___internal___description'
  | 'childrenWorkJson___logo___internal___fieldOwners'
  | 'childrenWorkJson___logo___internal___ignoreType'
  | 'childrenWorkJson___logo___internal___mediaType'
  | 'childrenWorkJson___logo___internal___owner'
  | 'childrenWorkJson___logo___internal___type'
  | 'childrenWorkJson___name'
  | 'childrenWorkJson___dates'
  | 'childrenWorkJson___description'
  | 'childWorkJson___id'
  | 'childWorkJson___parent___id'
  | 'childWorkJson___parent___parent___id'
  | 'childWorkJson___parent___parent___children'
  | 'childWorkJson___parent___children'
  | 'childWorkJson___parent___children___id'
  | 'childWorkJson___parent___children___children'
  | 'childWorkJson___parent___internal___content'
  | 'childWorkJson___parent___internal___contentDigest'
  | 'childWorkJson___parent___internal___description'
  | 'childWorkJson___parent___internal___fieldOwners'
  | 'childWorkJson___parent___internal___ignoreType'
  | 'childWorkJson___parent___internal___mediaType'
  | 'childWorkJson___parent___internal___owner'
  | 'childWorkJson___parent___internal___type'
  | 'childWorkJson___children'
  | 'childWorkJson___children___id'
  | 'childWorkJson___children___parent___id'
  | 'childWorkJson___children___parent___children'
  | 'childWorkJson___children___children'
  | 'childWorkJson___children___children___id'
  | 'childWorkJson___children___children___children'
  | 'childWorkJson___children___internal___content'
  | 'childWorkJson___children___internal___contentDigest'
  | 'childWorkJson___children___internal___description'
  | 'childWorkJson___children___internal___fieldOwners'
  | 'childWorkJson___children___internal___ignoreType'
  | 'childWorkJson___children___internal___mediaType'
  | 'childWorkJson___children___internal___owner'
  | 'childWorkJson___children___internal___type'
  | 'childWorkJson___internal___content'
  | 'childWorkJson___internal___contentDigest'
  | 'childWorkJson___internal___description'
  | 'childWorkJson___internal___fieldOwners'
  | 'childWorkJson___internal___ignoreType'
  | 'childWorkJson___internal___mediaType'
  | 'childWorkJson___internal___owner'
  | 'childWorkJson___internal___type'
  | 'childWorkJson___location'
  | 'childWorkJson___locationFlag___sourceInstanceName'
  | 'childWorkJson___locationFlag___absolutePath'
  | 'childWorkJson___locationFlag___relativePath'
  | 'childWorkJson___locationFlag___extension'
  | 'childWorkJson___locationFlag___size'
  | 'childWorkJson___locationFlag___prettySize'
  | 'childWorkJson___locationFlag___modifiedTime'
  | 'childWorkJson___locationFlag___accessTime'
  | 'childWorkJson___locationFlag___changeTime'
  | 'childWorkJson___locationFlag___birthTime'
  | 'childWorkJson___locationFlag___root'
  | 'childWorkJson___locationFlag___dir'
  | 'childWorkJson___locationFlag___base'
  | 'childWorkJson___locationFlag___ext'
  | 'childWorkJson___locationFlag___name'
  | 'childWorkJson___locationFlag___relativeDirectory'
  | 'childWorkJson___locationFlag___dev'
  | 'childWorkJson___locationFlag___mode'
  | 'childWorkJson___locationFlag___nlink'
  | 'childWorkJson___locationFlag___uid'
  | 'childWorkJson___locationFlag___gid'
  | 'childWorkJson___locationFlag___rdev'
  | 'childWorkJson___locationFlag___ino'
  | 'childWorkJson___locationFlag___atimeMs'
  | 'childWorkJson___locationFlag___mtimeMs'
  | 'childWorkJson___locationFlag___ctimeMs'
  | 'childWorkJson___locationFlag___atime'
  | 'childWorkJson___locationFlag___mtime'
  | 'childWorkJson___locationFlag___ctime'
  | 'childWorkJson___locationFlag___birthtime'
  | 'childWorkJson___locationFlag___birthtimeMs'
  | 'childWorkJson___locationFlag___blksize'
  | 'childWorkJson___locationFlag___blocks'
  | 'childWorkJson___locationFlag___url'
  | 'childWorkJson___locationFlag___publicURL'
  | 'childWorkJson___locationFlag___childrenImageSharp'
  | 'childWorkJson___locationFlag___childrenImageSharp___gatsbyImageData'
  | 'childWorkJson___locationFlag___childrenImageSharp___id'
  | 'childWorkJson___locationFlag___childrenImageSharp___children'
  | 'childWorkJson___locationFlag___childImageSharp___gatsbyImageData'
  | 'childWorkJson___locationFlag___childImageSharp___id'
  | 'childWorkJson___locationFlag___childImageSharp___children'
  | 'childWorkJson___locationFlag___childrenWorkJson'
  | 'childWorkJson___locationFlag___childrenWorkJson___id'
  | 'childWorkJson___locationFlag___childrenWorkJson___children'
  | 'childWorkJson___locationFlag___childrenWorkJson___location'
  | 'childWorkJson___locationFlag___childrenWorkJson___title'
  | 'childWorkJson___locationFlag___childrenWorkJson___name'
  | 'childWorkJson___locationFlag___childrenWorkJson___dates'
  | 'childWorkJson___locationFlag___childrenWorkJson___description'
  | 'childWorkJson___locationFlag___childWorkJson___id'
  | 'childWorkJson___locationFlag___childWorkJson___children'
  | 'childWorkJson___locationFlag___childWorkJson___location'
  | 'childWorkJson___locationFlag___childWorkJson___title'
  | 'childWorkJson___locationFlag___childWorkJson___name'
  | 'childWorkJson___locationFlag___childWorkJson___dates'
  | 'childWorkJson___locationFlag___childWorkJson___description'
  | 'childWorkJson___locationFlag___childrenSkillsJson'
  | 'childWorkJson___locationFlag___childrenSkillsJson___id'
  | 'childWorkJson___locationFlag___childrenSkillsJson___children'
  | 'childWorkJson___locationFlag___childrenSkillsJson___title'
  | 'childWorkJson___locationFlag___childrenSkillsJson___skillItems'
  | 'childWorkJson___locationFlag___childSkillsJson___id'
  | 'childWorkJson___locationFlag___childSkillsJson___children'
  | 'childWorkJson___locationFlag___childSkillsJson___title'
  | 'childWorkJson___locationFlag___childSkillsJson___skillItems'
  | 'childWorkJson___locationFlag___childrenSeJson'
  | 'childWorkJson___locationFlag___childrenSeJson___id'
  | 'childWorkJson___locationFlag___childrenSeJson___children'
  | 'childWorkJson___locationFlag___childSeJson___id'
  | 'childWorkJson___locationFlag___childSeJson___children'
  | 'childWorkJson___locationFlag___childrenRuJson'
  | 'childWorkJson___locationFlag___childrenRuJson___id'
  | 'childWorkJson___locationFlag___childrenRuJson___children'
  | 'childWorkJson___locationFlag___childrenRuJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childRuJson___id'
  | 'childWorkJson___locationFlag___childRuJson___children'
  | 'childWorkJson___locationFlag___childRuJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childrenLocale'
  | 'childWorkJson___locationFlag___childrenLocale___id'
  | 'childWorkJson___locationFlag___childrenLocale___children'
  | 'childWorkJson___locationFlag___childrenLocale___language'
  | 'childWorkJson___locationFlag___childrenLocale___ns'
  | 'childWorkJson___locationFlag___childrenLocale___data'
  | 'childWorkJson___locationFlag___childrenLocale___fileAbsolutePath'
  | 'childWorkJson___locationFlag___childLocale___id'
  | 'childWorkJson___locationFlag___childLocale___children'
  | 'childWorkJson___locationFlag___childLocale___language'
  | 'childWorkJson___locationFlag___childLocale___ns'
  | 'childWorkJson___locationFlag___childLocale___data'
  | 'childWorkJson___locationFlag___childLocale___fileAbsolutePath'
  | 'childWorkJson___locationFlag___childrenHuJson'
  | 'childWorkJson___locationFlag___childrenHuJson___id'
  | 'childWorkJson___locationFlag___childrenHuJson___children'
  | 'childWorkJson___locationFlag___childrenHuJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childHuJson___id'
  | 'childWorkJson___locationFlag___childHuJson___children'
  | 'childWorkJson___locationFlag___childHuJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childrenFrJson'
  | 'childWorkJson___locationFlag___childrenFrJson___id'
  | 'childWorkJson___locationFlag___childrenFrJson___children'
  | 'childWorkJson___locationFlag___childrenFrJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childFrJson___id'
  | 'childWorkJson___locationFlag___childFrJson___children'
  | 'childWorkJson___locationFlag___childFrJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childrenFlagsJson'
  | 'childWorkJson___locationFlag___childrenFlagsJson___id'
  | 'childWorkJson___locationFlag___childrenFlagsJson___children'
  | 'childWorkJson___locationFlag___childrenFlagsJson___code'
  | 'childWorkJson___locationFlag___childrenFlagsJson___name'
  | 'childWorkJson___locationFlag___childFlagsJson___id'
  | 'childWorkJson___locationFlag___childFlagsJson___children'
  | 'childWorkJson___locationFlag___childFlagsJson___code'
  | 'childWorkJson___locationFlag___childFlagsJson___name'
  | 'childWorkJson___locationFlag___childrenEtJson'
  | 'childWorkJson___locationFlag___childrenEtJson___id'
  | 'childWorkJson___locationFlag___childrenEtJson___children'
  | 'childWorkJson___locationFlag___childrenEtJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childEtJson___id'
  | 'childWorkJson___locationFlag___childEtJson___children'
  | 'childWorkJson___locationFlag___childEtJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childrenEsJson'
  | 'childWorkJson___locationFlag___childrenEsJson___id'
  | 'childWorkJson___locationFlag___childrenEsJson___children'
  | 'childWorkJson___locationFlag___childrenEsJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childEsJson___id'
  | 'childWorkJson___locationFlag___childEsJson___children'
  | 'childWorkJson___locationFlag___childEsJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childrenEnJson'
  | 'childWorkJson___locationFlag___childrenEnJson___id'
  | 'childWorkJson___locationFlag___childrenEnJson___children'
  | 'childWorkJson___locationFlag___childrenEnJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childEnJson___id'
  | 'childWorkJson___locationFlag___childEnJson___children'
  | 'childWorkJson___locationFlag___childEnJson___Acknowledgements'
  | 'childWorkJson___locationFlag___childrenEducationJson'
  | 'childWorkJson___locationFlag___childrenEducationJson___id'
  | 'childWorkJson___locationFlag___childrenEducationJson___children'
  | 'childWorkJson___locationFlag___childrenEducationJson___location'
  | 'childWorkJson___locationFlag___childrenEducationJson___title'
  | 'childWorkJson___locationFlag___childrenEducationJson___name'
  | 'childWorkJson___locationFlag___childrenEducationJson___dates'
  | 'childWorkJson___locationFlag___childrenEducationJson___description'
  | 'childWorkJson___locationFlag___childEducationJson___id'
  | 'childWorkJson___locationFlag___childEducationJson___children'
  | 'childWorkJson___locationFlag___childEducationJson___location'
  | 'childWorkJson___locationFlag___childEducationJson___title'
  | 'childWorkJson___locationFlag___childEducationJson___name'
  | 'childWorkJson___locationFlag___childEducationJson___dates'
  | 'childWorkJson___locationFlag___childEducationJson___description'
  | 'childWorkJson___locationFlag___childrenDeJson'
  | 'childWorkJson___locationFlag___childrenDeJson___id'
  | 'childWorkJson___locationFlag___childrenDeJson___children'
  | 'childWorkJson___locationFlag___childDeJson___id'
  | 'childWorkJson___locationFlag___childDeJson___children'
  | 'childWorkJson___locationFlag___id'
  | 'childWorkJson___locationFlag___parent___id'
  | 'childWorkJson___locationFlag___parent___children'
  | 'childWorkJson___locationFlag___children'
  | 'childWorkJson___locationFlag___children___id'
  | 'childWorkJson___locationFlag___children___children'
  | 'childWorkJson___locationFlag___internal___content'
  | 'childWorkJson___locationFlag___internal___contentDigest'
  | 'childWorkJson___locationFlag___internal___description'
  | 'childWorkJson___locationFlag___internal___fieldOwners'
  | 'childWorkJson___locationFlag___internal___ignoreType'
  | 'childWorkJson___locationFlag___internal___mediaType'
  | 'childWorkJson___locationFlag___internal___owner'
  | 'childWorkJson___locationFlag___internal___type'
  | 'childWorkJson___title'
  | 'childWorkJson___logo___sourceInstanceName'
  | 'childWorkJson___logo___absolutePath'
  | 'childWorkJson___logo___relativePath'
  | 'childWorkJson___logo___extension'
  | 'childWorkJson___logo___size'
  | 'childWorkJson___logo___prettySize'
  | 'childWorkJson___logo___modifiedTime'
  | 'childWorkJson___logo___accessTime'
  | 'childWorkJson___logo___changeTime'
  | 'childWorkJson___logo___birthTime'
  | 'childWorkJson___logo___root'
  | 'childWorkJson___logo___dir'
  | 'childWorkJson___logo___base'
  | 'childWorkJson___logo___ext'
  | 'childWorkJson___logo___name'
  | 'childWorkJson___logo___relativeDirectory'
  | 'childWorkJson___logo___dev'
  | 'childWorkJson___logo___mode'
  | 'childWorkJson___logo___nlink'
  | 'childWorkJson___logo___uid'
  | 'childWorkJson___logo___gid'
  | 'childWorkJson___logo___rdev'
  | 'childWorkJson___logo___ino'
  | 'childWorkJson___logo___atimeMs'
  | 'childWorkJson___logo___mtimeMs'
  | 'childWorkJson___logo___ctimeMs'
  | 'childWorkJson___logo___atime'
  | 'childWorkJson___logo___mtime'
  | 'childWorkJson___logo___ctime'
  | 'childWorkJson___logo___birthtime'
  | 'childWorkJson___logo___birthtimeMs'
  | 'childWorkJson___logo___blksize'
  | 'childWorkJson___logo___blocks'
  | 'childWorkJson___logo___url'
  | 'childWorkJson___logo___publicURL'
  | 'childWorkJson___logo___childrenImageSharp'
  | 'childWorkJson___logo___childrenImageSharp___gatsbyImageData'
  | 'childWorkJson___logo___childrenImageSharp___id'
  | 'childWorkJson___logo___childrenImageSharp___children'
  | 'childWorkJson___logo___childImageSharp___gatsbyImageData'
  | 'childWorkJson___logo___childImageSharp___id'
  | 'childWorkJson___logo___childImageSharp___children'
  | 'childWorkJson___logo___childrenWorkJson'
  | 'childWorkJson___logo___childrenWorkJson___id'
  | 'childWorkJson___logo___childrenWorkJson___children'
  | 'childWorkJson___logo___childrenWorkJson___location'
  | 'childWorkJson___logo___childrenWorkJson___title'
  | 'childWorkJson___logo___childrenWorkJson___name'
  | 'childWorkJson___logo___childrenWorkJson___dates'
  | 'childWorkJson___logo___childrenWorkJson___description'
  | 'childWorkJson___logo___childWorkJson___id'
  | 'childWorkJson___logo___childWorkJson___children'
  | 'childWorkJson___logo___childWorkJson___location'
  | 'childWorkJson___logo___childWorkJson___title'
  | 'childWorkJson___logo___childWorkJson___name'
  | 'childWorkJson___logo___childWorkJson___dates'
  | 'childWorkJson___logo___childWorkJson___description'
  | 'childWorkJson___logo___childrenSkillsJson'
  | 'childWorkJson___logo___childrenSkillsJson___id'
  | 'childWorkJson___logo___childrenSkillsJson___children'
  | 'childWorkJson___logo___childrenSkillsJson___title'
  | 'childWorkJson___logo___childrenSkillsJson___skillItems'
  | 'childWorkJson___logo___childSkillsJson___id'
  | 'childWorkJson___logo___childSkillsJson___children'
  | 'childWorkJson___logo___childSkillsJson___title'
  | 'childWorkJson___logo___childSkillsJson___skillItems'
  | 'childWorkJson___logo___childrenSeJson'
  | 'childWorkJson___logo___childrenSeJson___id'
  | 'childWorkJson___logo___childrenSeJson___children'
  | 'childWorkJson___logo___childSeJson___id'
  | 'childWorkJson___logo___childSeJson___children'
  | 'childWorkJson___logo___childrenRuJson'
  | 'childWorkJson___logo___childrenRuJson___id'
  | 'childWorkJson___logo___childrenRuJson___children'
  | 'childWorkJson___logo___childrenRuJson___Acknowledgements'
  | 'childWorkJson___logo___childRuJson___id'
  | 'childWorkJson___logo___childRuJson___children'
  | 'childWorkJson___logo___childRuJson___Acknowledgements'
  | 'childWorkJson___logo___childrenLocale'
  | 'childWorkJson___logo___childrenLocale___id'
  | 'childWorkJson___logo___childrenLocale___children'
  | 'childWorkJson___logo___childrenLocale___language'
  | 'childWorkJson___logo___childrenLocale___ns'
  | 'childWorkJson___logo___childrenLocale___data'
  | 'childWorkJson___logo___childrenLocale___fileAbsolutePath'
  | 'childWorkJson___logo___childLocale___id'
  | 'childWorkJson___logo___childLocale___children'
  | 'childWorkJson___logo___childLocale___language'
  | 'childWorkJson___logo___childLocale___ns'
  | 'childWorkJson___logo___childLocale___data'
  | 'childWorkJson___logo___childLocale___fileAbsolutePath'
  | 'childWorkJson___logo___childrenHuJson'
  | 'childWorkJson___logo___childrenHuJson___id'
  | 'childWorkJson___logo___childrenHuJson___children'
  | 'childWorkJson___logo___childrenHuJson___Acknowledgements'
  | 'childWorkJson___logo___childHuJson___id'
  | 'childWorkJson___logo___childHuJson___children'
  | 'childWorkJson___logo___childHuJson___Acknowledgements'
  | 'childWorkJson___logo___childrenFrJson'
  | 'childWorkJson___logo___childrenFrJson___id'
  | 'childWorkJson___logo___childrenFrJson___children'
  | 'childWorkJson___logo___childrenFrJson___Acknowledgements'
  | 'childWorkJson___logo___childFrJson___id'
  | 'childWorkJson___logo___childFrJson___children'
  | 'childWorkJson___logo___childFrJson___Acknowledgements'
  | 'childWorkJson___logo___childrenFlagsJson'
  | 'childWorkJson___logo___childrenFlagsJson___id'
  | 'childWorkJson___logo___childrenFlagsJson___children'
  | 'childWorkJson___logo___childrenFlagsJson___code'
  | 'childWorkJson___logo___childrenFlagsJson___name'
  | 'childWorkJson___logo___childFlagsJson___id'
  | 'childWorkJson___logo___childFlagsJson___children'
  | 'childWorkJson___logo___childFlagsJson___code'
  | 'childWorkJson___logo___childFlagsJson___name'
  | 'childWorkJson___logo___childrenEtJson'
  | 'childWorkJson___logo___childrenEtJson___id'
  | 'childWorkJson___logo___childrenEtJson___children'
  | 'childWorkJson___logo___childrenEtJson___Acknowledgements'
  | 'childWorkJson___logo___childEtJson___id'
  | 'childWorkJson___logo___childEtJson___children'
  | 'childWorkJson___logo___childEtJson___Acknowledgements'
  | 'childWorkJson___logo___childrenEsJson'
  | 'childWorkJson___logo___childrenEsJson___id'
  | 'childWorkJson___logo___childrenEsJson___children'
  | 'childWorkJson___logo___childrenEsJson___Acknowledgements'
  | 'childWorkJson___logo___childEsJson___id'
  | 'childWorkJson___logo___childEsJson___children'
  | 'childWorkJson___logo___childEsJson___Acknowledgements'
  | 'childWorkJson___logo___childrenEnJson'
  | 'childWorkJson___logo___childrenEnJson___id'
  | 'childWorkJson___logo___childrenEnJson___children'
  | 'childWorkJson___logo___childrenEnJson___Acknowledgements'
  | 'childWorkJson___logo___childEnJson___id'
  | 'childWorkJson___logo___childEnJson___children'
  | 'childWorkJson___logo___childEnJson___Acknowledgements'
  | 'childWorkJson___logo___childrenEducationJson'
  | 'childWorkJson___logo___childrenEducationJson___id'
  | 'childWorkJson___logo___childrenEducationJson___children'
  | 'childWorkJson___logo___childrenEducationJson___location'
  | 'childWorkJson___logo___childrenEducationJson___title'
  | 'childWorkJson___logo___childrenEducationJson___name'
  | 'childWorkJson___logo___childrenEducationJson___dates'
  | 'childWorkJson___logo___childrenEducationJson___description'
  | 'childWorkJson___logo___childEducationJson___id'
  | 'childWorkJson___logo___childEducationJson___children'
  | 'childWorkJson___logo___childEducationJson___location'
  | 'childWorkJson___logo___childEducationJson___title'
  | 'childWorkJson___logo___childEducationJson___name'
  | 'childWorkJson___logo___childEducationJson___dates'
  | 'childWorkJson___logo___childEducationJson___description'
  | 'childWorkJson___logo___childrenDeJson'
  | 'childWorkJson___logo___childrenDeJson___id'
  | 'childWorkJson___logo___childrenDeJson___children'
  | 'childWorkJson___logo___childDeJson___id'
  | 'childWorkJson___logo___childDeJson___children'
  | 'childWorkJson___logo___id'
  | 'childWorkJson___logo___parent___id'
  | 'childWorkJson___logo___parent___children'
  | 'childWorkJson___logo___children'
  | 'childWorkJson___logo___children___id'
  | 'childWorkJson___logo___children___children'
  | 'childWorkJson___logo___internal___content'
  | 'childWorkJson___logo___internal___contentDigest'
  | 'childWorkJson___logo___internal___description'
  | 'childWorkJson___logo___internal___fieldOwners'
  | 'childWorkJson___logo___internal___ignoreType'
  | 'childWorkJson___logo___internal___mediaType'
  | 'childWorkJson___logo___internal___owner'
  | 'childWorkJson___logo___internal___type'
  | 'childWorkJson___name'
  | 'childWorkJson___dates'
  | 'childWorkJson___description'
  | 'childrenSkillsJson'
  | 'childrenSkillsJson___id'
  | 'childrenSkillsJson___parent___id'
  | 'childrenSkillsJson___parent___parent___id'
  | 'childrenSkillsJson___parent___parent___children'
  | 'childrenSkillsJson___parent___children'
  | 'childrenSkillsJson___parent___children___id'
  | 'childrenSkillsJson___parent___children___children'
  | 'childrenSkillsJson___parent___internal___content'
  | 'childrenSkillsJson___parent___internal___contentDigest'
  | 'childrenSkillsJson___parent___internal___description'
  | 'childrenSkillsJson___parent___internal___fieldOwners'
  | 'childrenSkillsJson___parent___internal___ignoreType'
  | 'childrenSkillsJson___parent___internal___mediaType'
  | 'childrenSkillsJson___parent___internal___owner'
  | 'childrenSkillsJson___parent___internal___type'
  | 'childrenSkillsJson___children'
  | 'childrenSkillsJson___children___id'
  | 'childrenSkillsJson___children___parent___id'
  | 'childrenSkillsJson___children___parent___children'
  | 'childrenSkillsJson___children___children'
  | 'childrenSkillsJson___children___children___id'
  | 'childrenSkillsJson___children___children___children'
  | 'childrenSkillsJson___children___internal___content'
  | 'childrenSkillsJson___children___internal___contentDigest'
  | 'childrenSkillsJson___children___internal___description'
  | 'childrenSkillsJson___children___internal___fieldOwners'
  | 'childrenSkillsJson___children___internal___ignoreType'
  | 'childrenSkillsJson___children___internal___mediaType'
  | 'childrenSkillsJson___children___internal___owner'
  | 'childrenSkillsJson___children___internal___type'
  | 'childrenSkillsJson___internal___content'
  | 'childrenSkillsJson___internal___contentDigest'
  | 'childrenSkillsJson___internal___description'
  | 'childrenSkillsJson___internal___fieldOwners'
  | 'childrenSkillsJson___internal___ignoreType'
  | 'childrenSkillsJson___internal___mediaType'
  | 'childrenSkillsJson___internal___owner'
  | 'childrenSkillsJson___internal___type'
  | 'childrenSkillsJson___title'
  | 'childrenSkillsJson___skillItems'
  | 'childrenSkillsJson___skillItems___name'
  | 'childrenSkillsJson___skillItems___src___sourceInstanceName'
  | 'childrenSkillsJson___skillItems___src___absolutePath'
  | 'childrenSkillsJson___skillItems___src___relativePath'
  | 'childrenSkillsJson___skillItems___src___extension'
  | 'childrenSkillsJson___skillItems___src___size'
  | 'childrenSkillsJson___skillItems___src___prettySize'
  | 'childrenSkillsJson___skillItems___src___modifiedTime'
  | 'childrenSkillsJson___skillItems___src___accessTime'
  | 'childrenSkillsJson___skillItems___src___changeTime'
  | 'childrenSkillsJson___skillItems___src___birthTime'
  | 'childrenSkillsJson___skillItems___src___root'
  | 'childrenSkillsJson___skillItems___src___dir'
  | 'childrenSkillsJson___skillItems___src___base'
  | 'childrenSkillsJson___skillItems___src___ext'
  | 'childrenSkillsJson___skillItems___src___name'
  | 'childrenSkillsJson___skillItems___src___relativeDirectory'
  | 'childrenSkillsJson___skillItems___src___dev'
  | 'childrenSkillsJson___skillItems___src___mode'
  | 'childrenSkillsJson___skillItems___src___nlink'
  | 'childrenSkillsJson___skillItems___src___uid'
  | 'childrenSkillsJson___skillItems___src___gid'
  | 'childrenSkillsJson___skillItems___src___rdev'
  | 'childrenSkillsJson___skillItems___src___ino'
  | 'childrenSkillsJson___skillItems___src___atimeMs'
  | 'childrenSkillsJson___skillItems___src___mtimeMs'
  | 'childrenSkillsJson___skillItems___src___ctimeMs'
  | 'childrenSkillsJson___skillItems___src___atime'
  | 'childrenSkillsJson___skillItems___src___mtime'
  | 'childrenSkillsJson___skillItems___src___ctime'
  | 'childrenSkillsJson___skillItems___src___birthtime'
  | 'childrenSkillsJson___skillItems___src___birthtimeMs'
  | 'childrenSkillsJson___skillItems___src___blksize'
  | 'childrenSkillsJson___skillItems___src___blocks'
  | 'childrenSkillsJson___skillItems___src___url'
  | 'childrenSkillsJson___skillItems___src___publicURL'
  | 'childrenSkillsJson___skillItems___src___childrenImageSharp'
  | 'childrenSkillsJson___skillItems___src___childrenWorkJson'
  | 'childrenSkillsJson___skillItems___src___childrenSkillsJson'
  | 'childrenSkillsJson___skillItems___src___childrenSeJson'
  | 'childrenSkillsJson___skillItems___src___childrenRuJson'
  | 'childrenSkillsJson___skillItems___src___childrenLocale'
  | 'childrenSkillsJson___skillItems___src___childrenHuJson'
  | 'childrenSkillsJson___skillItems___src___childrenFrJson'
  | 'childrenSkillsJson___skillItems___src___childrenFlagsJson'
  | 'childrenSkillsJson___skillItems___src___childrenEtJson'
  | 'childrenSkillsJson___skillItems___src___childrenEsJson'
  | 'childrenSkillsJson___skillItems___src___childrenEnJson'
  | 'childrenSkillsJson___skillItems___src___childrenEducationJson'
  | 'childrenSkillsJson___skillItems___src___childrenDeJson'
  | 'childrenSkillsJson___skillItems___src___id'
  | 'childrenSkillsJson___skillItems___src___children'
  | 'childrenSkillsJson___skillItems___extra'
  | 'childrenSkillsJson___skillItems___subSkills'
  | 'childrenSkillsJson___skillItems___subSkills___name'
  | 'childrenSkillsJson___skillItems___subSkills___href'
  | 'childrenSkillsJson___skillItems___subSkills___extra'
  | 'childrenSkillsJson___skillItems___subSkills___subSkills'
  | 'childrenSkillsJson___skillItems___href'
  | 'childSkillsJson___id'
  | 'childSkillsJson___parent___id'
  | 'childSkillsJson___parent___parent___id'
  | 'childSkillsJson___parent___parent___children'
  | 'childSkillsJson___parent___children'
  | 'childSkillsJson___parent___children___id'
  | 'childSkillsJson___parent___children___children'
  | 'childSkillsJson___parent___internal___content'
  | 'childSkillsJson___parent___internal___contentDigest'
  | 'childSkillsJson___parent___internal___description'
  | 'childSkillsJson___parent___internal___fieldOwners'
  | 'childSkillsJson___parent___internal___ignoreType'
  | 'childSkillsJson___parent___internal___mediaType'
  | 'childSkillsJson___parent___internal___owner'
  | 'childSkillsJson___parent___internal___type'
  | 'childSkillsJson___children'
  | 'childSkillsJson___children___id'
  | 'childSkillsJson___children___parent___id'
  | 'childSkillsJson___children___parent___children'
  | 'childSkillsJson___children___children'
  | 'childSkillsJson___children___children___id'
  | 'childSkillsJson___children___children___children'
  | 'childSkillsJson___children___internal___content'
  | 'childSkillsJson___children___internal___contentDigest'
  | 'childSkillsJson___children___internal___description'
  | 'childSkillsJson___children___internal___fieldOwners'
  | 'childSkillsJson___children___internal___ignoreType'
  | 'childSkillsJson___children___internal___mediaType'
  | 'childSkillsJson___children___internal___owner'
  | 'childSkillsJson___children___internal___type'
  | 'childSkillsJson___internal___content'
  | 'childSkillsJson___internal___contentDigest'
  | 'childSkillsJson___internal___description'
  | 'childSkillsJson___internal___fieldOwners'
  | 'childSkillsJson___internal___ignoreType'
  | 'childSkillsJson___internal___mediaType'
  | 'childSkillsJson___internal___owner'
  | 'childSkillsJson___internal___type'
  | 'childSkillsJson___title'
  | 'childSkillsJson___skillItems'
  | 'childSkillsJson___skillItems___name'
  | 'childSkillsJson___skillItems___src___sourceInstanceName'
  | 'childSkillsJson___skillItems___src___absolutePath'
  | 'childSkillsJson___skillItems___src___relativePath'
  | 'childSkillsJson___skillItems___src___extension'
  | 'childSkillsJson___skillItems___src___size'
  | 'childSkillsJson___skillItems___src___prettySize'
  | 'childSkillsJson___skillItems___src___modifiedTime'
  | 'childSkillsJson___skillItems___src___accessTime'
  | 'childSkillsJson___skillItems___src___changeTime'
  | 'childSkillsJson___skillItems___src___birthTime'
  | 'childSkillsJson___skillItems___src___root'
  | 'childSkillsJson___skillItems___src___dir'
  | 'childSkillsJson___skillItems___src___base'
  | 'childSkillsJson___skillItems___src___ext'
  | 'childSkillsJson___skillItems___src___name'
  | 'childSkillsJson___skillItems___src___relativeDirectory'
  | 'childSkillsJson___skillItems___src___dev'
  | 'childSkillsJson___skillItems___src___mode'
  | 'childSkillsJson___skillItems___src___nlink'
  | 'childSkillsJson___skillItems___src___uid'
  | 'childSkillsJson___skillItems___src___gid'
  | 'childSkillsJson___skillItems___src___rdev'
  | 'childSkillsJson___skillItems___src___ino'
  | 'childSkillsJson___skillItems___src___atimeMs'
  | 'childSkillsJson___skillItems___src___mtimeMs'
  | 'childSkillsJson___skillItems___src___ctimeMs'
  | 'childSkillsJson___skillItems___src___atime'
  | 'childSkillsJson___skillItems___src___mtime'
  | 'childSkillsJson___skillItems___src___ctime'
  | 'childSkillsJson___skillItems___src___birthtime'
  | 'childSkillsJson___skillItems___src___birthtimeMs'
  | 'childSkillsJson___skillItems___src___blksize'
  | 'childSkillsJson___skillItems___src___blocks'
  | 'childSkillsJson___skillItems___src___url'
  | 'childSkillsJson___skillItems___src___publicURL'
  | 'childSkillsJson___skillItems___src___childrenImageSharp'
  | 'childSkillsJson___skillItems___src___childrenWorkJson'
  | 'childSkillsJson___skillItems___src___childrenSkillsJson'
  | 'childSkillsJson___skillItems___src___childrenSeJson'
  | 'childSkillsJson___skillItems___src___childrenRuJson'
  | 'childSkillsJson___skillItems___src___childrenLocale'
  | 'childSkillsJson___skillItems___src___childrenHuJson'
  | 'childSkillsJson___skillItems___src___childrenFrJson'
  | 'childSkillsJson___skillItems___src___childrenFlagsJson'
  | 'childSkillsJson___skillItems___src___childrenEtJson'
  | 'childSkillsJson___skillItems___src___childrenEsJson'
  | 'childSkillsJson___skillItems___src___childrenEnJson'
  | 'childSkillsJson___skillItems___src___childrenEducationJson'
  | 'childSkillsJson___skillItems___src___childrenDeJson'
  | 'childSkillsJson___skillItems___src___id'
  | 'childSkillsJson___skillItems___src___children'
  | 'childSkillsJson___skillItems___extra'
  | 'childSkillsJson___skillItems___subSkills'
  | 'childSkillsJson___skillItems___subSkills___name'
  | 'childSkillsJson___skillItems___subSkills___href'
  | 'childSkillsJson___skillItems___subSkills___extra'
  | 'childSkillsJson___skillItems___subSkills___subSkills'
  | 'childSkillsJson___skillItems___href'
  | 'childrenSeJson'
  | 'childrenSeJson___id'
  | 'childrenSeJson___parent___id'
  | 'childrenSeJson___parent___parent___id'
  | 'childrenSeJson___parent___parent___children'
  | 'childrenSeJson___parent___children'
  | 'childrenSeJson___parent___children___id'
  | 'childrenSeJson___parent___children___children'
  | 'childrenSeJson___parent___internal___content'
  | 'childrenSeJson___parent___internal___contentDigest'
  | 'childrenSeJson___parent___internal___description'
  | 'childrenSeJson___parent___internal___fieldOwners'
  | 'childrenSeJson___parent___internal___ignoreType'
  | 'childrenSeJson___parent___internal___mediaType'
  | 'childrenSeJson___parent___internal___owner'
  | 'childrenSeJson___parent___internal___type'
  | 'childrenSeJson___children'
  | 'childrenSeJson___children___id'
  | 'childrenSeJson___children___parent___id'
  | 'childrenSeJson___children___parent___children'
  | 'childrenSeJson___children___children'
  | 'childrenSeJson___children___children___id'
  | 'childrenSeJson___children___children___children'
  | 'childrenSeJson___children___internal___content'
  | 'childrenSeJson___children___internal___contentDigest'
  | 'childrenSeJson___children___internal___description'
  | 'childrenSeJson___children___internal___fieldOwners'
  | 'childrenSeJson___children___internal___ignoreType'
  | 'childrenSeJson___children___internal___mediaType'
  | 'childrenSeJson___children___internal___owner'
  | 'childrenSeJson___children___internal___type'
  | 'childrenSeJson___internal___content'
  | 'childrenSeJson___internal___contentDigest'
  | 'childrenSeJson___internal___description'
  | 'childrenSeJson___internal___fieldOwners'
  | 'childrenSeJson___internal___ignoreType'
  | 'childrenSeJson___internal___mediaType'
  | 'childrenSeJson___internal___owner'
  | 'childrenSeJson___internal___type'
  | 'childrenSeJson___Banner___SoftwareDeveloper'
  | 'childSeJson___id'
  | 'childSeJson___parent___id'
  | 'childSeJson___parent___parent___id'
  | 'childSeJson___parent___parent___children'
  | 'childSeJson___parent___children'
  | 'childSeJson___parent___children___id'
  | 'childSeJson___parent___children___children'
  | 'childSeJson___parent___internal___content'
  | 'childSeJson___parent___internal___contentDigest'
  | 'childSeJson___parent___internal___description'
  | 'childSeJson___parent___internal___fieldOwners'
  | 'childSeJson___parent___internal___ignoreType'
  | 'childSeJson___parent___internal___mediaType'
  | 'childSeJson___parent___internal___owner'
  | 'childSeJson___parent___internal___type'
  | 'childSeJson___children'
  | 'childSeJson___children___id'
  | 'childSeJson___children___parent___id'
  | 'childSeJson___children___parent___children'
  | 'childSeJson___children___children'
  | 'childSeJson___children___children___id'
  | 'childSeJson___children___children___children'
  | 'childSeJson___children___internal___content'
  | 'childSeJson___children___internal___contentDigest'
  | 'childSeJson___children___internal___description'
  | 'childSeJson___children___internal___fieldOwners'
  | 'childSeJson___children___internal___ignoreType'
  | 'childSeJson___children___internal___mediaType'
  | 'childSeJson___children___internal___owner'
  | 'childSeJson___children___internal___type'
  | 'childSeJson___internal___content'
  | 'childSeJson___internal___contentDigest'
  | 'childSeJson___internal___description'
  | 'childSeJson___internal___fieldOwners'
  | 'childSeJson___internal___ignoreType'
  | 'childSeJson___internal___mediaType'
  | 'childSeJson___internal___owner'
  | 'childSeJson___internal___type'
  | 'childSeJson___Banner___SoftwareDeveloper'
  | 'childrenRuJson'
  | 'childrenRuJson___id'
  | 'childrenRuJson___parent___id'
  | 'childrenRuJson___parent___parent___id'
  | 'childrenRuJson___parent___parent___children'
  | 'childrenRuJson___parent___children'
  | 'childrenRuJson___parent___children___id'
  | 'childrenRuJson___parent___children___children'
  | 'childrenRuJson___parent___internal___content'
  | 'childrenRuJson___parent___internal___contentDigest'
  | 'childrenRuJson___parent___internal___description'
  | 'childrenRuJson___parent___internal___fieldOwners'
  | 'childrenRuJson___parent___internal___ignoreType'
  | 'childrenRuJson___parent___internal___mediaType'
  | 'childrenRuJson___parent___internal___owner'
  | 'childrenRuJson___parent___internal___type'
  | 'childrenRuJson___children'
  | 'childrenRuJson___children___id'
  | 'childrenRuJson___children___parent___id'
  | 'childrenRuJson___children___parent___children'
  | 'childrenRuJson___children___children'
  | 'childrenRuJson___children___children___id'
  | 'childrenRuJson___children___children___children'
  | 'childrenRuJson___children___internal___content'
  | 'childrenRuJson___children___internal___contentDigest'
  | 'childrenRuJson___children___internal___description'
  | 'childrenRuJson___children___internal___fieldOwners'
  | 'childrenRuJson___children___internal___ignoreType'
  | 'childrenRuJson___children___internal___mediaType'
  | 'childrenRuJson___children___internal___owner'
  | 'childrenRuJson___children___internal___type'
  | 'childrenRuJson___internal___content'
  | 'childrenRuJson___internal___contentDigest'
  | 'childrenRuJson___internal___description'
  | 'childrenRuJson___internal___fieldOwners'
  | 'childrenRuJson___internal___ignoreType'
  | 'childrenRuJson___internal___mediaType'
  | 'childrenRuJson___internal___owner'
  | 'childrenRuJson___internal___type'
  | 'childrenRuJson___About___AboutMe'
  | 'childrenRuJson___About___Description'
  | 'childrenRuJson___About___PhotoDescription'
  | 'childrenRuJson___About___ViewCV'
  | 'childrenRuJson___Acknowledgements'
  | 'childrenRuJson___Banner___DexterSibirtsev'
  | 'childrenRuJson___Banner___Experience'
  | 'childrenRuJson___Banner___HelloIAmAProgrammer'
  | 'childrenRuJson___Banner___SoftwareDeveloper'
  | 'childrenRuJson___Blog___Blog'
  | 'childrenRuJson___Contact___Contact'
  | 'childrenRuJson___Contact___GetInTouch'
  | 'childrenRuJson___Contact___SendEmail'
  | 'childrenRuJson___Education___Description'
  | 'childrenRuJson___Education___Education'
  | 'childrenRuJson___Experience___TranslationsUnderConstruction'
  | 'childrenRuJson___PageLinks___Acknowledgements'
  | 'childrenRuJson___PageLinks___Home'
  | 'childrenRuJson___SectionButtons___About'
  | 'childrenRuJson___SectionButtons___Blog'
  | 'childrenRuJson___SectionButtons___Contact'
  | 'childrenRuJson___SectionButtons___Experience'
  | 'childrenRuJson___SectionButtons___Skills'
  | 'childrenRuJson___Skills___Overview'
  | 'childrenRuJson___Skills___Skills'
  | 'childrenRuJson___Work___Work'
  | 'childRuJson___id'
  | 'childRuJson___parent___id'
  | 'childRuJson___parent___parent___id'
  | 'childRuJson___parent___parent___children'
  | 'childRuJson___parent___children'
  | 'childRuJson___parent___children___id'
  | 'childRuJson___parent___children___children'
  | 'childRuJson___parent___internal___content'
  | 'childRuJson___parent___internal___contentDigest'
  | 'childRuJson___parent___internal___description'
  | 'childRuJson___parent___internal___fieldOwners'
  | 'childRuJson___parent___internal___ignoreType'
  | 'childRuJson___parent___internal___mediaType'
  | 'childRuJson___parent___internal___owner'
  | 'childRuJson___parent___internal___type'
  | 'childRuJson___children'
  | 'childRuJson___children___id'
  | 'childRuJson___children___parent___id'
  | 'childRuJson___children___parent___children'
  | 'childRuJson___children___children'
  | 'childRuJson___children___children___id'
  | 'childRuJson___children___children___children'
  | 'childRuJson___children___internal___content'
  | 'childRuJson___children___internal___contentDigest'
  | 'childRuJson___children___internal___description'
  | 'childRuJson___children___internal___fieldOwners'
  | 'childRuJson___children___internal___ignoreType'
  | 'childRuJson___children___internal___mediaType'
  | 'childRuJson___children___internal___owner'
  | 'childRuJson___children___internal___type'
  | 'childRuJson___internal___content'
  | 'childRuJson___internal___contentDigest'
  | 'childRuJson___internal___description'
  | 'childRuJson___internal___fieldOwners'
  | 'childRuJson___internal___ignoreType'
  | 'childRuJson___internal___mediaType'
  | 'childRuJson___internal___owner'
  | 'childRuJson___internal___type'
  | 'childRuJson___About___AboutMe'
  | 'childRuJson___About___Description'
  | 'childRuJson___About___PhotoDescription'
  | 'childRuJson___About___ViewCV'
  | 'childRuJson___Acknowledgements'
  | 'childRuJson___Banner___DexterSibirtsev'
  | 'childRuJson___Banner___Experience'
  | 'childRuJson___Banner___HelloIAmAProgrammer'
  | 'childRuJson___Banner___SoftwareDeveloper'
  | 'childRuJson___Blog___Blog'
  | 'childRuJson___Contact___Contact'
  | 'childRuJson___Contact___GetInTouch'
  | 'childRuJson___Contact___SendEmail'
  | 'childRuJson___Education___Description'
  | 'childRuJson___Education___Education'
  | 'childRuJson___Experience___TranslationsUnderConstruction'
  | 'childRuJson___PageLinks___Acknowledgements'
  | 'childRuJson___PageLinks___Home'
  | 'childRuJson___SectionButtons___About'
  | 'childRuJson___SectionButtons___Blog'
  | 'childRuJson___SectionButtons___Contact'
  | 'childRuJson___SectionButtons___Experience'
  | 'childRuJson___SectionButtons___Skills'
  | 'childRuJson___Skills___Overview'
  | 'childRuJson___Skills___Skills'
  | 'childRuJson___Work___Work'
  | 'childrenLocale'
  | 'childrenLocale___id'
  | 'childrenLocale___parent___id'
  | 'childrenLocale___parent___parent___id'
  | 'childrenLocale___parent___parent___children'
  | 'childrenLocale___parent___children'
  | 'childrenLocale___parent___children___id'
  | 'childrenLocale___parent___children___children'
  | 'childrenLocale___parent___internal___content'
  | 'childrenLocale___parent___internal___contentDigest'
  | 'childrenLocale___parent___internal___description'
  | 'childrenLocale___parent___internal___fieldOwners'
  | 'childrenLocale___parent___internal___ignoreType'
  | 'childrenLocale___parent___internal___mediaType'
  | 'childrenLocale___parent___internal___owner'
  | 'childrenLocale___parent___internal___type'
  | 'childrenLocale___children'
  | 'childrenLocale___children___id'
  | 'childrenLocale___children___parent___id'
  | 'childrenLocale___children___parent___children'
  | 'childrenLocale___children___children'
  | 'childrenLocale___children___children___id'
  | 'childrenLocale___children___children___children'
  | 'childrenLocale___children___internal___content'
  | 'childrenLocale___children___internal___contentDigest'
  | 'childrenLocale___children___internal___description'
  | 'childrenLocale___children___internal___fieldOwners'
  | 'childrenLocale___children___internal___ignoreType'
  | 'childrenLocale___children___internal___mediaType'
  | 'childrenLocale___children___internal___owner'
  | 'childrenLocale___children___internal___type'
  | 'childrenLocale___internal___content'
  | 'childrenLocale___internal___contentDigest'
  | 'childrenLocale___internal___description'
  | 'childrenLocale___internal___fieldOwners'
  | 'childrenLocale___internal___ignoreType'
  | 'childrenLocale___internal___mediaType'
  | 'childrenLocale___internal___owner'
  | 'childrenLocale___internal___type'
  | 'childrenLocale___language'
  | 'childrenLocale___ns'
  | 'childrenLocale___data'
  | 'childrenLocale___fileAbsolutePath'
  | 'childLocale___id'
  | 'childLocale___parent___id'
  | 'childLocale___parent___parent___id'
  | 'childLocale___parent___parent___children'
  | 'childLocale___parent___children'
  | 'childLocale___parent___children___id'
  | 'childLocale___parent___children___children'
  | 'childLocale___parent___internal___content'
  | 'childLocale___parent___internal___contentDigest'
  | 'childLocale___parent___internal___description'
  | 'childLocale___parent___internal___fieldOwners'
  | 'childLocale___parent___internal___ignoreType'
  | 'childLocale___parent___internal___mediaType'
  | 'childLocale___parent___internal___owner'
  | 'childLocale___parent___internal___type'
  | 'childLocale___children'
  | 'childLocale___children___id'
  | 'childLocale___children___parent___id'
  | 'childLocale___children___parent___children'
  | 'childLocale___children___children'
  | 'childLocale___children___children___id'
  | 'childLocale___children___children___children'
  | 'childLocale___children___internal___content'
  | 'childLocale___children___internal___contentDigest'
  | 'childLocale___children___internal___description'
  | 'childLocale___children___internal___fieldOwners'
  | 'childLocale___children___internal___ignoreType'
  | 'childLocale___children___internal___mediaType'
  | 'childLocale___children___internal___owner'
  | 'childLocale___children___internal___type'
  | 'childLocale___internal___content'
  | 'childLocale___internal___contentDigest'
  | 'childLocale___internal___description'
  | 'childLocale___internal___fieldOwners'
  | 'childLocale___internal___ignoreType'
  | 'childLocale___internal___mediaType'
  | 'childLocale___internal___owner'
  | 'childLocale___internal___type'
  | 'childLocale___language'
  | 'childLocale___ns'
  | 'childLocale___data'
  | 'childLocale___fileAbsolutePath'
  | 'childrenHuJson'
  | 'childrenHuJson___id'
  | 'childrenHuJson___parent___id'
  | 'childrenHuJson___parent___parent___id'
  | 'childrenHuJson___parent___parent___children'
  | 'childrenHuJson___parent___children'
  | 'childrenHuJson___parent___children___id'
  | 'childrenHuJson___parent___children___children'
  | 'childrenHuJson___parent___internal___content'
  | 'childrenHuJson___parent___internal___contentDigest'
  | 'childrenHuJson___parent___internal___description'
  | 'childrenHuJson___parent___internal___fieldOwners'
  | 'childrenHuJson___parent___internal___ignoreType'
  | 'childrenHuJson___parent___internal___mediaType'
  | 'childrenHuJson___parent___internal___owner'
  | 'childrenHuJson___parent___internal___type'
  | 'childrenHuJson___children'
  | 'childrenHuJson___children___id'
  | 'childrenHuJson___children___parent___id'
  | 'childrenHuJson___children___parent___children'
  | 'childrenHuJson___children___children'
  | 'childrenHuJson___children___children___id'
  | 'childrenHuJson___children___children___children'
  | 'childrenHuJson___children___internal___content'
  | 'childrenHuJson___children___internal___contentDigest'
  | 'childrenHuJson___children___internal___description'
  | 'childrenHuJson___children___internal___fieldOwners'
  | 'childrenHuJson___children___internal___ignoreType'
  | 'childrenHuJson___children___internal___mediaType'
  | 'childrenHuJson___children___internal___owner'
  | 'childrenHuJson___children___internal___type'
  | 'childrenHuJson___internal___content'
  | 'childrenHuJson___internal___contentDigest'
  | 'childrenHuJson___internal___description'
  | 'childrenHuJson___internal___fieldOwners'
  | 'childrenHuJson___internal___ignoreType'
  | 'childrenHuJson___internal___mediaType'
  | 'childrenHuJson___internal___owner'
  | 'childrenHuJson___internal___type'
  | 'childrenHuJson___About___AboutMe'
  | 'childrenHuJson___About___Description'
  | 'childrenHuJson___About___PhotoDescription'
  | 'childrenHuJson___About___ViewCV'
  | 'childrenHuJson___Acknowledgements'
  | 'childrenHuJson___Banner___DexterSibirtsev'
  | 'childrenHuJson___Banner___Experience'
  | 'childrenHuJson___Banner___HelloIAmAProgrammer'
  | 'childrenHuJson___Banner___SoftwareDeveloper'
  | 'childrenHuJson___Blog___Blog'
  | 'childrenHuJson___Contact___Contact'
  | 'childrenHuJson___Contact___GetInTouch'
  | 'childrenHuJson___Contact___SendEmail'
  | 'childrenHuJson___Education___Description'
  | 'childrenHuJson___Education___Education'
  | 'childrenHuJson___Experience___TranslationsUnderConstruction'
  | 'childrenHuJson___PageLinks___Acknowledgements'
  | 'childrenHuJson___PageLinks___Home'
  | 'childrenHuJson___SectionButtons___About'
  | 'childrenHuJson___SectionButtons___Blog'
  | 'childrenHuJson___SectionButtons___Contact'
  | 'childrenHuJson___SectionButtons___Experience'
  | 'childrenHuJson___SectionButtons___Skills'
  | 'childrenHuJson___Skills___Overview'
  | 'childrenHuJson___Skills___Skills'
  | 'childrenHuJson___Work___Work'
  | 'childHuJson___id'
  | 'childHuJson___parent___id'
  | 'childHuJson___parent___parent___id'
  | 'childHuJson___parent___parent___children'
  | 'childHuJson___parent___children'
  | 'childHuJson___parent___children___id'
  | 'childHuJson___parent___children___children'
  | 'childHuJson___parent___internal___content'
  | 'childHuJson___parent___internal___contentDigest'
  | 'childHuJson___parent___internal___description'
  | 'childHuJson___parent___internal___fieldOwners'
  | 'childHuJson___parent___internal___ignoreType'
  | 'childHuJson___parent___internal___mediaType'
  | 'childHuJson___parent___internal___owner'
  | 'childHuJson___parent___internal___type'
  | 'childHuJson___children'
  | 'childHuJson___children___id'
  | 'childHuJson___children___parent___id'
  | 'childHuJson___children___parent___children'
  | 'childHuJson___children___children'
  | 'childHuJson___children___children___id'
  | 'childHuJson___children___children___children'
  | 'childHuJson___children___internal___content'
  | 'childHuJson___children___internal___contentDigest'
  | 'childHuJson___children___internal___description'
  | 'childHuJson___children___internal___fieldOwners'
  | 'childHuJson___children___internal___ignoreType'
  | 'childHuJson___children___internal___mediaType'
  | 'childHuJson___children___internal___owner'
  | 'childHuJson___children___internal___type'
  | 'childHuJson___internal___content'
  | 'childHuJson___internal___contentDigest'
  | 'childHuJson___internal___description'
  | 'childHuJson___internal___fieldOwners'
  | 'childHuJson___internal___ignoreType'
  | 'childHuJson___internal___mediaType'
  | 'childHuJson___internal___owner'
  | 'childHuJson___internal___type'
  | 'childHuJson___About___AboutMe'
  | 'childHuJson___About___Description'
  | 'childHuJson___About___PhotoDescription'
  | 'childHuJson___About___ViewCV'
  | 'childHuJson___Acknowledgements'
  | 'childHuJson___Banner___DexterSibirtsev'
  | 'childHuJson___Banner___Experience'
  | 'childHuJson___Banner___HelloIAmAProgrammer'
  | 'childHuJson___Banner___SoftwareDeveloper'
  | 'childHuJson___Blog___Blog'
  | 'childHuJson___Contact___Contact'
  | 'childHuJson___Contact___GetInTouch'
  | 'childHuJson___Contact___SendEmail'
  | 'childHuJson___Education___Description'
  | 'childHuJson___Education___Education'
  | 'childHuJson___Experience___TranslationsUnderConstruction'
  | 'childHuJson___PageLinks___Acknowledgements'
  | 'childHuJson___PageLinks___Home'
  | 'childHuJson___SectionButtons___About'
  | 'childHuJson___SectionButtons___Blog'
  | 'childHuJson___SectionButtons___Contact'
  | 'childHuJson___SectionButtons___Experience'
  | 'childHuJson___SectionButtons___Skills'
  | 'childHuJson___Skills___Overview'
  | 'childHuJson___Skills___Skills'
  | 'childHuJson___Work___Work'
  | 'childrenFrJson'
  | 'childrenFrJson___id'
  | 'childrenFrJson___parent___id'
  | 'childrenFrJson___parent___parent___id'
  | 'childrenFrJson___parent___parent___children'
  | 'childrenFrJson___parent___children'
  | 'childrenFrJson___parent___children___id'
  | 'childrenFrJson___parent___children___children'
  | 'childrenFrJson___parent___internal___content'
  | 'childrenFrJson___parent___internal___contentDigest'
  | 'childrenFrJson___parent___internal___description'
  | 'childrenFrJson___parent___internal___fieldOwners'
  | 'childrenFrJson___parent___internal___ignoreType'
  | 'childrenFrJson___parent___internal___mediaType'
  | 'childrenFrJson___parent___internal___owner'
  | 'childrenFrJson___parent___internal___type'
  | 'childrenFrJson___children'
  | 'childrenFrJson___children___id'
  | 'childrenFrJson___children___parent___id'
  | 'childrenFrJson___children___parent___children'
  | 'childrenFrJson___children___children'
  | 'childrenFrJson___children___children___id'
  | 'childrenFrJson___children___children___children'
  | 'childrenFrJson___children___internal___content'
  | 'childrenFrJson___children___internal___contentDigest'
  | 'childrenFrJson___children___internal___description'
  | 'childrenFrJson___children___internal___fieldOwners'
  | 'childrenFrJson___children___internal___ignoreType'
  | 'childrenFrJson___children___internal___mediaType'
  | 'childrenFrJson___children___internal___owner'
  | 'childrenFrJson___children___internal___type'
  | 'childrenFrJson___internal___content'
  | 'childrenFrJson___internal___contentDigest'
  | 'childrenFrJson___internal___description'
  | 'childrenFrJson___internal___fieldOwners'
  | 'childrenFrJson___internal___ignoreType'
  | 'childrenFrJson___internal___mediaType'
  | 'childrenFrJson___internal___owner'
  | 'childrenFrJson___internal___type'
  | 'childrenFrJson___About___AboutMe'
  | 'childrenFrJson___About___Description'
  | 'childrenFrJson___About___PhotoDescription'
  | 'childrenFrJson___About___ViewCV'
  | 'childrenFrJson___Acknowledgements'
  | 'childrenFrJson___Banner___DexterSibirtsev'
  | 'childrenFrJson___Banner___Experience'
  | 'childrenFrJson___Banner___HelloIAmAProgrammer'
  | 'childrenFrJson___Banner___SoftwareDeveloper'
  | 'childrenFrJson___Blog___Blog'
  | 'childrenFrJson___Contact___Contact'
  | 'childrenFrJson___Contact___GetInTouch'
  | 'childrenFrJson___Contact___SendEmail'
  | 'childrenFrJson___Education___Description'
  | 'childrenFrJson___Education___Education'
  | 'childrenFrJson___Experience___TranslationsUnderConstruction'
  | 'childrenFrJson___PageLinks___Acknowledgements'
  | 'childrenFrJson___PageLinks___Home'
  | 'childrenFrJson___SectionButtons___About'
  | 'childrenFrJson___SectionButtons___Blog'
  | 'childrenFrJson___SectionButtons___Contact'
  | 'childrenFrJson___SectionButtons___Experience'
  | 'childrenFrJson___SectionButtons___Skills'
  | 'childrenFrJson___Skills___Overview'
  | 'childrenFrJson___Skills___Skills'
  | 'childrenFrJson___Work___Work'
  | 'childFrJson___id'
  | 'childFrJson___parent___id'
  | 'childFrJson___parent___parent___id'
  | 'childFrJson___parent___parent___children'
  | 'childFrJson___parent___children'
  | 'childFrJson___parent___children___id'
  | 'childFrJson___parent___children___children'
  | 'childFrJson___parent___internal___content'
  | 'childFrJson___parent___internal___contentDigest'
  | 'childFrJson___parent___internal___description'
  | 'childFrJson___parent___internal___fieldOwners'
  | 'childFrJson___parent___internal___ignoreType'
  | 'childFrJson___parent___internal___mediaType'
  | 'childFrJson___parent___internal___owner'
  | 'childFrJson___parent___internal___type'
  | 'childFrJson___children'
  | 'childFrJson___children___id'
  | 'childFrJson___children___parent___id'
  | 'childFrJson___children___parent___children'
  | 'childFrJson___children___children'
  | 'childFrJson___children___children___id'
  | 'childFrJson___children___children___children'
  | 'childFrJson___children___internal___content'
  | 'childFrJson___children___internal___contentDigest'
  | 'childFrJson___children___internal___description'
  | 'childFrJson___children___internal___fieldOwners'
  | 'childFrJson___children___internal___ignoreType'
  | 'childFrJson___children___internal___mediaType'
  | 'childFrJson___children___internal___owner'
  | 'childFrJson___children___internal___type'
  | 'childFrJson___internal___content'
  | 'childFrJson___internal___contentDigest'
  | 'childFrJson___internal___description'
  | 'childFrJson___internal___fieldOwners'
  | 'childFrJson___internal___ignoreType'
  | 'childFrJson___internal___mediaType'
  | 'childFrJson___internal___owner'
  | 'childFrJson___internal___type'
  | 'childFrJson___About___AboutMe'
  | 'childFrJson___About___Description'
  | 'childFrJson___About___PhotoDescription'
  | 'childFrJson___About___ViewCV'
  | 'childFrJson___Acknowledgements'
  | 'childFrJson___Banner___DexterSibirtsev'
  | 'childFrJson___Banner___Experience'
  | 'childFrJson___Banner___HelloIAmAProgrammer'
  | 'childFrJson___Banner___SoftwareDeveloper'
  | 'childFrJson___Blog___Blog'
  | 'childFrJson___Contact___Contact'
  | 'childFrJson___Contact___GetInTouch'
  | 'childFrJson___Contact___SendEmail'
  | 'childFrJson___Education___Description'
  | 'childFrJson___Education___Education'
  | 'childFrJson___Experience___TranslationsUnderConstruction'
  | 'childFrJson___PageLinks___Acknowledgements'
  | 'childFrJson___PageLinks___Home'
  | 'childFrJson___SectionButtons___About'
  | 'childFrJson___SectionButtons___Blog'
  | 'childFrJson___SectionButtons___Contact'
  | 'childFrJson___SectionButtons___Experience'
  | 'childFrJson___SectionButtons___Skills'
  | 'childFrJson___Skills___Overview'
  | 'childFrJson___Skills___Skills'
  | 'childFrJson___Work___Work'
  | 'childrenFlagsJson'
  | 'childrenFlagsJson___id'
  | 'childrenFlagsJson___parent___id'
  | 'childrenFlagsJson___parent___parent___id'
  | 'childrenFlagsJson___parent___parent___children'
  | 'childrenFlagsJson___parent___children'
  | 'childrenFlagsJson___parent___children___id'
  | 'childrenFlagsJson___parent___children___children'
  | 'childrenFlagsJson___parent___internal___content'
  | 'childrenFlagsJson___parent___internal___contentDigest'
  | 'childrenFlagsJson___parent___internal___description'
  | 'childrenFlagsJson___parent___internal___fieldOwners'
  | 'childrenFlagsJson___parent___internal___ignoreType'
  | 'childrenFlagsJson___parent___internal___mediaType'
  | 'childrenFlagsJson___parent___internal___owner'
  | 'childrenFlagsJson___parent___internal___type'
  | 'childrenFlagsJson___children'
  | 'childrenFlagsJson___children___id'
  | 'childrenFlagsJson___children___parent___id'
  | 'childrenFlagsJson___children___parent___children'
  | 'childrenFlagsJson___children___children'
  | 'childrenFlagsJson___children___children___id'
  | 'childrenFlagsJson___children___children___children'
  | 'childrenFlagsJson___children___internal___content'
  | 'childrenFlagsJson___children___internal___contentDigest'
  | 'childrenFlagsJson___children___internal___description'
  | 'childrenFlagsJson___children___internal___fieldOwners'
  | 'childrenFlagsJson___children___internal___ignoreType'
  | 'childrenFlagsJson___children___internal___mediaType'
  | 'childrenFlagsJson___children___internal___owner'
  | 'childrenFlagsJson___children___internal___type'
  | 'childrenFlagsJson___internal___content'
  | 'childrenFlagsJson___internal___contentDigest'
  | 'childrenFlagsJson___internal___description'
  | 'childrenFlagsJson___internal___fieldOwners'
  | 'childrenFlagsJson___internal___ignoreType'
  | 'childrenFlagsJson___internal___mediaType'
  | 'childrenFlagsJson___internal___owner'
  | 'childrenFlagsJson___internal___type'
  | 'childrenFlagsJson___code'
  | 'childrenFlagsJson___name'
  | 'childrenFlagsJson___src___sourceInstanceName'
  | 'childrenFlagsJson___src___absolutePath'
  | 'childrenFlagsJson___src___relativePath'
  | 'childrenFlagsJson___src___extension'
  | 'childrenFlagsJson___src___size'
  | 'childrenFlagsJson___src___prettySize'
  | 'childrenFlagsJson___src___modifiedTime'
  | 'childrenFlagsJson___src___accessTime'
  | 'childrenFlagsJson___src___changeTime'
  | 'childrenFlagsJson___src___birthTime'
  | 'childrenFlagsJson___src___root'
  | 'childrenFlagsJson___src___dir'
  | 'childrenFlagsJson___src___base'
  | 'childrenFlagsJson___src___ext'
  | 'childrenFlagsJson___src___name'
  | 'childrenFlagsJson___src___relativeDirectory'
  | 'childrenFlagsJson___src___dev'
  | 'childrenFlagsJson___src___mode'
  | 'childrenFlagsJson___src___nlink'
  | 'childrenFlagsJson___src___uid'
  | 'childrenFlagsJson___src___gid'
  | 'childrenFlagsJson___src___rdev'
  | 'childrenFlagsJson___src___ino'
  | 'childrenFlagsJson___src___atimeMs'
  | 'childrenFlagsJson___src___mtimeMs'
  | 'childrenFlagsJson___src___ctimeMs'
  | 'childrenFlagsJson___src___atime'
  | 'childrenFlagsJson___src___mtime'
  | 'childrenFlagsJson___src___ctime'
  | 'childrenFlagsJson___src___birthtime'
  | 'childrenFlagsJson___src___birthtimeMs'
  | 'childrenFlagsJson___src___blksize'
  | 'childrenFlagsJson___src___blocks'
  | 'childrenFlagsJson___src___url'
  | 'childrenFlagsJson___src___publicURL'
  | 'childrenFlagsJson___src___childrenImageSharp'
  | 'childrenFlagsJson___src___childrenImageSharp___gatsbyImageData'
  | 'childrenFlagsJson___src___childrenImageSharp___id'
  | 'childrenFlagsJson___src___childrenImageSharp___children'
  | 'childrenFlagsJson___src___childImageSharp___gatsbyImageData'
  | 'childrenFlagsJson___src___childImageSharp___id'
  | 'childrenFlagsJson___src___childImageSharp___children'
  | 'childrenFlagsJson___src___childrenWorkJson'
  | 'childrenFlagsJson___src___childrenWorkJson___id'
  | 'childrenFlagsJson___src___childrenWorkJson___children'
  | 'childrenFlagsJson___src___childrenWorkJson___location'
  | 'childrenFlagsJson___src___childrenWorkJson___title'
  | 'childrenFlagsJson___src___childrenWorkJson___name'
  | 'childrenFlagsJson___src___childrenWorkJson___dates'
  | 'childrenFlagsJson___src___childrenWorkJson___description'
  | 'childrenFlagsJson___src___childWorkJson___id'
  | 'childrenFlagsJson___src___childWorkJson___children'
  | 'childrenFlagsJson___src___childWorkJson___location'
  | 'childrenFlagsJson___src___childWorkJson___title'
  | 'childrenFlagsJson___src___childWorkJson___name'
  | 'childrenFlagsJson___src___childWorkJson___dates'
  | 'childrenFlagsJson___src___childWorkJson___description'
  | 'childrenFlagsJson___src___childrenSkillsJson'
  | 'childrenFlagsJson___src___childrenSkillsJson___id'
  | 'childrenFlagsJson___src___childrenSkillsJson___children'
  | 'childrenFlagsJson___src___childrenSkillsJson___title'
  | 'childrenFlagsJson___src___childrenSkillsJson___skillItems'
  | 'childrenFlagsJson___src___childSkillsJson___id'
  | 'childrenFlagsJson___src___childSkillsJson___children'
  | 'childrenFlagsJson___src___childSkillsJson___title'
  | 'childrenFlagsJson___src___childSkillsJson___skillItems'
  | 'childrenFlagsJson___src___childrenSeJson'
  | 'childrenFlagsJson___src___childrenSeJson___id'
  | 'childrenFlagsJson___src___childrenSeJson___children'
  | 'childrenFlagsJson___src___childSeJson___id'
  | 'childrenFlagsJson___src___childSeJson___children'
  | 'childrenFlagsJson___src___childrenRuJson'
  | 'childrenFlagsJson___src___childrenRuJson___id'
  | 'childrenFlagsJson___src___childrenRuJson___children'
  | 'childrenFlagsJson___src___childrenRuJson___Acknowledgements'
  | 'childrenFlagsJson___src___childRuJson___id'
  | 'childrenFlagsJson___src___childRuJson___children'
  | 'childrenFlagsJson___src___childRuJson___Acknowledgements'
  | 'childrenFlagsJson___src___childrenLocale'
  | 'childrenFlagsJson___src___childrenLocale___id'
  | 'childrenFlagsJson___src___childrenLocale___children'
  | 'childrenFlagsJson___src___childrenLocale___language'
  | 'childrenFlagsJson___src___childrenLocale___ns'
  | 'childrenFlagsJson___src___childrenLocale___data'
  | 'childrenFlagsJson___src___childrenLocale___fileAbsolutePath'
  | 'childrenFlagsJson___src___childLocale___id'
  | 'childrenFlagsJson___src___childLocale___children'
  | 'childrenFlagsJson___src___childLocale___language'
  | 'childrenFlagsJson___src___childLocale___ns'
  | 'childrenFlagsJson___src___childLocale___data'
  | 'childrenFlagsJson___src___childLocale___fileAbsolutePath'
  | 'childrenFlagsJson___src___childrenHuJson'
  | 'childrenFlagsJson___src___childrenHuJson___id'
  | 'childrenFlagsJson___src___childrenHuJson___children'
  | 'childrenFlagsJson___src___childrenHuJson___Acknowledgements'
  | 'childrenFlagsJson___src___childHuJson___id'
  | 'childrenFlagsJson___src___childHuJson___children'
  | 'childrenFlagsJson___src___childHuJson___Acknowledgements'
  | 'childrenFlagsJson___src___childrenFrJson'
  | 'childrenFlagsJson___src___childrenFrJson___id'
  | 'childrenFlagsJson___src___childrenFrJson___children'
  | 'childrenFlagsJson___src___childrenFrJson___Acknowledgements'
  | 'childrenFlagsJson___src___childFrJson___id'
  | 'childrenFlagsJson___src___childFrJson___children'
  | 'childrenFlagsJson___src___childFrJson___Acknowledgements'
  | 'childrenFlagsJson___src___childrenFlagsJson'
  | 'childrenFlagsJson___src___childrenFlagsJson___id'
  | 'childrenFlagsJson___src___childrenFlagsJson___children'
  | 'childrenFlagsJson___src___childrenFlagsJson___code'
  | 'childrenFlagsJson___src___childrenFlagsJson___name'
  | 'childrenFlagsJson___src___childFlagsJson___id'
  | 'childrenFlagsJson___src___childFlagsJson___children'
  | 'childrenFlagsJson___src___childFlagsJson___code'
  | 'childrenFlagsJson___src___childFlagsJson___name'
  | 'childrenFlagsJson___src___childrenEtJson'
  | 'childrenFlagsJson___src___childrenEtJson___id'
  | 'childrenFlagsJson___src___childrenEtJson___children'
  | 'childrenFlagsJson___src___childrenEtJson___Acknowledgements'
  | 'childrenFlagsJson___src___childEtJson___id'
  | 'childrenFlagsJson___src___childEtJson___children'
  | 'childrenFlagsJson___src___childEtJson___Acknowledgements'
  | 'childrenFlagsJson___src___childrenEsJson'
  | 'childrenFlagsJson___src___childrenEsJson___id'
  | 'childrenFlagsJson___src___childrenEsJson___children'
  | 'childrenFlagsJson___src___childrenEsJson___Acknowledgements'
  | 'childrenFlagsJson___src___childEsJson___id'
  | 'childrenFlagsJson___src___childEsJson___children'
  | 'childrenFlagsJson___src___childEsJson___Acknowledgements'
  | 'childrenFlagsJson___src___childrenEnJson'
  | 'childrenFlagsJson___src___childrenEnJson___id'
  | 'childrenFlagsJson___src___childrenEnJson___children'
  | 'childrenFlagsJson___src___childrenEnJson___Acknowledgements'
  | 'childrenFlagsJson___src___childEnJson___id'
  | 'childrenFlagsJson___src___childEnJson___children'
  | 'childrenFlagsJson___src___childEnJson___Acknowledgements'
  | 'childrenFlagsJson___src___childrenEducationJson'
  | 'childrenFlagsJson___src___childrenEducationJson___id'
  | 'childrenFlagsJson___src___childrenEducationJson___children'
  | 'childrenFlagsJson___src___childrenEducationJson___location'
  | 'childrenFlagsJson___src___childrenEducationJson___title'
  | 'childrenFlagsJson___src___childrenEducationJson___name'
  | 'childrenFlagsJson___src___childrenEducationJson___dates'
  | 'childrenFlagsJson___src___childrenEducationJson___description'
  | 'childrenFlagsJson___src___childEducationJson___id'
  | 'childrenFlagsJson___src___childEducationJson___children'
  | 'childrenFlagsJson___src___childEducationJson___location'
  | 'childrenFlagsJson___src___childEducationJson___title'
  | 'childrenFlagsJson___src___childEducationJson___name'
  | 'childrenFlagsJson___src___childEducationJson___dates'
  | 'childrenFlagsJson___src___childEducationJson___description'
  | 'childrenFlagsJson___src___childrenDeJson'
  | 'childrenFlagsJson___src___childrenDeJson___id'
  | 'childrenFlagsJson___src___childrenDeJson___children'
  | 'childrenFlagsJson___src___childDeJson___id'
  | 'childrenFlagsJson___src___childDeJson___children'
  | 'childrenFlagsJson___src___id'
  | 'childrenFlagsJson___src___parent___id'
  | 'childrenFlagsJson___src___parent___children'
  | 'childrenFlagsJson___src___children'
  | 'childrenFlagsJson___src___children___id'
  | 'childrenFlagsJson___src___children___children'
  | 'childrenFlagsJson___src___internal___content'
  | 'childrenFlagsJson___src___internal___contentDigest'
  | 'childrenFlagsJson___src___internal___description'
  | 'childrenFlagsJson___src___internal___fieldOwners'
  | 'childrenFlagsJson___src___internal___ignoreType'
  | 'childrenFlagsJson___src___internal___mediaType'
  | 'childrenFlagsJson___src___internal___owner'
  | 'childrenFlagsJson___src___internal___type'
  | 'childFlagsJson___id'
  | 'childFlagsJson___parent___id'
  | 'childFlagsJson___parent___parent___id'
  | 'childFlagsJson___parent___parent___children'
  | 'childFlagsJson___parent___children'
  | 'childFlagsJson___parent___children___id'
  | 'childFlagsJson___parent___children___children'
  | 'childFlagsJson___parent___internal___content'
  | 'childFlagsJson___parent___internal___contentDigest'
  | 'childFlagsJson___parent___internal___description'
  | 'childFlagsJson___parent___internal___fieldOwners'
  | 'childFlagsJson___parent___internal___ignoreType'
  | 'childFlagsJson___parent___internal___mediaType'
  | 'childFlagsJson___parent___internal___owner'
  | 'childFlagsJson___parent___internal___type'
  | 'childFlagsJson___children'
  | 'childFlagsJson___children___id'
  | 'childFlagsJson___children___parent___id'
  | 'childFlagsJson___children___parent___children'
  | 'childFlagsJson___children___children'
  | 'childFlagsJson___children___children___id'
  | 'childFlagsJson___children___children___children'
  | 'childFlagsJson___children___internal___content'
  | 'childFlagsJson___children___internal___contentDigest'
  | 'childFlagsJson___children___internal___description'
  | 'childFlagsJson___children___internal___fieldOwners'
  | 'childFlagsJson___children___internal___ignoreType'
  | 'childFlagsJson___children___internal___mediaType'
  | 'childFlagsJson___children___internal___owner'
  | 'childFlagsJson___children___internal___type'
  | 'childFlagsJson___internal___content'
  | 'childFlagsJson___internal___contentDigest'
  | 'childFlagsJson___internal___description'
  | 'childFlagsJson___internal___fieldOwners'
  | 'childFlagsJson___internal___ignoreType'
  | 'childFlagsJson___internal___mediaType'
  | 'childFlagsJson___internal___owner'
  | 'childFlagsJson___internal___type'
  | 'childFlagsJson___code'
  | 'childFlagsJson___name'
  | 'childFlagsJson___src___sourceInstanceName'
  | 'childFlagsJson___src___absolutePath'
  | 'childFlagsJson___src___relativePath'
  | 'childFlagsJson___src___extension'
  | 'childFlagsJson___src___size'
  | 'childFlagsJson___src___prettySize'
  | 'childFlagsJson___src___modifiedTime'
  | 'childFlagsJson___src___accessTime'
  | 'childFlagsJson___src___changeTime'
  | 'childFlagsJson___src___birthTime'
  | 'childFlagsJson___src___root'
  | 'childFlagsJson___src___dir'
  | 'childFlagsJson___src___base'
  | 'childFlagsJson___src___ext'
  | 'childFlagsJson___src___name'
  | 'childFlagsJson___src___relativeDirectory'
  | 'childFlagsJson___src___dev'
  | 'childFlagsJson___src___mode'
  | 'childFlagsJson___src___nlink'
  | 'childFlagsJson___src___uid'
  | 'childFlagsJson___src___gid'
  | 'childFlagsJson___src___rdev'
  | 'childFlagsJson___src___ino'
  | 'childFlagsJson___src___atimeMs'
  | 'childFlagsJson___src___mtimeMs'
  | 'childFlagsJson___src___ctimeMs'
  | 'childFlagsJson___src___atime'
  | 'childFlagsJson___src___mtime'
  | 'childFlagsJson___src___ctime'
  | 'childFlagsJson___src___birthtime'
  | 'childFlagsJson___src___birthtimeMs'
  | 'childFlagsJson___src___blksize'
  | 'childFlagsJson___src___blocks'
  | 'childFlagsJson___src___url'
  | 'childFlagsJson___src___publicURL'
  | 'childFlagsJson___src___childrenImageSharp'
  | 'childFlagsJson___src___childrenImageSharp___gatsbyImageData'
  | 'childFlagsJson___src___childrenImageSharp___id'
  | 'childFlagsJson___src___childrenImageSharp___children'
  | 'childFlagsJson___src___childImageSharp___gatsbyImageData'
  | 'childFlagsJson___src___childImageSharp___id'
  | 'childFlagsJson___src___childImageSharp___children'
  | 'childFlagsJson___src___childrenWorkJson'
  | 'childFlagsJson___src___childrenWorkJson___id'
  | 'childFlagsJson___src___childrenWorkJson___children'
  | 'childFlagsJson___src___childrenWorkJson___location'
  | 'childFlagsJson___src___childrenWorkJson___title'
  | 'childFlagsJson___src___childrenWorkJson___name'
  | 'childFlagsJson___src___childrenWorkJson___dates'
  | 'childFlagsJson___src___childrenWorkJson___description'
  | 'childFlagsJson___src___childWorkJson___id'
  | 'childFlagsJson___src___childWorkJson___children'
  | 'childFlagsJson___src___childWorkJson___location'
  | 'childFlagsJson___src___childWorkJson___title'
  | 'childFlagsJson___src___childWorkJson___name'
  | 'childFlagsJson___src___childWorkJson___dates'
  | 'childFlagsJson___src___childWorkJson___description'
  | 'childFlagsJson___src___childrenSkillsJson'
  | 'childFlagsJson___src___childrenSkillsJson___id'
  | 'childFlagsJson___src___childrenSkillsJson___children'
  | 'childFlagsJson___src___childrenSkillsJson___title'
  | 'childFlagsJson___src___childrenSkillsJson___skillItems'
  | 'childFlagsJson___src___childSkillsJson___id'
  | 'childFlagsJson___src___childSkillsJson___children'
  | 'childFlagsJson___src___childSkillsJson___title'
  | 'childFlagsJson___src___childSkillsJson___skillItems'
  | 'childFlagsJson___src___childrenSeJson'
  | 'childFlagsJson___src___childrenSeJson___id'
  | 'childFlagsJson___src___childrenSeJson___children'
  | 'childFlagsJson___src___childSeJson___id'
  | 'childFlagsJson___src___childSeJson___children'
  | 'childFlagsJson___src___childrenRuJson'
  | 'childFlagsJson___src___childrenRuJson___id'
  | 'childFlagsJson___src___childrenRuJson___children'
  | 'childFlagsJson___src___childrenRuJson___Acknowledgements'
  | 'childFlagsJson___src___childRuJson___id'
  | 'childFlagsJson___src___childRuJson___children'
  | 'childFlagsJson___src___childRuJson___Acknowledgements'
  | 'childFlagsJson___src___childrenLocale'
  | 'childFlagsJson___src___childrenLocale___id'
  | 'childFlagsJson___src___childrenLocale___children'
  | 'childFlagsJson___src___childrenLocale___language'
  | 'childFlagsJson___src___childrenLocale___ns'
  | 'childFlagsJson___src___childrenLocale___data'
  | 'childFlagsJson___src___childrenLocale___fileAbsolutePath'
  | 'childFlagsJson___src___childLocale___id'
  | 'childFlagsJson___src___childLocale___children'
  | 'childFlagsJson___src___childLocale___language'
  | 'childFlagsJson___src___childLocale___ns'
  | 'childFlagsJson___src___childLocale___data'
  | 'childFlagsJson___src___childLocale___fileAbsolutePath'
  | 'childFlagsJson___src___childrenHuJson'
  | 'childFlagsJson___src___childrenHuJson___id'
  | 'childFlagsJson___src___childrenHuJson___children'
  | 'childFlagsJson___src___childrenHuJson___Acknowledgements'
  | 'childFlagsJson___src___childHuJson___id'
  | 'childFlagsJson___src___childHuJson___children'
  | 'childFlagsJson___src___childHuJson___Acknowledgements'
  | 'childFlagsJson___src___childrenFrJson'
  | 'childFlagsJson___src___childrenFrJson___id'
  | 'childFlagsJson___src___childrenFrJson___children'
  | 'childFlagsJson___src___childrenFrJson___Acknowledgements'
  | 'childFlagsJson___src___childFrJson___id'
  | 'childFlagsJson___src___childFrJson___children'
  | 'childFlagsJson___src___childFrJson___Acknowledgements'
  | 'childFlagsJson___src___childrenFlagsJson'
  | 'childFlagsJson___src___childrenFlagsJson___id'
  | 'childFlagsJson___src___childrenFlagsJson___children'
  | 'childFlagsJson___src___childrenFlagsJson___code'
  | 'childFlagsJson___src___childrenFlagsJson___name'
  | 'childFlagsJson___src___childFlagsJson___id'
  | 'childFlagsJson___src___childFlagsJson___children'
  | 'childFlagsJson___src___childFlagsJson___code'
  | 'childFlagsJson___src___childFlagsJson___name'
  | 'childFlagsJson___src___childrenEtJson'
  | 'childFlagsJson___src___childrenEtJson___id'
  | 'childFlagsJson___src___childrenEtJson___children'
  | 'childFlagsJson___src___childrenEtJson___Acknowledgements'
  | 'childFlagsJson___src___childEtJson___id'
  | 'childFlagsJson___src___childEtJson___children'
  | 'childFlagsJson___src___childEtJson___Acknowledgements'
  | 'childFlagsJson___src___childrenEsJson'
  | 'childFlagsJson___src___childrenEsJson___id'
  | 'childFlagsJson___src___childrenEsJson___children'
  | 'childFlagsJson___src___childrenEsJson___Acknowledgements'
  | 'childFlagsJson___src___childEsJson___id'
  | 'childFlagsJson___src___childEsJson___children'
  | 'childFlagsJson___src___childEsJson___Acknowledgements'
  | 'childFlagsJson___src___childrenEnJson'
  | 'childFlagsJson___src___childrenEnJson___id'
  | 'childFlagsJson___src___childrenEnJson___children'
  | 'childFlagsJson___src___childrenEnJson___Acknowledgements'
  | 'childFlagsJson___src___childEnJson___id'
  | 'childFlagsJson___src___childEnJson___children'
  | 'childFlagsJson___src___childEnJson___Acknowledgements'
  | 'childFlagsJson___src___childrenEducationJson'
  | 'childFlagsJson___src___childrenEducationJson___id'
  | 'childFlagsJson___src___childrenEducationJson___children'
  | 'childFlagsJson___src___childrenEducationJson___location'
  | 'childFlagsJson___src___childrenEducationJson___title'
  | 'childFlagsJson___src___childrenEducationJson___name'
  | 'childFlagsJson___src___childrenEducationJson___dates'
  | 'childFlagsJson___src___childrenEducationJson___description'
  | 'childFlagsJson___src___childEducationJson___id'
  | 'childFlagsJson___src___childEducationJson___children'
  | 'childFlagsJson___src___childEducationJson___location'
  | 'childFlagsJson___src___childEducationJson___title'
  | 'childFlagsJson___src___childEducationJson___name'
  | 'childFlagsJson___src___childEducationJson___dates'
  | 'childFlagsJson___src___childEducationJson___description'
  | 'childFlagsJson___src___childrenDeJson'
  | 'childFlagsJson___src___childrenDeJson___id'
  | 'childFlagsJson___src___childrenDeJson___children'
  | 'childFlagsJson___src___childDeJson___id'
  | 'childFlagsJson___src___childDeJson___children'
  | 'childFlagsJson___src___id'
  | 'childFlagsJson___src___parent___id'
  | 'childFlagsJson___src___parent___children'
  | 'childFlagsJson___src___children'
  | 'childFlagsJson___src___children___id'
  | 'childFlagsJson___src___children___children'
  | 'childFlagsJson___src___internal___content'
  | 'childFlagsJson___src___internal___contentDigest'
  | 'childFlagsJson___src___internal___description'
  | 'childFlagsJson___src___internal___fieldOwners'
  | 'childFlagsJson___src___internal___ignoreType'
  | 'childFlagsJson___src___internal___mediaType'
  | 'childFlagsJson___src___internal___owner'
  | 'childFlagsJson___src___internal___type'
  | 'childrenEtJson'
  | 'childrenEtJson___id'
  | 'childrenEtJson___parent___id'
  | 'childrenEtJson___parent___parent___id'
  | 'childrenEtJson___parent___parent___children'
  | 'childrenEtJson___parent___children'
  | 'childrenEtJson___parent___children___id'
  | 'childrenEtJson___parent___children___children'
  | 'childrenEtJson___parent___internal___content'
  | 'childrenEtJson___parent___internal___contentDigest'
  | 'childrenEtJson___parent___internal___description'
  | 'childrenEtJson___parent___internal___fieldOwners'
  | 'childrenEtJson___parent___internal___ignoreType'
  | 'childrenEtJson___parent___internal___mediaType'
  | 'childrenEtJson___parent___internal___owner'
  | 'childrenEtJson___parent___internal___type'
  | 'childrenEtJson___children'
  | 'childrenEtJson___children___id'
  | 'childrenEtJson___children___parent___id'
  | 'childrenEtJson___children___parent___children'
  | 'childrenEtJson___children___children'
  | 'childrenEtJson___children___children___id'
  | 'childrenEtJson___children___children___children'
  | 'childrenEtJson___children___internal___content'
  | 'childrenEtJson___children___internal___contentDigest'
  | 'childrenEtJson___children___internal___description'
  | 'childrenEtJson___children___internal___fieldOwners'
  | 'childrenEtJson___children___internal___ignoreType'
  | 'childrenEtJson___children___internal___mediaType'
  | 'childrenEtJson___children___internal___owner'
  | 'childrenEtJson___children___internal___type'
  | 'childrenEtJson___internal___content'
  | 'childrenEtJson___internal___contentDigest'
  | 'childrenEtJson___internal___description'
  | 'childrenEtJson___internal___fieldOwners'
  | 'childrenEtJson___internal___ignoreType'
  | 'childrenEtJson___internal___mediaType'
  | 'childrenEtJson___internal___owner'
  | 'childrenEtJson___internal___type'
  | 'childrenEtJson___About___AboutMe'
  | 'childrenEtJson___About___Description'
  | 'childrenEtJson___About___PhotoDescription'
  | 'childrenEtJson___About___ViewCV'
  | 'childrenEtJson___Acknowledgements'
  | 'childrenEtJson___Banner___DexterSibirtsev'
  | 'childrenEtJson___Banner___Experience'
  | 'childrenEtJson___Banner___HelloIAmAProgrammer'
  | 'childrenEtJson___Banner___SoftwareDeveloper'
  | 'childrenEtJson___Blog___Blog'
  | 'childrenEtJson___Contact___Contact'
  | 'childrenEtJson___Contact___GetInTouch'
  | 'childrenEtJson___Contact___SendEmail'
  | 'childrenEtJson___Education___Description'
  | 'childrenEtJson___Education___Education'
  | 'childrenEtJson___Experience___TranslationsUnderConstruction'
  | 'childrenEtJson___PageLinks___Acknowledgements'
  | 'childrenEtJson___PageLinks___Home'
  | 'childrenEtJson___SectionButtons___About'
  | 'childrenEtJson___SectionButtons___Blog'
  | 'childrenEtJson___SectionButtons___Contact'
  | 'childrenEtJson___SectionButtons___Experience'
  | 'childrenEtJson___SectionButtons___Skills'
  | 'childrenEtJson___Skills___Overview'
  | 'childrenEtJson___Skills___Skills'
  | 'childrenEtJson___Work___Work'
  | 'childEtJson___id'
  | 'childEtJson___parent___id'
  | 'childEtJson___parent___parent___id'
  | 'childEtJson___parent___parent___children'
  | 'childEtJson___parent___children'
  | 'childEtJson___parent___children___id'
  | 'childEtJson___parent___children___children'
  | 'childEtJson___parent___internal___content'
  | 'childEtJson___parent___internal___contentDigest'
  | 'childEtJson___parent___internal___description'
  | 'childEtJson___parent___internal___fieldOwners'
  | 'childEtJson___parent___internal___ignoreType'
  | 'childEtJson___parent___internal___mediaType'
  | 'childEtJson___parent___internal___owner'
  | 'childEtJson___parent___internal___type'
  | 'childEtJson___children'
  | 'childEtJson___children___id'
  | 'childEtJson___children___parent___id'
  | 'childEtJson___children___parent___children'
  | 'childEtJson___children___children'
  | 'childEtJson___children___children___id'
  | 'childEtJson___children___children___children'
  | 'childEtJson___children___internal___content'
  | 'childEtJson___children___internal___contentDigest'
  | 'childEtJson___children___internal___description'
  | 'childEtJson___children___internal___fieldOwners'
  | 'childEtJson___children___internal___ignoreType'
  | 'childEtJson___children___internal___mediaType'
  | 'childEtJson___children___internal___owner'
  | 'childEtJson___children___internal___type'
  | 'childEtJson___internal___content'
  | 'childEtJson___internal___contentDigest'
  | 'childEtJson___internal___description'
  | 'childEtJson___internal___fieldOwners'
  | 'childEtJson___internal___ignoreType'
  | 'childEtJson___internal___mediaType'
  | 'childEtJson___internal___owner'
  | 'childEtJson___internal___type'
  | 'childEtJson___About___AboutMe'
  | 'childEtJson___About___Description'
  | 'childEtJson___About___PhotoDescription'
  | 'childEtJson___About___ViewCV'
  | 'childEtJson___Acknowledgements'
  | 'childEtJson___Banner___DexterSibirtsev'
  | 'childEtJson___Banner___Experience'
  | 'childEtJson___Banner___HelloIAmAProgrammer'
  | 'childEtJson___Banner___SoftwareDeveloper'
  | 'childEtJson___Blog___Blog'
  | 'childEtJson___Contact___Contact'
  | 'childEtJson___Contact___GetInTouch'
  | 'childEtJson___Contact___SendEmail'
  | 'childEtJson___Education___Description'
  | 'childEtJson___Education___Education'
  | 'childEtJson___Experience___TranslationsUnderConstruction'
  | 'childEtJson___PageLinks___Acknowledgements'
  | 'childEtJson___PageLinks___Home'
  | 'childEtJson___SectionButtons___About'
  | 'childEtJson___SectionButtons___Blog'
  | 'childEtJson___SectionButtons___Contact'
  | 'childEtJson___SectionButtons___Experience'
  | 'childEtJson___SectionButtons___Skills'
  | 'childEtJson___Skills___Overview'
  | 'childEtJson___Skills___Skills'
  | 'childEtJson___Work___Work'
  | 'childrenEsJson'
  | 'childrenEsJson___id'
  | 'childrenEsJson___parent___id'
  | 'childrenEsJson___parent___parent___id'
  | 'childrenEsJson___parent___parent___children'
  | 'childrenEsJson___parent___children'
  | 'childrenEsJson___parent___children___id'
  | 'childrenEsJson___parent___children___children'
  | 'childrenEsJson___parent___internal___content'
  | 'childrenEsJson___parent___internal___contentDigest'
  | 'childrenEsJson___parent___internal___description'
  | 'childrenEsJson___parent___internal___fieldOwners'
  | 'childrenEsJson___parent___internal___ignoreType'
  | 'childrenEsJson___parent___internal___mediaType'
  | 'childrenEsJson___parent___internal___owner'
  | 'childrenEsJson___parent___internal___type'
  | 'childrenEsJson___children'
  | 'childrenEsJson___children___id'
  | 'childrenEsJson___children___parent___id'
  | 'childrenEsJson___children___parent___children'
  | 'childrenEsJson___children___children'
  | 'childrenEsJson___children___children___id'
  | 'childrenEsJson___children___children___children'
  | 'childrenEsJson___children___internal___content'
  | 'childrenEsJson___children___internal___contentDigest'
  | 'childrenEsJson___children___internal___description'
  | 'childrenEsJson___children___internal___fieldOwners'
  | 'childrenEsJson___children___internal___ignoreType'
  | 'childrenEsJson___children___internal___mediaType'
  | 'childrenEsJson___children___internal___owner'
  | 'childrenEsJson___children___internal___type'
  | 'childrenEsJson___internal___content'
  | 'childrenEsJson___internal___contentDigest'
  | 'childrenEsJson___internal___description'
  | 'childrenEsJson___internal___fieldOwners'
  | 'childrenEsJson___internal___ignoreType'
  | 'childrenEsJson___internal___mediaType'
  | 'childrenEsJson___internal___owner'
  | 'childrenEsJson___internal___type'
  | 'childrenEsJson___About___AboutMe'
  | 'childrenEsJson___About___Description'
  | 'childrenEsJson___About___PhotoDescription'
  | 'childrenEsJson___About___ViewCV'
  | 'childrenEsJson___Acknowledgements'
  | 'childrenEsJson___Banner___DexterSibirtsev'
  | 'childrenEsJson___Banner___Experience'
  | 'childrenEsJson___Banner___HelloIAmAProgrammer'
  | 'childrenEsJson___Banner___SoftwareDeveloper'
  | 'childrenEsJson___Blog___Blog'
  | 'childrenEsJson___Contact___Contact'
  | 'childrenEsJson___Contact___GetInTouch'
  | 'childrenEsJson___Contact___SendEmail'
  | 'childrenEsJson___Education___Description'
  | 'childrenEsJson___Education___Education'
  | 'childrenEsJson___Experience___TranslationsUnderConstruction'
  | 'childrenEsJson___PageLinks___Acknowledgements'
  | 'childrenEsJson___PageLinks___Home'
  | 'childrenEsJson___SectionButtons___About'
  | 'childrenEsJson___SectionButtons___Blog'
  | 'childrenEsJson___SectionButtons___Contact'
  | 'childrenEsJson___SectionButtons___Experience'
  | 'childrenEsJson___SectionButtons___Skills'
  | 'childrenEsJson___Skills___Overview'
  | 'childrenEsJson___Skills___Skills'
  | 'childrenEsJson___Work___Work'
  | 'childEsJson___id'
  | 'childEsJson___parent___id'
  | 'childEsJson___parent___parent___id'
  | 'childEsJson___parent___parent___children'
  | 'childEsJson___parent___children'
  | 'childEsJson___parent___children___id'
  | 'childEsJson___parent___children___children'
  | 'childEsJson___parent___internal___content'
  | 'childEsJson___parent___internal___contentDigest'
  | 'childEsJson___parent___internal___description'
  | 'childEsJson___parent___internal___fieldOwners'
  | 'childEsJson___parent___internal___ignoreType'
  | 'childEsJson___parent___internal___mediaType'
  | 'childEsJson___parent___internal___owner'
  | 'childEsJson___parent___internal___type'
  | 'childEsJson___children'
  | 'childEsJson___children___id'
  | 'childEsJson___children___parent___id'
  | 'childEsJson___children___parent___children'
  | 'childEsJson___children___children'
  | 'childEsJson___children___children___id'
  | 'childEsJson___children___children___children'
  | 'childEsJson___children___internal___content'
  | 'childEsJson___children___internal___contentDigest'
  | 'childEsJson___children___internal___description'
  | 'childEsJson___children___internal___fieldOwners'
  | 'childEsJson___children___internal___ignoreType'
  | 'childEsJson___children___internal___mediaType'
  | 'childEsJson___children___internal___owner'
  | 'childEsJson___children___internal___type'
  | 'childEsJson___internal___content'
  | 'childEsJson___internal___contentDigest'
  | 'childEsJson___internal___description'
  | 'childEsJson___internal___fieldOwners'
  | 'childEsJson___internal___ignoreType'
  | 'childEsJson___internal___mediaType'
  | 'childEsJson___internal___owner'
  | 'childEsJson___internal___type'
  | 'childEsJson___About___AboutMe'
  | 'childEsJson___About___Description'
  | 'childEsJson___About___PhotoDescription'
  | 'childEsJson___About___ViewCV'
  | 'childEsJson___Acknowledgements'
  | 'childEsJson___Banner___DexterSibirtsev'
  | 'childEsJson___Banner___Experience'
  | 'childEsJson___Banner___HelloIAmAProgrammer'
  | 'childEsJson___Banner___SoftwareDeveloper'
  | 'childEsJson___Blog___Blog'
  | 'childEsJson___Contact___Contact'
  | 'childEsJson___Contact___GetInTouch'
  | 'childEsJson___Contact___SendEmail'
  | 'childEsJson___Education___Description'
  | 'childEsJson___Education___Education'
  | 'childEsJson___Experience___TranslationsUnderConstruction'
  | 'childEsJson___PageLinks___Acknowledgements'
  | 'childEsJson___PageLinks___Home'
  | 'childEsJson___SectionButtons___About'
  | 'childEsJson___SectionButtons___Blog'
  | 'childEsJson___SectionButtons___Contact'
  | 'childEsJson___SectionButtons___Experience'
  | 'childEsJson___SectionButtons___Skills'
  | 'childEsJson___Skills___Overview'
  | 'childEsJson___Skills___Skills'
  | 'childEsJson___Work___Work'
  | 'childrenEnJson'
  | 'childrenEnJson___id'
  | 'childrenEnJson___parent___id'
  | 'childrenEnJson___parent___parent___id'
  | 'childrenEnJson___parent___parent___children'
  | 'childrenEnJson___parent___children'
  | 'childrenEnJson___parent___children___id'
  | 'childrenEnJson___parent___children___children'
  | 'childrenEnJson___parent___internal___content'
  | 'childrenEnJson___parent___internal___contentDigest'
  | 'childrenEnJson___parent___internal___description'
  | 'childrenEnJson___parent___internal___fieldOwners'
  | 'childrenEnJson___parent___internal___ignoreType'
  | 'childrenEnJson___parent___internal___mediaType'
  | 'childrenEnJson___parent___internal___owner'
  | 'childrenEnJson___parent___internal___type'
  | 'childrenEnJson___children'
  | 'childrenEnJson___children___id'
  | 'childrenEnJson___children___parent___id'
  | 'childrenEnJson___children___parent___children'
  | 'childrenEnJson___children___children'
  | 'childrenEnJson___children___children___id'
  | 'childrenEnJson___children___children___children'
  | 'childrenEnJson___children___internal___content'
  | 'childrenEnJson___children___internal___contentDigest'
  | 'childrenEnJson___children___internal___description'
  | 'childrenEnJson___children___internal___fieldOwners'
  | 'childrenEnJson___children___internal___ignoreType'
  | 'childrenEnJson___children___internal___mediaType'
  | 'childrenEnJson___children___internal___owner'
  | 'childrenEnJson___children___internal___type'
  | 'childrenEnJson___internal___content'
  | 'childrenEnJson___internal___contentDigest'
  | 'childrenEnJson___internal___description'
  | 'childrenEnJson___internal___fieldOwners'
  | 'childrenEnJson___internal___ignoreType'
  | 'childrenEnJson___internal___mediaType'
  | 'childrenEnJson___internal___owner'
  | 'childrenEnJson___internal___type'
  | 'childrenEnJson___About___AboutMe'
  | 'childrenEnJson___About___Description'
  | 'childrenEnJson___About___PhotoDescription'
  | 'childrenEnJson___About___ViewCV'
  | 'childrenEnJson___Acknowledgements'
  | 'childrenEnJson___Banner___DexterSibirtsev'
  | 'childrenEnJson___Banner___Experience'
  | 'childrenEnJson___Banner___HelloIAmAProgrammer'
  | 'childrenEnJson___Banner___SoftwareDeveloper'
  | 'childrenEnJson___Blog___Blog'
  | 'childrenEnJson___Contact___Contact'
  | 'childrenEnJson___Contact___GetInTouch'
  | 'childrenEnJson___Contact___SendEmail'
  | 'childrenEnJson___Education___Description'
  | 'childrenEnJson___Education___Education'
  | 'childrenEnJson___Experience___TranslationsUnderConstruction'
  | 'childrenEnJson___PageLinks___Acknowledgements'
  | 'childrenEnJson___PageLinks___Home'
  | 'childrenEnJson___SectionButtons___About'
  | 'childrenEnJson___SectionButtons___Blog'
  | 'childrenEnJson___SectionButtons___Contact'
  | 'childrenEnJson___SectionButtons___Experience'
  | 'childrenEnJson___SectionButtons___Skills'
  | 'childrenEnJson___Skills___Overview'
  | 'childrenEnJson___Skills___Skills'
  | 'childrenEnJson___Work___Work'
  | 'childEnJson___id'
  | 'childEnJson___parent___id'
  | 'childEnJson___parent___parent___id'
  | 'childEnJson___parent___parent___children'
  | 'childEnJson___parent___children'
  | 'childEnJson___parent___children___id'
  | 'childEnJson___parent___children___children'
  | 'childEnJson___parent___internal___content'
  | 'childEnJson___parent___internal___contentDigest'
  | 'childEnJson___parent___internal___description'
  | 'childEnJson___parent___internal___fieldOwners'
  | 'childEnJson___parent___internal___ignoreType'
  | 'childEnJson___parent___internal___mediaType'
  | 'childEnJson___parent___internal___owner'
  | 'childEnJson___parent___internal___type'
  | 'childEnJson___children'
  | 'childEnJson___children___id'
  | 'childEnJson___children___parent___id'
  | 'childEnJson___children___parent___children'
  | 'childEnJson___children___children'
  | 'childEnJson___children___children___id'
  | 'childEnJson___children___children___children'
  | 'childEnJson___children___internal___content'
  | 'childEnJson___children___internal___contentDigest'
  | 'childEnJson___children___internal___description'
  | 'childEnJson___children___internal___fieldOwners'
  | 'childEnJson___children___internal___ignoreType'
  | 'childEnJson___children___internal___mediaType'
  | 'childEnJson___children___internal___owner'
  | 'childEnJson___children___internal___type'
  | 'childEnJson___internal___content'
  | 'childEnJson___internal___contentDigest'
  | 'childEnJson___internal___description'
  | 'childEnJson___internal___fieldOwners'
  | 'childEnJson___internal___ignoreType'
  | 'childEnJson___internal___mediaType'
  | 'childEnJson___internal___owner'
  | 'childEnJson___internal___type'
  | 'childEnJson___About___AboutMe'
  | 'childEnJson___About___Description'
  | 'childEnJson___About___PhotoDescription'
  | 'childEnJson___About___ViewCV'
  | 'childEnJson___Acknowledgements'
  | 'childEnJson___Banner___DexterSibirtsev'
  | 'childEnJson___Banner___Experience'
  | 'childEnJson___Banner___HelloIAmAProgrammer'
  | 'childEnJson___Banner___SoftwareDeveloper'
  | 'childEnJson___Blog___Blog'
  | 'childEnJson___Contact___Contact'
  | 'childEnJson___Contact___GetInTouch'
  | 'childEnJson___Contact___SendEmail'
  | 'childEnJson___Education___Description'
  | 'childEnJson___Education___Education'
  | 'childEnJson___Experience___TranslationsUnderConstruction'
  | 'childEnJson___PageLinks___Acknowledgements'
  | 'childEnJson___PageLinks___Home'
  | 'childEnJson___SectionButtons___About'
  | 'childEnJson___SectionButtons___Blog'
  | 'childEnJson___SectionButtons___Contact'
  | 'childEnJson___SectionButtons___Experience'
  | 'childEnJson___SectionButtons___Skills'
  | 'childEnJson___Skills___Overview'
  | 'childEnJson___Skills___Skills'
  | 'childEnJson___Work___Work'
  | 'childrenEducationJson'
  | 'childrenEducationJson___id'
  | 'childrenEducationJson___parent___id'
  | 'childrenEducationJson___parent___parent___id'
  | 'childrenEducationJson___parent___parent___children'
  | 'childrenEducationJson___parent___children'
  | 'childrenEducationJson___parent___children___id'
  | 'childrenEducationJson___parent___children___children'
  | 'childrenEducationJson___parent___internal___content'
  | 'childrenEducationJson___parent___internal___contentDigest'
  | 'childrenEducationJson___parent___internal___description'
  | 'childrenEducationJson___parent___internal___fieldOwners'
  | 'childrenEducationJson___parent___internal___ignoreType'
  | 'childrenEducationJson___parent___internal___mediaType'
  | 'childrenEducationJson___parent___internal___owner'
  | 'childrenEducationJson___parent___internal___type'
  | 'childrenEducationJson___children'
  | 'childrenEducationJson___children___id'
  | 'childrenEducationJson___children___parent___id'
  | 'childrenEducationJson___children___parent___children'
  | 'childrenEducationJson___children___children'
  | 'childrenEducationJson___children___children___id'
  | 'childrenEducationJson___children___children___children'
  | 'childrenEducationJson___children___internal___content'
  | 'childrenEducationJson___children___internal___contentDigest'
  | 'childrenEducationJson___children___internal___description'
  | 'childrenEducationJson___children___internal___fieldOwners'
  | 'childrenEducationJson___children___internal___ignoreType'
  | 'childrenEducationJson___children___internal___mediaType'
  | 'childrenEducationJson___children___internal___owner'
  | 'childrenEducationJson___children___internal___type'
  | 'childrenEducationJson___internal___content'
  | 'childrenEducationJson___internal___contentDigest'
  | 'childrenEducationJson___internal___description'
  | 'childrenEducationJson___internal___fieldOwners'
  | 'childrenEducationJson___internal___ignoreType'
  | 'childrenEducationJson___internal___mediaType'
  | 'childrenEducationJson___internal___owner'
  | 'childrenEducationJson___internal___type'
  | 'childrenEducationJson___location'
  | 'childrenEducationJson___locationFlag___sourceInstanceName'
  | 'childrenEducationJson___locationFlag___absolutePath'
  | 'childrenEducationJson___locationFlag___relativePath'
  | 'childrenEducationJson___locationFlag___extension'
  | 'childrenEducationJson___locationFlag___size'
  | 'childrenEducationJson___locationFlag___prettySize'
  | 'childrenEducationJson___locationFlag___modifiedTime'
  | 'childrenEducationJson___locationFlag___accessTime'
  | 'childrenEducationJson___locationFlag___changeTime'
  | 'childrenEducationJson___locationFlag___birthTime'
  | 'childrenEducationJson___locationFlag___root'
  | 'childrenEducationJson___locationFlag___dir'
  | 'childrenEducationJson___locationFlag___base'
  | 'childrenEducationJson___locationFlag___ext'
  | 'childrenEducationJson___locationFlag___name'
  | 'childrenEducationJson___locationFlag___relativeDirectory'
  | 'childrenEducationJson___locationFlag___dev'
  | 'childrenEducationJson___locationFlag___mode'
  | 'childrenEducationJson___locationFlag___nlink'
  | 'childrenEducationJson___locationFlag___uid'
  | 'childrenEducationJson___locationFlag___gid'
  | 'childrenEducationJson___locationFlag___rdev'
  | 'childrenEducationJson___locationFlag___ino'
  | 'childrenEducationJson___locationFlag___atimeMs'
  | 'childrenEducationJson___locationFlag___mtimeMs'
  | 'childrenEducationJson___locationFlag___ctimeMs'
  | 'childrenEducationJson___locationFlag___atime'
  | 'childrenEducationJson___locationFlag___mtime'
  | 'childrenEducationJson___locationFlag___ctime'
  | 'childrenEducationJson___locationFlag___birthtime'
  | 'childrenEducationJson___locationFlag___birthtimeMs'
  | 'childrenEducationJson___locationFlag___blksize'
  | 'childrenEducationJson___locationFlag___blocks'
  | 'childrenEducationJson___locationFlag___url'
  | 'childrenEducationJson___locationFlag___publicURL'
  | 'childrenEducationJson___locationFlag___childrenImageSharp'
  | 'childrenEducationJson___locationFlag___childrenImageSharp___gatsbyImageData'
  | 'childrenEducationJson___locationFlag___childrenImageSharp___id'
  | 'childrenEducationJson___locationFlag___childrenImageSharp___children'
  | 'childrenEducationJson___locationFlag___childImageSharp___gatsbyImageData'
  | 'childrenEducationJson___locationFlag___childImageSharp___id'
  | 'childrenEducationJson___locationFlag___childImageSharp___children'
  | 'childrenEducationJson___locationFlag___childrenWorkJson'
  | 'childrenEducationJson___locationFlag___childrenWorkJson___id'
  | 'childrenEducationJson___locationFlag___childrenWorkJson___children'
  | 'childrenEducationJson___locationFlag___childrenWorkJson___location'
  | 'childrenEducationJson___locationFlag___childrenWorkJson___title'
  | 'childrenEducationJson___locationFlag___childrenWorkJson___name'
  | 'childrenEducationJson___locationFlag___childrenWorkJson___dates'
  | 'childrenEducationJson___locationFlag___childrenWorkJson___description'
  | 'childrenEducationJson___locationFlag___childWorkJson___id'
  | 'childrenEducationJson___locationFlag___childWorkJson___children'
  | 'childrenEducationJson___locationFlag___childWorkJson___location'
  | 'childrenEducationJson___locationFlag___childWorkJson___title'
  | 'childrenEducationJson___locationFlag___childWorkJson___name'
  | 'childrenEducationJson___locationFlag___childWorkJson___dates'
  | 'childrenEducationJson___locationFlag___childWorkJson___description'
  | 'childrenEducationJson___locationFlag___childrenSkillsJson'
  | 'childrenEducationJson___locationFlag___childrenSkillsJson___id'
  | 'childrenEducationJson___locationFlag___childrenSkillsJson___children'
  | 'childrenEducationJson___locationFlag___childrenSkillsJson___title'
  | 'childrenEducationJson___locationFlag___childrenSkillsJson___skillItems'
  | 'childrenEducationJson___locationFlag___childSkillsJson___id'
  | 'childrenEducationJson___locationFlag___childSkillsJson___children'
  | 'childrenEducationJson___locationFlag___childSkillsJson___title'
  | 'childrenEducationJson___locationFlag___childSkillsJson___skillItems'
  | 'childrenEducationJson___locationFlag___childrenSeJson'
  | 'childrenEducationJson___locationFlag___childrenSeJson___id'
  | 'childrenEducationJson___locationFlag___childrenSeJson___children'
  | 'childrenEducationJson___locationFlag___childSeJson___id'
  | 'childrenEducationJson___locationFlag___childSeJson___children'
  | 'childrenEducationJson___locationFlag___childrenRuJson'
  | 'childrenEducationJson___locationFlag___childrenRuJson___id'
  | 'childrenEducationJson___locationFlag___childrenRuJson___children'
  | 'childrenEducationJson___locationFlag___childrenRuJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childRuJson___id'
  | 'childrenEducationJson___locationFlag___childRuJson___children'
  | 'childrenEducationJson___locationFlag___childRuJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childrenLocale'
  | 'childrenEducationJson___locationFlag___childrenLocale___id'
  | 'childrenEducationJson___locationFlag___childrenLocale___children'
  | 'childrenEducationJson___locationFlag___childrenLocale___language'
  | 'childrenEducationJson___locationFlag___childrenLocale___ns'
  | 'childrenEducationJson___locationFlag___childrenLocale___data'
  | 'childrenEducationJson___locationFlag___childrenLocale___fileAbsolutePath'
  | 'childrenEducationJson___locationFlag___childLocale___id'
  | 'childrenEducationJson___locationFlag___childLocale___children'
  | 'childrenEducationJson___locationFlag___childLocale___language'
  | 'childrenEducationJson___locationFlag___childLocale___ns'
  | 'childrenEducationJson___locationFlag___childLocale___data'
  | 'childrenEducationJson___locationFlag___childLocale___fileAbsolutePath'
  | 'childrenEducationJson___locationFlag___childrenHuJson'
  | 'childrenEducationJson___locationFlag___childrenHuJson___id'
  | 'childrenEducationJson___locationFlag___childrenHuJson___children'
  | 'childrenEducationJson___locationFlag___childrenHuJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childHuJson___id'
  | 'childrenEducationJson___locationFlag___childHuJson___children'
  | 'childrenEducationJson___locationFlag___childHuJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childrenFrJson'
  | 'childrenEducationJson___locationFlag___childrenFrJson___id'
  | 'childrenEducationJson___locationFlag___childrenFrJson___children'
  | 'childrenEducationJson___locationFlag___childrenFrJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childFrJson___id'
  | 'childrenEducationJson___locationFlag___childFrJson___children'
  | 'childrenEducationJson___locationFlag___childFrJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childrenFlagsJson'
  | 'childrenEducationJson___locationFlag___childrenFlagsJson___id'
  | 'childrenEducationJson___locationFlag___childrenFlagsJson___children'
  | 'childrenEducationJson___locationFlag___childrenFlagsJson___code'
  | 'childrenEducationJson___locationFlag___childrenFlagsJson___name'
  | 'childrenEducationJson___locationFlag___childFlagsJson___id'
  | 'childrenEducationJson___locationFlag___childFlagsJson___children'
  | 'childrenEducationJson___locationFlag___childFlagsJson___code'
  | 'childrenEducationJson___locationFlag___childFlagsJson___name'
  | 'childrenEducationJson___locationFlag___childrenEtJson'
  | 'childrenEducationJson___locationFlag___childrenEtJson___id'
  | 'childrenEducationJson___locationFlag___childrenEtJson___children'
  | 'childrenEducationJson___locationFlag___childrenEtJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childEtJson___id'
  | 'childrenEducationJson___locationFlag___childEtJson___children'
  | 'childrenEducationJson___locationFlag___childEtJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childrenEsJson'
  | 'childrenEducationJson___locationFlag___childrenEsJson___id'
  | 'childrenEducationJson___locationFlag___childrenEsJson___children'
  | 'childrenEducationJson___locationFlag___childrenEsJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childEsJson___id'
  | 'childrenEducationJson___locationFlag___childEsJson___children'
  | 'childrenEducationJson___locationFlag___childEsJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childrenEnJson'
  | 'childrenEducationJson___locationFlag___childrenEnJson___id'
  | 'childrenEducationJson___locationFlag___childrenEnJson___children'
  | 'childrenEducationJson___locationFlag___childrenEnJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childEnJson___id'
  | 'childrenEducationJson___locationFlag___childEnJson___children'
  | 'childrenEducationJson___locationFlag___childEnJson___Acknowledgements'
  | 'childrenEducationJson___locationFlag___childrenEducationJson'
  | 'childrenEducationJson___locationFlag___childrenEducationJson___id'
  | 'childrenEducationJson___locationFlag___childrenEducationJson___children'
  | 'childrenEducationJson___locationFlag___childrenEducationJson___location'
  | 'childrenEducationJson___locationFlag___childrenEducationJson___title'
  | 'childrenEducationJson___locationFlag___childrenEducationJson___name'
  | 'childrenEducationJson___locationFlag___childrenEducationJson___dates'
  | 'childrenEducationJson___locationFlag___childrenEducationJson___description'
  | 'childrenEducationJson___locationFlag___childEducationJson___id'
  | 'childrenEducationJson___locationFlag___childEducationJson___children'
  | 'childrenEducationJson___locationFlag___childEducationJson___location'
  | 'childrenEducationJson___locationFlag___childEducationJson___title'
  | 'childrenEducationJson___locationFlag___childEducationJson___name'
  | 'childrenEducationJson___locationFlag___childEducationJson___dates'
  | 'childrenEducationJson___locationFlag___childEducationJson___description'
  | 'childrenEducationJson___locationFlag___childrenDeJson'
  | 'childrenEducationJson___locationFlag___childrenDeJson___id'
  | 'childrenEducationJson___locationFlag___childrenDeJson___children'
  | 'childrenEducationJson___locationFlag___childDeJson___id'
  | 'childrenEducationJson___locationFlag___childDeJson___children'
  | 'childrenEducationJson___locationFlag___id'
  | 'childrenEducationJson___locationFlag___parent___id'
  | 'childrenEducationJson___locationFlag___parent___children'
  | 'childrenEducationJson___locationFlag___children'
  | 'childrenEducationJson___locationFlag___children___id'
  | 'childrenEducationJson___locationFlag___children___children'
  | 'childrenEducationJson___locationFlag___internal___content'
  | 'childrenEducationJson___locationFlag___internal___contentDigest'
  | 'childrenEducationJson___locationFlag___internal___description'
  | 'childrenEducationJson___locationFlag___internal___fieldOwners'
  | 'childrenEducationJson___locationFlag___internal___ignoreType'
  | 'childrenEducationJson___locationFlag___internal___mediaType'
  | 'childrenEducationJson___locationFlag___internal___owner'
  | 'childrenEducationJson___locationFlag___internal___type'
  | 'childrenEducationJson___title'
  | 'childrenEducationJson___logo___sourceInstanceName'
  | 'childrenEducationJson___logo___absolutePath'
  | 'childrenEducationJson___logo___relativePath'
  | 'childrenEducationJson___logo___extension'
  | 'childrenEducationJson___logo___size'
  | 'childrenEducationJson___logo___prettySize'
  | 'childrenEducationJson___logo___modifiedTime'
  | 'childrenEducationJson___logo___accessTime'
  | 'childrenEducationJson___logo___changeTime'
  | 'childrenEducationJson___logo___birthTime'
  | 'childrenEducationJson___logo___root'
  | 'childrenEducationJson___logo___dir'
  | 'childrenEducationJson___logo___base'
  | 'childrenEducationJson___logo___ext'
  | 'childrenEducationJson___logo___name'
  | 'childrenEducationJson___logo___relativeDirectory'
  | 'childrenEducationJson___logo___dev'
  | 'childrenEducationJson___logo___mode'
  | 'childrenEducationJson___logo___nlink'
  | 'childrenEducationJson___logo___uid'
  | 'childrenEducationJson___logo___gid'
  | 'childrenEducationJson___logo___rdev'
  | 'childrenEducationJson___logo___ino'
  | 'childrenEducationJson___logo___atimeMs'
  | 'childrenEducationJson___logo___mtimeMs'
  | 'childrenEducationJson___logo___ctimeMs'
  | 'childrenEducationJson___logo___atime'
  | 'childrenEducationJson___logo___mtime'
  | 'childrenEducationJson___logo___ctime'
  | 'childrenEducationJson___logo___birthtime'
  | 'childrenEducationJson___logo___birthtimeMs'
  | 'childrenEducationJson___logo___blksize'
  | 'childrenEducationJson___logo___blocks'
  | 'childrenEducationJson___logo___url'
  | 'childrenEducationJson___logo___publicURL'
  | 'childrenEducationJson___logo___childrenImageSharp'
  | 'childrenEducationJson___logo___childrenImageSharp___gatsbyImageData'
  | 'childrenEducationJson___logo___childrenImageSharp___id'
  | 'childrenEducationJson___logo___childrenImageSharp___children'
  | 'childrenEducationJson___logo___childImageSharp___gatsbyImageData'
  | 'childrenEducationJson___logo___childImageSharp___id'
  | 'childrenEducationJson___logo___childImageSharp___children'
  | 'childrenEducationJson___logo___childrenWorkJson'
  | 'childrenEducationJson___logo___childrenWorkJson___id'
  | 'childrenEducationJson___logo___childrenWorkJson___children'
  | 'childrenEducationJson___logo___childrenWorkJson___location'
  | 'childrenEducationJson___logo___childrenWorkJson___title'
  | 'childrenEducationJson___logo___childrenWorkJson___name'
  | 'childrenEducationJson___logo___childrenWorkJson___dates'
  | 'childrenEducationJson___logo___childrenWorkJson___description'
  | 'childrenEducationJson___logo___childWorkJson___id'
  | 'childrenEducationJson___logo___childWorkJson___children'
  | 'childrenEducationJson___logo___childWorkJson___location'
  | 'childrenEducationJson___logo___childWorkJson___title'
  | 'childrenEducationJson___logo___childWorkJson___name'
  | 'childrenEducationJson___logo___childWorkJson___dates'
  | 'childrenEducationJson___logo___childWorkJson___description'
  | 'childrenEducationJson___logo___childrenSkillsJson'
  | 'childrenEducationJson___logo___childrenSkillsJson___id'
  | 'childrenEducationJson___logo___childrenSkillsJson___children'
  | 'childrenEducationJson___logo___childrenSkillsJson___title'
  | 'childrenEducationJson___logo___childrenSkillsJson___skillItems'
  | 'childrenEducationJson___logo___childSkillsJson___id'
  | 'childrenEducationJson___logo___childSkillsJson___children'
  | 'childrenEducationJson___logo___childSkillsJson___title'
  | 'childrenEducationJson___logo___childSkillsJson___skillItems'
  | 'childrenEducationJson___logo___childrenSeJson'
  | 'childrenEducationJson___logo___childrenSeJson___id'
  | 'childrenEducationJson___logo___childrenSeJson___children'
  | 'childrenEducationJson___logo___childSeJson___id'
  | 'childrenEducationJson___logo___childSeJson___children'
  | 'childrenEducationJson___logo___childrenRuJson'
  | 'childrenEducationJson___logo___childrenRuJson___id'
  | 'childrenEducationJson___logo___childrenRuJson___children'
  | 'childrenEducationJson___logo___childrenRuJson___Acknowledgements'
  | 'childrenEducationJson___logo___childRuJson___id'
  | 'childrenEducationJson___logo___childRuJson___children'
  | 'childrenEducationJson___logo___childRuJson___Acknowledgements'
  | 'childrenEducationJson___logo___childrenLocale'
  | 'childrenEducationJson___logo___childrenLocale___id'
  | 'childrenEducationJson___logo___childrenLocale___children'
  | 'childrenEducationJson___logo___childrenLocale___language'
  | 'childrenEducationJson___logo___childrenLocale___ns'
  | 'childrenEducationJson___logo___childrenLocale___data'
  | 'childrenEducationJson___logo___childrenLocale___fileAbsolutePath'
  | 'childrenEducationJson___logo___childLocale___id'
  | 'childrenEducationJson___logo___childLocale___children'
  | 'childrenEducationJson___logo___childLocale___language'
  | 'childrenEducationJson___logo___childLocale___ns'
  | 'childrenEducationJson___logo___childLocale___data'
  | 'childrenEducationJson___logo___childLocale___fileAbsolutePath'
  | 'childrenEducationJson___logo___childrenHuJson'
  | 'childrenEducationJson___logo___childrenHuJson___id'
  | 'childrenEducationJson___logo___childrenHuJson___children'
  | 'childrenEducationJson___logo___childrenHuJson___Acknowledgements'
  | 'childrenEducationJson___logo___childHuJson___id'
  | 'childrenEducationJson___logo___childHuJson___children'
  | 'childrenEducationJson___logo___childHuJson___Acknowledgements'
  | 'childrenEducationJson___logo___childrenFrJson'
  | 'childrenEducationJson___logo___childrenFrJson___id'
  | 'childrenEducationJson___logo___childrenFrJson___children'
  | 'childrenEducationJson___logo___childrenFrJson___Acknowledgements'
  | 'childrenEducationJson___logo___childFrJson___id'
  | 'childrenEducationJson___logo___childFrJson___children'
  | 'childrenEducationJson___logo___childFrJson___Acknowledgements'
  | 'childrenEducationJson___logo___childrenFlagsJson'
  | 'childrenEducationJson___logo___childrenFlagsJson___id'
  | 'childrenEducationJson___logo___childrenFlagsJson___children'
  | 'childrenEducationJson___logo___childrenFlagsJson___code'
  | 'childrenEducationJson___logo___childrenFlagsJson___name'
  | 'childrenEducationJson___logo___childFlagsJson___id'
  | 'childrenEducationJson___logo___childFlagsJson___children'
  | 'childrenEducationJson___logo___childFlagsJson___code'
  | 'childrenEducationJson___logo___childFlagsJson___name'
  | 'childrenEducationJson___logo___childrenEtJson'
  | 'childrenEducationJson___logo___childrenEtJson___id'
  | 'childrenEducationJson___logo___childrenEtJson___children'
  | 'childrenEducationJson___logo___childrenEtJson___Acknowledgements'
  | 'childrenEducationJson___logo___childEtJson___id'
  | 'childrenEducationJson___logo___childEtJson___children'
  | 'childrenEducationJson___logo___childEtJson___Acknowledgements'
  | 'childrenEducationJson___logo___childrenEsJson'
  | 'childrenEducationJson___logo___childrenEsJson___id'
  | 'childrenEducationJson___logo___childrenEsJson___children'
  | 'childrenEducationJson___logo___childrenEsJson___Acknowledgements'
  | 'childrenEducationJson___logo___childEsJson___id'
  | 'childrenEducationJson___logo___childEsJson___children'
  | 'childrenEducationJson___logo___childEsJson___Acknowledgements'
  | 'childrenEducationJson___logo___childrenEnJson'
  | 'childrenEducationJson___logo___childrenEnJson___id'
  | 'childrenEducationJson___logo___childrenEnJson___children'
  | 'childrenEducationJson___logo___childrenEnJson___Acknowledgements'
  | 'childrenEducationJson___logo___childEnJson___id'
  | 'childrenEducationJson___logo___childEnJson___children'
  | 'childrenEducationJson___logo___childEnJson___Acknowledgements'
  | 'childrenEducationJson___logo___childrenEducationJson'
  | 'childrenEducationJson___logo___childrenEducationJson___id'
  | 'childrenEducationJson___logo___childrenEducationJson___children'
  | 'childrenEducationJson___logo___childrenEducationJson___location'
  | 'childrenEducationJson___logo___childrenEducationJson___title'
  | 'childrenEducationJson___logo___childrenEducationJson___name'
  | 'childrenEducationJson___logo___childrenEducationJson___dates'
  | 'childrenEducationJson___logo___childrenEducationJson___description'
  | 'childrenEducationJson___logo___childEducationJson___id'
  | 'childrenEducationJson___logo___childEducationJson___children'
  | 'childrenEducationJson___logo___childEducationJson___location'
  | 'childrenEducationJson___logo___childEducationJson___title'
  | 'childrenEducationJson___logo___childEducationJson___name'
  | 'childrenEducationJson___logo___childEducationJson___dates'
  | 'childrenEducationJson___logo___childEducationJson___description'
  | 'childrenEducationJson___logo___childrenDeJson'
  | 'childrenEducationJson___logo___childrenDeJson___id'
  | 'childrenEducationJson___logo___childrenDeJson___children'
  | 'childrenEducationJson___logo___childDeJson___id'
  | 'childrenEducationJson___logo___childDeJson___children'
  | 'childrenEducationJson___logo___id'
  | 'childrenEducationJson___logo___parent___id'
  | 'childrenEducationJson___logo___parent___children'
  | 'childrenEducationJson___logo___children'
  | 'childrenEducationJson___logo___children___id'
  | 'childrenEducationJson___logo___children___children'
  | 'childrenEducationJson___logo___internal___content'
  | 'childrenEducationJson___logo___internal___contentDigest'
  | 'childrenEducationJson___logo___internal___description'
  | 'childrenEducationJson___logo___internal___fieldOwners'
  | 'childrenEducationJson___logo___internal___ignoreType'
  | 'childrenEducationJson___logo___internal___mediaType'
  | 'childrenEducationJson___logo___internal___owner'
  | 'childrenEducationJson___logo___internal___type'
  | 'childrenEducationJson___name'
  | 'childrenEducationJson___dates'
  | 'childrenEducationJson___description'
  | 'childEducationJson___id'
  | 'childEducationJson___parent___id'
  | 'childEducationJson___parent___parent___id'
  | 'childEducationJson___parent___parent___children'
  | 'childEducationJson___parent___children'
  | 'childEducationJson___parent___children___id'
  | 'childEducationJson___parent___children___children'
  | 'childEducationJson___parent___internal___content'
  | 'childEducationJson___parent___internal___contentDigest'
  | 'childEducationJson___parent___internal___description'
  | 'childEducationJson___parent___internal___fieldOwners'
  | 'childEducationJson___parent___internal___ignoreType'
  | 'childEducationJson___parent___internal___mediaType'
  | 'childEducationJson___parent___internal___owner'
  | 'childEducationJson___parent___internal___type'
  | 'childEducationJson___children'
  | 'childEducationJson___children___id'
  | 'childEducationJson___children___parent___id'
  | 'childEducationJson___children___parent___children'
  | 'childEducationJson___children___children'
  | 'childEducationJson___children___children___id'
  | 'childEducationJson___children___children___children'
  | 'childEducationJson___children___internal___content'
  | 'childEducationJson___children___internal___contentDigest'
  | 'childEducationJson___children___internal___description'
  | 'childEducationJson___children___internal___fieldOwners'
  | 'childEducationJson___children___internal___ignoreType'
  | 'childEducationJson___children___internal___mediaType'
  | 'childEducationJson___children___internal___owner'
  | 'childEducationJson___children___internal___type'
  | 'childEducationJson___internal___content'
  | 'childEducationJson___internal___contentDigest'
  | 'childEducationJson___internal___description'
  | 'childEducationJson___internal___fieldOwners'
  | 'childEducationJson___internal___ignoreType'
  | 'childEducationJson___internal___mediaType'
  | 'childEducationJson___internal___owner'
  | 'childEducationJson___internal___type'
  | 'childEducationJson___location'
  | 'childEducationJson___locationFlag___sourceInstanceName'
  | 'childEducationJson___locationFlag___absolutePath'
  | 'childEducationJson___locationFlag___relativePath'
  | 'childEducationJson___locationFlag___extension'
  | 'childEducationJson___locationFlag___size'
  | 'childEducationJson___locationFlag___prettySize'
  | 'childEducationJson___locationFlag___modifiedTime'
  | 'childEducationJson___locationFlag___accessTime'
  | 'childEducationJson___locationFlag___changeTime'
  | 'childEducationJson___locationFlag___birthTime'
  | 'childEducationJson___locationFlag___root'
  | 'childEducationJson___locationFlag___dir'
  | 'childEducationJson___locationFlag___base'
  | 'childEducationJson___locationFlag___ext'
  | 'childEducationJson___locationFlag___name'
  | 'childEducationJson___locationFlag___relativeDirectory'
  | 'childEducationJson___locationFlag___dev'
  | 'childEducationJson___locationFlag___mode'
  | 'childEducationJson___locationFlag___nlink'
  | 'childEducationJson___locationFlag___uid'
  | 'childEducationJson___locationFlag___gid'
  | 'childEducationJson___locationFlag___rdev'
  | 'childEducationJson___locationFlag___ino'
  | 'childEducationJson___locationFlag___atimeMs'
  | 'childEducationJson___locationFlag___mtimeMs'
  | 'childEducationJson___locationFlag___ctimeMs'
  | 'childEducationJson___locationFlag___atime'
  | 'childEducationJson___locationFlag___mtime'
  | 'childEducationJson___locationFlag___ctime'
  | 'childEducationJson___locationFlag___birthtime'
  | 'childEducationJson___locationFlag___birthtimeMs'
  | 'childEducationJson___locationFlag___blksize'
  | 'childEducationJson___locationFlag___blocks'
  | 'childEducationJson___locationFlag___url'
  | 'childEducationJson___locationFlag___publicURL'
  | 'childEducationJson___locationFlag___childrenImageSharp'
  | 'childEducationJson___locationFlag___childrenImageSharp___gatsbyImageData'
  | 'childEducationJson___locationFlag___childrenImageSharp___id'
  | 'childEducationJson___locationFlag___childrenImageSharp___children'
  | 'childEducationJson___locationFlag___childImageSharp___gatsbyImageData'
  | 'childEducationJson___locationFlag___childImageSharp___id'
  | 'childEducationJson___locationFlag___childImageSharp___children'
  | 'childEducationJson___locationFlag___childrenWorkJson'
  | 'childEducationJson___locationFlag___childrenWorkJson___id'
  | 'childEducationJson___locationFlag___childrenWorkJson___children'
  | 'childEducationJson___locationFlag___childrenWorkJson___location'
  | 'childEducationJson___locationFlag___childrenWorkJson___title'
  | 'childEducationJson___locationFlag___childrenWorkJson___name'
  | 'childEducationJson___locationFlag___childrenWorkJson___dates'
  | 'childEducationJson___locationFlag___childrenWorkJson___description'
  | 'childEducationJson___locationFlag___childWorkJson___id'
  | 'childEducationJson___locationFlag___childWorkJson___children'
  | 'childEducationJson___locationFlag___childWorkJson___location'
  | 'childEducationJson___locationFlag___childWorkJson___title'
  | 'childEducationJson___locationFlag___childWorkJson___name'
  | 'childEducationJson___locationFlag___childWorkJson___dates'
  | 'childEducationJson___locationFlag___childWorkJson___description'
  | 'childEducationJson___locationFlag___childrenSkillsJson'
  | 'childEducationJson___locationFlag___childrenSkillsJson___id'
  | 'childEducationJson___locationFlag___childrenSkillsJson___children'
  | 'childEducationJson___locationFlag___childrenSkillsJson___title'
  | 'childEducationJson___locationFlag___childrenSkillsJson___skillItems'
  | 'childEducationJson___locationFlag___childSkillsJson___id'
  | 'childEducationJson___locationFlag___childSkillsJson___children'
  | 'childEducationJson___locationFlag___childSkillsJson___title'
  | 'childEducationJson___locationFlag___childSkillsJson___skillItems'
  | 'childEducationJson___locationFlag___childrenSeJson'
  | 'childEducationJson___locationFlag___childrenSeJson___id'
  | 'childEducationJson___locationFlag___childrenSeJson___children'
  | 'childEducationJson___locationFlag___childSeJson___id'
  | 'childEducationJson___locationFlag___childSeJson___children'
  | 'childEducationJson___locationFlag___childrenRuJson'
  | 'childEducationJson___locationFlag___childrenRuJson___id'
  | 'childEducationJson___locationFlag___childrenRuJson___children'
  | 'childEducationJson___locationFlag___childrenRuJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childRuJson___id'
  | 'childEducationJson___locationFlag___childRuJson___children'
  | 'childEducationJson___locationFlag___childRuJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childrenLocale'
  | 'childEducationJson___locationFlag___childrenLocale___id'
  | 'childEducationJson___locationFlag___childrenLocale___children'
  | 'childEducationJson___locationFlag___childrenLocale___language'
  | 'childEducationJson___locationFlag___childrenLocale___ns'
  | 'childEducationJson___locationFlag___childrenLocale___data'
  | 'childEducationJson___locationFlag___childrenLocale___fileAbsolutePath'
  | 'childEducationJson___locationFlag___childLocale___id'
  | 'childEducationJson___locationFlag___childLocale___children'
  | 'childEducationJson___locationFlag___childLocale___language'
  | 'childEducationJson___locationFlag___childLocale___ns'
  | 'childEducationJson___locationFlag___childLocale___data'
  | 'childEducationJson___locationFlag___childLocale___fileAbsolutePath'
  | 'childEducationJson___locationFlag___childrenHuJson'
  | 'childEducationJson___locationFlag___childrenHuJson___id'
  | 'childEducationJson___locationFlag___childrenHuJson___children'
  | 'childEducationJson___locationFlag___childrenHuJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childHuJson___id'
  | 'childEducationJson___locationFlag___childHuJson___children'
  | 'childEducationJson___locationFlag___childHuJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childrenFrJson'
  | 'childEducationJson___locationFlag___childrenFrJson___id'
  | 'childEducationJson___locationFlag___childrenFrJson___children'
  | 'childEducationJson___locationFlag___childrenFrJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childFrJson___id'
  | 'childEducationJson___locationFlag___childFrJson___children'
  | 'childEducationJson___locationFlag___childFrJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childrenFlagsJson'
  | 'childEducationJson___locationFlag___childrenFlagsJson___id'
  | 'childEducationJson___locationFlag___childrenFlagsJson___children'
  | 'childEducationJson___locationFlag___childrenFlagsJson___code'
  | 'childEducationJson___locationFlag___childrenFlagsJson___name'
  | 'childEducationJson___locationFlag___childFlagsJson___id'
  | 'childEducationJson___locationFlag___childFlagsJson___children'
  | 'childEducationJson___locationFlag___childFlagsJson___code'
  | 'childEducationJson___locationFlag___childFlagsJson___name'
  | 'childEducationJson___locationFlag___childrenEtJson'
  | 'childEducationJson___locationFlag___childrenEtJson___id'
  | 'childEducationJson___locationFlag___childrenEtJson___children'
  | 'childEducationJson___locationFlag___childrenEtJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childEtJson___id'
  | 'childEducationJson___locationFlag___childEtJson___children'
  | 'childEducationJson___locationFlag___childEtJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childrenEsJson'
  | 'childEducationJson___locationFlag___childrenEsJson___id'
  | 'childEducationJson___locationFlag___childrenEsJson___children'
  | 'childEducationJson___locationFlag___childrenEsJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childEsJson___id'
  | 'childEducationJson___locationFlag___childEsJson___children'
  | 'childEducationJson___locationFlag___childEsJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childrenEnJson'
  | 'childEducationJson___locationFlag___childrenEnJson___id'
  | 'childEducationJson___locationFlag___childrenEnJson___children'
  | 'childEducationJson___locationFlag___childrenEnJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childEnJson___id'
  | 'childEducationJson___locationFlag___childEnJson___children'
  | 'childEducationJson___locationFlag___childEnJson___Acknowledgements'
  | 'childEducationJson___locationFlag___childrenEducationJson'
  | 'childEducationJson___locationFlag___childrenEducationJson___id'
  | 'childEducationJson___locationFlag___childrenEducationJson___children'
  | 'childEducationJson___locationFlag___childrenEducationJson___location'
  | 'childEducationJson___locationFlag___childrenEducationJson___title'
  | 'childEducationJson___locationFlag___childrenEducationJson___name'
  | 'childEducationJson___locationFlag___childrenEducationJson___dates'
  | 'childEducationJson___locationFlag___childrenEducationJson___description'
  | 'childEducationJson___locationFlag___childEducationJson___id'
  | 'childEducationJson___locationFlag___childEducationJson___children'
  | 'childEducationJson___locationFlag___childEducationJson___location'
  | 'childEducationJson___locationFlag___childEducationJson___title'
  | 'childEducationJson___locationFlag___childEducationJson___name'
  | 'childEducationJson___locationFlag___childEducationJson___dates'
  | 'childEducationJson___locationFlag___childEducationJson___description'
  | 'childEducationJson___locationFlag___childrenDeJson'
  | 'childEducationJson___locationFlag___childrenDeJson___id'
  | 'childEducationJson___locationFlag___childrenDeJson___children'
  | 'childEducationJson___locationFlag___childDeJson___id'
  | 'childEducationJson___locationFlag___childDeJson___children'
  | 'childEducationJson___locationFlag___id'
  | 'childEducationJson___locationFlag___parent___id'
  | 'childEducationJson___locationFlag___parent___children'
  | 'childEducationJson___locationFlag___children'
  | 'childEducationJson___locationFlag___children___id'
  | 'childEducationJson___locationFlag___children___children'
  | 'childEducationJson___locationFlag___internal___content'
  | 'childEducationJson___locationFlag___internal___contentDigest'
  | 'childEducationJson___locationFlag___internal___description'
  | 'childEducationJson___locationFlag___internal___fieldOwners'
  | 'childEducationJson___locationFlag___internal___ignoreType'
  | 'childEducationJson___locationFlag___internal___mediaType'
  | 'childEducationJson___locationFlag___internal___owner'
  | 'childEducationJson___locationFlag___internal___type'
  | 'childEducationJson___title'
  | 'childEducationJson___logo___sourceInstanceName'
  | 'childEducationJson___logo___absolutePath'
  | 'childEducationJson___logo___relativePath'
  | 'childEducationJson___logo___extension'
  | 'childEducationJson___logo___size'
  | 'childEducationJson___logo___prettySize'
  | 'childEducationJson___logo___modifiedTime'
  | 'childEducationJson___logo___accessTime'
  | 'childEducationJson___logo___changeTime'
  | 'childEducationJson___logo___birthTime'
  | 'childEducationJson___logo___root'
  | 'childEducationJson___logo___dir'
  | 'childEducationJson___logo___base'
  | 'childEducationJson___logo___ext'
  | 'childEducationJson___logo___name'
  | 'childEducationJson___logo___relativeDirectory'
  | 'childEducationJson___logo___dev'
  | 'childEducationJson___logo___mode'
  | 'childEducationJson___logo___nlink'
  | 'childEducationJson___logo___uid'
  | 'childEducationJson___logo___gid'
  | 'childEducationJson___logo___rdev'
  | 'childEducationJson___logo___ino'
  | 'childEducationJson___logo___atimeMs'
  | 'childEducationJson___logo___mtimeMs'
  | 'childEducationJson___logo___ctimeMs'
  | 'childEducationJson___logo___atime'
  | 'childEducationJson___logo___mtime'
  | 'childEducationJson___logo___ctime'
  | 'childEducationJson___logo___birthtime'
  | 'childEducationJson___logo___birthtimeMs'
  | 'childEducationJson___logo___blksize'
  | 'childEducationJson___logo___blocks'
  | 'childEducationJson___logo___url'
  | 'childEducationJson___logo___publicURL'
  | 'childEducationJson___logo___childrenImageSharp'
  | 'childEducationJson___logo___childrenImageSharp___gatsbyImageData'
  | 'childEducationJson___logo___childrenImageSharp___id'
  | 'childEducationJson___logo___childrenImageSharp___children'
  | 'childEducationJson___logo___childImageSharp___gatsbyImageData'
  | 'childEducationJson___logo___childImageSharp___id'
  | 'childEducationJson___logo___childImageSharp___children'
  | 'childEducationJson___logo___childrenWorkJson'
  | 'childEducationJson___logo___childrenWorkJson___id'
  | 'childEducationJson___logo___childrenWorkJson___children'
  | 'childEducationJson___logo___childrenWorkJson___location'
  | 'childEducationJson___logo___childrenWorkJson___title'
  | 'childEducationJson___logo___childrenWorkJson___name'
  | 'childEducationJson___logo___childrenWorkJson___dates'
  | 'childEducationJson___logo___childrenWorkJson___description'
  | 'childEducationJson___logo___childWorkJson___id'
  | 'childEducationJson___logo___childWorkJson___children'
  | 'childEducationJson___logo___childWorkJson___location'
  | 'childEducationJson___logo___childWorkJson___title'
  | 'childEducationJson___logo___childWorkJson___name'
  | 'childEducationJson___logo___childWorkJson___dates'
  | 'childEducationJson___logo___childWorkJson___description'
  | 'childEducationJson___logo___childrenSkillsJson'
  | 'childEducationJson___logo___childrenSkillsJson___id'
  | 'childEducationJson___logo___childrenSkillsJson___children'
  | 'childEducationJson___logo___childrenSkillsJson___title'
  | 'childEducationJson___logo___childrenSkillsJson___skillItems'
  | 'childEducationJson___logo___childSkillsJson___id'
  | 'childEducationJson___logo___childSkillsJson___children'
  | 'childEducationJson___logo___childSkillsJson___title'
  | 'childEducationJson___logo___childSkillsJson___skillItems'
  | 'childEducationJson___logo___childrenSeJson'
  | 'childEducationJson___logo___childrenSeJson___id'
  | 'childEducationJson___logo___childrenSeJson___children'
  | 'childEducationJson___logo___childSeJson___id'
  | 'childEducationJson___logo___childSeJson___children'
  | 'childEducationJson___logo___childrenRuJson'
  | 'childEducationJson___logo___childrenRuJson___id'
  | 'childEducationJson___logo___childrenRuJson___children'
  | 'childEducationJson___logo___childrenRuJson___Acknowledgements'
  | 'childEducationJson___logo___childRuJson___id'
  | 'childEducationJson___logo___childRuJson___children'
  | 'childEducationJson___logo___childRuJson___Acknowledgements'
  | 'childEducationJson___logo___childrenLocale'
  | 'childEducationJson___logo___childrenLocale___id'
  | 'childEducationJson___logo___childrenLocale___children'
  | 'childEducationJson___logo___childrenLocale___language'
  | 'childEducationJson___logo___childrenLocale___ns'
  | 'childEducationJson___logo___childrenLocale___data'
  | 'childEducationJson___logo___childrenLocale___fileAbsolutePath'
  | 'childEducationJson___logo___childLocale___id'
  | 'childEducationJson___logo___childLocale___children'
  | 'childEducationJson___logo___childLocale___language'
  | 'childEducationJson___logo___childLocale___ns'
  | 'childEducationJson___logo___childLocale___data'
  | 'childEducationJson___logo___childLocale___fileAbsolutePath'
  | 'childEducationJson___logo___childrenHuJson'
  | 'childEducationJson___logo___childrenHuJson___id'
  | 'childEducationJson___logo___childrenHuJson___children'
  | 'childEducationJson___logo___childrenHuJson___Acknowledgements'
  | 'childEducationJson___logo___childHuJson___id'
  | 'childEducationJson___logo___childHuJson___children'
  | 'childEducationJson___logo___childHuJson___Acknowledgements'
  | 'childEducationJson___logo___childrenFrJson'
  | 'childEducationJson___logo___childrenFrJson___id'
  | 'childEducationJson___logo___childrenFrJson___children'
  | 'childEducationJson___logo___childrenFrJson___Acknowledgements'
  | 'childEducationJson___logo___childFrJson___id'
  | 'childEducationJson___logo___childFrJson___children'
  | 'childEducationJson___logo___childFrJson___Acknowledgements'
  | 'childEducationJson___logo___childrenFlagsJson'
  | 'childEducationJson___logo___childrenFlagsJson___id'
  | 'childEducationJson___logo___childrenFlagsJson___children'
  | 'childEducationJson___logo___childrenFlagsJson___code'
  | 'childEducationJson___logo___childrenFlagsJson___name'
  | 'childEducationJson___logo___childFlagsJson___id'
  | 'childEducationJson___logo___childFlagsJson___children'
  | 'childEducationJson___logo___childFlagsJson___code'
  | 'childEducationJson___logo___childFlagsJson___name'
  | 'childEducationJson___logo___childrenEtJson'
  | 'childEducationJson___logo___childrenEtJson___id'
  | 'childEducationJson___logo___childrenEtJson___children'
  | 'childEducationJson___logo___childrenEtJson___Acknowledgements'
  | 'childEducationJson___logo___childEtJson___id'
  | 'childEducationJson___logo___childEtJson___children'
  | 'childEducationJson___logo___childEtJson___Acknowledgements'
  | 'childEducationJson___logo___childrenEsJson'
  | 'childEducationJson___logo___childrenEsJson___id'
  | 'childEducationJson___logo___childrenEsJson___children'
  | 'childEducationJson___logo___childrenEsJson___Acknowledgements'
  | 'childEducationJson___logo___childEsJson___id'
  | 'childEducationJson___logo___childEsJson___children'
  | 'childEducationJson___logo___childEsJson___Acknowledgements'
  | 'childEducationJson___logo___childrenEnJson'
  | 'childEducationJson___logo___childrenEnJson___id'
  | 'childEducationJson___logo___childrenEnJson___children'
  | 'childEducationJson___logo___childrenEnJson___Acknowledgements'
  | 'childEducationJson___logo___childEnJson___id'
  | 'childEducationJson___logo___childEnJson___children'
  | 'childEducationJson___logo___childEnJson___Acknowledgements'
  | 'childEducationJson___logo___childrenEducationJson'
  | 'childEducationJson___logo___childrenEducationJson___id'
  | 'childEducationJson___logo___childrenEducationJson___children'
  | 'childEducationJson___logo___childrenEducationJson___location'
  | 'childEducationJson___logo___childrenEducationJson___title'
  | 'childEducationJson___logo___childrenEducationJson___name'
  | 'childEducationJson___logo___childrenEducationJson___dates'
  | 'childEducationJson___logo___childrenEducationJson___description'
  | 'childEducationJson___logo___childEducationJson___id'
  | 'childEducationJson___logo___childEducationJson___children'
  | 'childEducationJson___logo___childEducationJson___location'
  | 'childEducationJson___logo___childEducationJson___title'
  | 'childEducationJson___logo___childEducationJson___name'
  | 'childEducationJson___logo___childEducationJson___dates'
  | 'childEducationJson___logo___childEducationJson___description'
  | 'childEducationJson___logo___childrenDeJson'
  | 'childEducationJson___logo___childrenDeJson___id'
  | 'childEducationJson___logo___childrenDeJson___children'
  | 'childEducationJson___logo___childDeJson___id'
  | 'childEducationJson___logo___childDeJson___children'
  | 'childEducationJson___logo___id'
  | 'childEducationJson___logo___parent___id'
  | 'childEducationJson___logo___parent___children'
  | 'childEducationJson___logo___children'
  | 'childEducationJson___logo___children___id'
  | 'childEducationJson___logo___children___children'
  | 'childEducationJson___logo___internal___content'
  | 'childEducationJson___logo___internal___contentDigest'
  | 'childEducationJson___logo___internal___description'
  | 'childEducationJson___logo___internal___fieldOwners'
  | 'childEducationJson___logo___internal___ignoreType'
  | 'childEducationJson___logo___internal___mediaType'
  | 'childEducationJson___logo___internal___owner'
  | 'childEducationJson___logo___internal___type'
  | 'childEducationJson___name'
  | 'childEducationJson___dates'
  | 'childEducationJson___description'
  | 'childrenDeJson'
  | 'childrenDeJson___id'
  | 'childrenDeJson___parent___id'
  | 'childrenDeJson___parent___parent___id'
  | 'childrenDeJson___parent___parent___children'
  | 'childrenDeJson___parent___children'
  | 'childrenDeJson___parent___children___id'
  | 'childrenDeJson___parent___children___children'
  | 'childrenDeJson___parent___internal___content'
  | 'childrenDeJson___parent___internal___contentDigest'
  | 'childrenDeJson___parent___internal___description'
  | 'childrenDeJson___parent___internal___fieldOwners'
  | 'childrenDeJson___parent___internal___ignoreType'
  | 'childrenDeJson___parent___internal___mediaType'
  | 'childrenDeJson___parent___internal___owner'
  | 'childrenDeJson___parent___internal___type'
  | 'childrenDeJson___children'
  | 'childrenDeJson___children___id'
  | 'childrenDeJson___children___parent___id'
  | 'childrenDeJson___children___parent___children'
  | 'childrenDeJson___children___children'
  | 'childrenDeJson___children___children___id'
  | 'childrenDeJson___children___children___children'
  | 'childrenDeJson___children___internal___content'
  | 'childrenDeJson___children___internal___contentDigest'
  | 'childrenDeJson___children___internal___description'
  | 'childrenDeJson___children___internal___fieldOwners'
  | 'childrenDeJson___children___internal___ignoreType'
  | 'childrenDeJson___children___internal___mediaType'
  | 'childrenDeJson___children___internal___owner'
  | 'childrenDeJson___children___internal___type'
  | 'childrenDeJson___internal___content'
  | 'childrenDeJson___internal___contentDigest'
  | 'childrenDeJson___internal___description'
  | 'childrenDeJson___internal___fieldOwners'
  | 'childrenDeJson___internal___ignoreType'
  | 'childrenDeJson___internal___mediaType'
  | 'childrenDeJson___internal___owner'
  | 'childrenDeJson___internal___type'
  | 'childrenDeJson___Banner___SoftwareDeveloper'
  | 'childDeJson___id'
  | 'childDeJson___parent___id'
  | 'childDeJson___parent___parent___id'
  | 'childDeJson___parent___parent___children'
  | 'childDeJson___parent___children'
  | 'childDeJson___parent___children___id'
  | 'childDeJson___parent___children___children'
  | 'childDeJson___parent___internal___content'
  | 'childDeJson___parent___internal___contentDigest'
  | 'childDeJson___parent___internal___description'
  | 'childDeJson___parent___internal___fieldOwners'
  | 'childDeJson___parent___internal___ignoreType'
  | 'childDeJson___parent___internal___mediaType'
  | 'childDeJson___parent___internal___owner'
  | 'childDeJson___parent___internal___type'
  | 'childDeJson___children'
  | 'childDeJson___children___id'
  | 'childDeJson___children___parent___id'
  | 'childDeJson___children___parent___children'
  | 'childDeJson___children___children'
  | 'childDeJson___children___children___id'
  | 'childDeJson___children___children___children'
  | 'childDeJson___children___internal___content'
  | 'childDeJson___children___internal___contentDigest'
  | 'childDeJson___children___internal___description'
  | 'childDeJson___children___internal___fieldOwners'
  | 'childDeJson___children___internal___ignoreType'
  | 'childDeJson___children___internal___mediaType'
  | 'childDeJson___children___internal___owner'
  | 'childDeJson___children___internal___type'
  | 'childDeJson___internal___content'
  | 'childDeJson___internal___contentDigest'
  | 'childDeJson___internal___description'
  | 'childDeJson___internal___fieldOwners'
  | 'childDeJson___internal___ignoreType'
  | 'childDeJson___internal___mediaType'
  | 'childDeJson___internal___owner'
  | 'childDeJson___internal___type'
  | 'childDeJson___Banner___SoftwareDeveloper'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ArticleFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  cover_image?: InputMaybe<StringQueryOperatorInput>;
  social_image?: InputMaybe<StringQueryOperatorInput>;
  published_at?: InputMaybe<DateQueryOperatorInput>;
  positive_reactions_count?: InputMaybe<IntQueryOperatorInput>;
  type_of?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<IntQueryOperatorInput>;
  readable_publish_date?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  comments_count?: InputMaybe<IntQueryOperatorInput>;
  public_reactions_count?: InputMaybe<IntQueryOperatorInput>;
  published_timestamp?: InputMaybe<DateQueryOperatorInput>;
  canonical_url?: InputMaybe<StringQueryOperatorInput>;
  created_at?: InputMaybe<DateQueryOperatorInput>;
  edited_at?: InputMaybe<DateQueryOperatorInput>;
  last_comment_at?: InputMaybe<DateQueryOperatorInput>;
  reading_time_minutes?: InputMaybe<IntQueryOperatorInput>;
  tag_list?: InputMaybe<StringQueryOperatorInput>;
  user?: InputMaybe<DevArticlesArticleUserFilterInput>;
  body_html?: InputMaybe<StringQueryOperatorInput>;
  body_markdown?: InputMaybe<StringQueryOperatorInput>;
};

export type DevArticlesArticleUserFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  username?: InputMaybe<StringQueryOperatorInput>;
  github_username?: InputMaybe<StringQueryOperatorInput>;
  profile_image?: InputMaybe<StringQueryOperatorInput>;
  profile_image_90?: InputMaybe<StringQueryOperatorInput>;
};

export type DevArticlesFieldsFilterInput = {
  featuredImg?: InputMaybe<StringQueryOperatorInput>;
};

export type DevArticlesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DevArticlesEdge>;
  nodes: Array<DevArticles>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DevArticlesGroupConnection>;
};


export type DevArticlesConnectionDistinctArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesConnectionMaxArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesConnectionMinArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesConnectionSumArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DevArticlesFieldsEnum;
};

export type DevArticlesEdge = {
  next?: Maybe<DevArticles>;
  node: DevArticles;
  previous?: Maybe<DevArticles>;
};

export type DevArticlesFieldsEnum =
  | 'id'
  | 'article___url'
  | 'article___title'
  | 'article___tags'
  | 'article___description'
  | 'article___cover_image'
  | 'article___social_image'
  | 'article___published_at'
  | 'article___positive_reactions_count'
  | 'article___type_of'
  | 'article___id'
  | 'article___readable_publish_date'
  | 'article___slug'
  | 'article___path'
  | 'article___comments_count'
  | 'article___public_reactions_count'
  | 'article___published_timestamp'
  | 'article___canonical_url'
  | 'article___created_at'
  | 'article___edited_at'
  | 'article___last_comment_at'
  | 'article___reading_time_minutes'
  | 'article___tag_list'
  | 'article___user___name'
  | 'article___user___username'
  | 'article___user___github_username'
  | 'article___user___profile_image'
  | 'article___user___profile_image_90'
  | 'article___body_html'
  | 'article___body_markdown'
  | 'featuredImg___sourceInstanceName'
  | 'featuredImg___absolutePath'
  | 'featuredImg___relativePath'
  | 'featuredImg___extension'
  | 'featuredImg___size'
  | 'featuredImg___prettySize'
  | 'featuredImg___modifiedTime'
  | 'featuredImg___accessTime'
  | 'featuredImg___changeTime'
  | 'featuredImg___birthTime'
  | 'featuredImg___root'
  | 'featuredImg___dir'
  | 'featuredImg___base'
  | 'featuredImg___ext'
  | 'featuredImg___name'
  | 'featuredImg___relativeDirectory'
  | 'featuredImg___dev'
  | 'featuredImg___mode'
  | 'featuredImg___nlink'
  | 'featuredImg___uid'
  | 'featuredImg___gid'
  | 'featuredImg___rdev'
  | 'featuredImg___ino'
  | 'featuredImg___atimeMs'
  | 'featuredImg___mtimeMs'
  | 'featuredImg___ctimeMs'
  | 'featuredImg___atime'
  | 'featuredImg___mtime'
  | 'featuredImg___ctime'
  | 'featuredImg___birthtime'
  | 'featuredImg___birthtimeMs'
  | 'featuredImg___blksize'
  | 'featuredImg___blocks'
  | 'featuredImg___url'
  | 'featuredImg___publicURL'
  | 'featuredImg___childrenImageSharp'
  | 'featuredImg___childrenImageSharp___fixed___base64'
  | 'featuredImg___childrenImageSharp___fixed___tracedSVG'
  | 'featuredImg___childrenImageSharp___fixed___aspectRatio'
  | 'featuredImg___childrenImageSharp___fixed___width'
  | 'featuredImg___childrenImageSharp___fixed___height'
  | 'featuredImg___childrenImageSharp___fixed___src'
  | 'featuredImg___childrenImageSharp___fixed___srcSet'
  | 'featuredImg___childrenImageSharp___fixed___srcWebp'
  | 'featuredImg___childrenImageSharp___fixed___srcSetWebp'
  | 'featuredImg___childrenImageSharp___fixed___originalName'
  | 'featuredImg___childrenImageSharp___fluid___base64'
  | 'featuredImg___childrenImageSharp___fluid___tracedSVG'
  | 'featuredImg___childrenImageSharp___fluid___aspectRatio'
  | 'featuredImg___childrenImageSharp___fluid___src'
  | 'featuredImg___childrenImageSharp___fluid___srcSet'
  | 'featuredImg___childrenImageSharp___fluid___srcWebp'
  | 'featuredImg___childrenImageSharp___fluid___srcSetWebp'
  | 'featuredImg___childrenImageSharp___fluid___sizes'
  | 'featuredImg___childrenImageSharp___fluid___originalImg'
  | 'featuredImg___childrenImageSharp___fluid___originalName'
  | 'featuredImg___childrenImageSharp___fluid___presentationWidth'
  | 'featuredImg___childrenImageSharp___fluid___presentationHeight'
  | 'featuredImg___childrenImageSharp___gatsbyImageData'
  | 'featuredImg___childrenImageSharp___original___width'
  | 'featuredImg___childrenImageSharp___original___height'
  | 'featuredImg___childrenImageSharp___original___src'
  | 'featuredImg___childrenImageSharp___resize___src'
  | 'featuredImg___childrenImageSharp___resize___tracedSVG'
  | 'featuredImg___childrenImageSharp___resize___width'
  | 'featuredImg___childrenImageSharp___resize___height'
  | 'featuredImg___childrenImageSharp___resize___aspectRatio'
  | 'featuredImg___childrenImageSharp___resize___originalName'
  | 'featuredImg___childrenImageSharp___id'
  | 'featuredImg___childrenImageSharp___parent___id'
  | 'featuredImg___childrenImageSharp___parent___children'
  | 'featuredImg___childrenImageSharp___children'
  | 'featuredImg___childrenImageSharp___children___id'
  | 'featuredImg___childrenImageSharp___children___children'
  | 'featuredImg___childrenImageSharp___internal___content'
  | 'featuredImg___childrenImageSharp___internal___contentDigest'
  | 'featuredImg___childrenImageSharp___internal___description'
  | 'featuredImg___childrenImageSharp___internal___fieldOwners'
  | 'featuredImg___childrenImageSharp___internal___ignoreType'
  | 'featuredImg___childrenImageSharp___internal___mediaType'
  | 'featuredImg___childrenImageSharp___internal___owner'
  | 'featuredImg___childrenImageSharp___internal___type'
  | 'featuredImg___childImageSharp___fixed___base64'
  | 'featuredImg___childImageSharp___fixed___tracedSVG'
  | 'featuredImg___childImageSharp___fixed___aspectRatio'
  | 'featuredImg___childImageSharp___fixed___width'
  | 'featuredImg___childImageSharp___fixed___height'
  | 'featuredImg___childImageSharp___fixed___src'
  | 'featuredImg___childImageSharp___fixed___srcSet'
  | 'featuredImg___childImageSharp___fixed___srcWebp'
  | 'featuredImg___childImageSharp___fixed___srcSetWebp'
  | 'featuredImg___childImageSharp___fixed___originalName'
  | 'featuredImg___childImageSharp___fluid___base64'
  | 'featuredImg___childImageSharp___fluid___tracedSVG'
  | 'featuredImg___childImageSharp___fluid___aspectRatio'
  | 'featuredImg___childImageSharp___fluid___src'
  | 'featuredImg___childImageSharp___fluid___srcSet'
  | 'featuredImg___childImageSharp___fluid___srcWebp'
  | 'featuredImg___childImageSharp___fluid___srcSetWebp'
  | 'featuredImg___childImageSharp___fluid___sizes'
  | 'featuredImg___childImageSharp___fluid___originalImg'
  | 'featuredImg___childImageSharp___fluid___originalName'
  | 'featuredImg___childImageSharp___fluid___presentationWidth'
  | 'featuredImg___childImageSharp___fluid___presentationHeight'
  | 'featuredImg___childImageSharp___gatsbyImageData'
  | 'featuredImg___childImageSharp___original___width'
  | 'featuredImg___childImageSharp___original___height'
  | 'featuredImg___childImageSharp___original___src'
  | 'featuredImg___childImageSharp___resize___src'
  | 'featuredImg___childImageSharp___resize___tracedSVG'
  | 'featuredImg___childImageSharp___resize___width'
  | 'featuredImg___childImageSharp___resize___height'
  | 'featuredImg___childImageSharp___resize___aspectRatio'
  | 'featuredImg___childImageSharp___resize___originalName'
  | 'featuredImg___childImageSharp___id'
  | 'featuredImg___childImageSharp___parent___id'
  | 'featuredImg___childImageSharp___parent___children'
  | 'featuredImg___childImageSharp___children'
  | 'featuredImg___childImageSharp___children___id'
  | 'featuredImg___childImageSharp___children___children'
  | 'featuredImg___childImageSharp___internal___content'
  | 'featuredImg___childImageSharp___internal___contentDigest'
  | 'featuredImg___childImageSharp___internal___description'
  | 'featuredImg___childImageSharp___internal___fieldOwners'
  | 'featuredImg___childImageSharp___internal___ignoreType'
  | 'featuredImg___childImageSharp___internal___mediaType'
  | 'featuredImg___childImageSharp___internal___owner'
  | 'featuredImg___childImageSharp___internal___type'
  | 'featuredImg___childrenWorkJson'
  | 'featuredImg___childrenWorkJson___id'
  | 'featuredImg___childrenWorkJson___parent___id'
  | 'featuredImg___childrenWorkJson___parent___children'
  | 'featuredImg___childrenWorkJson___children'
  | 'featuredImg___childrenWorkJson___children___id'
  | 'featuredImg___childrenWorkJson___children___children'
  | 'featuredImg___childrenWorkJson___internal___content'
  | 'featuredImg___childrenWorkJson___internal___contentDigest'
  | 'featuredImg___childrenWorkJson___internal___description'
  | 'featuredImg___childrenWorkJson___internal___fieldOwners'
  | 'featuredImg___childrenWorkJson___internal___ignoreType'
  | 'featuredImg___childrenWorkJson___internal___mediaType'
  | 'featuredImg___childrenWorkJson___internal___owner'
  | 'featuredImg___childrenWorkJson___internal___type'
  | 'featuredImg___childrenWorkJson___location'
  | 'featuredImg___childrenWorkJson___locationFlag___sourceInstanceName'
  | 'featuredImg___childrenWorkJson___locationFlag___absolutePath'
  | 'featuredImg___childrenWorkJson___locationFlag___relativePath'
  | 'featuredImg___childrenWorkJson___locationFlag___extension'
  | 'featuredImg___childrenWorkJson___locationFlag___size'
  | 'featuredImg___childrenWorkJson___locationFlag___prettySize'
  | 'featuredImg___childrenWorkJson___locationFlag___modifiedTime'
  | 'featuredImg___childrenWorkJson___locationFlag___accessTime'
  | 'featuredImg___childrenWorkJson___locationFlag___changeTime'
  | 'featuredImg___childrenWorkJson___locationFlag___birthTime'
  | 'featuredImg___childrenWorkJson___locationFlag___root'
  | 'featuredImg___childrenWorkJson___locationFlag___dir'
  | 'featuredImg___childrenWorkJson___locationFlag___base'
  | 'featuredImg___childrenWorkJson___locationFlag___ext'
  | 'featuredImg___childrenWorkJson___locationFlag___name'
  | 'featuredImg___childrenWorkJson___locationFlag___relativeDirectory'
  | 'featuredImg___childrenWorkJson___locationFlag___dev'
  | 'featuredImg___childrenWorkJson___locationFlag___mode'
  | 'featuredImg___childrenWorkJson___locationFlag___nlink'
  | 'featuredImg___childrenWorkJson___locationFlag___uid'
  | 'featuredImg___childrenWorkJson___locationFlag___gid'
  | 'featuredImg___childrenWorkJson___locationFlag___rdev'
  | 'featuredImg___childrenWorkJson___locationFlag___ino'
  | 'featuredImg___childrenWorkJson___locationFlag___atimeMs'
  | 'featuredImg___childrenWorkJson___locationFlag___mtimeMs'
  | 'featuredImg___childrenWorkJson___locationFlag___ctimeMs'
  | 'featuredImg___childrenWorkJson___locationFlag___atime'
  | 'featuredImg___childrenWorkJson___locationFlag___mtime'
  | 'featuredImg___childrenWorkJson___locationFlag___ctime'
  | 'featuredImg___childrenWorkJson___locationFlag___birthtime'
  | 'featuredImg___childrenWorkJson___locationFlag___birthtimeMs'
  | 'featuredImg___childrenWorkJson___locationFlag___blksize'
  | 'featuredImg___childrenWorkJson___locationFlag___blocks'
  | 'featuredImg___childrenWorkJson___locationFlag___url'
  | 'featuredImg___childrenWorkJson___locationFlag___publicURL'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenImageSharp'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenWorkJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenSkillsJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenSeJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenRuJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenLocale'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenHuJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenFrJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenFlagsJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenEtJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenEsJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenEnJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenEducationJson'
  | 'featuredImg___childrenWorkJson___locationFlag___childrenDeJson'
  | 'featuredImg___childrenWorkJson___locationFlag___id'
  | 'featuredImg___childrenWorkJson___locationFlag___children'
  | 'featuredImg___childrenWorkJson___title'
  | 'featuredImg___childrenWorkJson___logo___sourceInstanceName'
  | 'featuredImg___childrenWorkJson___logo___absolutePath'
  | 'featuredImg___childrenWorkJson___logo___relativePath'
  | 'featuredImg___childrenWorkJson___logo___extension'
  | 'featuredImg___childrenWorkJson___logo___size'
  | 'featuredImg___childrenWorkJson___logo___prettySize'
  | 'featuredImg___childrenWorkJson___logo___modifiedTime'
  | 'featuredImg___childrenWorkJson___logo___accessTime'
  | 'featuredImg___childrenWorkJson___logo___changeTime'
  | 'featuredImg___childrenWorkJson___logo___birthTime'
  | 'featuredImg___childrenWorkJson___logo___root'
  | 'featuredImg___childrenWorkJson___logo___dir'
  | 'featuredImg___childrenWorkJson___logo___base'
  | 'featuredImg___childrenWorkJson___logo___ext'
  | 'featuredImg___childrenWorkJson___logo___name'
  | 'featuredImg___childrenWorkJson___logo___relativeDirectory'
  | 'featuredImg___childrenWorkJson___logo___dev'
  | 'featuredImg___childrenWorkJson___logo___mode'
  | 'featuredImg___childrenWorkJson___logo___nlink'
  | 'featuredImg___childrenWorkJson___logo___uid'
  | 'featuredImg___childrenWorkJson___logo___gid'
  | 'featuredImg___childrenWorkJson___logo___rdev'
  | 'featuredImg___childrenWorkJson___logo___ino'
  | 'featuredImg___childrenWorkJson___logo___atimeMs'
  | 'featuredImg___childrenWorkJson___logo___mtimeMs'
  | 'featuredImg___childrenWorkJson___logo___ctimeMs'
  | 'featuredImg___childrenWorkJson___logo___atime'
  | 'featuredImg___childrenWorkJson___logo___mtime'
  | 'featuredImg___childrenWorkJson___logo___ctime'
  | 'featuredImg___childrenWorkJson___logo___birthtime'
  | 'featuredImg___childrenWorkJson___logo___birthtimeMs'
  | 'featuredImg___childrenWorkJson___logo___blksize'
  | 'featuredImg___childrenWorkJson___logo___blocks'
  | 'featuredImg___childrenWorkJson___logo___url'
  | 'featuredImg___childrenWorkJson___logo___publicURL'
  | 'featuredImg___childrenWorkJson___logo___childrenImageSharp'
  | 'featuredImg___childrenWorkJson___logo___childrenWorkJson'
  | 'featuredImg___childrenWorkJson___logo___childrenSkillsJson'
  | 'featuredImg___childrenWorkJson___logo___childrenSeJson'
  | 'featuredImg___childrenWorkJson___logo___childrenRuJson'
  | 'featuredImg___childrenWorkJson___logo___childrenLocale'
  | 'featuredImg___childrenWorkJson___logo___childrenHuJson'
  | 'featuredImg___childrenWorkJson___logo___childrenFrJson'
  | 'featuredImg___childrenWorkJson___logo___childrenFlagsJson'
  | 'featuredImg___childrenWorkJson___logo___childrenEtJson'
  | 'featuredImg___childrenWorkJson___logo___childrenEsJson'
  | 'featuredImg___childrenWorkJson___logo___childrenEnJson'
  | 'featuredImg___childrenWorkJson___logo___childrenEducationJson'
  | 'featuredImg___childrenWorkJson___logo___childrenDeJson'
  | 'featuredImg___childrenWorkJson___logo___id'
  | 'featuredImg___childrenWorkJson___logo___children'
  | 'featuredImg___childrenWorkJson___name'
  | 'featuredImg___childrenWorkJson___dates'
  | 'featuredImg___childrenWorkJson___description'
  | 'featuredImg___childWorkJson___id'
  | 'featuredImg___childWorkJson___parent___id'
  | 'featuredImg___childWorkJson___parent___children'
  | 'featuredImg___childWorkJson___children'
  | 'featuredImg___childWorkJson___children___id'
  | 'featuredImg___childWorkJson___children___children'
  | 'featuredImg___childWorkJson___internal___content'
  | 'featuredImg___childWorkJson___internal___contentDigest'
  | 'featuredImg___childWorkJson___internal___description'
  | 'featuredImg___childWorkJson___internal___fieldOwners'
  | 'featuredImg___childWorkJson___internal___ignoreType'
  | 'featuredImg___childWorkJson___internal___mediaType'
  | 'featuredImg___childWorkJson___internal___owner'
  | 'featuredImg___childWorkJson___internal___type'
  | 'featuredImg___childWorkJson___location'
  | 'featuredImg___childWorkJson___locationFlag___sourceInstanceName'
  | 'featuredImg___childWorkJson___locationFlag___absolutePath'
  | 'featuredImg___childWorkJson___locationFlag___relativePath'
  | 'featuredImg___childWorkJson___locationFlag___extension'
  | 'featuredImg___childWorkJson___locationFlag___size'
  | 'featuredImg___childWorkJson___locationFlag___prettySize'
  | 'featuredImg___childWorkJson___locationFlag___modifiedTime'
  | 'featuredImg___childWorkJson___locationFlag___accessTime'
  | 'featuredImg___childWorkJson___locationFlag___changeTime'
  | 'featuredImg___childWorkJson___locationFlag___birthTime'
  | 'featuredImg___childWorkJson___locationFlag___root'
  | 'featuredImg___childWorkJson___locationFlag___dir'
  | 'featuredImg___childWorkJson___locationFlag___base'
  | 'featuredImg___childWorkJson___locationFlag___ext'
  | 'featuredImg___childWorkJson___locationFlag___name'
  | 'featuredImg___childWorkJson___locationFlag___relativeDirectory'
  | 'featuredImg___childWorkJson___locationFlag___dev'
  | 'featuredImg___childWorkJson___locationFlag___mode'
  | 'featuredImg___childWorkJson___locationFlag___nlink'
  | 'featuredImg___childWorkJson___locationFlag___uid'
  | 'featuredImg___childWorkJson___locationFlag___gid'
  | 'featuredImg___childWorkJson___locationFlag___rdev'
  | 'featuredImg___childWorkJson___locationFlag___ino'
  | 'featuredImg___childWorkJson___locationFlag___atimeMs'
  | 'featuredImg___childWorkJson___locationFlag___mtimeMs'
  | 'featuredImg___childWorkJson___locationFlag___ctimeMs'
  | 'featuredImg___childWorkJson___locationFlag___atime'
  | 'featuredImg___childWorkJson___locationFlag___mtime'
  | 'featuredImg___childWorkJson___locationFlag___ctime'
  | 'featuredImg___childWorkJson___locationFlag___birthtime'
  | 'featuredImg___childWorkJson___locationFlag___birthtimeMs'
  | 'featuredImg___childWorkJson___locationFlag___blksize'
  | 'featuredImg___childWorkJson___locationFlag___blocks'
  | 'featuredImg___childWorkJson___locationFlag___url'
  | 'featuredImg___childWorkJson___locationFlag___publicURL'
  | 'featuredImg___childWorkJson___locationFlag___childrenImageSharp'
  | 'featuredImg___childWorkJson___locationFlag___childrenWorkJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenSkillsJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenSeJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenRuJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenLocale'
  | 'featuredImg___childWorkJson___locationFlag___childrenHuJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenFrJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenFlagsJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenEtJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenEsJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenEnJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenEducationJson'
  | 'featuredImg___childWorkJson___locationFlag___childrenDeJson'
  | 'featuredImg___childWorkJson___locationFlag___id'
  | 'featuredImg___childWorkJson___locationFlag___children'
  | 'featuredImg___childWorkJson___title'
  | 'featuredImg___childWorkJson___logo___sourceInstanceName'
  | 'featuredImg___childWorkJson___logo___absolutePath'
  | 'featuredImg___childWorkJson___logo___relativePath'
  | 'featuredImg___childWorkJson___logo___extension'
  | 'featuredImg___childWorkJson___logo___size'
  | 'featuredImg___childWorkJson___logo___prettySize'
  | 'featuredImg___childWorkJson___logo___modifiedTime'
  | 'featuredImg___childWorkJson___logo___accessTime'
  | 'featuredImg___childWorkJson___logo___changeTime'
  | 'featuredImg___childWorkJson___logo___birthTime'
  | 'featuredImg___childWorkJson___logo___root'
  | 'featuredImg___childWorkJson___logo___dir'
  | 'featuredImg___childWorkJson___logo___base'
  | 'featuredImg___childWorkJson___logo___ext'
  | 'featuredImg___childWorkJson___logo___name'
  | 'featuredImg___childWorkJson___logo___relativeDirectory'
  | 'featuredImg___childWorkJson___logo___dev'
  | 'featuredImg___childWorkJson___logo___mode'
  | 'featuredImg___childWorkJson___logo___nlink'
  | 'featuredImg___childWorkJson___logo___uid'
  | 'featuredImg___childWorkJson___logo___gid'
  | 'featuredImg___childWorkJson___logo___rdev'
  | 'featuredImg___childWorkJson___logo___ino'
  | 'featuredImg___childWorkJson___logo___atimeMs'
  | 'featuredImg___childWorkJson___logo___mtimeMs'
  | 'featuredImg___childWorkJson___logo___ctimeMs'
  | 'featuredImg___childWorkJson___logo___atime'
  | 'featuredImg___childWorkJson___logo___mtime'
  | 'featuredImg___childWorkJson___logo___ctime'
  | 'featuredImg___childWorkJson___logo___birthtime'
  | 'featuredImg___childWorkJson___logo___birthtimeMs'
  | 'featuredImg___childWorkJson___logo___blksize'
  | 'featuredImg___childWorkJson___logo___blocks'
  | 'featuredImg___childWorkJson___logo___url'
  | 'featuredImg___childWorkJson___logo___publicURL'
  | 'featuredImg___childWorkJson___logo___childrenImageSharp'
  | 'featuredImg___childWorkJson___logo___childrenWorkJson'
  | 'featuredImg___childWorkJson___logo___childrenSkillsJson'
  | 'featuredImg___childWorkJson___logo___childrenSeJson'
  | 'featuredImg___childWorkJson___logo___childrenRuJson'
  | 'featuredImg___childWorkJson___logo___childrenLocale'
  | 'featuredImg___childWorkJson___logo___childrenHuJson'
  | 'featuredImg___childWorkJson___logo___childrenFrJson'
  | 'featuredImg___childWorkJson___logo___childrenFlagsJson'
  | 'featuredImg___childWorkJson___logo___childrenEtJson'
  | 'featuredImg___childWorkJson___logo___childrenEsJson'
  | 'featuredImg___childWorkJson___logo___childrenEnJson'
  | 'featuredImg___childWorkJson___logo___childrenEducationJson'
  | 'featuredImg___childWorkJson___logo___childrenDeJson'
  | 'featuredImg___childWorkJson___logo___id'
  | 'featuredImg___childWorkJson___logo___children'
  | 'featuredImg___childWorkJson___name'
  | 'featuredImg___childWorkJson___dates'
  | 'featuredImg___childWorkJson___description'
  | 'featuredImg___childrenSkillsJson'
  | 'featuredImg___childrenSkillsJson___id'
  | 'featuredImg___childrenSkillsJson___parent___id'
  | 'featuredImg___childrenSkillsJson___parent___children'
  | 'featuredImg___childrenSkillsJson___children'
  | 'featuredImg___childrenSkillsJson___children___id'
  | 'featuredImg___childrenSkillsJson___children___children'
  | 'featuredImg___childrenSkillsJson___internal___content'
  | 'featuredImg___childrenSkillsJson___internal___contentDigest'
  | 'featuredImg___childrenSkillsJson___internal___description'
  | 'featuredImg___childrenSkillsJson___internal___fieldOwners'
  | 'featuredImg___childrenSkillsJson___internal___ignoreType'
  | 'featuredImg___childrenSkillsJson___internal___mediaType'
  | 'featuredImg___childrenSkillsJson___internal___owner'
  | 'featuredImg___childrenSkillsJson___internal___type'
  | 'featuredImg___childrenSkillsJson___title'
  | 'featuredImg___childrenSkillsJson___skillItems'
  | 'featuredImg___childrenSkillsJson___skillItems___name'
  | 'featuredImg___childrenSkillsJson___skillItems___extra'
  | 'featuredImg___childrenSkillsJson___skillItems___subSkills'
  | 'featuredImg___childrenSkillsJson___skillItems___href'
  | 'featuredImg___childSkillsJson___id'
  | 'featuredImg___childSkillsJson___parent___id'
  | 'featuredImg___childSkillsJson___parent___children'
  | 'featuredImg___childSkillsJson___children'
  | 'featuredImg___childSkillsJson___children___id'
  | 'featuredImg___childSkillsJson___children___children'
  | 'featuredImg___childSkillsJson___internal___content'
  | 'featuredImg___childSkillsJson___internal___contentDigest'
  | 'featuredImg___childSkillsJson___internal___description'
  | 'featuredImg___childSkillsJson___internal___fieldOwners'
  | 'featuredImg___childSkillsJson___internal___ignoreType'
  | 'featuredImg___childSkillsJson___internal___mediaType'
  | 'featuredImg___childSkillsJson___internal___owner'
  | 'featuredImg___childSkillsJson___internal___type'
  | 'featuredImg___childSkillsJson___title'
  | 'featuredImg___childSkillsJson___skillItems'
  | 'featuredImg___childSkillsJson___skillItems___name'
  | 'featuredImg___childSkillsJson___skillItems___extra'
  | 'featuredImg___childSkillsJson___skillItems___subSkills'
  | 'featuredImg___childSkillsJson___skillItems___href'
  | 'featuredImg___childrenSeJson'
  | 'featuredImg___childrenSeJson___id'
  | 'featuredImg___childrenSeJson___parent___id'
  | 'featuredImg___childrenSeJson___parent___children'
  | 'featuredImg___childrenSeJson___children'
  | 'featuredImg___childrenSeJson___children___id'
  | 'featuredImg___childrenSeJson___children___children'
  | 'featuredImg___childrenSeJson___internal___content'
  | 'featuredImg___childrenSeJson___internal___contentDigest'
  | 'featuredImg___childrenSeJson___internal___description'
  | 'featuredImg___childrenSeJson___internal___fieldOwners'
  | 'featuredImg___childrenSeJson___internal___ignoreType'
  | 'featuredImg___childrenSeJson___internal___mediaType'
  | 'featuredImg___childrenSeJson___internal___owner'
  | 'featuredImg___childrenSeJson___internal___type'
  | 'featuredImg___childrenSeJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childSeJson___id'
  | 'featuredImg___childSeJson___parent___id'
  | 'featuredImg___childSeJson___parent___children'
  | 'featuredImg___childSeJson___children'
  | 'featuredImg___childSeJson___children___id'
  | 'featuredImg___childSeJson___children___children'
  | 'featuredImg___childSeJson___internal___content'
  | 'featuredImg___childSeJson___internal___contentDigest'
  | 'featuredImg___childSeJson___internal___description'
  | 'featuredImg___childSeJson___internal___fieldOwners'
  | 'featuredImg___childSeJson___internal___ignoreType'
  | 'featuredImg___childSeJson___internal___mediaType'
  | 'featuredImg___childSeJson___internal___owner'
  | 'featuredImg___childSeJson___internal___type'
  | 'featuredImg___childSeJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childrenRuJson'
  | 'featuredImg___childrenRuJson___id'
  | 'featuredImg___childrenRuJson___parent___id'
  | 'featuredImg___childrenRuJson___parent___children'
  | 'featuredImg___childrenRuJson___children'
  | 'featuredImg___childrenRuJson___children___id'
  | 'featuredImg___childrenRuJson___children___children'
  | 'featuredImg___childrenRuJson___internal___content'
  | 'featuredImg___childrenRuJson___internal___contentDigest'
  | 'featuredImg___childrenRuJson___internal___description'
  | 'featuredImg___childrenRuJson___internal___fieldOwners'
  | 'featuredImg___childrenRuJson___internal___ignoreType'
  | 'featuredImg___childrenRuJson___internal___mediaType'
  | 'featuredImg___childrenRuJson___internal___owner'
  | 'featuredImg___childrenRuJson___internal___type'
  | 'featuredImg___childrenRuJson___About___AboutMe'
  | 'featuredImg___childrenRuJson___About___Description'
  | 'featuredImg___childrenRuJson___About___PhotoDescription'
  | 'featuredImg___childrenRuJson___About___ViewCV'
  | 'featuredImg___childrenRuJson___Acknowledgements'
  | 'featuredImg___childrenRuJson___Banner___DexterSibirtsev'
  | 'featuredImg___childrenRuJson___Banner___Experience'
  | 'featuredImg___childrenRuJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childrenRuJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childrenRuJson___Blog___Blog'
  | 'featuredImg___childrenRuJson___Contact___Contact'
  | 'featuredImg___childrenRuJson___Contact___GetInTouch'
  | 'featuredImg___childrenRuJson___Contact___SendEmail'
  | 'featuredImg___childrenRuJson___Education___Description'
  | 'featuredImg___childrenRuJson___Education___Education'
  | 'featuredImg___childrenRuJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childrenRuJson___PageLinks___Acknowledgements'
  | 'featuredImg___childrenRuJson___PageLinks___Home'
  | 'featuredImg___childrenRuJson___SectionButtons___About'
  | 'featuredImg___childrenRuJson___SectionButtons___Blog'
  | 'featuredImg___childrenRuJson___SectionButtons___Contact'
  | 'featuredImg___childrenRuJson___SectionButtons___Experience'
  | 'featuredImg___childrenRuJson___SectionButtons___Skills'
  | 'featuredImg___childrenRuJson___Skills___Overview'
  | 'featuredImg___childrenRuJson___Skills___Skills'
  | 'featuredImg___childrenRuJson___Work___Work'
  | 'featuredImg___childRuJson___id'
  | 'featuredImg___childRuJson___parent___id'
  | 'featuredImg___childRuJson___parent___children'
  | 'featuredImg___childRuJson___children'
  | 'featuredImg___childRuJson___children___id'
  | 'featuredImg___childRuJson___children___children'
  | 'featuredImg___childRuJson___internal___content'
  | 'featuredImg___childRuJson___internal___contentDigest'
  | 'featuredImg___childRuJson___internal___description'
  | 'featuredImg___childRuJson___internal___fieldOwners'
  | 'featuredImg___childRuJson___internal___ignoreType'
  | 'featuredImg___childRuJson___internal___mediaType'
  | 'featuredImg___childRuJson___internal___owner'
  | 'featuredImg___childRuJson___internal___type'
  | 'featuredImg___childRuJson___About___AboutMe'
  | 'featuredImg___childRuJson___About___Description'
  | 'featuredImg___childRuJson___About___PhotoDescription'
  | 'featuredImg___childRuJson___About___ViewCV'
  | 'featuredImg___childRuJson___Acknowledgements'
  | 'featuredImg___childRuJson___Banner___DexterSibirtsev'
  | 'featuredImg___childRuJson___Banner___Experience'
  | 'featuredImg___childRuJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childRuJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childRuJson___Blog___Blog'
  | 'featuredImg___childRuJson___Contact___Contact'
  | 'featuredImg___childRuJson___Contact___GetInTouch'
  | 'featuredImg___childRuJson___Contact___SendEmail'
  | 'featuredImg___childRuJson___Education___Description'
  | 'featuredImg___childRuJson___Education___Education'
  | 'featuredImg___childRuJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childRuJson___PageLinks___Acknowledgements'
  | 'featuredImg___childRuJson___PageLinks___Home'
  | 'featuredImg___childRuJson___SectionButtons___About'
  | 'featuredImg___childRuJson___SectionButtons___Blog'
  | 'featuredImg___childRuJson___SectionButtons___Contact'
  | 'featuredImg___childRuJson___SectionButtons___Experience'
  | 'featuredImg___childRuJson___SectionButtons___Skills'
  | 'featuredImg___childRuJson___Skills___Overview'
  | 'featuredImg___childRuJson___Skills___Skills'
  | 'featuredImg___childRuJson___Work___Work'
  | 'featuredImg___childrenLocale'
  | 'featuredImg___childrenLocale___id'
  | 'featuredImg___childrenLocale___parent___id'
  | 'featuredImg___childrenLocale___parent___children'
  | 'featuredImg___childrenLocale___children'
  | 'featuredImg___childrenLocale___children___id'
  | 'featuredImg___childrenLocale___children___children'
  | 'featuredImg___childrenLocale___internal___content'
  | 'featuredImg___childrenLocale___internal___contentDigest'
  | 'featuredImg___childrenLocale___internal___description'
  | 'featuredImg___childrenLocale___internal___fieldOwners'
  | 'featuredImg___childrenLocale___internal___ignoreType'
  | 'featuredImg___childrenLocale___internal___mediaType'
  | 'featuredImg___childrenLocale___internal___owner'
  | 'featuredImg___childrenLocale___internal___type'
  | 'featuredImg___childrenLocale___language'
  | 'featuredImg___childrenLocale___ns'
  | 'featuredImg___childrenLocale___data'
  | 'featuredImg___childrenLocale___fileAbsolutePath'
  | 'featuredImg___childLocale___id'
  | 'featuredImg___childLocale___parent___id'
  | 'featuredImg___childLocale___parent___children'
  | 'featuredImg___childLocale___children'
  | 'featuredImg___childLocale___children___id'
  | 'featuredImg___childLocale___children___children'
  | 'featuredImg___childLocale___internal___content'
  | 'featuredImg___childLocale___internal___contentDigest'
  | 'featuredImg___childLocale___internal___description'
  | 'featuredImg___childLocale___internal___fieldOwners'
  | 'featuredImg___childLocale___internal___ignoreType'
  | 'featuredImg___childLocale___internal___mediaType'
  | 'featuredImg___childLocale___internal___owner'
  | 'featuredImg___childLocale___internal___type'
  | 'featuredImg___childLocale___language'
  | 'featuredImg___childLocale___ns'
  | 'featuredImg___childLocale___data'
  | 'featuredImg___childLocale___fileAbsolutePath'
  | 'featuredImg___childrenHuJson'
  | 'featuredImg___childrenHuJson___id'
  | 'featuredImg___childrenHuJson___parent___id'
  | 'featuredImg___childrenHuJson___parent___children'
  | 'featuredImg___childrenHuJson___children'
  | 'featuredImg___childrenHuJson___children___id'
  | 'featuredImg___childrenHuJson___children___children'
  | 'featuredImg___childrenHuJson___internal___content'
  | 'featuredImg___childrenHuJson___internal___contentDigest'
  | 'featuredImg___childrenHuJson___internal___description'
  | 'featuredImg___childrenHuJson___internal___fieldOwners'
  | 'featuredImg___childrenHuJson___internal___ignoreType'
  | 'featuredImg___childrenHuJson___internal___mediaType'
  | 'featuredImg___childrenHuJson___internal___owner'
  | 'featuredImg___childrenHuJson___internal___type'
  | 'featuredImg___childrenHuJson___About___AboutMe'
  | 'featuredImg___childrenHuJson___About___Description'
  | 'featuredImg___childrenHuJson___About___PhotoDescription'
  | 'featuredImg___childrenHuJson___About___ViewCV'
  | 'featuredImg___childrenHuJson___Acknowledgements'
  | 'featuredImg___childrenHuJson___Banner___DexterSibirtsev'
  | 'featuredImg___childrenHuJson___Banner___Experience'
  | 'featuredImg___childrenHuJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childrenHuJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childrenHuJson___Blog___Blog'
  | 'featuredImg___childrenHuJson___Contact___Contact'
  | 'featuredImg___childrenHuJson___Contact___GetInTouch'
  | 'featuredImg___childrenHuJson___Contact___SendEmail'
  | 'featuredImg___childrenHuJson___Education___Description'
  | 'featuredImg___childrenHuJson___Education___Education'
  | 'featuredImg___childrenHuJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childrenHuJson___PageLinks___Acknowledgements'
  | 'featuredImg___childrenHuJson___PageLinks___Home'
  | 'featuredImg___childrenHuJson___SectionButtons___About'
  | 'featuredImg___childrenHuJson___SectionButtons___Blog'
  | 'featuredImg___childrenHuJson___SectionButtons___Contact'
  | 'featuredImg___childrenHuJson___SectionButtons___Experience'
  | 'featuredImg___childrenHuJson___SectionButtons___Skills'
  | 'featuredImg___childrenHuJson___Skills___Overview'
  | 'featuredImg___childrenHuJson___Skills___Skills'
  | 'featuredImg___childrenHuJson___Work___Work'
  | 'featuredImg___childHuJson___id'
  | 'featuredImg___childHuJson___parent___id'
  | 'featuredImg___childHuJson___parent___children'
  | 'featuredImg___childHuJson___children'
  | 'featuredImg___childHuJson___children___id'
  | 'featuredImg___childHuJson___children___children'
  | 'featuredImg___childHuJson___internal___content'
  | 'featuredImg___childHuJson___internal___contentDigest'
  | 'featuredImg___childHuJson___internal___description'
  | 'featuredImg___childHuJson___internal___fieldOwners'
  | 'featuredImg___childHuJson___internal___ignoreType'
  | 'featuredImg___childHuJson___internal___mediaType'
  | 'featuredImg___childHuJson___internal___owner'
  | 'featuredImg___childHuJson___internal___type'
  | 'featuredImg___childHuJson___About___AboutMe'
  | 'featuredImg___childHuJson___About___Description'
  | 'featuredImg___childHuJson___About___PhotoDescription'
  | 'featuredImg___childHuJson___About___ViewCV'
  | 'featuredImg___childHuJson___Acknowledgements'
  | 'featuredImg___childHuJson___Banner___DexterSibirtsev'
  | 'featuredImg___childHuJson___Banner___Experience'
  | 'featuredImg___childHuJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childHuJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childHuJson___Blog___Blog'
  | 'featuredImg___childHuJson___Contact___Contact'
  | 'featuredImg___childHuJson___Contact___GetInTouch'
  | 'featuredImg___childHuJson___Contact___SendEmail'
  | 'featuredImg___childHuJson___Education___Description'
  | 'featuredImg___childHuJson___Education___Education'
  | 'featuredImg___childHuJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childHuJson___PageLinks___Acknowledgements'
  | 'featuredImg___childHuJson___PageLinks___Home'
  | 'featuredImg___childHuJson___SectionButtons___About'
  | 'featuredImg___childHuJson___SectionButtons___Blog'
  | 'featuredImg___childHuJson___SectionButtons___Contact'
  | 'featuredImg___childHuJson___SectionButtons___Experience'
  | 'featuredImg___childHuJson___SectionButtons___Skills'
  | 'featuredImg___childHuJson___Skills___Overview'
  | 'featuredImg___childHuJson___Skills___Skills'
  | 'featuredImg___childHuJson___Work___Work'
  | 'featuredImg___childrenFrJson'
  | 'featuredImg___childrenFrJson___id'
  | 'featuredImg___childrenFrJson___parent___id'
  | 'featuredImg___childrenFrJson___parent___children'
  | 'featuredImg___childrenFrJson___children'
  | 'featuredImg___childrenFrJson___children___id'
  | 'featuredImg___childrenFrJson___children___children'
  | 'featuredImg___childrenFrJson___internal___content'
  | 'featuredImg___childrenFrJson___internal___contentDigest'
  | 'featuredImg___childrenFrJson___internal___description'
  | 'featuredImg___childrenFrJson___internal___fieldOwners'
  | 'featuredImg___childrenFrJson___internal___ignoreType'
  | 'featuredImg___childrenFrJson___internal___mediaType'
  | 'featuredImg___childrenFrJson___internal___owner'
  | 'featuredImg___childrenFrJson___internal___type'
  | 'featuredImg___childrenFrJson___About___AboutMe'
  | 'featuredImg___childrenFrJson___About___Description'
  | 'featuredImg___childrenFrJson___About___PhotoDescription'
  | 'featuredImg___childrenFrJson___About___ViewCV'
  | 'featuredImg___childrenFrJson___Acknowledgements'
  | 'featuredImg___childrenFrJson___Banner___DexterSibirtsev'
  | 'featuredImg___childrenFrJson___Banner___Experience'
  | 'featuredImg___childrenFrJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childrenFrJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childrenFrJson___Blog___Blog'
  | 'featuredImg___childrenFrJson___Contact___Contact'
  | 'featuredImg___childrenFrJson___Contact___GetInTouch'
  | 'featuredImg___childrenFrJson___Contact___SendEmail'
  | 'featuredImg___childrenFrJson___Education___Description'
  | 'featuredImg___childrenFrJson___Education___Education'
  | 'featuredImg___childrenFrJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childrenFrJson___PageLinks___Acknowledgements'
  | 'featuredImg___childrenFrJson___PageLinks___Home'
  | 'featuredImg___childrenFrJson___SectionButtons___About'
  | 'featuredImg___childrenFrJson___SectionButtons___Blog'
  | 'featuredImg___childrenFrJson___SectionButtons___Contact'
  | 'featuredImg___childrenFrJson___SectionButtons___Experience'
  | 'featuredImg___childrenFrJson___SectionButtons___Skills'
  | 'featuredImg___childrenFrJson___Skills___Overview'
  | 'featuredImg___childrenFrJson___Skills___Skills'
  | 'featuredImg___childrenFrJson___Work___Work'
  | 'featuredImg___childFrJson___id'
  | 'featuredImg___childFrJson___parent___id'
  | 'featuredImg___childFrJson___parent___children'
  | 'featuredImg___childFrJson___children'
  | 'featuredImg___childFrJson___children___id'
  | 'featuredImg___childFrJson___children___children'
  | 'featuredImg___childFrJson___internal___content'
  | 'featuredImg___childFrJson___internal___contentDigest'
  | 'featuredImg___childFrJson___internal___description'
  | 'featuredImg___childFrJson___internal___fieldOwners'
  | 'featuredImg___childFrJson___internal___ignoreType'
  | 'featuredImg___childFrJson___internal___mediaType'
  | 'featuredImg___childFrJson___internal___owner'
  | 'featuredImg___childFrJson___internal___type'
  | 'featuredImg___childFrJson___About___AboutMe'
  | 'featuredImg___childFrJson___About___Description'
  | 'featuredImg___childFrJson___About___PhotoDescription'
  | 'featuredImg___childFrJson___About___ViewCV'
  | 'featuredImg___childFrJson___Acknowledgements'
  | 'featuredImg___childFrJson___Banner___DexterSibirtsev'
  | 'featuredImg___childFrJson___Banner___Experience'
  | 'featuredImg___childFrJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childFrJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childFrJson___Blog___Blog'
  | 'featuredImg___childFrJson___Contact___Contact'
  | 'featuredImg___childFrJson___Contact___GetInTouch'
  | 'featuredImg___childFrJson___Contact___SendEmail'
  | 'featuredImg___childFrJson___Education___Description'
  | 'featuredImg___childFrJson___Education___Education'
  | 'featuredImg___childFrJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childFrJson___PageLinks___Acknowledgements'
  | 'featuredImg___childFrJson___PageLinks___Home'
  | 'featuredImg___childFrJson___SectionButtons___About'
  | 'featuredImg___childFrJson___SectionButtons___Blog'
  | 'featuredImg___childFrJson___SectionButtons___Contact'
  | 'featuredImg___childFrJson___SectionButtons___Experience'
  | 'featuredImg___childFrJson___SectionButtons___Skills'
  | 'featuredImg___childFrJson___Skills___Overview'
  | 'featuredImg___childFrJson___Skills___Skills'
  | 'featuredImg___childFrJson___Work___Work'
  | 'featuredImg___childrenFlagsJson'
  | 'featuredImg___childrenFlagsJson___id'
  | 'featuredImg___childrenFlagsJson___parent___id'
  | 'featuredImg___childrenFlagsJson___parent___children'
  | 'featuredImg___childrenFlagsJson___children'
  | 'featuredImg___childrenFlagsJson___children___id'
  | 'featuredImg___childrenFlagsJson___children___children'
  | 'featuredImg___childrenFlagsJson___internal___content'
  | 'featuredImg___childrenFlagsJson___internal___contentDigest'
  | 'featuredImg___childrenFlagsJson___internal___description'
  | 'featuredImg___childrenFlagsJson___internal___fieldOwners'
  | 'featuredImg___childrenFlagsJson___internal___ignoreType'
  | 'featuredImg___childrenFlagsJson___internal___mediaType'
  | 'featuredImg___childrenFlagsJson___internal___owner'
  | 'featuredImg___childrenFlagsJson___internal___type'
  | 'featuredImg___childrenFlagsJson___code'
  | 'featuredImg___childrenFlagsJson___name'
  | 'featuredImg___childrenFlagsJson___src___sourceInstanceName'
  | 'featuredImg___childrenFlagsJson___src___absolutePath'
  | 'featuredImg___childrenFlagsJson___src___relativePath'
  | 'featuredImg___childrenFlagsJson___src___extension'
  | 'featuredImg___childrenFlagsJson___src___size'
  | 'featuredImg___childrenFlagsJson___src___prettySize'
  | 'featuredImg___childrenFlagsJson___src___modifiedTime'
  | 'featuredImg___childrenFlagsJson___src___accessTime'
  | 'featuredImg___childrenFlagsJson___src___changeTime'
  | 'featuredImg___childrenFlagsJson___src___birthTime'
  | 'featuredImg___childrenFlagsJson___src___root'
  | 'featuredImg___childrenFlagsJson___src___dir'
  | 'featuredImg___childrenFlagsJson___src___base'
  | 'featuredImg___childrenFlagsJson___src___ext'
  | 'featuredImg___childrenFlagsJson___src___name'
  | 'featuredImg___childrenFlagsJson___src___relativeDirectory'
  | 'featuredImg___childrenFlagsJson___src___dev'
  | 'featuredImg___childrenFlagsJson___src___mode'
  | 'featuredImg___childrenFlagsJson___src___nlink'
  | 'featuredImg___childrenFlagsJson___src___uid'
  | 'featuredImg___childrenFlagsJson___src___gid'
  | 'featuredImg___childrenFlagsJson___src___rdev'
  | 'featuredImg___childrenFlagsJson___src___ino'
  | 'featuredImg___childrenFlagsJson___src___atimeMs'
  | 'featuredImg___childrenFlagsJson___src___mtimeMs'
  | 'featuredImg___childrenFlagsJson___src___ctimeMs'
  | 'featuredImg___childrenFlagsJson___src___atime'
  | 'featuredImg___childrenFlagsJson___src___mtime'
  | 'featuredImg___childrenFlagsJson___src___ctime'
  | 'featuredImg___childrenFlagsJson___src___birthtime'
  | 'featuredImg___childrenFlagsJson___src___birthtimeMs'
  | 'featuredImg___childrenFlagsJson___src___blksize'
  | 'featuredImg___childrenFlagsJson___src___blocks'
  | 'featuredImg___childrenFlagsJson___src___url'
  | 'featuredImg___childrenFlagsJson___src___publicURL'
  | 'featuredImg___childrenFlagsJson___src___childrenImageSharp'
  | 'featuredImg___childrenFlagsJson___src___childrenWorkJson'
  | 'featuredImg___childrenFlagsJson___src___childrenSkillsJson'
  | 'featuredImg___childrenFlagsJson___src___childrenSeJson'
  | 'featuredImg___childrenFlagsJson___src___childrenRuJson'
  | 'featuredImg___childrenFlagsJson___src___childrenLocale'
  | 'featuredImg___childrenFlagsJson___src___childrenHuJson'
  | 'featuredImg___childrenFlagsJson___src___childrenFrJson'
  | 'featuredImg___childrenFlagsJson___src___childrenFlagsJson'
  | 'featuredImg___childrenFlagsJson___src___childrenEtJson'
  | 'featuredImg___childrenFlagsJson___src___childrenEsJson'
  | 'featuredImg___childrenFlagsJson___src___childrenEnJson'
  | 'featuredImg___childrenFlagsJson___src___childrenEducationJson'
  | 'featuredImg___childrenFlagsJson___src___childrenDeJson'
  | 'featuredImg___childrenFlagsJson___src___id'
  | 'featuredImg___childrenFlagsJson___src___children'
  | 'featuredImg___childFlagsJson___id'
  | 'featuredImg___childFlagsJson___parent___id'
  | 'featuredImg___childFlagsJson___parent___children'
  | 'featuredImg___childFlagsJson___children'
  | 'featuredImg___childFlagsJson___children___id'
  | 'featuredImg___childFlagsJson___children___children'
  | 'featuredImg___childFlagsJson___internal___content'
  | 'featuredImg___childFlagsJson___internal___contentDigest'
  | 'featuredImg___childFlagsJson___internal___description'
  | 'featuredImg___childFlagsJson___internal___fieldOwners'
  | 'featuredImg___childFlagsJson___internal___ignoreType'
  | 'featuredImg___childFlagsJson___internal___mediaType'
  | 'featuredImg___childFlagsJson___internal___owner'
  | 'featuredImg___childFlagsJson___internal___type'
  | 'featuredImg___childFlagsJson___code'
  | 'featuredImg___childFlagsJson___name'
  | 'featuredImg___childFlagsJson___src___sourceInstanceName'
  | 'featuredImg___childFlagsJson___src___absolutePath'
  | 'featuredImg___childFlagsJson___src___relativePath'
  | 'featuredImg___childFlagsJson___src___extension'
  | 'featuredImg___childFlagsJson___src___size'
  | 'featuredImg___childFlagsJson___src___prettySize'
  | 'featuredImg___childFlagsJson___src___modifiedTime'
  | 'featuredImg___childFlagsJson___src___accessTime'
  | 'featuredImg___childFlagsJson___src___changeTime'
  | 'featuredImg___childFlagsJson___src___birthTime'
  | 'featuredImg___childFlagsJson___src___root'
  | 'featuredImg___childFlagsJson___src___dir'
  | 'featuredImg___childFlagsJson___src___base'
  | 'featuredImg___childFlagsJson___src___ext'
  | 'featuredImg___childFlagsJson___src___name'
  | 'featuredImg___childFlagsJson___src___relativeDirectory'
  | 'featuredImg___childFlagsJson___src___dev'
  | 'featuredImg___childFlagsJson___src___mode'
  | 'featuredImg___childFlagsJson___src___nlink'
  | 'featuredImg___childFlagsJson___src___uid'
  | 'featuredImg___childFlagsJson___src___gid'
  | 'featuredImg___childFlagsJson___src___rdev'
  | 'featuredImg___childFlagsJson___src___ino'
  | 'featuredImg___childFlagsJson___src___atimeMs'
  | 'featuredImg___childFlagsJson___src___mtimeMs'
  | 'featuredImg___childFlagsJson___src___ctimeMs'
  | 'featuredImg___childFlagsJson___src___atime'
  | 'featuredImg___childFlagsJson___src___mtime'
  | 'featuredImg___childFlagsJson___src___ctime'
  | 'featuredImg___childFlagsJson___src___birthtime'
  | 'featuredImg___childFlagsJson___src___birthtimeMs'
  | 'featuredImg___childFlagsJson___src___blksize'
  | 'featuredImg___childFlagsJson___src___blocks'
  | 'featuredImg___childFlagsJson___src___url'
  | 'featuredImg___childFlagsJson___src___publicURL'
  | 'featuredImg___childFlagsJson___src___childrenImageSharp'
  | 'featuredImg___childFlagsJson___src___childrenWorkJson'
  | 'featuredImg___childFlagsJson___src___childrenSkillsJson'
  | 'featuredImg___childFlagsJson___src___childrenSeJson'
  | 'featuredImg___childFlagsJson___src___childrenRuJson'
  | 'featuredImg___childFlagsJson___src___childrenLocale'
  | 'featuredImg___childFlagsJson___src___childrenHuJson'
  | 'featuredImg___childFlagsJson___src___childrenFrJson'
  | 'featuredImg___childFlagsJson___src___childrenFlagsJson'
  | 'featuredImg___childFlagsJson___src___childrenEtJson'
  | 'featuredImg___childFlagsJson___src___childrenEsJson'
  | 'featuredImg___childFlagsJson___src___childrenEnJson'
  | 'featuredImg___childFlagsJson___src___childrenEducationJson'
  | 'featuredImg___childFlagsJson___src___childrenDeJson'
  | 'featuredImg___childFlagsJson___src___id'
  | 'featuredImg___childFlagsJson___src___children'
  | 'featuredImg___childrenEtJson'
  | 'featuredImg___childrenEtJson___id'
  | 'featuredImg___childrenEtJson___parent___id'
  | 'featuredImg___childrenEtJson___parent___children'
  | 'featuredImg___childrenEtJson___children'
  | 'featuredImg___childrenEtJson___children___id'
  | 'featuredImg___childrenEtJson___children___children'
  | 'featuredImg___childrenEtJson___internal___content'
  | 'featuredImg___childrenEtJson___internal___contentDigest'
  | 'featuredImg___childrenEtJson___internal___description'
  | 'featuredImg___childrenEtJson___internal___fieldOwners'
  | 'featuredImg___childrenEtJson___internal___ignoreType'
  | 'featuredImg___childrenEtJson___internal___mediaType'
  | 'featuredImg___childrenEtJson___internal___owner'
  | 'featuredImg___childrenEtJson___internal___type'
  | 'featuredImg___childrenEtJson___About___AboutMe'
  | 'featuredImg___childrenEtJson___About___Description'
  | 'featuredImg___childrenEtJson___About___PhotoDescription'
  | 'featuredImg___childrenEtJson___About___ViewCV'
  | 'featuredImg___childrenEtJson___Acknowledgements'
  | 'featuredImg___childrenEtJson___Banner___DexterSibirtsev'
  | 'featuredImg___childrenEtJson___Banner___Experience'
  | 'featuredImg___childrenEtJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childrenEtJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childrenEtJson___Blog___Blog'
  | 'featuredImg___childrenEtJson___Contact___Contact'
  | 'featuredImg___childrenEtJson___Contact___GetInTouch'
  | 'featuredImg___childrenEtJson___Contact___SendEmail'
  | 'featuredImg___childrenEtJson___Education___Description'
  | 'featuredImg___childrenEtJson___Education___Education'
  | 'featuredImg___childrenEtJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childrenEtJson___PageLinks___Acknowledgements'
  | 'featuredImg___childrenEtJson___PageLinks___Home'
  | 'featuredImg___childrenEtJson___SectionButtons___About'
  | 'featuredImg___childrenEtJson___SectionButtons___Blog'
  | 'featuredImg___childrenEtJson___SectionButtons___Contact'
  | 'featuredImg___childrenEtJson___SectionButtons___Experience'
  | 'featuredImg___childrenEtJson___SectionButtons___Skills'
  | 'featuredImg___childrenEtJson___Skills___Overview'
  | 'featuredImg___childrenEtJson___Skills___Skills'
  | 'featuredImg___childrenEtJson___Work___Work'
  | 'featuredImg___childEtJson___id'
  | 'featuredImg___childEtJson___parent___id'
  | 'featuredImg___childEtJson___parent___children'
  | 'featuredImg___childEtJson___children'
  | 'featuredImg___childEtJson___children___id'
  | 'featuredImg___childEtJson___children___children'
  | 'featuredImg___childEtJson___internal___content'
  | 'featuredImg___childEtJson___internal___contentDigest'
  | 'featuredImg___childEtJson___internal___description'
  | 'featuredImg___childEtJson___internal___fieldOwners'
  | 'featuredImg___childEtJson___internal___ignoreType'
  | 'featuredImg___childEtJson___internal___mediaType'
  | 'featuredImg___childEtJson___internal___owner'
  | 'featuredImg___childEtJson___internal___type'
  | 'featuredImg___childEtJson___About___AboutMe'
  | 'featuredImg___childEtJson___About___Description'
  | 'featuredImg___childEtJson___About___PhotoDescription'
  | 'featuredImg___childEtJson___About___ViewCV'
  | 'featuredImg___childEtJson___Acknowledgements'
  | 'featuredImg___childEtJson___Banner___DexterSibirtsev'
  | 'featuredImg___childEtJson___Banner___Experience'
  | 'featuredImg___childEtJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childEtJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childEtJson___Blog___Blog'
  | 'featuredImg___childEtJson___Contact___Contact'
  | 'featuredImg___childEtJson___Contact___GetInTouch'
  | 'featuredImg___childEtJson___Contact___SendEmail'
  | 'featuredImg___childEtJson___Education___Description'
  | 'featuredImg___childEtJson___Education___Education'
  | 'featuredImg___childEtJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childEtJson___PageLinks___Acknowledgements'
  | 'featuredImg___childEtJson___PageLinks___Home'
  | 'featuredImg___childEtJson___SectionButtons___About'
  | 'featuredImg___childEtJson___SectionButtons___Blog'
  | 'featuredImg___childEtJson___SectionButtons___Contact'
  | 'featuredImg___childEtJson___SectionButtons___Experience'
  | 'featuredImg___childEtJson___SectionButtons___Skills'
  | 'featuredImg___childEtJson___Skills___Overview'
  | 'featuredImg___childEtJson___Skills___Skills'
  | 'featuredImg___childEtJson___Work___Work'
  | 'featuredImg___childrenEsJson'
  | 'featuredImg___childrenEsJson___id'
  | 'featuredImg___childrenEsJson___parent___id'
  | 'featuredImg___childrenEsJson___parent___children'
  | 'featuredImg___childrenEsJson___children'
  | 'featuredImg___childrenEsJson___children___id'
  | 'featuredImg___childrenEsJson___children___children'
  | 'featuredImg___childrenEsJson___internal___content'
  | 'featuredImg___childrenEsJson___internal___contentDigest'
  | 'featuredImg___childrenEsJson___internal___description'
  | 'featuredImg___childrenEsJson___internal___fieldOwners'
  | 'featuredImg___childrenEsJson___internal___ignoreType'
  | 'featuredImg___childrenEsJson___internal___mediaType'
  | 'featuredImg___childrenEsJson___internal___owner'
  | 'featuredImg___childrenEsJson___internal___type'
  | 'featuredImg___childrenEsJson___About___AboutMe'
  | 'featuredImg___childrenEsJson___About___Description'
  | 'featuredImg___childrenEsJson___About___PhotoDescription'
  | 'featuredImg___childrenEsJson___About___ViewCV'
  | 'featuredImg___childrenEsJson___Acknowledgements'
  | 'featuredImg___childrenEsJson___Banner___DexterSibirtsev'
  | 'featuredImg___childrenEsJson___Banner___Experience'
  | 'featuredImg___childrenEsJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childrenEsJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childrenEsJson___Blog___Blog'
  | 'featuredImg___childrenEsJson___Contact___Contact'
  | 'featuredImg___childrenEsJson___Contact___GetInTouch'
  | 'featuredImg___childrenEsJson___Contact___SendEmail'
  | 'featuredImg___childrenEsJson___Education___Description'
  | 'featuredImg___childrenEsJson___Education___Education'
  | 'featuredImg___childrenEsJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childrenEsJson___PageLinks___Acknowledgements'
  | 'featuredImg___childrenEsJson___PageLinks___Home'
  | 'featuredImg___childrenEsJson___SectionButtons___About'
  | 'featuredImg___childrenEsJson___SectionButtons___Blog'
  | 'featuredImg___childrenEsJson___SectionButtons___Contact'
  | 'featuredImg___childrenEsJson___SectionButtons___Experience'
  | 'featuredImg___childrenEsJson___SectionButtons___Skills'
  | 'featuredImg___childrenEsJson___Skills___Overview'
  | 'featuredImg___childrenEsJson___Skills___Skills'
  | 'featuredImg___childrenEsJson___Work___Work'
  | 'featuredImg___childEsJson___id'
  | 'featuredImg___childEsJson___parent___id'
  | 'featuredImg___childEsJson___parent___children'
  | 'featuredImg___childEsJson___children'
  | 'featuredImg___childEsJson___children___id'
  | 'featuredImg___childEsJson___children___children'
  | 'featuredImg___childEsJson___internal___content'
  | 'featuredImg___childEsJson___internal___contentDigest'
  | 'featuredImg___childEsJson___internal___description'
  | 'featuredImg___childEsJson___internal___fieldOwners'
  | 'featuredImg___childEsJson___internal___ignoreType'
  | 'featuredImg___childEsJson___internal___mediaType'
  | 'featuredImg___childEsJson___internal___owner'
  | 'featuredImg___childEsJson___internal___type'
  | 'featuredImg___childEsJson___About___AboutMe'
  | 'featuredImg___childEsJson___About___Description'
  | 'featuredImg___childEsJson___About___PhotoDescription'
  | 'featuredImg___childEsJson___About___ViewCV'
  | 'featuredImg___childEsJson___Acknowledgements'
  | 'featuredImg___childEsJson___Banner___DexterSibirtsev'
  | 'featuredImg___childEsJson___Banner___Experience'
  | 'featuredImg___childEsJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childEsJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childEsJson___Blog___Blog'
  | 'featuredImg___childEsJson___Contact___Contact'
  | 'featuredImg___childEsJson___Contact___GetInTouch'
  | 'featuredImg___childEsJson___Contact___SendEmail'
  | 'featuredImg___childEsJson___Education___Description'
  | 'featuredImg___childEsJson___Education___Education'
  | 'featuredImg___childEsJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childEsJson___PageLinks___Acknowledgements'
  | 'featuredImg___childEsJson___PageLinks___Home'
  | 'featuredImg___childEsJson___SectionButtons___About'
  | 'featuredImg___childEsJson___SectionButtons___Blog'
  | 'featuredImg___childEsJson___SectionButtons___Contact'
  | 'featuredImg___childEsJson___SectionButtons___Experience'
  | 'featuredImg___childEsJson___SectionButtons___Skills'
  | 'featuredImg___childEsJson___Skills___Overview'
  | 'featuredImg___childEsJson___Skills___Skills'
  | 'featuredImg___childEsJson___Work___Work'
  | 'featuredImg___childrenEnJson'
  | 'featuredImg___childrenEnJson___id'
  | 'featuredImg___childrenEnJson___parent___id'
  | 'featuredImg___childrenEnJson___parent___children'
  | 'featuredImg___childrenEnJson___children'
  | 'featuredImg___childrenEnJson___children___id'
  | 'featuredImg___childrenEnJson___children___children'
  | 'featuredImg___childrenEnJson___internal___content'
  | 'featuredImg___childrenEnJson___internal___contentDigest'
  | 'featuredImg___childrenEnJson___internal___description'
  | 'featuredImg___childrenEnJson___internal___fieldOwners'
  | 'featuredImg___childrenEnJson___internal___ignoreType'
  | 'featuredImg___childrenEnJson___internal___mediaType'
  | 'featuredImg___childrenEnJson___internal___owner'
  | 'featuredImg___childrenEnJson___internal___type'
  | 'featuredImg___childrenEnJson___About___AboutMe'
  | 'featuredImg___childrenEnJson___About___Description'
  | 'featuredImg___childrenEnJson___About___PhotoDescription'
  | 'featuredImg___childrenEnJson___About___ViewCV'
  | 'featuredImg___childrenEnJson___Acknowledgements'
  | 'featuredImg___childrenEnJson___Banner___DexterSibirtsev'
  | 'featuredImg___childrenEnJson___Banner___Experience'
  | 'featuredImg___childrenEnJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childrenEnJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childrenEnJson___Blog___Blog'
  | 'featuredImg___childrenEnJson___Contact___Contact'
  | 'featuredImg___childrenEnJson___Contact___GetInTouch'
  | 'featuredImg___childrenEnJson___Contact___SendEmail'
  | 'featuredImg___childrenEnJson___Education___Description'
  | 'featuredImg___childrenEnJson___Education___Education'
  | 'featuredImg___childrenEnJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childrenEnJson___PageLinks___Acknowledgements'
  | 'featuredImg___childrenEnJson___PageLinks___Home'
  | 'featuredImg___childrenEnJson___SectionButtons___About'
  | 'featuredImg___childrenEnJson___SectionButtons___Blog'
  | 'featuredImg___childrenEnJson___SectionButtons___Contact'
  | 'featuredImg___childrenEnJson___SectionButtons___Experience'
  | 'featuredImg___childrenEnJson___SectionButtons___Skills'
  | 'featuredImg___childrenEnJson___Skills___Overview'
  | 'featuredImg___childrenEnJson___Skills___Skills'
  | 'featuredImg___childrenEnJson___Work___Work'
  | 'featuredImg___childEnJson___id'
  | 'featuredImg___childEnJson___parent___id'
  | 'featuredImg___childEnJson___parent___children'
  | 'featuredImg___childEnJson___children'
  | 'featuredImg___childEnJson___children___id'
  | 'featuredImg___childEnJson___children___children'
  | 'featuredImg___childEnJson___internal___content'
  | 'featuredImg___childEnJson___internal___contentDigest'
  | 'featuredImg___childEnJson___internal___description'
  | 'featuredImg___childEnJson___internal___fieldOwners'
  | 'featuredImg___childEnJson___internal___ignoreType'
  | 'featuredImg___childEnJson___internal___mediaType'
  | 'featuredImg___childEnJson___internal___owner'
  | 'featuredImg___childEnJson___internal___type'
  | 'featuredImg___childEnJson___About___AboutMe'
  | 'featuredImg___childEnJson___About___Description'
  | 'featuredImg___childEnJson___About___PhotoDescription'
  | 'featuredImg___childEnJson___About___ViewCV'
  | 'featuredImg___childEnJson___Acknowledgements'
  | 'featuredImg___childEnJson___Banner___DexterSibirtsev'
  | 'featuredImg___childEnJson___Banner___Experience'
  | 'featuredImg___childEnJson___Banner___HelloIAmAProgrammer'
  | 'featuredImg___childEnJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childEnJson___Blog___Blog'
  | 'featuredImg___childEnJson___Contact___Contact'
  | 'featuredImg___childEnJson___Contact___GetInTouch'
  | 'featuredImg___childEnJson___Contact___SendEmail'
  | 'featuredImg___childEnJson___Education___Description'
  | 'featuredImg___childEnJson___Education___Education'
  | 'featuredImg___childEnJson___Experience___TranslationsUnderConstruction'
  | 'featuredImg___childEnJson___PageLinks___Acknowledgements'
  | 'featuredImg___childEnJson___PageLinks___Home'
  | 'featuredImg___childEnJson___SectionButtons___About'
  | 'featuredImg___childEnJson___SectionButtons___Blog'
  | 'featuredImg___childEnJson___SectionButtons___Contact'
  | 'featuredImg___childEnJson___SectionButtons___Experience'
  | 'featuredImg___childEnJson___SectionButtons___Skills'
  | 'featuredImg___childEnJson___Skills___Overview'
  | 'featuredImg___childEnJson___Skills___Skills'
  | 'featuredImg___childEnJson___Work___Work'
  | 'featuredImg___childrenEducationJson'
  | 'featuredImg___childrenEducationJson___id'
  | 'featuredImg___childrenEducationJson___parent___id'
  | 'featuredImg___childrenEducationJson___parent___children'
  | 'featuredImg___childrenEducationJson___children'
  | 'featuredImg___childrenEducationJson___children___id'
  | 'featuredImg___childrenEducationJson___children___children'
  | 'featuredImg___childrenEducationJson___internal___content'
  | 'featuredImg___childrenEducationJson___internal___contentDigest'
  | 'featuredImg___childrenEducationJson___internal___description'
  | 'featuredImg___childrenEducationJson___internal___fieldOwners'
  | 'featuredImg___childrenEducationJson___internal___ignoreType'
  | 'featuredImg___childrenEducationJson___internal___mediaType'
  | 'featuredImg___childrenEducationJson___internal___owner'
  | 'featuredImg___childrenEducationJson___internal___type'
  | 'featuredImg___childrenEducationJson___location'
  | 'featuredImg___childrenEducationJson___locationFlag___sourceInstanceName'
  | 'featuredImg___childrenEducationJson___locationFlag___absolutePath'
  | 'featuredImg___childrenEducationJson___locationFlag___relativePath'
  | 'featuredImg___childrenEducationJson___locationFlag___extension'
  | 'featuredImg___childrenEducationJson___locationFlag___size'
  | 'featuredImg___childrenEducationJson___locationFlag___prettySize'
  | 'featuredImg___childrenEducationJson___locationFlag___modifiedTime'
  | 'featuredImg___childrenEducationJson___locationFlag___accessTime'
  | 'featuredImg___childrenEducationJson___locationFlag___changeTime'
  | 'featuredImg___childrenEducationJson___locationFlag___birthTime'
  | 'featuredImg___childrenEducationJson___locationFlag___root'
  | 'featuredImg___childrenEducationJson___locationFlag___dir'
  | 'featuredImg___childrenEducationJson___locationFlag___base'
  | 'featuredImg___childrenEducationJson___locationFlag___ext'
  | 'featuredImg___childrenEducationJson___locationFlag___name'
  | 'featuredImg___childrenEducationJson___locationFlag___relativeDirectory'
  | 'featuredImg___childrenEducationJson___locationFlag___dev'
  | 'featuredImg___childrenEducationJson___locationFlag___mode'
  | 'featuredImg___childrenEducationJson___locationFlag___nlink'
  | 'featuredImg___childrenEducationJson___locationFlag___uid'
  | 'featuredImg___childrenEducationJson___locationFlag___gid'
  | 'featuredImg___childrenEducationJson___locationFlag___rdev'
  | 'featuredImg___childrenEducationJson___locationFlag___ino'
  | 'featuredImg___childrenEducationJson___locationFlag___atimeMs'
  | 'featuredImg___childrenEducationJson___locationFlag___mtimeMs'
  | 'featuredImg___childrenEducationJson___locationFlag___ctimeMs'
  | 'featuredImg___childrenEducationJson___locationFlag___atime'
  | 'featuredImg___childrenEducationJson___locationFlag___mtime'
  | 'featuredImg___childrenEducationJson___locationFlag___ctime'
  | 'featuredImg___childrenEducationJson___locationFlag___birthtime'
  | 'featuredImg___childrenEducationJson___locationFlag___birthtimeMs'
  | 'featuredImg___childrenEducationJson___locationFlag___blksize'
  | 'featuredImg___childrenEducationJson___locationFlag___blocks'
  | 'featuredImg___childrenEducationJson___locationFlag___url'
  | 'featuredImg___childrenEducationJson___locationFlag___publicURL'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenImageSharp'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenWorkJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenSkillsJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenSeJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenRuJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenLocale'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenHuJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenFrJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenFlagsJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenEtJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenEsJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenEnJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenEducationJson'
  | 'featuredImg___childrenEducationJson___locationFlag___childrenDeJson'
  | 'featuredImg___childrenEducationJson___locationFlag___id'
  | 'featuredImg___childrenEducationJson___locationFlag___children'
  | 'featuredImg___childrenEducationJson___title'
  | 'featuredImg___childrenEducationJson___logo___sourceInstanceName'
  | 'featuredImg___childrenEducationJson___logo___absolutePath'
  | 'featuredImg___childrenEducationJson___logo___relativePath'
  | 'featuredImg___childrenEducationJson___logo___extension'
  | 'featuredImg___childrenEducationJson___logo___size'
  | 'featuredImg___childrenEducationJson___logo___prettySize'
  | 'featuredImg___childrenEducationJson___logo___modifiedTime'
  | 'featuredImg___childrenEducationJson___logo___accessTime'
  | 'featuredImg___childrenEducationJson___logo___changeTime'
  | 'featuredImg___childrenEducationJson___logo___birthTime'
  | 'featuredImg___childrenEducationJson___logo___root'
  | 'featuredImg___childrenEducationJson___logo___dir'
  | 'featuredImg___childrenEducationJson___logo___base'
  | 'featuredImg___childrenEducationJson___logo___ext'
  | 'featuredImg___childrenEducationJson___logo___name'
  | 'featuredImg___childrenEducationJson___logo___relativeDirectory'
  | 'featuredImg___childrenEducationJson___logo___dev'
  | 'featuredImg___childrenEducationJson___logo___mode'
  | 'featuredImg___childrenEducationJson___logo___nlink'
  | 'featuredImg___childrenEducationJson___logo___uid'
  | 'featuredImg___childrenEducationJson___logo___gid'
  | 'featuredImg___childrenEducationJson___logo___rdev'
  | 'featuredImg___childrenEducationJson___logo___ino'
  | 'featuredImg___childrenEducationJson___logo___atimeMs'
  | 'featuredImg___childrenEducationJson___logo___mtimeMs'
  | 'featuredImg___childrenEducationJson___logo___ctimeMs'
  | 'featuredImg___childrenEducationJson___logo___atime'
  | 'featuredImg___childrenEducationJson___logo___mtime'
  | 'featuredImg___childrenEducationJson___logo___ctime'
  | 'featuredImg___childrenEducationJson___logo___birthtime'
  | 'featuredImg___childrenEducationJson___logo___birthtimeMs'
  | 'featuredImg___childrenEducationJson___logo___blksize'
  | 'featuredImg___childrenEducationJson___logo___blocks'
  | 'featuredImg___childrenEducationJson___logo___url'
  | 'featuredImg___childrenEducationJson___logo___publicURL'
  | 'featuredImg___childrenEducationJson___logo___childrenImageSharp'
  | 'featuredImg___childrenEducationJson___logo___childrenWorkJson'
  | 'featuredImg___childrenEducationJson___logo___childrenSkillsJson'
  | 'featuredImg___childrenEducationJson___logo___childrenSeJson'
  | 'featuredImg___childrenEducationJson___logo___childrenRuJson'
  | 'featuredImg___childrenEducationJson___logo___childrenLocale'
  | 'featuredImg___childrenEducationJson___logo___childrenHuJson'
  | 'featuredImg___childrenEducationJson___logo___childrenFrJson'
  | 'featuredImg___childrenEducationJson___logo___childrenFlagsJson'
  | 'featuredImg___childrenEducationJson___logo___childrenEtJson'
  | 'featuredImg___childrenEducationJson___logo___childrenEsJson'
  | 'featuredImg___childrenEducationJson___logo___childrenEnJson'
  | 'featuredImg___childrenEducationJson___logo___childrenEducationJson'
  | 'featuredImg___childrenEducationJson___logo___childrenDeJson'
  | 'featuredImg___childrenEducationJson___logo___id'
  | 'featuredImg___childrenEducationJson___logo___children'
  | 'featuredImg___childrenEducationJson___name'
  | 'featuredImg___childrenEducationJson___dates'
  | 'featuredImg___childrenEducationJson___description'
  | 'featuredImg___childEducationJson___id'
  | 'featuredImg___childEducationJson___parent___id'
  | 'featuredImg___childEducationJson___parent___children'
  | 'featuredImg___childEducationJson___children'
  | 'featuredImg___childEducationJson___children___id'
  | 'featuredImg___childEducationJson___children___children'
  | 'featuredImg___childEducationJson___internal___content'
  | 'featuredImg___childEducationJson___internal___contentDigest'
  | 'featuredImg___childEducationJson___internal___description'
  | 'featuredImg___childEducationJson___internal___fieldOwners'
  | 'featuredImg___childEducationJson___internal___ignoreType'
  | 'featuredImg___childEducationJson___internal___mediaType'
  | 'featuredImg___childEducationJson___internal___owner'
  | 'featuredImg___childEducationJson___internal___type'
  | 'featuredImg___childEducationJson___location'
  | 'featuredImg___childEducationJson___locationFlag___sourceInstanceName'
  | 'featuredImg___childEducationJson___locationFlag___absolutePath'
  | 'featuredImg___childEducationJson___locationFlag___relativePath'
  | 'featuredImg___childEducationJson___locationFlag___extension'
  | 'featuredImg___childEducationJson___locationFlag___size'
  | 'featuredImg___childEducationJson___locationFlag___prettySize'
  | 'featuredImg___childEducationJson___locationFlag___modifiedTime'
  | 'featuredImg___childEducationJson___locationFlag___accessTime'
  | 'featuredImg___childEducationJson___locationFlag___changeTime'
  | 'featuredImg___childEducationJson___locationFlag___birthTime'
  | 'featuredImg___childEducationJson___locationFlag___root'
  | 'featuredImg___childEducationJson___locationFlag___dir'
  | 'featuredImg___childEducationJson___locationFlag___base'
  | 'featuredImg___childEducationJson___locationFlag___ext'
  | 'featuredImg___childEducationJson___locationFlag___name'
  | 'featuredImg___childEducationJson___locationFlag___relativeDirectory'
  | 'featuredImg___childEducationJson___locationFlag___dev'
  | 'featuredImg___childEducationJson___locationFlag___mode'
  | 'featuredImg___childEducationJson___locationFlag___nlink'
  | 'featuredImg___childEducationJson___locationFlag___uid'
  | 'featuredImg___childEducationJson___locationFlag___gid'
  | 'featuredImg___childEducationJson___locationFlag___rdev'
  | 'featuredImg___childEducationJson___locationFlag___ino'
  | 'featuredImg___childEducationJson___locationFlag___atimeMs'
  | 'featuredImg___childEducationJson___locationFlag___mtimeMs'
  | 'featuredImg___childEducationJson___locationFlag___ctimeMs'
  | 'featuredImg___childEducationJson___locationFlag___atime'
  | 'featuredImg___childEducationJson___locationFlag___mtime'
  | 'featuredImg___childEducationJson___locationFlag___ctime'
  | 'featuredImg___childEducationJson___locationFlag___birthtime'
  | 'featuredImg___childEducationJson___locationFlag___birthtimeMs'
  | 'featuredImg___childEducationJson___locationFlag___blksize'
  | 'featuredImg___childEducationJson___locationFlag___blocks'
  | 'featuredImg___childEducationJson___locationFlag___url'
  | 'featuredImg___childEducationJson___locationFlag___publicURL'
  | 'featuredImg___childEducationJson___locationFlag___childrenImageSharp'
  | 'featuredImg___childEducationJson___locationFlag___childrenWorkJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenSkillsJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenSeJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenRuJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenLocale'
  | 'featuredImg___childEducationJson___locationFlag___childrenHuJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenFrJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenFlagsJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenEtJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenEsJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenEnJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenEducationJson'
  | 'featuredImg___childEducationJson___locationFlag___childrenDeJson'
  | 'featuredImg___childEducationJson___locationFlag___id'
  | 'featuredImg___childEducationJson___locationFlag___children'
  | 'featuredImg___childEducationJson___title'
  | 'featuredImg___childEducationJson___logo___sourceInstanceName'
  | 'featuredImg___childEducationJson___logo___absolutePath'
  | 'featuredImg___childEducationJson___logo___relativePath'
  | 'featuredImg___childEducationJson___logo___extension'
  | 'featuredImg___childEducationJson___logo___size'
  | 'featuredImg___childEducationJson___logo___prettySize'
  | 'featuredImg___childEducationJson___logo___modifiedTime'
  | 'featuredImg___childEducationJson___logo___accessTime'
  | 'featuredImg___childEducationJson___logo___changeTime'
  | 'featuredImg___childEducationJson___logo___birthTime'
  | 'featuredImg___childEducationJson___logo___root'
  | 'featuredImg___childEducationJson___logo___dir'
  | 'featuredImg___childEducationJson___logo___base'
  | 'featuredImg___childEducationJson___logo___ext'
  | 'featuredImg___childEducationJson___logo___name'
  | 'featuredImg___childEducationJson___logo___relativeDirectory'
  | 'featuredImg___childEducationJson___logo___dev'
  | 'featuredImg___childEducationJson___logo___mode'
  | 'featuredImg___childEducationJson___logo___nlink'
  | 'featuredImg___childEducationJson___logo___uid'
  | 'featuredImg___childEducationJson___logo___gid'
  | 'featuredImg___childEducationJson___logo___rdev'
  | 'featuredImg___childEducationJson___logo___ino'
  | 'featuredImg___childEducationJson___logo___atimeMs'
  | 'featuredImg___childEducationJson___logo___mtimeMs'
  | 'featuredImg___childEducationJson___logo___ctimeMs'
  | 'featuredImg___childEducationJson___logo___atime'
  | 'featuredImg___childEducationJson___logo___mtime'
  | 'featuredImg___childEducationJson___logo___ctime'
  | 'featuredImg___childEducationJson___logo___birthtime'
  | 'featuredImg___childEducationJson___logo___birthtimeMs'
  | 'featuredImg___childEducationJson___logo___blksize'
  | 'featuredImg___childEducationJson___logo___blocks'
  | 'featuredImg___childEducationJson___logo___url'
  | 'featuredImg___childEducationJson___logo___publicURL'
  | 'featuredImg___childEducationJson___logo___childrenImageSharp'
  | 'featuredImg___childEducationJson___logo___childrenWorkJson'
  | 'featuredImg___childEducationJson___logo___childrenSkillsJson'
  | 'featuredImg___childEducationJson___logo___childrenSeJson'
  | 'featuredImg___childEducationJson___logo___childrenRuJson'
  | 'featuredImg___childEducationJson___logo___childrenLocale'
  | 'featuredImg___childEducationJson___logo___childrenHuJson'
  | 'featuredImg___childEducationJson___logo___childrenFrJson'
  | 'featuredImg___childEducationJson___logo___childrenFlagsJson'
  | 'featuredImg___childEducationJson___logo___childrenEtJson'
  | 'featuredImg___childEducationJson___logo___childrenEsJson'
  | 'featuredImg___childEducationJson___logo___childrenEnJson'
  | 'featuredImg___childEducationJson___logo___childrenEducationJson'
  | 'featuredImg___childEducationJson___logo___childrenDeJson'
  | 'featuredImg___childEducationJson___logo___id'
  | 'featuredImg___childEducationJson___logo___children'
  | 'featuredImg___childEducationJson___name'
  | 'featuredImg___childEducationJson___dates'
  | 'featuredImg___childEducationJson___description'
  | 'featuredImg___childrenDeJson'
  | 'featuredImg___childrenDeJson___id'
  | 'featuredImg___childrenDeJson___parent___id'
  | 'featuredImg___childrenDeJson___parent___children'
  | 'featuredImg___childrenDeJson___children'
  | 'featuredImg___childrenDeJson___children___id'
  | 'featuredImg___childrenDeJson___children___children'
  | 'featuredImg___childrenDeJson___internal___content'
  | 'featuredImg___childrenDeJson___internal___contentDigest'
  | 'featuredImg___childrenDeJson___internal___description'
  | 'featuredImg___childrenDeJson___internal___fieldOwners'
  | 'featuredImg___childrenDeJson___internal___ignoreType'
  | 'featuredImg___childrenDeJson___internal___mediaType'
  | 'featuredImg___childrenDeJson___internal___owner'
  | 'featuredImg___childrenDeJson___internal___type'
  | 'featuredImg___childrenDeJson___Banner___SoftwareDeveloper'
  | 'featuredImg___childDeJson___id'
  | 'featuredImg___childDeJson___parent___id'
  | 'featuredImg___childDeJson___parent___children'
  | 'featuredImg___childDeJson___children'
  | 'featuredImg___childDeJson___children___id'
  | 'featuredImg___childDeJson___children___children'
  | 'featuredImg___childDeJson___internal___content'
  | 'featuredImg___childDeJson___internal___contentDigest'
  | 'featuredImg___childDeJson___internal___description'
  | 'featuredImg___childDeJson___internal___fieldOwners'
  | 'featuredImg___childDeJson___internal___ignoreType'
  | 'featuredImg___childDeJson___internal___mediaType'
  | 'featuredImg___childDeJson___internal___owner'
  | 'featuredImg___childDeJson___internal___type'
  | 'featuredImg___childDeJson___Banner___SoftwareDeveloper'
  | 'featuredImg___id'
  | 'featuredImg___parent___id'
  | 'featuredImg___parent___parent___id'
  | 'featuredImg___parent___parent___children'
  | 'featuredImg___parent___children'
  | 'featuredImg___parent___children___id'
  | 'featuredImg___parent___children___children'
  | 'featuredImg___parent___internal___content'
  | 'featuredImg___parent___internal___contentDigest'
  | 'featuredImg___parent___internal___description'
  | 'featuredImg___parent___internal___fieldOwners'
  | 'featuredImg___parent___internal___ignoreType'
  | 'featuredImg___parent___internal___mediaType'
  | 'featuredImg___parent___internal___owner'
  | 'featuredImg___parent___internal___type'
  | 'featuredImg___children'
  | 'featuredImg___children___id'
  | 'featuredImg___children___parent___id'
  | 'featuredImg___children___parent___children'
  | 'featuredImg___children___children'
  | 'featuredImg___children___children___id'
  | 'featuredImg___children___children___children'
  | 'featuredImg___children___internal___content'
  | 'featuredImg___children___internal___contentDigest'
  | 'featuredImg___children___internal___description'
  | 'featuredImg___children___internal___fieldOwners'
  | 'featuredImg___children___internal___ignoreType'
  | 'featuredImg___children___internal___mediaType'
  | 'featuredImg___children___internal___owner'
  | 'featuredImg___children___internal___type'
  | 'featuredImg___internal___content'
  | 'featuredImg___internal___contentDigest'
  | 'featuredImg___internal___description'
  | 'featuredImg___internal___fieldOwners'
  | 'featuredImg___internal___ignoreType'
  | 'featuredImg___internal___mediaType'
  | 'featuredImg___internal___owner'
  | 'featuredImg___internal___type'
  | 'fields___featuredImg'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DevArticlesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DevArticlesEdge>;
  nodes: Array<DevArticles>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DevArticlesGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DevArticlesGroupConnectionDistinctArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesGroupConnectionMaxArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesGroupConnectionMinArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesGroupConnectionSumArgs = {
  field: DevArticlesFieldsEnum;
};


export type DevArticlesGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DevArticlesFieldsEnum;
};

export type DevArticlesFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  article?: InputMaybe<ArticleFilterInput>;
  featuredImg?: InputMaybe<FileFilterInput>;
  fields?: InputMaybe<DevArticlesFieldsFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DevArticlesSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DevArticlesFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WorkJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WorkJsonEdge>;
  nodes: Array<WorkJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WorkJsonGroupConnection>;
};


export type WorkJsonConnectionDistinctArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonConnectionMaxArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonConnectionMinArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonConnectionSumArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WorkJsonFieldsEnum;
};

export type WorkJsonEdge = {
  next?: Maybe<WorkJson>;
  node: WorkJson;
  previous?: Maybe<WorkJson>;
};

export type WorkJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'location'
  | 'locationFlag___sourceInstanceName'
  | 'locationFlag___absolutePath'
  | 'locationFlag___relativePath'
  | 'locationFlag___extension'
  | 'locationFlag___size'
  | 'locationFlag___prettySize'
  | 'locationFlag___modifiedTime'
  | 'locationFlag___accessTime'
  | 'locationFlag___changeTime'
  | 'locationFlag___birthTime'
  | 'locationFlag___root'
  | 'locationFlag___dir'
  | 'locationFlag___base'
  | 'locationFlag___ext'
  | 'locationFlag___name'
  | 'locationFlag___relativeDirectory'
  | 'locationFlag___dev'
  | 'locationFlag___mode'
  | 'locationFlag___nlink'
  | 'locationFlag___uid'
  | 'locationFlag___gid'
  | 'locationFlag___rdev'
  | 'locationFlag___ino'
  | 'locationFlag___atimeMs'
  | 'locationFlag___mtimeMs'
  | 'locationFlag___ctimeMs'
  | 'locationFlag___atime'
  | 'locationFlag___mtime'
  | 'locationFlag___ctime'
  | 'locationFlag___birthtime'
  | 'locationFlag___birthtimeMs'
  | 'locationFlag___blksize'
  | 'locationFlag___blocks'
  | 'locationFlag___url'
  | 'locationFlag___publicURL'
  | 'locationFlag___childrenImageSharp'
  | 'locationFlag___childrenImageSharp___fixed___base64'
  | 'locationFlag___childrenImageSharp___fixed___tracedSVG'
  | 'locationFlag___childrenImageSharp___fixed___aspectRatio'
  | 'locationFlag___childrenImageSharp___fixed___width'
  | 'locationFlag___childrenImageSharp___fixed___height'
  | 'locationFlag___childrenImageSharp___fixed___src'
  | 'locationFlag___childrenImageSharp___fixed___srcSet'
  | 'locationFlag___childrenImageSharp___fixed___srcWebp'
  | 'locationFlag___childrenImageSharp___fixed___srcSetWebp'
  | 'locationFlag___childrenImageSharp___fixed___originalName'
  | 'locationFlag___childrenImageSharp___fluid___base64'
  | 'locationFlag___childrenImageSharp___fluid___tracedSVG'
  | 'locationFlag___childrenImageSharp___fluid___aspectRatio'
  | 'locationFlag___childrenImageSharp___fluid___src'
  | 'locationFlag___childrenImageSharp___fluid___srcSet'
  | 'locationFlag___childrenImageSharp___fluid___srcWebp'
  | 'locationFlag___childrenImageSharp___fluid___srcSetWebp'
  | 'locationFlag___childrenImageSharp___fluid___sizes'
  | 'locationFlag___childrenImageSharp___fluid___originalImg'
  | 'locationFlag___childrenImageSharp___fluid___originalName'
  | 'locationFlag___childrenImageSharp___fluid___presentationWidth'
  | 'locationFlag___childrenImageSharp___fluid___presentationHeight'
  | 'locationFlag___childrenImageSharp___gatsbyImageData'
  | 'locationFlag___childrenImageSharp___original___width'
  | 'locationFlag___childrenImageSharp___original___height'
  | 'locationFlag___childrenImageSharp___original___src'
  | 'locationFlag___childrenImageSharp___resize___src'
  | 'locationFlag___childrenImageSharp___resize___tracedSVG'
  | 'locationFlag___childrenImageSharp___resize___width'
  | 'locationFlag___childrenImageSharp___resize___height'
  | 'locationFlag___childrenImageSharp___resize___aspectRatio'
  | 'locationFlag___childrenImageSharp___resize___originalName'
  | 'locationFlag___childrenImageSharp___id'
  | 'locationFlag___childrenImageSharp___parent___id'
  | 'locationFlag___childrenImageSharp___parent___children'
  | 'locationFlag___childrenImageSharp___children'
  | 'locationFlag___childrenImageSharp___children___id'
  | 'locationFlag___childrenImageSharp___children___children'
  | 'locationFlag___childrenImageSharp___internal___content'
  | 'locationFlag___childrenImageSharp___internal___contentDigest'
  | 'locationFlag___childrenImageSharp___internal___description'
  | 'locationFlag___childrenImageSharp___internal___fieldOwners'
  | 'locationFlag___childrenImageSharp___internal___ignoreType'
  | 'locationFlag___childrenImageSharp___internal___mediaType'
  | 'locationFlag___childrenImageSharp___internal___owner'
  | 'locationFlag___childrenImageSharp___internal___type'
  | 'locationFlag___childImageSharp___fixed___base64'
  | 'locationFlag___childImageSharp___fixed___tracedSVG'
  | 'locationFlag___childImageSharp___fixed___aspectRatio'
  | 'locationFlag___childImageSharp___fixed___width'
  | 'locationFlag___childImageSharp___fixed___height'
  | 'locationFlag___childImageSharp___fixed___src'
  | 'locationFlag___childImageSharp___fixed___srcSet'
  | 'locationFlag___childImageSharp___fixed___srcWebp'
  | 'locationFlag___childImageSharp___fixed___srcSetWebp'
  | 'locationFlag___childImageSharp___fixed___originalName'
  | 'locationFlag___childImageSharp___fluid___base64'
  | 'locationFlag___childImageSharp___fluid___tracedSVG'
  | 'locationFlag___childImageSharp___fluid___aspectRatio'
  | 'locationFlag___childImageSharp___fluid___src'
  | 'locationFlag___childImageSharp___fluid___srcSet'
  | 'locationFlag___childImageSharp___fluid___srcWebp'
  | 'locationFlag___childImageSharp___fluid___srcSetWebp'
  | 'locationFlag___childImageSharp___fluid___sizes'
  | 'locationFlag___childImageSharp___fluid___originalImg'
  | 'locationFlag___childImageSharp___fluid___originalName'
  | 'locationFlag___childImageSharp___fluid___presentationWidth'
  | 'locationFlag___childImageSharp___fluid___presentationHeight'
  | 'locationFlag___childImageSharp___gatsbyImageData'
  | 'locationFlag___childImageSharp___original___width'
  | 'locationFlag___childImageSharp___original___height'
  | 'locationFlag___childImageSharp___original___src'
  | 'locationFlag___childImageSharp___resize___src'
  | 'locationFlag___childImageSharp___resize___tracedSVG'
  | 'locationFlag___childImageSharp___resize___width'
  | 'locationFlag___childImageSharp___resize___height'
  | 'locationFlag___childImageSharp___resize___aspectRatio'
  | 'locationFlag___childImageSharp___resize___originalName'
  | 'locationFlag___childImageSharp___id'
  | 'locationFlag___childImageSharp___parent___id'
  | 'locationFlag___childImageSharp___parent___children'
  | 'locationFlag___childImageSharp___children'
  | 'locationFlag___childImageSharp___children___id'
  | 'locationFlag___childImageSharp___children___children'
  | 'locationFlag___childImageSharp___internal___content'
  | 'locationFlag___childImageSharp___internal___contentDigest'
  | 'locationFlag___childImageSharp___internal___description'
  | 'locationFlag___childImageSharp___internal___fieldOwners'
  | 'locationFlag___childImageSharp___internal___ignoreType'
  | 'locationFlag___childImageSharp___internal___mediaType'
  | 'locationFlag___childImageSharp___internal___owner'
  | 'locationFlag___childImageSharp___internal___type'
  | 'locationFlag___childrenWorkJson'
  | 'locationFlag___childrenWorkJson___id'
  | 'locationFlag___childrenWorkJson___parent___id'
  | 'locationFlag___childrenWorkJson___parent___children'
  | 'locationFlag___childrenWorkJson___children'
  | 'locationFlag___childrenWorkJson___children___id'
  | 'locationFlag___childrenWorkJson___children___children'
  | 'locationFlag___childrenWorkJson___internal___content'
  | 'locationFlag___childrenWorkJson___internal___contentDigest'
  | 'locationFlag___childrenWorkJson___internal___description'
  | 'locationFlag___childrenWorkJson___internal___fieldOwners'
  | 'locationFlag___childrenWorkJson___internal___ignoreType'
  | 'locationFlag___childrenWorkJson___internal___mediaType'
  | 'locationFlag___childrenWorkJson___internal___owner'
  | 'locationFlag___childrenWorkJson___internal___type'
  | 'locationFlag___childrenWorkJson___location'
  | 'locationFlag___childrenWorkJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childrenWorkJson___locationFlag___absolutePath'
  | 'locationFlag___childrenWorkJson___locationFlag___relativePath'
  | 'locationFlag___childrenWorkJson___locationFlag___extension'
  | 'locationFlag___childrenWorkJson___locationFlag___size'
  | 'locationFlag___childrenWorkJson___locationFlag___prettySize'
  | 'locationFlag___childrenWorkJson___locationFlag___modifiedTime'
  | 'locationFlag___childrenWorkJson___locationFlag___accessTime'
  | 'locationFlag___childrenWorkJson___locationFlag___changeTime'
  | 'locationFlag___childrenWorkJson___locationFlag___birthTime'
  | 'locationFlag___childrenWorkJson___locationFlag___root'
  | 'locationFlag___childrenWorkJson___locationFlag___dir'
  | 'locationFlag___childrenWorkJson___locationFlag___base'
  | 'locationFlag___childrenWorkJson___locationFlag___ext'
  | 'locationFlag___childrenWorkJson___locationFlag___name'
  | 'locationFlag___childrenWorkJson___locationFlag___relativeDirectory'
  | 'locationFlag___childrenWorkJson___locationFlag___dev'
  | 'locationFlag___childrenWorkJson___locationFlag___mode'
  | 'locationFlag___childrenWorkJson___locationFlag___nlink'
  | 'locationFlag___childrenWorkJson___locationFlag___uid'
  | 'locationFlag___childrenWorkJson___locationFlag___gid'
  | 'locationFlag___childrenWorkJson___locationFlag___rdev'
  | 'locationFlag___childrenWorkJson___locationFlag___ino'
  | 'locationFlag___childrenWorkJson___locationFlag___atimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___mtimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___ctimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___atime'
  | 'locationFlag___childrenWorkJson___locationFlag___mtime'
  | 'locationFlag___childrenWorkJson___locationFlag___ctime'
  | 'locationFlag___childrenWorkJson___locationFlag___birthtime'
  | 'locationFlag___childrenWorkJson___locationFlag___birthtimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___blksize'
  | 'locationFlag___childrenWorkJson___locationFlag___blocks'
  | 'locationFlag___childrenWorkJson___locationFlag___url'
  | 'locationFlag___childrenWorkJson___locationFlag___publicURL'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenSeJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenRuJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenLocale'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenHuJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenFrJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEtJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEsJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEnJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenDeJson'
  | 'locationFlag___childrenWorkJson___locationFlag___id'
  | 'locationFlag___childrenWorkJson___locationFlag___children'
  | 'locationFlag___childrenWorkJson___title'
  | 'locationFlag___childrenWorkJson___logo___sourceInstanceName'
  | 'locationFlag___childrenWorkJson___logo___absolutePath'
  | 'locationFlag___childrenWorkJson___logo___relativePath'
  | 'locationFlag___childrenWorkJson___logo___extension'
  | 'locationFlag___childrenWorkJson___logo___size'
  | 'locationFlag___childrenWorkJson___logo___prettySize'
  | 'locationFlag___childrenWorkJson___logo___modifiedTime'
  | 'locationFlag___childrenWorkJson___logo___accessTime'
  | 'locationFlag___childrenWorkJson___logo___changeTime'
  | 'locationFlag___childrenWorkJson___logo___birthTime'
  | 'locationFlag___childrenWorkJson___logo___root'
  | 'locationFlag___childrenWorkJson___logo___dir'
  | 'locationFlag___childrenWorkJson___logo___base'
  | 'locationFlag___childrenWorkJson___logo___ext'
  | 'locationFlag___childrenWorkJson___logo___name'
  | 'locationFlag___childrenWorkJson___logo___relativeDirectory'
  | 'locationFlag___childrenWorkJson___logo___dev'
  | 'locationFlag___childrenWorkJson___logo___mode'
  | 'locationFlag___childrenWorkJson___logo___nlink'
  | 'locationFlag___childrenWorkJson___logo___uid'
  | 'locationFlag___childrenWorkJson___logo___gid'
  | 'locationFlag___childrenWorkJson___logo___rdev'
  | 'locationFlag___childrenWorkJson___logo___ino'
  | 'locationFlag___childrenWorkJson___logo___atimeMs'
  | 'locationFlag___childrenWorkJson___logo___mtimeMs'
  | 'locationFlag___childrenWorkJson___logo___ctimeMs'
  | 'locationFlag___childrenWorkJson___logo___atime'
  | 'locationFlag___childrenWorkJson___logo___mtime'
  | 'locationFlag___childrenWorkJson___logo___ctime'
  | 'locationFlag___childrenWorkJson___logo___birthtime'
  | 'locationFlag___childrenWorkJson___logo___birthtimeMs'
  | 'locationFlag___childrenWorkJson___logo___blksize'
  | 'locationFlag___childrenWorkJson___logo___blocks'
  | 'locationFlag___childrenWorkJson___logo___url'
  | 'locationFlag___childrenWorkJson___logo___publicURL'
  | 'locationFlag___childrenWorkJson___logo___childrenImageSharp'
  | 'locationFlag___childrenWorkJson___logo___childrenWorkJson'
  | 'locationFlag___childrenWorkJson___logo___childrenSkillsJson'
  | 'locationFlag___childrenWorkJson___logo___childrenSeJson'
  | 'locationFlag___childrenWorkJson___logo___childrenRuJson'
  | 'locationFlag___childrenWorkJson___logo___childrenLocale'
  | 'locationFlag___childrenWorkJson___logo___childrenHuJson'
  | 'locationFlag___childrenWorkJson___logo___childrenFrJson'
  | 'locationFlag___childrenWorkJson___logo___childrenFlagsJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEtJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEsJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEnJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEducationJson'
  | 'locationFlag___childrenWorkJson___logo___childrenDeJson'
  | 'locationFlag___childrenWorkJson___logo___id'
  | 'locationFlag___childrenWorkJson___logo___children'
  | 'locationFlag___childrenWorkJson___name'
  | 'locationFlag___childrenWorkJson___dates'
  | 'locationFlag___childrenWorkJson___description'
  | 'locationFlag___childWorkJson___id'
  | 'locationFlag___childWorkJson___parent___id'
  | 'locationFlag___childWorkJson___parent___children'
  | 'locationFlag___childWorkJson___children'
  | 'locationFlag___childWorkJson___children___id'
  | 'locationFlag___childWorkJson___children___children'
  | 'locationFlag___childWorkJson___internal___content'
  | 'locationFlag___childWorkJson___internal___contentDigest'
  | 'locationFlag___childWorkJson___internal___description'
  | 'locationFlag___childWorkJson___internal___fieldOwners'
  | 'locationFlag___childWorkJson___internal___ignoreType'
  | 'locationFlag___childWorkJson___internal___mediaType'
  | 'locationFlag___childWorkJson___internal___owner'
  | 'locationFlag___childWorkJson___internal___type'
  | 'locationFlag___childWorkJson___location'
  | 'locationFlag___childWorkJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childWorkJson___locationFlag___absolutePath'
  | 'locationFlag___childWorkJson___locationFlag___relativePath'
  | 'locationFlag___childWorkJson___locationFlag___extension'
  | 'locationFlag___childWorkJson___locationFlag___size'
  | 'locationFlag___childWorkJson___locationFlag___prettySize'
  | 'locationFlag___childWorkJson___locationFlag___modifiedTime'
  | 'locationFlag___childWorkJson___locationFlag___accessTime'
  | 'locationFlag___childWorkJson___locationFlag___changeTime'
  | 'locationFlag___childWorkJson___locationFlag___birthTime'
  | 'locationFlag___childWorkJson___locationFlag___root'
  | 'locationFlag___childWorkJson___locationFlag___dir'
  | 'locationFlag___childWorkJson___locationFlag___base'
  | 'locationFlag___childWorkJson___locationFlag___ext'
  | 'locationFlag___childWorkJson___locationFlag___name'
  | 'locationFlag___childWorkJson___locationFlag___relativeDirectory'
  | 'locationFlag___childWorkJson___locationFlag___dev'
  | 'locationFlag___childWorkJson___locationFlag___mode'
  | 'locationFlag___childWorkJson___locationFlag___nlink'
  | 'locationFlag___childWorkJson___locationFlag___uid'
  | 'locationFlag___childWorkJson___locationFlag___gid'
  | 'locationFlag___childWorkJson___locationFlag___rdev'
  | 'locationFlag___childWorkJson___locationFlag___ino'
  | 'locationFlag___childWorkJson___locationFlag___atimeMs'
  | 'locationFlag___childWorkJson___locationFlag___mtimeMs'
  | 'locationFlag___childWorkJson___locationFlag___ctimeMs'
  | 'locationFlag___childWorkJson___locationFlag___atime'
  | 'locationFlag___childWorkJson___locationFlag___mtime'
  | 'locationFlag___childWorkJson___locationFlag___ctime'
  | 'locationFlag___childWorkJson___locationFlag___birthtime'
  | 'locationFlag___childWorkJson___locationFlag___birthtimeMs'
  | 'locationFlag___childWorkJson___locationFlag___blksize'
  | 'locationFlag___childWorkJson___locationFlag___blocks'
  | 'locationFlag___childWorkJson___locationFlag___url'
  | 'locationFlag___childWorkJson___locationFlag___publicURL'
  | 'locationFlag___childWorkJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childWorkJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenSeJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenRuJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenLocale'
  | 'locationFlag___childWorkJson___locationFlag___childrenHuJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenFrJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEtJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEsJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEnJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenDeJson'
  | 'locationFlag___childWorkJson___locationFlag___id'
  | 'locationFlag___childWorkJson___locationFlag___children'
  | 'locationFlag___childWorkJson___title'
  | 'locationFlag___childWorkJson___logo___sourceInstanceName'
  | 'locationFlag___childWorkJson___logo___absolutePath'
  | 'locationFlag___childWorkJson___logo___relativePath'
  | 'locationFlag___childWorkJson___logo___extension'
  | 'locationFlag___childWorkJson___logo___size'
  | 'locationFlag___childWorkJson___logo___prettySize'
  | 'locationFlag___childWorkJson___logo___modifiedTime'
  | 'locationFlag___childWorkJson___logo___accessTime'
  | 'locationFlag___childWorkJson___logo___changeTime'
  | 'locationFlag___childWorkJson___logo___birthTime'
  | 'locationFlag___childWorkJson___logo___root'
  | 'locationFlag___childWorkJson___logo___dir'
  | 'locationFlag___childWorkJson___logo___base'
  | 'locationFlag___childWorkJson___logo___ext'
  | 'locationFlag___childWorkJson___logo___name'
  | 'locationFlag___childWorkJson___logo___relativeDirectory'
  | 'locationFlag___childWorkJson___logo___dev'
  | 'locationFlag___childWorkJson___logo___mode'
  | 'locationFlag___childWorkJson___logo___nlink'
  | 'locationFlag___childWorkJson___logo___uid'
  | 'locationFlag___childWorkJson___logo___gid'
  | 'locationFlag___childWorkJson___logo___rdev'
  | 'locationFlag___childWorkJson___logo___ino'
  | 'locationFlag___childWorkJson___logo___atimeMs'
  | 'locationFlag___childWorkJson___logo___mtimeMs'
  | 'locationFlag___childWorkJson___logo___ctimeMs'
  | 'locationFlag___childWorkJson___logo___atime'
  | 'locationFlag___childWorkJson___logo___mtime'
  | 'locationFlag___childWorkJson___logo___ctime'
  | 'locationFlag___childWorkJson___logo___birthtime'
  | 'locationFlag___childWorkJson___logo___birthtimeMs'
  | 'locationFlag___childWorkJson___logo___blksize'
  | 'locationFlag___childWorkJson___logo___blocks'
  | 'locationFlag___childWorkJson___logo___url'
  | 'locationFlag___childWorkJson___logo___publicURL'
  | 'locationFlag___childWorkJson___logo___childrenImageSharp'
  | 'locationFlag___childWorkJson___logo___childrenWorkJson'
  | 'locationFlag___childWorkJson___logo___childrenSkillsJson'
  | 'locationFlag___childWorkJson___logo___childrenSeJson'
  | 'locationFlag___childWorkJson___logo___childrenRuJson'
  | 'locationFlag___childWorkJson___logo___childrenLocale'
  | 'locationFlag___childWorkJson___logo___childrenHuJson'
  | 'locationFlag___childWorkJson___logo___childrenFrJson'
  | 'locationFlag___childWorkJson___logo___childrenFlagsJson'
  | 'locationFlag___childWorkJson___logo___childrenEtJson'
  | 'locationFlag___childWorkJson___logo___childrenEsJson'
  | 'locationFlag___childWorkJson___logo___childrenEnJson'
  | 'locationFlag___childWorkJson___logo___childrenEducationJson'
  | 'locationFlag___childWorkJson___logo___childrenDeJson'
  | 'locationFlag___childWorkJson___logo___id'
  | 'locationFlag___childWorkJson___logo___children'
  | 'locationFlag___childWorkJson___name'
  | 'locationFlag___childWorkJson___dates'
  | 'locationFlag___childWorkJson___description'
  | 'locationFlag___childrenSkillsJson'
  | 'locationFlag___childrenSkillsJson___id'
  | 'locationFlag___childrenSkillsJson___parent___id'
  | 'locationFlag___childrenSkillsJson___parent___children'
  | 'locationFlag___childrenSkillsJson___children'
  | 'locationFlag___childrenSkillsJson___children___id'
  | 'locationFlag___childrenSkillsJson___children___children'
  | 'locationFlag___childrenSkillsJson___internal___content'
  | 'locationFlag___childrenSkillsJson___internal___contentDigest'
  | 'locationFlag___childrenSkillsJson___internal___description'
  | 'locationFlag___childrenSkillsJson___internal___fieldOwners'
  | 'locationFlag___childrenSkillsJson___internal___ignoreType'
  | 'locationFlag___childrenSkillsJson___internal___mediaType'
  | 'locationFlag___childrenSkillsJson___internal___owner'
  | 'locationFlag___childrenSkillsJson___internal___type'
  | 'locationFlag___childrenSkillsJson___title'
  | 'locationFlag___childrenSkillsJson___skillItems'
  | 'locationFlag___childrenSkillsJson___skillItems___name'
  | 'locationFlag___childrenSkillsJson___skillItems___extra'
  | 'locationFlag___childrenSkillsJson___skillItems___subSkills'
  | 'locationFlag___childrenSkillsJson___skillItems___href'
  | 'locationFlag___childSkillsJson___id'
  | 'locationFlag___childSkillsJson___parent___id'
  | 'locationFlag___childSkillsJson___parent___children'
  | 'locationFlag___childSkillsJson___children'
  | 'locationFlag___childSkillsJson___children___id'
  | 'locationFlag___childSkillsJson___children___children'
  | 'locationFlag___childSkillsJson___internal___content'
  | 'locationFlag___childSkillsJson___internal___contentDigest'
  | 'locationFlag___childSkillsJson___internal___description'
  | 'locationFlag___childSkillsJson___internal___fieldOwners'
  | 'locationFlag___childSkillsJson___internal___ignoreType'
  | 'locationFlag___childSkillsJson___internal___mediaType'
  | 'locationFlag___childSkillsJson___internal___owner'
  | 'locationFlag___childSkillsJson___internal___type'
  | 'locationFlag___childSkillsJson___title'
  | 'locationFlag___childSkillsJson___skillItems'
  | 'locationFlag___childSkillsJson___skillItems___name'
  | 'locationFlag___childSkillsJson___skillItems___extra'
  | 'locationFlag___childSkillsJson___skillItems___subSkills'
  | 'locationFlag___childSkillsJson___skillItems___href'
  | 'locationFlag___childrenSeJson'
  | 'locationFlag___childrenSeJson___id'
  | 'locationFlag___childrenSeJson___parent___id'
  | 'locationFlag___childrenSeJson___parent___children'
  | 'locationFlag___childrenSeJson___children'
  | 'locationFlag___childrenSeJson___children___id'
  | 'locationFlag___childrenSeJson___children___children'
  | 'locationFlag___childrenSeJson___internal___content'
  | 'locationFlag___childrenSeJson___internal___contentDigest'
  | 'locationFlag___childrenSeJson___internal___description'
  | 'locationFlag___childrenSeJson___internal___fieldOwners'
  | 'locationFlag___childrenSeJson___internal___ignoreType'
  | 'locationFlag___childrenSeJson___internal___mediaType'
  | 'locationFlag___childrenSeJson___internal___owner'
  | 'locationFlag___childrenSeJson___internal___type'
  | 'locationFlag___childrenSeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childSeJson___id'
  | 'locationFlag___childSeJson___parent___id'
  | 'locationFlag___childSeJson___parent___children'
  | 'locationFlag___childSeJson___children'
  | 'locationFlag___childSeJson___children___id'
  | 'locationFlag___childSeJson___children___children'
  | 'locationFlag___childSeJson___internal___content'
  | 'locationFlag___childSeJson___internal___contentDigest'
  | 'locationFlag___childSeJson___internal___description'
  | 'locationFlag___childSeJson___internal___fieldOwners'
  | 'locationFlag___childSeJson___internal___ignoreType'
  | 'locationFlag___childSeJson___internal___mediaType'
  | 'locationFlag___childSeJson___internal___owner'
  | 'locationFlag___childSeJson___internal___type'
  | 'locationFlag___childSeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenRuJson'
  | 'locationFlag___childrenRuJson___id'
  | 'locationFlag___childrenRuJson___parent___id'
  | 'locationFlag___childrenRuJson___parent___children'
  | 'locationFlag___childrenRuJson___children'
  | 'locationFlag___childrenRuJson___children___id'
  | 'locationFlag___childrenRuJson___children___children'
  | 'locationFlag___childrenRuJson___internal___content'
  | 'locationFlag___childrenRuJson___internal___contentDigest'
  | 'locationFlag___childrenRuJson___internal___description'
  | 'locationFlag___childrenRuJson___internal___fieldOwners'
  | 'locationFlag___childrenRuJson___internal___ignoreType'
  | 'locationFlag___childrenRuJson___internal___mediaType'
  | 'locationFlag___childrenRuJson___internal___owner'
  | 'locationFlag___childrenRuJson___internal___type'
  | 'locationFlag___childrenRuJson___About___AboutMe'
  | 'locationFlag___childrenRuJson___About___Description'
  | 'locationFlag___childrenRuJson___About___PhotoDescription'
  | 'locationFlag___childrenRuJson___About___ViewCV'
  | 'locationFlag___childrenRuJson___Acknowledgements'
  | 'locationFlag___childrenRuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenRuJson___Banner___Experience'
  | 'locationFlag___childrenRuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenRuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenRuJson___Blog___Blog'
  | 'locationFlag___childrenRuJson___Contact___Contact'
  | 'locationFlag___childrenRuJson___Contact___GetInTouch'
  | 'locationFlag___childrenRuJson___Contact___SendEmail'
  | 'locationFlag___childrenRuJson___Education___Description'
  | 'locationFlag___childrenRuJson___Education___Education'
  | 'locationFlag___childrenRuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenRuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenRuJson___PageLinks___Home'
  | 'locationFlag___childrenRuJson___SectionButtons___About'
  | 'locationFlag___childrenRuJson___SectionButtons___Blog'
  | 'locationFlag___childrenRuJson___SectionButtons___Contact'
  | 'locationFlag___childrenRuJson___SectionButtons___Experience'
  | 'locationFlag___childrenRuJson___SectionButtons___Skills'
  | 'locationFlag___childrenRuJson___Skills___Overview'
  | 'locationFlag___childrenRuJson___Skills___Skills'
  | 'locationFlag___childrenRuJson___Work___Work'
  | 'locationFlag___childRuJson___id'
  | 'locationFlag___childRuJson___parent___id'
  | 'locationFlag___childRuJson___parent___children'
  | 'locationFlag___childRuJson___children'
  | 'locationFlag___childRuJson___children___id'
  | 'locationFlag___childRuJson___children___children'
  | 'locationFlag___childRuJson___internal___content'
  | 'locationFlag___childRuJson___internal___contentDigest'
  | 'locationFlag___childRuJson___internal___description'
  | 'locationFlag___childRuJson___internal___fieldOwners'
  | 'locationFlag___childRuJson___internal___ignoreType'
  | 'locationFlag___childRuJson___internal___mediaType'
  | 'locationFlag___childRuJson___internal___owner'
  | 'locationFlag___childRuJson___internal___type'
  | 'locationFlag___childRuJson___About___AboutMe'
  | 'locationFlag___childRuJson___About___Description'
  | 'locationFlag___childRuJson___About___PhotoDescription'
  | 'locationFlag___childRuJson___About___ViewCV'
  | 'locationFlag___childRuJson___Acknowledgements'
  | 'locationFlag___childRuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childRuJson___Banner___Experience'
  | 'locationFlag___childRuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childRuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childRuJson___Blog___Blog'
  | 'locationFlag___childRuJson___Contact___Contact'
  | 'locationFlag___childRuJson___Contact___GetInTouch'
  | 'locationFlag___childRuJson___Contact___SendEmail'
  | 'locationFlag___childRuJson___Education___Description'
  | 'locationFlag___childRuJson___Education___Education'
  | 'locationFlag___childRuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childRuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childRuJson___PageLinks___Home'
  | 'locationFlag___childRuJson___SectionButtons___About'
  | 'locationFlag___childRuJson___SectionButtons___Blog'
  | 'locationFlag___childRuJson___SectionButtons___Contact'
  | 'locationFlag___childRuJson___SectionButtons___Experience'
  | 'locationFlag___childRuJson___SectionButtons___Skills'
  | 'locationFlag___childRuJson___Skills___Overview'
  | 'locationFlag___childRuJson___Skills___Skills'
  | 'locationFlag___childRuJson___Work___Work'
  | 'locationFlag___childrenLocale'
  | 'locationFlag___childrenLocale___id'
  | 'locationFlag___childrenLocale___parent___id'
  | 'locationFlag___childrenLocale___parent___children'
  | 'locationFlag___childrenLocale___children'
  | 'locationFlag___childrenLocale___children___id'
  | 'locationFlag___childrenLocale___children___children'
  | 'locationFlag___childrenLocale___internal___content'
  | 'locationFlag___childrenLocale___internal___contentDigest'
  | 'locationFlag___childrenLocale___internal___description'
  | 'locationFlag___childrenLocale___internal___fieldOwners'
  | 'locationFlag___childrenLocale___internal___ignoreType'
  | 'locationFlag___childrenLocale___internal___mediaType'
  | 'locationFlag___childrenLocale___internal___owner'
  | 'locationFlag___childrenLocale___internal___type'
  | 'locationFlag___childrenLocale___language'
  | 'locationFlag___childrenLocale___ns'
  | 'locationFlag___childrenLocale___data'
  | 'locationFlag___childrenLocale___fileAbsolutePath'
  | 'locationFlag___childLocale___id'
  | 'locationFlag___childLocale___parent___id'
  | 'locationFlag___childLocale___parent___children'
  | 'locationFlag___childLocale___children'
  | 'locationFlag___childLocale___children___id'
  | 'locationFlag___childLocale___children___children'
  | 'locationFlag___childLocale___internal___content'
  | 'locationFlag___childLocale___internal___contentDigest'
  | 'locationFlag___childLocale___internal___description'
  | 'locationFlag___childLocale___internal___fieldOwners'
  | 'locationFlag___childLocale___internal___ignoreType'
  | 'locationFlag___childLocale___internal___mediaType'
  | 'locationFlag___childLocale___internal___owner'
  | 'locationFlag___childLocale___internal___type'
  | 'locationFlag___childLocale___language'
  | 'locationFlag___childLocale___ns'
  | 'locationFlag___childLocale___data'
  | 'locationFlag___childLocale___fileAbsolutePath'
  | 'locationFlag___childrenHuJson'
  | 'locationFlag___childrenHuJson___id'
  | 'locationFlag___childrenHuJson___parent___id'
  | 'locationFlag___childrenHuJson___parent___children'
  | 'locationFlag___childrenHuJson___children'
  | 'locationFlag___childrenHuJson___children___id'
  | 'locationFlag___childrenHuJson___children___children'
  | 'locationFlag___childrenHuJson___internal___content'
  | 'locationFlag___childrenHuJson___internal___contentDigest'
  | 'locationFlag___childrenHuJson___internal___description'
  | 'locationFlag___childrenHuJson___internal___fieldOwners'
  | 'locationFlag___childrenHuJson___internal___ignoreType'
  | 'locationFlag___childrenHuJson___internal___mediaType'
  | 'locationFlag___childrenHuJson___internal___owner'
  | 'locationFlag___childrenHuJson___internal___type'
  | 'locationFlag___childrenHuJson___About___AboutMe'
  | 'locationFlag___childrenHuJson___About___Description'
  | 'locationFlag___childrenHuJson___About___PhotoDescription'
  | 'locationFlag___childrenHuJson___About___ViewCV'
  | 'locationFlag___childrenHuJson___Acknowledgements'
  | 'locationFlag___childrenHuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenHuJson___Banner___Experience'
  | 'locationFlag___childrenHuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenHuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenHuJson___Blog___Blog'
  | 'locationFlag___childrenHuJson___Contact___Contact'
  | 'locationFlag___childrenHuJson___Contact___GetInTouch'
  | 'locationFlag___childrenHuJson___Contact___SendEmail'
  | 'locationFlag___childrenHuJson___Education___Description'
  | 'locationFlag___childrenHuJson___Education___Education'
  | 'locationFlag___childrenHuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenHuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenHuJson___PageLinks___Home'
  | 'locationFlag___childrenHuJson___SectionButtons___About'
  | 'locationFlag___childrenHuJson___SectionButtons___Blog'
  | 'locationFlag___childrenHuJson___SectionButtons___Contact'
  | 'locationFlag___childrenHuJson___SectionButtons___Experience'
  | 'locationFlag___childrenHuJson___SectionButtons___Skills'
  | 'locationFlag___childrenHuJson___Skills___Overview'
  | 'locationFlag___childrenHuJson___Skills___Skills'
  | 'locationFlag___childrenHuJson___Work___Work'
  | 'locationFlag___childHuJson___id'
  | 'locationFlag___childHuJson___parent___id'
  | 'locationFlag___childHuJson___parent___children'
  | 'locationFlag___childHuJson___children'
  | 'locationFlag___childHuJson___children___id'
  | 'locationFlag___childHuJson___children___children'
  | 'locationFlag___childHuJson___internal___content'
  | 'locationFlag___childHuJson___internal___contentDigest'
  | 'locationFlag___childHuJson___internal___description'
  | 'locationFlag___childHuJson___internal___fieldOwners'
  | 'locationFlag___childHuJson___internal___ignoreType'
  | 'locationFlag___childHuJson___internal___mediaType'
  | 'locationFlag___childHuJson___internal___owner'
  | 'locationFlag___childHuJson___internal___type'
  | 'locationFlag___childHuJson___About___AboutMe'
  | 'locationFlag___childHuJson___About___Description'
  | 'locationFlag___childHuJson___About___PhotoDescription'
  | 'locationFlag___childHuJson___About___ViewCV'
  | 'locationFlag___childHuJson___Acknowledgements'
  | 'locationFlag___childHuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childHuJson___Banner___Experience'
  | 'locationFlag___childHuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childHuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childHuJson___Blog___Blog'
  | 'locationFlag___childHuJson___Contact___Contact'
  | 'locationFlag___childHuJson___Contact___GetInTouch'
  | 'locationFlag___childHuJson___Contact___SendEmail'
  | 'locationFlag___childHuJson___Education___Description'
  | 'locationFlag___childHuJson___Education___Education'
  | 'locationFlag___childHuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childHuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childHuJson___PageLinks___Home'
  | 'locationFlag___childHuJson___SectionButtons___About'
  | 'locationFlag___childHuJson___SectionButtons___Blog'
  | 'locationFlag___childHuJson___SectionButtons___Contact'
  | 'locationFlag___childHuJson___SectionButtons___Experience'
  | 'locationFlag___childHuJson___SectionButtons___Skills'
  | 'locationFlag___childHuJson___Skills___Overview'
  | 'locationFlag___childHuJson___Skills___Skills'
  | 'locationFlag___childHuJson___Work___Work'
  | 'locationFlag___childrenFrJson'
  | 'locationFlag___childrenFrJson___id'
  | 'locationFlag___childrenFrJson___parent___id'
  | 'locationFlag___childrenFrJson___parent___children'
  | 'locationFlag___childrenFrJson___children'
  | 'locationFlag___childrenFrJson___children___id'
  | 'locationFlag___childrenFrJson___children___children'
  | 'locationFlag___childrenFrJson___internal___content'
  | 'locationFlag___childrenFrJson___internal___contentDigest'
  | 'locationFlag___childrenFrJson___internal___description'
  | 'locationFlag___childrenFrJson___internal___fieldOwners'
  | 'locationFlag___childrenFrJson___internal___ignoreType'
  | 'locationFlag___childrenFrJson___internal___mediaType'
  | 'locationFlag___childrenFrJson___internal___owner'
  | 'locationFlag___childrenFrJson___internal___type'
  | 'locationFlag___childrenFrJson___About___AboutMe'
  | 'locationFlag___childrenFrJson___About___Description'
  | 'locationFlag___childrenFrJson___About___PhotoDescription'
  | 'locationFlag___childrenFrJson___About___ViewCV'
  | 'locationFlag___childrenFrJson___Acknowledgements'
  | 'locationFlag___childrenFrJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenFrJson___Banner___Experience'
  | 'locationFlag___childrenFrJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenFrJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenFrJson___Blog___Blog'
  | 'locationFlag___childrenFrJson___Contact___Contact'
  | 'locationFlag___childrenFrJson___Contact___GetInTouch'
  | 'locationFlag___childrenFrJson___Contact___SendEmail'
  | 'locationFlag___childrenFrJson___Education___Description'
  | 'locationFlag___childrenFrJson___Education___Education'
  | 'locationFlag___childrenFrJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenFrJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenFrJson___PageLinks___Home'
  | 'locationFlag___childrenFrJson___SectionButtons___About'
  | 'locationFlag___childrenFrJson___SectionButtons___Blog'
  | 'locationFlag___childrenFrJson___SectionButtons___Contact'
  | 'locationFlag___childrenFrJson___SectionButtons___Experience'
  | 'locationFlag___childrenFrJson___SectionButtons___Skills'
  | 'locationFlag___childrenFrJson___Skills___Overview'
  | 'locationFlag___childrenFrJson___Skills___Skills'
  | 'locationFlag___childrenFrJson___Work___Work'
  | 'locationFlag___childFrJson___id'
  | 'locationFlag___childFrJson___parent___id'
  | 'locationFlag___childFrJson___parent___children'
  | 'locationFlag___childFrJson___children'
  | 'locationFlag___childFrJson___children___id'
  | 'locationFlag___childFrJson___children___children'
  | 'locationFlag___childFrJson___internal___content'
  | 'locationFlag___childFrJson___internal___contentDigest'
  | 'locationFlag___childFrJson___internal___description'
  | 'locationFlag___childFrJson___internal___fieldOwners'
  | 'locationFlag___childFrJson___internal___ignoreType'
  | 'locationFlag___childFrJson___internal___mediaType'
  | 'locationFlag___childFrJson___internal___owner'
  | 'locationFlag___childFrJson___internal___type'
  | 'locationFlag___childFrJson___About___AboutMe'
  | 'locationFlag___childFrJson___About___Description'
  | 'locationFlag___childFrJson___About___PhotoDescription'
  | 'locationFlag___childFrJson___About___ViewCV'
  | 'locationFlag___childFrJson___Acknowledgements'
  | 'locationFlag___childFrJson___Banner___DexterSibirtsev'
  | 'locationFlag___childFrJson___Banner___Experience'
  | 'locationFlag___childFrJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childFrJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childFrJson___Blog___Blog'
  | 'locationFlag___childFrJson___Contact___Contact'
  | 'locationFlag___childFrJson___Contact___GetInTouch'
  | 'locationFlag___childFrJson___Contact___SendEmail'
  | 'locationFlag___childFrJson___Education___Description'
  | 'locationFlag___childFrJson___Education___Education'
  | 'locationFlag___childFrJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childFrJson___PageLinks___Acknowledgements'
  | 'locationFlag___childFrJson___PageLinks___Home'
  | 'locationFlag___childFrJson___SectionButtons___About'
  | 'locationFlag___childFrJson___SectionButtons___Blog'
  | 'locationFlag___childFrJson___SectionButtons___Contact'
  | 'locationFlag___childFrJson___SectionButtons___Experience'
  | 'locationFlag___childFrJson___SectionButtons___Skills'
  | 'locationFlag___childFrJson___Skills___Overview'
  | 'locationFlag___childFrJson___Skills___Skills'
  | 'locationFlag___childFrJson___Work___Work'
  | 'locationFlag___childrenFlagsJson'
  | 'locationFlag___childrenFlagsJson___id'
  | 'locationFlag___childrenFlagsJson___parent___id'
  | 'locationFlag___childrenFlagsJson___parent___children'
  | 'locationFlag___childrenFlagsJson___children'
  | 'locationFlag___childrenFlagsJson___children___id'
  | 'locationFlag___childrenFlagsJson___children___children'
  | 'locationFlag___childrenFlagsJson___internal___content'
  | 'locationFlag___childrenFlagsJson___internal___contentDigest'
  | 'locationFlag___childrenFlagsJson___internal___description'
  | 'locationFlag___childrenFlagsJson___internal___fieldOwners'
  | 'locationFlag___childrenFlagsJson___internal___ignoreType'
  | 'locationFlag___childrenFlagsJson___internal___mediaType'
  | 'locationFlag___childrenFlagsJson___internal___owner'
  | 'locationFlag___childrenFlagsJson___internal___type'
  | 'locationFlag___childrenFlagsJson___code'
  | 'locationFlag___childrenFlagsJson___name'
  | 'locationFlag___childrenFlagsJson___src___sourceInstanceName'
  | 'locationFlag___childrenFlagsJson___src___absolutePath'
  | 'locationFlag___childrenFlagsJson___src___relativePath'
  | 'locationFlag___childrenFlagsJson___src___extension'
  | 'locationFlag___childrenFlagsJson___src___size'
  | 'locationFlag___childrenFlagsJson___src___prettySize'
  | 'locationFlag___childrenFlagsJson___src___modifiedTime'
  | 'locationFlag___childrenFlagsJson___src___accessTime'
  | 'locationFlag___childrenFlagsJson___src___changeTime'
  | 'locationFlag___childrenFlagsJson___src___birthTime'
  | 'locationFlag___childrenFlagsJson___src___root'
  | 'locationFlag___childrenFlagsJson___src___dir'
  | 'locationFlag___childrenFlagsJson___src___base'
  | 'locationFlag___childrenFlagsJson___src___ext'
  | 'locationFlag___childrenFlagsJson___src___name'
  | 'locationFlag___childrenFlagsJson___src___relativeDirectory'
  | 'locationFlag___childrenFlagsJson___src___dev'
  | 'locationFlag___childrenFlagsJson___src___mode'
  | 'locationFlag___childrenFlagsJson___src___nlink'
  | 'locationFlag___childrenFlagsJson___src___uid'
  | 'locationFlag___childrenFlagsJson___src___gid'
  | 'locationFlag___childrenFlagsJson___src___rdev'
  | 'locationFlag___childrenFlagsJson___src___ino'
  | 'locationFlag___childrenFlagsJson___src___atimeMs'
  | 'locationFlag___childrenFlagsJson___src___mtimeMs'
  | 'locationFlag___childrenFlagsJson___src___ctimeMs'
  | 'locationFlag___childrenFlagsJson___src___atime'
  | 'locationFlag___childrenFlagsJson___src___mtime'
  | 'locationFlag___childrenFlagsJson___src___ctime'
  | 'locationFlag___childrenFlagsJson___src___birthtime'
  | 'locationFlag___childrenFlagsJson___src___birthtimeMs'
  | 'locationFlag___childrenFlagsJson___src___blksize'
  | 'locationFlag___childrenFlagsJson___src___blocks'
  | 'locationFlag___childrenFlagsJson___src___url'
  | 'locationFlag___childrenFlagsJson___src___publicURL'
  | 'locationFlag___childrenFlagsJson___src___childrenImageSharp'
  | 'locationFlag___childrenFlagsJson___src___childrenWorkJson'
  | 'locationFlag___childrenFlagsJson___src___childrenSkillsJson'
  | 'locationFlag___childrenFlagsJson___src___childrenSeJson'
  | 'locationFlag___childrenFlagsJson___src___childrenRuJson'
  | 'locationFlag___childrenFlagsJson___src___childrenLocale'
  | 'locationFlag___childrenFlagsJson___src___childrenHuJson'
  | 'locationFlag___childrenFlagsJson___src___childrenFrJson'
  | 'locationFlag___childrenFlagsJson___src___childrenFlagsJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEtJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEsJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEnJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEducationJson'
  | 'locationFlag___childrenFlagsJson___src___childrenDeJson'
  | 'locationFlag___childrenFlagsJson___src___id'
  | 'locationFlag___childrenFlagsJson___src___children'
  | 'locationFlag___childFlagsJson___id'
  | 'locationFlag___childFlagsJson___parent___id'
  | 'locationFlag___childFlagsJson___parent___children'
  | 'locationFlag___childFlagsJson___children'
  | 'locationFlag___childFlagsJson___children___id'
  | 'locationFlag___childFlagsJson___children___children'
  | 'locationFlag___childFlagsJson___internal___content'
  | 'locationFlag___childFlagsJson___internal___contentDigest'
  | 'locationFlag___childFlagsJson___internal___description'
  | 'locationFlag___childFlagsJson___internal___fieldOwners'
  | 'locationFlag___childFlagsJson___internal___ignoreType'
  | 'locationFlag___childFlagsJson___internal___mediaType'
  | 'locationFlag___childFlagsJson___internal___owner'
  | 'locationFlag___childFlagsJson___internal___type'
  | 'locationFlag___childFlagsJson___code'
  | 'locationFlag___childFlagsJson___name'
  | 'locationFlag___childFlagsJson___src___sourceInstanceName'
  | 'locationFlag___childFlagsJson___src___absolutePath'
  | 'locationFlag___childFlagsJson___src___relativePath'
  | 'locationFlag___childFlagsJson___src___extension'
  | 'locationFlag___childFlagsJson___src___size'
  | 'locationFlag___childFlagsJson___src___prettySize'
  | 'locationFlag___childFlagsJson___src___modifiedTime'
  | 'locationFlag___childFlagsJson___src___accessTime'
  | 'locationFlag___childFlagsJson___src___changeTime'
  | 'locationFlag___childFlagsJson___src___birthTime'
  | 'locationFlag___childFlagsJson___src___root'
  | 'locationFlag___childFlagsJson___src___dir'
  | 'locationFlag___childFlagsJson___src___base'
  | 'locationFlag___childFlagsJson___src___ext'
  | 'locationFlag___childFlagsJson___src___name'
  | 'locationFlag___childFlagsJson___src___relativeDirectory'
  | 'locationFlag___childFlagsJson___src___dev'
  | 'locationFlag___childFlagsJson___src___mode'
  | 'locationFlag___childFlagsJson___src___nlink'
  | 'locationFlag___childFlagsJson___src___uid'
  | 'locationFlag___childFlagsJson___src___gid'
  | 'locationFlag___childFlagsJson___src___rdev'
  | 'locationFlag___childFlagsJson___src___ino'
  | 'locationFlag___childFlagsJson___src___atimeMs'
  | 'locationFlag___childFlagsJson___src___mtimeMs'
  | 'locationFlag___childFlagsJson___src___ctimeMs'
  | 'locationFlag___childFlagsJson___src___atime'
  | 'locationFlag___childFlagsJson___src___mtime'
  | 'locationFlag___childFlagsJson___src___ctime'
  | 'locationFlag___childFlagsJson___src___birthtime'
  | 'locationFlag___childFlagsJson___src___birthtimeMs'
  | 'locationFlag___childFlagsJson___src___blksize'
  | 'locationFlag___childFlagsJson___src___blocks'
  | 'locationFlag___childFlagsJson___src___url'
  | 'locationFlag___childFlagsJson___src___publicURL'
  | 'locationFlag___childFlagsJson___src___childrenImageSharp'
  | 'locationFlag___childFlagsJson___src___childrenWorkJson'
  | 'locationFlag___childFlagsJson___src___childrenSkillsJson'
  | 'locationFlag___childFlagsJson___src___childrenSeJson'
  | 'locationFlag___childFlagsJson___src___childrenRuJson'
  | 'locationFlag___childFlagsJson___src___childrenLocale'
  | 'locationFlag___childFlagsJson___src___childrenHuJson'
  | 'locationFlag___childFlagsJson___src___childrenFrJson'
  | 'locationFlag___childFlagsJson___src___childrenFlagsJson'
  | 'locationFlag___childFlagsJson___src___childrenEtJson'
  | 'locationFlag___childFlagsJson___src___childrenEsJson'
  | 'locationFlag___childFlagsJson___src___childrenEnJson'
  | 'locationFlag___childFlagsJson___src___childrenEducationJson'
  | 'locationFlag___childFlagsJson___src___childrenDeJson'
  | 'locationFlag___childFlagsJson___src___id'
  | 'locationFlag___childFlagsJson___src___children'
  | 'locationFlag___childrenEtJson'
  | 'locationFlag___childrenEtJson___id'
  | 'locationFlag___childrenEtJson___parent___id'
  | 'locationFlag___childrenEtJson___parent___children'
  | 'locationFlag___childrenEtJson___children'
  | 'locationFlag___childrenEtJson___children___id'
  | 'locationFlag___childrenEtJson___children___children'
  | 'locationFlag___childrenEtJson___internal___content'
  | 'locationFlag___childrenEtJson___internal___contentDigest'
  | 'locationFlag___childrenEtJson___internal___description'
  | 'locationFlag___childrenEtJson___internal___fieldOwners'
  | 'locationFlag___childrenEtJson___internal___ignoreType'
  | 'locationFlag___childrenEtJson___internal___mediaType'
  | 'locationFlag___childrenEtJson___internal___owner'
  | 'locationFlag___childrenEtJson___internal___type'
  | 'locationFlag___childrenEtJson___About___AboutMe'
  | 'locationFlag___childrenEtJson___About___Description'
  | 'locationFlag___childrenEtJson___About___PhotoDescription'
  | 'locationFlag___childrenEtJson___About___ViewCV'
  | 'locationFlag___childrenEtJson___Acknowledgements'
  | 'locationFlag___childrenEtJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenEtJson___Banner___Experience'
  | 'locationFlag___childrenEtJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenEtJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenEtJson___Blog___Blog'
  | 'locationFlag___childrenEtJson___Contact___Contact'
  | 'locationFlag___childrenEtJson___Contact___GetInTouch'
  | 'locationFlag___childrenEtJson___Contact___SendEmail'
  | 'locationFlag___childrenEtJson___Education___Description'
  | 'locationFlag___childrenEtJson___Education___Education'
  | 'locationFlag___childrenEtJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenEtJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenEtJson___PageLinks___Home'
  | 'locationFlag___childrenEtJson___SectionButtons___About'
  | 'locationFlag___childrenEtJson___SectionButtons___Blog'
  | 'locationFlag___childrenEtJson___SectionButtons___Contact'
  | 'locationFlag___childrenEtJson___SectionButtons___Experience'
  | 'locationFlag___childrenEtJson___SectionButtons___Skills'
  | 'locationFlag___childrenEtJson___Skills___Overview'
  | 'locationFlag___childrenEtJson___Skills___Skills'
  | 'locationFlag___childrenEtJson___Work___Work'
  | 'locationFlag___childEtJson___id'
  | 'locationFlag___childEtJson___parent___id'
  | 'locationFlag___childEtJson___parent___children'
  | 'locationFlag___childEtJson___children'
  | 'locationFlag___childEtJson___children___id'
  | 'locationFlag___childEtJson___children___children'
  | 'locationFlag___childEtJson___internal___content'
  | 'locationFlag___childEtJson___internal___contentDigest'
  | 'locationFlag___childEtJson___internal___description'
  | 'locationFlag___childEtJson___internal___fieldOwners'
  | 'locationFlag___childEtJson___internal___ignoreType'
  | 'locationFlag___childEtJson___internal___mediaType'
  | 'locationFlag___childEtJson___internal___owner'
  | 'locationFlag___childEtJson___internal___type'
  | 'locationFlag___childEtJson___About___AboutMe'
  | 'locationFlag___childEtJson___About___Description'
  | 'locationFlag___childEtJson___About___PhotoDescription'
  | 'locationFlag___childEtJson___About___ViewCV'
  | 'locationFlag___childEtJson___Acknowledgements'
  | 'locationFlag___childEtJson___Banner___DexterSibirtsev'
  | 'locationFlag___childEtJson___Banner___Experience'
  | 'locationFlag___childEtJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childEtJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childEtJson___Blog___Blog'
  | 'locationFlag___childEtJson___Contact___Contact'
  | 'locationFlag___childEtJson___Contact___GetInTouch'
  | 'locationFlag___childEtJson___Contact___SendEmail'
  | 'locationFlag___childEtJson___Education___Description'
  | 'locationFlag___childEtJson___Education___Education'
  | 'locationFlag___childEtJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childEtJson___PageLinks___Acknowledgements'
  | 'locationFlag___childEtJson___PageLinks___Home'
  | 'locationFlag___childEtJson___SectionButtons___About'
  | 'locationFlag___childEtJson___SectionButtons___Blog'
  | 'locationFlag___childEtJson___SectionButtons___Contact'
  | 'locationFlag___childEtJson___SectionButtons___Experience'
  | 'locationFlag___childEtJson___SectionButtons___Skills'
  | 'locationFlag___childEtJson___Skills___Overview'
  | 'locationFlag___childEtJson___Skills___Skills'
  | 'locationFlag___childEtJson___Work___Work'
  | 'locationFlag___childrenEsJson'
  | 'locationFlag___childrenEsJson___id'
  | 'locationFlag___childrenEsJson___parent___id'
  | 'locationFlag___childrenEsJson___parent___children'
  | 'locationFlag___childrenEsJson___children'
  | 'locationFlag___childrenEsJson___children___id'
  | 'locationFlag___childrenEsJson___children___children'
  | 'locationFlag___childrenEsJson___internal___content'
  | 'locationFlag___childrenEsJson___internal___contentDigest'
  | 'locationFlag___childrenEsJson___internal___description'
  | 'locationFlag___childrenEsJson___internal___fieldOwners'
  | 'locationFlag___childrenEsJson___internal___ignoreType'
  | 'locationFlag___childrenEsJson___internal___mediaType'
  | 'locationFlag___childrenEsJson___internal___owner'
  | 'locationFlag___childrenEsJson___internal___type'
  | 'locationFlag___childrenEsJson___About___AboutMe'
  | 'locationFlag___childrenEsJson___About___Description'
  | 'locationFlag___childrenEsJson___About___PhotoDescription'
  | 'locationFlag___childrenEsJson___About___ViewCV'
  | 'locationFlag___childrenEsJson___Acknowledgements'
  | 'locationFlag___childrenEsJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenEsJson___Banner___Experience'
  | 'locationFlag___childrenEsJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenEsJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenEsJson___Blog___Blog'
  | 'locationFlag___childrenEsJson___Contact___Contact'
  | 'locationFlag___childrenEsJson___Contact___GetInTouch'
  | 'locationFlag___childrenEsJson___Contact___SendEmail'
  | 'locationFlag___childrenEsJson___Education___Description'
  | 'locationFlag___childrenEsJson___Education___Education'
  | 'locationFlag___childrenEsJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenEsJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenEsJson___PageLinks___Home'
  | 'locationFlag___childrenEsJson___SectionButtons___About'
  | 'locationFlag___childrenEsJson___SectionButtons___Blog'
  | 'locationFlag___childrenEsJson___SectionButtons___Contact'
  | 'locationFlag___childrenEsJson___SectionButtons___Experience'
  | 'locationFlag___childrenEsJson___SectionButtons___Skills'
  | 'locationFlag___childrenEsJson___Skills___Overview'
  | 'locationFlag___childrenEsJson___Skills___Skills'
  | 'locationFlag___childrenEsJson___Work___Work'
  | 'locationFlag___childEsJson___id'
  | 'locationFlag___childEsJson___parent___id'
  | 'locationFlag___childEsJson___parent___children'
  | 'locationFlag___childEsJson___children'
  | 'locationFlag___childEsJson___children___id'
  | 'locationFlag___childEsJson___children___children'
  | 'locationFlag___childEsJson___internal___content'
  | 'locationFlag___childEsJson___internal___contentDigest'
  | 'locationFlag___childEsJson___internal___description'
  | 'locationFlag___childEsJson___internal___fieldOwners'
  | 'locationFlag___childEsJson___internal___ignoreType'
  | 'locationFlag___childEsJson___internal___mediaType'
  | 'locationFlag___childEsJson___internal___owner'
  | 'locationFlag___childEsJson___internal___type'
  | 'locationFlag___childEsJson___About___AboutMe'
  | 'locationFlag___childEsJson___About___Description'
  | 'locationFlag___childEsJson___About___PhotoDescription'
  | 'locationFlag___childEsJson___About___ViewCV'
  | 'locationFlag___childEsJson___Acknowledgements'
  | 'locationFlag___childEsJson___Banner___DexterSibirtsev'
  | 'locationFlag___childEsJson___Banner___Experience'
  | 'locationFlag___childEsJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childEsJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childEsJson___Blog___Blog'
  | 'locationFlag___childEsJson___Contact___Contact'
  | 'locationFlag___childEsJson___Contact___GetInTouch'
  | 'locationFlag___childEsJson___Contact___SendEmail'
  | 'locationFlag___childEsJson___Education___Description'
  | 'locationFlag___childEsJson___Education___Education'
  | 'locationFlag___childEsJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childEsJson___PageLinks___Acknowledgements'
  | 'locationFlag___childEsJson___PageLinks___Home'
  | 'locationFlag___childEsJson___SectionButtons___About'
  | 'locationFlag___childEsJson___SectionButtons___Blog'
  | 'locationFlag___childEsJson___SectionButtons___Contact'
  | 'locationFlag___childEsJson___SectionButtons___Experience'
  | 'locationFlag___childEsJson___SectionButtons___Skills'
  | 'locationFlag___childEsJson___Skills___Overview'
  | 'locationFlag___childEsJson___Skills___Skills'
  | 'locationFlag___childEsJson___Work___Work'
  | 'locationFlag___childrenEnJson'
  | 'locationFlag___childrenEnJson___id'
  | 'locationFlag___childrenEnJson___parent___id'
  | 'locationFlag___childrenEnJson___parent___children'
  | 'locationFlag___childrenEnJson___children'
  | 'locationFlag___childrenEnJson___children___id'
  | 'locationFlag___childrenEnJson___children___children'
  | 'locationFlag___childrenEnJson___internal___content'
  | 'locationFlag___childrenEnJson___internal___contentDigest'
  | 'locationFlag___childrenEnJson___internal___description'
  | 'locationFlag___childrenEnJson___internal___fieldOwners'
  | 'locationFlag___childrenEnJson___internal___ignoreType'
  | 'locationFlag___childrenEnJson___internal___mediaType'
  | 'locationFlag___childrenEnJson___internal___owner'
  | 'locationFlag___childrenEnJson___internal___type'
  | 'locationFlag___childrenEnJson___About___AboutMe'
  | 'locationFlag___childrenEnJson___About___Description'
  | 'locationFlag___childrenEnJson___About___PhotoDescription'
  | 'locationFlag___childrenEnJson___About___ViewCV'
  | 'locationFlag___childrenEnJson___Acknowledgements'
  | 'locationFlag___childrenEnJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenEnJson___Banner___Experience'
  | 'locationFlag___childrenEnJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenEnJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenEnJson___Blog___Blog'
  | 'locationFlag___childrenEnJson___Contact___Contact'
  | 'locationFlag___childrenEnJson___Contact___GetInTouch'
  | 'locationFlag___childrenEnJson___Contact___SendEmail'
  | 'locationFlag___childrenEnJson___Education___Description'
  | 'locationFlag___childrenEnJson___Education___Education'
  | 'locationFlag___childrenEnJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenEnJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenEnJson___PageLinks___Home'
  | 'locationFlag___childrenEnJson___SectionButtons___About'
  | 'locationFlag___childrenEnJson___SectionButtons___Blog'
  | 'locationFlag___childrenEnJson___SectionButtons___Contact'
  | 'locationFlag___childrenEnJson___SectionButtons___Experience'
  | 'locationFlag___childrenEnJson___SectionButtons___Skills'
  | 'locationFlag___childrenEnJson___Skills___Overview'
  | 'locationFlag___childrenEnJson___Skills___Skills'
  | 'locationFlag___childrenEnJson___Work___Work'
  | 'locationFlag___childEnJson___id'
  | 'locationFlag___childEnJson___parent___id'
  | 'locationFlag___childEnJson___parent___children'
  | 'locationFlag___childEnJson___children'
  | 'locationFlag___childEnJson___children___id'
  | 'locationFlag___childEnJson___children___children'
  | 'locationFlag___childEnJson___internal___content'
  | 'locationFlag___childEnJson___internal___contentDigest'
  | 'locationFlag___childEnJson___internal___description'
  | 'locationFlag___childEnJson___internal___fieldOwners'
  | 'locationFlag___childEnJson___internal___ignoreType'
  | 'locationFlag___childEnJson___internal___mediaType'
  | 'locationFlag___childEnJson___internal___owner'
  | 'locationFlag___childEnJson___internal___type'
  | 'locationFlag___childEnJson___About___AboutMe'
  | 'locationFlag___childEnJson___About___Description'
  | 'locationFlag___childEnJson___About___PhotoDescription'
  | 'locationFlag___childEnJson___About___ViewCV'
  | 'locationFlag___childEnJson___Acknowledgements'
  | 'locationFlag___childEnJson___Banner___DexterSibirtsev'
  | 'locationFlag___childEnJson___Banner___Experience'
  | 'locationFlag___childEnJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childEnJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childEnJson___Blog___Blog'
  | 'locationFlag___childEnJson___Contact___Contact'
  | 'locationFlag___childEnJson___Contact___GetInTouch'
  | 'locationFlag___childEnJson___Contact___SendEmail'
  | 'locationFlag___childEnJson___Education___Description'
  | 'locationFlag___childEnJson___Education___Education'
  | 'locationFlag___childEnJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childEnJson___PageLinks___Acknowledgements'
  | 'locationFlag___childEnJson___PageLinks___Home'
  | 'locationFlag___childEnJson___SectionButtons___About'
  | 'locationFlag___childEnJson___SectionButtons___Blog'
  | 'locationFlag___childEnJson___SectionButtons___Contact'
  | 'locationFlag___childEnJson___SectionButtons___Experience'
  | 'locationFlag___childEnJson___SectionButtons___Skills'
  | 'locationFlag___childEnJson___Skills___Overview'
  | 'locationFlag___childEnJson___Skills___Skills'
  | 'locationFlag___childEnJson___Work___Work'
  | 'locationFlag___childrenEducationJson'
  | 'locationFlag___childrenEducationJson___id'
  | 'locationFlag___childrenEducationJson___parent___id'
  | 'locationFlag___childrenEducationJson___parent___children'
  | 'locationFlag___childrenEducationJson___children'
  | 'locationFlag___childrenEducationJson___children___id'
  | 'locationFlag___childrenEducationJson___children___children'
  | 'locationFlag___childrenEducationJson___internal___content'
  | 'locationFlag___childrenEducationJson___internal___contentDigest'
  | 'locationFlag___childrenEducationJson___internal___description'
  | 'locationFlag___childrenEducationJson___internal___fieldOwners'
  | 'locationFlag___childrenEducationJson___internal___ignoreType'
  | 'locationFlag___childrenEducationJson___internal___mediaType'
  | 'locationFlag___childrenEducationJson___internal___owner'
  | 'locationFlag___childrenEducationJson___internal___type'
  | 'locationFlag___childrenEducationJson___location'
  | 'locationFlag___childrenEducationJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childrenEducationJson___locationFlag___absolutePath'
  | 'locationFlag___childrenEducationJson___locationFlag___relativePath'
  | 'locationFlag___childrenEducationJson___locationFlag___extension'
  | 'locationFlag___childrenEducationJson___locationFlag___size'
  | 'locationFlag___childrenEducationJson___locationFlag___prettySize'
  | 'locationFlag___childrenEducationJson___locationFlag___modifiedTime'
  | 'locationFlag___childrenEducationJson___locationFlag___accessTime'
  | 'locationFlag___childrenEducationJson___locationFlag___changeTime'
  | 'locationFlag___childrenEducationJson___locationFlag___birthTime'
  | 'locationFlag___childrenEducationJson___locationFlag___root'
  | 'locationFlag___childrenEducationJson___locationFlag___dir'
  | 'locationFlag___childrenEducationJson___locationFlag___base'
  | 'locationFlag___childrenEducationJson___locationFlag___ext'
  | 'locationFlag___childrenEducationJson___locationFlag___name'
  | 'locationFlag___childrenEducationJson___locationFlag___relativeDirectory'
  | 'locationFlag___childrenEducationJson___locationFlag___dev'
  | 'locationFlag___childrenEducationJson___locationFlag___mode'
  | 'locationFlag___childrenEducationJson___locationFlag___nlink'
  | 'locationFlag___childrenEducationJson___locationFlag___uid'
  | 'locationFlag___childrenEducationJson___locationFlag___gid'
  | 'locationFlag___childrenEducationJson___locationFlag___rdev'
  | 'locationFlag___childrenEducationJson___locationFlag___ino'
  | 'locationFlag___childrenEducationJson___locationFlag___atimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___mtimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___ctimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___atime'
  | 'locationFlag___childrenEducationJson___locationFlag___mtime'
  | 'locationFlag___childrenEducationJson___locationFlag___ctime'
  | 'locationFlag___childrenEducationJson___locationFlag___birthtime'
  | 'locationFlag___childrenEducationJson___locationFlag___birthtimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___blksize'
  | 'locationFlag___childrenEducationJson___locationFlag___blocks'
  | 'locationFlag___childrenEducationJson___locationFlag___url'
  | 'locationFlag___childrenEducationJson___locationFlag___publicURL'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenSeJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenRuJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenLocale'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenHuJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenFrJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEtJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEsJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEnJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenDeJson'
  | 'locationFlag___childrenEducationJson___locationFlag___id'
  | 'locationFlag___childrenEducationJson___locationFlag___children'
  | 'locationFlag___childrenEducationJson___title'
  | 'locationFlag___childrenEducationJson___logo___sourceInstanceName'
  | 'locationFlag___childrenEducationJson___logo___absolutePath'
  | 'locationFlag___childrenEducationJson___logo___relativePath'
  | 'locationFlag___childrenEducationJson___logo___extension'
  | 'locationFlag___childrenEducationJson___logo___size'
  | 'locationFlag___childrenEducationJson___logo___prettySize'
  | 'locationFlag___childrenEducationJson___logo___modifiedTime'
  | 'locationFlag___childrenEducationJson___logo___accessTime'
  | 'locationFlag___childrenEducationJson___logo___changeTime'
  | 'locationFlag___childrenEducationJson___logo___birthTime'
  | 'locationFlag___childrenEducationJson___logo___root'
  | 'locationFlag___childrenEducationJson___logo___dir'
  | 'locationFlag___childrenEducationJson___logo___base'
  | 'locationFlag___childrenEducationJson___logo___ext'
  | 'locationFlag___childrenEducationJson___logo___name'
  | 'locationFlag___childrenEducationJson___logo___relativeDirectory'
  | 'locationFlag___childrenEducationJson___logo___dev'
  | 'locationFlag___childrenEducationJson___logo___mode'
  | 'locationFlag___childrenEducationJson___logo___nlink'
  | 'locationFlag___childrenEducationJson___logo___uid'
  | 'locationFlag___childrenEducationJson___logo___gid'
  | 'locationFlag___childrenEducationJson___logo___rdev'
  | 'locationFlag___childrenEducationJson___logo___ino'
  | 'locationFlag___childrenEducationJson___logo___atimeMs'
  | 'locationFlag___childrenEducationJson___logo___mtimeMs'
  | 'locationFlag___childrenEducationJson___logo___ctimeMs'
  | 'locationFlag___childrenEducationJson___logo___atime'
  | 'locationFlag___childrenEducationJson___logo___mtime'
  | 'locationFlag___childrenEducationJson___logo___ctime'
  | 'locationFlag___childrenEducationJson___logo___birthtime'
  | 'locationFlag___childrenEducationJson___logo___birthtimeMs'
  | 'locationFlag___childrenEducationJson___logo___blksize'
  | 'locationFlag___childrenEducationJson___logo___blocks'
  | 'locationFlag___childrenEducationJson___logo___url'
  | 'locationFlag___childrenEducationJson___logo___publicURL'
  | 'locationFlag___childrenEducationJson___logo___childrenImageSharp'
  | 'locationFlag___childrenEducationJson___logo___childrenWorkJson'
  | 'locationFlag___childrenEducationJson___logo___childrenSkillsJson'
  | 'locationFlag___childrenEducationJson___logo___childrenSeJson'
  | 'locationFlag___childrenEducationJson___logo___childrenRuJson'
  | 'locationFlag___childrenEducationJson___logo___childrenLocale'
  | 'locationFlag___childrenEducationJson___logo___childrenHuJson'
  | 'locationFlag___childrenEducationJson___logo___childrenFrJson'
  | 'locationFlag___childrenEducationJson___logo___childrenFlagsJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEtJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEsJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEnJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEducationJson'
  | 'locationFlag___childrenEducationJson___logo___childrenDeJson'
  | 'locationFlag___childrenEducationJson___logo___id'
  | 'locationFlag___childrenEducationJson___logo___children'
  | 'locationFlag___childrenEducationJson___name'
  | 'locationFlag___childrenEducationJson___dates'
  | 'locationFlag___childrenEducationJson___description'
  | 'locationFlag___childEducationJson___id'
  | 'locationFlag___childEducationJson___parent___id'
  | 'locationFlag___childEducationJson___parent___children'
  | 'locationFlag___childEducationJson___children'
  | 'locationFlag___childEducationJson___children___id'
  | 'locationFlag___childEducationJson___children___children'
  | 'locationFlag___childEducationJson___internal___content'
  | 'locationFlag___childEducationJson___internal___contentDigest'
  | 'locationFlag___childEducationJson___internal___description'
  | 'locationFlag___childEducationJson___internal___fieldOwners'
  | 'locationFlag___childEducationJson___internal___ignoreType'
  | 'locationFlag___childEducationJson___internal___mediaType'
  | 'locationFlag___childEducationJson___internal___owner'
  | 'locationFlag___childEducationJson___internal___type'
  | 'locationFlag___childEducationJson___location'
  | 'locationFlag___childEducationJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childEducationJson___locationFlag___absolutePath'
  | 'locationFlag___childEducationJson___locationFlag___relativePath'
  | 'locationFlag___childEducationJson___locationFlag___extension'
  | 'locationFlag___childEducationJson___locationFlag___size'
  | 'locationFlag___childEducationJson___locationFlag___prettySize'
  | 'locationFlag___childEducationJson___locationFlag___modifiedTime'
  | 'locationFlag___childEducationJson___locationFlag___accessTime'
  | 'locationFlag___childEducationJson___locationFlag___changeTime'
  | 'locationFlag___childEducationJson___locationFlag___birthTime'
  | 'locationFlag___childEducationJson___locationFlag___root'
  | 'locationFlag___childEducationJson___locationFlag___dir'
  | 'locationFlag___childEducationJson___locationFlag___base'
  | 'locationFlag___childEducationJson___locationFlag___ext'
  | 'locationFlag___childEducationJson___locationFlag___name'
  | 'locationFlag___childEducationJson___locationFlag___relativeDirectory'
  | 'locationFlag___childEducationJson___locationFlag___dev'
  | 'locationFlag___childEducationJson___locationFlag___mode'
  | 'locationFlag___childEducationJson___locationFlag___nlink'
  | 'locationFlag___childEducationJson___locationFlag___uid'
  | 'locationFlag___childEducationJson___locationFlag___gid'
  | 'locationFlag___childEducationJson___locationFlag___rdev'
  | 'locationFlag___childEducationJson___locationFlag___ino'
  | 'locationFlag___childEducationJson___locationFlag___atimeMs'
  | 'locationFlag___childEducationJson___locationFlag___mtimeMs'
  | 'locationFlag___childEducationJson___locationFlag___ctimeMs'
  | 'locationFlag___childEducationJson___locationFlag___atime'
  | 'locationFlag___childEducationJson___locationFlag___mtime'
  | 'locationFlag___childEducationJson___locationFlag___ctime'
  | 'locationFlag___childEducationJson___locationFlag___birthtime'
  | 'locationFlag___childEducationJson___locationFlag___birthtimeMs'
  | 'locationFlag___childEducationJson___locationFlag___blksize'
  | 'locationFlag___childEducationJson___locationFlag___blocks'
  | 'locationFlag___childEducationJson___locationFlag___url'
  | 'locationFlag___childEducationJson___locationFlag___publicURL'
  | 'locationFlag___childEducationJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childEducationJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenSeJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenRuJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenLocale'
  | 'locationFlag___childEducationJson___locationFlag___childrenHuJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenFrJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEtJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEsJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEnJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenDeJson'
  | 'locationFlag___childEducationJson___locationFlag___id'
  | 'locationFlag___childEducationJson___locationFlag___children'
  | 'locationFlag___childEducationJson___title'
  | 'locationFlag___childEducationJson___logo___sourceInstanceName'
  | 'locationFlag___childEducationJson___logo___absolutePath'
  | 'locationFlag___childEducationJson___logo___relativePath'
  | 'locationFlag___childEducationJson___logo___extension'
  | 'locationFlag___childEducationJson___logo___size'
  | 'locationFlag___childEducationJson___logo___prettySize'
  | 'locationFlag___childEducationJson___logo___modifiedTime'
  | 'locationFlag___childEducationJson___logo___accessTime'
  | 'locationFlag___childEducationJson___logo___changeTime'
  | 'locationFlag___childEducationJson___logo___birthTime'
  | 'locationFlag___childEducationJson___logo___root'
  | 'locationFlag___childEducationJson___logo___dir'
  | 'locationFlag___childEducationJson___logo___base'
  | 'locationFlag___childEducationJson___logo___ext'
  | 'locationFlag___childEducationJson___logo___name'
  | 'locationFlag___childEducationJson___logo___relativeDirectory'
  | 'locationFlag___childEducationJson___logo___dev'
  | 'locationFlag___childEducationJson___logo___mode'
  | 'locationFlag___childEducationJson___logo___nlink'
  | 'locationFlag___childEducationJson___logo___uid'
  | 'locationFlag___childEducationJson___logo___gid'
  | 'locationFlag___childEducationJson___logo___rdev'
  | 'locationFlag___childEducationJson___logo___ino'
  | 'locationFlag___childEducationJson___logo___atimeMs'
  | 'locationFlag___childEducationJson___logo___mtimeMs'
  | 'locationFlag___childEducationJson___logo___ctimeMs'
  | 'locationFlag___childEducationJson___logo___atime'
  | 'locationFlag___childEducationJson___logo___mtime'
  | 'locationFlag___childEducationJson___logo___ctime'
  | 'locationFlag___childEducationJson___logo___birthtime'
  | 'locationFlag___childEducationJson___logo___birthtimeMs'
  | 'locationFlag___childEducationJson___logo___blksize'
  | 'locationFlag___childEducationJson___logo___blocks'
  | 'locationFlag___childEducationJson___logo___url'
  | 'locationFlag___childEducationJson___logo___publicURL'
  | 'locationFlag___childEducationJson___logo___childrenImageSharp'
  | 'locationFlag___childEducationJson___logo___childrenWorkJson'
  | 'locationFlag___childEducationJson___logo___childrenSkillsJson'
  | 'locationFlag___childEducationJson___logo___childrenSeJson'
  | 'locationFlag___childEducationJson___logo___childrenRuJson'
  | 'locationFlag___childEducationJson___logo___childrenLocale'
  | 'locationFlag___childEducationJson___logo___childrenHuJson'
  | 'locationFlag___childEducationJson___logo___childrenFrJson'
  | 'locationFlag___childEducationJson___logo___childrenFlagsJson'
  | 'locationFlag___childEducationJson___logo___childrenEtJson'
  | 'locationFlag___childEducationJson___logo___childrenEsJson'
  | 'locationFlag___childEducationJson___logo___childrenEnJson'
  | 'locationFlag___childEducationJson___logo___childrenEducationJson'
  | 'locationFlag___childEducationJson___logo___childrenDeJson'
  | 'locationFlag___childEducationJson___logo___id'
  | 'locationFlag___childEducationJson___logo___children'
  | 'locationFlag___childEducationJson___name'
  | 'locationFlag___childEducationJson___dates'
  | 'locationFlag___childEducationJson___description'
  | 'locationFlag___childrenDeJson'
  | 'locationFlag___childrenDeJson___id'
  | 'locationFlag___childrenDeJson___parent___id'
  | 'locationFlag___childrenDeJson___parent___children'
  | 'locationFlag___childrenDeJson___children'
  | 'locationFlag___childrenDeJson___children___id'
  | 'locationFlag___childrenDeJson___children___children'
  | 'locationFlag___childrenDeJson___internal___content'
  | 'locationFlag___childrenDeJson___internal___contentDigest'
  | 'locationFlag___childrenDeJson___internal___description'
  | 'locationFlag___childrenDeJson___internal___fieldOwners'
  | 'locationFlag___childrenDeJson___internal___ignoreType'
  | 'locationFlag___childrenDeJson___internal___mediaType'
  | 'locationFlag___childrenDeJson___internal___owner'
  | 'locationFlag___childrenDeJson___internal___type'
  | 'locationFlag___childrenDeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childDeJson___id'
  | 'locationFlag___childDeJson___parent___id'
  | 'locationFlag___childDeJson___parent___children'
  | 'locationFlag___childDeJson___children'
  | 'locationFlag___childDeJson___children___id'
  | 'locationFlag___childDeJson___children___children'
  | 'locationFlag___childDeJson___internal___content'
  | 'locationFlag___childDeJson___internal___contentDigest'
  | 'locationFlag___childDeJson___internal___description'
  | 'locationFlag___childDeJson___internal___fieldOwners'
  | 'locationFlag___childDeJson___internal___ignoreType'
  | 'locationFlag___childDeJson___internal___mediaType'
  | 'locationFlag___childDeJson___internal___owner'
  | 'locationFlag___childDeJson___internal___type'
  | 'locationFlag___childDeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___id'
  | 'locationFlag___parent___id'
  | 'locationFlag___parent___parent___id'
  | 'locationFlag___parent___parent___children'
  | 'locationFlag___parent___children'
  | 'locationFlag___parent___children___id'
  | 'locationFlag___parent___children___children'
  | 'locationFlag___parent___internal___content'
  | 'locationFlag___parent___internal___contentDigest'
  | 'locationFlag___parent___internal___description'
  | 'locationFlag___parent___internal___fieldOwners'
  | 'locationFlag___parent___internal___ignoreType'
  | 'locationFlag___parent___internal___mediaType'
  | 'locationFlag___parent___internal___owner'
  | 'locationFlag___parent___internal___type'
  | 'locationFlag___children'
  | 'locationFlag___children___id'
  | 'locationFlag___children___parent___id'
  | 'locationFlag___children___parent___children'
  | 'locationFlag___children___children'
  | 'locationFlag___children___children___id'
  | 'locationFlag___children___children___children'
  | 'locationFlag___children___internal___content'
  | 'locationFlag___children___internal___contentDigest'
  | 'locationFlag___children___internal___description'
  | 'locationFlag___children___internal___fieldOwners'
  | 'locationFlag___children___internal___ignoreType'
  | 'locationFlag___children___internal___mediaType'
  | 'locationFlag___children___internal___owner'
  | 'locationFlag___children___internal___type'
  | 'locationFlag___internal___content'
  | 'locationFlag___internal___contentDigest'
  | 'locationFlag___internal___description'
  | 'locationFlag___internal___fieldOwners'
  | 'locationFlag___internal___ignoreType'
  | 'locationFlag___internal___mediaType'
  | 'locationFlag___internal___owner'
  | 'locationFlag___internal___type'
  | 'title'
  | 'logo___sourceInstanceName'
  | 'logo___absolutePath'
  | 'logo___relativePath'
  | 'logo___extension'
  | 'logo___size'
  | 'logo___prettySize'
  | 'logo___modifiedTime'
  | 'logo___accessTime'
  | 'logo___changeTime'
  | 'logo___birthTime'
  | 'logo___root'
  | 'logo___dir'
  | 'logo___base'
  | 'logo___ext'
  | 'logo___name'
  | 'logo___relativeDirectory'
  | 'logo___dev'
  | 'logo___mode'
  | 'logo___nlink'
  | 'logo___uid'
  | 'logo___gid'
  | 'logo___rdev'
  | 'logo___ino'
  | 'logo___atimeMs'
  | 'logo___mtimeMs'
  | 'logo___ctimeMs'
  | 'logo___atime'
  | 'logo___mtime'
  | 'logo___ctime'
  | 'logo___birthtime'
  | 'logo___birthtimeMs'
  | 'logo___blksize'
  | 'logo___blocks'
  | 'logo___url'
  | 'logo___publicURL'
  | 'logo___childrenImageSharp'
  | 'logo___childrenImageSharp___fixed___base64'
  | 'logo___childrenImageSharp___fixed___tracedSVG'
  | 'logo___childrenImageSharp___fixed___aspectRatio'
  | 'logo___childrenImageSharp___fixed___width'
  | 'logo___childrenImageSharp___fixed___height'
  | 'logo___childrenImageSharp___fixed___src'
  | 'logo___childrenImageSharp___fixed___srcSet'
  | 'logo___childrenImageSharp___fixed___srcWebp'
  | 'logo___childrenImageSharp___fixed___srcSetWebp'
  | 'logo___childrenImageSharp___fixed___originalName'
  | 'logo___childrenImageSharp___fluid___base64'
  | 'logo___childrenImageSharp___fluid___tracedSVG'
  | 'logo___childrenImageSharp___fluid___aspectRatio'
  | 'logo___childrenImageSharp___fluid___src'
  | 'logo___childrenImageSharp___fluid___srcSet'
  | 'logo___childrenImageSharp___fluid___srcWebp'
  | 'logo___childrenImageSharp___fluid___srcSetWebp'
  | 'logo___childrenImageSharp___fluid___sizes'
  | 'logo___childrenImageSharp___fluid___originalImg'
  | 'logo___childrenImageSharp___fluid___originalName'
  | 'logo___childrenImageSharp___fluid___presentationWidth'
  | 'logo___childrenImageSharp___fluid___presentationHeight'
  | 'logo___childrenImageSharp___gatsbyImageData'
  | 'logo___childrenImageSharp___original___width'
  | 'logo___childrenImageSharp___original___height'
  | 'logo___childrenImageSharp___original___src'
  | 'logo___childrenImageSharp___resize___src'
  | 'logo___childrenImageSharp___resize___tracedSVG'
  | 'logo___childrenImageSharp___resize___width'
  | 'logo___childrenImageSharp___resize___height'
  | 'logo___childrenImageSharp___resize___aspectRatio'
  | 'logo___childrenImageSharp___resize___originalName'
  | 'logo___childrenImageSharp___id'
  | 'logo___childrenImageSharp___parent___id'
  | 'logo___childrenImageSharp___parent___children'
  | 'logo___childrenImageSharp___children'
  | 'logo___childrenImageSharp___children___id'
  | 'logo___childrenImageSharp___children___children'
  | 'logo___childrenImageSharp___internal___content'
  | 'logo___childrenImageSharp___internal___contentDigest'
  | 'logo___childrenImageSharp___internal___description'
  | 'logo___childrenImageSharp___internal___fieldOwners'
  | 'logo___childrenImageSharp___internal___ignoreType'
  | 'logo___childrenImageSharp___internal___mediaType'
  | 'logo___childrenImageSharp___internal___owner'
  | 'logo___childrenImageSharp___internal___type'
  | 'logo___childImageSharp___fixed___base64'
  | 'logo___childImageSharp___fixed___tracedSVG'
  | 'logo___childImageSharp___fixed___aspectRatio'
  | 'logo___childImageSharp___fixed___width'
  | 'logo___childImageSharp___fixed___height'
  | 'logo___childImageSharp___fixed___src'
  | 'logo___childImageSharp___fixed___srcSet'
  | 'logo___childImageSharp___fixed___srcWebp'
  | 'logo___childImageSharp___fixed___srcSetWebp'
  | 'logo___childImageSharp___fixed___originalName'
  | 'logo___childImageSharp___fluid___base64'
  | 'logo___childImageSharp___fluid___tracedSVG'
  | 'logo___childImageSharp___fluid___aspectRatio'
  | 'logo___childImageSharp___fluid___src'
  | 'logo___childImageSharp___fluid___srcSet'
  | 'logo___childImageSharp___fluid___srcWebp'
  | 'logo___childImageSharp___fluid___srcSetWebp'
  | 'logo___childImageSharp___fluid___sizes'
  | 'logo___childImageSharp___fluid___originalImg'
  | 'logo___childImageSharp___fluid___originalName'
  | 'logo___childImageSharp___fluid___presentationWidth'
  | 'logo___childImageSharp___fluid___presentationHeight'
  | 'logo___childImageSharp___gatsbyImageData'
  | 'logo___childImageSharp___original___width'
  | 'logo___childImageSharp___original___height'
  | 'logo___childImageSharp___original___src'
  | 'logo___childImageSharp___resize___src'
  | 'logo___childImageSharp___resize___tracedSVG'
  | 'logo___childImageSharp___resize___width'
  | 'logo___childImageSharp___resize___height'
  | 'logo___childImageSharp___resize___aspectRatio'
  | 'logo___childImageSharp___resize___originalName'
  | 'logo___childImageSharp___id'
  | 'logo___childImageSharp___parent___id'
  | 'logo___childImageSharp___parent___children'
  | 'logo___childImageSharp___children'
  | 'logo___childImageSharp___children___id'
  | 'logo___childImageSharp___children___children'
  | 'logo___childImageSharp___internal___content'
  | 'logo___childImageSharp___internal___contentDigest'
  | 'logo___childImageSharp___internal___description'
  | 'logo___childImageSharp___internal___fieldOwners'
  | 'logo___childImageSharp___internal___ignoreType'
  | 'logo___childImageSharp___internal___mediaType'
  | 'logo___childImageSharp___internal___owner'
  | 'logo___childImageSharp___internal___type'
  | 'logo___childrenWorkJson'
  | 'logo___childrenWorkJson___id'
  | 'logo___childrenWorkJson___parent___id'
  | 'logo___childrenWorkJson___parent___children'
  | 'logo___childrenWorkJson___children'
  | 'logo___childrenWorkJson___children___id'
  | 'logo___childrenWorkJson___children___children'
  | 'logo___childrenWorkJson___internal___content'
  | 'logo___childrenWorkJson___internal___contentDigest'
  | 'logo___childrenWorkJson___internal___description'
  | 'logo___childrenWorkJson___internal___fieldOwners'
  | 'logo___childrenWorkJson___internal___ignoreType'
  | 'logo___childrenWorkJson___internal___mediaType'
  | 'logo___childrenWorkJson___internal___owner'
  | 'logo___childrenWorkJson___internal___type'
  | 'logo___childrenWorkJson___location'
  | 'logo___childrenWorkJson___locationFlag___sourceInstanceName'
  | 'logo___childrenWorkJson___locationFlag___absolutePath'
  | 'logo___childrenWorkJson___locationFlag___relativePath'
  | 'logo___childrenWorkJson___locationFlag___extension'
  | 'logo___childrenWorkJson___locationFlag___size'
  | 'logo___childrenWorkJson___locationFlag___prettySize'
  | 'logo___childrenWorkJson___locationFlag___modifiedTime'
  | 'logo___childrenWorkJson___locationFlag___accessTime'
  | 'logo___childrenWorkJson___locationFlag___changeTime'
  | 'logo___childrenWorkJson___locationFlag___birthTime'
  | 'logo___childrenWorkJson___locationFlag___root'
  | 'logo___childrenWorkJson___locationFlag___dir'
  | 'logo___childrenWorkJson___locationFlag___base'
  | 'logo___childrenWorkJson___locationFlag___ext'
  | 'logo___childrenWorkJson___locationFlag___name'
  | 'logo___childrenWorkJson___locationFlag___relativeDirectory'
  | 'logo___childrenWorkJson___locationFlag___dev'
  | 'logo___childrenWorkJson___locationFlag___mode'
  | 'logo___childrenWorkJson___locationFlag___nlink'
  | 'logo___childrenWorkJson___locationFlag___uid'
  | 'logo___childrenWorkJson___locationFlag___gid'
  | 'logo___childrenWorkJson___locationFlag___rdev'
  | 'logo___childrenWorkJson___locationFlag___ino'
  | 'logo___childrenWorkJson___locationFlag___atimeMs'
  | 'logo___childrenWorkJson___locationFlag___mtimeMs'
  | 'logo___childrenWorkJson___locationFlag___ctimeMs'
  | 'logo___childrenWorkJson___locationFlag___atime'
  | 'logo___childrenWorkJson___locationFlag___mtime'
  | 'logo___childrenWorkJson___locationFlag___ctime'
  | 'logo___childrenWorkJson___locationFlag___birthtime'
  | 'logo___childrenWorkJson___locationFlag___birthtimeMs'
  | 'logo___childrenWorkJson___locationFlag___blksize'
  | 'logo___childrenWorkJson___locationFlag___blocks'
  | 'logo___childrenWorkJson___locationFlag___url'
  | 'logo___childrenWorkJson___locationFlag___publicURL'
  | 'logo___childrenWorkJson___locationFlag___childrenImageSharp'
  | 'logo___childrenWorkJson___locationFlag___childrenWorkJson'
  | 'logo___childrenWorkJson___locationFlag___childrenSkillsJson'
  | 'logo___childrenWorkJson___locationFlag___childrenSeJson'
  | 'logo___childrenWorkJson___locationFlag___childrenRuJson'
  | 'logo___childrenWorkJson___locationFlag___childrenLocale'
  | 'logo___childrenWorkJson___locationFlag___childrenHuJson'
  | 'logo___childrenWorkJson___locationFlag___childrenFrJson'
  | 'logo___childrenWorkJson___locationFlag___childrenFlagsJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEtJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEsJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEnJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEducationJson'
  | 'logo___childrenWorkJson___locationFlag___childrenDeJson'
  | 'logo___childrenWorkJson___locationFlag___id'
  | 'logo___childrenWorkJson___locationFlag___children'
  | 'logo___childrenWorkJson___title'
  | 'logo___childrenWorkJson___logo___sourceInstanceName'
  | 'logo___childrenWorkJson___logo___absolutePath'
  | 'logo___childrenWorkJson___logo___relativePath'
  | 'logo___childrenWorkJson___logo___extension'
  | 'logo___childrenWorkJson___logo___size'
  | 'logo___childrenWorkJson___logo___prettySize'
  | 'logo___childrenWorkJson___logo___modifiedTime'
  | 'logo___childrenWorkJson___logo___accessTime'
  | 'logo___childrenWorkJson___logo___changeTime'
  | 'logo___childrenWorkJson___logo___birthTime'
  | 'logo___childrenWorkJson___logo___root'
  | 'logo___childrenWorkJson___logo___dir'
  | 'logo___childrenWorkJson___logo___base'
  | 'logo___childrenWorkJson___logo___ext'
  | 'logo___childrenWorkJson___logo___name'
  | 'logo___childrenWorkJson___logo___relativeDirectory'
  | 'logo___childrenWorkJson___logo___dev'
  | 'logo___childrenWorkJson___logo___mode'
  | 'logo___childrenWorkJson___logo___nlink'
  | 'logo___childrenWorkJson___logo___uid'
  | 'logo___childrenWorkJson___logo___gid'
  | 'logo___childrenWorkJson___logo___rdev'
  | 'logo___childrenWorkJson___logo___ino'
  | 'logo___childrenWorkJson___logo___atimeMs'
  | 'logo___childrenWorkJson___logo___mtimeMs'
  | 'logo___childrenWorkJson___logo___ctimeMs'
  | 'logo___childrenWorkJson___logo___atime'
  | 'logo___childrenWorkJson___logo___mtime'
  | 'logo___childrenWorkJson___logo___ctime'
  | 'logo___childrenWorkJson___logo___birthtime'
  | 'logo___childrenWorkJson___logo___birthtimeMs'
  | 'logo___childrenWorkJson___logo___blksize'
  | 'logo___childrenWorkJson___logo___blocks'
  | 'logo___childrenWorkJson___logo___url'
  | 'logo___childrenWorkJson___logo___publicURL'
  | 'logo___childrenWorkJson___logo___childrenImageSharp'
  | 'logo___childrenWorkJson___logo___childrenWorkJson'
  | 'logo___childrenWorkJson___logo___childrenSkillsJson'
  | 'logo___childrenWorkJson___logo___childrenSeJson'
  | 'logo___childrenWorkJson___logo___childrenRuJson'
  | 'logo___childrenWorkJson___logo___childrenLocale'
  | 'logo___childrenWorkJson___logo___childrenHuJson'
  | 'logo___childrenWorkJson___logo___childrenFrJson'
  | 'logo___childrenWorkJson___logo___childrenFlagsJson'
  | 'logo___childrenWorkJson___logo___childrenEtJson'
  | 'logo___childrenWorkJson___logo___childrenEsJson'
  | 'logo___childrenWorkJson___logo___childrenEnJson'
  | 'logo___childrenWorkJson___logo___childrenEducationJson'
  | 'logo___childrenWorkJson___logo___childrenDeJson'
  | 'logo___childrenWorkJson___logo___id'
  | 'logo___childrenWorkJson___logo___children'
  | 'logo___childrenWorkJson___name'
  | 'logo___childrenWorkJson___dates'
  | 'logo___childrenWorkJson___description'
  | 'logo___childWorkJson___id'
  | 'logo___childWorkJson___parent___id'
  | 'logo___childWorkJson___parent___children'
  | 'logo___childWorkJson___children'
  | 'logo___childWorkJson___children___id'
  | 'logo___childWorkJson___children___children'
  | 'logo___childWorkJson___internal___content'
  | 'logo___childWorkJson___internal___contentDigest'
  | 'logo___childWorkJson___internal___description'
  | 'logo___childWorkJson___internal___fieldOwners'
  | 'logo___childWorkJson___internal___ignoreType'
  | 'logo___childWorkJson___internal___mediaType'
  | 'logo___childWorkJson___internal___owner'
  | 'logo___childWorkJson___internal___type'
  | 'logo___childWorkJson___location'
  | 'logo___childWorkJson___locationFlag___sourceInstanceName'
  | 'logo___childWorkJson___locationFlag___absolutePath'
  | 'logo___childWorkJson___locationFlag___relativePath'
  | 'logo___childWorkJson___locationFlag___extension'
  | 'logo___childWorkJson___locationFlag___size'
  | 'logo___childWorkJson___locationFlag___prettySize'
  | 'logo___childWorkJson___locationFlag___modifiedTime'
  | 'logo___childWorkJson___locationFlag___accessTime'
  | 'logo___childWorkJson___locationFlag___changeTime'
  | 'logo___childWorkJson___locationFlag___birthTime'
  | 'logo___childWorkJson___locationFlag___root'
  | 'logo___childWorkJson___locationFlag___dir'
  | 'logo___childWorkJson___locationFlag___base'
  | 'logo___childWorkJson___locationFlag___ext'
  | 'logo___childWorkJson___locationFlag___name'
  | 'logo___childWorkJson___locationFlag___relativeDirectory'
  | 'logo___childWorkJson___locationFlag___dev'
  | 'logo___childWorkJson___locationFlag___mode'
  | 'logo___childWorkJson___locationFlag___nlink'
  | 'logo___childWorkJson___locationFlag___uid'
  | 'logo___childWorkJson___locationFlag___gid'
  | 'logo___childWorkJson___locationFlag___rdev'
  | 'logo___childWorkJson___locationFlag___ino'
  | 'logo___childWorkJson___locationFlag___atimeMs'
  | 'logo___childWorkJson___locationFlag___mtimeMs'
  | 'logo___childWorkJson___locationFlag___ctimeMs'
  | 'logo___childWorkJson___locationFlag___atime'
  | 'logo___childWorkJson___locationFlag___mtime'
  | 'logo___childWorkJson___locationFlag___ctime'
  | 'logo___childWorkJson___locationFlag___birthtime'
  | 'logo___childWorkJson___locationFlag___birthtimeMs'
  | 'logo___childWorkJson___locationFlag___blksize'
  | 'logo___childWorkJson___locationFlag___blocks'
  | 'logo___childWorkJson___locationFlag___url'
  | 'logo___childWorkJson___locationFlag___publicURL'
  | 'logo___childWorkJson___locationFlag___childrenImageSharp'
  | 'logo___childWorkJson___locationFlag___childrenWorkJson'
  | 'logo___childWorkJson___locationFlag___childrenSkillsJson'
  | 'logo___childWorkJson___locationFlag___childrenSeJson'
  | 'logo___childWorkJson___locationFlag___childrenRuJson'
  | 'logo___childWorkJson___locationFlag___childrenLocale'
  | 'logo___childWorkJson___locationFlag___childrenHuJson'
  | 'logo___childWorkJson___locationFlag___childrenFrJson'
  | 'logo___childWorkJson___locationFlag___childrenFlagsJson'
  | 'logo___childWorkJson___locationFlag___childrenEtJson'
  | 'logo___childWorkJson___locationFlag___childrenEsJson'
  | 'logo___childWorkJson___locationFlag___childrenEnJson'
  | 'logo___childWorkJson___locationFlag___childrenEducationJson'
  | 'logo___childWorkJson___locationFlag___childrenDeJson'
  | 'logo___childWorkJson___locationFlag___id'
  | 'logo___childWorkJson___locationFlag___children'
  | 'logo___childWorkJson___title'
  | 'logo___childWorkJson___logo___sourceInstanceName'
  | 'logo___childWorkJson___logo___absolutePath'
  | 'logo___childWorkJson___logo___relativePath'
  | 'logo___childWorkJson___logo___extension'
  | 'logo___childWorkJson___logo___size'
  | 'logo___childWorkJson___logo___prettySize'
  | 'logo___childWorkJson___logo___modifiedTime'
  | 'logo___childWorkJson___logo___accessTime'
  | 'logo___childWorkJson___logo___changeTime'
  | 'logo___childWorkJson___logo___birthTime'
  | 'logo___childWorkJson___logo___root'
  | 'logo___childWorkJson___logo___dir'
  | 'logo___childWorkJson___logo___base'
  | 'logo___childWorkJson___logo___ext'
  | 'logo___childWorkJson___logo___name'
  | 'logo___childWorkJson___logo___relativeDirectory'
  | 'logo___childWorkJson___logo___dev'
  | 'logo___childWorkJson___logo___mode'
  | 'logo___childWorkJson___logo___nlink'
  | 'logo___childWorkJson___logo___uid'
  | 'logo___childWorkJson___logo___gid'
  | 'logo___childWorkJson___logo___rdev'
  | 'logo___childWorkJson___logo___ino'
  | 'logo___childWorkJson___logo___atimeMs'
  | 'logo___childWorkJson___logo___mtimeMs'
  | 'logo___childWorkJson___logo___ctimeMs'
  | 'logo___childWorkJson___logo___atime'
  | 'logo___childWorkJson___logo___mtime'
  | 'logo___childWorkJson___logo___ctime'
  | 'logo___childWorkJson___logo___birthtime'
  | 'logo___childWorkJson___logo___birthtimeMs'
  | 'logo___childWorkJson___logo___blksize'
  | 'logo___childWorkJson___logo___blocks'
  | 'logo___childWorkJson___logo___url'
  | 'logo___childWorkJson___logo___publicURL'
  | 'logo___childWorkJson___logo___childrenImageSharp'
  | 'logo___childWorkJson___logo___childrenWorkJson'
  | 'logo___childWorkJson___logo___childrenSkillsJson'
  | 'logo___childWorkJson___logo___childrenSeJson'
  | 'logo___childWorkJson___logo___childrenRuJson'
  | 'logo___childWorkJson___logo___childrenLocale'
  | 'logo___childWorkJson___logo___childrenHuJson'
  | 'logo___childWorkJson___logo___childrenFrJson'
  | 'logo___childWorkJson___logo___childrenFlagsJson'
  | 'logo___childWorkJson___logo___childrenEtJson'
  | 'logo___childWorkJson___logo___childrenEsJson'
  | 'logo___childWorkJson___logo___childrenEnJson'
  | 'logo___childWorkJson___logo___childrenEducationJson'
  | 'logo___childWorkJson___logo___childrenDeJson'
  | 'logo___childWorkJson___logo___id'
  | 'logo___childWorkJson___logo___children'
  | 'logo___childWorkJson___name'
  | 'logo___childWorkJson___dates'
  | 'logo___childWorkJson___description'
  | 'logo___childrenSkillsJson'
  | 'logo___childrenSkillsJson___id'
  | 'logo___childrenSkillsJson___parent___id'
  | 'logo___childrenSkillsJson___parent___children'
  | 'logo___childrenSkillsJson___children'
  | 'logo___childrenSkillsJson___children___id'
  | 'logo___childrenSkillsJson___children___children'
  | 'logo___childrenSkillsJson___internal___content'
  | 'logo___childrenSkillsJson___internal___contentDigest'
  | 'logo___childrenSkillsJson___internal___description'
  | 'logo___childrenSkillsJson___internal___fieldOwners'
  | 'logo___childrenSkillsJson___internal___ignoreType'
  | 'logo___childrenSkillsJson___internal___mediaType'
  | 'logo___childrenSkillsJson___internal___owner'
  | 'logo___childrenSkillsJson___internal___type'
  | 'logo___childrenSkillsJson___title'
  | 'logo___childrenSkillsJson___skillItems'
  | 'logo___childrenSkillsJson___skillItems___name'
  | 'logo___childrenSkillsJson___skillItems___extra'
  | 'logo___childrenSkillsJson___skillItems___subSkills'
  | 'logo___childrenSkillsJson___skillItems___href'
  | 'logo___childSkillsJson___id'
  | 'logo___childSkillsJson___parent___id'
  | 'logo___childSkillsJson___parent___children'
  | 'logo___childSkillsJson___children'
  | 'logo___childSkillsJson___children___id'
  | 'logo___childSkillsJson___children___children'
  | 'logo___childSkillsJson___internal___content'
  | 'logo___childSkillsJson___internal___contentDigest'
  | 'logo___childSkillsJson___internal___description'
  | 'logo___childSkillsJson___internal___fieldOwners'
  | 'logo___childSkillsJson___internal___ignoreType'
  | 'logo___childSkillsJson___internal___mediaType'
  | 'logo___childSkillsJson___internal___owner'
  | 'logo___childSkillsJson___internal___type'
  | 'logo___childSkillsJson___title'
  | 'logo___childSkillsJson___skillItems'
  | 'logo___childSkillsJson___skillItems___name'
  | 'logo___childSkillsJson___skillItems___extra'
  | 'logo___childSkillsJson___skillItems___subSkills'
  | 'logo___childSkillsJson___skillItems___href'
  | 'logo___childrenSeJson'
  | 'logo___childrenSeJson___id'
  | 'logo___childrenSeJson___parent___id'
  | 'logo___childrenSeJson___parent___children'
  | 'logo___childrenSeJson___children'
  | 'logo___childrenSeJson___children___id'
  | 'logo___childrenSeJson___children___children'
  | 'logo___childrenSeJson___internal___content'
  | 'logo___childrenSeJson___internal___contentDigest'
  | 'logo___childrenSeJson___internal___description'
  | 'logo___childrenSeJson___internal___fieldOwners'
  | 'logo___childrenSeJson___internal___ignoreType'
  | 'logo___childrenSeJson___internal___mediaType'
  | 'logo___childrenSeJson___internal___owner'
  | 'logo___childrenSeJson___internal___type'
  | 'logo___childrenSeJson___Banner___SoftwareDeveloper'
  | 'logo___childSeJson___id'
  | 'logo___childSeJson___parent___id'
  | 'logo___childSeJson___parent___children'
  | 'logo___childSeJson___children'
  | 'logo___childSeJson___children___id'
  | 'logo___childSeJson___children___children'
  | 'logo___childSeJson___internal___content'
  | 'logo___childSeJson___internal___contentDigest'
  | 'logo___childSeJson___internal___description'
  | 'logo___childSeJson___internal___fieldOwners'
  | 'logo___childSeJson___internal___ignoreType'
  | 'logo___childSeJson___internal___mediaType'
  | 'logo___childSeJson___internal___owner'
  | 'logo___childSeJson___internal___type'
  | 'logo___childSeJson___Banner___SoftwareDeveloper'
  | 'logo___childrenRuJson'
  | 'logo___childrenRuJson___id'
  | 'logo___childrenRuJson___parent___id'
  | 'logo___childrenRuJson___parent___children'
  | 'logo___childrenRuJson___children'
  | 'logo___childrenRuJson___children___id'
  | 'logo___childrenRuJson___children___children'
  | 'logo___childrenRuJson___internal___content'
  | 'logo___childrenRuJson___internal___contentDigest'
  | 'logo___childrenRuJson___internal___description'
  | 'logo___childrenRuJson___internal___fieldOwners'
  | 'logo___childrenRuJson___internal___ignoreType'
  | 'logo___childrenRuJson___internal___mediaType'
  | 'logo___childrenRuJson___internal___owner'
  | 'logo___childrenRuJson___internal___type'
  | 'logo___childrenRuJson___About___AboutMe'
  | 'logo___childrenRuJson___About___Description'
  | 'logo___childrenRuJson___About___PhotoDescription'
  | 'logo___childrenRuJson___About___ViewCV'
  | 'logo___childrenRuJson___Acknowledgements'
  | 'logo___childrenRuJson___Banner___DexterSibirtsev'
  | 'logo___childrenRuJson___Banner___Experience'
  | 'logo___childrenRuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenRuJson___Banner___SoftwareDeveloper'
  | 'logo___childrenRuJson___Blog___Blog'
  | 'logo___childrenRuJson___Contact___Contact'
  | 'logo___childrenRuJson___Contact___GetInTouch'
  | 'logo___childrenRuJson___Contact___SendEmail'
  | 'logo___childrenRuJson___Education___Description'
  | 'logo___childrenRuJson___Education___Education'
  | 'logo___childrenRuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenRuJson___PageLinks___Acknowledgements'
  | 'logo___childrenRuJson___PageLinks___Home'
  | 'logo___childrenRuJson___SectionButtons___About'
  | 'logo___childrenRuJson___SectionButtons___Blog'
  | 'logo___childrenRuJson___SectionButtons___Contact'
  | 'logo___childrenRuJson___SectionButtons___Experience'
  | 'logo___childrenRuJson___SectionButtons___Skills'
  | 'logo___childrenRuJson___Skills___Overview'
  | 'logo___childrenRuJson___Skills___Skills'
  | 'logo___childrenRuJson___Work___Work'
  | 'logo___childRuJson___id'
  | 'logo___childRuJson___parent___id'
  | 'logo___childRuJson___parent___children'
  | 'logo___childRuJson___children'
  | 'logo___childRuJson___children___id'
  | 'logo___childRuJson___children___children'
  | 'logo___childRuJson___internal___content'
  | 'logo___childRuJson___internal___contentDigest'
  | 'logo___childRuJson___internal___description'
  | 'logo___childRuJson___internal___fieldOwners'
  | 'logo___childRuJson___internal___ignoreType'
  | 'logo___childRuJson___internal___mediaType'
  | 'logo___childRuJson___internal___owner'
  | 'logo___childRuJson___internal___type'
  | 'logo___childRuJson___About___AboutMe'
  | 'logo___childRuJson___About___Description'
  | 'logo___childRuJson___About___PhotoDescription'
  | 'logo___childRuJson___About___ViewCV'
  | 'logo___childRuJson___Acknowledgements'
  | 'logo___childRuJson___Banner___DexterSibirtsev'
  | 'logo___childRuJson___Banner___Experience'
  | 'logo___childRuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childRuJson___Banner___SoftwareDeveloper'
  | 'logo___childRuJson___Blog___Blog'
  | 'logo___childRuJson___Contact___Contact'
  | 'logo___childRuJson___Contact___GetInTouch'
  | 'logo___childRuJson___Contact___SendEmail'
  | 'logo___childRuJson___Education___Description'
  | 'logo___childRuJson___Education___Education'
  | 'logo___childRuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childRuJson___PageLinks___Acknowledgements'
  | 'logo___childRuJson___PageLinks___Home'
  | 'logo___childRuJson___SectionButtons___About'
  | 'logo___childRuJson___SectionButtons___Blog'
  | 'logo___childRuJson___SectionButtons___Contact'
  | 'logo___childRuJson___SectionButtons___Experience'
  | 'logo___childRuJson___SectionButtons___Skills'
  | 'logo___childRuJson___Skills___Overview'
  | 'logo___childRuJson___Skills___Skills'
  | 'logo___childRuJson___Work___Work'
  | 'logo___childrenLocale'
  | 'logo___childrenLocale___id'
  | 'logo___childrenLocale___parent___id'
  | 'logo___childrenLocale___parent___children'
  | 'logo___childrenLocale___children'
  | 'logo___childrenLocale___children___id'
  | 'logo___childrenLocale___children___children'
  | 'logo___childrenLocale___internal___content'
  | 'logo___childrenLocale___internal___contentDigest'
  | 'logo___childrenLocale___internal___description'
  | 'logo___childrenLocale___internal___fieldOwners'
  | 'logo___childrenLocale___internal___ignoreType'
  | 'logo___childrenLocale___internal___mediaType'
  | 'logo___childrenLocale___internal___owner'
  | 'logo___childrenLocale___internal___type'
  | 'logo___childrenLocale___language'
  | 'logo___childrenLocale___ns'
  | 'logo___childrenLocale___data'
  | 'logo___childrenLocale___fileAbsolutePath'
  | 'logo___childLocale___id'
  | 'logo___childLocale___parent___id'
  | 'logo___childLocale___parent___children'
  | 'logo___childLocale___children'
  | 'logo___childLocale___children___id'
  | 'logo___childLocale___children___children'
  | 'logo___childLocale___internal___content'
  | 'logo___childLocale___internal___contentDigest'
  | 'logo___childLocale___internal___description'
  | 'logo___childLocale___internal___fieldOwners'
  | 'logo___childLocale___internal___ignoreType'
  | 'logo___childLocale___internal___mediaType'
  | 'logo___childLocale___internal___owner'
  | 'logo___childLocale___internal___type'
  | 'logo___childLocale___language'
  | 'logo___childLocale___ns'
  | 'logo___childLocale___data'
  | 'logo___childLocale___fileAbsolutePath'
  | 'logo___childrenHuJson'
  | 'logo___childrenHuJson___id'
  | 'logo___childrenHuJson___parent___id'
  | 'logo___childrenHuJson___parent___children'
  | 'logo___childrenHuJson___children'
  | 'logo___childrenHuJson___children___id'
  | 'logo___childrenHuJson___children___children'
  | 'logo___childrenHuJson___internal___content'
  | 'logo___childrenHuJson___internal___contentDigest'
  | 'logo___childrenHuJson___internal___description'
  | 'logo___childrenHuJson___internal___fieldOwners'
  | 'logo___childrenHuJson___internal___ignoreType'
  | 'logo___childrenHuJson___internal___mediaType'
  | 'logo___childrenHuJson___internal___owner'
  | 'logo___childrenHuJson___internal___type'
  | 'logo___childrenHuJson___About___AboutMe'
  | 'logo___childrenHuJson___About___Description'
  | 'logo___childrenHuJson___About___PhotoDescription'
  | 'logo___childrenHuJson___About___ViewCV'
  | 'logo___childrenHuJson___Acknowledgements'
  | 'logo___childrenHuJson___Banner___DexterSibirtsev'
  | 'logo___childrenHuJson___Banner___Experience'
  | 'logo___childrenHuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenHuJson___Banner___SoftwareDeveloper'
  | 'logo___childrenHuJson___Blog___Blog'
  | 'logo___childrenHuJson___Contact___Contact'
  | 'logo___childrenHuJson___Contact___GetInTouch'
  | 'logo___childrenHuJson___Contact___SendEmail'
  | 'logo___childrenHuJson___Education___Description'
  | 'logo___childrenHuJson___Education___Education'
  | 'logo___childrenHuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenHuJson___PageLinks___Acknowledgements'
  | 'logo___childrenHuJson___PageLinks___Home'
  | 'logo___childrenHuJson___SectionButtons___About'
  | 'logo___childrenHuJson___SectionButtons___Blog'
  | 'logo___childrenHuJson___SectionButtons___Contact'
  | 'logo___childrenHuJson___SectionButtons___Experience'
  | 'logo___childrenHuJson___SectionButtons___Skills'
  | 'logo___childrenHuJson___Skills___Overview'
  | 'logo___childrenHuJson___Skills___Skills'
  | 'logo___childrenHuJson___Work___Work'
  | 'logo___childHuJson___id'
  | 'logo___childHuJson___parent___id'
  | 'logo___childHuJson___parent___children'
  | 'logo___childHuJson___children'
  | 'logo___childHuJson___children___id'
  | 'logo___childHuJson___children___children'
  | 'logo___childHuJson___internal___content'
  | 'logo___childHuJson___internal___contentDigest'
  | 'logo___childHuJson___internal___description'
  | 'logo___childHuJson___internal___fieldOwners'
  | 'logo___childHuJson___internal___ignoreType'
  | 'logo___childHuJson___internal___mediaType'
  | 'logo___childHuJson___internal___owner'
  | 'logo___childHuJson___internal___type'
  | 'logo___childHuJson___About___AboutMe'
  | 'logo___childHuJson___About___Description'
  | 'logo___childHuJson___About___PhotoDescription'
  | 'logo___childHuJson___About___ViewCV'
  | 'logo___childHuJson___Acknowledgements'
  | 'logo___childHuJson___Banner___DexterSibirtsev'
  | 'logo___childHuJson___Banner___Experience'
  | 'logo___childHuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childHuJson___Banner___SoftwareDeveloper'
  | 'logo___childHuJson___Blog___Blog'
  | 'logo___childHuJson___Contact___Contact'
  | 'logo___childHuJson___Contact___GetInTouch'
  | 'logo___childHuJson___Contact___SendEmail'
  | 'logo___childHuJson___Education___Description'
  | 'logo___childHuJson___Education___Education'
  | 'logo___childHuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childHuJson___PageLinks___Acknowledgements'
  | 'logo___childHuJson___PageLinks___Home'
  | 'logo___childHuJson___SectionButtons___About'
  | 'logo___childHuJson___SectionButtons___Blog'
  | 'logo___childHuJson___SectionButtons___Contact'
  | 'logo___childHuJson___SectionButtons___Experience'
  | 'logo___childHuJson___SectionButtons___Skills'
  | 'logo___childHuJson___Skills___Overview'
  | 'logo___childHuJson___Skills___Skills'
  | 'logo___childHuJson___Work___Work'
  | 'logo___childrenFrJson'
  | 'logo___childrenFrJson___id'
  | 'logo___childrenFrJson___parent___id'
  | 'logo___childrenFrJson___parent___children'
  | 'logo___childrenFrJson___children'
  | 'logo___childrenFrJson___children___id'
  | 'logo___childrenFrJson___children___children'
  | 'logo___childrenFrJson___internal___content'
  | 'logo___childrenFrJson___internal___contentDigest'
  | 'logo___childrenFrJson___internal___description'
  | 'logo___childrenFrJson___internal___fieldOwners'
  | 'logo___childrenFrJson___internal___ignoreType'
  | 'logo___childrenFrJson___internal___mediaType'
  | 'logo___childrenFrJson___internal___owner'
  | 'logo___childrenFrJson___internal___type'
  | 'logo___childrenFrJson___About___AboutMe'
  | 'logo___childrenFrJson___About___Description'
  | 'logo___childrenFrJson___About___PhotoDescription'
  | 'logo___childrenFrJson___About___ViewCV'
  | 'logo___childrenFrJson___Acknowledgements'
  | 'logo___childrenFrJson___Banner___DexterSibirtsev'
  | 'logo___childrenFrJson___Banner___Experience'
  | 'logo___childrenFrJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenFrJson___Banner___SoftwareDeveloper'
  | 'logo___childrenFrJson___Blog___Blog'
  | 'logo___childrenFrJson___Contact___Contact'
  | 'logo___childrenFrJson___Contact___GetInTouch'
  | 'logo___childrenFrJson___Contact___SendEmail'
  | 'logo___childrenFrJson___Education___Description'
  | 'logo___childrenFrJson___Education___Education'
  | 'logo___childrenFrJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenFrJson___PageLinks___Acknowledgements'
  | 'logo___childrenFrJson___PageLinks___Home'
  | 'logo___childrenFrJson___SectionButtons___About'
  | 'logo___childrenFrJson___SectionButtons___Blog'
  | 'logo___childrenFrJson___SectionButtons___Contact'
  | 'logo___childrenFrJson___SectionButtons___Experience'
  | 'logo___childrenFrJson___SectionButtons___Skills'
  | 'logo___childrenFrJson___Skills___Overview'
  | 'logo___childrenFrJson___Skills___Skills'
  | 'logo___childrenFrJson___Work___Work'
  | 'logo___childFrJson___id'
  | 'logo___childFrJson___parent___id'
  | 'logo___childFrJson___parent___children'
  | 'logo___childFrJson___children'
  | 'logo___childFrJson___children___id'
  | 'logo___childFrJson___children___children'
  | 'logo___childFrJson___internal___content'
  | 'logo___childFrJson___internal___contentDigest'
  | 'logo___childFrJson___internal___description'
  | 'logo___childFrJson___internal___fieldOwners'
  | 'logo___childFrJson___internal___ignoreType'
  | 'logo___childFrJson___internal___mediaType'
  | 'logo___childFrJson___internal___owner'
  | 'logo___childFrJson___internal___type'
  | 'logo___childFrJson___About___AboutMe'
  | 'logo___childFrJson___About___Description'
  | 'logo___childFrJson___About___PhotoDescription'
  | 'logo___childFrJson___About___ViewCV'
  | 'logo___childFrJson___Acknowledgements'
  | 'logo___childFrJson___Banner___DexterSibirtsev'
  | 'logo___childFrJson___Banner___Experience'
  | 'logo___childFrJson___Banner___HelloIAmAProgrammer'
  | 'logo___childFrJson___Banner___SoftwareDeveloper'
  | 'logo___childFrJson___Blog___Blog'
  | 'logo___childFrJson___Contact___Contact'
  | 'logo___childFrJson___Contact___GetInTouch'
  | 'logo___childFrJson___Contact___SendEmail'
  | 'logo___childFrJson___Education___Description'
  | 'logo___childFrJson___Education___Education'
  | 'logo___childFrJson___Experience___TranslationsUnderConstruction'
  | 'logo___childFrJson___PageLinks___Acknowledgements'
  | 'logo___childFrJson___PageLinks___Home'
  | 'logo___childFrJson___SectionButtons___About'
  | 'logo___childFrJson___SectionButtons___Blog'
  | 'logo___childFrJson___SectionButtons___Contact'
  | 'logo___childFrJson___SectionButtons___Experience'
  | 'logo___childFrJson___SectionButtons___Skills'
  | 'logo___childFrJson___Skills___Overview'
  | 'logo___childFrJson___Skills___Skills'
  | 'logo___childFrJson___Work___Work'
  | 'logo___childrenFlagsJson'
  | 'logo___childrenFlagsJson___id'
  | 'logo___childrenFlagsJson___parent___id'
  | 'logo___childrenFlagsJson___parent___children'
  | 'logo___childrenFlagsJson___children'
  | 'logo___childrenFlagsJson___children___id'
  | 'logo___childrenFlagsJson___children___children'
  | 'logo___childrenFlagsJson___internal___content'
  | 'logo___childrenFlagsJson___internal___contentDigest'
  | 'logo___childrenFlagsJson___internal___description'
  | 'logo___childrenFlagsJson___internal___fieldOwners'
  | 'logo___childrenFlagsJson___internal___ignoreType'
  | 'logo___childrenFlagsJson___internal___mediaType'
  | 'logo___childrenFlagsJson___internal___owner'
  | 'logo___childrenFlagsJson___internal___type'
  | 'logo___childrenFlagsJson___code'
  | 'logo___childrenFlagsJson___name'
  | 'logo___childrenFlagsJson___src___sourceInstanceName'
  | 'logo___childrenFlagsJson___src___absolutePath'
  | 'logo___childrenFlagsJson___src___relativePath'
  | 'logo___childrenFlagsJson___src___extension'
  | 'logo___childrenFlagsJson___src___size'
  | 'logo___childrenFlagsJson___src___prettySize'
  | 'logo___childrenFlagsJson___src___modifiedTime'
  | 'logo___childrenFlagsJson___src___accessTime'
  | 'logo___childrenFlagsJson___src___changeTime'
  | 'logo___childrenFlagsJson___src___birthTime'
  | 'logo___childrenFlagsJson___src___root'
  | 'logo___childrenFlagsJson___src___dir'
  | 'logo___childrenFlagsJson___src___base'
  | 'logo___childrenFlagsJson___src___ext'
  | 'logo___childrenFlagsJson___src___name'
  | 'logo___childrenFlagsJson___src___relativeDirectory'
  | 'logo___childrenFlagsJson___src___dev'
  | 'logo___childrenFlagsJson___src___mode'
  | 'logo___childrenFlagsJson___src___nlink'
  | 'logo___childrenFlagsJson___src___uid'
  | 'logo___childrenFlagsJson___src___gid'
  | 'logo___childrenFlagsJson___src___rdev'
  | 'logo___childrenFlagsJson___src___ino'
  | 'logo___childrenFlagsJson___src___atimeMs'
  | 'logo___childrenFlagsJson___src___mtimeMs'
  | 'logo___childrenFlagsJson___src___ctimeMs'
  | 'logo___childrenFlagsJson___src___atime'
  | 'logo___childrenFlagsJson___src___mtime'
  | 'logo___childrenFlagsJson___src___ctime'
  | 'logo___childrenFlagsJson___src___birthtime'
  | 'logo___childrenFlagsJson___src___birthtimeMs'
  | 'logo___childrenFlagsJson___src___blksize'
  | 'logo___childrenFlagsJson___src___blocks'
  | 'logo___childrenFlagsJson___src___url'
  | 'logo___childrenFlagsJson___src___publicURL'
  | 'logo___childrenFlagsJson___src___childrenImageSharp'
  | 'logo___childrenFlagsJson___src___childrenWorkJson'
  | 'logo___childrenFlagsJson___src___childrenSkillsJson'
  | 'logo___childrenFlagsJson___src___childrenSeJson'
  | 'logo___childrenFlagsJson___src___childrenRuJson'
  | 'logo___childrenFlagsJson___src___childrenLocale'
  | 'logo___childrenFlagsJson___src___childrenHuJson'
  | 'logo___childrenFlagsJson___src___childrenFrJson'
  | 'logo___childrenFlagsJson___src___childrenFlagsJson'
  | 'logo___childrenFlagsJson___src___childrenEtJson'
  | 'logo___childrenFlagsJson___src___childrenEsJson'
  | 'logo___childrenFlagsJson___src___childrenEnJson'
  | 'logo___childrenFlagsJson___src___childrenEducationJson'
  | 'logo___childrenFlagsJson___src___childrenDeJson'
  | 'logo___childrenFlagsJson___src___id'
  | 'logo___childrenFlagsJson___src___children'
  | 'logo___childFlagsJson___id'
  | 'logo___childFlagsJson___parent___id'
  | 'logo___childFlagsJson___parent___children'
  | 'logo___childFlagsJson___children'
  | 'logo___childFlagsJson___children___id'
  | 'logo___childFlagsJson___children___children'
  | 'logo___childFlagsJson___internal___content'
  | 'logo___childFlagsJson___internal___contentDigest'
  | 'logo___childFlagsJson___internal___description'
  | 'logo___childFlagsJson___internal___fieldOwners'
  | 'logo___childFlagsJson___internal___ignoreType'
  | 'logo___childFlagsJson___internal___mediaType'
  | 'logo___childFlagsJson___internal___owner'
  | 'logo___childFlagsJson___internal___type'
  | 'logo___childFlagsJson___code'
  | 'logo___childFlagsJson___name'
  | 'logo___childFlagsJson___src___sourceInstanceName'
  | 'logo___childFlagsJson___src___absolutePath'
  | 'logo___childFlagsJson___src___relativePath'
  | 'logo___childFlagsJson___src___extension'
  | 'logo___childFlagsJson___src___size'
  | 'logo___childFlagsJson___src___prettySize'
  | 'logo___childFlagsJson___src___modifiedTime'
  | 'logo___childFlagsJson___src___accessTime'
  | 'logo___childFlagsJson___src___changeTime'
  | 'logo___childFlagsJson___src___birthTime'
  | 'logo___childFlagsJson___src___root'
  | 'logo___childFlagsJson___src___dir'
  | 'logo___childFlagsJson___src___base'
  | 'logo___childFlagsJson___src___ext'
  | 'logo___childFlagsJson___src___name'
  | 'logo___childFlagsJson___src___relativeDirectory'
  | 'logo___childFlagsJson___src___dev'
  | 'logo___childFlagsJson___src___mode'
  | 'logo___childFlagsJson___src___nlink'
  | 'logo___childFlagsJson___src___uid'
  | 'logo___childFlagsJson___src___gid'
  | 'logo___childFlagsJson___src___rdev'
  | 'logo___childFlagsJson___src___ino'
  | 'logo___childFlagsJson___src___atimeMs'
  | 'logo___childFlagsJson___src___mtimeMs'
  | 'logo___childFlagsJson___src___ctimeMs'
  | 'logo___childFlagsJson___src___atime'
  | 'logo___childFlagsJson___src___mtime'
  | 'logo___childFlagsJson___src___ctime'
  | 'logo___childFlagsJson___src___birthtime'
  | 'logo___childFlagsJson___src___birthtimeMs'
  | 'logo___childFlagsJson___src___blksize'
  | 'logo___childFlagsJson___src___blocks'
  | 'logo___childFlagsJson___src___url'
  | 'logo___childFlagsJson___src___publicURL'
  | 'logo___childFlagsJson___src___childrenImageSharp'
  | 'logo___childFlagsJson___src___childrenWorkJson'
  | 'logo___childFlagsJson___src___childrenSkillsJson'
  | 'logo___childFlagsJson___src___childrenSeJson'
  | 'logo___childFlagsJson___src___childrenRuJson'
  | 'logo___childFlagsJson___src___childrenLocale'
  | 'logo___childFlagsJson___src___childrenHuJson'
  | 'logo___childFlagsJson___src___childrenFrJson'
  | 'logo___childFlagsJson___src___childrenFlagsJson'
  | 'logo___childFlagsJson___src___childrenEtJson'
  | 'logo___childFlagsJson___src___childrenEsJson'
  | 'logo___childFlagsJson___src___childrenEnJson'
  | 'logo___childFlagsJson___src___childrenEducationJson'
  | 'logo___childFlagsJson___src___childrenDeJson'
  | 'logo___childFlagsJson___src___id'
  | 'logo___childFlagsJson___src___children'
  | 'logo___childrenEtJson'
  | 'logo___childrenEtJson___id'
  | 'logo___childrenEtJson___parent___id'
  | 'logo___childrenEtJson___parent___children'
  | 'logo___childrenEtJson___children'
  | 'logo___childrenEtJson___children___id'
  | 'logo___childrenEtJson___children___children'
  | 'logo___childrenEtJson___internal___content'
  | 'logo___childrenEtJson___internal___contentDigest'
  | 'logo___childrenEtJson___internal___description'
  | 'logo___childrenEtJson___internal___fieldOwners'
  | 'logo___childrenEtJson___internal___ignoreType'
  | 'logo___childrenEtJson___internal___mediaType'
  | 'logo___childrenEtJson___internal___owner'
  | 'logo___childrenEtJson___internal___type'
  | 'logo___childrenEtJson___About___AboutMe'
  | 'logo___childrenEtJson___About___Description'
  | 'logo___childrenEtJson___About___PhotoDescription'
  | 'logo___childrenEtJson___About___ViewCV'
  | 'logo___childrenEtJson___Acknowledgements'
  | 'logo___childrenEtJson___Banner___DexterSibirtsev'
  | 'logo___childrenEtJson___Banner___Experience'
  | 'logo___childrenEtJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenEtJson___Banner___SoftwareDeveloper'
  | 'logo___childrenEtJson___Blog___Blog'
  | 'logo___childrenEtJson___Contact___Contact'
  | 'logo___childrenEtJson___Contact___GetInTouch'
  | 'logo___childrenEtJson___Contact___SendEmail'
  | 'logo___childrenEtJson___Education___Description'
  | 'logo___childrenEtJson___Education___Education'
  | 'logo___childrenEtJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenEtJson___PageLinks___Acknowledgements'
  | 'logo___childrenEtJson___PageLinks___Home'
  | 'logo___childrenEtJson___SectionButtons___About'
  | 'logo___childrenEtJson___SectionButtons___Blog'
  | 'logo___childrenEtJson___SectionButtons___Contact'
  | 'logo___childrenEtJson___SectionButtons___Experience'
  | 'logo___childrenEtJson___SectionButtons___Skills'
  | 'logo___childrenEtJson___Skills___Overview'
  | 'logo___childrenEtJson___Skills___Skills'
  | 'logo___childrenEtJson___Work___Work'
  | 'logo___childEtJson___id'
  | 'logo___childEtJson___parent___id'
  | 'logo___childEtJson___parent___children'
  | 'logo___childEtJson___children'
  | 'logo___childEtJson___children___id'
  | 'logo___childEtJson___children___children'
  | 'logo___childEtJson___internal___content'
  | 'logo___childEtJson___internal___contentDigest'
  | 'logo___childEtJson___internal___description'
  | 'logo___childEtJson___internal___fieldOwners'
  | 'logo___childEtJson___internal___ignoreType'
  | 'logo___childEtJson___internal___mediaType'
  | 'logo___childEtJson___internal___owner'
  | 'logo___childEtJson___internal___type'
  | 'logo___childEtJson___About___AboutMe'
  | 'logo___childEtJson___About___Description'
  | 'logo___childEtJson___About___PhotoDescription'
  | 'logo___childEtJson___About___ViewCV'
  | 'logo___childEtJson___Acknowledgements'
  | 'logo___childEtJson___Banner___DexterSibirtsev'
  | 'logo___childEtJson___Banner___Experience'
  | 'logo___childEtJson___Banner___HelloIAmAProgrammer'
  | 'logo___childEtJson___Banner___SoftwareDeveloper'
  | 'logo___childEtJson___Blog___Blog'
  | 'logo___childEtJson___Contact___Contact'
  | 'logo___childEtJson___Contact___GetInTouch'
  | 'logo___childEtJson___Contact___SendEmail'
  | 'logo___childEtJson___Education___Description'
  | 'logo___childEtJson___Education___Education'
  | 'logo___childEtJson___Experience___TranslationsUnderConstruction'
  | 'logo___childEtJson___PageLinks___Acknowledgements'
  | 'logo___childEtJson___PageLinks___Home'
  | 'logo___childEtJson___SectionButtons___About'
  | 'logo___childEtJson___SectionButtons___Blog'
  | 'logo___childEtJson___SectionButtons___Contact'
  | 'logo___childEtJson___SectionButtons___Experience'
  | 'logo___childEtJson___SectionButtons___Skills'
  | 'logo___childEtJson___Skills___Overview'
  | 'logo___childEtJson___Skills___Skills'
  | 'logo___childEtJson___Work___Work'
  | 'logo___childrenEsJson'
  | 'logo___childrenEsJson___id'
  | 'logo___childrenEsJson___parent___id'
  | 'logo___childrenEsJson___parent___children'
  | 'logo___childrenEsJson___children'
  | 'logo___childrenEsJson___children___id'
  | 'logo___childrenEsJson___children___children'
  | 'logo___childrenEsJson___internal___content'
  | 'logo___childrenEsJson___internal___contentDigest'
  | 'logo___childrenEsJson___internal___description'
  | 'logo___childrenEsJson___internal___fieldOwners'
  | 'logo___childrenEsJson___internal___ignoreType'
  | 'logo___childrenEsJson___internal___mediaType'
  | 'logo___childrenEsJson___internal___owner'
  | 'logo___childrenEsJson___internal___type'
  | 'logo___childrenEsJson___About___AboutMe'
  | 'logo___childrenEsJson___About___Description'
  | 'logo___childrenEsJson___About___PhotoDescription'
  | 'logo___childrenEsJson___About___ViewCV'
  | 'logo___childrenEsJson___Acknowledgements'
  | 'logo___childrenEsJson___Banner___DexterSibirtsev'
  | 'logo___childrenEsJson___Banner___Experience'
  | 'logo___childrenEsJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenEsJson___Banner___SoftwareDeveloper'
  | 'logo___childrenEsJson___Blog___Blog'
  | 'logo___childrenEsJson___Contact___Contact'
  | 'logo___childrenEsJson___Contact___GetInTouch'
  | 'logo___childrenEsJson___Contact___SendEmail'
  | 'logo___childrenEsJson___Education___Description'
  | 'logo___childrenEsJson___Education___Education'
  | 'logo___childrenEsJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenEsJson___PageLinks___Acknowledgements'
  | 'logo___childrenEsJson___PageLinks___Home'
  | 'logo___childrenEsJson___SectionButtons___About'
  | 'logo___childrenEsJson___SectionButtons___Blog'
  | 'logo___childrenEsJson___SectionButtons___Contact'
  | 'logo___childrenEsJson___SectionButtons___Experience'
  | 'logo___childrenEsJson___SectionButtons___Skills'
  | 'logo___childrenEsJson___Skills___Overview'
  | 'logo___childrenEsJson___Skills___Skills'
  | 'logo___childrenEsJson___Work___Work'
  | 'logo___childEsJson___id'
  | 'logo___childEsJson___parent___id'
  | 'logo___childEsJson___parent___children'
  | 'logo___childEsJson___children'
  | 'logo___childEsJson___children___id'
  | 'logo___childEsJson___children___children'
  | 'logo___childEsJson___internal___content'
  | 'logo___childEsJson___internal___contentDigest'
  | 'logo___childEsJson___internal___description'
  | 'logo___childEsJson___internal___fieldOwners'
  | 'logo___childEsJson___internal___ignoreType'
  | 'logo___childEsJson___internal___mediaType'
  | 'logo___childEsJson___internal___owner'
  | 'logo___childEsJson___internal___type'
  | 'logo___childEsJson___About___AboutMe'
  | 'logo___childEsJson___About___Description'
  | 'logo___childEsJson___About___PhotoDescription'
  | 'logo___childEsJson___About___ViewCV'
  | 'logo___childEsJson___Acknowledgements'
  | 'logo___childEsJson___Banner___DexterSibirtsev'
  | 'logo___childEsJson___Banner___Experience'
  | 'logo___childEsJson___Banner___HelloIAmAProgrammer'
  | 'logo___childEsJson___Banner___SoftwareDeveloper'
  | 'logo___childEsJson___Blog___Blog'
  | 'logo___childEsJson___Contact___Contact'
  | 'logo___childEsJson___Contact___GetInTouch'
  | 'logo___childEsJson___Contact___SendEmail'
  | 'logo___childEsJson___Education___Description'
  | 'logo___childEsJson___Education___Education'
  | 'logo___childEsJson___Experience___TranslationsUnderConstruction'
  | 'logo___childEsJson___PageLinks___Acknowledgements'
  | 'logo___childEsJson___PageLinks___Home'
  | 'logo___childEsJson___SectionButtons___About'
  | 'logo___childEsJson___SectionButtons___Blog'
  | 'logo___childEsJson___SectionButtons___Contact'
  | 'logo___childEsJson___SectionButtons___Experience'
  | 'logo___childEsJson___SectionButtons___Skills'
  | 'logo___childEsJson___Skills___Overview'
  | 'logo___childEsJson___Skills___Skills'
  | 'logo___childEsJson___Work___Work'
  | 'logo___childrenEnJson'
  | 'logo___childrenEnJson___id'
  | 'logo___childrenEnJson___parent___id'
  | 'logo___childrenEnJson___parent___children'
  | 'logo___childrenEnJson___children'
  | 'logo___childrenEnJson___children___id'
  | 'logo___childrenEnJson___children___children'
  | 'logo___childrenEnJson___internal___content'
  | 'logo___childrenEnJson___internal___contentDigest'
  | 'logo___childrenEnJson___internal___description'
  | 'logo___childrenEnJson___internal___fieldOwners'
  | 'logo___childrenEnJson___internal___ignoreType'
  | 'logo___childrenEnJson___internal___mediaType'
  | 'logo___childrenEnJson___internal___owner'
  | 'logo___childrenEnJson___internal___type'
  | 'logo___childrenEnJson___About___AboutMe'
  | 'logo___childrenEnJson___About___Description'
  | 'logo___childrenEnJson___About___PhotoDescription'
  | 'logo___childrenEnJson___About___ViewCV'
  | 'logo___childrenEnJson___Acknowledgements'
  | 'logo___childrenEnJson___Banner___DexterSibirtsev'
  | 'logo___childrenEnJson___Banner___Experience'
  | 'logo___childrenEnJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenEnJson___Banner___SoftwareDeveloper'
  | 'logo___childrenEnJson___Blog___Blog'
  | 'logo___childrenEnJson___Contact___Contact'
  | 'logo___childrenEnJson___Contact___GetInTouch'
  | 'logo___childrenEnJson___Contact___SendEmail'
  | 'logo___childrenEnJson___Education___Description'
  | 'logo___childrenEnJson___Education___Education'
  | 'logo___childrenEnJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenEnJson___PageLinks___Acknowledgements'
  | 'logo___childrenEnJson___PageLinks___Home'
  | 'logo___childrenEnJson___SectionButtons___About'
  | 'logo___childrenEnJson___SectionButtons___Blog'
  | 'logo___childrenEnJson___SectionButtons___Contact'
  | 'logo___childrenEnJson___SectionButtons___Experience'
  | 'logo___childrenEnJson___SectionButtons___Skills'
  | 'logo___childrenEnJson___Skills___Overview'
  | 'logo___childrenEnJson___Skills___Skills'
  | 'logo___childrenEnJson___Work___Work'
  | 'logo___childEnJson___id'
  | 'logo___childEnJson___parent___id'
  | 'logo___childEnJson___parent___children'
  | 'logo___childEnJson___children'
  | 'logo___childEnJson___children___id'
  | 'logo___childEnJson___children___children'
  | 'logo___childEnJson___internal___content'
  | 'logo___childEnJson___internal___contentDigest'
  | 'logo___childEnJson___internal___description'
  | 'logo___childEnJson___internal___fieldOwners'
  | 'logo___childEnJson___internal___ignoreType'
  | 'logo___childEnJson___internal___mediaType'
  | 'logo___childEnJson___internal___owner'
  | 'logo___childEnJson___internal___type'
  | 'logo___childEnJson___About___AboutMe'
  | 'logo___childEnJson___About___Description'
  | 'logo___childEnJson___About___PhotoDescription'
  | 'logo___childEnJson___About___ViewCV'
  | 'logo___childEnJson___Acknowledgements'
  | 'logo___childEnJson___Banner___DexterSibirtsev'
  | 'logo___childEnJson___Banner___Experience'
  | 'logo___childEnJson___Banner___HelloIAmAProgrammer'
  | 'logo___childEnJson___Banner___SoftwareDeveloper'
  | 'logo___childEnJson___Blog___Blog'
  | 'logo___childEnJson___Contact___Contact'
  | 'logo___childEnJson___Contact___GetInTouch'
  | 'logo___childEnJson___Contact___SendEmail'
  | 'logo___childEnJson___Education___Description'
  | 'logo___childEnJson___Education___Education'
  | 'logo___childEnJson___Experience___TranslationsUnderConstruction'
  | 'logo___childEnJson___PageLinks___Acknowledgements'
  | 'logo___childEnJson___PageLinks___Home'
  | 'logo___childEnJson___SectionButtons___About'
  | 'logo___childEnJson___SectionButtons___Blog'
  | 'logo___childEnJson___SectionButtons___Contact'
  | 'logo___childEnJson___SectionButtons___Experience'
  | 'logo___childEnJson___SectionButtons___Skills'
  | 'logo___childEnJson___Skills___Overview'
  | 'logo___childEnJson___Skills___Skills'
  | 'logo___childEnJson___Work___Work'
  | 'logo___childrenEducationJson'
  | 'logo___childrenEducationJson___id'
  | 'logo___childrenEducationJson___parent___id'
  | 'logo___childrenEducationJson___parent___children'
  | 'logo___childrenEducationJson___children'
  | 'logo___childrenEducationJson___children___id'
  | 'logo___childrenEducationJson___children___children'
  | 'logo___childrenEducationJson___internal___content'
  | 'logo___childrenEducationJson___internal___contentDigest'
  | 'logo___childrenEducationJson___internal___description'
  | 'logo___childrenEducationJson___internal___fieldOwners'
  | 'logo___childrenEducationJson___internal___ignoreType'
  | 'logo___childrenEducationJson___internal___mediaType'
  | 'logo___childrenEducationJson___internal___owner'
  | 'logo___childrenEducationJson___internal___type'
  | 'logo___childrenEducationJson___location'
  | 'logo___childrenEducationJson___locationFlag___sourceInstanceName'
  | 'logo___childrenEducationJson___locationFlag___absolutePath'
  | 'logo___childrenEducationJson___locationFlag___relativePath'
  | 'logo___childrenEducationJson___locationFlag___extension'
  | 'logo___childrenEducationJson___locationFlag___size'
  | 'logo___childrenEducationJson___locationFlag___prettySize'
  | 'logo___childrenEducationJson___locationFlag___modifiedTime'
  | 'logo___childrenEducationJson___locationFlag___accessTime'
  | 'logo___childrenEducationJson___locationFlag___changeTime'
  | 'logo___childrenEducationJson___locationFlag___birthTime'
  | 'logo___childrenEducationJson___locationFlag___root'
  | 'logo___childrenEducationJson___locationFlag___dir'
  | 'logo___childrenEducationJson___locationFlag___base'
  | 'logo___childrenEducationJson___locationFlag___ext'
  | 'logo___childrenEducationJson___locationFlag___name'
  | 'logo___childrenEducationJson___locationFlag___relativeDirectory'
  | 'logo___childrenEducationJson___locationFlag___dev'
  | 'logo___childrenEducationJson___locationFlag___mode'
  | 'logo___childrenEducationJson___locationFlag___nlink'
  | 'logo___childrenEducationJson___locationFlag___uid'
  | 'logo___childrenEducationJson___locationFlag___gid'
  | 'logo___childrenEducationJson___locationFlag___rdev'
  | 'logo___childrenEducationJson___locationFlag___ino'
  | 'logo___childrenEducationJson___locationFlag___atimeMs'
  | 'logo___childrenEducationJson___locationFlag___mtimeMs'
  | 'logo___childrenEducationJson___locationFlag___ctimeMs'
  | 'logo___childrenEducationJson___locationFlag___atime'
  | 'logo___childrenEducationJson___locationFlag___mtime'
  | 'logo___childrenEducationJson___locationFlag___ctime'
  | 'logo___childrenEducationJson___locationFlag___birthtime'
  | 'logo___childrenEducationJson___locationFlag___birthtimeMs'
  | 'logo___childrenEducationJson___locationFlag___blksize'
  | 'logo___childrenEducationJson___locationFlag___blocks'
  | 'logo___childrenEducationJson___locationFlag___url'
  | 'logo___childrenEducationJson___locationFlag___publicURL'
  | 'logo___childrenEducationJson___locationFlag___childrenImageSharp'
  | 'logo___childrenEducationJson___locationFlag___childrenWorkJson'
  | 'logo___childrenEducationJson___locationFlag___childrenSkillsJson'
  | 'logo___childrenEducationJson___locationFlag___childrenSeJson'
  | 'logo___childrenEducationJson___locationFlag___childrenRuJson'
  | 'logo___childrenEducationJson___locationFlag___childrenLocale'
  | 'logo___childrenEducationJson___locationFlag___childrenHuJson'
  | 'logo___childrenEducationJson___locationFlag___childrenFrJson'
  | 'logo___childrenEducationJson___locationFlag___childrenFlagsJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEtJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEsJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEnJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEducationJson'
  | 'logo___childrenEducationJson___locationFlag___childrenDeJson'
  | 'logo___childrenEducationJson___locationFlag___id'
  | 'logo___childrenEducationJson___locationFlag___children'
  | 'logo___childrenEducationJson___title'
  | 'logo___childrenEducationJson___logo___sourceInstanceName'
  | 'logo___childrenEducationJson___logo___absolutePath'
  | 'logo___childrenEducationJson___logo___relativePath'
  | 'logo___childrenEducationJson___logo___extension'
  | 'logo___childrenEducationJson___logo___size'
  | 'logo___childrenEducationJson___logo___prettySize'
  | 'logo___childrenEducationJson___logo___modifiedTime'
  | 'logo___childrenEducationJson___logo___accessTime'
  | 'logo___childrenEducationJson___logo___changeTime'
  | 'logo___childrenEducationJson___logo___birthTime'
  | 'logo___childrenEducationJson___logo___root'
  | 'logo___childrenEducationJson___logo___dir'
  | 'logo___childrenEducationJson___logo___base'
  | 'logo___childrenEducationJson___logo___ext'
  | 'logo___childrenEducationJson___logo___name'
  | 'logo___childrenEducationJson___logo___relativeDirectory'
  | 'logo___childrenEducationJson___logo___dev'
  | 'logo___childrenEducationJson___logo___mode'
  | 'logo___childrenEducationJson___logo___nlink'
  | 'logo___childrenEducationJson___logo___uid'
  | 'logo___childrenEducationJson___logo___gid'
  | 'logo___childrenEducationJson___logo___rdev'
  | 'logo___childrenEducationJson___logo___ino'
  | 'logo___childrenEducationJson___logo___atimeMs'
  | 'logo___childrenEducationJson___logo___mtimeMs'
  | 'logo___childrenEducationJson___logo___ctimeMs'
  | 'logo___childrenEducationJson___logo___atime'
  | 'logo___childrenEducationJson___logo___mtime'
  | 'logo___childrenEducationJson___logo___ctime'
  | 'logo___childrenEducationJson___logo___birthtime'
  | 'logo___childrenEducationJson___logo___birthtimeMs'
  | 'logo___childrenEducationJson___logo___blksize'
  | 'logo___childrenEducationJson___logo___blocks'
  | 'logo___childrenEducationJson___logo___url'
  | 'logo___childrenEducationJson___logo___publicURL'
  | 'logo___childrenEducationJson___logo___childrenImageSharp'
  | 'logo___childrenEducationJson___logo___childrenWorkJson'
  | 'logo___childrenEducationJson___logo___childrenSkillsJson'
  | 'logo___childrenEducationJson___logo___childrenSeJson'
  | 'logo___childrenEducationJson___logo___childrenRuJson'
  | 'logo___childrenEducationJson___logo___childrenLocale'
  | 'logo___childrenEducationJson___logo___childrenHuJson'
  | 'logo___childrenEducationJson___logo___childrenFrJson'
  | 'logo___childrenEducationJson___logo___childrenFlagsJson'
  | 'logo___childrenEducationJson___logo___childrenEtJson'
  | 'logo___childrenEducationJson___logo___childrenEsJson'
  | 'logo___childrenEducationJson___logo___childrenEnJson'
  | 'logo___childrenEducationJson___logo___childrenEducationJson'
  | 'logo___childrenEducationJson___logo___childrenDeJson'
  | 'logo___childrenEducationJson___logo___id'
  | 'logo___childrenEducationJson___logo___children'
  | 'logo___childrenEducationJson___name'
  | 'logo___childrenEducationJson___dates'
  | 'logo___childrenEducationJson___description'
  | 'logo___childEducationJson___id'
  | 'logo___childEducationJson___parent___id'
  | 'logo___childEducationJson___parent___children'
  | 'logo___childEducationJson___children'
  | 'logo___childEducationJson___children___id'
  | 'logo___childEducationJson___children___children'
  | 'logo___childEducationJson___internal___content'
  | 'logo___childEducationJson___internal___contentDigest'
  | 'logo___childEducationJson___internal___description'
  | 'logo___childEducationJson___internal___fieldOwners'
  | 'logo___childEducationJson___internal___ignoreType'
  | 'logo___childEducationJson___internal___mediaType'
  | 'logo___childEducationJson___internal___owner'
  | 'logo___childEducationJson___internal___type'
  | 'logo___childEducationJson___location'
  | 'logo___childEducationJson___locationFlag___sourceInstanceName'
  | 'logo___childEducationJson___locationFlag___absolutePath'
  | 'logo___childEducationJson___locationFlag___relativePath'
  | 'logo___childEducationJson___locationFlag___extension'
  | 'logo___childEducationJson___locationFlag___size'
  | 'logo___childEducationJson___locationFlag___prettySize'
  | 'logo___childEducationJson___locationFlag___modifiedTime'
  | 'logo___childEducationJson___locationFlag___accessTime'
  | 'logo___childEducationJson___locationFlag___changeTime'
  | 'logo___childEducationJson___locationFlag___birthTime'
  | 'logo___childEducationJson___locationFlag___root'
  | 'logo___childEducationJson___locationFlag___dir'
  | 'logo___childEducationJson___locationFlag___base'
  | 'logo___childEducationJson___locationFlag___ext'
  | 'logo___childEducationJson___locationFlag___name'
  | 'logo___childEducationJson___locationFlag___relativeDirectory'
  | 'logo___childEducationJson___locationFlag___dev'
  | 'logo___childEducationJson___locationFlag___mode'
  | 'logo___childEducationJson___locationFlag___nlink'
  | 'logo___childEducationJson___locationFlag___uid'
  | 'logo___childEducationJson___locationFlag___gid'
  | 'logo___childEducationJson___locationFlag___rdev'
  | 'logo___childEducationJson___locationFlag___ino'
  | 'logo___childEducationJson___locationFlag___atimeMs'
  | 'logo___childEducationJson___locationFlag___mtimeMs'
  | 'logo___childEducationJson___locationFlag___ctimeMs'
  | 'logo___childEducationJson___locationFlag___atime'
  | 'logo___childEducationJson___locationFlag___mtime'
  | 'logo___childEducationJson___locationFlag___ctime'
  | 'logo___childEducationJson___locationFlag___birthtime'
  | 'logo___childEducationJson___locationFlag___birthtimeMs'
  | 'logo___childEducationJson___locationFlag___blksize'
  | 'logo___childEducationJson___locationFlag___blocks'
  | 'logo___childEducationJson___locationFlag___url'
  | 'logo___childEducationJson___locationFlag___publicURL'
  | 'logo___childEducationJson___locationFlag___childrenImageSharp'
  | 'logo___childEducationJson___locationFlag___childrenWorkJson'
  | 'logo___childEducationJson___locationFlag___childrenSkillsJson'
  | 'logo___childEducationJson___locationFlag___childrenSeJson'
  | 'logo___childEducationJson___locationFlag___childrenRuJson'
  | 'logo___childEducationJson___locationFlag___childrenLocale'
  | 'logo___childEducationJson___locationFlag___childrenHuJson'
  | 'logo___childEducationJson___locationFlag___childrenFrJson'
  | 'logo___childEducationJson___locationFlag___childrenFlagsJson'
  | 'logo___childEducationJson___locationFlag___childrenEtJson'
  | 'logo___childEducationJson___locationFlag___childrenEsJson'
  | 'logo___childEducationJson___locationFlag___childrenEnJson'
  | 'logo___childEducationJson___locationFlag___childrenEducationJson'
  | 'logo___childEducationJson___locationFlag___childrenDeJson'
  | 'logo___childEducationJson___locationFlag___id'
  | 'logo___childEducationJson___locationFlag___children'
  | 'logo___childEducationJson___title'
  | 'logo___childEducationJson___logo___sourceInstanceName'
  | 'logo___childEducationJson___logo___absolutePath'
  | 'logo___childEducationJson___logo___relativePath'
  | 'logo___childEducationJson___logo___extension'
  | 'logo___childEducationJson___logo___size'
  | 'logo___childEducationJson___logo___prettySize'
  | 'logo___childEducationJson___logo___modifiedTime'
  | 'logo___childEducationJson___logo___accessTime'
  | 'logo___childEducationJson___logo___changeTime'
  | 'logo___childEducationJson___logo___birthTime'
  | 'logo___childEducationJson___logo___root'
  | 'logo___childEducationJson___logo___dir'
  | 'logo___childEducationJson___logo___base'
  | 'logo___childEducationJson___logo___ext'
  | 'logo___childEducationJson___logo___name'
  | 'logo___childEducationJson___logo___relativeDirectory'
  | 'logo___childEducationJson___logo___dev'
  | 'logo___childEducationJson___logo___mode'
  | 'logo___childEducationJson___logo___nlink'
  | 'logo___childEducationJson___logo___uid'
  | 'logo___childEducationJson___logo___gid'
  | 'logo___childEducationJson___logo___rdev'
  | 'logo___childEducationJson___logo___ino'
  | 'logo___childEducationJson___logo___atimeMs'
  | 'logo___childEducationJson___logo___mtimeMs'
  | 'logo___childEducationJson___logo___ctimeMs'
  | 'logo___childEducationJson___logo___atime'
  | 'logo___childEducationJson___logo___mtime'
  | 'logo___childEducationJson___logo___ctime'
  | 'logo___childEducationJson___logo___birthtime'
  | 'logo___childEducationJson___logo___birthtimeMs'
  | 'logo___childEducationJson___logo___blksize'
  | 'logo___childEducationJson___logo___blocks'
  | 'logo___childEducationJson___logo___url'
  | 'logo___childEducationJson___logo___publicURL'
  | 'logo___childEducationJson___logo___childrenImageSharp'
  | 'logo___childEducationJson___logo___childrenWorkJson'
  | 'logo___childEducationJson___logo___childrenSkillsJson'
  | 'logo___childEducationJson___logo___childrenSeJson'
  | 'logo___childEducationJson___logo___childrenRuJson'
  | 'logo___childEducationJson___logo___childrenLocale'
  | 'logo___childEducationJson___logo___childrenHuJson'
  | 'logo___childEducationJson___logo___childrenFrJson'
  | 'logo___childEducationJson___logo___childrenFlagsJson'
  | 'logo___childEducationJson___logo___childrenEtJson'
  | 'logo___childEducationJson___logo___childrenEsJson'
  | 'logo___childEducationJson___logo___childrenEnJson'
  | 'logo___childEducationJson___logo___childrenEducationJson'
  | 'logo___childEducationJson___logo___childrenDeJson'
  | 'logo___childEducationJson___logo___id'
  | 'logo___childEducationJson___logo___children'
  | 'logo___childEducationJson___name'
  | 'logo___childEducationJson___dates'
  | 'logo___childEducationJson___description'
  | 'logo___childrenDeJson'
  | 'logo___childrenDeJson___id'
  | 'logo___childrenDeJson___parent___id'
  | 'logo___childrenDeJson___parent___children'
  | 'logo___childrenDeJson___children'
  | 'logo___childrenDeJson___children___id'
  | 'logo___childrenDeJson___children___children'
  | 'logo___childrenDeJson___internal___content'
  | 'logo___childrenDeJson___internal___contentDigest'
  | 'logo___childrenDeJson___internal___description'
  | 'logo___childrenDeJson___internal___fieldOwners'
  | 'logo___childrenDeJson___internal___ignoreType'
  | 'logo___childrenDeJson___internal___mediaType'
  | 'logo___childrenDeJson___internal___owner'
  | 'logo___childrenDeJson___internal___type'
  | 'logo___childrenDeJson___Banner___SoftwareDeveloper'
  | 'logo___childDeJson___id'
  | 'logo___childDeJson___parent___id'
  | 'logo___childDeJson___parent___children'
  | 'logo___childDeJson___children'
  | 'logo___childDeJson___children___id'
  | 'logo___childDeJson___children___children'
  | 'logo___childDeJson___internal___content'
  | 'logo___childDeJson___internal___contentDigest'
  | 'logo___childDeJson___internal___description'
  | 'logo___childDeJson___internal___fieldOwners'
  | 'logo___childDeJson___internal___ignoreType'
  | 'logo___childDeJson___internal___mediaType'
  | 'logo___childDeJson___internal___owner'
  | 'logo___childDeJson___internal___type'
  | 'logo___childDeJson___Banner___SoftwareDeveloper'
  | 'logo___id'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'name'
  | 'dates'
  | 'description';

export type WorkJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WorkJsonEdge>;
  nodes: Array<WorkJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WorkJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WorkJsonGroupConnectionDistinctArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonGroupConnectionMaxArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonGroupConnectionMinArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonGroupConnectionSumArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WorkJsonFieldsEnum;
};

export type WorkJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WorkJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SkillsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SkillsJsonEdge>;
  nodes: Array<SkillsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SkillsJsonGroupConnection>;
};


export type SkillsJsonConnectionDistinctArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionMaxArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionMinArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionSumArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SkillsJsonFieldsEnum;
};

export type SkillsJsonEdge = {
  next?: Maybe<SkillsJson>;
  node: SkillsJson;
  previous?: Maybe<SkillsJson>;
};

export type SkillsJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'skillItems'
  | 'skillItems___name'
  | 'skillItems___src___sourceInstanceName'
  | 'skillItems___src___absolutePath'
  | 'skillItems___src___relativePath'
  | 'skillItems___src___extension'
  | 'skillItems___src___size'
  | 'skillItems___src___prettySize'
  | 'skillItems___src___modifiedTime'
  | 'skillItems___src___accessTime'
  | 'skillItems___src___changeTime'
  | 'skillItems___src___birthTime'
  | 'skillItems___src___root'
  | 'skillItems___src___dir'
  | 'skillItems___src___base'
  | 'skillItems___src___ext'
  | 'skillItems___src___name'
  | 'skillItems___src___relativeDirectory'
  | 'skillItems___src___dev'
  | 'skillItems___src___mode'
  | 'skillItems___src___nlink'
  | 'skillItems___src___uid'
  | 'skillItems___src___gid'
  | 'skillItems___src___rdev'
  | 'skillItems___src___ino'
  | 'skillItems___src___atimeMs'
  | 'skillItems___src___mtimeMs'
  | 'skillItems___src___ctimeMs'
  | 'skillItems___src___atime'
  | 'skillItems___src___mtime'
  | 'skillItems___src___ctime'
  | 'skillItems___src___birthtime'
  | 'skillItems___src___birthtimeMs'
  | 'skillItems___src___blksize'
  | 'skillItems___src___blocks'
  | 'skillItems___src___url'
  | 'skillItems___src___publicURL'
  | 'skillItems___src___childrenImageSharp'
  | 'skillItems___src___childrenImageSharp___gatsbyImageData'
  | 'skillItems___src___childrenImageSharp___id'
  | 'skillItems___src___childrenImageSharp___children'
  | 'skillItems___src___childImageSharp___gatsbyImageData'
  | 'skillItems___src___childImageSharp___id'
  | 'skillItems___src___childImageSharp___children'
  | 'skillItems___src___childrenWorkJson'
  | 'skillItems___src___childrenWorkJson___id'
  | 'skillItems___src___childrenWorkJson___children'
  | 'skillItems___src___childrenWorkJson___location'
  | 'skillItems___src___childrenWorkJson___title'
  | 'skillItems___src___childrenWorkJson___name'
  | 'skillItems___src___childrenWorkJson___dates'
  | 'skillItems___src___childrenWorkJson___description'
  | 'skillItems___src___childWorkJson___id'
  | 'skillItems___src___childWorkJson___children'
  | 'skillItems___src___childWorkJson___location'
  | 'skillItems___src___childWorkJson___title'
  | 'skillItems___src___childWorkJson___name'
  | 'skillItems___src___childWorkJson___dates'
  | 'skillItems___src___childWorkJson___description'
  | 'skillItems___src___childrenSkillsJson'
  | 'skillItems___src___childrenSkillsJson___id'
  | 'skillItems___src___childrenSkillsJson___children'
  | 'skillItems___src___childrenSkillsJson___title'
  | 'skillItems___src___childrenSkillsJson___skillItems'
  | 'skillItems___src___childSkillsJson___id'
  | 'skillItems___src___childSkillsJson___children'
  | 'skillItems___src___childSkillsJson___title'
  | 'skillItems___src___childSkillsJson___skillItems'
  | 'skillItems___src___childrenSeJson'
  | 'skillItems___src___childrenSeJson___id'
  | 'skillItems___src___childrenSeJson___children'
  | 'skillItems___src___childSeJson___id'
  | 'skillItems___src___childSeJson___children'
  | 'skillItems___src___childrenRuJson'
  | 'skillItems___src___childrenRuJson___id'
  | 'skillItems___src___childrenRuJson___children'
  | 'skillItems___src___childrenRuJson___Acknowledgements'
  | 'skillItems___src___childRuJson___id'
  | 'skillItems___src___childRuJson___children'
  | 'skillItems___src___childRuJson___Acknowledgements'
  | 'skillItems___src___childrenLocale'
  | 'skillItems___src___childrenLocale___id'
  | 'skillItems___src___childrenLocale___children'
  | 'skillItems___src___childrenLocale___language'
  | 'skillItems___src___childrenLocale___ns'
  | 'skillItems___src___childrenLocale___data'
  | 'skillItems___src___childrenLocale___fileAbsolutePath'
  | 'skillItems___src___childLocale___id'
  | 'skillItems___src___childLocale___children'
  | 'skillItems___src___childLocale___language'
  | 'skillItems___src___childLocale___ns'
  | 'skillItems___src___childLocale___data'
  | 'skillItems___src___childLocale___fileAbsolutePath'
  | 'skillItems___src___childrenHuJson'
  | 'skillItems___src___childrenHuJson___id'
  | 'skillItems___src___childrenHuJson___children'
  | 'skillItems___src___childrenHuJson___Acknowledgements'
  | 'skillItems___src___childHuJson___id'
  | 'skillItems___src___childHuJson___children'
  | 'skillItems___src___childHuJson___Acknowledgements'
  | 'skillItems___src___childrenFrJson'
  | 'skillItems___src___childrenFrJson___id'
  | 'skillItems___src___childrenFrJson___children'
  | 'skillItems___src___childrenFrJson___Acknowledgements'
  | 'skillItems___src___childFrJson___id'
  | 'skillItems___src___childFrJson___children'
  | 'skillItems___src___childFrJson___Acknowledgements'
  | 'skillItems___src___childrenFlagsJson'
  | 'skillItems___src___childrenFlagsJson___id'
  | 'skillItems___src___childrenFlagsJson___children'
  | 'skillItems___src___childrenFlagsJson___code'
  | 'skillItems___src___childrenFlagsJson___name'
  | 'skillItems___src___childFlagsJson___id'
  | 'skillItems___src___childFlagsJson___children'
  | 'skillItems___src___childFlagsJson___code'
  | 'skillItems___src___childFlagsJson___name'
  | 'skillItems___src___childrenEtJson'
  | 'skillItems___src___childrenEtJson___id'
  | 'skillItems___src___childrenEtJson___children'
  | 'skillItems___src___childrenEtJson___Acknowledgements'
  | 'skillItems___src___childEtJson___id'
  | 'skillItems___src___childEtJson___children'
  | 'skillItems___src___childEtJson___Acknowledgements'
  | 'skillItems___src___childrenEsJson'
  | 'skillItems___src___childrenEsJson___id'
  | 'skillItems___src___childrenEsJson___children'
  | 'skillItems___src___childrenEsJson___Acknowledgements'
  | 'skillItems___src___childEsJson___id'
  | 'skillItems___src___childEsJson___children'
  | 'skillItems___src___childEsJson___Acknowledgements'
  | 'skillItems___src___childrenEnJson'
  | 'skillItems___src___childrenEnJson___id'
  | 'skillItems___src___childrenEnJson___children'
  | 'skillItems___src___childrenEnJson___Acknowledgements'
  | 'skillItems___src___childEnJson___id'
  | 'skillItems___src___childEnJson___children'
  | 'skillItems___src___childEnJson___Acknowledgements'
  | 'skillItems___src___childrenEducationJson'
  | 'skillItems___src___childrenEducationJson___id'
  | 'skillItems___src___childrenEducationJson___children'
  | 'skillItems___src___childrenEducationJson___location'
  | 'skillItems___src___childrenEducationJson___title'
  | 'skillItems___src___childrenEducationJson___name'
  | 'skillItems___src___childrenEducationJson___dates'
  | 'skillItems___src___childrenEducationJson___description'
  | 'skillItems___src___childEducationJson___id'
  | 'skillItems___src___childEducationJson___children'
  | 'skillItems___src___childEducationJson___location'
  | 'skillItems___src___childEducationJson___title'
  | 'skillItems___src___childEducationJson___name'
  | 'skillItems___src___childEducationJson___dates'
  | 'skillItems___src___childEducationJson___description'
  | 'skillItems___src___childrenDeJson'
  | 'skillItems___src___childrenDeJson___id'
  | 'skillItems___src___childrenDeJson___children'
  | 'skillItems___src___childDeJson___id'
  | 'skillItems___src___childDeJson___children'
  | 'skillItems___src___id'
  | 'skillItems___src___parent___id'
  | 'skillItems___src___parent___children'
  | 'skillItems___src___children'
  | 'skillItems___src___children___id'
  | 'skillItems___src___children___children'
  | 'skillItems___src___internal___content'
  | 'skillItems___src___internal___contentDigest'
  | 'skillItems___src___internal___description'
  | 'skillItems___src___internal___fieldOwners'
  | 'skillItems___src___internal___ignoreType'
  | 'skillItems___src___internal___mediaType'
  | 'skillItems___src___internal___owner'
  | 'skillItems___src___internal___type'
  | 'skillItems___extra'
  | 'skillItems___subSkills'
  | 'skillItems___subSkills___name'
  | 'skillItems___subSkills___src___sourceInstanceName'
  | 'skillItems___subSkills___src___absolutePath'
  | 'skillItems___subSkills___src___relativePath'
  | 'skillItems___subSkills___src___extension'
  | 'skillItems___subSkills___src___size'
  | 'skillItems___subSkills___src___prettySize'
  | 'skillItems___subSkills___src___modifiedTime'
  | 'skillItems___subSkills___src___accessTime'
  | 'skillItems___subSkills___src___changeTime'
  | 'skillItems___subSkills___src___birthTime'
  | 'skillItems___subSkills___src___root'
  | 'skillItems___subSkills___src___dir'
  | 'skillItems___subSkills___src___base'
  | 'skillItems___subSkills___src___ext'
  | 'skillItems___subSkills___src___name'
  | 'skillItems___subSkills___src___relativeDirectory'
  | 'skillItems___subSkills___src___dev'
  | 'skillItems___subSkills___src___mode'
  | 'skillItems___subSkills___src___nlink'
  | 'skillItems___subSkills___src___uid'
  | 'skillItems___subSkills___src___gid'
  | 'skillItems___subSkills___src___rdev'
  | 'skillItems___subSkills___src___ino'
  | 'skillItems___subSkills___src___atimeMs'
  | 'skillItems___subSkills___src___mtimeMs'
  | 'skillItems___subSkills___src___ctimeMs'
  | 'skillItems___subSkills___src___atime'
  | 'skillItems___subSkills___src___mtime'
  | 'skillItems___subSkills___src___ctime'
  | 'skillItems___subSkills___src___birthtime'
  | 'skillItems___subSkills___src___birthtimeMs'
  | 'skillItems___subSkills___src___blksize'
  | 'skillItems___subSkills___src___blocks'
  | 'skillItems___subSkills___src___url'
  | 'skillItems___subSkills___src___publicURL'
  | 'skillItems___subSkills___src___childrenImageSharp'
  | 'skillItems___subSkills___src___childrenWorkJson'
  | 'skillItems___subSkills___src___childrenSkillsJson'
  | 'skillItems___subSkills___src___childrenSeJson'
  | 'skillItems___subSkills___src___childrenRuJson'
  | 'skillItems___subSkills___src___childrenLocale'
  | 'skillItems___subSkills___src___childrenHuJson'
  | 'skillItems___subSkills___src___childrenFrJson'
  | 'skillItems___subSkills___src___childrenFlagsJson'
  | 'skillItems___subSkills___src___childrenEtJson'
  | 'skillItems___subSkills___src___childrenEsJson'
  | 'skillItems___subSkills___src___childrenEnJson'
  | 'skillItems___subSkills___src___childrenEducationJson'
  | 'skillItems___subSkills___src___childrenDeJson'
  | 'skillItems___subSkills___src___id'
  | 'skillItems___subSkills___src___children'
  | 'skillItems___subSkills___href'
  | 'skillItems___subSkills___extra'
  | 'skillItems___subSkills___subSkills'
  | 'skillItems___subSkills___subSkills___name'
  | 'skillItems___subSkills___subSkills___href'
  | 'skillItems___href';

export type SkillsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SkillsJsonEdge>;
  nodes: Array<SkillsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SkillsJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SkillsJsonGroupConnectionDistinctArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonGroupConnectionMaxArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonGroupConnectionMinArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonGroupConnectionSumArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SkillsJsonFieldsEnum;
};

export type SkillsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SkillsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SeJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SeJsonEdge>;
  nodes: Array<SeJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SeJsonGroupConnection>;
};


export type SeJsonConnectionDistinctArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonConnectionMaxArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonConnectionMinArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonConnectionSumArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SeJsonFieldsEnum;
};

export type SeJsonEdge = {
  next?: Maybe<SeJson>;
  node: SeJson;
  previous?: Maybe<SeJson>;
};

export type SeJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'Banner___SoftwareDeveloper';

export type SeJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SeJsonEdge>;
  nodes: Array<SeJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SeJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SeJsonGroupConnectionDistinctArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonGroupConnectionMaxArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonGroupConnectionMinArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonGroupConnectionSumArgs = {
  field: SeJsonFieldsEnum;
};


export type SeJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SeJsonFieldsEnum;
};

export type SeJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SeJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type RuJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<RuJsonEdge>;
  nodes: Array<RuJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<RuJsonGroupConnection>;
};


export type RuJsonConnectionDistinctArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonConnectionMaxArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonConnectionMinArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonConnectionSumArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: RuJsonFieldsEnum;
};

export type RuJsonEdge = {
  next?: Maybe<RuJson>;
  node: RuJson;
  previous?: Maybe<RuJson>;
};

export type RuJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'About___AboutMe'
  | 'About___Description'
  | 'About___PhotoDescription'
  | 'About___ViewCV'
  | 'Acknowledgements'
  | 'Banner___DexterSibirtsev'
  | 'Banner___Experience'
  | 'Banner___HelloIAmAProgrammer'
  | 'Banner___SoftwareDeveloper'
  | 'Blog___Blog'
  | 'Contact___Contact'
  | 'Contact___GetInTouch'
  | 'Contact___SendEmail'
  | 'Education___Description'
  | 'Education___Education'
  | 'Experience___TranslationsUnderConstruction'
  | 'PageLinks___Acknowledgements'
  | 'PageLinks___Home'
  | 'SectionButtons___About'
  | 'SectionButtons___Blog'
  | 'SectionButtons___Contact'
  | 'SectionButtons___Experience'
  | 'SectionButtons___Skills'
  | 'Skills___Overview'
  | 'Skills___Skills'
  | 'Work___Work';

export type RuJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<RuJsonEdge>;
  nodes: Array<RuJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<RuJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type RuJsonGroupConnectionDistinctArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonGroupConnectionMaxArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonGroupConnectionMinArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonGroupConnectionSumArgs = {
  field: RuJsonFieldsEnum;
};


export type RuJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: RuJsonFieldsEnum;
};

export type RuJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<RuJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type LocaleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<LocaleGroupConnection>;
};


export type LocaleConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionMaxArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionMinArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionSumArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

export type LocaleEdge = {
  next?: Maybe<Locale>;
  node: Locale;
  previous?: Maybe<Locale>;
};

export type LocaleFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'language'
  | 'ns'
  | 'data'
  | 'fileAbsolutePath';

export type LocaleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<LocaleGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type LocaleGroupConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionMaxArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionMinArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionSumArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

export type LocaleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<LocaleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type HuJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HuJsonEdge>;
  nodes: Array<HuJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<HuJsonGroupConnection>;
};


export type HuJsonConnectionDistinctArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonConnectionMaxArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonConnectionMinArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonConnectionSumArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: HuJsonFieldsEnum;
};

export type HuJsonEdge = {
  next?: Maybe<HuJson>;
  node: HuJson;
  previous?: Maybe<HuJson>;
};

export type HuJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'About___AboutMe'
  | 'About___Description'
  | 'About___PhotoDescription'
  | 'About___ViewCV'
  | 'Acknowledgements'
  | 'Banner___DexterSibirtsev'
  | 'Banner___Experience'
  | 'Banner___HelloIAmAProgrammer'
  | 'Banner___SoftwareDeveloper'
  | 'Blog___Blog'
  | 'Contact___Contact'
  | 'Contact___GetInTouch'
  | 'Contact___SendEmail'
  | 'Education___Description'
  | 'Education___Education'
  | 'Experience___TranslationsUnderConstruction'
  | 'PageLinks___Acknowledgements'
  | 'PageLinks___Home'
  | 'SectionButtons___About'
  | 'SectionButtons___Blog'
  | 'SectionButtons___Contact'
  | 'SectionButtons___Experience'
  | 'SectionButtons___Skills'
  | 'Skills___Overview'
  | 'Skills___Skills'
  | 'Work___Work';

export type HuJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HuJsonEdge>;
  nodes: Array<HuJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<HuJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type HuJsonGroupConnectionDistinctArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonGroupConnectionMaxArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonGroupConnectionMinArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonGroupConnectionSumArgs = {
  field: HuJsonFieldsEnum;
};


export type HuJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: HuJsonFieldsEnum;
};

export type HuJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<HuJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FrJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FrJsonEdge>;
  nodes: Array<FrJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FrJsonGroupConnection>;
};


export type FrJsonConnectionDistinctArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonConnectionMaxArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonConnectionMinArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonConnectionSumArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FrJsonFieldsEnum;
};

export type FrJsonEdge = {
  next?: Maybe<FrJson>;
  node: FrJson;
  previous?: Maybe<FrJson>;
};

export type FrJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'About___AboutMe'
  | 'About___Description'
  | 'About___PhotoDescription'
  | 'About___ViewCV'
  | 'Acknowledgements'
  | 'Banner___DexterSibirtsev'
  | 'Banner___Experience'
  | 'Banner___HelloIAmAProgrammer'
  | 'Banner___SoftwareDeveloper'
  | 'Blog___Blog'
  | 'Contact___Contact'
  | 'Contact___GetInTouch'
  | 'Contact___SendEmail'
  | 'Education___Description'
  | 'Education___Education'
  | 'Experience___TranslationsUnderConstruction'
  | 'PageLinks___Acknowledgements'
  | 'PageLinks___Home'
  | 'SectionButtons___About'
  | 'SectionButtons___Blog'
  | 'SectionButtons___Contact'
  | 'SectionButtons___Experience'
  | 'SectionButtons___Skills'
  | 'Skills___Overview'
  | 'Skills___Skills'
  | 'Work___Work';

export type FrJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FrJsonEdge>;
  nodes: Array<FrJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FrJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FrJsonGroupConnectionDistinctArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonGroupConnectionMaxArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonGroupConnectionMinArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonGroupConnectionSumArgs = {
  field: FrJsonFieldsEnum;
};


export type FrJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FrJsonFieldsEnum;
};

export type FrJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FrJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FlagsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FlagsJsonEdge>;
  nodes: Array<FlagsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FlagsJsonGroupConnection>;
};


export type FlagsJsonConnectionDistinctArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonConnectionMaxArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonConnectionMinArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonConnectionSumArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FlagsJsonFieldsEnum;
};

export type FlagsJsonEdge = {
  next?: Maybe<FlagsJson>;
  node: FlagsJson;
  previous?: Maybe<FlagsJson>;
};

export type FlagsJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'code'
  | 'name'
  | 'src___sourceInstanceName'
  | 'src___absolutePath'
  | 'src___relativePath'
  | 'src___extension'
  | 'src___size'
  | 'src___prettySize'
  | 'src___modifiedTime'
  | 'src___accessTime'
  | 'src___changeTime'
  | 'src___birthTime'
  | 'src___root'
  | 'src___dir'
  | 'src___base'
  | 'src___ext'
  | 'src___name'
  | 'src___relativeDirectory'
  | 'src___dev'
  | 'src___mode'
  | 'src___nlink'
  | 'src___uid'
  | 'src___gid'
  | 'src___rdev'
  | 'src___ino'
  | 'src___atimeMs'
  | 'src___mtimeMs'
  | 'src___ctimeMs'
  | 'src___atime'
  | 'src___mtime'
  | 'src___ctime'
  | 'src___birthtime'
  | 'src___birthtimeMs'
  | 'src___blksize'
  | 'src___blocks'
  | 'src___url'
  | 'src___publicURL'
  | 'src___childrenImageSharp'
  | 'src___childrenImageSharp___fixed___base64'
  | 'src___childrenImageSharp___fixed___tracedSVG'
  | 'src___childrenImageSharp___fixed___aspectRatio'
  | 'src___childrenImageSharp___fixed___width'
  | 'src___childrenImageSharp___fixed___height'
  | 'src___childrenImageSharp___fixed___src'
  | 'src___childrenImageSharp___fixed___srcSet'
  | 'src___childrenImageSharp___fixed___srcWebp'
  | 'src___childrenImageSharp___fixed___srcSetWebp'
  | 'src___childrenImageSharp___fixed___originalName'
  | 'src___childrenImageSharp___fluid___base64'
  | 'src___childrenImageSharp___fluid___tracedSVG'
  | 'src___childrenImageSharp___fluid___aspectRatio'
  | 'src___childrenImageSharp___fluid___src'
  | 'src___childrenImageSharp___fluid___srcSet'
  | 'src___childrenImageSharp___fluid___srcWebp'
  | 'src___childrenImageSharp___fluid___srcSetWebp'
  | 'src___childrenImageSharp___fluid___sizes'
  | 'src___childrenImageSharp___fluid___originalImg'
  | 'src___childrenImageSharp___fluid___originalName'
  | 'src___childrenImageSharp___fluid___presentationWidth'
  | 'src___childrenImageSharp___fluid___presentationHeight'
  | 'src___childrenImageSharp___gatsbyImageData'
  | 'src___childrenImageSharp___original___width'
  | 'src___childrenImageSharp___original___height'
  | 'src___childrenImageSharp___original___src'
  | 'src___childrenImageSharp___resize___src'
  | 'src___childrenImageSharp___resize___tracedSVG'
  | 'src___childrenImageSharp___resize___width'
  | 'src___childrenImageSharp___resize___height'
  | 'src___childrenImageSharp___resize___aspectRatio'
  | 'src___childrenImageSharp___resize___originalName'
  | 'src___childrenImageSharp___id'
  | 'src___childrenImageSharp___parent___id'
  | 'src___childrenImageSharp___parent___children'
  | 'src___childrenImageSharp___children'
  | 'src___childrenImageSharp___children___id'
  | 'src___childrenImageSharp___children___children'
  | 'src___childrenImageSharp___internal___content'
  | 'src___childrenImageSharp___internal___contentDigest'
  | 'src___childrenImageSharp___internal___description'
  | 'src___childrenImageSharp___internal___fieldOwners'
  | 'src___childrenImageSharp___internal___ignoreType'
  | 'src___childrenImageSharp___internal___mediaType'
  | 'src___childrenImageSharp___internal___owner'
  | 'src___childrenImageSharp___internal___type'
  | 'src___childImageSharp___fixed___base64'
  | 'src___childImageSharp___fixed___tracedSVG'
  | 'src___childImageSharp___fixed___aspectRatio'
  | 'src___childImageSharp___fixed___width'
  | 'src___childImageSharp___fixed___height'
  | 'src___childImageSharp___fixed___src'
  | 'src___childImageSharp___fixed___srcSet'
  | 'src___childImageSharp___fixed___srcWebp'
  | 'src___childImageSharp___fixed___srcSetWebp'
  | 'src___childImageSharp___fixed___originalName'
  | 'src___childImageSharp___fluid___base64'
  | 'src___childImageSharp___fluid___tracedSVG'
  | 'src___childImageSharp___fluid___aspectRatio'
  | 'src___childImageSharp___fluid___src'
  | 'src___childImageSharp___fluid___srcSet'
  | 'src___childImageSharp___fluid___srcWebp'
  | 'src___childImageSharp___fluid___srcSetWebp'
  | 'src___childImageSharp___fluid___sizes'
  | 'src___childImageSharp___fluid___originalImg'
  | 'src___childImageSharp___fluid___originalName'
  | 'src___childImageSharp___fluid___presentationWidth'
  | 'src___childImageSharp___fluid___presentationHeight'
  | 'src___childImageSharp___gatsbyImageData'
  | 'src___childImageSharp___original___width'
  | 'src___childImageSharp___original___height'
  | 'src___childImageSharp___original___src'
  | 'src___childImageSharp___resize___src'
  | 'src___childImageSharp___resize___tracedSVG'
  | 'src___childImageSharp___resize___width'
  | 'src___childImageSharp___resize___height'
  | 'src___childImageSharp___resize___aspectRatio'
  | 'src___childImageSharp___resize___originalName'
  | 'src___childImageSharp___id'
  | 'src___childImageSharp___parent___id'
  | 'src___childImageSharp___parent___children'
  | 'src___childImageSharp___children'
  | 'src___childImageSharp___children___id'
  | 'src___childImageSharp___children___children'
  | 'src___childImageSharp___internal___content'
  | 'src___childImageSharp___internal___contentDigest'
  | 'src___childImageSharp___internal___description'
  | 'src___childImageSharp___internal___fieldOwners'
  | 'src___childImageSharp___internal___ignoreType'
  | 'src___childImageSharp___internal___mediaType'
  | 'src___childImageSharp___internal___owner'
  | 'src___childImageSharp___internal___type'
  | 'src___childrenWorkJson'
  | 'src___childrenWorkJson___id'
  | 'src___childrenWorkJson___parent___id'
  | 'src___childrenWorkJson___parent___children'
  | 'src___childrenWorkJson___children'
  | 'src___childrenWorkJson___children___id'
  | 'src___childrenWorkJson___children___children'
  | 'src___childrenWorkJson___internal___content'
  | 'src___childrenWorkJson___internal___contentDigest'
  | 'src___childrenWorkJson___internal___description'
  | 'src___childrenWorkJson___internal___fieldOwners'
  | 'src___childrenWorkJson___internal___ignoreType'
  | 'src___childrenWorkJson___internal___mediaType'
  | 'src___childrenWorkJson___internal___owner'
  | 'src___childrenWorkJson___internal___type'
  | 'src___childrenWorkJson___location'
  | 'src___childrenWorkJson___locationFlag___sourceInstanceName'
  | 'src___childrenWorkJson___locationFlag___absolutePath'
  | 'src___childrenWorkJson___locationFlag___relativePath'
  | 'src___childrenWorkJson___locationFlag___extension'
  | 'src___childrenWorkJson___locationFlag___size'
  | 'src___childrenWorkJson___locationFlag___prettySize'
  | 'src___childrenWorkJson___locationFlag___modifiedTime'
  | 'src___childrenWorkJson___locationFlag___accessTime'
  | 'src___childrenWorkJson___locationFlag___changeTime'
  | 'src___childrenWorkJson___locationFlag___birthTime'
  | 'src___childrenWorkJson___locationFlag___root'
  | 'src___childrenWorkJson___locationFlag___dir'
  | 'src___childrenWorkJson___locationFlag___base'
  | 'src___childrenWorkJson___locationFlag___ext'
  | 'src___childrenWorkJson___locationFlag___name'
  | 'src___childrenWorkJson___locationFlag___relativeDirectory'
  | 'src___childrenWorkJson___locationFlag___dev'
  | 'src___childrenWorkJson___locationFlag___mode'
  | 'src___childrenWorkJson___locationFlag___nlink'
  | 'src___childrenWorkJson___locationFlag___uid'
  | 'src___childrenWorkJson___locationFlag___gid'
  | 'src___childrenWorkJson___locationFlag___rdev'
  | 'src___childrenWorkJson___locationFlag___ino'
  | 'src___childrenWorkJson___locationFlag___atimeMs'
  | 'src___childrenWorkJson___locationFlag___mtimeMs'
  | 'src___childrenWorkJson___locationFlag___ctimeMs'
  | 'src___childrenWorkJson___locationFlag___atime'
  | 'src___childrenWorkJson___locationFlag___mtime'
  | 'src___childrenWorkJson___locationFlag___ctime'
  | 'src___childrenWorkJson___locationFlag___birthtime'
  | 'src___childrenWorkJson___locationFlag___birthtimeMs'
  | 'src___childrenWorkJson___locationFlag___blksize'
  | 'src___childrenWorkJson___locationFlag___blocks'
  | 'src___childrenWorkJson___locationFlag___url'
  | 'src___childrenWorkJson___locationFlag___publicURL'
  | 'src___childrenWorkJson___locationFlag___childrenImageSharp'
  | 'src___childrenWorkJson___locationFlag___childrenWorkJson'
  | 'src___childrenWorkJson___locationFlag___childrenSkillsJson'
  | 'src___childrenWorkJson___locationFlag___childrenSeJson'
  | 'src___childrenWorkJson___locationFlag___childrenRuJson'
  | 'src___childrenWorkJson___locationFlag___childrenLocale'
  | 'src___childrenWorkJson___locationFlag___childrenHuJson'
  | 'src___childrenWorkJson___locationFlag___childrenFrJson'
  | 'src___childrenWorkJson___locationFlag___childrenFlagsJson'
  | 'src___childrenWorkJson___locationFlag___childrenEtJson'
  | 'src___childrenWorkJson___locationFlag___childrenEsJson'
  | 'src___childrenWorkJson___locationFlag___childrenEnJson'
  | 'src___childrenWorkJson___locationFlag___childrenEducationJson'
  | 'src___childrenWorkJson___locationFlag___childrenDeJson'
  | 'src___childrenWorkJson___locationFlag___id'
  | 'src___childrenWorkJson___locationFlag___children'
  | 'src___childrenWorkJson___title'
  | 'src___childrenWorkJson___logo___sourceInstanceName'
  | 'src___childrenWorkJson___logo___absolutePath'
  | 'src___childrenWorkJson___logo___relativePath'
  | 'src___childrenWorkJson___logo___extension'
  | 'src___childrenWorkJson___logo___size'
  | 'src___childrenWorkJson___logo___prettySize'
  | 'src___childrenWorkJson___logo___modifiedTime'
  | 'src___childrenWorkJson___logo___accessTime'
  | 'src___childrenWorkJson___logo___changeTime'
  | 'src___childrenWorkJson___logo___birthTime'
  | 'src___childrenWorkJson___logo___root'
  | 'src___childrenWorkJson___logo___dir'
  | 'src___childrenWorkJson___logo___base'
  | 'src___childrenWorkJson___logo___ext'
  | 'src___childrenWorkJson___logo___name'
  | 'src___childrenWorkJson___logo___relativeDirectory'
  | 'src___childrenWorkJson___logo___dev'
  | 'src___childrenWorkJson___logo___mode'
  | 'src___childrenWorkJson___logo___nlink'
  | 'src___childrenWorkJson___logo___uid'
  | 'src___childrenWorkJson___logo___gid'
  | 'src___childrenWorkJson___logo___rdev'
  | 'src___childrenWorkJson___logo___ino'
  | 'src___childrenWorkJson___logo___atimeMs'
  | 'src___childrenWorkJson___logo___mtimeMs'
  | 'src___childrenWorkJson___logo___ctimeMs'
  | 'src___childrenWorkJson___logo___atime'
  | 'src___childrenWorkJson___logo___mtime'
  | 'src___childrenWorkJson___logo___ctime'
  | 'src___childrenWorkJson___logo___birthtime'
  | 'src___childrenWorkJson___logo___birthtimeMs'
  | 'src___childrenWorkJson___logo___blksize'
  | 'src___childrenWorkJson___logo___blocks'
  | 'src___childrenWorkJson___logo___url'
  | 'src___childrenWorkJson___logo___publicURL'
  | 'src___childrenWorkJson___logo___childrenImageSharp'
  | 'src___childrenWorkJson___logo___childrenWorkJson'
  | 'src___childrenWorkJson___logo___childrenSkillsJson'
  | 'src___childrenWorkJson___logo___childrenSeJson'
  | 'src___childrenWorkJson___logo___childrenRuJson'
  | 'src___childrenWorkJson___logo___childrenLocale'
  | 'src___childrenWorkJson___logo___childrenHuJson'
  | 'src___childrenWorkJson___logo___childrenFrJson'
  | 'src___childrenWorkJson___logo___childrenFlagsJson'
  | 'src___childrenWorkJson___logo___childrenEtJson'
  | 'src___childrenWorkJson___logo___childrenEsJson'
  | 'src___childrenWorkJson___logo___childrenEnJson'
  | 'src___childrenWorkJson___logo___childrenEducationJson'
  | 'src___childrenWorkJson___logo___childrenDeJson'
  | 'src___childrenWorkJson___logo___id'
  | 'src___childrenWorkJson___logo___children'
  | 'src___childrenWorkJson___name'
  | 'src___childrenWorkJson___dates'
  | 'src___childrenWorkJson___description'
  | 'src___childWorkJson___id'
  | 'src___childWorkJson___parent___id'
  | 'src___childWorkJson___parent___children'
  | 'src___childWorkJson___children'
  | 'src___childWorkJson___children___id'
  | 'src___childWorkJson___children___children'
  | 'src___childWorkJson___internal___content'
  | 'src___childWorkJson___internal___contentDigest'
  | 'src___childWorkJson___internal___description'
  | 'src___childWorkJson___internal___fieldOwners'
  | 'src___childWorkJson___internal___ignoreType'
  | 'src___childWorkJson___internal___mediaType'
  | 'src___childWorkJson___internal___owner'
  | 'src___childWorkJson___internal___type'
  | 'src___childWorkJson___location'
  | 'src___childWorkJson___locationFlag___sourceInstanceName'
  | 'src___childWorkJson___locationFlag___absolutePath'
  | 'src___childWorkJson___locationFlag___relativePath'
  | 'src___childWorkJson___locationFlag___extension'
  | 'src___childWorkJson___locationFlag___size'
  | 'src___childWorkJson___locationFlag___prettySize'
  | 'src___childWorkJson___locationFlag___modifiedTime'
  | 'src___childWorkJson___locationFlag___accessTime'
  | 'src___childWorkJson___locationFlag___changeTime'
  | 'src___childWorkJson___locationFlag___birthTime'
  | 'src___childWorkJson___locationFlag___root'
  | 'src___childWorkJson___locationFlag___dir'
  | 'src___childWorkJson___locationFlag___base'
  | 'src___childWorkJson___locationFlag___ext'
  | 'src___childWorkJson___locationFlag___name'
  | 'src___childWorkJson___locationFlag___relativeDirectory'
  | 'src___childWorkJson___locationFlag___dev'
  | 'src___childWorkJson___locationFlag___mode'
  | 'src___childWorkJson___locationFlag___nlink'
  | 'src___childWorkJson___locationFlag___uid'
  | 'src___childWorkJson___locationFlag___gid'
  | 'src___childWorkJson___locationFlag___rdev'
  | 'src___childWorkJson___locationFlag___ino'
  | 'src___childWorkJson___locationFlag___atimeMs'
  | 'src___childWorkJson___locationFlag___mtimeMs'
  | 'src___childWorkJson___locationFlag___ctimeMs'
  | 'src___childWorkJson___locationFlag___atime'
  | 'src___childWorkJson___locationFlag___mtime'
  | 'src___childWorkJson___locationFlag___ctime'
  | 'src___childWorkJson___locationFlag___birthtime'
  | 'src___childWorkJson___locationFlag___birthtimeMs'
  | 'src___childWorkJson___locationFlag___blksize'
  | 'src___childWorkJson___locationFlag___blocks'
  | 'src___childWorkJson___locationFlag___url'
  | 'src___childWorkJson___locationFlag___publicURL'
  | 'src___childWorkJson___locationFlag___childrenImageSharp'
  | 'src___childWorkJson___locationFlag___childrenWorkJson'
  | 'src___childWorkJson___locationFlag___childrenSkillsJson'
  | 'src___childWorkJson___locationFlag___childrenSeJson'
  | 'src___childWorkJson___locationFlag___childrenRuJson'
  | 'src___childWorkJson___locationFlag___childrenLocale'
  | 'src___childWorkJson___locationFlag___childrenHuJson'
  | 'src___childWorkJson___locationFlag___childrenFrJson'
  | 'src___childWorkJson___locationFlag___childrenFlagsJson'
  | 'src___childWorkJson___locationFlag___childrenEtJson'
  | 'src___childWorkJson___locationFlag___childrenEsJson'
  | 'src___childWorkJson___locationFlag___childrenEnJson'
  | 'src___childWorkJson___locationFlag___childrenEducationJson'
  | 'src___childWorkJson___locationFlag___childrenDeJson'
  | 'src___childWorkJson___locationFlag___id'
  | 'src___childWorkJson___locationFlag___children'
  | 'src___childWorkJson___title'
  | 'src___childWorkJson___logo___sourceInstanceName'
  | 'src___childWorkJson___logo___absolutePath'
  | 'src___childWorkJson___logo___relativePath'
  | 'src___childWorkJson___logo___extension'
  | 'src___childWorkJson___logo___size'
  | 'src___childWorkJson___logo___prettySize'
  | 'src___childWorkJson___logo___modifiedTime'
  | 'src___childWorkJson___logo___accessTime'
  | 'src___childWorkJson___logo___changeTime'
  | 'src___childWorkJson___logo___birthTime'
  | 'src___childWorkJson___logo___root'
  | 'src___childWorkJson___logo___dir'
  | 'src___childWorkJson___logo___base'
  | 'src___childWorkJson___logo___ext'
  | 'src___childWorkJson___logo___name'
  | 'src___childWorkJson___logo___relativeDirectory'
  | 'src___childWorkJson___logo___dev'
  | 'src___childWorkJson___logo___mode'
  | 'src___childWorkJson___logo___nlink'
  | 'src___childWorkJson___logo___uid'
  | 'src___childWorkJson___logo___gid'
  | 'src___childWorkJson___logo___rdev'
  | 'src___childWorkJson___logo___ino'
  | 'src___childWorkJson___logo___atimeMs'
  | 'src___childWorkJson___logo___mtimeMs'
  | 'src___childWorkJson___logo___ctimeMs'
  | 'src___childWorkJson___logo___atime'
  | 'src___childWorkJson___logo___mtime'
  | 'src___childWorkJson___logo___ctime'
  | 'src___childWorkJson___logo___birthtime'
  | 'src___childWorkJson___logo___birthtimeMs'
  | 'src___childWorkJson___logo___blksize'
  | 'src___childWorkJson___logo___blocks'
  | 'src___childWorkJson___logo___url'
  | 'src___childWorkJson___logo___publicURL'
  | 'src___childWorkJson___logo___childrenImageSharp'
  | 'src___childWorkJson___logo___childrenWorkJson'
  | 'src___childWorkJson___logo___childrenSkillsJson'
  | 'src___childWorkJson___logo___childrenSeJson'
  | 'src___childWorkJson___logo___childrenRuJson'
  | 'src___childWorkJson___logo___childrenLocale'
  | 'src___childWorkJson___logo___childrenHuJson'
  | 'src___childWorkJson___logo___childrenFrJson'
  | 'src___childWorkJson___logo___childrenFlagsJson'
  | 'src___childWorkJson___logo___childrenEtJson'
  | 'src___childWorkJson___logo___childrenEsJson'
  | 'src___childWorkJson___logo___childrenEnJson'
  | 'src___childWorkJson___logo___childrenEducationJson'
  | 'src___childWorkJson___logo___childrenDeJson'
  | 'src___childWorkJson___logo___id'
  | 'src___childWorkJson___logo___children'
  | 'src___childWorkJson___name'
  | 'src___childWorkJson___dates'
  | 'src___childWorkJson___description'
  | 'src___childrenSkillsJson'
  | 'src___childrenSkillsJson___id'
  | 'src___childrenSkillsJson___parent___id'
  | 'src___childrenSkillsJson___parent___children'
  | 'src___childrenSkillsJson___children'
  | 'src___childrenSkillsJson___children___id'
  | 'src___childrenSkillsJson___children___children'
  | 'src___childrenSkillsJson___internal___content'
  | 'src___childrenSkillsJson___internal___contentDigest'
  | 'src___childrenSkillsJson___internal___description'
  | 'src___childrenSkillsJson___internal___fieldOwners'
  | 'src___childrenSkillsJson___internal___ignoreType'
  | 'src___childrenSkillsJson___internal___mediaType'
  | 'src___childrenSkillsJson___internal___owner'
  | 'src___childrenSkillsJson___internal___type'
  | 'src___childrenSkillsJson___title'
  | 'src___childrenSkillsJson___skillItems'
  | 'src___childrenSkillsJson___skillItems___name'
  | 'src___childrenSkillsJson___skillItems___extra'
  | 'src___childrenSkillsJson___skillItems___subSkills'
  | 'src___childrenSkillsJson___skillItems___href'
  | 'src___childSkillsJson___id'
  | 'src___childSkillsJson___parent___id'
  | 'src___childSkillsJson___parent___children'
  | 'src___childSkillsJson___children'
  | 'src___childSkillsJson___children___id'
  | 'src___childSkillsJson___children___children'
  | 'src___childSkillsJson___internal___content'
  | 'src___childSkillsJson___internal___contentDigest'
  | 'src___childSkillsJson___internal___description'
  | 'src___childSkillsJson___internal___fieldOwners'
  | 'src___childSkillsJson___internal___ignoreType'
  | 'src___childSkillsJson___internal___mediaType'
  | 'src___childSkillsJson___internal___owner'
  | 'src___childSkillsJson___internal___type'
  | 'src___childSkillsJson___title'
  | 'src___childSkillsJson___skillItems'
  | 'src___childSkillsJson___skillItems___name'
  | 'src___childSkillsJson___skillItems___extra'
  | 'src___childSkillsJson___skillItems___subSkills'
  | 'src___childSkillsJson___skillItems___href'
  | 'src___childrenSeJson'
  | 'src___childrenSeJson___id'
  | 'src___childrenSeJson___parent___id'
  | 'src___childrenSeJson___parent___children'
  | 'src___childrenSeJson___children'
  | 'src___childrenSeJson___children___id'
  | 'src___childrenSeJson___children___children'
  | 'src___childrenSeJson___internal___content'
  | 'src___childrenSeJson___internal___contentDigest'
  | 'src___childrenSeJson___internal___description'
  | 'src___childrenSeJson___internal___fieldOwners'
  | 'src___childrenSeJson___internal___ignoreType'
  | 'src___childrenSeJson___internal___mediaType'
  | 'src___childrenSeJson___internal___owner'
  | 'src___childrenSeJson___internal___type'
  | 'src___childrenSeJson___Banner___SoftwareDeveloper'
  | 'src___childSeJson___id'
  | 'src___childSeJson___parent___id'
  | 'src___childSeJson___parent___children'
  | 'src___childSeJson___children'
  | 'src___childSeJson___children___id'
  | 'src___childSeJson___children___children'
  | 'src___childSeJson___internal___content'
  | 'src___childSeJson___internal___contentDigest'
  | 'src___childSeJson___internal___description'
  | 'src___childSeJson___internal___fieldOwners'
  | 'src___childSeJson___internal___ignoreType'
  | 'src___childSeJson___internal___mediaType'
  | 'src___childSeJson___internal___owner'
  | 'src___childSeJson___internal___type'
  | 'src___childSeJson___Banner___SoftwareDeveloper'
  | 'src___childrenRuJson'
  | 'src___childrenRuJson___id'
  | 'src___childrenRuJson___parent___id'
  | 'src___childrenRuJson___parent___children'
  | 'src___childrenRuJson___children'
  | 'src___childrenRuJson___children___id'
  | 'src___childrenRuJson___children___children'
  | 'src___childrenRuJson___internal___content'
  | 'src___childrenRuJson___internal___contentDigest'
  | 'src___childrenRuJson___internal___description'
  | 'src___childrenRuJson___internal___fieldOwners'
  | 'src___childrenRuJson___internal___ignoreType'
  | 'src___childrenRuJson___internal___mediaType'
  | 'src___childrenRuJson___internal___owner'
  | 'src___childrenRuJson___internal___type'
  | 'src___childrenRuJson___About___AboutMe'
  | 'src___childrenRuJson___About___Description'
  | 'src___childrenRuJson___About___PhotoDescription'
  | 'src___childrenRuJson___About___ViewCV'
  | 'src___childrenRuJson___Acknowledgements'
  | 'src___childrenRuJson___Banner___DexterSibirtsev'
  | 'src___childrenRuJson___Banner___Experience'
  | 'src___childrenRuJson___Banner___HelloIAmAProgrammer'
  | 'src___childrenRuJson___Banner___SoftwareDeveloper'
  | 'src___childrenRuJson___Blog___Blog'
  | 'src___childrenRuJson___Contact___Contact'
  | 'src___childrenRuJson___Contact___GetInTouch'
  | 'src___childrenRuJson___Contact___SendEmail'
  | 'src___childrenRuJson___Education___Description'
  | 'src___childrenRuJson___Education___Education'
  | 'src___childrenRuJson___Experience___TranslationsUnderConstruction'
  | 'src___childrenRuJson___PageLinks___Acknowledgements'
  | 'src___childrenRuJson___PageLinks___Home'
  | 'src___childrenRuJson___SectionButtons___About'
  | 'src___childrenRuJson___SectionButtons___Blog'
  | 'src___childrenRuJson___SectionButtons___Contact'
  | 'src___childrenRuJson___SectionButtons___Experience'
  | 'src___childrenRuJson___SectionButtons___Skills'
  | 'src___childrenRuJson___Skills___Overview'
  | 'src___childrenRuJson___Skills___Skills'
  | 'src___childrenRuJson___Work___Work'
  | 'src___childRuJson___id'
  | 'src___childRuJson___parent___id'
  | 'src___childRuJson___parent___children'
  | 'src___childRuJson___children'
  | 'src___childRuJson___children___id'
  | 'src___childRuJson___children___children'
  | 'src___childRuJson___internal___content'
  | 'src___childRuJson___internal___contentDigest'
  | 'src___childRuJson___internal___description'
  | 'src___childRuJson___internal___fieldOwners'
  | 'src___childRuJson___internal___ignoreType'
  | 'src___childRuJson___internal___mediaType'
  | 'src___childRuJson___internal___owner'
  | 'src___childRuJson___internal___type'
  | 'src___childRuJson___About___AboutMe'
  | 'src___childRuJson___About___Description'
  | 'src___childRuJson___About___PhotoDescription'
  | 'src___childRuJson___About___ViewCV'
  | 'src___childRuJson___Acknowledgements'
  | 'src___childRuJson___Banner___DexterSibirtsev'
  | 'src___childRuJson___Banner___Experience'
  | 'src___childRuJson___Banner___HelloIAmAProgrammer'
  | 'src___childRuJson___Banner___SoftwareDeveloper'
  | 'src___childRuJson___Blog___Blog'
  | 'src___childRuJson___Contact___Contact'
  | 'src___childRuJson___Contact___GetInTouch'
  | 'src___childRuJson___Contact___SendEmail'
  | 'src___childRuJson___Education___Description'
  | 'src___childRuJson___Education___Education'
  | 'src___childRuJson___Experience___TranslationsUnderConstruction'
  | 'src___childRuJson___PageLinks___Acknowledgements'
  | 'src___childRuJson___PageLinks___Home'
  | 'src___childRuJson___SectionButtons___About'
  | 'src___childRuJson___SectionButtons___Blog'
  | 'src___childRuJson___SectionButtons___Contact'
  | 'src___childRuJson___SectionButtons___Experience'
  | 'src___childRuJson___SectionButtons___Skills'
  | 'src___childRuJson___Skills___Overview'
  | 'src___childRuJson___Skills___Skills'
  | 'src___childRuJson___Work___Work'
  | 'src___childrenLocale'
  | 'src___childrenLocale___id'
  | 'src___childrenLocale___parent___id'
  | 'src___childrenLocale___parent___children'
  | 'src___childrenLocale___children'
  | 'src___childrenLocale___children___id'
  | 'src___childrenLocale___children___children'
  | 'src___childrenLocale___internal___content'
  | 'src___childrenLocale___internal___contentDigest'
  | 'src___childrenLocale___internal___description'
  | 'src___childrenLocale___internal___fieldOwners'
  | 'src___childrenLocale___internal___ignoreType'
  | 'src___childrenLocale___internal___mediaType'
  | 'src___childrenLocale___internal___owner'
  | 'src___childrenLocale___internal___type'
  | 'src___childrenLocale___language'
  | 'src___childrenLocale___ns'
  | 'src___childrenLocale___data'
  | 'src___childrenLocale___fileAbsolutePath'
  | 'src___childLocale___id'
  | 'src___childLocale___parent___id'
  | 'src___childLocale___parent___children'
  | 'src___childLocale___children'
  | 'src___childLocale___children___id'
  | 'src___childLocale___children___children'
  | 'src___childLocale___internal___content'
  | 'src___childLocale___internal___contentDigest'
  | 'src___childLocale___internal___description'
  | 'src___childLocale___internal___fieldOwners'
  | 'src___childLocale___internal___ignoreType'
  | 'src___childLocale___internal___mediaType'
  | 'src___childLocale___internal___owner'
  | 'src___childLocale___internal___type'
  | 'src___childLocale___language'
  | 'src___childLocale___ns'
  | 'src___childLocale___data'
  | 'src___childLocale___fileAbsolutePath'
  | 'src___childrenHuJson'
  | 'src___childrenHuJson___id'
  | 'src___childrenHuJson___parent___id'
  | 'src___childrenHuJson___parent___children'
  | 'src___childrenHuJson___children'
  | 'src___childrenHuJson___children___id'
  | 'src___childrenHuJson___children___children'
  | 'src___childrenHuJson___internal___content'
  | 'src___childrenHuJson___internal___contentDigest'
  | 'src___childrenHuJson___internal___description'
  | 'src___childrenHuJson___internal___fieldOwners'
  | 'src___childrenHuJson___internal___ignoreType'
  | 'src___childrenHuJson___internal___mediaType'
  | 'src___childrenHuJson___internal___owner'
  | 'src___childrenHuJson___internal___type'
  | 'src___childrenHuJson___About___AboutMe'
  | 'src___childrenHuJson___About___Description'
  | 'src___childrenHuJson___About___PhotoDescription'
  | 'src___childrenHuJson___About___ViewCV'
  | 'src___childrenHuJson___Acknowledgements'
  | 'src___childrenHuJson___Banner___DexterSibirtsev'
  | 'src___childrenHuJson___Banner___Experience'
  | 'src___childrenHuJson___Banner___HelloIAmAProgrammer'
  | 'src___childrenHuJson___Banner___SoftwareDeveloper'
  | 'src___childrenHuJson___Blog___Blog'
  | 'src___childrenHuJson___Contact___Contact'
  | 'src___childrenHuJson___Contact___GetInTouch'
  | 'src___childrenHuJson___Contact___SendEmail'
  | 'src___childrenHuJson___Education___Description'
  | 'src___childrenHuJson___Education___Education'
  | 'src___childrenHuJson___Experience___TranslationsUnderConstruction'
  | 'src___childrenHuJson___PageLinks___Acknowledgements'
  | 'src___childrenHuJson___PageLinks___Home'
  | 'src___childrenHuJson___SectionButtons___About'
  | 'src___childrenHuJson___SectionButtons___Blog'
  | 'src___childrenHuJson___SectionButtons___Contact'
  | 'src___childrenHuJson___SectionButtons___Experience'
  | 'src___childrenHuJson___SectionButtons___Skills'
  | 'src___childrenHuJson___Skills___Overview'
  | 'src___childrenHuJson___Skills___Skills'
  | 'src___childrenHuJson___Work___Work'
  | 'src___childHuJson___id'
  | 'src___childHuJson___parent___id'
  | 'src___childHuJson___parent___children'
  | 'src___childHuJson___children'
  | 'src___childHuJson___children___id'
  | 'src___childHuJson___children___children'
  | 'src___childHuJson___internal___content'
  | 'src___childHuJson___internal___contentDigest'
  | 'src___childHuJson___internal___description'
  | 'src___childHuJson___internal___fieldOwners'
  | 'src___childHuJson___internal___ignoreType'
  | 'src___childHuJson___internal___mediaType'
  | 'src___childHuJson___internal___owner'
  | 'src___childHuJson___internal___type'
  | 'src___childHuJson___About___AboutMe'
  | 'src___childHuJson___About___Description'
  | 'src___childHuJson___About___PhotoDescription'
  | 'src___childHuJson___About___ViewCV'
  | 'src___childHuJson___Acknowledgements'
  | 'src___childHuJson___Banner___DexterSibirtsev'
  | 'src___childHuJson___Banner___Experience'
  | 'src___childHuJson___Banner___HelloIAmAProgrammer'
  | 'src___childHuJson___Banner___SoftwareDeveloper'
  | 'src___childHuJson___Blog___Blog'
  | 'src___childHuJson___Contact___Contact'
  | 'src___childHuJson___Contact___GetInTouch'
  | 'src___childHuJson___Contact___SendEmail'
  | 'src___childHuJson___Education___Description'
  | 'src___childHuJson___Education___Education'
  | 'src___childHuJson___Experience___TranslationsUnderConstruction'
  | 'src___childHuJson___PageLinks___Acknowledgements'
  | 'src___childHuJson___PageLinks___Home'
  | 'src___childHuJson___SectionButtons___About'
  | 'src___childHuJson___SectionButtons___Blog'
  | 'src___childHuJson___SectionButtons___Contact'
  | 'src___childHuJson___SectionButtons___Experience'
  | 'src___childHuJson___SectionButtons___Skills'
  | 'src___childHuJson___Skills___Overview'
  | 'src___childHuJson___Skills___Skills'
  | 'src___childHuJson___Work___Work'
  | 'src___childrenFrJson'
  | 'src___childrenFrJson___id'
  | 'src___childrenFrJson___parent___id'
  | 'src___childrenFrJson___parent___children'
  | 'src___childrenFrJson___children'
  | 'src___childrenFrJson___children___id'
  | 'src___childrenFrJson___children___children'
  | 'src___childrenFrJson___internal___content'
  | 'src___childrenFrJson___internal___contentDigest'
  | 'src___childrenFrJson___internal___description'
  | 'src___childrenFrJson___internal___fieldOwners'
  | 'src___childrenFrJson___internal___ignoreType'
  | 'src___childrenFrJson___internal___mediaType'
  | 'src___childrenFrJson___internal___owner'
  | 'src___childrenFrJson___internal___type'
  | 'src___childrenFrJson___About___AboutMe'
  | 'src___childrenFrJson___About___Description'
  | 'src___childrenFrJson___About___PhotoDescription'
  | 'src___childrenFrJson___About___ViewCV'
  | 'src___childrenFrJson___Acknowledgements'
  | 'src___childrenFrJson___Banner___DexterSibirtsev'
  | 'src___childrenFrJson___Banner___Experience'
  | 'src___childrenFrJson___Banner___HelloIAmAProgrammer'
  | 'src___childrenFrJson___Banner___SoftwareDeveloper'
  | 'src___childrenFrJson___Blog___Blog'
  | 'src___childrenFrJson___Contact___Contact'
  | 'src___childrenFrJson___Contact___GetInTouch'
  | 'src___childrenFrJson___Contact___SendEmail'
  | 'src___childrenFrJson___Education___Description'
  | 'src___childrenFrJson___Education___Education'
  | 'src___childrenFrJson___Experience___TranslationsUnderConstruction'
  | 'src___childrenFrJson___PageLinks___Acknowledgements'
  | 'src___childrenFrJson___PageLinks___Home'
  | 'src___childrenFrJson___SectionButtons___About'
  | 'src___childrenFrJson___SectionButtons___Blog'
  | 'src___childrenFrJson___SectionButtons___Contact'
  | 'src___childrenFrJson___SectionButtons___Experience'
  | 'src___childrenFrJson___SectionButtons___Skills'
  | 'src___childrenFrJson___Skills___Overview'
  | 'src___childrenFrJson___Skills___Skills'
  | 'src___childrenFrJson___Work___Work'
  | 'src___childFrJson___id'
  | 'src___childFrJson___parent___id'
  | 'src___childFrJson___parent___children'
  | 'src___childFrJson___children'
  | 'src___childFrJson___children___id'
  | 'src___childFrJson___children___children'
  | 'src___childFrJson___internal___content'
  | 'src___childFrJson___internal___contentDigest'
  | 'src___childFrJson___internal___description'
  | 'src___childFrJson___internal___fieldOwners'
  | 'src___childFrJson___internal___ignoreType'
  | 'src___childFrJson___internal___mediaType'
  | 'src___childFrJson___internal___owner'
  | 'src___childFrJson___internal___type'
  | 'src___childFrJson___About___AboutMe'
  | 'src___childFrJson___About___Description'
  | 'src___childFrJson___About___PhotoDescription'
  | 'src___childFrJson___About___ViewCV'
  | 'src___childFrJson___Acknowledgements'
  | 'src___childFrJson___Banner___DexterSibirtsev'
  | 'src___childFrJson___Banner___Experience'
  | 'src___childFrJson___Banner___HelloIAmAProgrammer'
  | 'src___childFrJson___Banner___SoftwareDeveloper'
  | 'src___childFrJson___Blog___Blog'
  | 'src___childFrJson___Contact___Contact'
  | 'src___childFrJson___Contact___GetInTouch'
  | 'src___childFrJson___Contact___SendEmail'
  | 'src___childFrJson___Education___Description'
  | 'src___childFrJson___Education___Education'
  | 'src___childFrJson___Experience___TranslationsUnderConstruction'
  | 'src___childFrJson___PageLinks___Acknowledgements'
  | 'src___childFrJson___PageLinks___Home'
  | 'src___childFrJson___SectionButtons___About'
  | 'src___childFrJson___SectionButtons___Blog'
  | 'src___childFrJson___SectionButtons___Contact'
  | 'src___childFrJson___SectionButtons___Experience'
  | 'src___childFrJson___SectionButtons___Skills'
  | 'src___childFrJson___Skills___Overview'
  | 'src___childFrJson___Skills___Skills'
  | 'src___childFrJson___Work___Work'
  | 'src___childrenFlagsJson'
  | 'src___childrenFlagsJson___id'
  | 'src___childrenFlagsJson___parent___id'
  | 'src___childrenFlagsJson___parent___children'
  | 'src___childrenFlagsJson___children'
  | 'src___childrenFlagsJson___children___id'
  | 'src___childrenFlagsJson___children___children'
  | 'src___childrenFlagsJson___internal___content'
  | 'src___childrenFlagsJson___internal___contentDigest'
  | 'src___childrenFlagsJson___internal___description'
  | 'src___childrenFlagsJson___internal___fieldOwners'
  | 'src___childrenFlagsJson___internal___ignoreType'
  | 'src___childrenFlagsJson___internal___mediaType'
  | 'src___childrenFlagsJson___internal___owner'
  | 'src___childrenFlagsJson___internal___type'
  | 'src___childrenFlagsJson___code'
  | 'src___childrenFlagsJson___name'
  | 'src___childrenFlagsJson___src___sourceInstanceName'
  | 'src___childrenFlagsJson___src___absolutePath'
  | 'src___childrenFlagsJson___src___relativePath'
  | 'src___childrenFlagsJson___src___extension'
  | 'src___childrenFlagsJson___src___size'
  | 'src___childrenFlagsJson___src___prettySize'
  | 'src___childrenFlagsJson___src___modifiedTime'
  | 'src___childrenFlagsJson___src___accessTime'
  | 'src___childrenFlagsJson___src___changeTime'
  | 'src___childrenFlagsJson___src___birthTime'
  | 'src___childrenFlagsJson___src___root'
  | 'src___childrenFlagsJson___src___dir'
  | 'src___childrenFlagsJson___src___base'
  | 'src___childrenFlagsJson___src___ext'
  | 'src___childrenFlagsJson___src___name'
  | 'src___childrenFlagsJson___src___relativeDirectory'
  | 'src___childrenFlagsJson___src___dev'
  | 'src___childrenFlagsJson___src___mode'
  | 'src___childrenFlagsJson___src___nlink'
  | 'src___childrenFlagsJson___src___uid'
  | 'src___childrenFlagsJson___src___gid'
  | 'src___childrenFlagsJson___src___rdev'
  | 'src___childrenFlagsJson___src___ino'
  | 'src___childrenFlagsJson___src___atimeMs'
  | 'src___childrenFlagsJson___src___mtimeMs'
  | 'src___childrenFlagsJson___src___ctimeMs'
  | 'src___childrenFlagsJson___src___atime'
  | 'src___childrenFlagsJson___src___mtime'
  | 'src___childrenFlagsJson___src___ctime'
  | 'src___childrenFlagsJson___src___birthtime'
  | 'src___childrenFlagsJson___src___birthtimeMs'
  | 'src___childrenFlagsJson___src___blksize'
  | 'src___childrenFlagsJson___src___blocks'
  | 'src___childrenFlagsJson___src___url'
  | 'src___childrenFlagsJson___src___publicURL'
  | 'src___childrenFlagsJson___src___childrenImageSharp'
  | 'src___childrenFlagsJson___src___childrenWorkJson'
  | 'src___childrenFlagsJson___src___childrenSkillsJson'
  | 'src___childrenFlagsJson___src___childrenSeJson'
  | 'src___childrenFlagsJson___src___childrenRuJson'
  | 'src___childrenFlagsJson___src___childrenLocale'
  | 'src___childrenFlagsJson___src___childrenHuJson'
  | 'src___childrenFlagsJson___src___childrenFrJson'
  | 'src___childrenFlagsJson___src___childrenFlagsJson'
  | 'src___childrenFlagsJson___src___childrenEtJson'
  | 'src___childrenFlagsJson___src___childrenEsJson'
  | 'src___childrenFlagsJson___src___childrenEnJson'
  | 'src___childrenFlagsJson___src___childrenEducationJson'
  | 'src___childrenFlagsJson___src___childrenDeJson'
  | 'src___childrenFlagsJson___src___id'
  | 'src___childrenFlagsJson___src___children'
  | 'src___childFlagsJson___id'
  | 'src___childFlagsJson___parent___id'
  | 'src___childFlagsJson___parent___children'
  | 'src___childFlagsJson___children'
  | 'src___childFlagsJson___children___id'
  | 'src___childFlagsJson___children___children'
  | 'src___childFlagsJson___internal___content'
  | 'src___childFlagsJson___internal___contentDigest'
  | 'src___childFlagsJson___internal___description'
  | 'src___childFlagsJson___internal___fieldOwners'
  | 'src___childFlagsJson___internal___ignoreType'
  | 'src___childFlagsJson___internal___mediaType'
  | 'src___childFlagsJson___internal___owner'
  | 'src___childFlagsJson___internal___type'
  | 'src___childFlagsJson___code'
  | 'src___childFlagsJson___name'
  | 'src___childFlagsJson___src___sourceInstanceName'
  | 'src___childFlagsJson___src___absolutePath'
  | 'src___childFlagsJson___src___relativePath'
  | 'src___childFlagsJson___src___extension'
  | 'src___childFlagsJson___src___size'
  | 'src___childFlagsJson___src___prettySize'
  | 'src___childFlagsJson___src___modifiedTime'
  | 'src___childFlagsJson___src___accessTime'
  | 'src___childFlagsJson___src___changeTime'
  | 'src___childFlagsJson___src___birthTime'
  | 'src___childFlagsJson___src___root'
  | 'src___childFlagsJson___src___dir'
  | 'src___childFlagsJson___src___base'
  | 'src___childFlagsJson___src___ext'
  | 'src___childFlagsJson___src___name'
  | 'src___childFlagsJson___src___relativeDirectory'
  | 'src___childFlagsJson___src___dev'
  | 'src___childFlagsJson___src___mode'
  | 'src___childFlagsJson___src___nlink'
  | 'src___childFlagsJson___src___uid'
  | 'src___childFlagsJson___src___gid'
  | 'src___childFlagsJson___src___rdev'
  | 'src___childFlagsJson___src___ino'
  | 'src___childFlagsJson___src___atimeMs'
  | 'src___childFlagsJson___src___mtimeMs'
  | 'src___childFlagsJson___src___ctimeMs'
  | 'src___childFlagsJson___src___atime'
  | 'src___childFlagsJson___src___mtime'
  | 'src___childFlagsJson___src___ctime'
  | 'src___childFlagsJson___src___birthtime'
  | 'src___childFlagsJson___src___birthtimeMs'
  | 'src___childFlagsJson___src___blksize'
  | 'src___childFlagsJson___src___blocks'
  | 'src___childFlagsJson___src___url'
  | 'src___childFlagsJson___src___publicURL'
  | 'src___childFlagsJson___src___childrenImageSharp'
  | 'src___childFlagsJson___src___childrenWorkJson'
  | 'src___childFlagsJson___src___childrenSkillsJson'
  | 'src___childFlagsJson___src___childrenSeJson'
  | 'src___childFlagsJson___src___childrenRuJson'
  | 'src___childFlagsJson___src___childrenLocale'
  | 'src___childFlagsJson___src___childrenHuJson'
  | 'src___childFlagsJson___src___childrenFrJson'
  | 'src___childFlagsJson___src___childrenFlagsJson'
  | 'src___childFlagsJson___src___childrenEtJson'
  | 'src___childFlagsJson___src___childrenEsJson'
  | 'src___childFlagsJson___src___childrenEnJson'
  | 'src___childFlagsJson___src___childrenEducationJson'
  | 'src___childFlagsJson___src___childrenDeJson'
  | 'src___childFlagsJson___src___id'
  | 'src___childFlagsJson___src___children'
  | 'src___childrenEtJson'
  | 'src___childrenEtJson___id'
  | 'src___childrenEtJson___parent___id'
  | 'src___childrenEtJson___parent___children'
  | 'src___childrenEtJson___children'
  | 'src___childrenEtJson___children___id'
  | 'src___childrenEtJson___children___children'
  | 'src___childrenEtJson___internal___content'
  | 'src___childrenEtJson___internal___contentDigest'
  | 'src___childrenEtJson___internal___description'
  | 'src___childrenEtJson___internal___fieldOwners'
  | 'src___childrenEtJson___internal___ignoreType'
  | 'src___childrenEtJson___internal___mediaType'
  | 'src___childrenEtJson___internal___owner'
  | 'src___childrenEtJson___internal___type'
  | 'src___childrenEtJson___About___AboutMe'
  | 'src___childrenEtJson___About___Description'
  | 'src___childrenEtJson___About___PhotoDescription'
  | 'src___childrenEtJson___About___ViewCV'
  | 'src___childrenEtJson___Acknowledgements'
  | 'src___childrenEtJson___Banner___DexterSibirtsev'
  | 'src___childrenEtJson___Banner___Experience'
  | 'src___childrenEtJson___Banner___HelloIAmAProgrammer'
  | 'src___childrenEtJson___Banner___SoftwareDeveloper'
  | 'src___childrenEtJson___Blog___Blog'
  | 'src___childrenEtJson___Contact___Contact'
  | 'src___childrenEtJson___Contact___GetInTouch'
  | 'src___childrenEtJson___Contact___SendEmail'
  | 'src___childrenEtJson___Education___Description'
  | 'src___childrenEtJson___Education___Education'
  | 'src___childrenEtJson___Experience___TranslationsUnderConstruction'
  | 'src___childrenEtJson___PageLinks___Acknowledgements'
  | 'src___childrenEtJson___PageLinks___Home'
  | 'src___childrenEtJson___SectionButtons___About'
  | 'src___childrenEtJson___SectionButtons___Blog'
  | 'src___childrenEtJson___SectionButtons___Contact'
  | 'src___childrenEtJson___SectionButtons___Experience'
  | 'src___childrenEtJson___SectionButtons___Skills'
  | 'src___childrenEtJson___Skills___Overview'
  | 'src___childrenEtJson___Skills___Skills'
  | 'src___childrenEtJson___Work___Work'
  | 'src___childEtJson___id'
  | 'src___childEtJson___parent___id'
  | 'src___childEtJson___parent___children'
  | 'src___childEtJson___children'
  | 'src___childEtJson___children___id'
  | 'src___childEtJson___children___children'
  | 'src___childEtJson___internal___content'
  | 'src___childEtJson___internal___contentDigest'
  | 'src___childEtJson___internal___description'
  | 'src___childEtJson___internal___fieldOwners'
  | 'src___childEtJson___internal___ignoreType'
  | 'src___childEtJson___internal___mediaType'
  | 'src___childEtJson___internal___owner'
  | 'src___childEtJson___internal___type'
  | 'src___childEtJson___About___AboutMe'
  | 'src___childEtJson___About___Description'
  | 'src___childEtJson___About___PhotoDescription'
  | 'src___childEtJson___About___ViewCV'
  | 'src___childEtJson___Acknowledgements'
  | 'src___childEtJson___Banner___DexterSibirtsev'
  | 'src___childEtJson___Banner___Experience'
  | 'src___childEtJson___Banner___HelloIAmAProgrammer'
  | 'src___childEtJson___Banner___SoftwareDeveloper'
  | 'src___childEtJson___Blog___Blog'
  | 'src___childEtJson___Contact___Contact'
  | 'src___childEtJson___Contact___GetInTouch'
  | 'src___childEtJson___Contact___SendEmail'
  | 'src___childEtJson___Education___Description'
  | 'src___childEtJson___Education___Education'
  | 'src___childEtJson___Experience___TranslationsUnderConstruction'
  | 'src___childEtJson___PageLinks___Acknowledgements'
  | 'src___childEtJson___PageLinks___Home'
  | 'src___childEtJson___SectionButtons___About'
  | 'src___childEtJson___SectionButtons___Blog'
  | 'src___childEtJson___SectionButtons___Contact'
  | 'src___childEtJson___SectionButtons___Experience'
  | 'src___childEtJson___SectionButtons___Skills'
  | 'src___childEtJson___Skills___Overview'
  | 'src___childEtJson___Skills___Skills'
  | 'src___childEtJson___Work___Work'
  | 'src___childrenEsJson'
  | 'src___childrenEsJson___id'
  | 'src___childrenEsJson___parent___id'
  | 'src___childrenEsJson___parent___children'
  | 'src___childrenEsJson___children'
  | 'src___childrenEsJson___children___id'
  | 'src___childrenEsJson___children___children'
  | 'src___childrenEsJson___internal___content'
  | 'src___childrenEsJson___internal___contentDigest'
  | 'src___childrenEsJson___internal___description'
  | 'src___childrenEsJson___internal___fieldOwners'
  | 'src___childrenEsJson___internal___ignoreType'
  | 'src___childrenEsJson___internal___mediaType'
  | 'src___childrenEsJson___internal___owner'
  | 'src___childrenEsJson___internal___type'
  | 'src___childrenEsJson___About___AboutMe'
  | 'src___childrenEsJson___About___Description'
  | 'src___childrenEsJson___About___PhotoDescription'
  | 'src___childrenEsJson___About___ViewCV'
  | 'src___childrenEsJson___Acknowledgements'
  | 'src___childrenEsJson___Banner___DexterSibirtsev'
  | 'src___childrenEsJson___Banner___Experience'
  | 'src___childrenEsJson___Banner___HelloIAmAProgrammer'
  | 'src___childrenEsJson___Banner___SoftwareDeveloper'
  | 'src___childrenEsJson___Blog___Blog'
  | 'src___childrenEsJson___Contact___Contact'
  | 'src___childrenEsJson___Contact___GetInTouch'
  | 'src___childrenEsJson___Contact___SendEmail'
  | 'src___childrenEsJson___Education___Description'
  | 'src___childrenEsJson___Education___Education'
  | 'src___childrenEsJson___Experience___TranslationsUnderConstruction'
  | 'src___childrenEsJson___PageLinks___Acknowledgements'
  | 'src___childrenEsJson___PageLinks___Home'
  | 'src___childrenEsJson___SectionButtons___About'
  | 'src___childrenEsJson___SectionButtons___Blog'
  | 'src___childrenEsJson___SectionButtons___Contact'
  | 'src___childrenEsJson___SectionButtons___Experience'
  | 'src___childrenEsJson___SectionButtons___Skills'
  | 'src___childrenEsJson___Skills___Overview'
  | 'src___childrenEsJson___Skills___Skills'
  | 'src___childrenEsJson___Work___Work'
  | 'src___childEsJson___id'
  | 'src___childEsJson___parent___id'
  | 'src___childEsJson___parent___children'
  | 'src___childEsJson___children'
  | 'src___childEsJson___children___id'
  | 'src___childEsJson___children___children'
  | 'src___childEsJson___internal___content'
  | 'src___childEsJson___internal___contentDigest'
  | 'src___childEsJson___internal___description'
  | 'src___childEsJson___internal___fieldOwners'
  | 'src___childEsJson___internal___ignoreType'
  | 'src___childEsJson___internal___mediaType'
  | 'src___childEsJson___internal___owner'
  | 'src___childEsJson___internal___type'
  | 'src___childEsJson___About___AboutMe'
  | 'src___childEsJson___About___Description'
  | 'src___childEsJson___About___PhotoDescription'
  | 'src___childEsJson___About___ViewCV'
  | 'src___childEsJson___Acknowledgements'
  | 'src___childEsJson___Banner___DexterSibirtsev'
  | 'src___childEsJson___Banner___Experience'
  | 'src___childEsJson___Banner___HelloIAmAProgrammer'
  | 'src___childEsJson___Banner___SoftwareDeveloper'
  | 'src___childEsJson___Blog___Blog'
  | 'src___childEsJson___Contact___Contact'
  | 'src___childEsJson___Contact___GetInTouch'
  | 'src___childEsJson___Contact___SendEmail'
  | 'src___childEsJson___Education___Description'
  | 'src___childEsJson___Education___Education'
  | 'src___childEsJson___Experience___TranslationsUnderConstruction'
  | 'src___childEsJson___PageLinks___Acknowledgements'
  | 'src___childEsJson___PageLinks___Home'
  | 'src___childEsJson___SectionButtons___About'
  | 'src___childEsJson___SectionButtons___Blog'
  | 'src___childEsJson___SectionButtons___Contact'
  | 'src___childEsJson___SectionButtons___Experience'
  | 'src___childEsJson___SectionButtons___Skills'
  | 'src___childEsJson___Skills___Overview'
  | 'src___childEsJson___Skills___Skills'
  | 'src___childEsJson___Work___Work'
  | 'src___childrenEnJson'
  | 'src___childrenEnJson___id'
  | 'src___childrenEnJson___parent___id'
  | 'src___childrenEnJson___parent___children'
  | 'src___childrenEnJson___children'
  | 'src___childrenEnJson___children___id'
  | 'src___childrenEnJson___children___children'
  | 'src___childrenEnJson___internal___content'
  | 'src___childrenEnJson___internal___contentDigest'
  | 'src___childrenEnJson___internal___description'
  | 'src___childrenEnJson___internal___fieldOwners'
  | 'src___childrenEnJson___internal___ignoreType'
  | 'src___childrenEnJson___internal___mediaType'
  | 'src___childrenEnJson___internal___owner'
  | 'src___childrenEnJson___internal___type'
  | 'src___childrenEnJson___About___AboutMe'
  | 'src___childrenEnJson___About___Description'
  | 'src___childrenEnJson___About___PhotoDescription'
  | 'src___childrenEnJson___About___ViewCV'
  | 'src___childrenEnJson___Acknowledgements'
  | 'src___childrenEnJson___Banner___DexterSibirtsev'
  | 'src___childrenEnJson___Banner___Experience'
  | 'src___childrenEnJson___Banner___HelloIAmAProgrammer'
  | 'src___childrenEnJson___Banner___SoftwareDeveloper'
  | 'src___childrenEnJson___Blog___Blog'
  | 'src___childrenEnJson___Contact___Contact'
  | 'src___childrenEnJson___Contact___GetInTouch'
  | 'src___childrenEnJson___Contact___SendEmail'
  | 'src___childrenEnJson___Education___Description'
  | 'src___childrenEnJson___Education___Education'
  | 'src___childrenEnJson___Experience___TranslationsUnderConstruction'
  | 'src___childrenEnJson___PageLinks___Acknowledgements'
  | 'src___childrenEnJson___PageLinks___Home'
  | 'src___childrenEnJson___SectionButtons___About'
  | 'src___childrenEnJson___SectionButtons___Blog'
  | 'src___childrenEnJson___SectionButtons___Contact'
  | 'src___childrenEnJson___SectionButtons___Experience'
  | 'src___childrenEnJson___SectionButtons___Skills'
  | 'src___childrenEnJson___Skills___Overview'
  | 'src___childrenEnJson___Skills___Skills'
  | 'src___childrenEnJson___Work___Work'
  | 'src___childEnJson___id'
  | 'src___childEnJson___parent___id'
  | 'src___childEnJson___parent___children'
  | 'src___childEnJson___children'
  | 'src___childEnJson___children___id'
  | 'src___childEnJson___children___children'
  | 'src___childEnJson___internal___content'
  | 'src___childEnJson___internal___contentDigest'
  | 'src___childEnJson___internal___description'
  | 'src___childEnJson___internal___fieldOwners'
  | 'src___childEnJson___internal___ignoreType'
  | 'src___childEnJson___internal___mediaType'
  | 'src___childEnJson___internal___owner'
  | 'src___childEnJson___internal___type'
  | 'src___childEnJson___About___AboutMe'
  | 'src___childEnJson___About___Description'
  | 'src___childEnJson___About___PhotoDescription'
  | 'src___childEnJson___About___ViewCV'
  | 'src___childEnJson___Acknowledgements'
  | 'src___childEnJson___Banner___DexterSibirtsev'
  | 'src___childEnJson___Banner___Experience'
  | 'src___childEnJson___Banner___HelloIAmAProgrammer'
  | 'src___childEnJson___Banner___SoftwareDeveloper'
  | 'src___childEnJson___Blog___Blog'
  | 'src___childEnJson___Contact___Contact'
  | 'src___childEnJson___Contact___GetInTouch'
  | 'src___childEnJson___Contact___SendEmail'
  | 'src___childEnJson___Education___Description'
  | 'src___childEnJson___Education___Education'
  | 'src___childEnJson___Experience___TranslationsUnderConstruction'
  | 'src___childEnJson___PageLinks___Acknowledgements'
  | 'src___childEnJson___PageLinks___Home'
  | 'src___childEnJson___SectionButtons___About'
  | 'src___childEnJson___SectionButtons___Blog'
  | 'src___childEnJson___SectionButtons___Contact'
  | 'src___childEnJson___SectionButtons___Experience'
  | 'src___childEnJson___SectionButtons___Skills'
  | 'src___childEnJson___Skills___Overview'
  | 'src___childEnJson___Skills___Skills'
  | 'src___childEnJson___Work___Work'
  | 'src___childrenEducationJson'
  | 'src___childrenEducationJson___id'
  | 'src___childrenEducationJson___parent___id'
  | 'src___childrenEducationJson___parent___children'
  | 'src___childrenEducationJson___children'
  | 'src___childrenEducationJson___children___id'
  | 'src___childrenEducationJson___children___children'
  | 'src___childrenEducationJson___internal___content'
  | 'src___childrenEducationJson___internal___contentDigest'
  | 'src___childrenEducationJson___internal___description'
  | 'src___childrenEducationJson___internal___fieldOwners'
  | 'src___childrenEducationJson___internal___ignoreType'
  | 'src___childrenEducationJson___internal___mediaType'
  | 'src___childrenEducationJson___internal___owner'
  | 'src___childrenEducationJson___internal___type'
  | 'src___childrenEducationJson___location'
  | 'src___childrenEducationJson___locationFlag___sourceInstanceName'
  | 'src___childrenEducationJson___locationFlag___absolutePath'
  | 'src___childrenEducationJson___locationFlag___relativePath'
  | 'src___childrenEducationJson___locationFlag___extension'
  | 'src___childrenEducationJson___locationFlag___size'
  | 'src___childrenEducationJson___locationFlag___prettySize'
  | 'src___childrenEducationJson___locationFlag___modifiedTime'
  | 'src___childrenEducationJson___locationFlag___accessTime'
  | 'src___childrenEducationJson___locationFlag___changeTime'
  | 'src___childrenEducationJson___locationFlag___birthTime'
  | 'src___childrenEducationJson___locationFlag___root'
  | 'src___childrenEducationJson___locationFlag___dir'
  | 'src___childrenEducationJson___locationFlag___base'
  | 'src___childrenEducationJson___locationFlag___ext'
  | 'src___childrenEducationJson___locationFlag___name'
  | 'src___childrenEducationJson___locationFlag___relativeDirectory'
  | 'src___childrenEducationJson___locationFlag___dev'
  | 'src___childrenEducationJson___locationFlag___mode'
  | 'src___childrenEducationJson___locationFlag___nlink'
  | 'src___childrenEducationJson___locationFlag___uid'
  | 'src___childrenEducationJson___locationFlag___gid'
  | 'src___childrenEducationJson___locationFlag___rdev'
  | 'src___childrenEducationJson___locationFlag___ino'
  | 'src___childrenEducationJson___locationFlag___atimeMs'
  | 'src___childrenEducationJson___locationFlag___mtimeMs'
  | 'src___childrenEducationJson___locationFlag___ctimeMs'
  | 'src___childrenEducationJson___locationFlag___atime'
  | 'src___childrenEducationJson___locationFlag___mtime'
  | 'src___childrenEducationJson___locationFlag___ctime'
  | 'src___childrenEducationJson___locationFlag___birthtime'
  | 'src___childrenEducationJson___locationFlag___birthtimeMs'
  | 'src___childrenEducationJson___locationFlag___blksize'
  | 'src___childrenEducationJson___locationFlag___blocks'
  | 'src___childrenEducationJson___locationFlag___url'
  | 'src___childrenEducationJson___locationFlag___publicURL'
  | 'src___childrenEducationJson___locationFlag___childrenImageSharp'
  | 'src___childrenEducationJson___locationFlag___childrenWorkJson'
  | 'src___childrenEducationJson___locationFlag___childrenSkillsJson'
  | 'src___childrenEducationJson___locationFlag___childrenSeJson'
  | 'src___childrenEducationJson___locationFlag___childrenRuJson'
  | 'src___childrenEducationJson___locationFlag___childrenLocale'
  | 'src___childrenEducationJson___locationFlag___childrenHuJson'
  | 'src___childrenEducationJson___locationFlag___childrenFrJson'
  | 'src___childrenEducationJson___locationFlag___childrenFlagsJson'
  | 'src___childrenEducationJson___locationFlag___childrenEtJson'
  | 'src___childrenEducationJson___locationFlag___childrenEsJson'
  | 'src___childrenEducationJson___locationFlag___childrenEnJson'
  | 'src___childrenEducationJson___locationFlag___childrenEducationJson'
  | 'src___childrenEducationJson___locationFlag___childrenDeJson'
  | 'src___childrenEducationJson___locationFlag___id'
  | 'src___childrenEducationJson___locationFlag___children'
  | 'src___childrenEducationJson___title'
  | 'src___childrenEducationJson___logo___sourceInstanceName'
  | 'src___childrenEducationJson___logo___absolutePath'
  | 'src___childrenEducationJson___logo___relativePath'
  | 'src___childrenEducationJson___logo___extension'
  | 'src___childrenEducationJson___logo___size'
  | 'src___childrenEducationJson___logo___prettySize'
  | 'src___childrenEducationJson___logo___modifiedTime'
  | 'src___childrenEducationJson___logo___accessTime'
  | 'src___childrenEducationJson___logo___changeTime'
  | 'src___childrenEducationJson___logo___birthTime'
  | 'src___childrenEducationJson___logo___root'
  | 'src___childrenEducationJson___logo___dir'
  | 'src___childrenEducationJson___logo___base'
  | 'src___childrenEducationJson___logo___ext'
  | 'src___childrenEducationJson___logo___name'
  | 'src___childrenEducationJson___logo___relativeDirectory'
  | 'src___childrenEducationJson___logo___dev'
  | 'src___childrenEducationJson___logo___mode'
  | 'src___childrenEducationJson___logo___nlink'
  | 'src___childrenEducationJson___logo___uid'
  | 'src___childrenEducationJson___logo___gid'
  | 'src___childrenEducationJson___logo___rdev'
  | 'src___childrenEducationJson___logo___ino'
  | 'src___childrenEducationJson___logo___atimeMs'
  | 'src___childrenEducationJson___logo___mtimeMs'
  | 'src___childrenEducationJson___logo___ctimeMs'
  | 'src___childrenEducationJson___logo___atime'
  | 'src___childrenEducationJson___logo___mtime'
  | 'src___childrenEducationJson___logo___ctime'
  | 'src___childrenEducationJson___logo___birthtime'
  | 'src___childrenEducationJson___logo___birthtimeMs'
  | 'src___childrenEducationJson___logo___blksize'
  | 'src___childrenEducationJson___logo___blocks'
  | 'src___childrenEducationJson___logo___url'
  | 'src___childrenEducationJson___logo___publicURL'
  | 'src___childrenEducationJson___logo___childrenImageSharp'
  | 'src___childrenEducationJson___logo___childrenWorkJson'
  | 'src___childrenEducationJson___logo___childrenSkillsJson'
  | 'src___childrenEducationJson___logo___childrenSeJson'
  | 'src___childrenEducationJson___logo___childrenRuJson'
  | 'src___childrenEducationJson___logo___childrenLocale'
  | 'src___childrenEducationJson___logo___childrenHuJson'
  | 'src___childrenEducationJson___logo___childrenFrJson'
  | 'src___childrenEducationJson___logo___childrenFlagsJson'
  | 'src___childrenEducationJson___logo___childrenEtJson'
  | 'src___childrenEducationJson___logo___childrenEsJson'
  | 'src___childrenEducationJson___logo___childrenEnJson'
  | 'src___childrenEducationJson___logo___childrenEducationJson'
  | 'src___childrenEducationJson___logo___childrenDeJson'
  | 'src___childrenEducationJson___logo___id'
  | 'src___childrenEducationJson___logo___children'
  | 'src___childrenEducationJson___name'
  | 'src___childrenEducationJson___dates'
  | 'src___childrenEducationJson___description'
  | 'src___childEducationJson___id'
  | 'src___childEducationJson___parent___id'
  | 'src___childEducationJson___parent___children'
  | 'src___childEducationJson___children'
  | 'src___childEducationJson___children___id'
  | 'src___childEducationJson___children___children'
  | 'src___childEducationJson___internal___content'
  | 'src___childEducationJson___internal___contentDigest'
  | 'src___childEducationJson___internal___description'
  | 'src___childEducationJson___internal___fieldOwners'
  | 'src___childEducationJson___internal___ignoreType'
  | 'src___childEducationJson___internal___mediaType'
  | 'src___childEducationJson___internal___owner'
  | 'src___childEducationJson___internal___type'
  | 'src___childEducationJson___location'
  | 'src___childEducationJson___locationFlag___sourceInstanceName'
  | 'src___childEducationJson___locationFlag___absolutePath'
  | 'src___childEducationJson___locationFlag___relativePath'
  | 'src___childEducationJson___locationFlag___extension'
  | 'src___childEducationJson___locationFlag___size'
  | 'src___childEducationJson___locationFlag___prettySize'
  | 'src___childEducationJson___locationFlag___modifiedTime'
  | 'src___childEducationJson___locationFlag___accessTime'
  | 'src___childEducationJson___locationFlag___changeTime'
  | 'src___childEducationJson___locationFlag___birthTime'
  | 'src___childEducationJson___locationFlag___root'
  | 'src___childEducationJson___locationFlag___dir'
  | 'src___childEducationJson___locationFlag___base'
  | 'src___childEducationJson___locationFlag___ext'
  | 'src___childEducationJson___locationFlag___name'
  | 'src___childEducationJson___locationFlag___relativeDirectory'
  | 'src___childEducationJson___locationFlag___dev'
  | 'src___childEducationJson___locationFlag___mode'
  | 'src___childEducationJson___locationFlag___nlink'
  | 'src___childEducationJson___locationFlag___uid'
  | 'src___childEducationJson___locationFlag___gid'
  | 'src___childEducationJson___locationFlag___rdev'
  | 'src___childEducationJson___locationFlag___ino'
  | 'src___childEducationJson___locationFlag___atimeMs'
  | 'src___childEducationJson___locationFlag___mtimeMs'
  | 'src___childEducationJson___locationFlag___ctimeMs'
  | 'src___childEducationJson___locationFlag___atime'
  | 'src___childEducationJson___locationFlag___mtime'
  | 'src___childEducationJson___locationFlag___ctime'
  | 'src___childEducationJson___locationFlag___birthtime'
  | 'src___childEducationJson___locationFlag___birthtimeMs'
  | 'src___childEducationJson___locationFlag___blksize'
  | 'src___childEducationJson___locationFlag___blocks'
  | 'src___childEducationJson___locationFlag___url'
  | 'src___childEducationJson___locationFlag___publicURL'
  | 'src___childEducationJson___locationFlag___childrenImageSharp'
  | 'src___childEducationJson___locationFlag___childrenWorkJson'
  | 'src___childEducationJson___locationFlag___childrenSkillsJson'
  | 'src___childEducationJson___locationFlag___childrenSeJson'
  | 'src___childEducationJson___locationFlag___childrenRuJson'
  | 'src___childEducationJson___locationFlag___childrenLocale'
  | 'src___childEducationJson___locationFlag___childrenHuJson'
  | 'src___childEducationJson___locationFlag___childrenFrJson'
  | 'src___childEducationJson___locationFlag___childrenFlagsJson'
  | 'src___childEducationJson___locationFlag___childrenEtJson'
  | 'src___childEducationJson___locationFlag___childrenEsJson'
  | 'src___childEducationJson___locationFlag___childrenEnJson'
  | 'src___childEducationJson___locationFlag___childrenEducationJson'
  | 'src___childEducationJson___locationFlag___childrenDeJson'
  | 'src___childEducationJson___locationFlag___id'
  | 'src___childEducationJson___locationFlag___children'
  | 'src___childEducationJson___title'
  | 'src___childEducationJson___logo___sourceInstanceName'
  | 'src___childEducationJson___logo___absolutePath'
  | 'src___childEducationJson___logo___relativePath'
  | 'src___childEducationJson___logo___extension'
  | 'src___childEducationJson___logo___size'
  | 'src___childEducationJson___logo___prettySize'
  | 'src___childEducationJson___logo___modifiedTime'
  | 'src___childEducationJson___logo___accessTime'
  | 'src___childEducationJson___logo___changeTime'
  | 'src___childEducationJson___logo___birthTime'
  | 'src___childEducationJson___logo___root'
  | 'src___childEducationJson___logo___dir'
  | 'src___childEducationJson___logo___base'
  | 'src___childEducationJson___logo___ext'
  | 'src___childEducationJson___logo___name'
  | 'src___childEducationJson___logo___relativeDirectory'
  | 'src___childEducationJson___logo___dev'
  | 'src___childEducationJson___logo___mode'
  | 'src___childEducationJson___logo___nlink'
  | 'src___childEducationJson___logo___uid'
  | 'src___childEducationJson___logo___gid'
  | 'src___childEducationJson___logo___rdev'
  | 'src___childEducationJson___logo___ino'
  | 'src___childEducationJson___logo___atimeMs'
  | 'src___childEducationJson___logo___mtimeMs'
  | 'src___childEducationJson___logo___ctimeMs'
  | 'src___childEducationJson___logo___atime'
  | 'src___childEducationJson___logo___mtime'
  | 'src___childEducationJson___logo___ctime'
  | 'src___childEducationJson___logo___birthtime'
  | 'src___childEducationJson___logo___birthtimeMs'
  | 'src___childEducationJson___logo___blksize'
  | 'src___childEducationJson___logo___blocks'
  | 'src___childEducationJson___logo___url'
  | 'src___childEducationJson___logo___publicURL'
  | 'src___childEducationJson___logo___childrenImageSharp'
  | 'src___childEducationJson___logo___childrenWorkJson'
  | 'src___childEducationJson___logo___childrenSkillsJson'
  | 'src___childEducationJson___logo___childrenSeJson'
  | 'src___childEducationJson___logo___childrenRuJson'
  | 'src___childEducationJson___logo___childrenLocale'
  | 'src___childEducationJson___logo___childrenHuJson'
  | 'src___childEducationJson___logo___childrenFrJson'
  | 'src___childEducationJson___logo___childrenFlagsJson'
  | 'src___childEducationJson___logo___childrenEtJson'
  | 'src___childEducationJson___logo___childrenEsJson'
  | 'src___childEducationJson___logo___childrenEnJson'
  | 'src___childEducationJson___logo___childrenEducationJson'
  | 'src___childEducationJson___logo___childrenDeJson'
  | 'src___childEducationJson___logo___id'
  | 'src___childEducationJson___logo___children'
  | 'src___childEducationJson___name'
  | 'src___childEducationJson___dates'
  | 'src___childEducationJson___description'
  | 'src___childrenDeJson'
  | 'src___childrenDeJson___id'
  | 'src___childrenDeJson___parent___id'
  | 'src___childrenDeJson___parent___children'
  | 'src___childrenDeJson___children'
  | 'src___childrenDeJson___children___id'
  | 'src___childrenDeJson___children___children'
  | 'src___childrenDeJson___internal___content'
  | 'src___childrenDeJson___internal___contentDigest'
  | 'src___childrenDeJson___internal___description'
  | 'src___childrenDeJson___internal___fieldOwners'
  | 'src___childrenDeJson___internal___ignoreType'
  | 'src___childrenDeJson___internal___mediaType'
  | 'src___childrenDeJson___internal___owner'
  | 'src___childrenDeJson___internal___type'
  | 'src___childrenDeJson___Banner___SoftwareDeveloper'
  | 'src___childDeJson___id'
  | 'src___childDeJson___parent___id'
  | 'src___childDeJson___parent___children'
  | 'src___childDeJson___children'
  | 'src___childDeJson___children___id'
  | 'src___childDeJson___children___children'
  | 'src___childDeJson___internal___content'
  | 'src___childDeJson___internal___contentDigest'
  | 'src___childDeJson___internal___description'
  | 'src___childDeJson___internal___fieldOwners'
  | 'src___childDeJson___internal___ignoreType'
  | 'src___childDeJson___internal___mediaType'
  | 'src___childDeJson___internal___owner'
  | 'src___childDeJson___internal___type'
  | 'src___childDeJson___Banner___SoftwareDeveloper'
  | 'src___id'
  | 'src___parent___id'
  | 'src___parent___parent___id'
  | 'src___parent___parent___children'
  | 'src___parent___children'
  | 'src___parent___children___id'
  | 'src___parent___children___children'
  | 'src___parent___internal___content'
  | 'src___parent___internal___contentDigest'
  | 'src___parent___internal___description'
  | 'src___parent___internal___fieldOwners'
  | 'src___parent___internal___ignoreType'
  | 'src___parent___internal___mediaType'
  | 'src___parent___internal___owner'
  | 'src___parent___internal___type'
  | 'src___children'
  | 'src___children___id'
  | 'src___children___parent___id'
  | 'src___children___parent___children'
  | 'src___children___children'
  | 'src___children___children___id'
  | 'src___children___children___children'
  | 'src___children___internal___content'
  | 'src___children___internal___contentDigest'
  | 'src___children___internal___description'
  | 'src___children___internal___fieldOwners'
  | 'src___children___internal___ignoreType'
  | 'src___children___internal___mediaType'
  | 'src___children___internal___owner'
  | 'src___children___internal___type'
  | 'src___internal___content'
  | 'src___internal___contentDigest'
  | 'src___internal___description'
  | 'src___internal___fieldOwners'
  | 'src___internal___ignoreType'
  | 'src___internal___mediaType'
  | 'src___internal___owner'
  | 'src___internal___type';

export type FlagsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FlagsJsonEdge>;
  nodes: Array<FlagsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FlagsJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FlagsJsonGroupConnectionDistinctArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonGroupConnectionMaxArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonGroupConnectionMinArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonGroupConnectionSumArgs = {
  field: FlagsJsonFieldsEnum;
};


export type FlagsJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FlagsJsonFieldsEnum;
};

export type FlagsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FlagsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type EtJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EtJsonEdge>;
  nodes: Array<EtJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EtJsonGroupConnection>;
};


export type EtJsonConnectionDistinctArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonConnectionMaxArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonConnectionMinArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonConnectionSumArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EtJsonFieldsEnum;
};

export type EtJsonEdge = {
  next?: Maybe<EtJson>;
  node: EtJson;
  previous?: Maybe<EtJson>;
};

export type EtJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'About___AboutMe'
  | 'About___Description'
  | 'About___PhotoDescription'
  | 'About___ViewCV'
  | 'Acknowledgements'
  | 'Banner___DexterSibirtsev'
  | 'Banner___Experience'
  | 'Banner___HelloIAmAProgrammer'
  | 'Banner___SoftwareDeveloper'
  | 'Blog___Blog'
  | 'Contact___Contact'
  | 'Contact___GetInTouch'
  | 'Contact___SendEmail'
  | 'Education___Description'
  | 'Education___Education'
  | 'Experience___TranslationsUnderConstruction'
  | 'PageLinks___Acknowledgements'
  | 'PageLinks___Home'
  | 'SectionButtons___About'
  | 'SectionButtons___Blog'
  | 'SectionButtons___Contact'
  | 'SectionButtons___Experience'
  | 'SectionButtons___Skills'
  | 'Skills___Overview'
  | 'Skills___Skills'
  | 'Work___Work';

export type EtJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EtJsonEdge>;
  nodes: Array<EtJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EtJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type EtJsonGroupConnectionDistinctArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonGroupConnectionMaxArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonGroupConnectionMinArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonGroupConnectionSumArgs = {
  field: EtJsonFieldsEnum;
};


export type EtJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EtJsonFieldsEnum;
};

export type EtJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<EtJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type EsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EsJsonEdge>;
  nodes: Array<EsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EsJsonGroupConnection>;
};


export type EsJsonConnectionDistinctArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonConnectionMaxArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonConnectionMinArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonConnectionSumArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EsJsonFieldsEnum;
};

export type EsJsonEdge = {
  next?: Maybe<EsJson>;
  node: EsJson;
  previous?: Maybe<EsJson>;
};

export type EsJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'About___AboutMe'
  | 'About___Description'
  | 'About___PhotoDescription'
  | 'About___ViewCV'
  | 'Acknowledgements'
  | 'Banner___DexterSibirtsev'
  | 'Banner___Experience'
  | 'Banner___HelloIAmAProgrammer'
  | 'Banner___SoftwareDeveloper'
  | 'Blog___Blog'
  | 'Contact___Contact'
  | 'Contact___GetInTouch'
  | 'Contact___SendEmail'
  | 'Education___Description'
  | 'Education___Education'
  | 'Experience___TranslationsUnderConstruction'
  | 'PageLinks___Acknowledgements'
  | 'PageLinks___Home'
  | 'SectionButtons___About'
  | 'SectionButtons___Blog'
  | 'SectionButtons___Contact'
  | 'SectionButtons___Experience'
  | 'SectionButtons___Skills'
  | 'Skills___Overview'
  | 'Skills___Skills'
  | 'Work___Work';

export type EsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EsJsonEdge>;
  nodes: Array<EsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EsJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type EsJsonGroupConnectionDistinctArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonGroupConnectionMaxArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonGroupConnectionMinArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonGroupConnectionSumArgs = {
  field: EsJsonFieldsEnum;
};


export type EsJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EsJsonFieldsEnum;
};

export type EsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<EsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type EnJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EnJsonEdge>;
  nodes: Array<EnJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EnJsonGroupConnection>;
};


export type EnJsonConnectionDistinctArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonConnectionMaxArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonConnectionMinArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonConnectionSumArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EnJsonFieldsEnum;
};

export type EnJsonEdge = {
  next?: Maybe<EnJson>;
  node: EnJson;
  previous?: Maybe<EnJson>;
};

export type EnJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'About___AboutMe'
  | 'About___Description'
  | 'About___PhotoDescription'
  | 'About___ViewCV'
  | 'Acknowledgements'
  | 'Banner___DexterSibirtsev'
  | 'Banner___Experience'
  | 'Banner___HelloIAmAProgrammer'
  | 'Banner___SoftwareDeveloper'
  | 'Blog___Blog'
  | 'Contact___Contact'
  | 'Contact___GetInTouch'
  | 'Contact___SendEmail'
  | 'Education___Description'
  | 'Education___Education'
  | 'Experience___TranslationsUnderConstruction'
  | 'PageLinks___Acknowledgements'
  | 'PageLinks___Home'
  | 'SectionButtons___About'
  | 'SectionButtons___Blog'
  | 'SectionButtons___Contact'
  | 'SectionButtons___Experience'
  | 'SectionButtons___Skills'
  | 'Skills___Overview'
  | 'Skills___Skills'
  | 'Work___Work';

export type EnJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EnJsonEdge>;
  nodes: Array<EnJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EnJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type EnJsonGroupConnectionDistinctArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonGroupConnectionMaxArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonGroupConnectionMinArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonGroupConnectionSumArgs = {
  field: EnJsonFieldsEnum;
};


export type EnJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EnJsonFieldsEnum;
};

export type EnJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<EnJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type EducationJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EducationJsonEdge>;
  nodes: Array<EducationJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EducationJsonGroupConnection>;
};


export type EducationJsonConnectionDistinctArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonConnectionMaxArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonConnectionMinArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonConnectionSumArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EducationJsonFieldsEnum;
};

export type EducationJsonEdge = {
  next?: Maybe<EducationJson>;
  node: EducationJson;
  previous?: Maybe<EducationJson>;
};

export type EducationJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'location'
  | 'locationFlag___sourceInstanceName'
  | 'locationFlag___absolutePath'
  | 'locationFlag___relativePath'
  | 'locationFlag___extension'
  | 'locationFlag___size'
  | 'locationFlag___prettySize'
  | 'locationFlag___modifiedTime'
  | 'locationFlag___accessTime'
  | 'locationFlag___changeTime'
  | 'locationFlag___birthTime'
  | 'locationFlag___root'
  | 'locationFlag___dir'
  | 'locationFlag___base'
  | 'locationFlag___ext'
  | 'locationFlag___name'
  | 'locationFlag___relativeDirectory'
  | 'locationFlag___dev'
  | 'locationFlag___mode'
  | 'locationFlag___nlink'
  | 'locationFlag___uid'
  | 'locationFlag___gid'
  | 'locationFlag___rdev'
  | 'locationFlag___ino'
  | 'locationFlag___atimeMs'
  | 'locationFlag___mtimeMs'
  | 'locationFlag___ctimeMs'
  | 'locationFlag___atime'
  | 'locationFlag___mtime'
  | 'locationFlag___ctime'
  | 'locationFlag___birthtime'
  | 'locationFlag___birthtimeMs'
  | 'locationFlag___blksize'
  | 'locationFlag___blocks'
  | 'locationFlag___url'
  | 'locationFlag___publicURL'
  | 'locationFlag___childrenImageSharp'
  | 'locationFlag___childrenImageSharp___fixed___base64'
  | 'locationFlag___childrenImageSharp___fixed___tracedSVG'
  | 'locationFlag___childrenImageSharp___fixed___aspectRatio'
  | 'locationFlag___childrenImageSharp___fixed___width'
  | 'locationFlag___childrenImageSharp___fixed___height'
  | 'locationFlag___childrenImageSharp___fixed___src'
  | 'locationFlag___childrenImageSharp___fixed___srcSet'
  | 'locationFlag___childrenImageSharp___fixed___srcWebp'
  | 'locationFlag___childrenImageSharp___fixed___srcSetWebp'
  | 'locationFlag___childrenImageSharp___fixed___originalName'
  | 'locationFlag___childrenImageSharp___fluid___base64'
  | 'locationFlag___childrenImageSharp___fluid___tracedSVG'
  | 'locationFlag___childrenImageSharp___fluid___aspectRatio'
  | 'locationFlag___childrenImageSharp___fluid___src'
  | 'locationFlag___childrenImageSharp___fluid___srcSet'
  | 'locationFlag___childrenImageSharp___fluid___srcWebp'
  | 'locationFlag___childrenImageSharp___fluid___srcSetWebp'
  | 'locationFlag___childrenImageSharp___fluid___sizes'
  | 'locationFlag___childrenImageSharp___fluid___originalImg'
  | 'locationFlag___childrenImageSharp___fluid___originalName'
  | 'locationFlag___childrenImageSharp___fluid___presentationWidth'
  | 'locationFlag___childrenImageSharp___fluid___presentationHeight'
  | 'locationFlag___childrenImageSharp___gatsbyImageData'
  | 'locationFlag___childrenImageSharp___original___width'
  | 'locationFlag___childrenImageSharp___original___height'
  | 'locationFlag___childrenImageSharp___original___src'
  | 'locationFlag___childrenImageSharp___resize___src'
  | 'locationFlag___childrenImageSharp___resize___tracedSVG'
  | 'locationFlag___childrenImageSharp___resize___width'
  | 'locationFlag___childrenImageSharp___resize___height'
  | 'locationFlag___childrenImageSharp___resize___aspectRatio'
  | 'locationFlag___childrenImageSharp___resize___originalName'
  | 'locationFlag___childrenImageSharp___id'
  | 'locationFlag___childrenImageSharp___parent___id'
  | 'locationFlag___childrenImageSharp___parent___children'
  | 'locationFlag___childrenImageSharp___children'
  | 'locationFlag___childrenImageSharp___children___id'
  | 'locationFlag___childrenImageSharp___children___children'
  | 'locationFlag___childrenImageSharp___internal___content'
  | 'locationFlag___childrenImageSharp___internal___contentDigest'
  | 'locationFlag___childrenImageSharp___internal___description'
  | 'locationFlag___childrenImageSharp___internal___fieldOwners'
  | 'locationFlag___childrenImageSharp___internal___ignoreType'
  | 'locationFlag___childrenImageSharp___internal___mediaType'
  | 'locationFlag___childrenImageSharp___internal___owner'
  | 'locationFlag___childrenImageSharp___internal___type'
  | 'locationFlag___childImageSharp___fixed___base64'
  | 'locationFlag___childImageSharp___fixed___tracedSVG'
  | 'locationFlag___childImageSharp___fixed___aspectRatio'
  | 'locationFlag___childImageSharp___fixed___width'
  | 'locationFlag___childImageSharp___fixed___height'
  | 'locationFlag___childImageSharp___fixed___src'
  | 'locationFlag___childImageSharp___fixed___srcSet'
  | 'locationFlag___childImageSharp___fixed___srcWebp'
  | 'locationFlag___childImageSharp___fixed___srcSetWebp'
  | 'locationFlag___childImageSharp___fixed___originalName'
  | 'locationFlag___childImageSharp___fluid___base64'
  | 'locationFlag___childImageSharp___fluid___tracedSVG'
  | 'locationFlag___childImageSharp___fluid___aspectRatio'
  | 'locationFlag___childImageSharp___fluid___src'
  | 'locationFlag___childImageSharp___fluid___srcSet'
  | 'locationFlag___childImageSharp___fluid___srcWebp'
  | 'locationFlag___childImageSharp___fluid___srcSetWebp'
  | 'locationFlag___childImageSharp___fluid___sizes'
  | 'locationFlag___childImageSharp___fluid___originalImg'
  | 'locationFlag___childImageSharp___fluid___originalName'
  | 'locationFlag___childImageSharp___fluid___presentationWidth'
  | 'locationFlag___childImageSharp___fluid___presentationHeight'
  | 'locationFlag___childImageSharp___gatsbyImageData'
  | 'locationFlag___childImageSharp___original___width'
  | 'locationFlag___childImageSharp___original___height'
  | 'locationFlag___childImageSharp___original___src'
  | 'locationFlag___childImageSharp___resize___src'
  | 'locationFlag___childImageSharp___resize___tracedSVG'
  | 'locationFlag___childImageSharp___resize___width'
  | 'locationFlag___childImageSharp___resize___height'
  | 'locationFlag___childImageSharp___resize___aspectRatio'
  | 'locationFlag___childImageSharp___resize___originalName'
  | 'locationFlag___childImageSharp___id'
  | 'locationFlag___childImageSharp___parent___id'
  | 'locationFlag___childImageSharp___parent___children'
  | 'locationFlag___childImageSharp___children'
  | 'locationFlag___childImageSharp___children___id'
  | 'locationFlag___childImageSharp___children___children'
  | 'locationFlag___childImageSharp___internal___content'
  | 'locationFlag___childImageSharp___internal___contentDigest'
  | 'locationFlag___childImageSharp___internal___description'
  | 'locationFlag___childImageSharp___internal___fieldOwners'
  | 'locationFlag___childImageSharp___internal___ignoreType'
  | 'locationFlag___childImageSharp___internal___mediaType'
  | 'locationFlag___childImageSharp___internal___owner'
  | 'locationFlag___childImageSharp___internal___type'
  | 'locationFlag___childrenWorkJson'
  | 'locationFlag___childrenWorkJson___id'
  | 'locationFlag___childrenWorkJson___parent___id'
  | 'locationFlag___childrenWorkJson___parent___children'
  | 'locationFlag___childrenWorkJson___children'
  | 'locationFlag___childrenWorkJson___children___id'
  | 'locationFlag___childrenWorkJson___children___children'
  | 'locationFlag___childrenWorkJson___internal___content'
  | 'locationFlag___childrenWorkJson___internal___contentDigest'
  | 'locationFlag___childrenWorkJson___internal___description'
  | 'locationFlag___childrenWorkJson___internal___fieldOwners'
  | 'locationFlag___childrenWorkJson___internal___ignoreType'
  | 'locationFlag___childrenWorkJson___internal___mediaType'
  | 'locationFlag___childrenWorkJson___internal___owner'
  | 'locationFlag___childrenWorkJson___internal___type'
  | 'locationFlag___childrenWorkJson___location'
  | 'locationFlag___childrenWorkJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childrenWorkJson___locationFlag___absolutePath'
  | 'locationFlag___childrenWorkJson___locationFlag___relativePath'
  | 'locationFlag___childrenWorkJson___locationFlag___extension'
  | 'locationFlag___childrenWorkJson___locationFlag___size'
  | 'locationFlag___childrenWorkJson___locationFlag___prettySize'
  | 'locationFlag___childrenWorkJson___locationFlag___modifiedTime'
  | 'locationFlag___childrenWorkJson___locationFlag___accessTime'
  | 'locationFlag___childrenWorkJson___locationFlag___changeTime'
  | 'locationFlag___childrenWorkJson___locationFlag___birthTime'
  | 'locationFlag___childrenWorkJson___locationFlag___root'
  | 'locationFlag___childrenWorkJson___locationFlag___dir'
  | 'locationFlag___childrenWorkJson___locationFlag___base'
  | 'locationFlag___childrenWorkJson___locationFlag___ext'
  | 'locationFlag___childrenWorkJson___locationFlag___name'
  | 'locationFlag___childrenWorkJson___locationFlag___relativeDirectory'
  | 'locationFlag___childrenWorkJson___locationFlag___dev'
  | 'locationFlag___childrenWorkJson___locationFlag___mode'
  | 'locationFlag___childrenWorkJson___locationFlag___nlink'
  | 'locationFlag___childrenWorkJson___locationFlag___uid'
  | 'locationFlag___childrenWorkJson___locationFlag___gid'
  | 'locationFlag___childrenWorkJson___locationFlag___rdev'
  | 'locationFlag___childrenWorkJson___locationFlag___ino'
  | 'locationFlag___childrenWorkJson___locationFlag___atimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___mtimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___ctimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___atime'
  | 'locationFlag___childrenWorkJson___locationFlag___mtime'
  | 'locationFlag___childrenWorkJson___locationFlag___ctime'
  | 'locationFlag___childrenWorkJson___locationFlag___birthtime'
  | 'locationFlag___childrenWorkJson___locationFlag___birthtimeMs'
  | 'locationFlag___childrenWorkJson___locationFlag___blksize'
  | 'locationFlag___childrenWorkJson___locationFlag___blocks'
  | 'locationFlag___childrenWorkJson___locationFlag___url'
  | 'locationFlag___childrenWorkJson___locationFlag___publicURL'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenSeJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenRuJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenLocale'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenHuJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenFrJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEtJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEsJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEnJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childrenWorkJson___locationFlag___childrenDeJson'
  | 'locationFlag___childrenWorkJson___locationFlag___id'
  | 'locationFlag___childrenWorkJson___locationFlag___children'
  | 'locationFlag___childrenWorkJson___title'
  | 'locationFlag___childrenWorkJson___logo___sourceInstanceName'
  | 'locationFlag___childrenWorkJson___logo___absolutePath'
  | 'locationFlag___childrenWorkJson___logo___relativePath'
  | 'locationFlag___childrenWorkJson___logo___extension'
  | 'locationFlag___childrenWorkJson___logo___size'
  | 'locationFlag___childrenWorkJson___logo___prettySize'
  | 'locationFlag___childrenWorkJson___logo___modifiedTime'
  | 'locationFlag___childrenWorkJson___logo___accessTime'
  | 'locationFlag___childrenWorkJson___logo___changeTime'
  | 'locationFlag___childrenWorkJson___logo___birthTime'
  | 'locationFlag___childrenWorkJson___logo___root'
  | 'locationFlag___childrenWorkJson___logo___dir'
  | 'locationFlag___childrenWorkJson___logo___base'
  | 'locationFlag___childrenWorkJson___logo___ext'
  | 'locationFlag___childrenWorkJson___logo___name'
  | 'locationFlag___childrenWorkJson___logo___relativeDirectory'
  | 'locationFlag___childrenWorkJson___logo___dev'
  | 'locationFlag___childrenWorkJson___logo___mode'
  | 'locationFlag___childrenWorkJson___logo___nlink'
  | 'locationFlag___childrenWorkJson___logo___uid'
  | 'locationFlag___childrenWorkJson___logo___gid'
  | 'locationFlag___childrenWorkJson___logo___rdev'
  | 'locationFlag___childrenWorkJson___logo___ino'
  | 'locationFlag___childrenWorkJson___logo___atimeMs'
  | 'locationFlag___childrenWorkJson___logo___mtimeMs'
  | 'locationFlag___childrenWorkJson___logo___ctimeMs'
  | 'locationFlag___childrenWorkJson___logo___atime'
  | 'locationFlag___childrenWorkJson___logo___mtime'
  | 'locationFlag___childrenWorkJson___logo___ctime'
  | 'locationFlag___childrenWorkJson___logo___birthtime'
  | 'locationFlag___childrenWorkJson___logo___birthtimeMs'
  | 'locationFlag___childrenWorkJson___logo___blksize'
  | 'locationFlag___childrenWorkJson___logo___blocks'
  | 'locationFlag___childrenWorkJson___logo___url'
  | 'locationFlag___childrenWorkJson___logo___publicURL'
  | 'locationFlag___childrenWorkJson___logo___childrenImageSharp'
  | 'locationFlag___childrenWorkJson___logo___childrenWorkJson'
  | 'locationFlag___childrenWorkJson___logo___childrenSkillsJson'
  | 'locationFlag___childrenWorkJson___logo___childrenSeJson'
  | 'locationFlag___childrenWorkJson___logo___childrenRuJson'
  | 'locationFlag___childrenWorkJson___logo___childrenLocale'
  | 'locationFlag___childrenWorkJson___logo___childrenHuJson'
  | 'locationFlag___childrenWorkJson___logo___childrenFrJson'
  | 'locationFlag___childrenWorkJson___logo___childrenFlagsJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEtJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEsJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEnJson'
  | 'locationFlag___childrenWorkJson___logo___childrenEducationJson'
  | 'locationFlag___childrenWorkJson___logo___childrenDeJson'
  | 'locationFlag___childrenWorkJson___logo___id'
  | 'locationFlag___childrenWorkJson___logo___children'
  | 'locationFlag___childrenWorkJson___name'
  | 'locationFlag___childrenWorkJson___dates'
  | 'locationFlag___childrenWorkJson___description'
  | 'locationFlag___childWorkJson___id'
  | 'locationFlag___childWorkJson___parent___id'
  | 'locationFlag___childWorkJson___parent___children'
  | 'locationFlag___childWorkJson___children'
  | 'locationFlag___childWorkJson___children___id'
  | 'locationFlag___childWorkJson___children___children'
  | 'locationFlag___childWorkJson___internal___content'
  | 'locationFlag___childWorkJson___internal___contentDigest'
  | 'locationFlag___childWorkJson___internal___description'
  | 'locationFlag___childWorkJson___internal___fieldOwners'
  | 'locationFlag___childWorkJson___internal___ignoreType'
  | 'locationFlag___childWorkJson___internal___mediaType'
  | 'locationFlag___childWorkJson___internal___owner'
  | 'locationFlag___childWorkJson___internal___type'
  | 'locationFlag___childWorkJson___location'
  | 'locationFlag___childWorkJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childWorkJson___locationFlag___absolutePath'
  | 'locationFlag___childWorkJson___locationFlag___relativePath'
  | 'locationFlag___childWorkJson___locationFlag___extension'
  | 'locationFlag___childWorkJson___locationFlag___size'
  | 'locationFlag___childWorkJson___locationFlag___prettySize'
  | 'locationFlag___childWorkJson___locationFlag___modifiedTime'
  | 'locationFlag___childWorkJson___locationFlag___accessTime'
  | 'locationFlag___childWorkJson___locationFlag___changeTime'
  | 'locationFlag___childWorkJson___locationFlag___birthTime'
  | 'locationFlag___childWorkJson___locationFlag___root'
  | 'locationFlag___childWorkJson___locationFlag___dir'
  | 'locationFlag___childWorkJson___locationFlag___base'
  | 'locationFlag___childWorkJson___locationFlag___ext'
  | 'locationFlag___childWorkJson___locationFlag___name'
  | 'locationFlag___childWorkJson___locationFlag___relativeDirectory'
  | 'locationFlag___childWorkJson___locationFlag___dev'
  | 'locationFlag___childWorkJson___locationFlag___mode'
  | 'locationFlag___childWorkJson___locationFlag___nlink'
  | 'locationFlag___childWorkJson___locationFlag___uid'
  | 'locationFlag___childWorkJson___locationFlag___gid'
  | 'locationFlag___childWorkJson___locationFlag___rdev'
  | 'locationFlag___childWorkJson___locationFlag___ino'
  | 'locationFlag___childWorkJson___locationFlag___atimeMs'
  | 'locationFlag___childWorkJson___locationFlag___mtimeMs'
  | 'locationFlag___childWorkJson___locationFlag___ctimeMs'
  | 'locationFlag___childWorkJson___locationFlag___atime'
  | 'locationFlag___childWorkJson___locationFlag___mtime'
  | 'locationFlag___childWorkJson___locationFlag___ctime'
  | 'locationFlag___childWorkJson___locationFlag___birthtime'
  | 'locationFlag___childWorkJson___locationFlag___birthtimeMs'
  | 'locationFlag___childWorkJson___locationFlag___blksize'
  | 'locationFlag___childWorkJson___locationFlag___blocks'
  | 'locationFlag___childWorkJson___locationFlag___url'
  | 'locationFlag___childWorkJson___locationFlag___publicURL'
  | 'locationFlag___childWorkJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childWorkJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenSeJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenRuJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenLocale'
  | 'locationFlag___childWorkJson___locationFlag___childrenHuJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenFrJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEtJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEsJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEnJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childWorkJson___locationFlag___childrenDeJson'
  | 'locationFlag___childWorkJson___locationFlag___id'
  | 'locationFlag___childWorkJson___locationFlag___children'
  | 'locationFlag___childWorkJson___title'
  | 'locationFlag___childWorkJson___logo___sourceInstanceName'
  | 'locationFlag___childWorkJson___logo___absolutePath'
  | 'locationFlag___childWorkJson___logo___relativePath'
  | 'locationFlag___childWorkJson___logo___extension'
  | 'locationFlag___childWorkJson___logo___size'
  | 'locationFlag___childWorkJson___logo___prettySize'
  | 'locationFlag___childWorkJson___logo___modifiedTime'
  | 'locationFlag___childWorkJson___logo___accessTime'
  | 'locationFlag___childWorkJson___logo___changeTime'
  | 'locationFlag___childWorkJson___logo___birthTime'
  | 'locationFlag___childWorkJson___logo___root'
  | 'locationFlag___childWorkJson___logo___dir'
  | 'locationFlag___childWorkJson___logo___base'
  | 'locationFlag___childWorkJson___logo___ext'
  | 'locationFlag___childWorkJson___logo___name'
  | 'locationFlag___childWorkJson___logo___relativeDirectory'
  | 'locationFlag___childWorkJson___logo___dev'
  | 'locationFlag___childWorkJson___logo___mode'
  | 'locationFlag___childWorkJson___logo___nlink'
  | 'locationFlag___childWorkJson___logo___uid'
  | 'locationFlag___childWorkJson___logo___gid'
  | 'locationFlag___childWorkJson___logo___rdev'
  | 'locationFlag___childWorkJson___logo___ino'
  | 'locationFlag___childWorkJson___logo___atimeMs'
  | 'locationFlag___childWorkJson___logo___mtimeMs'
  | 'locationFlag___childWorkJson___logo___ctimeMs'
  | 'locationFlag___childWorkJson___logo___atime'
  | 'locationFlag___childWorkJson___logo___mtime'
  | 'locationFlag___childWorkJson___logo___ctime'
  | 'locationFlag___childWorkJson___logo___birthtime'
  | 'locationFlag___childWorkJson___logo___birthtimeMs'
  | 'locationFlag___childWorkJson___logo___blksize'
  | 'locationFlag___childWorkJson___logo___blocks'
  | 'locationFlag___childWorkJson___logo___url'
  | 'locationFlag___childWorkJson___logo___publicURL'
  | 'locationFlag___childWorkJson___logo___childrenImageSharp'
  | 'locationFlag___childWorkJson___logo___childrenWorkJson'
  | 'locationFlag___childWorkJson___logo___childrenSkillsJson'
  | 'locationFlag___childWorkJson___logo___childrenSeJson'
  | 'locationFlag___childWorkJson___logo___childrenRuJson'
  | 'locationFlag___childWorkJson___logo___childrenLocale'
  | 'locationFlag___childWorkJson___logo___childrenHuJson'
  | 'locationFlag___childWorkJson___logo___childrenFrJson'
  | 'locationFlag___childWorkJson___logo___childrenFlagsJson'
  | 'locationFlag___childWorkJson___logo___childrenEtJson'
  | 'locationFlag___childWorkJson___logo___childrenEsJson'
  | 'locationFlag___childWorkJson___logo___childrenEnJson'
  | 'locationFlag___childWorkJson___logo___childrenEducationJson'
  | 'locationFlag___childWorkJson___logo___childrenDeJson'
  | 'locationFlag___childWorkJson___logo___id'
  | 'locationFlag___childWorkJson___logo___children'
  | 'locationFlag___childWorkJson___name'
  | 'locationFlag___childWorkJson___dates'
  | 'locationFlag___childWorkJson___description'
  | 'locationFlag___childrenSkillsJson'
  | 'locationFlag___childrenSkillsJson___id'
  | 'locationFlag___childrenSkillsJson___parent___id'
  | 'locationFlag___childrenSkillsJson___parent___children'
  | 'locationFlag___childrenSkillsJson___children'
  | 'locationFlag___childrenSkillsJson___children___id'
  | 'locationFlag___childrenSkillsJson___children___children'
  | 'locationFlag___childrenSkillsJson___internal___content'
  | 'locationFlag___childrenSkillsJson___internal___contentDigest'
  | 'locationFlag___childrenSkillsJson___internal___description'
  | 'locationFlag___childrenSkillsJson___internal___fieldOwners'
  | 'locationFlag___childrenSkillsJson___internal___ignoreType'
  | 'locationFlag___childrenSkillsJson___internal___mediaType'
  | 'locationFlag___childrenSkillsJson___internal___owner'
  | 'locationFlag___childrenSkillsJson___internal___type'
  | 'locationFlag___childrenSkillsJson___title'
  | 'locationFlag___childrenSkillsJson___skillItems'
  | 'locationFlag___childrenSkillsJson___skillItems___name'
  | 'locationFlag___childrenSkillsJson___skillItems___extra'
  | 'locationFlag___childrenSkillsJson___skillItems___subSkills'
  | 'locationFlag___childrenSkillsJson___skillItems___href'
  | 'locationFlag___childSkillsJson___id'
  | 'locationFlag___childSkillsJson___parent___id'
  | 'locationFlag___childSkillsJson___parent___children'
  | 'locationFlag___childSkillsJson___children'
  | 'locationFlag___childSkillsJson___children___id'
  | 'locationFlag___childSkillsJson___children___children'
  | 'locationFlag___childSkillsJson___internal___content'
  | 'locationFlag___childSkillsJson___internal___contentDigest'
  | 'locationFlag___childSkillsJson___internal___description'
  | 'locationFlag___childSkillsJson___internal___fieldOwners'
  | 'locationFlag___childSkillsJson___internal___ignoreType'
  | 'locationFlag___childSkillsJson___internal___mediaType'
  | 'locationFlag___childSkillsJson___internal___owner'
  | 'locationFlag___childSkillsJson___internal___type'
  | 'locationFlag___childSkillsJson___title'
  | 'locationFlag___childSkillsJson___skillItems'
  | 'locationFlag___childSkillsJson___skillItems___name'
  | 'locationFlag___childSkillsJson___skillItems___extra'
  | 'locationFlag___childSkillsJson___skillItems___subSkills'
  | 'locationFlag___childSkillsJson___skillItems___href'
  | 'locationFlag___childrenSeJson'
  | 'locationFlag___childrenSeJson___id'
  | 'locationFlag___childrenSeJson___parent___id'
  | 'locationFlag___childrenSeJson___parent___children'
  | 'locationFlag___childrenSeJson___children'
  | 'locationFlag___childrenSeJson___children___id'
  | 'locationFlag___childrenSeJson___children___children'
  | 'locationFlag___childrenSeJson___internal___content'
  | 'locationFlag___childrenSeJson___internal___contentDigest'
  | 'locationFlag___childrenSeJson___internal___description'
  | 'locationFlag___childrenSeJson___internal___fieldOwners'
  | 'locationFlag___childrenSeJson___internal___ignoreType'
  | 'locationFlag___childrenSeJson___internal___mediaType'
  | 'locationFlag___childrenSeJson___internal___owner'
  | 'locationFlag___childrenSeJson___internal___type'
  | 'locationFlag___childrenSeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childSeJson___id'
  | 'locationFlag___childSeJson___parent___id'
  | 'locationFlag___childSeJson___parent___children'
  | 'locationFlag___childSeJson___children'
  | 'locationFlag___childSeJson___children___id'
  | 'locationFlag___childSeJson___children___children'
  | 'locationFlag___childSeJson___internal___content'
  | 'locationFlag___childSeJson___internal___contentDigest'
  | 'locationFlag___childSeJson___internal___description'
  | 'locationFlag___childSeJson___internal___fieldOwners'
  | 'locationFlag___childSeJson___internal___ignoreType'
  | 'locationFlag___childSeJson___internal___mediaType'
  | 'locationFlag___childSeJson___internal___owner'
  | 'locationFlag___childSeJson___internal___type'
  | 'locationFlag___childSeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenRuJson'
  | 'locationFlag___childrenRuJson___id'
  | 'locationFlag___childrenRuJson___parent___id'
  | 'locationFlag___childrenRuJson___parent___children'
  | 'locationFlag___childrenRuJson___children'
  | 'locationFlag___childrenRuJson___children___id'
  | 'locationFlag___childrenRuJson___children___children'
  | 'locationFlag___childrenRuJson___internal___content'
  | 'locationFlag___childrenRuJson___internal___contentDigest'
  | 'locationFlag___childrenRuJson___internal___description'
  | 'locationFlag___childrenRuJson___internal___fieldOwners'
  | 'locationFlag___childrenRuJson___internal___ignoreType'
  | 'locationFlag___childrenRuJson___internal___mediaType'
  | 'locationFlag___childrenRuJson___internal___owner'
  | 'locationFlag___childrenRuJson___internal___type'
  | 'locationFlag___childrenRuJson___About___AboutMe'
  | 'locationFlag___childrenRuJson___About___Description'
  | 'locationFlag___childrenRuJson___About___PhotoDescription'
  | 'locationFlag___childrenRuJson___About___ViewCV'
  | 'locationFlag___childrenRuJson___Acknowledgements'
  | 'locationFlag___childrenRuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenRuJson___Banner___Experience'
  | 'locationFlag___childrenRuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenRuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenRuJson___Blog___Blog'
  | 'locationFlag___childrenRuJson___Contact___Contact'
  | 'locationFlag___childrenRuJson___Contact___GetInTouch'
  | 'locationFlag___childrenRuJson___Contact___SendEmail'
  | 'locationFlag___childrenRuJson___Education___Description'
  | 'locationFlag___childrenRuJson___Education___Education'
  | 'locationFlag___childrenRuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenRuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenRuJson___PageLinks___Home'
  | 'locationFlag___childrenRuJson___SectionButtons___About'
  | 'locationFlag___childrenRuJson___SectionButtons___Blog'
  | 'locationFlag___childrenRuJson___SectionButtons___Contact'
  | 'locationFlag___childrenRuJson___SectionButtons___Experience'
  | 'locationFlag___childrenRuJson___SectionButtons___Skills'
  | 'locationFlag___childrenRuJson___Skills___Overview'
  | 'locationFlag___childrenRuJson___Skills___Skills'
  | 'locationFlag___childrenRuJson___Work___Work'
  | 'locationFlag___childRuJson___id'
  | 'locationFlag___childRuJson___parent___id'
  | 'locationFlag___childRuJson___parent___children'
  | 'locationFlag___childRuJson___children'
  | 'locationFlag___childRuJson___children___id'
  | 'locationFlag___childRuJson___children___children'
  | 'locationFlag___childRuJson___internal___content'
  | 'locationFlag___childRuJson___internal___contentDigest'
  | 'locationFlag___childRuJson___internal___description'
  | 'locationFlag___childRuJson___internal___fieldOwners'
  | 'locationFlag___childRuJson___internal___ignoreType'
  | 'locationFlag___childRuJson___internal___mediaType'
  | 'locationFlag___childRuJson___internal___owner'
  | 'locationFlag___childRuJson___internal___type'
  | 'locationFlag___childRuJson___About___AboutMe'
  | 'locationFlag___childRuJson___About___Description'
  | 'locationFlag___childRuJson___About___PhotoDescription'
  | 'locationFlag___childRuJson___About___ViewCV'
  | 'locationFlag___childRuJson___Acknowledgements'
  | 'locationFlag___childRuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childRuJson___Banner___Experience'
  | 'locationFlag___childRuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childRuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childRuJson___Blog___Blog'
  | 'locationFlag___childRuJson___Contact___Contact'
  | 'locationFlag___childRuJson___Contact___GetInTouch'
  | 'locationFlag___childRuJson___Contact___SendEmail'
  | 'locationFlag___childRuJson___Education___Description'
  | 'locationFlag___childRuJson___Education___Education'
  | 'locationFlag___childRuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childRuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childRuJson___PageLinks___Home'
  | 'locationFlag___childRuJson___SectionButtons___About'
  | 'locationFlag___childRuJson___SectionButtons___Blog'
  | 'locationFlag___childRuJson___SectionButtons___Contact'
  | 'locationFlag___childRuJson___SectionButtons___Experience'
  | 'locationFlag___childRuJson___SectionButtons___Skills'
  | 'locationFlag___childRuJson___Skills___Overview'
  | 'locationFlag___childRuJson___Skills___Skills'
  | 'locationFlag___childRuJson___Work___Work'
  | 'locationFlag___childrenLocale'
  | 'locationFlag___childrenLocale___id'
  | 'locationFlag___childrenLocale___parent___id'
  | 'locationFlag___childrenLocale___parent___children'
  | 'locationFlag___childrenLocale___children'
  | 'locationFlag___childrenLocale___children___id'
  | 'locationFlag___childrenLocale___children___children'
  | 'locationFlag___childrenLocale___internal___content'
  | 'locationFlag___childrenLocale___internal___contentDigest'
  | 'locationFlag___childrenLocale___internal___description'
  | 'locationFlag___childrenLocale___internal___fieldOwners'
  | 'locationFlag___childrenLocale___internal___ignoreType'
  | 'locationFlag___childrenLocale___internal___mediaType'
  | 'locationFlag___childrenLocale___internal___owner'
  | 'locationFlag___childrenLocale___internal___type'
  | 'locationFlag___childrenLocale___language'
  | 'locationFlag___childrenLocale___ns'
  | 'locationFlag___childrenLocale___data'
  | 'locationFlag___childrenLocale___fileAbsolutePath'
  | 'locationFlag___childLocale___id'
  | 'locationFlag___childLocale___parent___id'
  | 'locationFlag___childLocale___parent___children'
  | 'locationFlag___childLocale___children'
  | 'locationFlag___childLocale___children___id'
  | 'locationFlag___childLocale___children___children'
  | 'locationFlag___childLocale___internal___content'
  | 'locationFlag___childLocale___internal___contentDigest'
  | 'locationFlag___childLocale___internal___description'
  | 'locationFlag___childLocale___internal___fieldOwners'
  | 'locationFlag___childLocale___internal___ignoreType'
  | 'locationFlag___childLocale___internal___mediaType'
  | 'locationFlag___childLocale___internal___owner'
  | 'locationFlag___childLocale___internal___type'
  | 'locationFlag___childLocale___language'
  | 'locationFlag___childLocale___ns'
  | 'locationFlag___childLocale___data'
  | 'locationFlag___childLocale___fileAbsolutePath'
  | 'locationFlag___childrenHuJson'
  | 'locationFlag___childrenHuJson___id'
  | 'locationFlag___childrenHuJson___parent___id'
  | 'locationFlag___childrenHuJson___parent___children'
  | 'locationFlag___childrenHuJson___children'
  | 'locationFlag___childrenHuJson___children___id'
  | 'locationFlag___childrenHuJson___children___children'
  | 'locationFlag___childrenHuJson___internal___content'
  | 'locationFlag___childrenHuJson___internal___contentDigest'
  | 'locationFlag___childrenHuJson___internal___description'
  | 'locationFlag___childrenHuJson___internal___fieldOwners'
  | 'locationFlag___childrenHuJson___internal___ignoreType'
  | 'locationFlag___childrenHuJson___internal___mediaType'
  | 'locationFlag___childrenHuJson___internal___owner'
  | 'locationFlag___childrenHuJson___internal___type'
  | 'locationFlag___childrenHuJson___About___AboutMe'
  | 'locationFlag___childrenHuJson___About___Description'
  | 'locationFlag___childrenHuJson___About___PhotoDescription'
  | 'locationFlag___childrenHuJson___About___ViewCV'
  | 'locationFlag___childrenHuJson___Acknowledgements'
  | 'locationFlag___childrenHuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenHuJson___Banner___Experience'
  | 'locationFlag___childrenHuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenHuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenHuJson___Blog___Blog'
  | 'locationFlag___childrenHuJson___Contact___Contact'
  | 'locationFlag___childrenHuJson___Contact___GetInTouch'
  | 'locationFlag___childrenHuJson___Contact___SendEmail'
  | 'locationFlag___childrenHuJson___Education___Description'
  | 'locationFlag___childrenHuJson___Education___Education'
  | 'locationFlag___childrenHuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenHuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenHuJson___PageLinks___Home'
  | 'locationFlag___childrenHuJson___SectionButtons___About'
  | 'locationFlag___childrenHuJson___SectionButtons___Blog'
  | 'locationFlag___childrenHuJson___SectionButtons___Contact'
  | 'locationFlag___childrenHuJson___SectionButtons___Experience'
  | 'locationFlag___childrenHuJson___SectionButtons___Skills'
  | 'locationFlag___childrenHuJson___Skills___Overview'
  | 'locationFlag___childrenHuJson___Skills___Skills'
  | 'locationFlag___childrenHuJson___Work___Work'
  | 'locationFlag___childHuJson___id'
  | 'locationFlag___childHuJson___parent___id'
  | 'locationFlag___childHuJson___parent___children'
  | 'locationFlag___childHuJson___children'
  | 'locationFlag___childHuJson___children___id'
  | 'locationFlag___childHuJson___children___children'
  | 'locationFlag___childHuJson___internal___content'
  | 'locationFlag___childHuJson___internal___contentDigest'
  | 'locationFlag___childHuJson___internal___description'
  | 'locationFlag___childHuJson___internal___fieldOwners'
  | 'locationFlag___childHuJson___internal___ignoreType'
  | 'locationFlag___childHuJson___internal___mediaType'
  | 'locationFlag___childHuJson___internal___owner'
  | 'locationFlag___childHuJson___internal___type'
  | 'locationFlag___childHuJson___About___AboutMe'
  | 'locationFlag___childHuJson___About___Description'
  | 'locationFlag___childHuJson___About___PhotoDescription'
  | 'locationFlag___childHuJson___About___ViewCV'
  | 'locationFlag___childHuJson___Acknowledgements'
  | 'locationFlag___childHuJson___Banner___DexterSibirtsev'
  | 'locationFlag___childHuJson___Banner___Experience'
  | 'locationFlag___childHuJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childHuJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childHuJson___Blog___Blog'
  | 'locationFlag___childHuJson___Contact___Contact'
  | 'locationFlag___childHuJson___Contact___GetInTouch'
  | 'locationFlag___childHuJson___Contact___SendEmail'
  | 'locationFlag___childHuJson___Education___Description'
  | 'locationFlag___childHuJson___Education___Education'
  | 'locationFlag___childHuJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childHuJson___PageLinks___Acknowledgements'
  | 'locationFlag___childHuJson___PageLinks___Home'
  | 'locationFlag___childHuJson___SectionButtons___About'
  | 'locationFlag___childHuJson___SectionButtons___Blog'
  | 'locationFlag___childHuJson___SectionButtons___Contact'
  | 'locationFlag___childHuJson___SectionButtons___Experience'
  | 'locationFlag___childHuJson___SectionButtons___Skills'
  | 'locationFlag___childHuJson___Skills___Overview'
  | 'locationFlag___childHuJson___Skills___Skills'
  | 'locationFlag___childHuJson___Work___Work'
  | 'locationFlag___childrenFrJson'
  | 'locationFlag___childrenFrJson___id'
  | 'locationFlag___childrenFrJson___parent___id'
  | 'locationFlag___childrenFrJson___parent___children'
  | 'locationFlag___childrenFrJson___children'
  | 'locationFlag___childrenFrJson___children___id'
  | 'locationFlag___childrenFrJson___children___children'
  | 'locationFlag___childrenFrJson___internal___content'
  | 'locationFlag___childrenFrJson___internal___contentDigest'
  | 'locationFlag___childrenFrJson___internal___description'
  | 'locationFlag___childrenFrJson___internal___fieldOwners'
  | 'locationFlag___childrenFrJson___internal___ignoreType'
  | 'locationFlag___childrenFrJson___internal___mediaType'
  | 'locationFlag___childrenFrJson___internal___owner'
  | 'locationFlag___childrenFrJson___internal___type'
  | 'locationFlag___childrenFrJson___About___AboutMe'
  | 'locationFlag___childrenFrJson___About___Description'
  | 'locationFlag___childrenFrJson___About___PhotoDescription'
  | 'locationFlag___childrenFrJson___About___ViewCV'
  | 'locationFlag___childrenFrJson___Acknowledgements'
  | 'locationFlag___childrenFrJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenFrJson___Banner___Experience'
  | 'locationFlag___childrenFrJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenFrJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenFrJson___Blog___Blog'
  | 'locationFlag___childrenFrJson___Contact___Contact'
  | 'locationFlag___childrenFrJson___Contact___GetInTouch'
  | 'locationFlag___childrenFrJson___Contact___SendEmail'
  | 'locationFlag___childrenFrJson___Education___Description'
  | 'locationFlag___childrenFrJson___Education___Education'
  | 'locationFlag___childrenFrJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenFrJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenFrJson___PageLinks___Home'
  | 'locationFlag___childrenFrJson___SectionButtons___About'
  | 'locationFlag___childrenFrJson___SectionButtons___Blog'
  | 'locationFlag___childrenFrJson___SectionButtons___Contact'
  | 'locationFlag___childrenFrJson___SectionButtons___Experience'
  | 'locationFlag___childrenFrJson___SectionButtons___Skills'
  | 'locationFlag___childrenFrJson___Skills___Overview'
  | 'locationFlag___childrenFrJson___Skills___Skills'
  | 'locationFlag___childrenFrJson___Work___Work'
  | 'locationFlag___childFrJson___id'
  | 'locationFlag___childFrJson___parent___id'
  | 'locationFlag___childFrJson___parent___children'
  | 'locationFlag___childFrJson___children'
  | 'locationFlag___childFrJson___children___id'
  | 'locationFlag___childFrJson___children___children'
  | 'locationFlag___childFrJson___internal___content'
  | 'locationFlag___childFrJson___internal___contentDigest'
  | 'locationFlag___childFrJson___internal___description'
  | 'locationFlag___childFrJson___internal___fieldOwners'
  | 'locationFlag___childFrJson___internal___ignoreType'
  | 'locationFlag___childFrJson___internal___mediaType'
  | 'locationFlag___childFrJson___internal___owner'
  | 'locationFlag___childFrJson___internal___type'
  | 'locationFlag___childFrJson___About___AboutMe'
  | 'locationFlag___childFrJson___About___Description'
  | 'locationFlag___childFrJson___About___PhotoDescription'
  | 'locationFlag___childFrJson___About___ViewCV'
  | 'locationFlag___childFrJson___Acknowledgements'
  | 'locationFlag___childFrJson___Banner___DexterSibirtsev'
  | 'locationFlag___childFrJson___Banner___Experience'
  | 'locationFlag___childFrJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childFrJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childFrJson___Blog___Blog'
  | 'locationFlag___childFrJson___Contact___Contact'
  | 'locationFlag___childFrJson___Contact___GetInTouch'
  | 'locationFlag___childFrJson___Contact___SendEmail'
  | 'locationFlag___childFrJson___Education___Description'
  | 'locationFlag___childFrJson___Education___Education'
  | 'locationFlag___childFrJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childFrJson___PageLinks___Acknowledgements'
  | 'locationFlag___childFrJson___PageLinks___Home'
  | 'locationFlag___childFrJson___SectionButtons___About'
  | 'locationFlag___childFrJson___SectionButtons___Blog'
  | 'locationFlag___childFrJson___SectionButtons___Contact'
  | 'locationFlag___childFrJson___SectionButtons___Experience'
  | 'locationFlag___childFrJson___SectionButtons___Skills'
  | 'locationFlag___childFrJson___Skills___Overview'
  | 'locationFlag___childFrJson___Skills___Skills'
  | 'locationFlag___childFrJson___Work___Work'
  | 'locationFlag___childrenFlagsJson'
  | 'locationFlag___childrenFlagsJson___id'
  | 'locationFlag___childrenFlagsJson___parent___id'
  | 'locationFlag___childrenFlagsJson___parent___children'
  | 'locationFlag___childrenFlagsJson___children'
  | 'locationFlag___childrenFlagsJson___children___id'
  | 'locationFlag___childrenFlagsJson___children___children'
  | 'locationFlag___childrenFlagsJson___internal___content'
  | 'locationFlag___childrenFlagsJson___internal___contentDigest'
  | 'locationFlag___childrenFlagsJson___internal___description'
  | 'locationFlag___childrenFlagsJson___internal___fieldOwners'
  | 'locationFlag___childrenFlagsJson___internal___ignoreType'
  | 'locationFlag___childrenFlagsJson___internal___mediaType'
  | 'locationFlag___childrenFlagsJson___internal___owner'
  | 'locationFlag___childrenFlagsJson___internal___type'
  | 'locationFlag___childrenFlagsJson___code'
  | 'locationFlag___childrenFlagsJson___name'
  | 'locationFlag___childrenFlagsJson___src___sourceInstanceName'
  | 'locationFlag___childrenFlagsJson___src___absolutePath'
  | 'locationFlag___childrenFlagsJson___src___relativePath'
  | 'locationFlag___childrenFlagsJson___src___extension'
  | 'locationFlag___childrenFlagsJson___src___size'
  | 'locationFlag___childrenFlagsJson___src___prettySize'
  | 'locationFlag___childrenFlagsJson___src___modifiedTime'
  | 'locationFlag___childrenFlagsJson___src___accessTime'
  | 'locationFlag___childrenFlagsJson___src___changeTime'
  | 'locationFlag___childrenFlagsJson___src___birthTime'
  | 'locationFlag___childrenFlagsJson___src___root'
  | 'locationFlag___childrenFlagsJson___src___dir'
  | 'locationFlag___childrenFlagsJson___src___base'
  | 'locationFlag___childrenFlagsJson___src___ext'
  | 'locationFlag___childrenFlagsJson___src___name'
  | 'locationFlag___childrenFlagsJson___src___relativeDirectory'
  | 'locationFlag___childrenFlagsJson___src___dev'
  | 'locationFlag___childrenFlagsJson___src___mode'
  | 'locationFlag___childrenFlagsJson___src___nlink'
  | 'locationFlag___childrenFlagsJson___src___uid'
  | 'locationFlag___childrenFlagsJson___src___gid'
  | 'locationFlag___childrenFlagsJson___src___rdev'
  | 'locationFlag___childrenFlagsJson___src___ino'
  | 'locationFlag___childrenFlagsJson___src___atimeMs'
  | 'locationFlag___childrenFlagsJson___src___mtimeMs'
  | 'locationFlag___childrenFlagsJson___src___ctimeMs'
  | 'locationFlag___childrenFlagsJson___src___atime'
  | 'locationFlag___childrenFlagsJson___src___mtime'
  | 'locationFlag___childrenFlagsJson___src___ctime'
  | 'locationFlag___childrenFlagsJson___src___birthtime'
  | 'locationFlag___childrenFlagsJson___src___birthtimeMs'
  | 'locationFlag___childrenFlagsJson___src___blksize'
  | 'locationFlag___childrenFlagsJson___src___blocks'
  | 'locationFlag___childrenFlagsJson___src___url'
  | 'locationFlag___childrenFlagsJson___src___publicURL'
  | 'locationFlag___childrenFlagsJson___src___childrenImageSharp'
  | 'locationFlag___childrenFlagsJson___src___childrenWorkJson'
  | 'locationFlag___childrenFlagsJson___src___childrenSkillsJson'
  | 'locationFlag___childrenFlagsJson___src___childrenSeJson'
  | 'locationFlag___childrenFlagsJson___src___childrenRuJson'
  | 'locationFlag___childrenFlagsJson___src___childrenLocale'
  | 'locationFlag___childrenFlagsJson___src___childrenHuJson'
  | 'locationFlag___childrenFlagsJson___src___childrenFrJson'
  | 'locationFlag___childrenFlagsJson___src___childrenFlagsJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEtJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEsJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEnJson'
  | 'locationFlag___childrenFlagsJson___src___childrenEducationJson'
  | 'locationFlag___childrenFlagsJson___src___childrenDeJson'
  | 'locationFlag___childrenFlagsJson___src___id'
  | 'locationFlag___childrenFlagsJson___src___children'
  | 'locationFlag___childFlagsJson___id'
  | 'locationFlag___childFlagsJson___parent___id'
  | 'locationFlag___childFlagsJson___parent___children'
  | 'locationFlag___childFlagsJson___children'
  | 'locationFlag___childFlagsJson___children___id'
  | 'locationFlag___childFlagsJson___children___children'
  | 'locationFlag___childFlagsJson___internal___content'
  | 'locationFlag___childFlagsJson___internal___contentDigest'
  | 'locationFlag___childFlagsJson___internal___description'
  | 'locationFlag___childFlagsJson___internal___fieldOwners'
  | 'locationFlag___childFlagsJson___internal___ignoreType'
  | 'locationFlag___childFlagsJson___internal___mediaType'
  | 'locationFlag___childFlagsJson___internal___owner'
  | 'locationFlag___childFlagsJson___internal___type'
  | 'locationFlag___childFlagsJson___code'
  | 'locationFlag___childFlagsJson___name'
  | 'locationFlag___childFlagsJson___src___sourceInstanceName'
  | 'locationFlag___childFlagsJson___src___absolutePath'
  | 'locationFlag___childFlagsJson___src___relativePath'
  | 'locationFlag___childFlagsJson___src___extension'
  | 'locationFlag___childFlagsJson___src___size'
  | 'locationFlag___childFlagsJson___src___prettySize'
  | 'locationFlag___childFlagsJson___src___modifiedTime'
  | 'locationFlag___childFlagsJson___src___accessTime'
  | 'locationFlag___childFlagsJson___src___changeTime'
  | 'locationFlag___childFlagsJson___src___birthTime'
  | 'locationFlag___childFlagsJson___src___root'
  | 'locationFlag___childFlagsJson___src___dir'
  | 'locationFlag___childFlagsJson___src___base'
  | 'locationFlag___childFlagsJson___src___ext'
  | 'locationFlag___childFlagsJson___src___name'
  | 'locationFlag___childFlagsJson___src___relativeDirectory'
  | 'locationFlag___childFlagsJson___src___dev'
  | 'locationFlag___childFlagsJson___src___mode'
  | 'locationFlag___childFlagsJson___src___nlink'
  | 'locationFlag___childFlagsJson___src___uid'
  | 'locationFlag___childFlagsJson___src___gid'
  | 'locationFlag___childFlagsJson___src___rdev'
  | 'locationFlag___childFlagsJson___src___ino'
  | 'locationFlag___childFlagsJson___src___atimeMs'
  | 'locationFlag___childFlagsJson___src___mtimeMs'
  | 'locationFlag___childFlagsJson___src___ctimeMs'
  | 'locationFlag___childFlagsJson___src___atime'
  | 'locationFlag___childFlagsJson___src___mtime'
  | 'locationFlag___childFlagsJson___src___ctime'
  | 'locationFlag___childFlagsJson___src___birthtime'
  | 'locationFlag___childFlagsJson___src___birthtimeMs'
  | 'locationFlag___childFlagsJson___src___blksize'
  | 'locationFlag___childFlagsJson___src___blocks'
  | 'locationFlag___childFlagsJson___src___url'
  | 'locationFlag___childFlagsJson___src___publicURL'
  | 'locationFlag___childFlagsJson___src___childrenImageSharp'
  | 'locationFlag___childFlagsJson___src___childrenWorkJson'
  | 'locationFlag___childFlagsJson___src___childrenSkillsJson'
  | 'locationFlag___childFlagsJson___src___childrenSeJson'
  | 'locationFlag___childFlagsJson___src___childrenRuJson'
  | 'locationFlag___childFlagsJson___src___childrenLocale'
  | 'locationFlag___childFlagsJson___src___childrenHuJson'
  | 'locationFlag___childFlagsJson___src___childrenFrJson'
  | 'locationFlag___childFlagsJson___src___childrenFlagsJson'
  | 'locationFlag___childFlagsJson___src___childrenEtJson'
  | 'locationFlag___childFlagsJson___src___childrenEsJson'
  | 'locationFlag___childFlagsJson___src___childrenEnJson'
  | 'locationFlag___childFlagsJson___src___childrenEducationJson'
  | 'locationFlag___childFlagsJson___src___childrenDeJson'
  | 'locationFlag___childFlagsJson___src___id'
  | 'locationFlag___childFlagsJson___src___children'
  | 'locationFlag___childrenEtJson'
  | 'locationFlag___childrenEtJson___id'
  | 'locationFlag___childrenEtJson___parent___id'
  | 'locationFlag___childrenEtJson___parent___children'
  | 'locationFlag___childrenEtJson___children'
  | 'locationFlag___childrenEtJson___children___id'
  | 'locationFlag___childrenEtJson___children___children'
  | 'locationFlag___childrenEtJson___internal___content'
  | 'locationFlag___childrenEtJson___internal___contentDigest'
  | 'locationFlag___childrenEtJson___internal___description'
  | 'locationFlag___childrenEtJson___internal___fieldOwners'
  | 'locationFlag___childrenEtJson___internal___ignoreType'
  | 'locationFlag___childrenEtJson___internal___mediaType'
  | 'locationFlag___childrenEtJson___internal___owner'
  | 'locationFlag___childrenEtJson___internal___type'
  | 'locationFlag___childrenEtJson___About___AboutMe'
  | 'locationFlag___childrenEtJson___About___Description'
  | 'locationFlag___childrenEtJson___About___PhotoDescription'
  | 'locationFlag___childrenEtJson___About___ViewCV'
  | 'locationFlag___childrenEtJson___Acknowledgements'
  | 'locationFlag___childrenEtJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenEtJson___Banner___Experience'
  | 'locationFlag___childrenEtJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenEtJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenEtJson___Blog___Blog'
  | 'locationFlag___childrenEtJson___Contact___Contact'
  | 'locationFlag___childrenEtJson___Contact___GetInTouch'
  | 'locationFlag___childrenEtJson___Contact___SendEmail'
  | 'locationFlag___childrenEtJson___Education___Description'
  | 'locationFlag___childrenEtJson___Education___Education'
  | 'locationFlag___childrenEtJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenEtJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenEtJson___PageLinks___Home'
  | 'locationFlag___childrenEtJson___SectionButtons___About'
  | 'locationFlag___childrenEtJson___SectionButtons___Blog'
  | 'locationFlag___childrenEtJson___SectionButtons___Contact'
  | 'locationFlag___childrenEtJson___SectionButtons___Experience'
  | 'locationFlag___childrenEtJson___SectionButtons___Skills'
  | 'locationFlag___childrenEtJson___Skills___Overview'
  | 'locationFlag___childrenEtJson___Skills___Skills'
  | 'locationFlag___childrenEtJson___Work___Work'
  | 'locationFlag___childEtJson___id'
  | 'locationFlag___childEtJson___parent___id'
  | 'locationFlag___childEtJson___parent___children'
  | 'locationFlag___childEtJson___children'
  | 'locationFlag___childEtJson___children___id'
  | 'locationFlag___childEtJson___children___children'
  | 'locationFlag___childEtJson___internal___content'
  | 'locationFlag___childEtJson___internal___contentDigest'
  | 'locationFlag___childEtJson___internal___description'
  | 'locationFlag___childEtJson___internal___fieldOwners'
  | 'locationFlag___childEtJson___internal___ignoreType'
  | 'locationFlag___childEtJson___internal___mediaType'
  | 'locationFlag___childEtJson___internal___owner'
  | 'locationFlag___childEtJson___internal___type'
  | 'locationFlag___childEtJson___About___AboutMe'
  | 'locationFlag___childEtJson___About___Description'
  | 'locationFlag___childEtJson___About___PhotoDescription'
  | 'locationFlag___childEtJson___About___ViewCV'
  | 'locationFlag___childEtJson___Acknowledgements'
  | 'locationFlag___childEtJson___Banner___DexterSibirtsev'
  | 'locationFlag___childEtJson___Banner___Experience'
  | 'locationFlag___childEtJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childEtJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childEtJson___Blog___Blog'
  | 'locationFlag___childEtJson___Contact___Contact'
  | 'locationFlag___childEtJson___Contact___GetInTouch'
  | 'locationFlag___childEtJson___Contact___SendEmail'
  | 'locationFlag___childEtJson___Education___Description'
  | 'locationFlag___childEtJson___Education___Education'
  | 'locationFlag___childEtJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childEtJson___PageLinks___Acknowledgements'
  | 'locationFlag___childEtJson___PageLinks___Home'
  | 'locationFlag___childEtJson___SectionButtons___About'
  | 'locationFlag___childEtJson___SectionButtons___Blog'
  | 'locationFlag___childEtJson___SectionButtons___Contact'
  | 'locationFlag___childEtJson___SectionButtons___Experience'
  | 'locationFlag___childEtJson___SectionButtons___Skills'
  | 'locationFlag___childEtJson___Skills___Overview'
  | 'locationFlag___childEtJson___Skills___Skills'
  | 'locationFlag___childEtJson___Work___Work'
  | 'locationFlag___childrenEsJson'
  | 'locationFlag___childrenEsJson___id'
  | 'locationFlag___childrenEsJson___parent___id'
  | 'locationFlag___childrenEsJson___parent___children'
  | 'locationFlag___childrenEsJson___children'
  | 'locationFlag___childrenEsJson___children___id'
  | 'locationFlag___childrenEsJson___children___children'
  | 'locationFlag___childrenEsJson___internal___content'
  | 'locationFlag___childrenEsJson___internal___contentDigest'
  | 'locationFlag___childrenEsJson___internal___description'
  | 'locationFlag___childrenEsJson___internal___fieldOwners'
  | 'locationFlag___childrenEsJson___internal___ignoreType'
  | 'locationFlag___childrenEsJson___internal___mediaType'
  | 'locationFlag___childrenEsJson___internal___owner'
  | 'locationFlag___childrenEsJson___internal___type'
  | 'locationFlag___childrenEsJson___About___AboutMe'
  | 'locationFlag___childrenEsJson___About___Description'
  | 'locationFlag___childrenEsJson___About___PhotoDescription'
  | 'locationFlag___childrenEsJson___About___ViewCV'
  | 'locationFlag___childrenEsJson___Acknowledgements'
  | 'locationFlag___childrenEsJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenEsJson___Banner___Experience'
  | 'locationFlag___childrenEsJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenEsJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenEsJson___Blog___Blog'
  | 'locationFlag___childrenEsJson___Contact___Contact'
  | 'locationFlag___childrenEsJson___Contact___GetInTouch'
  | 'locationFlag___childrenEsJson___Contact___SendEmail'
  | 'locationFlag___childrenEsJson___Education___Description'
  | 'locationFlag___childrenEsJson___Education___Education'
  | 'locationFlag___childrenEsJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenEsJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenEsJson___PageLinks___Home'
  | 'locationFlag___childrenEsJson___SectionButtons___About'
  | 'locationFlag___childrenEsJson___SectionButtons___Blog'
  | 'locationFlag___childrenEsJson___SectionButtons___Contact'
  | 'locationFlag___childrenEsJson___SectionButtons___Experience'
  | 'locationFlag___childrenEsJson___SectionButtons___Skills'
  | 'locationFlag___childrenEsJson___Skills___Overview'
  | 'locationFlag___childrenEsJson___Skills___Skills'
  | 'locationFlag___childrenEsJson___Work___Work'
  | 'locationFlag___childEsJson___id'
  | 'locationFlag___childEsJson___parent___id'
  | 'locationFlag___childEsJson___parent___children'
  | 'locationFlag___childEsJson___children'
  | 'locationFlag___childEsJson___children___id'
  | 'locationFlag___childEsJson___children___children'
  | 'locationFlag___childEsJson___internal___content'
  | 'locationFlag___childEsJson___internal___contentDigest'
  | 'locationFlag___childEsJson___internal___description'
  | 'locationFlag___childEsJson___internal___fieldOwners'
  | 'locationFlag___childEsJson___internal___ignoreType'
  | 'locationFlag___childEsJson___internal___mediaType'
  | 'locationFlag___childEsJson___internal___owner'
  | 'locationFlag___childEsJson___internal___type'
  | 'locationFlag___childEsJson___About___AboutMe'
  | 'locationFlag___childEsJson___About___Description'
  | 'locationFlag___childEsJson___About___PhotoDescription'
  | 'locationFlag___childEsJson___About___ViewCV'
  | 'locationFlag___childEsJson___Acknowledgements'
  | 'locationFlag___childEsJson___Banner___DexterSibirtsev'
  | 'locationFlag___childEsJson___Banner___Experience'
  | 'locationFlag___childEsJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childEsJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childEsJson___Blog___Blog'
  | 'locationFlag___childEsJson___Contact___Contact'
  | 'locationFlag___childEsJson___Contact___GetInTouch'
  | 'locationFlag___childEsJson___Contact___SendEmail'
  | 'locationFlag___childEsJson___Education___Description'
  | 'locationFlag___childEsJson___Education___Education'
  | 'locationFlag___childEsJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childEsJson___PageLinks___Acknowledgements'
  | 'locationFlag___childEsJson___PageLinks___Home'
  | 'locationFlag___childEsJson___SectionButtons___About'
  | 'locationFlag___childEsJson___SectionButtons___Blog'
  | 'locationFlag___childEsJson___SectionButtons___Contact'
  | 'locationFlag___childEsJson___SectionButtons___Experience'
  | 'locationFlag___childEsJson___SectionButtons___Skills'
  | 'locationFlag___childEsJson___Skills___Overview'
  | 'locationFlag___childEsJson___Skills___Skills'
  | 'locationFlag___childEsJson___Work___Work'
  | 'locationFlag___childrenEnJson'
  | 'locationFlag___childrenEnJson___id'
  | 'locationFlag___childrenEnJson___parent___id'
  | 'locationFlag___childrenEnJson___parent___children'
  | 'locationFlag___childrenEnJson___children'
  | 'locationFlag___childrenEnJson___children___id'
  | 'locationFlag___childrenEnJson___children___children'
  | 'locationFlag___childrenEnJson___internal___content'
  | 'locationFlag___childrenEnJson___internal___contentDigest'
  | 'locationFlag___childrenEnJson___internal___description'
  | 'locationFlag___childrenEnJson___internal___fieldOwners'
  | 'locationFlag___childrenEnJson___internal___ignoreType'
  | 'locationFlag___childrenEnJson___internal___mediaType'
  | 'locationFlag___childrenEnJson___internal___owner'
  | 'locationFlag___childrenEnJson___internal___type'
  | 'locationFlag___childrenEnJson___About___AboutMe'
  | 'locationFlag___childrenEnJson___About___Description'
  | 'locationFlag___childrenEnJson___About___PhotoDescription'
  | 'locationFlag___childrenEnJson___About___ViewCV'
  | 'locationFlag___childrenEnJson___Acknowledgements'
  | 'locationFlag___childrenEnJson___Banner___DexterSibirtsev'
  | 'locationFlag___childrenEnJson___Banner___Experience'
  | 'locationFlag___childrenEnJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childrenEnJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childrenEnJson___Blog___Blog'
  | 'locationFlag___childrenEnJson___Contact___Contact'
  | 'locationFlag___childrenEnJson___Contact___GetInTouch'
  | 'locationFlag___childrenEnJson___Contact___SendEmail'
  | 'locationFlag___childrenEnJson___Education___Description'
  | 'locationFlag___childrenEnJson___Education___Education'
  | 'locationFlag___childrenEnJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childrenEnJson___PageLinks___Acknowledgements'
  | 'locationFlag___childrenEnJson___PageLinks___Home'
  | 'locationFlag___childrenEnJson___SectionButtons___About'
  | 'locationFlag___childrenEnJson___SectionButtons___Blog'
  | 'locationFlag___childrenEnJson___SectionButtons___Contact'
  | 'locationFlag___childrenEnJson___SectionButtons___Experience'
  | 'locationFlag___childrenEnJson___SectionButtons___Skills'
  | 'locationFlag___childrenEnJson___Skills___Overview'
  | 'locationFlag___childrenEnJson___Skills___Skills'
  | 'locationFlag___childrenEnJson___Work___Work'
  | 'locationFlag___childEnJson___id'
  | 'locationFlag___childEnJson___parent___id'
  | 'locationFlag___childEnJson___parent___children'
  | 'locationFlag___childEnJson___children'
  | 'locationFlag___childEnJson___children___id'
  | 'locationFlag___childEnJson___children___children'
  | 'locationFlag___childEnJson___internal___content'
  | 'locationFlag___childEnJson___internal___contentDigest'
  | 'locationFlag___childEnJson___internal___description'
  | 'locationFlag___childEnJson___internal___fieldOwners'
  | 'locationFlag___childEnJson___internal___ignoreType'
  | 'locationFlag___childEnJson___internal___mediaType'
  | 'locationFlag___childEnJson___internal___owner'
  | 'locationFlag___childEnJson___internal___type'
  | 'locationFlag___childEnJson___About___AboutMe'
  | 'locationFlag___childEnJson___About___Description'
  | 'locationFlag___childEnJson___About___PhotoDescription'
  | 'locationFlag___childEnJson___About___ViewCV'
  | 'locationFlag___childEnJson___Acknowledgements'
  | 'locationFlag___childEnJson___Banner___DexterSibirtsev'
  | 'locationFlag___childEnJson___Banner___Experience'
  | 'locationFlag___childEnJson___Banner___HelloIAmAProgrammer'
  | 'locationFlag___childEnJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childEnJson___Blog___Blog'
  | 'locationFlag___childEnJson___Contact___Contact'
  | 'locationFlag___childEnJson___Contact___GetInTouch'
  | 'locationFlag___childEnJson___Contact___SendEmail'
  | 'locationFlag___childEnJson___Education___Description'
  | 'locationFlag___childEnJson___Education___Education'
  | 'locationFlag___childEnJson___Experience___TranslationsUnderConstruction'
  | 'locationFlag___childEnJson___PageLinks___Acknowledgements'
  | 'locationFlag___childEnJson___PageLinks___Home'
  | 'locationFlag___childEnJson___SectionButtons___About'
  | 'locationFlag___childEnJson___SectionButtons___Blog'
  | 'locationFlag___childEnJson___SectionButtons___Contact'
  | 'locationFlag___childEnJson___SectionButtons___Experience'
  | 'locationFlag___childEnJson___SectionButtons___Skills'
  | 'locationFlag___childEnJson___Skills___Overview'
  | 'locationFlag___childEnJson___Skills___Skills'
  | 'locationFlag___childEnJson___Work___Work'
  | 'locationFlag___childrenEducationJson'
  | 'locationFlag___childrenEducationJson___id'
  | 'locationFlag___childrenEducationJson___parent___id'
  | 'locationFlag___childrenEducationJson___parent___children'
  | 'locationFlag___childrenEducationJson___children'
  | 'locationFlag___childrenEducationJson___children___id'
  | 'locationFlag___childrenEducationJson___children___children'
  | 'locationFlag___childrenEducationJson___internal___content'
  | 'locationFlag___childrenEducationJson___internal___contentDigest'
  | 'locationFlag___childrenEducationJson___internal___description'
  | 'locationFlag___childrenEducationJson___internal___fieldOwners'
  | 'locationFlag___childrenEducationJson___internal___ignoreType'
  | 'locationFlag___childrenEducationJson___internal___mediaType'
  | 'locationFlag___childrenEducationJson___internal___owner'
  | 'locationFlag___childrenEducationJson___internal___type'
  | 'locationFlag___childrenEducationJson___location'
  | 'locationFlag___childrenEducationJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childrenEducationJson___locationFlag___absolutePath'
  | 'locationFlag___childrenEducationJson___locationFlag___relativePath'
  | 'locationFlag___childrenEducationJson___locationFlag___extension'
  | 'locationFlag___childrenEducationJson___locationFlag___size'
  | 'locationFlag___childrenEducationJson___locationFlag___prettySize'
  | 'locationFlag___childrenEducationJson___locationFlag___modifiedTime'
  | 'locationFlag___childrenEducationJson___locationFlag___accessTime'
  | 'locationFlag___childrenEducationJson___locationFlag___changeTime'
  | 'locationFlag___childrenEducationJson___locationFlag___birthTime'
  | 'locationFlag___childrenEducationJson___locationFlag___root'
  | 'locationFlag___childrenEducationJson___locationFlag___dir'
  | 'locationFlag___childrenEducationJson___locationFlag___base'
  | 'locationFlag___childrenEducationJson___locationFlag___ext'
  | 'locationFlag___childrenEducationJson___locationFlag___name'
  | 'locationFlag___childrenEducationJson___locationFlag___relativeDirectory'
  | 'locationFlag___childrenEducationJson___locationFlag___dev'
  | 'locationFlag___childrenEducationJson___locationFlag___mode'
  | 'locationFlag___childrenEducationJson___locationFlag___nlink'
  | 'locationFlag___childrenEducationJson___locationFlag___uid'
  | 'locationFlag___childrenEducationJson___locationFlag___gid'
  | 'locationFlag___childrenEducationJson___locationFlag___rdev'
  | 'locationFlag___childrenEducationJson___locationFlag___ino'
  | 'locationFlag___childrenEducationJson___locationFlag___atimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___mtimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___ctimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___atime'
  | 'locationFlag___childrenEducationJson___locationFlag___mtime'
  | 'locationFlag___childrenEducationJson___locationFlag___ctime'
  | 'locationFlag___childrenEducationJson___locationFlag___birthtime'
  | 'locationFlag___childrenEducationJson___locationFlag___birthtimeMs'
  | 'locationFlag___childrenEducationJson___locationFlag___blksize'
  | 'locationFlag___childrenEducationJson___locationFlag___blocks'
  | 'locationFlag___childrenEducationJson___locationFlag___url'
  | 'locationFlag___childrenEducationJson___locationFlag___publicURL'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenSeJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenRuJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenLocale'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenHuJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenFrJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEtJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEsJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEnJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childrenEducationJson___locationFlag___childrenDeJson'
  | 'locationFlag___childrenEducationJson___locationFlag___id'
  | 'locationFlag___childrenEducationJson___locationFlag___children'
  | 'locationFlag___childrenEducationJson___title'
  | 'locationFlag___childrenEducationJson___logo___sourceInstanceName'
  | 'locationFlag___childrenEducationJson___logo___absolutePath'
  | 'locationFlag___childrenEducationJson___logo___relativePath'
  | 'locationFlag___childrenEducationJson___logo___extension'
  | 'locationFlag___childrenEducationJson___logo___size'
  | 'locationFlag___childrenEducationJson___logo___prettySize'
  | 'locationFlag___childrenEducationJson___logo___modifiedTime'
  | 'locationFlag___childrenEducationJson___logo___accessTime'
  | 'locationFlag___childrenEducationJson___logo___changeTime'
  | 'locationFlag___childrenEducationJson___logo___birthTime'
  | 'locationFlag___childrenEducationJson___logo___root'
  | 'locationFlag___childrenEducationJson___logo___dir'
  | 'locationFlag___childrenEducationJson___logo___base'
  | 'locationFlag___childrenEducationJson___logo___ext'
  | 'locationFlag___childrenEducationJson___logo___name'
  | 'locationFlag___childrenEducationJson___logo___relativeDirectory'
  | 'locationFlag___childrenEducationJson___logo___dev'
  | 'locationFlag___childrenEducationJson___logo___mode'
  | 'locationFlag___childrenEducationJson___logo___nlink'
  | 'locationFlag___childrenEducationJson___logo___uid'
  | 'locationFlag___childrenEducationJson___logo___gid'
  | 'locationFlag___childrenEducationJson___logo___rdev'
  | 'locationFlag___childrenEducationJson___logo___ino'
  | 'locationFlag___childrenEducationJson___logo___atimeMs'
  | 'locationFlag___childrenEducationJson___logo___mtimeMs'
  | 'locationFlag___childrenEducationJson___logo___ctimeMs'
  | 'locationFlag___childrenEducationJson___logo___atime'
  | 'locationFlag___childrenEducationJson___logo___mtime'
  | 'locationFlag___childrenEducationJson___logo___ctime'
  | 'locationFlag___childrenEducationJson___logo___birthtime'
  | 'locationFlag___childrenEducationJson___logo___birthtimeMs'
  | 'locationFlag___childrenEducationJson___logo___blksize'
  | 'locationFlag___childrenEducationJson___logo___blocks'
  | 'locationFlag___childrenEducationJson___logo___url'
  | 'locationFlag___childrenEducationJson___logo___publicURL'
  | 'locationFlag___childrenEducationJson___logo___childrenImageSharp'
  | 'locationFlag___childrenEducationJson___logo___childrenWorkJson'
  | 'locationFlag___childrenEducationJson___logo___childrenSkillsJson'
  | 'locationFlag___childrenEducationJson___logo___childrenSeJson'
  | 'locationFlag___childrenEducationJson___logo___childrenRuJson'
  | 'locationFlag___childrenEducationJson___logo___childrenLocale'
  | 'locationFlag___childrenEducationJson___logo___childrenHuJson'
  | 'locationFlag___childrenEducationJson___logo___childrenFrJson'
  | 'locationFlag___childrenEducationJson___logo___childrenFlagsJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEtJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEsJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEnJson'
  | 'locationFlag___childrenEducationJson___logo___childrenEducationJson'
  | 'locationFlag___childrenEducationJson___logo___childrenDeJson'
  | 'locationFlag___childrenEducationJson___logo___id'
  | 'locationFlag___childrenEducationJson___logo___children'
  | 'locationFlag___childrenEducationJson___name'
  | 'locationFlag___childrenEducationJson___dates'
  | 'locationFlag___childrenEducationJson___description'
  | 'locationFlag___childEducationJson___id'
  | 'locationFlag___childEducationJson___parent___id'
  | 'locationFlag___childEducationJson___parent___children'
  | 'locationFlag___childEducationJson___children'
  | 'locationFlag___childEducationJson___children___id'
  | 'locationFlag___childEducationJson___children___children'
  | 'locationFlag___childEducationJson___internal___content'
  | 'locationFlag___childEducationJson___internal___contentDigest'
  | 'locationFlag___childEducationJson___internal___description'
  | 'locationFlag___childEducationJson___internal___fieldOwners'
  | 'locationFlag___childEducationJson___internal___ignoreType'
  | 'locationFlag___childEducationJson___internal___mediaType'
  | 'locationFlag___childEducationJson___internal___owner'
  | 'locationFlag___childEducationJson___internal___type'
  | 'locationFlag___childEducationJson___location'
  | 'locationFlag___childEducationJson___locationFlag___sourceInstanceName'
  | 'locationFlag___childEducationJson___locationFlag___absolutePath'
  | 'locationFlag___childEducationJson___locationFlag___relativePath'
  | 'locationFlag___childEducationJson___locationFlag___extension'
  | 'locationFlag___childEducationJson___locationFlag___size'
  | 'locationFlag___childEducationJson___locationFlag___prettySize'
  | 'locationFlag___childEducationJson___locationFlag___modifiedTime'
  | 'locationFlag___childEducationJson___locationFlag___accessTime'
  | 'locationFlag___childEducationJson___locationFlag___changeTime'
  | 'locationFlag___childEducationJson___locationFlag___birthTime'
  | 'locationFlag___childEducationJson___locationFlag___root'
  | 'locationFlag___childEducationJson___locationFlag___dir'
  | 'locationFlag___childEducationJson___locationFlag___base'
  | 'locationFlag___childEducationJson___locationFlag___ext'
  | 'locationFlag___childEducationJson___locationFlag___name'
  | 'locationFlag___childEducationJson___locationFlag___relativeDirectory'
  | 'locationFlag___childEducationJson___locationFlag___dev'
  | 'locationFlag___childEducationJson___locationFlag___mode'
  | 'locationFlag___childEducationJson___locationFlag___nlink'
  | 'locationFlag___childEducationJson___locationFlag___uid'
  | 'locationFlag___childEducationJson___locationFlag___gid'
  | 'locationFlag___childEducationJson___locationFlag___rdev'
  | 'locationFlag___childEducationJson___locationFlag___ino'
  | 'locationFlag___childEducationJson___locationFlag___atimeMs'
  | 'locationFlag___childEducationJson___locationFlag___mtimeMs'
  | 'locationFlag___childEducationJson___locationFlag___ctimeMs'
  | 'locationFlag___childEducationJson___locationFlag___atime'
  | 'locationFlag___childEducationJson___locationFlag___mtime'
  | 'locationFlag___childEducationJson___locationFlag___ctime'
  | 'locationFlag___childEducationJson___locationFlag___birthtime'
  | 'locationFlag___childEducationJson___locationFlag___birthtimeMs'
  | 'locationFlag___childEducationJson___locationFlag___blksize'
  | 'locationFlag___childEducationJson___locationFlag___blocks'
  | 'locationFlag___childEducationJson___locationFlag___url'
  | 'locationFlag___childEducationJson___locationFlag___publicURL'
  | 'locationFlag___childEducationJson___locationFlag___childrenImageSharp'
  | 'locationFlag___childEducationJson___locationFlag___childrenWorkJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenSkillsJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenSeJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenRuJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenLocale'
  | 'locationFlag___childEducationJson___locationFlag___childrenHuJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenFrJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenFlagsJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEtJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEsJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEnJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenEducationJson'
  | 'locationFlag___childEducationJson___locationFlag___childrenDeJson'
  | 'locationFlag___childEducationJson___locationFlag___id'
  | 'locationFlag___childEducationJson___locationFlag___children'
  | 'locationFlag___childEducationJson___title'
  | 'locationFlag___childEducationJson___logo___sourceInstanceName'
  | 'locationFlag___childEducationJson___logo___absolutePath'
  | 'locationFlag___childEducationJson___logo___relativePath'
  | 'locationFlag___childEducationJson___logo___extension'
  | 'locationFlag___childEducationJson___logo___size'
  | 'locationFlag___childEducationJson___logo___prettySize'
  | 'locationFlag___childEducationJson___logo___modifiedTime'
  | 'locationFlag___childEducationJson___logo___accessTime'
  | 'locationFlag___childEducationJson___logo___changeTime'
  | 'locationFlag___childEducationJson___logo___birthTime'
  | 'locationFlag___childEducationJson___logo___root'
  | 'locationFlag___childEducationJson___logo___dir'
  | 'locationFlag___childEducationJson___logo___base'
  | 'locationFlag___childEducationJson___logo___ext'
  | 'locationFlag___childEducationJson___logo___name'
  | 'locationFlag___childEducationJson___logo___relativeDirectory'
  | 'locationFlag___childEducationJson___logo___dev'
  | 'locationFlag___childEducationJson___logo___mode'
  | 'locationFlag___childEducationJson___logo___nlink'
  | 'locationFlag___childEducationJson___logo___uid'
  | 'locationFlag___childEducationJson___logo___gid'
  | 'locationFlag___childEducationJson___logo___rdev'
  | 'locationFlag___childEducationJson___logo___ino'
  | 'locationFlag___childEducationJson___logo___atimeMs'
  | 'locationFlag___childEducationJson___logo___mtimeMs'
  | 'locationFlag___childEducationJson___logo___ctimeMs'
  | 'locationFlag___childEducationJson___logo___atime'
  | 'locationFlag___childEducationJson___logo___mtime'
  | 'locationFlag___childEducationJson___logo___ctime'
  | 'locationFlag___childEducationJson___logo___birthtime'
  | 'locationFlag___childEducationJson___logo___birthtimeMs'
  | 'locationFlag___childEducationJson___logo___blksize'
  | 'locationFlag___childEducationJson___logo___blocks'
  | 'locationFlag___childEducationJson___logo___url'
  | 'locationFlag___childEducationJson___logo___publicURL'
  | 'locationFlag___childEducationJson___logo___childrenImageSharp'
  | 'locationFlag___childEducationJson___logo___childrenWorkJson'
  | 'locationFlag___childEducationJson___logo___childrenSkillsJson'
  | 'locationFlag___childEducationJson___logo___childrenSeJson'
  | 'locationFlag___childEducationJson___logo___childrenRuJson'
  | 'locationFlag___childEducationJson___logo___childrenLocale'
  | 'locationFlag___childEducationJson___logo___childrenHuJson'
  | 'locationFlag___childEducationJson___logo___childrenFrJson'
  | 'locationFlag___childEducationJson___logo___childrenFlagsJson'
  | 'locationFlag___childEducationJson___logo___childrenEtJson'
  | 'locationFlag___childEducationJson___logo___childrenEsJson'
  | 'locationFlag___childEducationJson___logo___childrenEnJson'
  | 'locationFlag___childEducationJson___logo___childrenEducationJson'
  | 'locationFlag___childEducationJson___logo___childrenDeJson'
  | 'locationFlag___childEducationJson___logo___id'
  | 'locationFlag___childEducationJson___logo___children'
  | 'locationFlag___childEducationJson___name'
  | 'locationFlag___childEducationJson___dates'
  | 'locationFlag___childEducationJson___description'
  | 'locationFlag___childrenDeJson'
  | 'locationFlag___childrenDeJson___id'
  | 'locationFlag___childrenDeJson___parent___id'
  | 'locationFlag___childrenDeJson___parent___children'
  | 'locationFlag___childrenDeJson___children'
  | 'locationFlag___childrenDeJson___children___id'
  | 'locationFlag___childrenDeJson___children___children'
  | 'locationFlag___childrenDeJson___internal___content'
  | 'locationFlag___childrenDeJson___internal___contentDigest'
  | 'locationFlag___childrenDeJson___internal___description'
  | 'locationFlag___childrenDeJson___internal___fieldOwners'
  | 'locationFlag___childrenDeJson___internal___ignoreType'
  | 'locationFlag___childrenDeJson___internal___mediaType'
  | 'locationFlag___childrenDeJson___internal___owner'
  | 'locationFlag___childrenDeJson___internal___type'
  | 'locationFlag___childrenDeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___childDeJson___id'
  | 'locationFlag___childDeJson___parent___id'
  | 'locationFlag___childDeJson___parent___children'
  | 'locationFlag___childDeJson___children'
  | 'locationFlag___childDeJson___children___id'
  | 'locationFlag___childDeJson___children___children'
  | 'locationFlag___childDeJson___internal___content'
  | 'locationFlag___childDeJson___internal___contentDigest'
  | 'locationFlag___childDeJson___internal___description'
  | 'locationFlag___childDeJson___internal___fieldOwners'
  | 'locationFlag___childDeJson___internal___ignoreType'
  | 'locationFlag___childDeJson___internal___mediaType'
  | 'locationFlag___childDeJson___internal___owner'
  | 'locationFlag___childDeJson___internal___type'
  | 'locationFlag___childDeJson___Banner___SoftwareDeveloper'
  | 'locationFlag___id'
  | 'locationFlag___parent___id'
  | 'locationFlag___parent___parent___id'
  | 'locationFlag___parent___parent___children'
  | 'locationFlag___parent___children'
  | 'locationFlag___parent___children___id'
  | 'locationFlag___parent___children___children'
  | 'locationFlag___parent___internal___content'
  | 'locationFlag___parent___internal___contentDigest'
  | 'locationFlag___parent___internal___description'
  | 'locationFlag___parent___internal___fieldOwners'
  | 'locationFlag___parent___internal___ignoreType'
  | 'locationFlag___parent___internal___mediaType'
  | 'locationFlag___parent___internal___owner'
  | 'locationFlag___parent___internal___type'
  | 'locationFlag___children'
  | 'locationFlag___children___id'
  | 'locationFlag___children___parent___id'
  | 'locationFlag___children___parent___children'
  | 'locationFlag___children___children'
  | 'locationFlag___children___children___id'
  | 'locationFlag___children___children___children'
  | 'locationFlag___children___internal___content'
  | 'locationFlag___children___internal___contentDigest'
  | 'locationFlag___children___internal___description'
  | 'locationFlag___children___internal___fieldOwners'
  | 'locationFlag___children___internal___ignoreType'
  | 'locationFlag___children___internal___mediaType'
  | 'locationFlag___children___internal___owner'
  | 'locationFlag___children___internal___type'
  | 'locationFlag___internal___content'
  | 'locationFlag___internal___contentDigest'
  | 'locationFlag___internal___description'
  | 'locationFlag___internal___fieldOwners'
  | 'locationFlag___internal___ignoreType'
  | 'locationFlag___internal___mediaType'
  | 'locationFlag___internal___owner'
  | 'locationFlag___internal___type'
  | 'title'
  | 'logo___sourceInstanceName'
  | 'logo___absolutePath'
  | 'logo___relativePath'
  | 'logo___extension'
  | 'logo___size'
  | 'logo___prettySize'
  | 'logo___modifiedTime'
  | 'logo___accessTime'
  | 'logo___changeTime'
  | 'logo___birthTime'
  | 'logo___root'
  | 'logo___dir'
  | 'logo___base'
  | 'logo___ext'
  | 'logo___name'
  | 'logo___relativeDirectory'
  | 'logo___dev'
  | 'logo___mode'
  | 'logo___nlink'
  | 'logo___uid'
  | 'logo___gid'
  | 'logo___rdev'
  | 'logo___ino'
  | 'logo___atimeMs'
  | 'logo___mtimeMs'
  | 'logo___ctimeMs'
  | 'logo___atime'
  | 'logo___mtime'
  | 'logo___ctime'
  | 'logo___birthtime'
  | 'logo___birthtimeMs'
  | 'logo___blksize'
  | 'logo___blocks'
  | 'logo___url'
  | 'logo___publicURL'
  | 'logo___childrenImageSharp'
  | 'logo___childrenImageSharp___fixed___base64'
  | 'logo___childrenImageSharp___fixed___tracedSVG'
  | 'logo___childrenImageSharp___fixed___aspectRatio'
  | 'logo___childrenImageSharp___fixed___width'
  | 'logo___childrenImageSharp___fixed___height'
  | 'logo___childrenImageSharp___fixed___src'
  | 'logo___childrenImageSharp___fixed___srcSet'
  | 'logo___childrenImageSharp___fixed___srcWebp'
  | 'logo___childrenImageSharp___fixed___srcSetWebp'
  | 'logo___childrenImageSharp___fixed___originalName'
  | 'logo___childrenImageSharp___fluid___base64'
  | 'logo___childrenImageSharp___fluid___tracedSVG'
  | 'logo___childrenImageSharp___fluid___aspectRatio'
  | 'logo___childrenImageSharp___fluid___src'
  | 'logo___childrenImageSharp___fluid___srcSet'
  | 'logo___childrenImageSharp___fluid___srcWebp'
  | 'logo___childrenImageSharp___fluid___srcSetWebp'
  | 'logo___childrenImageSharp___fluid___sizes'
  | 'logo___childrenImageSharp___fluid___originalImg'
  | 'logo___childrenImageSharp___fluid___originalName'
  | 'logo___childrenImageSharp___fluid___presentationWidth'
  | 'logo___childrenImageSharp___fluid___presentationHeight'
  | 'logo___childrenImageSharp___gatsbyImageData'
  | 'logo___childrenImageSharp___original___width'
  | 'logo___childrenImageSharp___original___height'
  | 'logo___childrenImageSharp___original___src'
  | 'logo___childrenImageSharp___resize___src'
  | 'logo___childrenImageSharp___resize___tracedSVG'
  | 'logo___childrenImageSharp___resize___width'
  | 'logo___childrenImageSharp___resize___height'
  | 'logo___childrenImageSharp___resize___aspectRatio'
  | 'logo___childrenImageSharp___resize___originalName'
  | 'logo___childrenImageSharp___id'
  | 'logo___childrenImageSharp___parent___id'
  | 'logo___childrenImageSharp___parent___children'
  | 'logo___childrenImageSharp___children'
  | 'logo___childrenImageSharp___children___id'
  | 'logo___childrenImageSharp___children___children'
  | 'logo___childrenImageSharp___internal___content'
  | 'logo___childrenImageSharp___internal___contentDigest'
  | 'logo___childrenImageSharp___internal___description'
  | 'logo___childrenImageSharp___internal___fieldOwners'
  | 'logo___childrenImageSharp___internal___ignoreType'
  | 'logo___childrenImageSharp___internal___mediaType'
  | 'logo___childrenImageSharp___internal___owner'
  | 'logo___childrenImageSharp___internal___type'
  | 'logo___childImageSharp___fixed___base64'
  | 'logo___childImageSharp___fixed___tracedSVG'
  | 'logo___childImageSharp___fixed___aspectRatio'
  | 'logo___childImageSharp___fixed___width'
  | 'logo___childImageSharp___fixed___height'
  | 'logo___childImageSharp___fixed___src'
  | 'logo___childImageSharp___fixed___srcSet'
  | 'logo___childImageSharp___fixed___srcWebp'
  | 'logo___childImageSharp___fixed___srcSetWebp'
  | 'logo___childImageSharp___fixed___originalName'
  | 'logo___childImageSharp___fluid___base64'
  | 'logo___childImageSharp___fluid___tracedSVG'
  | 'logo___childImageSharp___fluid___aspectRatio'
  | 'logo___childImageSharp___fluid___src'
  | 'logo___childImageSharp___fluid___srcSet'
  | 'logo___childImageSharp___fluid___srcWebp'
  | 'logo___childImageSharp___fluid___srcSetWebp'
  | 'logo___childImageSharp___fluid___sizes'
  | 'logo___childImageSharp___fluid___originalImg'
  | 'logo___childImageSharp___fluid___originalName'
  | 'logo___childImageSharp___fluid___presentationWidth'
  | 'logo___childImageSharp___fluid___presentationHeight'
  | 'logo___childImageSharp___gatsbyImageData'
  | 'logo___childImageSharp___original___width'
  | 'logo___childImageSharp___original___height'
  | 'logo___childImageSharp___original___src'
  | 'logo___childImageSharp___resize___src'
  | 'logo___childImageSharp___resize___tracedSVG'
  | 'logo___childImageSharp___resize___width'
  | 'logo___childImageSharp___resize___height'
  | 'logo___childImageSharp___resize___aspectRatio'
  | 'logo___childImageSharp___resize___originalName'
  | 'logo___childImageSharp___id'
  | 'logo___childImageSharp___parent___id'
  | 'logo___childImageSharp___parent___children'
  | 'logo___childImageSharp___children'
  | 'logo___childImageSharp___children___id'
  | 'logo___childImageSharp___children___children'
  | 'logo___childImageSharp___internal___content'
  | 'logo___childImageSharp___internal___contentDigest'
  | 'logo___childImageSharp___internal___description'
  | 'logo___childImageSharp___internal___fieldOwners'
  | 'logo___childImageSharp___internal___ignoreType'
  | 'logo___childImageSharp___internal___mediaType'
  | 'logo___childImageSharp___internal___owner'
  | 'logo___childImageSharp___internal___type'
  | 'logo___childrenWorkJson'
  | 'logo___childrenWorkJson___id'
  | 'logo___childrenWorkJson___parent___id'
  | 'logo___childrenWorkJson___parent___children'
  | 'logo___childrenWorkJson___children'
  | 'logo___childrenWorkJson___children___id'
  | 'logo___childrenWorkJson___children___children'
  | 'logo___childrenWorkJson___internal___content'
  | 'logo___childrenWorkJson___internal___contentDigest'
  | 'logo___childrenWorkJson___internal___description'
  | 'logo___childrenWorkJson___internal___fieldOwners'
  | 'logo___childrenWorkJson___internal___ignoreType'
  | 'logo___childrenWorkJson___internal___mediaType'
  | 'logo___childrenWorkJson___internal___owner'
  | 'logo___childrenWorkJson___internal___type'
  | 'logo___childrenWorkJson___location'
  | 'logo___childrenWorkJson___locationFlag___sourceInstanceName'
  | 'logo___childrenWorkJson___locationFlag___absolutePath'
  | 'logo___childrenWorkJson___locationFlag___relativePath'
  | 'logo___childrenWorkJson___locationFlag___extension'
  | 'logo___childrenWorkJson___locationFlag___size'
  | 'logo___childrenWorkJson___locationFlag___prettySize'
  | 'logo___childrenWorkJson___locationFlag___modifiedTime'
  | 'logo___childrenWorkJson___locationFlag___accessTime'
  | 'logo___childrenWorkJson___locationFlag___changeTime'
  | 'logo___childrenWorkJson___locationFlag___birthTime'
  | 'logo___childrenWorkJson___locationFlag___root'
  | 'logo___childrenWorkJson___locationFlag___dir'
  | 'logo___childrenWorkJson___locationFlag___base'
  | 'logo___childrenWorkJson___locationFlag___ext'
  | 'logo___childrenWorkJson___locationFlag___name'
  | 'logo___childrenWorkJson___locationFlag___relativeDirectory'
  | 'logo___childrenWorkJson___locationFlag___dev'
  | 'logo___childrenWorkJson___locationFlag___mode'
  | 'logo___childrenWorkJson___locationFlag___nlink'
  | 'logo___childrenWorkJson___locationFlag___uid'
  | 'logo___childrenWorkJson___locationFlag___gid'
  | 'logo___childrenWorkJson___locationFlag___rdev'
  | 'logo___childrenWorkJson___locationFlag___ino'
  | 'logo___childrenWorkJson___locationFlag___atimeMs'
  | 'logo___childrenWorkJson___locationFlag___mtimeMs'
  | 'logo___childrenWorkJson___locationFlag___ctimeMs'
  | 'logo___childrenWorkJson___locationFlag___atime'
  | 'logo___childrenWorkJson___locationFlag___mtime'
  | 'logo___childrenWorkJson___locationFlag___ctime'
  | 'logo___childrenWorkJson___locationFlag___birthtime'
  | 'logo___childrenWorkJson___locationFlag___birthtimeMs'
  | 'logo___childrenWorkJson___locationFlag___blksize'
  | 'logo___childrenWorkJson___locationFlag___blocks'
  | 'logo___childrenWorkJson___locationFlag___url'
  | 'logo___childrenWorkJson___locationFlag___publicURL'
  | 'logo___childrenWorkJson___locationFlag___childrenImageSharp'
  | 'logo___childrenWorkJson___locationFlag___childrenWorkJson'
  | 'logo___childrenWorkJson___locationFlag___childrenSkillsJson'
  | 'logo___childrenWorkJson___locationFlag___childrenSeJson'
  | 'logo___childrenWorkJson___locationFlag___childrenRuJson'
  | 'logo___childrenWorkJson___locationFlag___childrenLocale'
  | 'logo___childrenWorkJson___locationFlag___childrenHuJson'
  | 'logo___childrenWorkJson___locationFlag___childrenFrJson'
  | 'logo___childrenWorkJson___locationFlag___childrenFlagsJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEtJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEsJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEnJson'
  | 'logo___childrenWorkJson___locationFlag___childrenEducationJson'
  | 'logo___childrenWorkJson___locationFlag___childrenDeJson'
  | 'logo___childrenWorkJson___locationFlag___id'
  | 'logo___childrenWorkJson___locationFlag___children'
  | 'logo___childrenWorkJson___title'
  | 'logo___childrenWorkJson___logo___sourceInstanceName'
  | 'logo___childrenWorkJson___logo___absolutePath'
  | 'logo___childrenWorkJson___logo___relativePath'
  | 'logo___childrenWorkJson___logo___extension'
  | 'logo___childrenWorkJson___logo___size'
  | 'logo___childrenWorkJson___logo___prettySize'
  | 'logo___childrenWorkJson___logo___modifiedTime'
  | 'logo___childrenWorkJson___logo___accessTime'
  | 'logo___childrenWorkJson___logo___changeTime'
  | 'logo___childrenWorkJson___logo___birthTime'
  | 'logo___childrenWorkJson___logo___root'
  | 'logo___childrenWorkJson___logo___dir'
  | 'logo___childrenWorkJson___logo___base'
  | 'logo___childrenWorkJson___logo___ext'
  | 'logo___childrenWorkJson___logo___name'
  | 'logo___childrenWorkJson___logo___relativeDirectory'
  | 'logo___childrenWorkJson___logo___dev'
  | 'logo___childrenWorkJson___logo___mode'
  | 'logo___childrenWorkJson___logo___nlink'
  | 'logo___childrenWorkJson___logo___uid'
  | 'logo___childrenWorkJson___logo___gid'
  | 'logo___childrenWorkJson___logo___rdev'
  | 'logo___childrenWorkJson___logo___ino'
  | 'logo___childrenWorkJson___logo___atimeMs'
  | 'logo___childrenWorkJson___logo___mtimeMs'
  | 'logo___childrenWorkJson___logo___ctimeMs'
  | 'logo___childrenWorkJson___logo___atime'
  | 'logo___childrenWorkJson___logo___mtime'
  | 'logo___childrenWorkJson___logo___ctime'
  | 'logo___childrenWorkJson___logo___birthtime'
  | 'logo___childrenWorkJson___logo___birthtimeMs'
  | 'logo___childrenWorkJson___logo___blksize'
  | 'logo___childrenWorkJson___logo___blocks'
  | 'logo___childrenWorkJson___logo___url'
  | 'logo___childrenWorkJson___logo___publicURL'
  | 'logo___childrenWorkJson___logo___childrenImageSharp'
  | 'logo___childrenWorkJson___logo___childrenWorkJson'
  | 'logo___childrenWorkJson___logo___childrenSkillsJson'
  | 'logo___childrenWorkJson___logo___childrenSeJson'
  | 'logo___childrenWorkJson___logo___childrenRuJson'
  | 'logo___childrenWorkJson___logo___childrenLocale'
  | 'logo___childrenWorkJson___logo___childrenHuJson'
  | 'logo___childrenWorkJson___logo___childrenFrJson'
  | 'logo___childrenWorkJson___logo___childrenFlagsJson'
  | 'logo___childrenWorkJson___logo___childrenEtJson'
  | 'logo___childrenWorkJson___logo___childrenEsJson'
  | 'logo___childrenWorkJson___logo___childrenEnJson'
  | 'logo___childrenWorkJson___logo___childrenEducationJson'
  | 'logo___childrenWorkJson___logo___childrenDeJson'
  | 'logo___childrenWorkJson___logo___id'
  | 'logo___childrenWorkJson___logo___children'
  | 'logo___childrenWorkJson___name'
  | 'logo___childrenWorkJson___dates'
  | 'logo___childrenWorkJson___description'
  | 'logo___childWorkJson___id'
  | 'logo___childWorkJson___parent___id'
  | 'logo___childWorkJson___parent___children'
  | 'logo___childWorkJson___children'
  | 'logo___childWorkJson___children___id'
  | 'logo___childWorkJson___children___children'
  | 'logo___childWorkJson___internal___content'
  | 'logo___childWorkJson___internal___contentDigest'
  | 'logo___childWorkJson___internal___description'
  | 'logo___childWorkJson___internal___fieldOwners'
  | 'logo___childWorkJson___internal___ignoreType'
  | 'logo___childWorkJson___internal___mediaType'
  | 'logo___childWorkJson___internal___owner'
  | 'logo___childWorkJson___internal___type'
  | 'logo___childWorkJson___location'
  | 'logo___childWorkJson___locationFlag___sourceInstanceName'
  | 'logo___childWorkJson___locationFlag___absolutePath'
  | 'logo___childWorkJson___locationFlag___relativePath'
  | 'logo___childWorkJson___locationFlag___extension'
  | 'logo___childWorkJson___locationFlag___size'
  | 'logo___childWorkJson___locationFlag___prettySize'
  | 'logo___childWorkJson___locationFlag___modifiedTime'
  | 'logo___childWorkJson___locationFlag___accessTime'
  | 'logo___childWorkJson___locationFlag___changeTime'
  | 'logo___childWorkJson___locationFlag___birthTime'
  | 'logo___childWorkJson___locationFlag___root'
  | 'logo___childWorkJson___locationFlag___dir'
  | 'logo___childWorkJson___locationFlag___base'
  | 'logo___childWorkJson___locationFlag___ext'
  | 'logo___childWorkJson___locationFlag___name'
  | 'logo___childWorkJson___locationFlag___relativeDirectory'
  | 'logo___childWorkJson___locationFlag___dev'
  | 'logo___childWorkJson___locationFlag___mode'
  | 'logo___childWorkJson___locationFlag___nlink'
  | 'logo___childWorkJson___locationFlag___uid'
  | 'logo___childWorkJson___locationFlag___gid'
  | 'logo___childWorkJson___locationFlag___rdev'
  | 'logo___childWorkJson___locationFlag___ino'
  | 'logo___childWorkJson___locationFlag___atimeMs'
  | 'logo___childWorkJson___locationFlag___mtimeMs'
  | 'logo___childWorkJson___locationFlag___ctimeMs'
  | 'logo___childWorkJson___locationFlag___atime'
  | 'logo___childWorkJson___locationFlag___mtime'
  | 'logo___childWorkJson___locationFlag___ctime'
  | 'logo___childWorkJson___locationFlag___birthtime'
  | 'logo___childWorkJson___locationFlag___birthtimeMs'
  | 'logo___childWorkJson___locationFlag___blksize'
  | 'logo___childWorkJson___locationFlag___blocks'
  | 'logo___childWorkJson___locationFlag___url'
  | 'logo___childWorkJson___locationFlag___publicURL'
  | 'logo___childWorkJson___locationFlag___childrenImageSharp'
  | 'logo___childWorkJson___locationFlag___childrenWorkJson'
  | 'logo___childWorkJson___locationFlag___childrenSkillsJson'
  | 'logo___childWorkJson___locationFlag___childrenSeJson'
  | 'logo___childWorkJson___locationFlag___childrenRuJson'
  | 'logo___childWorkJson___locationFlag___childrenLocale'
  | 'logo___childWorkJson___locationFlag___childrenHuJson'
  | 'logo___childWorkJson___locationFlag___childrenFrJson'
  | 'logo___childWorkJson___locationFlag___childrenFlagsJson'
  | 'logo___childWorkJson___locationFlag___childrenEtJson'
  | 'logo___childWorkJson___locationFlag___childrenEsJson'
  | 'logo___childWorkJson___locationFlag___childrenEnJson'
  | 'logo___childWorkJson___locationFlag___childrenEducationJson'
  | 'logo___childWorkJson___locationFlag___childrenDeJson'
  | 'logo___childWorkJson___locationFlag___id'
  | 'logo___childWorkJson___locationFlag___children'
  | 'logo___childWorkJson___title'
  | 'logo___childWorkJson___logo___sourceInstanceName'
  | 'logo___childWorkJson___logo___absolutePath'
  | 'logo___childWorkJson___logo___relativePath'
  | 'logo___childWorkJson___logo___extension'
  | 'logo___childWorkJson___logo___size'
  | 'logo___childWorkJson___logo___prettySize'
  | 'logo___childWorkJson___logo___modifiedTime'
  | 'logo___childWorkJson___logo___accessTime'
  | 'logo___childWorkJson___logo___changeTime'
  | 'logo___childWorkJson___logo___birthTime'
  | 'logo___childWorkJson___logo___root'
  | 'logo___childWorkJson___logo___dir'
  | 'logo___childWorkJson___logo___base'
  | 'logo___childWorkJson___logo___ext'
  | 'logo___childWorkJson___logo___name'
  | 'logo___childWorkJson___logo___relativeDirectory'
  | 'logo___childWorkJson___logo___dev'
  | 'logo___childWorkJson___logo___mode'
  | 'logo___childWorkJson___logo___nlink'
  | 'logo___childWorkJson___logo___uid'
  | 'logo___childWorkJson___logo___gid'
  | 'logo___childWorkJson___logo___rdev'
  | 'logo___childWorkJson___logo___ino'
  | 'logo___childWorkJson___logo___atimeMs'
  | 'logo___childWorkJson___logo___mtimeMs'
  | 'logo___childWorkJson___logo___ctimeMs'
  | 'logo___childWorkJson___logo___atime'
  | 'logo___childWorkJson___logo___mtime'
  | 'logo___childWorkJson___logo___ctime'
  | 'logo___childWorkJson___logo___birthtime'
  | 'logo___childWorkJson___logo___birthtimeMs'
  | 'logo___childWorkJson___logo___blksize'
  | 'logo___childWorkJson___logo___blocks'
  | 'logo___childWorkJson___logo___url'
  | 'logo___childWorkJson___logo___publicURL'
  | 'logo___childWorkJson___logo___childrenImageSharp'
  | 'logo___childWorkJson___logo___childrenWorkJson'
  | 'logo___childWorkJson___logo___childrenSkillsJson'
  | 'logo___childWorkJson___logo___childrenSeJson'
  | 'logo___childWorkJson___logo___childrenRuJson'
  | 'logo___childWorkJson___logo___childrenLocale'
  | 'logo___childWorkJson___logo___childrenHuJson'
  | 'logo___childWorkJson___logo___childrenFrJson'
  | 'logo___childWorkJson___logo___childrenFlagsJson'
  | 'logo___childWorkJson___logo___childrenEtJson'
  | 'logo___childWorkJson___logo___childrenEsJson'
  | 'logo___childWorkJson___logo___childrenEnJson'
  | 'logo___childWorkJson___logo___childrenEducationJson'
  | 'logo___childWorkJson___logo___childrenDeJson'
  | 'logo___childWorkJson___logo___id'
  | 'logo___childWorkJson___logo___children'
  | 'logo___childWorkJson___name'
  | 'logo___childWorkJson___dates'
  | 'logo___childWorkJson___description'
  | 'logo___childrenSkillsJson'
  | 'logo___childrenSkillsJson___id'
  | 'logo___childrenSkillsJson___parent___id'
  | 'logo___childrenSkillsJson___parent___children'
  | 'logo___childrenSkillsJson___children'
  | 'logo___childrenSkillsJson___children___id'
  | 'logo___childrenSkillsJson___children___children'
  | 'logo___childrenSkillsJson___internal___content'
  | 'logo___childrenSkillsJson___internal___contentDigest'
  | 'logo___childrenSkillsJson___internal___description'
  | 'logo___childrenSkillsJson___internal___fieldOwners'
  | 'logo___childrenSkillsJson___internal___ignoreType'
  | 'logo___childrenSkillsJson___internal___mediaType'
  | 'logo___childrenSkillsJson___internal___owner'
  | 'logo___childrenSkillsJson___internal___type'
  | 'logo___childrenSkillsJson___title'
  | 'logo___childrenSkillsJson___skillItems'
  | 'logo___childrenSkillsJson___skillItems___name'
  | 'logo___childrenSkillsJson___skillItems___extra'
  | 'logo___childrenSkillsJson___skillItems___subSkills'
  | 'logo___childrenSkillsJson___skillItems___href'
  | 'logo___childSkillsJson___id'
  | 'logo___childSkillsJson___parent___id'
  | 'logo___childSkillsJson___parent___children'
  | 'logo___childSkillsJson___children'
  | 'logo___childSkillsJson___children___id'
  | 'logo___childSkillsJson___children___children'
  | 'logo___childSkillsJson___internal___content'
  | 'logo___childSkillsJson___internal___contentDigest'
  | 'logo___childSkillsJson___internal___description'
  | 'logo___childSkillsJson___internal___fieldOwners'
  | 'logo___childSkillsJson___internal___ignoreType'
  | 'logo___childSkillsJson___internal___mediaType'
  | 'logo___childSkillsJson___internal___owner'
  | 'logo___childSkillsJson___internal___type'
  | 'logo___childSkillsJson___title'
  | 'logo___childSkillsJson___skillItems'
  | 'logo___childSkillsJson___skillItems___name'
  | 'logo___childSkillsJson___skillItems___extra'
  | 'logo___childSkillsJson___skillItems___subSkills'
  | 'logo___childSkillsJson___skillItems___href'
  | 'logo___childrenSeJson'
  | 'logo___childrenSeJson___id'
  | 'logo___childrenSeJson___parent___id'
  | 'logo___childrenSeJson___parent___children'
  | 'logo___childrenSeJson___children'
  | 'logo___childrenSeJson___children___id'
  | 'logo___childrenSeJson___children___children'
  | 'logo___childrenSeJson___internal___content'
  | 'logo___childrenSeJson___internal___contentDigest'
  | 'logo___childrenSeJson___internal___description'
  | 'logo___childrenSeJson___internal___fieldOwners'
  | 'logo___childrenSeJson___internal___ignoreType'
  | 'logo___childrenSeJson___internal___mediaType'
  | 'logo___childrenSeJson___internal___owner'
  | 'logo___childrenSeJson___internal___type'
  | 'logo___childrenSeJson___Banner___SoftwareDeveloper'
  | 'logo___childSeJson___id'
  | 'logo___childSeJson___parent___id'
  | 'logo___childSeJson___parent___children'
  | 'logo___childSeJson___children'
  | 'logo___childSeJson___children___id'
  | 'logo___childSeJson___children___children'
  | 'logo___childSeJson___internal___content'
  | 'logo___childSeJson___internal___contentDigest'
  | 'logo___childSeJson___internal___description'
  | 'logo___childSeJson___internal___fieldOwners'
  | 'logo___childSeJson___internal___ignoreType'
  | 'logo___childSeJson___internal___mediaType'
  | 'logo___childSeJson___internal___owner'
  | 'logo___childSeJson___internal___type'
  | 'logo___childSeJson___Banner___SoftwareDeveloper'
  | 'logo___childrenRuJson'
  | 'logo___childrenRuJson___id'
  | 'logo___childrenRuJson___parent___id'
  | 'logo___childrenRuJson___parent___children'
  | 'logo___childrenRuJson___children'
  | 'logo___childrenRuJson___children___id'
  | 'logo___childrenRuJson___children___children'
  | 'logo___childrenRuJson___internal___content'
  | 'logo___childrenRuJson___internal___contentDigest'
  | 'logo___childrenRuJson___internal___description'
  | 'logo___childrenRuJson___internal___fieldOwners'
  | 'logo___childrenRuJson___internal___ignoreType'
  | 'logo___childrenRuJson___internal___mediaType'
  | 'logo___childrenRuJson___internal___owner'
  | 'logo___childrenRuJson___internal___type'
  | 'logo___childrenRuJson___About___AboutMe'
  | 'logo___childrenRuJson___About___Description'
  | 'logo___childrenRuJson___About___PhotoDescription'
  | 'logo___childrenRuJson___About___ViewCV'
  | 'logo___childrenRuJson___Acknowledgements'
  | 'logo___childrenRuJson___Banner___DexterSibirtsev'
  | 'logo___childrenRuJson___Banner___Experience'
  | 'logo___childrenRuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenRuJson___Banner___SoftwareDeveloper'
  | 'logo___childrenRuJson___Blog___Blog'
  | 'logo___childrenRuJson___Contact___Contact'
  | 'logo___childrenRuJson___Contact___GetInTouch'
  | 'logo___childrenRuJson___Contact___SendEmail'
  | 'logo___childrenRuJson___Education___Description'
  | 'logo___childrenRuJson___Education___Education'
  | 'logo___childrenRuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenRuJson___PageLinks___Acknowledgements'
  | 'logo___childrenRuJson___PageLinks___Home'
  | 'logo___childrenRuJson___SectionButtons___About'
  | 'logo___childrenRuJson___SectionButtons___Blog'
  | 'logo___childrenRuJson___SectionButtons___Contact'
  | 'logo___childrenRuJson___SectionButtons___Experience'
  | 'logo___childrenRuJson___SectionButtons___Skills'
  | 'logo___childrenRuJson___Skills___Overview'
  | 'logo___childrenRuJson___Skills___Skills'
  | 'logo___childrenRuJson___Work___Work'
  | 'logo___childRuJson___id'
  | 'logo___childRuJson___parent___id'
  | 'logo___childRuJson___parent___children'
  | 'logo___childRuJson___children'
  | 'logo___childRuJson___children___id'
  | 'logo___childRuJson___children___children'
  | 'logo___childRuJson___internal___content'
  | 'logo___childRuJson___internal___contentDigest'
  | 'logo___childRuJson___internal___description'
  | 'logo___childRuJson___internal___fieldOwners'
  | 'logo___childRuJson___internal___ignoreType'
  | 'logo___childRuJson___internal___mediaType'
  | 'logo___childRuJson___internal___owner'
  | 'logo___childRuJson___internal___type'
  | 'logo___childRuJson___About___AboutMe'
  | 'logo___childRuJson___About___Description'
  | 'logo___childRuJson___About___PhotoDescription'
  | 'logo___childRuJson___About___ViewCV'
  | 'logo___childRuJson___Acknowledgements'
  | 'logo___childRuJson___Banner___DexterSibirtsev'
  | 'logo___childRuJson___Banner___Experience'
  | 'logo___childRuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childRuJson___Banner___SoftwareDeveloper'
  | 'logo___childRuJson___Blog___Blog'
  | 'logo___childRuJson___Contact___Contact'
  | 'logo___childRuJson___Contact___GetInTouch'
  | 'logo___childRuJson___Contact___SendEmail'
  | 'logo___childRuJson___Education___Description'
  | 'logo___childRuJson___Education___Education'
  | 'logo___childRuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childRuJson___PageLinks___Acknowledgements'
  | 'logo___childRuJson___PageLinks___Home'
  | 'logo___childRuJson___SectionButtons___About'
  | 'logo___childRuJson___SectionButtons___Blog'
  | 'logo___childRuJson___SectionButtons___Contact'
  | 'logo___childRuJson___SectionButtons___Experience'
  | 'logo___childRuJson___SectionButtons___Skills'
  | 'logo___childRuJson___Skills___Overview'
  | 'logo___childRuJson___Skills___Skills'
  | 'logo___childRuJson___Work___Work'
  | 'logo___childrenLocale'
  | 'logo___childrenLocale___id'
  | 'logo___childrenLocale___parent___id'
  | 'logo___childrenLocale___parent___children'
  | 'logo___childrenLocale___children'
  | 'logo___childrenLocale___children___id'
  | 'logo___childrenLocale___children___children'
  | 'logo___childrenLocale___internal___content'
  | 'logo___childrenLocale___internal___contentDigest'
  | 'logo___childrenLocale___internal___description'
  | 'logo___childrenLocale___internal___fieldOwners'
  | 'logo___childrenLocale___internal___ignoreType'
  | 'logo___childrenLocale___internal___mediaType'
  | 'logo___childrenLocale___internal___owner'
  | 'logo___childrenLocale___internal___type'
  | 'logo___childrenLocale___language'
  | 'logo___childrenLocale___ns'
  | 'logo___childrenLocale___data'
  | 'logo___childrenLocale___fileAbsolutePath'
  | 'logo___childLocale___id'
  | 'logo___childLocale___parent___id'
  | 'logo___childLocale___parent___children'
  | 'logo___childLocale___children'
  | 'logo___childLocale___children___id'
  | 'logo___childLocale___children___children'
  | 'logo___childLocale___internal___content'
  | 'logo___childLocale___internal___contentDigest'
  | 'logo___childLocale___internal___description'
  | 'logo___childLocale___internal___fieldOwners'
  | 'logo___childLocale___internal___ignoreType'
  | 'logo___childLocale___internal___mediaType'
  | 'logo___childLocale___internal___owner'
  | 'logo___childLocale___internal___type'
  | 'logo___childLocale___language'
  | 'logo___childLocale___ns'
  | 'logo___childLocale___data'
  | 'logo___childLocale___fileAbsolutePath'
  | 'logo___childrenHuJson'
  | 'logo___childrenHuJson___id'
  | 'logo___childrenHuJson___parent___id'
  | 'logo___childrenHuJson___parent___children'
  | 'logo___childrenHuJson___children'
  | 'logo___childrenHuJson___children___id'
  | 'logo___childrenHuJson___children___children'
  | 'logo___childrenHuJson___internal___content'
  | 'logo___childrenHuJson___internal___contentDigest'
  | 'logo___childrenHuJson___internal___description'
  | 'logo___childrenHuJson___internal___fieldOwners'
  | 'logo___childrenHuJson___internal___ignoreType'
  | 'logo___childrenHuJson___internal___mediaType'
  | 'logo___childrenHuJson___internal___owner'
  | 'logo___childrenHuJson___internal___type'
  | 'logo___childrenHuJson___About___AboutMe'
  | 'logo___childrenHuJson___About___Description'
  | 'logo___childrenHuJson___About___PhotoDescription'
  | 'logo___childrenHuJson___About___ViewCV'
  | 'logo___childrenHuJson___Acknowledgements'
  | 'logo___childrenHuJson___Banner___DexterSibirtsev'
  | 'logo___childrenHuJson___Banner___Experience'
  | 'logo___childrenHuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenHuJson___Banner___SoftwareDeveloper'
  | 'logo___childrenHuJson___Blog___Blog'
  | 'logo___childrenHuJson___Contact___Contact'
  | 'logo___childrenHuJson___Contact___GetInTouch'
  | 'logo___childrenHuJson___Contact___SendEmail'
  | 'logo___childrenHuJson___Education___Description'
  | 'logo___childrenHuJson___Education___Education'
  | 'logo___childrenHuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenHuJson___PageLinks___Acknowledgements'
  | 'logo___childrenHuJson___PageLinks___Home'
  | 'logo___childrenHuJson___SectionButtons___About'
  | 'logo___childrenHuJson___SectionButtons___Blog'
  | 'logo___childrenHuJson___SectionButtons___Contact'
  | 'logo___childrenHuJson___SectionButtons___Experience'
  | 'logo___childrenHuJson___SectionButtons___Skills'
  | 'logo___childrenHuJson___Skills___Overview'
  | 'logo___childrenHuJson___Skills___Skills'
  | 'logo___childrenHuJson___Work___Work'
  | 'logo___childHuJson___id'
  | 'logo___childHuJson___parent___id'
  | 'logo___childHuJson___parent___children'
  | 'logo___childHuJson___children'
  | 'logo___childHuJson___children___id'
  | 'logo___childHuJson___children___children'
  | 'logo___childHuJson___internal___content'
  | 'logo___childHuJson___internal___contentDigest'
  | 'logo___childHuJson___internal___description'
  | 'logo___childHuJson___internal___fieldOwners'
  | 'logo___childHuJson___internal___ignoreType'
  | 'logo___childHuJson___internal___mediaType'
  | 'logo___childHuJson___internal___owner'
  | 'logo___childHuJson___internal___type'
  | 'logo___childHuJson___About___AboutMe'
  | 'logo___childHuJson___About___Description'
  | 'logo___childHuJson___About___PhotoDescription'
  | 'logo___childHuJson___About___ViewCV'
  | 'logo___childHuJson___Acknowledgements'
  | 'logo___childHuJson___Banner___DexterSibirtsev'
  | 'logo___childHuJson___Banner___Experience'
  | 'logo___childHuJson___Banner___HelloIAmAProgrammer'
  | 'logo___childHuJson___Banner___SoftwareDeveloper'
  | 'logo___childHuJson___Blog___Blog'
  | 'logo___childHuJson___Contact___Contact'
  | 'logo___childHuJson___Contact___GetInTouch'
  | 'logo___childHuJson___Contact___SendEmail'
  | 'logo___childHuJson___Education___Description'
  | 'logo___childHuJson___Education___Education'
  | 'logo___childHuJson___Experience___TranslationsUnderConstruction'
  | 'logo___childHuJson___PageLinks___Acknowledgements'
  | 'logo___childHuJson___PageLinks___Home'
  | 'logo___childHuJson___SectionButtons___About'
  | 'logo___childHuJson___SectionButtons___Blog'
  | 'logo___childHuJson___SectionButtons___Contact'
  | 'logo___childHuJson___SectionButtons___Experience'
  | 'logo___childHuJson___SectionButtons___Skills'
  | 'logo___childHuJson___Skills___Overview'
  | 'logo___childHuJson___Skills___Skills'
  | 'logo___childHuJson___Work___Work'
  | 'logo___childrenFrJson'
  | 'logo___childrenFrJson___id'
  | 'logo___childrenFrJson___parent___id'
  | 'logo___childrenFrJson___parent___children'
  | 'logo___childrenFrJson___children'
  | 'logo___childrenFrJson___children___id'
  | 'logo___childrenFrJson___children___children'
  | 'logo___childrenFrJson___internal___content'
  | 'logo___childrenFrJson___internal___contentDigest'
  | 'logo___childrenFrJson___internal___description'
  | 'logo___childrenFrJson___internal___fieldOwners'
  | 'logo___childrenFrJson___internal___ignoreType'
  | 'logo___childrenFrJson___internal___mediaType'
  | 'logo___childrenFrJson___internal___owner'
  | 'logo___childrenFrJson___internal___type'
  | 'logo___childrenFrJson___About___AboutMe'
  | 'logo___childrenFrJson___About___Description'
  | 'logo___childrenFrJson___About___PhotoDescription'
  | 'logo___childrenFrJson___About___ViewCV'
  | 'logo___childrenFrJson___Acknowledgements'
  | 'logo___childrenFrJson___Banner___DexterSibirtsev'
  | 'logo___childrenFrJson___Banner___Experience'
  | 'logo___childrenFrJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenFrJson___Banner___SoftwareDeveloper'
  | 'logo___childrenFrJson___Blog___Blog'
  | 'logo___childrenFrJson___Contact___Contact'
  | 'logo___childrenFrJson___Contact___GetInTouch'
  | 'logo___childrenFrJson___Contact___SendEmail'
  | 'logo___childrenFrJson___Education___Description'
  | 'logo___childrenFrJson___Education___Education'
  | 'logo___childrenFrJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenFrJson___PageLinks___Acknowledgements'
  | 'logo___childrenFrJson___PageLinks___Home'
  | 'logo___childrenFrJson___SectionButtons___About'
  | 'logo___childrenFrJson___SectionButtons___Blog'
  | 'logo___childrenFrJson___SectionButtons___Contact'
  | 'logo___childrenFrJson___SectionButtons___Experience'
  | 'logo___childrenFrJson___SectionButtons___Skills'
  | 'logo___childrenFrJson___Skills___Overview'
  | 'logo___childrenFrJson___Skills___Skills'
  | 'logo___childrenFrJson___Work___Work'
  | 'logo___childFrJson___id'
  | 'logo___childFrJson___parent___id'
  | 'logo___childFrJson___parent___children'
  | 'logo___childFrJson___children'
  | 'logo___childFrJson___children___id'
  | 'logo___childFrJson___children___children'
  | 'logo___childFrJson___internal___content'
  | 'logo___childFrJson___internal___contentDigest'
  | 'logo___childFrJson___internal___description'
  | 'logo___childFrJson___internal___fieldOwners'
  | 'logo___childFrJson___internal___ignoreType'
  | 'logo___childFrJson___internal___mediaType'
  | 'logo___childFrJson___internal___owner'
  | 'logo___childFrJson___internal___type'
  | 'logo___childFrJson___About___AboutMe'
  | 'logo___childFrJson___About___Description'
  | 'logo___childFrJson___About___PhotoDescription'
  | 'logo___childFrJson___About___ViewCV'
  | 'logo___childFrJson___Acknowledgements'
  | 'logo___childFrJson___Banner___DexterSibirtsev'
  | 'logo___childFrJson___Banner___Experience'
  | 'logo___childFrJson___Banner___HelloIAmAProgrammer'
  | 'logo___childFrJson___Banner___SoftwareDeveloper'
  | 'logo___childFrJson___Blog___Blog'
  | 'logo___childFrJson___Contact___Contact'
  | 'logo___childFrJson___Contact___GetInTouch'
  | 'logo___childFrJson___Contact___SendEmail'
  | 'logo___childFrJson___Education___Description'
  | 'logo___childFrJson___Education___Education'
  | 'logo___childFrJson___Experience___TranslationsUnderConstruction'
  | 'logo___childFrJson___PageLinks___Acknowledgements'
  | 'logo___childFrJson___PageLinks___Home'
  | 'logo___childFrJson___SectionButtons___About'
  | 'logo___childFrJson___SectionButtons___Blog'
  | 'logo___childFrJson___SectionButtons___Contact'
  | 'logo___childFrJson___SectionButtons___Experience'
  | 'logo___childFrJson___SectionButtons___Skills'
  | 'logo___childFrJson___Skills___Overview'
  | 'logo___childFrJson___Skills___Skills'
  | 'logo___childFrJson___Work___Work'
  | 'logo___childrenFlagsJson'
  | 'logo___childrenFlagsJson___id'
  | 'logo___childrenFlagsJson___parent___id'
  | 'logo___childrenFlagsJson___parent___children'
  | 'logo___childrenFlagsJson___children'
  | 'logo___childrenFlagsJson___children___id'
  | 'logo___childrenFlagsJson___children___children'
  | 'logo___childrenFlagsJson___internal___content'
  | 'logo___childrenFlagsJson___internal___contentDigest'
  | 'logo___childrenFlagsJson___internal___description'
  | 'logo___childrenFlagsJson___internal___fieldOwners'
  | 'logo___childrenFlagsJson___internal___ignoreType'
  | 'logo___childrenFlagsJson___internal___mediaType'
  | 'logo___childrenFlagsJson___internal___owner'
  | 'logo___childrenFlagsJson___internal___type'
  | 'logo___childrenFlagsJson___code'
  | 'logo___childrenFlagsJson___name'
  | 'logo___childrenFlagsJson___src___sourceInstanceName'
  | 'logo___childrenFlagsJson___src___absolutePath'
  | 'logo___childrenFlagsJson___src___relativePath'
  | 'logo___childrenFlagsJson___src___extension'
  | 'logo___childrenFlagsJson___src___size'
  | 'logo___childrenFlagsJson___src___prettySize'
  | 'logo___childrenFlagsJson___src___modifiedTime'
  | 'logo___childrenFlagsJson___src___accessTime'
  | 'logo___childrenFlagsJson___src___changeTime'
  | 'logo___childrenFlagsJson___src___birthTime'
  | 'logo___childrenFlagsJson___src___root'
  | 'logo___childrenFlagsJson___src___dir'
  | 'logo___childrenFlagsJson___src___base'
  | 'logo___childrenFlagsJson___src___ext'
  | 'logo___childrenFlagsJson___src___name'
  | 'logo___childrenFlagsJson___src___relativeDirectory'
  | 'logo___childrenFlagsJson___src___dev'
  | 'logo___childrenFlagsJson___src___mode'
  | 'logo___childrenFlagsJson___src___nlink'
  | 'logo___childrenFlagsJson___src___uid'
  | 'logo___childrenFlagsJson___src___gid'
  | 'logo___childrenFlagsJson___src___rdev'
  | 'logo___childrenFlagsJson___src___ino'
  | 'logo___childrenFlagsJson___src___atimeMs'
  | 'logo___childrenFlagsJson___src___mtimeMs'
  | 'logo___childrenFlagsJson___src___ctimeMs'
  | 'logo___childrenFlagsJson___src___atime'
  | 'logo___childrenFlagsJson___src___mtime'
  | 'logo___childrenFlagsJson___src___ctime'
  | 'logo___childrenFlagsJson___src___birthtime'
  | 'logo___childrenFlagsJson___src___birthtimeMs'
  | 'logo___childrenFlagsJson___src___blksize'
  | 'logo___childrenFlagsJson___src___blocks'
  | 'logo___childrenFlagsJson___src___url'
  | 'logo___childrenFlagsJson___src___publicURL'
  | 'logo___childrenFlagsJson___src___childrenImageSharp'
  | 'logo___childrenFlagsJson___src___childrenWorkJson'
  | 'logo___childrenFlagsJson___src___childrenSkillsJson'
  | 'logo___childrenFlagsJson___src___childrenSeJson'
  | 'logo___childrenFlagsJson___src___childrenRuJson'
  | 'logo___childrenFlagsJson___src___childrenLocale'
  | 'logo___childrenFlagsJson___src___childrenHuJson'
  | 'logo___childrenFlagsJson___src___childrenFrJson'
  | 'logo___childrenFlagsJson___src___childrenFlagsJson'
  | 'logo___childrenFlagsJson___src___childrenEtJson'
  | 'logo___childrenFlagsJson___src___childrenEsJson'
  | 'logo___childrenFlagsJson___src___childrenEnJson'
  | 'logo___childrenFlagsJson___src___childrenEducationJson'
  | 'logo___childrenFlagsJson___src___childrenDeJson'
  | 'logo___childrenFlagsJson___src___id'
  | 'logo___childrenFlagsJson___src___children'
  | 'logo___childFlagsJson___id'
  | 'logo___childFlagsJson___parent___id'
  | 'logo___childFlagsJson___parent___children'
  | 'logo___childFlagsJson___children'
  | 'logo___childFlagsJson___children___id'
  | 'logo___childFlagsJson___children___children'
  | 'logo___childFlagsJson___internal___content'
  | 'logo___childFlagsJson___internal___contentDigest'
  | 'logo___childFlagsJson___internal___description'
  | 'logo___childFlagsJson___internal___fieldOwners'
  | 'logo___childFlagsJson___internal___ignoreType'
  | 'logo___childFlagsJson___internal___mediaType'
  | 'logo___childFlagsJson___internal___owner'
  | 'logo___childFlagsJson___internal___type'
  | 'logo___childFlagsJson___code'
  | 'logo___childFlagsJson___name'
  | 'logo___childFlagsJson___src___sourceInstanceName'
  | 'logo___childFlagsJson___src___absolutePath'
  | 'logo___childFlagsJson___src___relativePath'
  | 'logo___childFlagsJson___src___extension'
  | 'logo___childFlagsJson___src___size'
  | 'logo___childFlagsJson___src___prettySize'
  | 'logo___childFlagsJson___src___modifiedTime'
  | 'logo___childFlagsJson___src___accessTime'
  | 'logo___childFlagsJson___src___changeTime'
  | 'logo___childFlagsJson___src___birthTime'
  | 'logo___childFlagsJson___src___root'
  | 'logo___childFlagsJson___src___dir'
  | 'logo___childFlagsJson___src___base'
  | 'logo___childFlagsJson___src___ext'
  | 'logo___childFlagsJson___src___name'
  | 'logo___childFlagsJson___src___relativeDirectory'
  | 'logo___childFlagsJson___src___dev'
  | 'logo___childFlagsJson___src___mode'
  | 'logo___childFlagsJson___src___nlink'
  | 'logo___childFlagsJson___src___uid'
  | 'logo___childFlagsJson___src___gid'
  | 'logo___childFlagsJson___src___rdev'
  | 'logo___childFlagsJson___src___ino'
  | 'logo___childFlagsJson___src___atimeMs'
  | 'logo___childFlagsJson___src___mtimeMs'
  | 'logo___childFlagsJson___src___ctimeMs'
  | 'logo___childFlagsJson___src___atime'
  | 'logo___childFlagsJson___src___mtime'
  | 'logo___childFlagsJson___src___ctime'
  | 'logo___childFlagsJson___src___birthtime'
  | 'logo___childFlagsJson___src___birthtimeMs'
  | 'logo___childFlagsJson___src___blksize'
  | 'logo___childFlagsJson___src___blocks'
  | 'logo___childFlagsJson___src___url'
  | 'logo___childFlagsJson___src___publicURL'
  | 'logo___childFlagsJson___src___childrenImageSharp'
  | 'logo___childFlagsJson___src___childrenWorkJson'
  | 'logo___childFlagsJson___src___childrenSkillsJson'
  | 'logo___childFlagsJson___src___childrenSeJson'
  | 'logo___childFlagsJson___src___childrenRuJson'
  | 'logo___childFlagsJson___src___childrenLocale'
  | 'logo___childFlagsJson___src___childrenHuJson'
  | 'logo___childFlagsJson___src___childrenFrJson'
  | 'logo___childFlagsJson___src___childrenFlagsJson'
  | 'logo___childFlagsJson___src___childrenEtJson'
  | 'logo___childFlagsJson___src___childrenEsJson'
  | 'logo___childFlagsJson___src___childrenEnJson'
  | 'logo___childFlagsJson___src___childrenEducationJson'
  | 'logo___childFlagsJson___src___childrenDeJson'
  | 'logo___childFlagsJson___src___id'
  | 'logo___childFlagsJson___src___children'
  | 'logo___childrenEtJson'
  | 'logo___childrenEtJson___id'
  | 'logo___childrenEtJson___parent___id'
  | 'logo___childrenEtJson___parent___children'
  | 'logo___childrenEtJson___children'
  | 'logo___childrenEtJson___children___id'
  | 'logo___childrenEtJson___children___children'
  | 'logo___childrenEtJson___internal___content'
  | 'logo___childrenEtJson___internal___contentDigest'
  | 'logo___childrenEtJson___internal___description'
  | 'logo___childrenEtJson___internal___fieldOwners'
  | 'logo___childrenEtJson___internal___ignoreType'
  | 'logo___childrenEtJson___internal___mediaType'
  | 'logo___childrenEtJson___internal___owner'
  | 'logo___childrenEtJson___internal___type'
  | 'logo___childrenEtJson___About___AboutMe'
  | 'logo___childrenEtJson___About___Description'
  | 'logo___childrenEtJson___About___PhotoDescription'
  | 'logo___childrenEtJson___About___ViewCV'
  | 'logo___childrenEtJson___Acknowledgements'
  | 'logo___childrenEtJson___Banner___DexterSibirtsev'
  | 'logo___childrenEtJson___Banner___Experience'
  | 'logo___childrenEtJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenEtJson___Banner___SoftwareDeveloper'
  | 'logo___childrenEtJson___Blog___Blog'
  | 'logo___childrenEtJson___Contact___Contact'
  | 'logo___childrenEtJson___Contact___GetInTouch'
  | 'logo___childrenEtJson___Contact___SendEmail'
  | 'logo___childrenEtJson___Education___Description'
  | 'logo___childrenEtJson___Education___Education'
  | 'logo___childrenEtJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenEtJson___PageLinks___Acknowledgements'
  | 'logo___childrenEtJson___PageLinks___Home'
  | 'logo___childrenEtJson___SectionButtons___About'
  | 'logo___childrenEtJson___SectionButtons___Blog'
  | 'logo___childrenEtJson___SectionButtons___Contact'
  | 'logo___childrenEtJson___SectionButtons___Experience'
  | 'logo___childrenEtJson___SectionButtons___Skills'
  | 'logo___childrenEtJson___Skills___Overview'
  | 'logo___childrenEtJson___Skills___Skills'
  | 'logo___childrenEtJson___Work___Work'
  | 'logo___childEtJson___id'
  | 'logo___childEtJson___parent___id'
  | 'logo___childEtJson___parent___children'
  | 'logo___childEtJson___children'
  | 'logo___childEtJson___children___id'
  | 'logo___childEtJson___children___children'
  | 'logo___childEtJson___internal___content'
  | 'logo___childEtJson___internal___contentDigest'
  | 'logo___childEtJson___internal___description'
  | 'logo___childEtJson___internal___fieldOwners'
  | 'logo___childEtJson___internal___ignoreType'
  | 'logo___childEtJson___internal___mediaType'
  | 'logo___childEtJson___internal___owner'
  | 'logo___childEtJson___internal___type'
  | 'logo___childEtJson___About___AboutMe'
  | 'logo___childEtJson___About___Description'
  | 'logo___childEtJson___About___PhotoDescription'
  | 'logo___childEtJson___About___ViewCV'
  | 'logo___childEtJson___Acknowledgements'
  | 'logo___childEtJson___Banner___DexterSibirtsev'
  | 'logo___childEtJson___Banner___Experience'
  | 'logo___childEtJson___Banner___HelloIAmAProgrammer'
  | 'logo___childEtJson___Banner___SoftwareDeveloper'
  | 'logo___childEtJson___Blog___Blog'
  | 'logo___childEtJson___Contact___Contact'
  | 'logo___childEtJson___Contact___GetInTouch'
  | 'logo___childEtJson___Contact___SendEmail'
  | 'logo___childEtJson___Education___Description'
  | 'logo___childEtJson___Education___Education'
  | 'logo___childEtJson___Experience___TranslationsUnderConstruction'
  | 'logo___childEtJson___PageLinks___Acknowledgements'
  | 'logo___childEtJson___PageLinks___Home'
  | 'logo___childEtJson___SectionButtons___About'
  | 'logo___childEtJson___SectionButtons___Blog'
  | 'logo___childEtJson___SectionButtons___Contact'
  | 'logo___childEtJson___SectionButtons___Experience'
  | 'logo___childEtJson___SectionButtons___Skills'
  | 'logo___childEtJson___Skills___Overview'
  | 'logo___childEtJson___Skills___Skills'
  | 'logo___childEtJson___Work___Work'
  | 'logo___childrenEsJson'
  | 'logo___childrenEsJson___id'
  | 'logo___childrenEsJson___parent___id'
  | 'logo___childrenEsJson___parent___children'
  | 'logo___childrenEsJson___children'
  | 'logo___childrenEsJson___children___id'
  | 'logo___childrenEsJson___children___children'
  | 'logo___childrenEsJson___internal___content'
  | 'logo___childrenEsJson___internal___contentDigest'
  | 'logo___childrenEsJson___internal___description'
  | 'logo___childrenEsJson___internal___fieldOwners'
  | 'logo___childrenEsJson___internal___ignoreType'
  | 'logo___childrenEsJson___internal___mediaType'
  | 'logo___childrenEsJson___internal___owner'
  | 'logo___childrenEsJson___internal___type'
  | 'logo___childrenEsJson___About___AboutMe'
  | 'logo___childrenEsJson___About___Description'
  | 'logo___childrenEsJson___About___PhotoDescription'
  | 'logo___childrenEsJson___About___ViewCV'
  | 'logo___childrenEsJson___Acknowledgements'
  | 'logo___childrenEsJson___Banner___DexterSibirtsev'
  | 'logo___childrenEsJson___Banner___Experience'
  | 'logo___childrenEsJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenEsJson___Banner___SoftwareDeveloper'
  | 'logo___childrenEsJson___Blog___Blog'
  | 'logo___childrenEsJson___Contact___Contact'
  | 'logo___childrenEsJson___Contact___GetInTouch'
  | 'logo___childrenEsJson___Contact___SendEmail'
  | 'logo___childrenEsJson___Education___Description'
  | 'logo___childrenEsJson___Education___Education'
  | 'logo___childrenEsJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenEsJson___PageLinks___Acknowledgements'
  | 'logo___childrenEsJson___PageLinks___Home'
  | 'logo___childrenEsJson___SectionButtons___About'
  | 'logo___childrenEsJson___SectionButtons___Blog'
  | 'logo___childrenEsJson___SectionButtons___Contact'
  | 'logo___childrenEsJson___SectionButtons___Experience'
  | 'logo___childrenEsJson___SectionButtons___Skills'
  | 'logo___childrenEsJson___Skills___Overview'
  | 'logo___childrenEsJson___Skills___Skills'
  | 'logo___childrenEsJson___Work___Work'
  | 'logo___childEsJson___id'
  | 'logo___childEsJson___parent___id'
  | 'logo___childEsJson___parent___children'
  | 'logo___childEsJson___children'
  | 'logo___childEsJson___children___id'
  | 'logo___childEsJson___children___children'
  | 'logo___childEsJson___internal___content'
  | 'logo___childEsJson___internal___contentDigest'
  | 'logo___childEsJson___internal___description'
  | 'logo___childEsJson___internal___fieldOwners'
  | 'logo___childEsJson___internal___ignoreType'
  | 'logo___childEsJson___internal___mediaType'
  | 'logo___childEsJson___internal___owner'
  | 'logo___childEsJson___internal___type'
  | 'logo___childEsJson___About___AboutMe'
  | 'logo___childEsJson___About___Description'
  | 'logo___childEsJson___About___PhotoDescription'
  | 'logo___childEsJson___About___ViewCV'
  | 'logo___childEsJson___Acknowledgements'
  | 'logo___childEsJson___Banner___DexterSibirtsev'
  | 'logo___childEsJson___Banner___Experience'
  | 'logo___childEsJson___Banner___HelloIAmAProgrammer'
  | 'logo___childEsJson___Banner___SoftwareDeveloper'
  | 'logo___childEsJson___Blog___Blog'
  | 'logo___childEsJson___Contact___Contact'
  | 'logo___childEsJson___Contact___GetInTouch'
  | 'logo___childEsJson___Contact___SendEmail'
  | 'logo___childEsJson___Education___Description'
  | 'logo___childEsJson___Education___Education'
  | 'logo___childEsJson___Experience___TranslationsUnderConstruction'
  | 'logo___childEsJson___PageLinks___Acknowledgements'
  | 'logo___childEsJson___PageLinks___Home'
  | 'logo___childEsJson___SectionButtons___About'
  | 'logo___childEsJson___SectionButtons___Blog'
  | 'logo___childEsJson___SectionButtons___Contact'
  | 'logo___childEsJson___SectionButtons___Experience'
  | 'logo___childEsJson___SectionButtons___Skills'
  | 'logo___childEsJson___Skills___Overview'
  | 'logo___childEsJson___Skills___Skills'
  | 'logo___childEsJson___Work___Work'
  | 'logo___childrenEnJson'
  | 'logo___childrenEnJson___id'
  | 'logo___childrenEnJson___parent___id'
  | 'logo___childrenEnJson___parent___children'
  | 'logo___childrenEnJson___children'
  | 'logo___childrenEnJson___children___id'
  | 'logo___childrenEnJson___children___children'
  | 'logo___childrenEnJson___internal___content'
  | 'logo___childrenEnJson___internal___contentDigest'
  | 'logo___childrenEnJson___internal___description'
  | 'logo___childrenEnJson___internal___fieldOwners'
  | 'logo___childrenEnJson___internal___ignoreType'
  | 'logo___childrenEnJson___internal___mediaType'
  | 'logo___childrenEnJson___internal___owner'
  | 'logo___childrenEnJson___internal___type'
  | 'logo___childrenEnJson___About___AboutMe'
  | 'logo___childrenEnJson___About___Description'
  | 'logo___childrenEnJson___About___PhotoDescription'
  | 'logo___childrenEnJson___About___ViewCV'
  | 'logo___childrenEnJson___Acknowledgements'
  | 'logo___childrenEnJson___Banner___DexterSibirtsev'
  | 'logo___childrenEnJson___Banner___Experience'
  | 'logo___childrenEnJson___Banner___HelloIAmAProgrammer'
  | 'logo___childrenEnJson___Banner___SoftwareDeveloper'
  | 'logo___childrenEnJson___Blog___Blog'
  | 'logo___childrenEnJson___Contact___Contact'
  | 'logo___childrenEnJson___Contact___GetInTouch'
  | 'logo___childrenEnJson___Contact___SendEmail'
  | 'logo___childrenEnJson___Education___Description'
  | 'logo___childrenEnJson___Education___Education'
  | 'logo___childrenEnJson___Experience___TranslationsUnderConstruction'
  | 'logo___childrenEnJson___PageLinks___Acknowledgements'
  | 'logo___childrenEnJson___PageLinks___Home'
  | 'logo___childrenEnJson___SectionButtons___About'
  | 'logo___childrenEnJson___SectionButtons___Blog'
  | 'logo___childrenEnJson___SectionButtons___Contact'
  | 'logo___childrenEnJson___SectionButtons___Experience'
  | 'logo___childrenEnJson___SectionButtons___Skills'
  | 'logo___childrenEnJson___Skills___Overview'
  | 'logo___childrenEnJson___Skills___Skills'
  | 'logo___childrenEnJson___Work___Work'
  | 'logo___childEnJson___id'
  | 'logo___childEnJson___parent___id'
  | 'logo___childEnJson___parent___children'
  | 'logo___childEnJson___children'
  | 'logo___childEnJson___children___id'
  | 'logo___childEnJson___children___children'
  | 'logo___childEnJson___internal___content'
  | 'logo___childEnJson___internal___contentDigest'
  | 'logo___childEnJson___internal___description'
  | 'logo___childEnJson___internal___fieldOwners'
  | 'logo___childEnJson___internal___ignoreType'
  | 'logo___childEnJson___internal___mediaType'
  | 'logo___childEnJson___internal___owner'
  | 'logo___childEnJson___internal___type'
  | 'logo___childEnJson___About___AboutMe'
  | 'logo___childEnJson___About___Description'
  | 'logo___childEnJson___About___PhotoDescription'
  | 'logo___childEnJson___About___ViewCV'
  | 'logo___childEnJson___Acknowledgements'
  | 'logo___childEnJson___Banner___DexterSibirtsev'
  | 'logo___childEnJson___Banner___Experience'
  | 'logo___childEnJson___Banner___HelloIAmAProgrammer'
  | 'logo___childEnJson___Banner___SoftwareDeveloper'
  | 'logo___childEnJson___Blog___Blog'
  | 'logo___childEnJson___Contact___Contact'
  | 'logo___childEnJson___Contact___GetInTouch'
  | 'logo___childEnJson___Contact___SendEmail'
  | 'logo___childEnJson___Education___Description'
  | 'logo___childEnJson___Education___Education'
  | 'logo___childEnJson___Experience___TranslationsUnderConstruction'
  | 'logo___childEnJson___PageLinks___Acknowledgements'
  | 'logo___childEnJson___PageLinks___Home'
  | 'logo___childEnJson___SectionButtons___About'
  | 'logo___childEnJson___SectionButtons___Blog'
  | 'logo___childEnJson___SectionButtons___Contact'
  | 'logo___childEnJson___SectionButtons___Experience'
  | 'logo___childEnJson___SectionButtons___Skills'
  | 'logo___childEnJson___Skills___Overview'
  | 'logo___childEnJson___Skills___Skills'
  | 'logo___childEnJson___Work___Work'
  | 'logo___childrenEducationJson'
  | 'logo___childrenEducationJson___id'
  | 'logo___childrenEducationJson___parent___id'
  | 'logo___childrenEducationJson___parent___children'
  | 'logo___childrenEducationJson___children'
  | 'logo___childrenEducationJson___children___id'
  | 'logo___childrenEducationJson___children___children'
  | 'logo___childrenEducationJson___internal___content'
  | 'logo___childrenEducationJson___internal___contentDigest'
  | 'logo___childrenEducationJson___internal___description'
  | 'logo___childrenEducationJson___internal___fieldOwners'
  | 'logo___childrenEducationJson___internal___ignoreType'
  | 'logo___childrenEducationJson___internal___mediaType'
  | 'logo___childrenEducationJson___internal___owner'
  | 'logo___childrenEducationJson___internal___type'
  | 'logo___childrenEducationJson___location'
  | 'logo___childrenEducationJson___locationFlag___sourceInstanceName'
  | 'logo___childrenEducationJson___locationFlag___absolutePath'
  | 'logo___childrenEducationJson___locationFlag___relativePath'
  | 'logo___childrenEducationJson___locationFlag___extension'
  | 'logo___childrenEducationJson___locationFlag___size'
  | 'logo___childrenEducationJson___locationFlag___prettySize'
  | 'logo___childrenEducationJson___locationFlag___modifiedTime'
  | 'logo___childrenEducationJson___locationFlag___accessTime'
  | 'logo___childrenEducationJson___locationFlag___changeTime'
  | 'logo___childrenEducationJson___locationFlag___birthTime'
  | 'logo___childrenEducationJson___locationFlag___root'
  | 'logo___childrenEducationJson___locationFlag___dir'
  | 'logo___childrenEducationJson___locationFlag___base'
  | 'logo___childrenEducationJson___locationFlag___ext'
  | 'logo___childrenEducationJson___locationFlag___name'
  | 'logo___childrenEducationJson___locationFlag___relativeDirectory'
  | 'logo___childrenEducationJson___locationFlag___dev'
  | 'logo___childrenEducationJson___locationFlag___mode'
  | 'logo___childrenEducationJson___locationFlag___nlink'
  | 'logo___childrenEducationJson___locationFlag___uid'
  | 'logo___childrenEducationJson___locationFlag___gid'
  | 'logo___childrenEducationJson___locationFlag___rdev'
  | 'logo___childrenEducationJson___locationFlag___ino'
  | 'logo___childrenEducationJson___locationFlag___atimeMs'
  | 'logo___childrenEducationJson___locationFlag___mtimeMs'
  | 'logo___childrenEducationJson___locationFlag___ctimeMs'
  | 'logo___childrenEducationJson___locationFlag___atime'
  | 'logo___childrenEducationJson___locationFlag___mtime'
  | 'logo___childrenEducationJson___locationFlag___ctime'
  | 'logo___childrenEducationJson___locationFlag___birthtime'
  | 'logo___childrenEducationJson___locationFlag___birthtimeMs'
  | 'logo___childrenEducationJson___locationFlag___blksize'
  | 'logo___childrenEducationJson___locationFlag___blocks'
  | 'logo___childrenEducationJson___locationFlag___url'
  | 'logo___childrenEducationJson___locationFlag___publicURL'
  | 'logo___childrenEducationJson___locationFlag___childrenImageSharp'
  | 'logo___childrenEducationJson___locationFlag___childrenWorkJson'
  | 'logo___childrenEducationJson___locationFlag___childrenSkillsJson'
  | 'logo___childrenEducationJson___locationFlag___childrenSeJson'
  | 'logo___childrenEducationJson___locationFlag___childrenRuJson'
  | 'logo___childrenEducationJson___locationFlag___childrenLocale'
  | 'logo___childrenEducationJson___locationFlag___childrenHuJson'
  | 'logo___childrenEducationJson___locationFlag___childrenFrJson'
  | 'logo___childrenEducationJson___locationFlag___childrenFlagsJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEtJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEsJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEnJson'
  | 'logo___childrenEducationJson___locationFlag___childrenEducationJson'
  | 'logo___childrenEducationJson___locationFlag___childrenDeJson'
  | 'logo___childrenEducationJson___locationFlag___id'
  | 'logo___childrenEducationJson___locationFlag___children'
  | 'logo___childrenEducationJson___title'
  | 'logo___childrenEducationJson___logo___sourceInstanceName'
  | 'logo___childrenEducationJson___logo___absolutePath'
  | 'logo___childrenEducationJson___logo___relativePath'
  | 'logo___childrenEducationJson___logo___extension'
  | 'logo___childrenEducationJson___logo___size'
  | 'logo___childrenEducationJson___logo___prettySize'
  | 'logo___childrenEducationJson___logo___modifiedTime'
  | 'logo___childrenEducationJson___logo___accessTime'
  | 'logo___childrenEducationJson___logo___changeTime'
  | 'logo___childrenEducationJson___logo___birthTime'
  | 'logo___childrenEducationJson___logo___root'
  | 'logo___childrenEducationJson___logo___dir'
  | 'logo___childrenEducationJson___logo___base'
  | 'logo___childrenEducationJson___logo___ext'
  | 'logo___childrenEducationJson___logo___name'
  | 'logo___childrenEducationJson___logo___relativeDirectory'
  | 'logo___childrenEducationJson___logo___dev'
  | 'logo___childrenEducationJson___logo___mode'
  | 'logo___childrenEducationJson___logo___nlink'
  | 'logo___childrenEducationJson___logo___uid'
  | 'logo___childrenEducationJson___logo___gid'
  | 'logo___childrenEducationJson___logo___rdev'
  | 'logo___childrenEducationJson___logo___ino'
  | 'logo___childrenEducationJson___logo___atimeMs'
  | 'logo___childrenEducationJson___logo___mtimeMs'
  | 'logo___childrenEducationJson___logo___ctimeMs'
  | 'logo___childrenEducationJson___logo___atime'
  | 'logo___childrenEducationJson___logo___mtime'
  | 'logo___childrenEducationJson___logo___ctime'
  | 'logo___childrenEducationJson___logo___birthtime'
  | 'logo___childrenEducationJson___logo___birthtimeMs'
  | 'logo___childrenEducationJson___logo___blksize'
  | 'logo___childrenEducationJson___logo___blocks'
  | 'logo___childrenEducationJson___logo___url'
  | 'logo___childrenEducationJson___logo___publicURL'
  | 'logo___childrenEducationJson___logo___childrenImageSharp'
  | 'logo___childrenEducationJson___logo___childrenWorkJson'
  | 'logo___childrenEducationJson___logo___childrenSkillsJson'
  | 'logo___childrenEducationJson___logo___childrenSeJson'
  | 'logo___childrenEducationJson___logo___childrenRuJson'
  | 'logo___childrenEducationJson___logo___childrenLocale'
  | 'logo___childrenEducationJson___logo___childrenHuJson'
  | 'logo___childrenEducationJson___logo___childrenFrJson'
  | 'logo___childrenEducationJson___logo___childrenFlagsJson'
  | 'logo___childrenEducationJson___logo___childrenEtJson'
  | 'logo___childrenEducationJson___logo___childrenEsJson'
  | 'logo___childrenEducationJson___logo___childrenEnJson'
  | 'logo___childrenEducationJson___logo___childrenEducationJson'
  | 'logo___childrenEducationJson___logo___childrenDeJson'
  | 'logo___childrenEducationJson___logo___id'
  | 'logo___childrenEducationJson___logo___children'
  | 'logo___childrenEducationJson___name'
  | 'logo___childrenEducationJson___dates'
  | 'logo___childrenEducationJson___description'
  | 'logo___childEducationJson___id'
  | 'logo___childEducationJson___parent___id'
  | 'logo___childEducationJson___parent___children'
  | 'logo___childEducationJson___children'
  | 'logo___childEducationJson___children___id'
  | 'logo___childEducationJson___children___children'
  | 'logo___childEducationJson___internal___content'
  | 'logo___childEducationJson___internal___contentDigest'
  | 'logo___childEducationJson___internal___description'
  | 'logo___childEducationJson___internal___fieldOwners'
  | 'logo___childEducationJson___internal___ignoreType'
  | 'logo___childEducationJson___internal___mediaType'
  | 'logo___childEducationJson___internal___owner'
  | 'logo___childEducationJson___internal___type'
  | 'logo___childEducationJson___location'
  | 'logo___childEducationJson___locationFlag___sourceInstanceName'
  | 'logo___childEducationJson___locationFlag___absolutePath'
  | 'logo___childEducationJson___locationFlag___relativePath'
  | 'logo___childEducationJson___locationFlag___extension'
  | 'logo___childEducationJson___locationFlag___size'
  | 'logo___childEducationJson___locationFlag___prettySize'
  | 'logo___childEducationJson___locationFlag___modifiedTime'
  | 'logo___childEducationJson___locationFlag___accessTime'
  | 'logo___childEducationJson___locationFlag___changeTime'
  | 'logo___childEducationJson___locationFlag___birthTime'
  | 'logo___childEducationJson___locationFlag___root'
  | 'logo___childEducationJson___locationFlag___dir'
  | 'logo___childEducationJson___locationFlag___base'
  | 'logo___childEducationJson___locationFlag___ext'
  | 'logo___childEducationJson___locationFlag___name'
  | 'logo___childEducationJson___locationFlag___relativeDirectory'
  | 'logo___childEducationJson___locationFlag___dev'
  | 'logo___childEducationJson___locationFlag___mode'
  | 'logo___childEducationJson___locationFlag___nlink'
  | 'logo___childEducationJson___locationFlag___uid'
  | 'logo___childEducationJson___locationFlag___gid'
  | 'logo___childEducationJson___locationFlag___rdev'
  | 'logo___childEducationJson___locationFlag___ino'
  | 'logo___childEducationJson___locationFlag___atimeMs'
  | 'logo___childEducationJson___locationFlag___mtimeMs'
  | 'logo___childEducationJson___locationFlag___ctimeMs'
  | 'logo___childEducationJson___locationFlag___atime'
  | 'logo___childEducationJson___locationFlag___mtime'
  | 'logo___childEducationJson___locationFlag___ctime'
  | 'logo___childEducationJson___locationFlag___birthtime'
  | 'logo___childEducationJson___locationFlag___birthtimeMs'
  | 'logo___childEducationJson___locationFlag___blksize'
  | 'logo___childEducationJson___locationFlag___blocks'
  | 'logo___childEducationJson___locationFlag___url'
  | 'logo___childEducationJson___locationFlag___publicURL'
  | 'logo___childEducationJson___locationFlag___childrenImageSharp'
  | 'logo___childEducationJson___locationFlag___childrenWorkJson'
  | 'logo___childEducationJson___locationFlag___childrenSkillsJson'
  | 'logo___childEducationJson___locationFlag___childrenSeJson'
  | 'logo___childEducationJson___locationFlag___childrenRuJson'
  | 'logo___childEducationJson___locationFlag___childrenLocale'
  | 'logo___childEducationJson___locationFlag___childrenHuJson'
  | 'logo___childEducationJson___locationFlag___childrenFrJson'
  | 'logo___childEducationJson___locationFlag___childrenFlagsJson'
  | 'logo___childEducationJson___locationFlag___childrenEtJson'
  | 'logo___childEducationJson___locationFlag___childrenEsJson'
  | 'logo___childEducationJson___locationFlag___childrenEnJson'
  | 'logo___childEducationJson___locationFlag___childrenEducationJson'
  | 'logo___childEducationJson___locationFlag___childrenDeJson'
  | 'logo___childEducationJson___locationFlag___id'
  | 'logo___childEducationJson___locationFlag___children'
  | 'logo___childEducationJson___title'
  | 'logo___childEducationJson___logo___sourceInstanceName'
  | 'logo___childEducationJson___logo___absolutePath'
  | 'logo___childEducationJson___logo___relativePath'
  | 'logo___childEducationJson___logo___extension'
  | 'logo___childEducationJson___logo___size'
  | 'logo___childEducationJson___logo___prettySize'
  | 'logo___childEducationJson___logo___modifiedTime'
  | 'logo___childEducationJson___logo___accessTime'
  | 'logo___childEducationJson___logo___changeTime'
  | 'logo___childEducationJson___logo___birthTime'
  | 'logo___childEducationJson___logo___root'
  | 'logo___childEducationJson___logo___dir'
  | 'logo___childEducationJson___logo___base'
  | 'logo___childEducationJson___logo___ext'
  | 'logo___childEducationJson___logo___name'
  | 'logo___childEducationJson___logo___relativeDirectory'
  | 'logo___childEducationJson___logo___dev'
  | 'logo___childEducationJson___logo___mode'
  | 'logo___childEducationJson___logo___nlink'
  | 'logo___childEducationJson___logo___uid'
  | 'logo___childEducationJson___logo___gid'
  | 'logo___childEducationJson___logo___rdev'
  | 'logo___childEducationJson___logo___ino'
  | 'logo___childEducationJson___logo___atimeMs'
  | 'logo___childEducationJson___logo___mtimeMs'
  | 'logo___childEducationJson___logo___ctimeMs'
  | 'logo___childEducationJson___logo___atime'
  | 'logo___childEducationJson___logo___mtime'
  | 'logo___childEducationJson___logo___ctime'
  | 'logo___childEducationJson___logo___birthtime'
  | 'logo___childEducationJson___logo___birthtimeMs'
  | 'logo___childEducationJson___logo___blksize'
  | 'logo___childEducationJson___logo___blocks'
  | 'logo___childEducationJson___logo___url'
  | 'logo___childEducationJson___logo___publicURL'
  | 'logo___childEducationJson___logo___childrenImageSharp'
  | 'logo___childEducationJson___logo___childrenWorkJson'
  | 'logo___childEducationJson___logo___childrenSkillsJson'
  | 'logo___childEducationJson___logo___childrenSeJson'
  | 'logo___childEducationJson___logo___childrenRuJson'
  | 'logo___childEducationJson___logo___childrenLocale'
  | 'logo___childEducationJson___logo___childrenHuJson'
  | 'logo___childEducationJson___logo___childrenFrJson'
  | 'logo___childEducationJson___logo___childrenFlagsJson'
  | 'logo___childEducationJson___logo___childrenEtJson'
  | 'logo___childEducationJson___logo___childrenEsJson'
  | 'logo___childEducationJson___logo___childrenEnJson'
  | 'logo___childEducationJson___logo___childrenEducationJson'
  | 'logo___childEducationJson___logo___childrenDeJson'
  | 'logo___childEducationJson___logo___id'
  | 'logo___childEducationJson___logo___children'
  | 'logo___childEducationJson___name'
  | 'logo___childEducationJson___dates'
  | 'logo___childEducationJson___description'
  | 'logo___childrenDeJson'
  | 'logo___childrenDeJson___id'
  | 'logo___childrenDeJson___parent___id'
  | 'logo___childrenDeJson___parent___children'
  | 'logo___childrenDeJson___children'
  | 'logo___childrenDeJson___children___id'
  | 'logo___childrenDeJson___children___children'
  | 'logo___childrenDeJson___internal___content'
  | 'logo___childrenDeJson___internal___contentDigest'
  | 'logo___childrenDeJson___internal___description'
  | 'logo___childrenDeJson___internal___fieldOwners'
  | 'logo___childrenDeJson___internal___ignoreType'
  | 'logo___childrenDeJson___internal___mediaType'
  | 'logo___childrenDeJson___internal___owner'
  | 'logo___childrenDeJson___internal___type'
  | 'logo___childrenDeJson___Banner___SoftwareDeveloper'
  | 'logo___childDeJson___id'
  | 'logo___childDeJson___parent___id'
  | 'logo___childDeJson___parent___children'
  | 'logo___childDeJson___children'
  | 'logo___childDeJson___children___id'
  | 'logo___childDeJson___children___children'
  | 'logo___childDeJson___internal___content'
  | 'logo___childDeJson___internal___contentDigest'
  | 'logo___childDeJson___internal___description'
  | 'logo___childDeJson___internal___fieldOwners'
  | 'logo___childDeJson___internal___ignoreType'
  | 'logo___childDeJson___internal___mediaType'
  | 'logo___childDeJson___internal___owner'
  | 'logo___childDeJson___internal___type'
  | 'logo___childDeJson___Banner___SoftwareDeveloper'
  | 'logo___id'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'name'
  | 'dates'
  | 'description';

export type EducationJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EducationJsonEdge>;
  nodes: Array<EducationJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EducationJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type EducationJsonGroupConnectionDistinctArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonGroupConnectionMaxArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonGroupConnectionMinArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonGroupConnectionSumArgs = {
  field: EducationJsonFieldsEnum;
};


export type EducationJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EducationJsonFieldsEnum;
};

export type EducationJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<EducationJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DeJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DeJsonEdge>;
  nodes: Array<DeJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DeJsonGroupConnection>;
};


export type DeJsonConnectionDistinctArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonConnectionMaxArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonConnectionMinArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonConnectionSumArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DeJsonFieldsEnum;
};

export type DeJsonEdge = {
  next?: Maybe<DeJson>;
  node: DeJson;
  previous?: Maybe<DeJson>;
};

export type DeJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'Banner___SoftwareDeveloper';

export type DeJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DeJsonEdge>;
  nodes: Array<DeJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DeJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DeJsonGroupConnectionDistinctArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonGroupConnectionMaxArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonGroupConnectionMinArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonGroupConnectionSumArgs = {
  field: DeJsonFieldsEnum;
};


export type DeJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DeJsonFieldsEnum;
};

export type DeJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DeJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allFlagsJson: { nodes: Array<{ code?: string | null, name?: string | null, src?: { name: string, childImageSharp?: { gatsbyImageData: any } | null } | null }> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { site?: { siteMetadata?: { title?: string | null, description?: string | null, author?: string | null, siteUrl?: string | null } | null } | null, image?: { childImageSharp?: { resize?: { src?: string | null, height?: number | null, width?: number | null } | null } | null } | null };

export type Unnamed_3_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_3_Query = { locales: { edges: Array<{ node: { ns?: string | null, data?: string | null, language?: string | null } }> } };

export type Unnamed_4_QueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type Unnamed_4_Query = { locales: { edges: Array<{ node: { ns?: string | null, data?: string | null, language?: string | null } }> } };

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = { allDevArticles: { nodes: Array<{ id: string, article?: { url?: string | null, tags?: Array<string | null> | null, title?: string | null, description?: string | null, published_at?: any | null, positive_reactions_count?: number | null } | null, featuredImg?: { childImageSharp?: { gatsbyImageData: any } | null } | null }> } };

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = { allEducationJson: { nodes: Array<{ location?: string | null, title?: string | null, name?: string | null, dates?: string | null, description?: string | null, locationFlag?: { name: string, childImageSharp?: { gatsbyImageData: any } | null } | null, logo?: { name: string, childImageSharp?: { gatsbyImageData: any } | null } | null }> } };

export type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_7_Query = { allSkillsJson: { nodes: Array<{ title?: string | null, skillItems?: Array<{ extra?: string | null, name?: string | null, href?: string | null, src?: { childImageSharp?: { gatsbyImageData: any } | null } | null, subSkills?: Array<{ extra?: string | null, name?: string | null, href?: string | null, src?: { childImageSharp?: { gatsbyImageData: any } | null } | null, subSkills?: Array<{ name?: string | null, href?: string | null, src?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null> | null } | null> | null } | null> | null }> } };

export type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_8_Query = { allWorkJson: { nodes: Array<{ location?: string | null, title?: string | null, name?: string | null, dates?: string | null, description?: string | null, locationFlag?: { name: string, childImageSharp?: { gatsbyImageData: any } | null } | null, logo?: { name: string, childImageSharp?: { gatsbyImageData: any } | null } | null }> } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
