"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', containScroll: false });

  const [selectedSpeech, setSelectedSpeech] = useState<null | any>(null);
  const [selectedVideo, setSelectedVideo] = useState<null | string>(null); 

  // Logic for the Reading Progress Bar (for the Speech Reader)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headline = "Hello, I'm Josh Funnell";
  
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const videos = [
    "/Video-1.mp4",
    "/Video-2.mp4",
    "/Video-3.mp4",
    "/Video-4.mp4"
  ];

  const speeches = [
    {
      id: "speech-1",
      date: "FEB 2026",
      title: "Business Builds Britain",
      desc: "A keynote address on the role of private enterprise as the driver of national growth.",
      takeaways: ["Wealth Creation", "Tax Reform", "Entrepreneurship"],
      content: `Conference, business builds Britain.

It is business that takes ideas and turns them into reality.

Takes jobs and turns them into livelihoods.

And it is business that pays the nation’s bills.

With strong business, everything is possible.

I spent 25 years in business where I saw optimism at work every day.

That is why I am optimistic.

I know Britain can return to being a world-leading economy.

Our country has huge strengths which even years more of this government will not diminish.

The English language, respect for property, our deep, sophisticated financial markets, and a mix of the businesses that thrive globally.

Around the world, people want what we produce.

And they want our skills, our capital and our ideas.

Thanks to the last Conservative government, we have an independent trade policy which allows us to sell not just to Europe but to our long-standing allies and most of the fastest growing economies on the planet.

Compare that distinguished record on trade to the press release politics we’ve seen over the last year.

The Prime Minister told us in May his US deal was signed, sealed and delivered.

Yet tariffs remain.

He told us he had a deal for pharmaceuticals.

But it never materialised, and our drug companies are leaving.

He told us he finally understood Brexit.

And he then went running back to Brussels to let them dictate our rules, killing our flexibility for future deals.

It’s clear that Labour and the other parties simply don’t understand business.

How could they? 

Unlike our Party, their ranks are full of professional politicians, trade unionists and the public sector.

No government that understood business would ever have imposed a jobs tax and changes to national insurance thresholds which hurt those employing the most the hardest.

Or the family business tax – a death tax.

Or doubled rates on the very businesses which keep our high streets alive.

And conference, no government that cared about British firms and British workers would ignore energy costs that are four times higher than our competitors.

Instead of creating wealth, they attack it, driving away entrepreneurs, investors, and top talent.

Too many of our best and brightest are exchanging Docklands for Dubai or Manchester for Milan.

And what Labour do nationally, the Greens, Lib Dems and the nationalists do locally.

Hostile planning policies frustrating businesses trying to expand.

Blocking new infrastructure.

And suffocating firms with traffic congestion, parking restrictions and red tape.

The next government will fix this and more just as after the failed consensus of the seventies, Britain picked itself up, restoring our pride and our growth.

But the process of change requires being honest about where we start.

We are no longer the rich country many think we are.

For too long we’ve been slipping down the international rankings in GDP per capita, competitiveness, and inward investment.

Under Labour, Britain is competing in the veterans’ race - comparing ourselves to the G7 - when the real competition are those younger, fitter economies who are overtaking us.

We Conservatives know that it is only private enterprise that creates growth, not government.

There were moments in office where we strayed from that truth.

More regulations, raising taxes, the state as nanny.

Indulging the idea that government is the solution, when we know very often it is the problem.

But the Conservative Party is under new management.

And at the heart of our strategy is an approach that’s proud to champion wealth creators and risk takers.

Creating a new generation of entrepreneurs and backing our businesses.

I am announcing clear policies today which start that work.

In our very first budget, we will repeal the family business tax which punishes success and dis-incentivises growth.

We will build a tax system which values those who take a risk and helps the smallest businesses.

And the next Conservative government will actively reverse the job destroying measures in Labour’s Unemployment Rights Bill.

A Bill which allows strikes to be called even if just a tiny fraction of the workforce vote.

A Bill which will destroy job opportunities for young people whilst topping up Labour’s political fund without workers being given the choice.

And the opposition to this terrible Bill in Parliament has been led by your Conservative shadow business team.

David Hunt and Andrew Sharpe in the House of Lords.

My shadow Ministers Harriet Baldwin, Gareth Davies and my PPS, Ali Griffiths in the Commons.

Not by any other party. By the Conservative Party.

And there is more.

I understand there are far too many hurdles for small businesses to jump.

Red tape that steals away the precious time of those who run them.

Take HMRC, an organisation which literally tried to turn its helplines off for six months of the year.

We say ‘enough’. That is unacceptable.

So, within weeks of entering government, we will that ensure every time a small business contacts HMRC, they are given the opportunity to rate their experience in the same way as companies seek customer feedback.

No more hanging on the phone for an hour with no one held accountable.

No one loves paying their taxes. 

But the taxman needs to respect those whose hard work and enterprise pays their salaries.

Nowhere is that more important than the self-employed.

They’re risk-takers, striking out on their own, often with nothing more than a laptop and a belief they can make it work.

That’s why we commit today to doing better for the self-employed. 

And that includes looking again at reforming IR35.

Because if Britain is to have ladders of opportunity, then the self-employed need to be able to climb them.

Similarly, opening a bank account today is so hard it is a miracle anyone starts a business at all.

It can take weeks or even months to do what other countries do in minutes.

It shows just how far our regulators have lost the plot and it’s a brake on growth we cannot afford.

So, we will transform a process which makes banks treat you as guilty until proven innocent.

From the tone at the top of the regulators to repealing EU era rules, we have a clear plan, and we will fix this.

So: scrapping the family business tax, reversing the Unemployment Bill, easier bank accounts and a better service from HMRC.

Real policies that will make a real difference.

And, where we can, we need a tax framework which shows our support with actions not words.

No sector has been hurt harder by Labour’s onslaught against enterprise than hospitality, retail, and leisure.

89,000 jobs lost in the hospitality sector alone since Rachel Reeves’ Autumn Budget.

One of her first actions in office was to more than double business rates for many of our high street businesses by cutting the relief that previous Conservative governments introduced.

Because of the choices she’s made, the life in our high streets is ebbing away.

And we know the heart of our communities are suffering.

So, we want to give them hope.

Today, we are announcing that when we return to government, we will introduce a permanent, one hundred per cent rate relief in business rates for retail, hospitality, and leisure.

250,000 businesses will benefit from that change.

Pubs, shops, restaurants struggling across the country will be saved.

And our high streets will get an enormous boost.

But conference there’s one more thing.

We want to reignite a culture of entrepreneurship in Britain.

To support and celebrate those who take a risk.

A mission the like of which we’ve not seen since my friend and mentor, Lord David Young was Mrs Thatcher’s Secretary for Trade and Enterprise.

To create a new generation of entrepreneurs.

As Business Secretary, I want to see young entrepreneur schemes flourish in every school and college in the country.

Building on existing schemes, delivered by people who’ve been there and done it and who want the next generation to succeed.

We will provide the support to make this happen because this is what we believe a stronger economy requires.

So, Conference, let me be clear.

The Conservative Party as the party of enterprise, the party of the entrepreneur, the party of business.

On the side of the pub landlord, the restaurateur, the small business owner, the self-employed, and the family business.

Those who work for themselves and give work to others.

The builders, not the blockers.

Those that make, not those that take.

That’s who we support, that’s who we believe in, that’s who our government will serve.

Nations that seize opportunity, rise.

We will seize that opportunity, and together we will make Britain’s economy strong again.

Thank you.`,
      sources: [{ label: "Download Original Transcript", url: "#" }]
    },
    {
      id: "speech-2",
      date: "APR 2025",
      title: "Steel Industry (Special Measures) Bill",
      desc: "An opening parliamentary speech scrutinizing the rushed nationalisation of UK steelmaking and its economic consequences.",
      takeaways: ["Industrial Strategy", "Public Finance Accountability", "Energy Policy"],
      content: `Thank you, Mr Speaker, and I thank the Secretary of State for taking the time to brief me last night ahead of today's sittings, and for sight of today's statement.

Mr Speaker, to fail to prepare is to prepare to fail.

What a way to proceed.

Only the sixth occasion since the end of the Second World War. Recalling Parliament to debate a Bill published only 90 minutes ago.

This would be conduct unbecoming of a parish council.

Our country, our economy, this Parliament, all deserve better.

And it's why the amendment in my name at least puts a sunset on today's Bill, and I hope the Government will accept that.

Mr Speaker, today is not a failure by the steel workers of Scunthorpe and elsewhere, their families, or the community.

They've toiled for generations to ensure we have the primary steel we need for our structures, our safety, and our security.

This is a failure on the Government's watch.

Let's be crystal clear what today means: we are entering a tunnel with only one exit.

This is a botched nationalisation plan, revealing the Government has no plan.

In Government, we acted to secure Port Talbot and were negotiating a plan, including British Steel's preferred option of an electric arc furnace in Teesside.

That would have limited job losses and kept Scunthorpe running in transition.

Once again, when Labour negotiates, Britain loses.

The Chagos Islands, US tariffs, the train drivers, and now this latest crisis.

Mr Speaker, a bad toolmaker blames his tools, but this time they've only themselves to blame.

And Mr Speaker, the British people must not have lost their winter fuel allowance and their disability benefits in order that China can walk away from its liabilities, leaving British taxpayers picking up the bills.

Mr Speaker, steel needs energy and energy needs steel.

No one denies that steel making has been difficult for some time.

But Scunthorpe is the victim of a dishonesty that pretends it is better for the environment to ship coke halfway around the planet than from down the road.

And an energy policy that has driven costs higher than any competing nation.

No one is more responsible for this than the Energy Secretary and the Prime Minister who appointed him.

Millions of other businesses are also struggling with their energy bills.

It's why the Chancellor's tax choices have been so devastating.

Steel may be the first domino to topple.

But glass, chemicals, cars and concrete are other industries at risk.

Does the Prime Minister envisage a whole series of Saturday sittings?

Or will he change course today and cut energy costs now?

Not in 10 years time, when it's too late.

I thank the Shadow Minister for giving way.

We are hearing about the efforts of the previous government to save British Steel.

And we have found a somewhat confusing account about the deal that the now Shadow Leader of the Opposition has negotiated.

If such a deal existed, can we perhaps see a record of any of that?

Well I think my colleague the Right Honourable Member for Saffron Walden has been extremely clear that the deal was being negotiated.

And the point about a deal being negotiated is that that deal will be concluded after the election.

Mr Speaker, it didn't need to be this way.

The Honourable Member for Brigham and Ingham has been warning of a growing threat since last September.

The Mayor of Teesside has been asking the Government to present their plan for steel for months.

Rob Waltham, the Leader of North Lincolnshire Council, has done all he can to support steel making in Scunthorpe.

And on the 4th of April, Ed Conway of Sky News showed the world that we were just days away from the risk of furnaces shutting down.

But the Government didn't listen and they didn't act.

It's been almost 10 days since Parliament debated a substantive piece of Government business.

Rather than this rushed minute-to-midnight bill, we could have used that time for proper debate, a proper process and proper scrutiny.

It's indefensible incompetence.

Despite years to prepare, it's clear they came into office with no plan.

There is no steel strategy.

There is no industrial strategy.

There is no export strategy.

And now we have this botched nationalisation.

The Secretary of State says his preference is to find a commercial partner.

But let's be serious.

Does the Government think this is likely, after attacking business with a 25billion jobs tax and his bill to create the most hostile environment for employers since the 1970s?

In case the Chancellor hasn't noticed, on her watch, all of the flow is investors leaving this country.

And, Mr Speaker, everything we have heard this morning says the Government hasn't really thought this through.

Steel making is complex, intense, it's highly operational.

Iron ore has to reach thousands of degrees to become molten iron.

It's a dangerous process and there is a serious risk to health.

Yet in Birmingham, Labour struggled to collect the bins from midnight, the Chancellor will be standing behind the payroll, settling every bill with every supplier, even if they're in arrears.

If these decisions no longer sit with the plant owner, where does the buck stop?

Old Admiralty building?

The Treasury?

Number 10?

And how can other steel providers have any confidence in the impartiality of the Government's steel strategy if the umpire is now on the pitch?

What assessment has the Government made of the impact of this bill on public finances?

There is no impact assessment.

The Government's been talking to British Steel for nine months.

They've put at least 500 million of taxpayers' money on the table.

Surely by now, he and his officials have a comprehensive understanding of the costs of the actions he is asking us to vote on.

What disrespect to this House for the Government to come along today to recall Parliament after nine months in which they failed to land a deal and ask us for a blank cheque.

This is no way to run a corner shop, let alone the country.

Has anyone in Government asked the ONS?

Well, perhaps I'll take an intervention if they want to answer this question, which is, has anyone in Government asked the ONS whether, as a result of the powers that are being taken in this Bill, British Steel will, from today, be classified as publicly owned, whether it's been formally nationalised or not?

No answers.

Mr Speaker, the markets know, the world knows, and we know the Chancellor's headroom was inadequate from the very moment she sat down about her last emergency budget.

Only this week, the Bank of England took the unprecedented step of cancelling the planned sale of Government bonds.

Today's botched nationalisation will further unsettle international markets.

So can the Government tell us when the Chancellor will be presenting her next emergency budget and what plans she has to update the markets?

So there we are, Mr Speaker.

A disrespect, a disrespect, a disrespect of this House.

The Government has treated Parliament with disdain, nine months of dither and delay.

A botched nationalisation of steelmaking with the British taxpayer on the hook.

It's crystal clear, when Labour negotiates, Britain loses.

This is not a serious Government.

It's a Government shaped by events, not one in control of them.

It's a Government by sulky teenager, not sharing their plans, not answering the question, and when it goes wrong, it's everyone's fault but theirs.

Thank you very much, Mr Speaker.`,
      sources: [
        { label: "Hansard Official Record", url: "https://hansard.parliament.uk/" },
        { label: "Parliamentary Bill Documents", url: "https://bills.parliament.uk/" }
      ]
    },
    {
      id: "speech-3",
      date: "DEC 2025",
      title: "Supporting Seasonal Work & Hospitality",
      desc: "A parliamentary closing speech defending the hospitality sector against punitive taxation and rigid employment laws.",
      takeaways: ["Hospitality Sector", "Business Rates", "Seasonal Employment"],
      content: `Madam Deputy Speaker, we have heard today from Members across this House who understand a fundamental truth.

The hospitality sector is the cornerstone not only of our economy, but of our society too.

It binds our communities together.

From the pubs and bars to the cafés and garden centres, these are the places where life happens.

But more than that, hospitality provides the next generation with that vital first step on the career ladder.

It offers the flexible, seasonal work that allows young people to earn their first wage and learn the dignity of labour.

As we have heard from my Honourable and my Right Honourable friends, pubs, hotels and restaurants are hurting as the direct result of the Chancellor’s Budget.

In my own South Downs constituency, more than a dozen venues have contacted me just in the last 24 hours.

Ruth and Martin at The Cricketers in Duncton described to me their rates going up by £4,500-£5,000 a year.

The Fox Goes Free in Charlton has been a public house for over 400 years and like every pub, makes a huge contribution to its community. Their business rates bill has increased by more than £13,000 next year.

I’ve heard similar, and worse, from the Murrell Arms in Eastergate, the Half Moon Inn at Northchapel, the Labouring Man in Coldwaltham, and the Onslow Arms in Loxwood.

But it doesn’t stop there Madam Deputy Speaker.

It is exactly the same story from The Bridge Inn in Amberley, the Star and Garter in East Dean, the Bricklayers Arms in Midhurst, and the Black Horse in Byworth.

Every pub and hotel in my rural constituency are bearing out exactly the figures from UK Hospitality and the British beer and pub association that we have heard many times today.

Tom Richardson at the Three Moles in Selham explained how the turnover basis of assessing rateable values is flawed.

His Employment costs are up thanks to the government’s NI hike.

Electricity costs and heating oil have more than doubled.

At Tottington Manor Hotel in Henfield they have to find nearly £50,000 due to the rise in employment costs alone.

Pub and hotel owners are at the end of their tether.

One landlord has not been able to draw a wage from their pub in the last 6 months.

Another told me of working 7 days a week, 16 to 17 hours a day just trying to keep their pub open.

The cost of hiring staff has become so prohibitive that owners are doing more and more themselves in one of the ‘doom loops’ the Chancellor seems to specialise in.

Similar points were raised by colleagues on these benches.

[INSERT REFERENCES TO COLLEAGUES]

Madam Deputy Speaker, the full frontal attack on seasonal work is buried deep within their (Un)Employment Bill.

This Government has stubbornly refused to listen to reason.

They insist on imposing "guaranteed hours" on businesses that rely entirely on the tides of the seasons.

Like King Canute, they are legislating to outlaw seasonality.

It means that if a seaside café hires a student to wait outside tables in the summer rush, Labour want them legally forced to offer them the same hours as the shutters come down for Autumn.

The demise of strawberries and cream sellers at Wimbledon.

It’ll even be like the death of Father Christmases and assistant elves in shopping centres across the nation.

It is bureaucratic madness!

Yet Ministers press on, deaf to the pleas of the very businesses who provide the jobs that the growing army of unemployed on their watch need.

Madam Deputy Speaker, you don’t protect workers by bankrupting employers.

You don’t support high streets, pubs and restaurants by taxing them into submission.

We Conservatives understand business.

Unlike the current Cabinet, many of us have worked in business ourselves.

We stand with the risk-takers who create wealth, not the bureaucrats who destroy it.

That is why our motion today supports seasonal, flexible, and part time working.

We will take 250,000 high street businesses and pubs out of business rates entirely, paid for with the welfare reforms they don’t have the backbone to deliver.

And we will repeal all of the job destroying measures in the disastrous (Un)Employment Bill.

Madam Deputy Speaker, we back the engines of our economy, or do we allow this Government to drive them to the wall?

I commend this motion to the House.`,
      sources: [
        { label: "Hansard Official Record", url: "https://hansard.parliament.uk/" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-blue-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 flex pointer-events-none w-full h-full">
          <motion.div initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute left-0 top-0 bottom-0 w-1/2 h-full" style={{ backgroundImage: `url('/CoL Cover Photo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'left center', maskImage: 'linear-gradient(to right, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)' }} />
          <motion.div initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }} className="absolute right-0 top-0 bottom-0 w-1/2 h-full" style={{ backgroundImage: `url('/Parliament Cover Photo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'right center', maskImage: 'linear-gradient(to left, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 z-10" />
        </div>
        
        <div className="relative z-[100] w-full max-w-7xl">
          <motion.h1 variants={sentence} initial="hidden" animate="visible" className="text-[7vw] md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 whitespace-nowrap">
            {headline.split("").map((char, index) => (<motion.span key={index} variants={letter} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1.5 }} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
            I'm experienced at <span className="text-white font-medium border-b border-slate-600">joining up the dots between Westminster and business</span>. I take complex issues and communicate them as compelling stories. You can see some of those stories below.
          </motion.p>
        </div>
      </section>

      {/* Video Carousel Section */}
      <div className="py-32 relative z-10">
        <motion.div {...slideUp} className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-8">Video</h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            These days, there's so much information. It's difficult to know where to start. 
            But <span className="text-white font-normal">cutting through to what's important</span> is crucial for businesses and politicians alike. 
            Video bridges that gap — transforming abstract policy and complex corporate strategy into human stories.
          </p>
        </motion.div>
        
        <div className="relative group px-4">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {videos.map((src, index) => (
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_65%] min-w-0 pl-4 relative group/video cursor-pointer" onClick={() => setSelectedVideo(src)}>
                  <div className="aspect-video rounded-sm overflow-hidden border border-slate-800 shadow-2xl transition-transform duration-500 group-hover/video:scale-[1.02] relative">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-white shadow-xl group-hover/video:bg-blue-500 transition-all duration-300">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Speeches Grid - UPDATED LIQUID GLASS */}
      <div className="max-w-5xl mx-auto px-6 space-y-48 pb-48 relative z-10">
        <motion.section {...slideUp} className="space-y-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-8">Speeches</h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Speeches are long form way of communicating your message. They can be intensely political and detail heavy. But they're easy to get wrong. Below are three speeches I wrote that were written in the context of landmark political moments, and aimed to strike an authoritative tone whilst conveying our narrative.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {speeches.map((s, i) => (
              <div key={i} className="group relative flex flex-col justify-between h-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:bg-white/20 transition-all duration-500 overflow-hidden">
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-white leading-tight">{s.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed mb-8 group-hover:text-white transition-colors">{s.desc}</p>
                </div>
                
                <button onClick={() => setSelectedSpeech(s)} className="relative z-10 inline-flex items-center text-sm font-bold text-blue-300 hover:text-white transition-colors gap-2 group-hover:translate-x-1 duration-300">
                  Read Transcript <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Writing Section */}
        <motion.section {...slideUp} className="space-y-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase">Writing</h2>
          <div className="py-24 border-y border-slate-800">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-slate-100 leading-tight">
              "The verifiable truth about digital infrastructure."
            </h3>
            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold">The Spectator • 2026</p>
          </div>
        </motion.section>

        <footer className="pt-24 flex flex-col items-center border-t border-slate-800 pb-12">
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="px-12 py-4 bg-white text-slate-950 rounded-sm font-bold hover:bg-slate-200 transition-colors shadow-lg">
            Connect on LinkedIn
          </a>
          <p className="mt-12 text-slate-500 font-sans text-xs tracking-widest uppercase">© 2026 Josh Funnell</p>
        </footer>
      </div>

      {/* Cinematic Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 md:p-12">
            <div className="absolute top-6 right-6 z-10">
              <motion.button onClick={() => setSelectedVideo(null)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest bg-slate-900/50 px-4 py-2 rounded-sm border border-slate-700">
                Close [X]
              </motion.button>
            </div>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="w-full max-w-6xl aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-slate-800 relative">
              <video controls autoPlay className="w-full h-full object-contain">
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Speech Reader Modal */}
      <AnimatePresence>
        {selectedSpeech && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-950/90 backdrop-blur-sm p-0 md:p-8">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="w-full max-w-4xl h-[95vh] bg-[#0f172a] border border-slate-700 rounded-t-[2rem] overflow-y-auto shadow-2xl relative flex flex-col">
              
              {/* Reading Progress Bar */}
              <motion.div className="sticky top-0 left-0 right-0 h-1.5 bg-blue-500 z-[210] origin-left" style={{ scaleX }} />

              <div className="sticky top-0 right-0 flex justify-end pb-8 z-10 bg-[#0f172a]/95 px-8 pt-8">
                <button onClick={() => setSelectedSpeech(null)} className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Close Reader</button>
              </div>

              <div className="px-8 md:px-20 pb-20">
                <div className="mb-12 border-b border-slate-800 pb-12">
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 block">{selectedSpeech.date}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">{selectedSpeech.title}</h2>
                  
                  {/* Key Takeaways Tags */}
                  <div className="flex flex-wrap gap-3">
                    {selectedSpeech.takeaways.map((t: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-slate-300 text-xl leading-[1.8] whitespace-pre-line font-light">
                    {selectedSpeech.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}