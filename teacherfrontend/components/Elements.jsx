import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Elements = ({blok}) => (
    <div {...storyblokEditable({blok})}>
        {blok.links.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
)
export default Elements