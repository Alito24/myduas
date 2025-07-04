const duas = [
    {
        section: 'protection',
        title: 'Protection from devils',
        text: 'My Lord, I seek refuge in You from the incitements of the devils, (97) And I seek refuge in You, my Lord, lest they be present with me. (98)',
        atext: 'رَّبِّ أَعُوذُ بِكَ مِنۡ هَمَزَٰتِ ٱلشَّيَٰطِينِ 97 وَأَعُوذُ بِكَ رَبِّ أَن يَحۡضُرُونِ 98',
        book: 'Quran 23:97-98'
    },
    {
        section: 'protection',
        title: 'Protection from devils when entering the bathroom',
        text: 'O Allah, I seek refuge with You from male and female devils.',
        atext: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        book: "Sunan an-Nasa'i 19"
    },
    {
        section: 'protection',
        title: 'Protection from evil creation',
        text: 'I seek refuge in the Perfect Word of Allah from the evil of what He created',
        atext: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
        book: 'Sahih Muslim 2708b, 2709a'
    },
    {
        section: 'protection',
        title: 'Protection from Hellfire',
        text: 'Our Lord! surely we believe, therefore forgive us our faults and save us from the chastisement of the fire.',
        atext: 'ٱلَّذِينَ يَقُولُونَ رَبَّنَآ إِنَّنَآ ءَامَنَّا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ ٱلنَّارِ',
        book: 'Quran 3:16'
    },
    {
        section: 'protection',
        title: 'Protection from diseases',
        text: 'O Allah, I seek refuge in You from leprosy, madness, elephantiasis, and evil diseases.',
        atext: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الأَسْقَامِ',
        book: 'Sunan Abi Dawud 1554'
    },
    {
        section: 'protection',
        title: 'Protection from hardship',
        text: 'O Allah, there is no ease other than what You make easy. If You please You ease sorrow.',
        atext: 'اللَّهُمَّ لاَ سَهْلاً إِلّاَ مَا جَعَلّتَهٌ سَهْلاً وَأَنّتَ تَجّعَلَ الحَزَنَ إِذَا شِئتَ سَهْلاً',
        book: 'Sahih Ibn Hibban 2427'
    },
    {
        section: 'protection',
        title: 'Protection from anxiety',
        text: 'My Lord! Open my heart, and make my task easy for me, loosen the knot in my tongue so that they may understand my speech.',
        atext: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',
        book: 'Quran 20:25-28'
    },
    {
        section: 'protection',
        title: "Protection from one's nafs",
        text: 'Oh Allah, I seek protection in you from the evil of my hearing, from the evil of my sight, from the evil of my tongue, from the evil of my heart, and from the evil of my passion.',
        atext: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ سَمْعِي وَمِنْ شَرِّ بَصَرِي وَمِنْ شَرِّ لِسَانِي وَمِنْ شَرِّ قَلْبِي وَمِنْ شَرِّ مَنِيِّي',
        book: 'Sunan Abi Dawud 1551'
    },
    {
        section: 'protection',
        title: "Protection from deviation",
        text: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.',
        atext: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ',
        book: 'Quran 3:8'
    },
    {
        section: 'forgiveness',
        title: "Wronging one's self",
        text: 'Our Lord! We have wronged ourselves. If You do not forgive us and have mercy on us, we will certainly be lost.',
        atext: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإنْ لَمْ تَغْفِرْلَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الخَاسِرِينَ',
        book: 'Quran 7:23'
    },
    {
        section: 'health',
        title: "Body, hearing and eyesight",
        text: 'Our Lord! We have wronged ourselves. If You do not forgive us and have mercy on us, we will certainly be lost.',
        atext: 'اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ',
        book: 'Sunan Abi Dawud 5090'
    },
    {
        section: 'health',
        title: "Dua of Prophet Ayyub (AS)",
        text: 'Behold, disease has struck me and You are the Most Merciful of those that are merciful.',
        atext: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
        book: 'Quran 21:83'
    },
    {
        section: 'wealth',
        title: "Knowledge, provision and acceptable deeds",
        text: 'O Allah, I ask You for beneficial knowledge, goodly provision and acceptable deeds',
        atext: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً',
        book: 'Sunan Ibn Majah 925'
    },
    {
        section: 'wealth',
        title: "Laziness, stinginess and debt",
        text: 'O Allah, I seek refuge in You from sadness, grief, helplessness, laziness, being stingy, overwhelming debt, and the overpowering of men.',
        atext: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
        book: 'Jami` at-Tirmidhi 3484'
    },
    {
        section: 'knowledge',
        title: "Knowledge, provision and acceptable deeds",
        text: 'O Allah, I ask You for beneficial knowledge, goodly provision and acceptable deeds',
        atext: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً',
        book: 'Sunan Ibn Majah 925'
    },
    {
        section: 'marriage',
        title: 'Righteous spouse and children',
        text: 'Our Lord! Bless us with ˹pious˺ spouses and offspring who will be the joy of our hearts, and make us models for the righteous.',
        atext: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
        book: 'Quran 25:74'
    },
    {
        section: 'marriage',
        title: 'For a newly-wed couple',
        text: 'May Allah grant you blessings, send blessings upon you, and bring you together in goodness.',
        atext: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي الْخَيْرِ',
        book: 'Sunan al-Tirmidhī 1091'
    }
  ];
