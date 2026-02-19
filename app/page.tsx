"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', containScroll: false });

  const [selectedSpeech, setSelectedSpeech] = useState<null | any>(null);
  const [selectedVideo, setSelectedVideo] = useState<null | string>(null); 
  // NEW: State to handle the Op-Ed reader modal
  const [selectedArticle, setSelectedArticle] = useState<null | any>(null);

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

  // NEW: The Articles Data Array
  const articles = [
    {
      id: "article-1",
      publisher: "The Telegraph",
      logo: "/the-telegraph.jpg",
      date: "SEP 2025",
      title: "Angela Rayner is about to launch a devastating assault on business",
      desc: "The gap between what Britain needs and what this Government is offering grows with each passing day.",
      content: `As Parliament returns this week, one of Labour’s priorities for this session is delivering its “back to the 1970s” legislation to bolster the power of trade unions– and their cheerleader, Angela Rayner.

It is perhaps ironic that union members in both Parliament and the Deputy Prime Minister’s own department are on strike. But that is fast becoming the new normal. And a natural consequence of reducing strike ballot thresholds and rewarding militancy with higher wage settlements.

Businesses look on with horror as measures never contemplated by the Blair or Brown governments are about to be enacted into law.

Onerous powers to facilitate the recolonisation of the private sector with trade union collective bargaining. An administrative cost headwind of £5bn a year, on the Government’s own figures. The prospect of hundreds of thousands more employment tribunal cases to add to the existing backlog of half a million. And a new “fair work” quango to bring prosecutions of businesses that will be stuffed full of activist lawyers and ex-trade union officials.

In normal times, businesses might feel that the Treasury would share concerns and advocate a sensible rethink or pause on measures that will reduce employment and lower growth.

But these are not normal times, and in Rachel Reeves vs Rayner, it is clear who calls the shots.

Indeed, in recent LabourList polling of Labour members, Rayner’s favourability was + 59 while that of Reeves was -26.

So, while employment and vacancies both fall and the number of working age people on benefits increases, the Government barrels ahead with its bill for unemployment – despite many in the Treasury and the Department for Business impotently despairing.

No wonder that, like fresher’s week friends, the useful idiots from the business community queuing up to support Labour before the last election have all melted away.

Not a single business has ever endorsed all the measures in the 300-page, job-destroying, employment rights bill and the main business groups, including the Confederation of British Industry and the Institute of Directors are uncharacteristically united in seeking to oppose its worst impacts.

The gap between what British business needs and what this punishing Government is offering them grows with each passing day.

Instead of certainty and confidence, for the second September running, businesses face daily speculation of a horror show of potential tax raids in a Budget that does not yet have a date.

The only thing that is certain is the uncertainty.

The fact that the Government is clearly unwilling or incapable of cutting its spending to fit its already record levels of taxation causes consternation amongst entrepreneurs and executives.

They see how Labour’s first year in office imposed huge headwinds on Britain’s business.

The tone was set early with the manifesto-breaking £25bn jobs tax that punished aspiration and hit those on the lowest incomes the most.

As we and groups like UK Hospitality and the British Retail Consortium told them, taxing jobs is one of the most destructive ways to raise revenues.

It reduces employment, pushes people into welfare, and creates a two-tier economy – weighing down the most productive parts of the economy to support the least productive.

We warned them not to go ahead with it but they ploughed on regardless, cheered by the large body of Left-wing backbenchers in the Labour Party who are at best indifferent to wrecking the private sector.

And that was just the start. Breaking yet another promise, Labour’s death tax on family businesses is already impacting the incentives to grow or continue the nation’s millions of family businesses.

This punishing change brings a small chain of family butchers, bakers or hairdressers into scope, with most having no prospect of finding the cash to pay a large and unexpected tax bill without selling the business.

Just like the tax on jobs, it will syphon money away from wages, investment and the profits which fuel growth in the UK.

Other anti-business measures include higher business rates, imposing green packaging levies and extra tax on air travellers.

Already announced but yet to bite are Labour’s carbon tariff, which will add to the cost of almost every imported item, higher energy costs through yoking the UK to the EU Emissions Trading Scheme and an audit reform and corporate governance bill, which will be another volley of red tape and legally imposed wokery which no business ever asked for.

No wonder that business confidence is at the lowest levels recorded since many of the surveys began.

Ultimately, this is a government that may be in thrall to Rayner and the unions but doesn’t understand business.

What’s worse is that it has no apparent interest in finding out what they want.

The UK now languishes in 29th place in the ranking of global competitiveness. This is alongside the largest brain drain since the 1960s. Yet no alarm bells seem to be going off in 10 Downing Street, or the Treasury.

While Labour may be sanguine about business failure or fall back on tropes about well-paid bosses, those who will pay the harshest price for Labour’s economic vandalism are those in “generation jobless”.

So as term restarts, spare a thought for the growing number of young people struggling to get their first job after school or college, chasing a rapidly drying pool of vacancies thanks to Labour’s choices.`,
      sources: [{ label: "Read Article on The Telegraph", url: "https://www.telegraph.co.uk/" }]
    },
    {
      id: "article-2",
      publisher: "The Sun",
      logo: "/the-sun.jpg",
      date: "APR 2025",
      title: "Labour has landed itself in a steel crisis of its own making",
      desc: "Nationalisation should be a last resort, but steel is vital for our security, resilience and economy.",
      content: `Yesterday laid bare the madness at the heart of Labour’s steel policy, and the incompetence which seems endemic to their government. 

As with many of their policies, they don’t have a plan. They have been left scrambling for a solution and the future for British steelmaking now hangs the balance because of them.

History often has a habit of repeating itself. 

Neil Kinnock once pointed out the stupidity of ‘hiring taxis to scuttle round a city handing out redundancy notices to its own workers’, and Labour’s eco madness has hit similar heights. 

Red Ed Miliband closed our last coal mine months ago, only to then be forced into importing coal from abroad to keep the Scunthorpe blast furnaces open. 

Net Zero will not work in its current form. And this government continuing to peddle its dogma is putting things like our steel industry at risk.

Of course, we all want to stop climate change. 

But, given Britain only contributes to 1 per cent of global emissions, the best way to do that is by having a thriving private sector which can innovate and develop cutting-edge technology. 

It’s businesses, not the state that will do this. But clearly this hasn’t yet dawned on Keir Starmer.

Now the wheels are coming off for Keir Starmer. Having broken over 100 promises since becoming Labour leader, he once again proved he is the master of saying one thing and doing the opposite. 

He now says ‘the world as we knew it has gone’, claiming we are in a different world. In some ways he is right, but only because he lives in a completely different world to the one the rest of us do.

He is completely out of touch and needs to get real. 

On the economy, on tariffs and Net Zero he can’t stop scoring own goals. He must urgently change course.

If Starmer meant what he said about living in a new world, he would be able to see sense as the Conservative Party have on Net Zero. 

The PM must admit that Net Zero by 2050 is impossible without crippling businesses and punishing families with higher costs and higher bills.

Stamer’s much-vaunted electric vehicle changes, which only brought us closer to where we were a year ago, is tinkering at the edges. 

Continuing to enforce extra levies, increasing burdens on businesses and shackling industry with sales bans, these minor changes are just not equal to the challenge.

It’s about time the PM used Brexit to our advantage. We all know Starmer is an arch Remoaner. 

He energetically campaigned for a second referendum, and he voted to block the UK making its own laws 48 times in Parliament. 

But as the result of Brexit he’s been dealt a good hand of cards and now is his chance to seriously play it in the national interest.

Given his Chancellor has crushed growth, a US trade deal would be the ultimate prize. 

For anyone who doesn’t have a thinly veiled desire to rejoin the EU, this deal would unleash opportunities for British businesses to benefit from international trade like never before. 

We laid the foundations for it, negotiating with President Trump in his first term. Now he’s back in the White House, the appetite for it in Washington is there. 

Starmer must pick up and dust off what we’ve already hammered out. 

But, despite tariffs hammering our car sector and punishing British businesses, they seem very half hearted. 

Labour ministers, more focused on hating Trump than helping Britain, took five months to even begin face to face talks. 

They lost the services of Britain’s top trade negotiator, and they wasted time cosying up to the EU with nothing to show for it.

Try as they might to blame everyone else for our economic woes, common sense readers of the Sun will see through it. 

Labour has trashed the economy, sent taxes to record highs and tried to strangle businesses in reams of red tape. 

Brexit could be Britain’s life jacket, but the Prime Minister won’t wear it. He must put his partisan instincts aside and act in the national interest.

The final nail in the coffin is Labour’s punishing tax regime. 

Already, we have seen an exodus of the innovators, the risk takers and the entrepreneurs. Not to mention salaries being slashed, 25,000 job losses and counting and inflation ticking up. 

Yet Starmer dogmatically ploughs on, his words increasingly divorced from reality. 

It’s a classic case of government by press release – style over substance, slogans over solutions. 

What we need now is honesty about the challenges we face, and the courage to make decisions that actually solve them. 

But that’s not how the current occupants of Downing Street operate.

Keir Starmer is stuck in the past. A politician more comfortable recycling old ideas than generating new ones. 

He hasn’t evolved. And unless he does, it’s the rest of us who will pay the price: higher taxes, lost jobs, soaring bills, and a weakened economy.

Britain deserves better than managed decline masked as progress. If Starmer truly believes we’re living in a new world, then it’s time he started acting like it.`,
      sources: [{ label: "Read Article on The Sun", url: "https://www.thesun.co.uk/" }]
    },
    {
      id: "article-3",
      publisher: "The Telegraph",
      logo: "/the-telegraph.jpg",
      date: "DEC 2025",
      title: "Only business can generate growth, and only the Conservatives can be the party of business",
      desc: "Plummeting confidence under Labour promises a ‘January of discontent’",
      content: `Somewhere far from Whitehall, a businessman or woman is putting together the year-end accounts for their small business. It might be a firm of electricians, a bakery or a small, specialised manufacturer. It might be a recent start-up or a family business which has operated in its community for generations. Either way a product of risk-taking and long, very possibly unpaid, hours.

Staring at those accounts and budget for the year ahead, after Labour’s Budget our business leader finds that they no longer add up. The £25bn jobs tax, the rise in business rates and wages, the trade union-inspired Employment Rights Bill and – if there is anything left after these – the prospect of a new family business “death tax” to be paid by the next generation.

Businesses tend not to fail in December, but I predict a “January of Discontent” as bills fall due, auditors fret about going concerns and punch-drunk business owners throw in the towel.

And yet our Western democracies have never needed the problem-solving power of business and private capital more. Without business there is no growth. It is only business which creates jobs and prosperity and pays the taxes to fund the public services our populations have come to expect as a right.

It is astonishing how few politicians fully understand this. If they did, they would be much more wary of piling on not just taxes but red and green tape. They wouldn’t be imposing political agendas around diversity, gender and climate. They wouldn’t be trying to rig market outcomes via regulators and driving up the cost of energy, labour and risk capital.

Relative to other economies, the UK over-taxes both property and employment, hitting our businesses and high streets hard. Right now, instead of a government that lauds wealth creators, we see the real-life version of Ayn Rand’s Atlas Shrugged playing out in the UK: despair and capitulation by businesses, loss of motivation to start new enterprises and a brain drain as our best and brightest go elsewhere.

The better news is that we Conservatives can fix this. We know how to, and in Kemi Badenoch we have a leader with business experience who completely understands the need. My own mentor and the inspiration for me to go into politics after a decades-long career in business, Lord Young, understood this and is most famous for his time as secretary of state for enterprise.

At recent elections we have struggled to attract the support of younger voters but with their side-hustles and gig-economy entrepreneurialism, they are natural Conservatives if we can convince them we are on their side. Margaret Thatcher’s majorities were built with the support of an army of small business owners and the self-employed, hungry for a government that rewarded aspiration.

We will develop the detail over the coming months but this is an area where principles translate straightforwardly into policy. Lower taxes, a smaller state which does fewer things better and a government willing to stand up and defend wealth-creating risk-takers. The difference is that this time our plans must be credible, fully prepared in advance and ready to implement on day one of our next term in office.

As a lifelong Conservative, I have been immensely frustrated that past leaders have talked about cutting red tape when running for office only to preside over governments that added to regulatory burdens: “talking Right but governing Left”, as Kemi puts it so well.

As we formulate our own reforms, the example of what Vivek Ramaswamy and Elon Musk plan to do to cut bureaucracy in the US as part of Donald Trump’s presidency will provide an exciting case study. In sharp contrast to plummeting UK business confidence under Labour, the world’s largest economy is already attracting record capital inflows in anticipation. And if Labour were in any way serious about growth, Starmer himself would be on the next flight to the US seeking to pick up talks about a UK-US trade deal.

There is a narrow window of opportunity for this as the new administration firms up its priorities between now and mid-January. It would build on the genuine achievements of our time in office with trade deals secured with Japan, Australia, New Zealand and the UK joining the CPTPP which formally takes place this week.

Finally, one of my tasks as shadow business secretary is to seek out talent for our next term in government. The Conservative Party needs more parliamentary candidates and MPs with serious business backgrounds. They must be proper conservatives first; our party has been damaged enough by straying from its core principles. But with that proviso, the country we inherit will require decisive action of the sort in which business excels. Government is the ultimate scale opportunity in that it touches more lives than any individual business does so this is a worthy mission.`,
      sources: [{ label: "Read Article on The Telegraph", url: "https://www.telegraph.co.uk/" }]
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

      {/* Speeches Grid */}
      <div className="max-w-5xl mx-auto px-6 space-y-48 pb-48 relative z-10">
        <motion.section {...slideUp} className="space-y-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-8">Speeches</h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Speeches are a long form way of communicating your message. They can be intensely political and detail heavy. But they're easy to get wrong. Below are three speeches I wrote that were written in the context of landmark political moments, and aimed to strike an authoritative tone whilst conveying our narrative.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {speeches.map((s, i) => (
              <div key={i} className="group relative flex flex-col justify-between h-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:bg-white/20 transition-all duration-500 overflow-hidden">
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

        {/* OP-EDS & COMMENTARY GRID */}
        <motion.section {...slideUp} className="space-y-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-8">Op-Eds & Commentary</h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Placing thought leadership in national titles requires cutting through the noise. Here are three pieces of commentary designed to drive the political agenda and shape the business narrative.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {articles.map((a, i) => (
              <div key={i} className="group relative flex flex-col justify-between h-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:bg-white/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  {/* Dynamic Logo Insertion */}
                  <div className="h-8 mb-6 flex items-center justify-start">
                    <img src={a.logo} alt={a.publisher} className="h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white leading-tight">{a.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed mb-8 group-hover:text-white transition-colors">{a.desc}</p>
                </div>
                <button onClick={() => setSelectedArticle(a)} className="relative z-10 inline-flex items-center text-sm font-bold text-blue-300 hover:text-white transition-colors gap-2 group-hover:translate-x-1 duration-300">
                  Read Article <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
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
              
              <motion.div className="sticky top-0 left-0 right-0 h-1.5 bg-blue-500 z-[210] origin-left" style={{ scaleX }} />

              <div className="sticky top-0 right-0 flex justify-end pb-8 z-10 bg-[#0f172a]/95 px-8 pt-8">
                <button onClick={() => setSelectedSpeech(null)} className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Close Reader</button>
              </div>

              <div className="px-8 md:px-20 pb-20">
                <div className="mb-12 border-b border-slate-800 pb-12">
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 block">{selectedSpeech.date}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">{selectedSpeech.title}</h2>
                  
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

      {/* INTERACTIVE ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-950/90 backdrop-blur-sm p-0 md:p-8">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="w-full max-w-4xl h-[95vh] bg-[#0f172a] border border-slate-700 rounded-t-[2rem] overflow-y-auto shadow-2xl relative flex flex-col">
              
              <motion.div className="sticky top-0 left-0 right-0 h-1.5 bg-blue-500 z-[210] origin-left" style={{ scaleX }} />

              <div className="sticky top-0 right-0 flex justify-end pb-8 z-10 bg-[#0f172a]/95 px-8 pt-8">
                <button onClick={() => setSelectedArticle(null)} className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Close Reader</button>
              </div>

              <div className="px-8 md:px-20 pb-20">
                <div className="mb-12 border-b border-slate-800 pb-12">
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 block">{selectedArticle.date}</span>
                  
                  {/* Dynamic Logo for Reader Mode */}
                  <img src={selectedArticle.logo} alt={selectedArticle.publisher} className="h-10 mb-6 object-contain" />
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">{selectedArticle.title}</h2>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-slate-300 text-xl leading-[1.8] whitespace-pre-line font-light">
                    {selectedArticle.content}
                  </p>
                </div>

                {selectedArticle.sources && (
                  <div className="mt-16 pt-8 border-t border-slate-800">
                    <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Verifiable Source</h4>
                    <ul className="space-y-2">
                      {selectedArticle.sources.map((source: any, idx: number) => (
                        <li key={idx}>
                          <a href={source.url} target="_blank" className="text-blue-400 hover:text-white text-sm transition-colors font-bold flex items-center gap-2">
                            <span>•</span> {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}