import { Box } from '@mui/material';

import penguin from '/src/assets/avatar/penguin.png';
import rabbit from '/src/assets/avatar/rabbit.png';
import dog from '/src/assets/avatar/dog.png';

import ReviewPreview from './ReviewPreview';

const reviews = [
  {
    avatar: penguin,
    userName: 'orange123',
    postdate: 'May 12, 2023',
    title: 'Game of the year 2023',
    content: `<p class="text-white">Lorem <s>ipsum, dolor sit amet consectetur adipisicing</s> elit.</p><ol class="marker:text-white"><li><p class="text-white">Repellendus nemo facere atque <mark data-color="#666637" style="background-color: #666637; color: inherit">mollitia molestiae</mark> officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li><li><p class="text-white">Repellendus nemo facere atque mollitia molestiae officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint <em>Lorem ipsum</em>, dolor sit amet consectetur adipisicing elit. </p></li></ol><blockquote><p class="text-white">Repellendus nemo facere atque mollitia molestiae officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint</p></blockquote>`,
    score: 95,
    commentCount: 4,
    vote: 33,
  },
  {
    avatar: rabbit,
    userName: 'apple420',
    postdate: 'May 14, 2023',
    title: 'Worst than last one',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nemo facere atque mollitia molestiae officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint',
    score: 65,
    commentCount: 2,
    vote: 5,
  },
  {
    avatar: dog,
    userName: 'kiwi666',
    postdate: 'May 15, 2023',
    title: 'Worst Game Ever',
    content: `<p class="text-white">No one's here to read a college thesis, so I'll knock this one out, good/bad/ugly style (ugly being things that I wasn't a fan of but that don't affect the overall score).<br><br>The Good:</p><ol class="marker:text-white"><li><p class="text-white">if you liked BOTW, you'll be happy to know all of its mechanics have essentially returned.</p></li><li><p class="text-white">the new <mark data-color="#666637" style="background-color: #666637; color: inherit">runes </mark>are mostly pretty good and shake up exploration in inventive ways.</p></li><li><p class="text-white">the remixed overworld isn't perfect, but I am willing to admit they did more than I expected them to.</p></li><li><p class="text-white">the new areas are pretty cool. <span data-type="spoiler" show="false" class="bg-[#ffffff] text-[#ffffff] border-2 border-dotted border-stone-500">Spelunking </span>is really fun.</p></li><li><p class="text-white">the dungeons, as the game calls them, are generally a big improvement on the <span data-type="spoiler" show="false" class="bg-[#ffffff] text-[#ffffff] border-2 border-dotted border-stone-500">Divine Beasts</span>.</p></li></ol><h3 class="text-white">The Bad:</h3><ol class="marker:text-white"><li><p class="text-white">if there were aspects of BOTW you didn't like, you'll be disappointed to know that every single core mechanic has returned.</p></li><li><p class="text-white">using Ultrahand for building (it has other uses, which are fine) sucks. Stray from what the game <em>wants</em> you to make and it will rarely ever work. Just make bridges. They're funny and they actually work.</p></li><li><p class="text-white">while it doesn't come into play often, there are parts of the world where it's very clear the game wasn't built with your toolset in mind. (hint: because it was built for BOTW's toolset)</p></li><li><p class="text-white">the story is almost laughably bad. Same minimalistic approach as BOTW but with a far worse script. Ganondorf deserved better.</p></li></ol><h3 class="text-white">The Ugly:</h3><ol class="marker:text-white"><li><p class="text-white">-no matter what the game calls them, these still aren't dungeons as Zelda fans know them. The Divine Beasts weren't terrible, but they left me feeling hungry for something better. Dungeons in this game are basically the Divine Beasts without the control mechanism. They are generally better, though.</p></li><li><p class="text-white">-they took whistle-sprinting out. While it was a glitch and did need to be removed, it was really handy for getting around quickly. Having nothing replace it is really unfortunate.</p></li></ol><h3 class="text-white">Overall a fun game, but <mark data-color="#666637" style="background-color: #666637; color: inherit">six years</mark> and <mark data-color="#666637" style="background-color: #666637; color: inherit">$70</mark> is a big ask for what we ultimately ended up getting, which largely does play like an DLC rather than a proper sequel. Not in terms of scope (the game definitely has scope), but in terms of what the game actually is.</h3>`,
    score: 20,
    commentCount: 0,
    vote: -10,
  },
];

const ReviewSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#191720',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        alignContent: 'space-evenly',
        gap: '20px',
        py: '20px',
      }}
    >
      {reviews.map((review, i) => (
        <ReviewPreview key={i} review={review} />
      ))}
    </Box>
  );
};

export default ReviewSection;
