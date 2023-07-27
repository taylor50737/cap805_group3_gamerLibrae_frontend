import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import { Box } from '@mui/material';

import Review from './components/Review';
import CommentSection from './components/CommentSection';
import Banner from './components/Banner';
import ErrorPage from '../Error/pages/ErrorPage';

// const review = {
//   avatar: penguin,
//   gameName: 'The Legend of Zelda: Tears of the Kingdom',
//   gameId: '123',
//   userName: 'orange123',
//   userId: 'u1',
//   postdate: 'May 12, 2023',
//   title: 'Not a 10/10 masterpiece...',
//   content: `<p class="text-white">No one's here to read a college thesis, so I'll knock this one out, good/bad/ugly style (ugly being things that I wasn't a fan of but that don't affect the overall score).<br><br>The Good:</p><ol class="marker:text-white"><li><p class="text-white">if you liked BOTW, you'll be happy to know all of its mechanics have essentially returned.</p></li><li><p class="text-white">the new <mark data-color="#666637" style="background-color: #666637; color: inherit">runes </mark>are mostly pretty good and shake up exploration in inventive ways.</p></li><li><p class="text-white">the remixed overworld isn't perfect, but I am willing to admit they did more than I expected them to.</p></li><li><p class="text-white">the new areas are pretty cool. <span data-type="spoiler" show="false" class="bg-[#ffffff] text-[#ffffff] border-2 border-dotted border-stone-500">Spelunking </span>is really fun.</p></li><li><p class="text-white">the dungeons, as the game calls them, are generally a big improvement on the <span data-type="spoiler" show="false" class="bg-[#ffffff] text-[#ffffff] border-2 border-dotted border-stone-500">Divine Beasts</span>.</p></li></ol><h3 class="text-white">The Bad:</h3><ol class="marker:text-white"><li><p class="text-white">if there were aspects of BOTW you didn't like, you'll be disappointed to know that every single core mechanic has returned.</p></li><li><p class="text-white">using Ultrahand for building (it has other uses, which are fine) sucks. Stray from what the game <em>wants</em> you to make and it will rarely ever work. Just make bridges. They're funny and they actually work.</p></li><li><p class="text-white">while it doesn't come into play often, there are parts of the world where it's very clear the game wasn't built with your toolset in mind. (hint: because it was built for BOTW's toolset)</p></li><li><p class="text-white">the story is almost laughably bad. Same minimalistic approach as BOTW but with a far worse script. Ganondorf deserved better.</p></li></ol><h3 class="text-white">The Ugly:</h3><ol class="marker:text-white"><li><p class="text-white">-no matter what the game calls them, these still aren't dungeons as Zelda fans know them. The Divine Beasts weren't terrible, but they left me feeling hungry for something better. Dungeons in this game are basically the Divine Beasts without the control mechanism. They are generally better, though.</p></li><li><p class="text-white">-they took whistle-sprinting out. While it was a glitch and did need to be removed, it was really handy for getting around quickly. Having nothing replace it is really unfortunate.</p></li></ol><h3 class="text-white">Overall a fun game, but <mark data-color="#666637" style="background-color: #666637; color: inherit">six years</mark> and <mark data-color="#666637" style="background-color: #666637; color: inherit">$70</mark> is a big ask for what we ultimately ended up getting, which largely does play like an DLC rather than a proper sequel. Not in terms of scope (the game definitely has scope), but in terms of what the game actually is.</h3>`,
//   vote: 15,
//   score: 70,
//   comments: [
//     {
//       avatar: rabbit,
//       userName: 'zeldaHater123',
//       postDate: 'May 13, 2023',
//       content: 'well said!',
//     },
//     {
//       avatar: dog,
//       userName: 'dog3',
//       postDate: 'May 14, 2023',
//       content: 'No!!!!!!!!!!!!!!!!!',
//     },
//     {
//       avatar: dog,
//       userName: 'dog3',
//       postDate: 'May 14, 2023',
//       content: 'It deserves more!',
//     },
//     {
//       avatar: dog,
//       userName: 'dog3',
//       postDate: 'May 14, 2023',
//       content:
//         'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga saepe, molestias, iure in optio cumque dolore delectus quod nam suscipit explicabo officia labore minima sed voluptatum totam provident nihil ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga saepe, molestias, iure in optio cumque dolore delectus quod nam suscipit explicabo officia labore minima sed voluptatum totam provident nihil ratione Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga saepe, molestias, iure in optio cumque dolore delectus quod nam suscipit explicabo officia labore minima sed voluptatum totam provident nihil ratione ',
//     },
//   ],
// };

const ReviewPage = () => {
  const { reviewPromise } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={reviewPromise} errorElement={<ErrorPage />}>
        {(review) => {
          console.log(review);
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Banner review={review} />
              <Review review={review} />
              <CommentSection comments={review.comments} />
            </Box>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default ReviewPage;
