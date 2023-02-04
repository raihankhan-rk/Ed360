import { getStoryblokApi } from "@storyblok/react";

export async function get_storyblok() {
    let slug = "attendance";

    // load the draft version
    let sbParams = {
      version: "draft", // or 'published'
    };
  
    const storyblokApi = getStoryblokApi();
    let data  = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return data;
}
