import { getStoryblokApi } from "@storyblok/react";

export async function get_storyblok() {
    let slug = "attendance";

    
    let sbParams = {
      version: "draft", 
    };
  
    const storyblokApi = getStoryblokApi();
    let resp  = await storyblokApi?.get(`cdn/stories/${slug}`, sbParams)
    let data = resp?.data
    console.log(data)

  return data;
}
