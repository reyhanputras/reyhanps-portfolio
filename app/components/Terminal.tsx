/** @format */

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal className='w-full'>
      <TypingAnimation>&gt; cat about_me.txt</TypingAnimation>

      <AnimatedSpan delay={1500} className='text-green-500'>
        <span>
          ✔ Hi! My name is Reyhan, an undergraduate software engineering
          student.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={1500} className='text-green-500'>
        <span>
          ✔ With an unstoppable passion for learning and solving problems.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className='text-green-500'>
        <span>
          ✔ With expertise in Fullstack Development, Backend Development.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className='text-green-500'>
        <span>✔ Currently based in Bandung, Indonesia.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className='text-green-500'>
        <span>
          ✔ When I’m not coding, I enjoy listening music and watching movies.
        </span>
      </AnimatedSpan>
      <br />
      <TypingAnimation delay={6500} className='text-muted-foreground'>
        Feel free to connect with me!
      </TypingAnimation>
    </Terminal>
  );
}
