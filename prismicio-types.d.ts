// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismicClient from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Post documents */
interface PostDocumentData {
  /**
   * Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Content field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  content: prismic.RichTextField;
  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice>;
}
/**
 * Slice for *Post → Slice Zone*
 *
 */
type PostDocumentDataSlicesSlice = never;
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
export type AllDocumentTypes = PostDocument;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismicClient.ClientConfig
    ): prismicClient.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      PostDocumentData,
      PostDocumentDataSlicesSlice,
      PostDocument,
      AllDocumentTypes,
    };
  }
}