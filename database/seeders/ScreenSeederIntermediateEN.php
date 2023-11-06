<?php

namespace Database\Seeders;

use App\Models\Screen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use  App\Services\LetterConverter;

class ScreenSeederIntermediateEN extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $converter = new LetterConverter();
        $screens = [

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 41, 'title' => 'Common English Words - 1', 'content_type' => 'sentences', 'content' => 'out part work too minute is they if him be say good door street',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 41, 'title' => 'Common English Words - 2', 'content_type' => 'sentences', 'content' => 'child to tree then she for take find paper make there parents',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 41, 'title' => 'Common English Words - 3', 'content_type' => 'sentences', 'content' => 'which animal high think into food room he foot place one small at it',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 41, 'title' => 'Common English Words - 4', 'content_type' => 'sentences', 'content' => 'window parent on black like get man school this has day so when way up we',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 41, 'title' => 'Common English Words - 5', 'content_type' => 'sentences', 'content' => 'use look or on life air second what money a side do field day with when',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 41, 'title' => 'Common English Words - 6', 'content_type' => 'sentences', 'content' => 'city year policeman car week out picture know young world',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 41, 'title' => 'Common English Words - 7', 'content_type' => 'sentences', 'content' => 'the in body year will work see teacher hand our nurse student',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 41, 'title' => 'Common English Words - 8', 'content_type' => 'sentences', 'content' => 'his time child first are doctor where all were but as',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 41, 'title' => 'Common English Words - 9', 'content_type' => 'sentences', 'content' => 'head friend that family from call not give who country place',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 41, 'title' => 'Common English Words - 10', 'content_type' => 'sentences', 'content' => 'power house come person go school heat white eye hour',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 41, 'title' => 'Common English Words - 11', 'content_type' => 'sentences', 'content' => 'country was music big right can of and week tell by tell',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 12, 'exercise_id' => 41, 'title' => 'Common English Words - 12', 'content_type' => 'sentences', 'content' => 'come now have what water friend long state',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 13, 'exercise_id' => 41, 'title' => 'Common English Words - 13', 'content_type' => 'sentences', 'content' => 'home important you book back month her car family minute first',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 14, 'exercise_id' => 41, 'title' => 'Common English Words - 14', 'content_type' => 'sentences', 'content' => 'come see she be can you if will window up was high man out friend door',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 15, 'exercise_id' => 41, 'title' => 'Common English Words - 15', 'content_type' => 'sentences', 'content' => 'place say nurse week doctor year back out policeman for house street',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 16, 'exercise_id' => 41, 'title' => 'Common English Words - 16', 'content_type' => 'sentences', 'content' => 'school were city the heat where day head at know room right we on field',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 17, 'exercise_id' => 41, 'title' => 'Common English Words - 17', 'content_type' => 'sentences', 'content' => 'water world one tell give power good way eye now get look air second home has',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 18, 'exercise_id' => 41, 'title' => 'Common English Words - 18', 'content_type' => 'sentences', 'content' => 'day small friend hand paper or think by on are not teacher use important child time picture',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 19, 'exercise_id' => 41, 'title' => 'Common English Words - 19', 'content_type' => 'sentences', 'content' => 'when to life person month there parents state country who place',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 20, 'exercise_id' => 41, 'title' => 'Common English Words', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 1', 'content_type' => 'sentences', 'content' => 'past manager gasp transit fall task flask pass table out by glass jazz',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 2', 'content_type' => 'sentences', 'content' => 'has lash anger chain to empty sass jazz been of in slash list flash',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 3', 'content_type' => 'sentences', 'content' => 'lash back surprise vase gas band way club moon glass president class',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 4', 'content_type' => 'sentences', 'content' => 'fast in trip half pass off half has clown horror tires food master',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 5', 'content_type' => 'sentences', 'content' => 'anybody mass task ask schedule task glass pants together with slash',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 6', 'content_type' => 'sentences', 'content' => 'away task slash fast flash out mass prices jazz text marks up walk',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 7', 'content_type' => 'sentences', 'content' => 'burn gasp full glass media jazz sass of of down half flask hour walk ',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 8', 'content_type' => 'sentences', 'content' => 'fast card had slash amazement out flask water mass asleep gasp lash ',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 9', 'content_type' => 'sentences', 'content' => 'daffodil and jar half task of pass flying full briskly',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 42, 'title' => 'Easy Home Row Words', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 1', 'content_type' => 'sentences', 'content' => 'such hall van dutch hutch top scotch go car eat whiz flash zero munch',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 2', 'content_type' => 'sentences', 'content' => 'wall eye ring crutch clash hat hatch boy wax truck ant pig fuzz red',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 3', 'content_type' => 'sentences', 'content' => 'not tell patch dash thrash punch gash log rash dutch well fizz cat',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 4', 'content_type' => 'sentences', 'content' => 'crash mop mash saw kite owl crutch fall crutch punch key yes watch pet',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 5', 'content_type' => 'sentences', 'content' => 'hot rat clutch dutch call cry snatch vase batch oil ask scratch gun',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 6', 'content_type' => 'sentences', 'content' => 'queen fly joy bunch scrunch much trash sun ball yes man sing quiz fog',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 7', 'content_type' => 'sentences', 'content' => 'lunch ink hatch king cow buzz touch batch catch match ugly jazz splash',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 8', 'content_type' => 'sentences', 'content' => 'wax hutch clutch scrunch fly hatch oil ask whiz wall sun king ugly',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 9', 'content_type' => 'sentences', 'content' => 'jazz clash ant cat thrash fizz mash such bunch owl quiz yes hall watch',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 10', 'content_type' => 'sentences', 'content' => 'red batch match pet crutch scratch cry queen car crutch eat gash buzz',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 43, 'title' => 'Easy Top Row Words', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 1', 'content_type' => 'sentences', 'content' => 'axe mix bean acne vex cam vex annex max vex annex cab cane beam cane',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 2', 'content_type' => 'sentences', 'content' => 'acme annex bean cam bean cab cam max acme vex cab vex man van bean vex',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 3', 'content_type' => 'sentences', 'content' => 'mix vex cave cam van max bane cab annex beam max van van man annex man',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 4', 'content_type' => 'sentences', 'content' => 'annex beam nab axe acne annex annex vex axe cane mean men annex max',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 5', 'content_type' => 'sentences', 'content' => 'nave maze cam vex men mix mix man annex beam men annex ban axe nix van',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 6', 'content_type' => 'sentences', 'content' => 'vex men cave vex cane max name cave annex vex cab cab cave vex axe',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 7', 'content_type' => 'sentences', 'content' => 'annex bean vex mix max annex cam acne cam cam cab men cab mix axe van',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 8', 'content_type' => 'sentences', 'content' => 'max nix nab annex mean vex axe vex annex bean cave beam acme annex',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 9', 'content_type' => 'sentences', 'content' => 'bean beam beam vex van cab annex annex annex van axe maze vex vex cane',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 1', 'content_type' => 'sentences', 'content' => 'Leaf Leg Mouse Air Fish Quilt Oatmeal Nest Question Yarn Nose Key Moon',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 2', 'content_type' => 'sentences', 'content' => 'Joke Panda Clock Hat Zebra Monkey Ball Xenon Rain Dog Sun Toy Rocket',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 3', 'content_type' => 'sentences', 'content' => 'Game Tree Snake Rabbit Vase Umbrella Water X-ray Kite Girl Desk Earth',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 4', 'content_type' => 'sentences', 'content' => 'Grass Van Book Table Arm Zoo Pan Eagle Queen Cat Xylophone Owl',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 5', 'content_type' => 'sentences', 'content' => 'Necklace Ice House Frog Snowman Car Bird Violin Eye Pencil Unicorn ',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 6', 'content_type' => 'sentences', 'content' => 'Wagon Apple Yellow Lamp Ocean Door Flower Jump Jacket Horse Window',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 7', 'content_type' => 'sentences', 'content' => 'Necklace Pencil Rocket Clock Queen Moon Key Pan Leaf Mouse Cat Yak',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 8', 'content_type' => 'sentences', 'content' => 'Question Oatmeal Eagle Table Leg Apple Fish Jump Game Quilt Arm Yellow',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 1', 'content_type' => 'letters', 'content' => "; '’’ ; '’’ ; '’’ ; '’’ ; '’’ ; '’’ ; '’’ ; '’’ '’’ ;;; '’",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 2', 'content_type' => 'sentences', 'content' => "hadn't you're I'm you'll didn't who's how'll let's not've why's it's",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 3', 'content_type' => 'letters', 'content' => '; /// ; /// ; /// ; /// ; /// ; /// ; /// ;;; / ;;;',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 4', 'content_type' => 'sentences', 'content' => 'here/there now/then where/when yes/no up/down in/out high/low left/right first/last fast/slow ',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 5', 'content_type' => 'sentences', 'content' => "don't/do won't/would couldn't/could wasn't/was can't/can didn't/did isn't/is",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 6', 'content_type' => 'sentences', 'content' => "Isn't it lovely to incorporate apostrophes in your writing? It might have been a bit challenging before this exercise!",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 7', 'content_type' => 'sentences', 'content' => "Didn't you realize: you can/will type faster? Just dedicate more time/effort daily; you'll see!",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 46, 'title' => 'Basic Punctuation', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 1', 'content_type' => 'letters', 'content' => '; ??? : ??? ; ??? ; ??? ; ??? ; ??? ; ??? ;;; ?? ::: ??',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 2', 'content_type' => 'sentences', 'content' => 'what? seriously? where? what? who? when? how?',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 3', 'content_type' => 'letters', 'content' => '; """ ; """ ; """ ; """ ; """ ;;; "" ;; "" ; """',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 4', 'content_type' => 'sentences', 'content' => '"Learning is an adventure." "Challenges make us grow." "Knowledge empowers us."',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 5', 'content_type' => 'letters', 'content' => 'l ::: l ::: l ::: l ::: l ::: l ::: lll ;; lll ;; l ; ll :::',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 6', 'content_type' => 'sentences', 'content' => 'Acquire these: Exchange those: Swap these: for those:',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 47, 'title' => 'Intermediate Punctuatio', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 48, 'title' => 'Quick Sentences - 1', 'content_type' => 'sentences', 'content' => 'Embrace change, adapt wisely.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 48, 'title' => 'Quick Sentences - 2', 'content_type' => 'sentences', 'content' => 'Dream big, work hard.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 48, 'title' => 'Quick Sentences - 3', 'content_type' => 'sentences', 'content' => 'Find joy in small moments.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 48, 'title' => 'Quick Sentences - 4', 'content_type' => 'sentences', 'content' => 'Learn from your mistakes, grow stronger.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 48, 'title' => 'Quick Sentences - 5', 'content_type' => 'sentences', 'content' => 'Spread kindness, create happiness.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 48, 'title' => 'Quick Sentences - 6', 'content_type' => 'sentences', 'content' => 'Stay curious, keep exploring.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 48, 'title' => 'Quick Sentences - 7', 'content_type' => 'sentences', 'content' => 'Chase passions, not possessions.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 48, 'title' => 'Quick Sentences - 8', 'content_type' => 'sentences', 'content' => 'Focus on progress, not perfection.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 48, 'title' => 'Quick Sentences - 9', 'content_type' => 'sentences', 'content' => 'Make memories, not excuses.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 48, 'title' => 'Quick Sentences - 10', 'content_type' => 'sentences', 'content' => 'Listen more, talk less.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 48, 'title' => 'Quick Sentences - 11', 'content_type' => 'sentences', 'content' => 'Live in the present, plan for the future.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 12, 'exercise_id' => 48, 'title' => 'Quick Sentences - 12', 'content_type' => 'sentences', 'content' => 'See the beauty in simplicity.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 13, 'exercise_id' => 48, 'title' => 'Quick Sentences - 13', 'content_type' => 'sentences', 'content' => 'Celebrate every victory, no matter how small.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 14, 'exercise_id' => 48, 'title' => 'Quick Sentences - 14', 'content_type' => 'sentences', 'content' => 'Never stop learning, never stop growing.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 15, 'exercise_id' => 28, 'title' => 'Quick Sentences', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 1', 'content_type' => 'sentences', 'content' => "In a quiet village, there lived a curious boy named Timmy. After school, he'd rush to the nearby forest, brimming with tall trees and hidden wonders.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 2', 'content_type' => 'sentences', 'content' => "One day, Timmy found a peculiar rock, glowing with an enchanting pattern. Upon touching it, a tiny talking squirrel named Sammy appeared, introducing Timmy to the forest's magic.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 3', 'content_type' => 'sentences', 'content' => "The rock, Sammy explained, could transport them to a world of talking animals and wonders. Timmy, eager for adventure, closed his eyes, touched the rock, and they were in a meadow filled with dancing butterflies.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 4', 'content_type' => 'sentences', 'content' => "Together, Timmy and Sammy went on many adventures, meeting wise owls and friendly bears. Each day was a new, exciting journey filled with laughter and discovery.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 5', 'content_type' => 'sentences', 'content' => "As the sun set, Timmy knew it was time to go home. Sammy led him back to the rock, where they said goodbye.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 6', 'content_type' => 'sentences', 'content' => "Back in the village, Timmy shared his magical adventures with friends and family, cherishing the enchantment hidden within the forest.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 7', 'content_type' => 'sentences', 'content' => "The curious boy, Timmy, continued to dream big, finding magic in unexpected places, knowing that even a simple glowing rock could hold extraordinary secrets.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 49, 'title' => 'Short Paragraphs', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 50, 'title' => 'Speed Drills - 1', 'content_type' => 'sentences', 'content' => 'Patience is the key to mastering any skill.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 50, 'title' => 'Speed Drills - 2', 'content_type' => 'sentences', 'content' => 'A journey of a thousand miles begins with a single step.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 50, 'title' => 'Speed Drills - 3', 'content_type' => 'sentences', 'content' => 'Kindness is a language that everyone can understand.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 50, 'title' => 'Speed Drills - 4', 'content_type' => 'sentences', 'content' => "Knowledge is the compass that guides us through life's challenges.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 50, 'title' => 'Speed Drills - 5', 'content_type' => 'sentences', 'content' => 'The hardest decisions often lead to the greatest rewards.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 50, 'title' => 'Speed Drills - 6', 'content_type' => 'sentences', 'content' => 'Honesty is the foundation of trust in any relationship.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 50, 'title' => 'Speed Drills - 7', 'content_type' => 'sentences', 'content' => 'Laughter is the best medicine for a weary soul.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 50, 'title' => 'Speed Drills - 8', 'content_type' => 'sentences', 'content' => 'In the darkness, stars shine the brightest.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 50, 'title' => 'Speed Drills - 9', 'content_type' => 'sentences', 'content' => 'The beauty of nature can heal a wounded heart.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 50, 'title' => 'Speed Drills - 10', 'content_type' => 'sentences', 'content' => 'Dreams have the power to turn the impossible into reality.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 28, 'title' => 'Speed Drills', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 1', 'content_type' => 'sentences', 'content' => 'Once upon a time, in a quaint village nestled among rolling hills, there lived a baker named Ella. She had a bakery filled with delicious treats: warm, fragrant breads, mouthwatering pastries, and, her specialty, luscious chocolate cakes!',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 2', 'content_type' => 'sentences', 'content' => 'One day, as Ella was preparing her famous chocolate cake, she realized she was out of sugar. Panic set in, but Ella, being resourceful and determined, decided to embark on a journey to the nearby town to buy some sugar.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 3', 'content_type' => 'sentences', 'content' => "She put on her apron, tied her shoes, and, with a basket in hand, ventured out into the bustling village. Along the way, she met a cheerful, singing bird who chirped, \"Why the long face, dear Ella?\" Ella sighed and replied, \"I've run out of sugar for my cakes.\"",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 4', 'content_type' => 'sentences', 'content' => 'The bird, with a mischievous twinkle in its eye, said, "Worry not, Ella, for I know a hidden grove where sugar can be found." Intrigued, Ella followed the bird, and they walked through the forest, with branches rustling and leaves crunching beneath their feet.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 5', 'content_type' => 'sentences', 'content' => 'As they arrived at the grove, Ella was astonished. It was a magical place, with sugar crystals glistening like diamonds on the trees. Ella, in awe, said, "Thank you, kind bird!" She filled her basket with sugar and returned home, where she baked the most extraordinary chocolate cake the village had ever tasted.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 6', 'content_type' => 'sentences', 'content' => "Word of Ella's magical cake spread like wildfire, and people from all around the land flocked to her bakery. Ella's business flourished, and she was filled with happiness and gratitude.",  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 7', 'content_type' => 'sentences', 'content' => 'Ella learned that sometimes, even in the face of adversity, unexpected adventures can lead to the sweetest rewards, and life, with its twists and turns, can be as delightful as her chocolate cakes.',  'extra' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up', 'content_type' => 'badge', 'content' => '',  'extra' => 0, 'locale' => 'en'],

            // ['lesson_id' => 1, 'order' => 1, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 1', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 2, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 2', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 3, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 3', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 4, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 4', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 5, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 5', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 6, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 6', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 7, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 7', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 8, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 8', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 9, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 9', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 10, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 10', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 11, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 11', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 12, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 12', 'content_type' => 'sentences', 'content' => '',  'extra' => 60, 'locale' => 'en'],
        ];

        foreach ($screens as $screenData) {
            Screen::create($screenData);
        }
    }
}
