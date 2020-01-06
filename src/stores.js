import { writable } from 'svelte/store'

export const currSection = writable('intro')
export const currStep = writable(0)
export const relation = writable(1)
export const age =  writable(3)
export const gender = writable(0)
export const questions = writable([
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} disobedient.`,
        verbs: ['be'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [
            {
                question: (subj, verbs) => `${verbs[0]} uncooperative, stubborn, or doesn't follow rules.`,
                verbs: ['be'],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `Can't wait as long or patiently as other people.`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `${verbs[0]} a lot more than other people.`,
                verbs: ['argue'],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `${verbs[0]} more temper tantrums than other people.`,
                verbs: ['have'],
                checked: false,
                level: 0,
                levelMax: 2,
            },
        ],
    },
    {
        question: (subject, verbs) => `${subject} often ${verbs[0]} rules or ${verbs[1]} in trouble`,
        verbs: ['break', 'get'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [],
    },
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} things that are risky or dangerous`,
        verbs: ['do'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [],
    },
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} impulsive or hyperactive`,
        verbs: ['be'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [
            {
                question: (subj, verbs) => `Blurt out words or interrupts more than other people.`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `Is hyperactive, can't sit still, or can't wait for their turn.`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `Acts without thinking more often than others.`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
        ],
    },
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} trouble paying attention`,
        verbs: ['have'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [],
    },
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} repetitive, rigid, or strange behaviors`,
        verbs: ['have'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [
            {
                question: (subj, verbs) => `Has habits or rituals they need to repeat over and over`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `Fixates on specific topics or has unusually intense interests.`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `Rocks they head or body, flaps arms or legs.`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `Has trouble discarding or parting with their things.`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
            {
                question: (subj, verbs) => `Has motor tics (e.g. eye blinking, shoulder shrugging) or vocal tics (e.g. throat clearing).`,
                verbs: [],
                checked: false,
                level: 0,
                levelMax: 2,
            },
        ],
    },
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} having problems in school`,
        verbs: ['be'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [],
    },
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} moody or sad`,
        verbs: ['be'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [],
    },
    {
        question: (subj, verbs) => `${subj} ${verbs[0]} unrealistic thoughts, fears, or worries`,
        verbs: ['have'],
        checked: false,
        level: 0,
        levelMax: 2,
        subquestions: [],
    },
])

export const verbs = {
    "be": {
        firstSingular: 'am',
        firstPlural: 'are',
        second: 'are',
        third: 'is',
    },
    "have": {
        firstSingular: 'have',
        firstPlural: 'have',
        second: 'have',
        third: 'has',
    },
    "do": {
        firstSingular: 'do',
        firstPlural: 'do',
        second: 'do',
        third: 'does',
    },
    "break": {
        firstSingular: 'break',
        firstPlural: 'break',
        second: 'break',
        third: 'breaks',
    },
    "get": {
        firstSingular: 'get',
        firstPlural: 'get',
        second: 'get',
        third: 'get',
    },
    "argue": {
        firstSingular: 'argue',
        firstPlural: 'argue',
        second: 'argue',
        third: 'argue',
    },
}
    

export const sectionValues = ['intro', 'behaviors', 'results']
export const relationValues = [
    {
        value: "Myself",
        default: "I",
        possessive: "My",
        identifies: 'I identify',
        verb: "firstSingular",
    },
    {
        value: "My loved one",
        default: "My loved one",
        possessive: "My loved one's",
        identifies: "My loved one identifies",
        verb: "third",
    },
    {
        value: "My friend",
        default: "My friend",
        possessive: "My friend's",
        identifies: "My friend identifies",
        verb: "third",
    },
    {
        value: "My student",
        default: "My student",
        possessive: "My student's",
        identifies: "My student identifies",
        verb: "third",
    },
    {
        value: "Other",
        default: "The young adult",
        possessive: "The young adult's",
        identifies: "The young adult identifies",
        verb: "third",
    }
]

export const ageValues = ['<17', 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, '28+']
export const genderValues = ['Female', 'Male', 'Non-Binary', 'Trans']
export const levelValues = ['Mild', 'Moderate', 'Severe']
