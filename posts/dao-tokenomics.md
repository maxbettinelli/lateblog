---
title: "Current DAO Tokenomics"
subtitle: "A look into a handful of experimenatal governance models"
date: "2022-07-17"
---

# Token-Based Governance Models

> DAOs continue to pop up regularly, each with a unique governance strategy. Some lead to successful projects, while others fail quickly. DAOs cannot rely on the same model or standard since each has a special function. This article will discuss some of the existing DAOs, and how they have gone about launching a governance token.

# Eligibility Strategies

## Fungible Token Airdrop(s)

### LooksRare:

One fascinating approach to governance combines publicly available data and on-chain participation. Rather than providing a list of tasks to complete in the future, LooksRare took a retroactive snapshot of all wallet accounts that traded 3+ eth on OpenSea, the largest NFT marketplace, within a six-month time window. This snapshot provided a concrete, non-arbitrary metric to determine eligibility. Additionally, users had to claim the rewards within a specific window - or those tokens would go to the underlying protocol treasury. One of the improvements LooksRare has over OpenSea lies within its revenue-sharing model. Each transaction you complete on LooksRare generates a fee that goes back to the token holders rather than the company (or protocol) itself.

Although this method worked very smoothly initially, there are still some nuances with the emission structure. Similar to other protocols within crypto, or more recently referred to as web 3, vesting arrangements are concise, and founders can cash out at these given intervals - 6 mo, 1 yr, 2yr, etc. I do not believe this protocol and the founders are playing a short-term game; however, many token holders and market participants maintain a merited, wary sentiment based on previous experience. (getting rugged!)


![LooksRare Tradeable Tokens: Emissions Rate](/public/images/looksrare-token-release.png)
LooksRare Tradeable Tokens: Emissions Rate

### Ethereum Name Service (ENS):

The most popular naming service on Ethereum decided to reward its earliest community members by providing 25% of the overall token supply to the wallets that held a .eth domain name. There were over 137,000 eligible wallet addresses, which all received a denomination of tokens based on three different factors.

1. .062 * Length of registration in days
2. .27 * Length of ownership from first registered name in days
3. 2x multiple if set as primary name (for instance, setting max.eth to my primary wallet address 0x…0e07)

ENS performed this airdrop strategy retroactively, eliminating profit-seekers trying to "game the system" once they understood the criteria. This retroactive strategy ensures governance falls with the early adopters who used the protocol for its technological capabilities and potential rather than for a quick profit. The $ENS tokens airdropped allows for a vote in governance proposals and a way to delegate your vote(s) to a community member you trust.


[Ethereum Name Service Emissions](/public/images/ens-emissions.png)
Ethereum Name Service Emissions

## Non Fungible Token Models

### IndexCoop: Collectooors & $JPG Governance:

IndexCoop's protocol is known for its many decentralized funds. Each fund represents a different part of the industry and allows for a broader, more diversified approach to purchasing crypto assets. IndexCoop launched its $JPG fund, which provides exposure to some of the most sought-after NFTs. These include CryptoPunks, BAYC, Fidenza, Squiggles, Sandbox, XCOPY, and more. The price points for many of these collections range in the $50,000-$100,000+ range and can be tricky (or impossible) for collectors to purchase, so this fund provides a cheaper alternative.

The value of holding a Collectooors NFT by IndexCoop lies in the voting rights. Each NFT allows the holder to vote on the inclusion of a specific NFT or vault of NFTs.

### Nouns DAO:

Nouns DAO provides an example of the power and flexibility behind NFT governance. One noun is raffled daily, with 100% of the proceeds going into the treasury. The current treasury sits at ~28,000 eth or $35 million—those holding the Nouns NFT vote on future governance proposals and decide how to allocate the treasury. The Nouns NFT holders engage with all parts of the DAO - from branding to treasury management - via a token-gated voting mechanism.


[Example of executed Nouns DAO proposal](/public/images/nounsdao-governance-example.png)
Example of executed Nouns DAO proposal

### On Chain Participation

Bright Moments DAO launched a year ago, and I have followed it along the way. The tokenomics and DAO formation can quickly become confusing, so I'll write a simplified explanation, sparing some details. The core team travels around the physical world, minting 1000 NFTs representing each city along the way. After ten cities, the idea is that there will be a global community representing the most distant parts of the world. This community represents international artists, creators, builders, crypto-curious individuals, students, professors, executives, and everything else you can imagine. As far as I have looked, I've never found a project that aligns such a large and distant group together. Again, like all projects, the governance is highly experimental and continuously evolving.

In this case, the earliest contributors received an ERC-20 token, which has more recently been diluted into one "digital city" - representing 1000 of the 10,000 total NFTs. The other 9,000 derive from 1,000 in 9 worldwide cities, each token containing equal voting, governance, and ownership rights. The 10,000 NFTs represent 100% ownership of the Bright Moments DAO. So, holding 100 NFTs gives you 1% ownership of the project. A single entity cannot complete the process of traveling around the globe in a single month or even a year. So, a temporary governance structure had to be in place before a large enough group of outstanding NFTs. Again, this is where I believe the process of progressive decentralization will play a significant role for DAOs in the future. There is a necessary tradeoff between speed for an operating team and transparency for everybody involved; this is one potential method for operating a DAO.

### Arbitrum Odyssey:

In June 2022, Arbitrum announced a series of tasks that would reward those who completed them with NFTs. This process lasts only eight weeks and does not favor anyone who previously used the protocol. The Arbitrum Odyssey may be an intelligent way to bring new users onto the protocol, potentially setting up a multifaceted DAO design. Here is how to follow along.



[Week 1 Statistics from the Arbitrum Odyssey](/public/images/arbitrum-odyssey-dune.png)
Week 1 Statistics from the Arbitrum Odyssey

### Combination and Interoperability

Specifically, when it comes to University DAOs, it is vital to realize what you are voting on and who gets a say in that vote. For instance, an external company should have a voice in where a hackathon will be located but should not vote on the specific project a student or group wants to work on at a casual hackathon. (unless there is some direct involvement within the given task) When aiming to maximize students' motivation, granting them the freedom to make their own decisions remains crucial.

This situation reveals that a traditional, binary approach would not be fit for a blockchain club within a university. This reason is why I advise caution with directly launching an ERC-20 for fundraising, as expectations and non-aligned participation may interfere with student freedom for experimentation. Of course, this thought process is only the case when a vast majority of decision-making occurs via Snapshot or a token-gated, on-chain voting tool.

I am passionate and excited about governance models because creativity is the only limiting factor. One example is giving out membership cards with special access to specific channels and votes. An example list of membership tiers within a student organization may include:

1. Current Students
2. Alumnus Members
3. External Researchers
4. Sponsors
5. Project XYZ

Ex. In a hypothetical situation, say Mustang DAO wants to organize a hackathon with many different universities, student groups, and external participants. If certain club members currently working on Project XYZ were deciding whether to continue the project or go in a new direction, then it would make sense to bound that vote to only those with a stake in the given project. At the moment, much of this voting is transparent and publicly available. Yet, in the future, much of this decision-making will happen more anonymously through zero-knowledge proofs. Without diving too deep into zk-proofs, they allow one party to demonstrate they know specific information without revealing the actual information. This security mechanism preserves the underlying data and has broad applications. Explore more [here](https://medium.com/edge-elections/what-is-a-zero-knowledge-proof-aebe33cb47af).

### Issues
A prominent issue for protocols trying to release a token revolves around "farming the system" or trying to game the system determined by the protocol. On-chain metrics are both a beauty and a curse for crypto protocols. On the one hand, you can identify who has interacted with a given protocol and reward them. Conversely, the initial community airdrop is often the first time the open market has a chance to value the underlying protocol. Users can instantly trade ERC-20 or ERC-721 tokens across decentralized exchanges such as Uniswap. Two groups emerge from these airdrops: users who made a list (often cash out right away) and those who missed the airdrop. (who often FOMO in and purchase the outstanding token)

**This contrast creates a clear incentive to participate in as many protocols as possible before they launch an outstanding native protocol token.**

Large companies or groups of people aim to create as many wallet addresses as possible and interact with the protocol in a way that will deem them eligible for the airdrop.

***Farming Example:***

Let's say a new decentralized exchange is launching on a layer two protocol. I use my MetaMask account (funded with $1000 USDC) to log in to the underlying protocol and perform a handful of swaps with different token pairs. After I complete a handful of trades, I create a new MetaMask account, send over the same $1000 USDC I started with (minus the minimal transaction fees), and repeat the process 19 times.

Now, the underlying protocol announces that there will be a retroactive airdrop for users who performed at least two swaps on the protocol. Here are some example figures for the fabricated $FARM airdrop:

- 15,000 wallets w/ 1 swap
- 10,000 wallets w/ 2+ swaps
- Trading price for $FARM on decentralized exchange: $100 (assuming $100 million valuation)
- 20% of total $FARM supply within airdrop (200,000 of 1,000,000 tokens)

*Rather than being airdropped 1/10,000 of the $FARM airdrop, the farmer gains 1/500th.*

Farmer Payout: Airdrop Formula & Calculation

**Number of tokens * Proportional share of tokens * Trading Price**

**Farmed:** 200,000 $FARM * (1/500) * $100 = $40,000

**Not-farmed:** 200,000 $FARM * (1/10,000) * $100 = $2,000

**Farmer Net Profit:** $38,000

If the entire farming process only took 2 hours (~6 min/wallet creation & swaps), the farmer pockets an excellent $19,000/hr.

## Wrapping Up

### There is no correct answer.

The DAO landscape is far too new and ripe with innovation to have a perfect model settled as the template. Simultaneous experiments are happening across science, finance, education, sports, and many more. Each DAO needs a different model; some opt for transparency and purely on-chain action, while others prefer a more private, traditional operation approach. Regardless of the model the DAO chooses to adopt, there remain common themes.

### No Code DAO Tooling

Here is a list of some standard, valuable tools for creating a DAO:

1. [Mirror](https://mirror.xyz/dashboard)
- Allows for easy writing, fundraising, token creation, and more. Many simple, built-in tools are ready to explore.
2. [Snapshot](https://snapshot.org/#/)
- Allows for a simple way to token-gate decisions via voting.
This is NOT entirely on-chain but does imbed nicely with many crypto features.
3. [Gnosis-safe](https://gnosis-safe.io/)
- Allows multiple teammates to require a transaction rather than one persona having full access to a treasury or existing funds.
- Extremely important for safety, percentages of a hack plummet.
4. [Discord](https://discord.com/)
- The most popular messaging system for crypto and NFT projects.
- An excellent tool for rallying the community and sending announcements
5. [Collab.Land](https://www.collab.land/)
- A great tool to pair with discord to token-gate certain chats or channels with a specific ERC-20, 721, or 1155 requirement.
All-in-One DAO Managers
1. [Aragon](https://aragon.org/)
- An all-in-one tool that allows you to create your DAO, launch your governance mechanism, and more. Plus, it's all open source!
2. [DAOStack](https://alchemy.daostack.io/)
- An all-in-one account manager for DAOs, like WordPress helps less technical users build a website.
3. [Colony](https://colony.io/)
- A combined DAO tool for governance, launching tokens, and payments.
Contains built-in measures to prioritize efficient decisions and bypass via discarding unnecessary voting.
4. [Tally](https://www.tally.xyz/)
- Includes forum-based discussions as well as showing voting statistics (i.e. voting power, proposals sent, DAO involvements)

New tools are constantly popping up within the crypto ecosystem. This list is by no means comprehensive but will allow you to launch and experiment quickly. The open source nature of the ecosystem provides rapid development and creativity. Stay on the lookout for more exciting tools!