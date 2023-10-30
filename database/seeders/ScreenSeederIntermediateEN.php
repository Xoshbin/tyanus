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

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 41, 'title' => 'Common English Words - 1', 'content_type' => 'letters', 'content' => 'out part work too minute is they if him be say good door street',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 41, 'title' => 'Common English Words - 2', 'content_type' => 'letters', 'content' => 'child to tree then she for take find paper make there parents',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 41, 'title' => 'Common English Words - 3', 'content_type' => 'letters', 'content' => 'which animal high think into food room he foot place one small at it',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 41, 'title' => 'Common English Words - 4', 'content_type' => 'letters', 'content' => 'window parent on black like get man school this has day so when way up we',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 41, 'title' => 'Common English Words - 5', 'content_type' => 'letters', 'content' => 'use look or on life air second what money a side do field day with when',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 41, 'title' => 'Common English Words - 6', 'content_type' => 'letters', 'content' => 'city year policeman car week out picture know young world',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 41, 'title' => 'Common English Words - 7', 'content_type' => 'letters', 'content' => 'the in body year will work see teacher hand our nurse student',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 41, 'title' => 'Common English Words - 8', 'content_type' => 'letters', 'content' => 'his time child first are doctor where all were but as',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 41, 'title' => 'Common English Words - 9', 'content_type' => 'letters', 'content' => 'head friend that family from call not give who country place',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 41, 'title' => 'Common English Words - 10', 'content_type' => 'letters', 'content' => 'power house come person go school heat white eye hour',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 41, 'title' => 'Common English Words - 11', 'content_type' => 'letters', 'content' => 'country was music big right can of and week tell by tell',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 12, 'exercise_id' => 41, 'title' => 'Common English Words - 12', 'content_type' => 'letters', 'content' => 'come now have what water friend long state',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 13, 'exercise_id' => 41, 'title' => 'Common English Words - 13', 'content_type' => 'letters', 'content' => 'home important you book back month her car family minute first',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 14, 'exercise_id' => 41, 'title' => 'Common English Words - 14', 'content_type' => 'letters', 'content' => 'come see she be can you if will window up was high man out friend door',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 15, 'exercise_id' => 41, 'title' => 'Common English Words - 15', 'content_type' => 'letters', 'content' => 'place say nurse week doctor year back out policeman for house street',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 16, 'exercise_id' => 41, 'title' => 'Common English Words - 16', 'content_type' => 'letters', 'content' => 'school were city the heat where day head at know room right we on field',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 17, 'exercise_id' => 41, 'title' => 'Common English Words - 17', 'content_type' => 'letters', 'content' => 'water world one tell give power good way eye now get look air second home has',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 18, 'exercise_id' => 41, 'title' => 'Common English Words - 18', 'content_type' => 'letters', 'content' => 'day small friend hand paper or think by on are not teacher use important child time picture',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 19, 'exercise_id' => 41, 'title' => 'Common English Words - 19', 'content_type' => 'letters', 'content' => 'when to life person month there parents state country who place',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 20, 'exercise_id' => 41, 'title' => 'Common English Words', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 1', 'content_type' => 'letters', 'content' => 'past manager gasp transit fall task flask pass table out by glass jazz',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 2', 'content_type' => 'letters', 'content' => 'has lash anger chain to empty sass jazz been of in slash list flash',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 3', 'content_type' => 'letters', 'content' => 'lash back surprise vase gas band way club moon glass president class',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 4', 'content_type' => 'letters', 'content' => 'fast in trip half pass off half has clown horror tires food master',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 5', 'content_type' => 'letters', 'content' => 'anybody mass task ask schedule task glass pants together with slash',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 6', 'content_type' => 'letters', 'content' => 'away task slash fast flash out mass prices jazz text marks up walk',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 7', 'content_type' => 'letters', 'content' => 'burn gasp full glass media jazz sass of of down half flask hour walk ',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 8', 'content_type' => 'letters', 'content' => 'fast card had slash amazement out flask water mass asleep gasp lash ',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 42, 'title' => 'Easy Home Row Words - 9', 'content_type' => 'letters', 'content' => 'daffodil and jar half task of pass flying full briskly',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 42, 'title' => 'Easy Home Row Words', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 1', 'content_type' => 'letters', 'content' => 'such hall van dutch hutch top scotch go car eat whiz flash zero munch',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 2', 'content_type' => 'letters', 'content' => 'wall eye ring crutch clash hat hatch boy wax truck ant pig fuzz red',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 3', 'content_type' => 'letters', 'content' => 'not tell patch dash thrash punch gash log rash dutch well fizz cat',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 4', 'content_type' => 'letters', 'content' => 'crash mop mash saw kite owl crutch fall crutch punch key yes watch pet',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 5', 'content_type' => 'letters', 'content' => 'hot rat clutch dutch call cry snatch vase batch oil ask scratch gun',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 6', 'content_type' => 'letters', 'content' => 'queen fly joy bunch scrunch much trash sun ball yes man sing quiz fog',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 7', 'content_type' => 'letters', 'content' => 'lunch ink hatch king cow buzz touch batch catch match ugly jazz splash',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 8', 'content_type' => 'letters', 'content' => 'wax hutch clutch scrunch fly hatch oil ask whiz wall sun king ugly',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 9', 'content_type' => 'letters', 'content' => 'jazz clash ant cat thrash fizz mash such bunch owl quiz yes hall watch',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 43, 'title' => 'Easy Top Row Words - 10', 'content_type' => 'letters', 'content' => 'red batch match pet crutch scratch cry queen car crutch eat gash buzz',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 43, 'title' => 'Easy Top Row Words', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 1', 'content_type' => 'letters', 'content' => 'axe mix bean acne vex cam vex annex max vex annex cab cane beam cane',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 2', 'content_type' => 'letters', 'content' => 'acme annex bean cam bean cab cam max acme vex cab vex man van bean vex',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 3', 'content_type' => 'letters', 'content' => 'mix vex cave cam van max bane cab annex beam max van van man annex man',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 4', 'content_type' => 'letters', 'content' => 'annex beam nab axe acne annex annex vex axe cane mean men annex max',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 5', 'content_type' => 'letters', 'content' => 'nave maze cam vex men mix mix man annex beam men annex ban axe nix van',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 6', 'content_type' => 'letters', 'content' => 'vex men cave vex cane max name cave annex vex cab cab cave vex axe',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 7', 'content_type' => 'letters', 'content' => 'annex bean vex mix max annex cam acne cam cam cab men cab mix axe van',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 8', 'content_type' => 'letters', 'content' => 'max nix nab annex mean vex axe vex annex bean cave beam acme annex',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words - 9', 'content_type' => 'letters', 'content' => 'bean beam beam vex van cab annex annex annex van axe maze vex vex cane',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 44, 'title' => 'Easy Bottom Row Words', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 1', 'content_type' => 'letters', 'content' => 'Leaf Leg Mouse Air Fish Quilt Oatmeal Nest Question Yarn Nose Key Moon',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 2', 'content_type' => 'letters', 'content' => 'Joke Panda Clock Hat Zebra Monkey Ball Xenon Rain Dog Sun Toy Rocket',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 3', 'content_type' => 'letters', 'content' => 'Game Tree Snake Rabbit Vase Umbrella Water X-ray Kite Girl Desk Earth',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 4', 'content_type' => 'letters', 'content' => 'Grass Van Book Table Arm Zoo Pan Eagle Queen Cat Xylophone Owl',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 5', 'content_type' => 'letters', 'content' => 'Necklace Ice House Frog Snowman Car Bird Violin Eye Pencil Unicorn ',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 6', 'content_type' => 'letters', 'content' => 'Wagon Apple Yellow Lamp Ocean Door Flower Jump Jacket Horse Window',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 7', 'content_type' => 'letters', 'content' => 'Necklace Pencil Rocket Clock Queen Moon Key Pan Leaf Mouse Cat Yak',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization - 8', 'content_type' => 'letters', 'content' => 'Question Oatmeal Eagle Table Leg Apple Fish Jump Game Quilt Arm Yellow',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 45, 'title' => 'Shift Key and Capitalization', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 1', 'content_type' => 'letters', 'content' => "; '’’ ; '’’ ; '’’ ; '’’ ; '’’ ; '’’ ; '’’ ; '’’ '’’ ;;; '’",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 2', 'content_type' => 'letters', 'content' => "hadn't you're I'm you'll didn't who's how'll let's not've why's it's",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 3', 'content_type' => 'letters', 'content' => '; /// ; /// ; /// ; /// ; /// ; /// ; /// ;;; / ;;;',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 4', 'content_type' => 'letters', 'content' => 'here/there now/then where/when yes/no up/down in/out high/low left/right first/last fast/slow ',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 5', 'content_type' => 'letters', 'content' => "don't/do won't/would couldn't/could wasn't/was can't/can didn't/did isn't/is",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 6', 'content_type' => 'letters', 'content' => "Isn't it lovely to incorporate apostrophes in your writing? It might have been a bit challenging before this exercise!",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 46, 'title' => 'Basic Punctuation - 7', 'content_type' => 'letters', 'content' => "Didn't you realize: you can/will type faster? Just dedicate more time/effort daily; you'll see!",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 46, 'title' => 'Basic Punctuation', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 1', 'content_type' => 'letters', 'content' => '; ??? : ??? ; ??? ; ??? ; ??? ; ??? ; ??? ;;; ?? ::: ??',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 2', 'content_type' => 'letters', 'content' => 'what? seriously? where? what? who? when? how?',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 3', 'content_type' => 'letters', 'content' => '; """ ; """ ; """ ; """ ; """ ;;; "" ;; "" ; """',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 4', 'content_type' => 'letters', 'content' => '"Learning is an adventure." "Challenges make us grow." "Knowledge empowers us."',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 5', 'content_type' => 'letters', 'content' => 'l ::: l ::: l ::: l ::: l ::: l ::: lll ;; lll ;; l ; ll :::',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 47, 'title' => 'Intermediate Punctuation - 6', 'content_type' => 'letters', 'content' => 'Acquire these: Exchange those: Swap these: for those:',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 47, 'title' => 'Intermediate Punctuatio', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 48, 'title' => 'Quick Sentences - 1', 'content_type' => 'letters', 'content' => 'Embrace change, adapt wisely.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 48, 'title' => 'Quick Sentences - 2', 'content_type' => 'letters', 'content' => 'Dream big, work hard.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 48, 'title' => 'Quick Sentences - 3', 'content_type' => 'letters', 'content' => 'Find joy in small moments.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 48, 'title' => 'Quick Sentences - 4', 'content_type' => 'letters', 'content' => 'Learn from your mistakes, grow stronger.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 48, 'title' => 'Quick Sentences - 5', 'content_type' => 'letters', 'content' => 'Spread kindness, create happiness.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 48, 'title' => 'Quick Sentences - 6', 'content_type' => 'letters', 'content' => 'Stay curious, keep exploring.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 48, 'title' => 'Quick Sentences - 7', 'content_type' => 'letters', 'content' => 'Chase passions, not possessions.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 48, 'title' => 'Quick Sentences - 8', 'content_type' => 'letters', 'content' => 'Focus on progress, not perfection.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 48, 'title' => 'Quick Sentences - 9', 'content_type' => 'letters', 'content' => 'Make memories, not excuses.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 48, 'title' => 'Quick Sentences - 10', 'content_type' => 'letters', 'content' => 'Listen more, talk less.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 48, 'title' => 'Quick Sentences - 11', 'content_type' => 'letters', 'content' => 'Live in the present, plan for the future.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 12, 'exercise_id' => 48, 'title' => 'Quick Sentences - 12', 'content_type' => 'letters', 'content' => 'See the beauty in simplicity.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 13, 'exercise_id' => 48, 'title' => 'Quick Sentences - 13', 'content_type' => 'letters', 'content' => 'Celebrate every victory, no matter how small.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 14, 'exercise_id' => 48, 'title' => 'Quick Sentences - 14', 'content_type' => 'letters', 'content' => 'Never stop learning, never stop growing.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 15, 'exercise_id' => 28, 'title' => 'Quick Sentences', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 1', 'content_type' => 'letters', 'content' => "In a quiet village, there lived a curious boy named Timmy. After school, he'd rush to the nearby forest, brimming with tall trees and hidden wonders.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 2', 'content_type' => 'letters', 'content' => "One day, Timmy found a peculiar rock, glowing with an enchanting pattern. Upon touching it, a tiny talking squirrel named Sammy appeared, introducing Timmy to the forest's magic.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 3', 'content_type' => 'letters', 'content' => "The rock, Sammy explained, could transport them to a world of talking animals and wonders. Timmy, eager for adventure, closed his eyes, touched the rock, and they were in a meadow filled with dancing butterflies.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 4', 'content_type' => 'letters', 'content' => "Together, Timmy and Sammy went on many adventures, meeting wise owls and friendly bears. Each day was a new, exciting journey filled with laughter and discovery.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 5', 'content_type' => 'letters', 'content' => "As the sun set, Timmy knew it was time to go home. Sammy led him back to the rock, where they said goodbye.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 6', 'content_type' => 'letters', 'content' => "Back in the village, Timmy shared his magical adventures with friends and family, cherishing the enchantment hidden within the forest.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 49, 'title' => 'Short Paragraphs - 7', 'content_type' => 'letters', 'content' => "The curious boy, Timmy, continued to dream big, finding magic in unexpected places, knowing that even a simple glowing rock could hold extraordinary secrets.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 49, 'title' => 'Short Paragraphs', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 50, 'title' => 'Speed Drills - 1', 'content_type' => 'letters', 'content' => 'Patience is the key to mastering any skill.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 50, 'title' => 'Speed Drills - 2', 'content_type' => 'letters', 'content' => 'A journey of a thousand miles begins with a single step.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 50, 'title' => 'Speed Drills - 3', 'content_type' => 'letters', 'content' => 'Kindness is a language that everyone can understand.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 50, 'title' => 'Speed Drills - 4', 'content_type' => 'letters', 'content' => "Knowledge is the compass that guides us through life's challenges.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 50, 'title' => 'Speed Drills - 5', 'content_type' => 'letters', 'content' => 'The hardest decisions often lead to the greatest rewards.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 50, 'title' => 'Speed Drills - 6', 'content_type' => 'letters', 'content' => 'Honesty is the foundation of trust in any relationship.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 50, 'title' => 'Speed Drills - 7', 'content_type' => 'letters', 'content' => 'Laughter is the best medicine for a weary soul.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 50, 'title' => 'Speed Drills - 8', 'content_type' => 'letters', 'content' => 'In the darkness, stars shine the brightest.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 9, 'exercise_id' => 50, 'title' => 'Speed Drills - 9', 'content_type' => 'letters', 'content' => 'The beauty of nature can heal a wounded heart.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 10, 'exercise_id' => 50, 'title' => 'Speed Drills - 10', 'content_type' => 'letters', 'content' => 'Dreams have the power to turn the impossible into reality.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 11, 'exercise_id' => 28, 'title' => 'Speed Drills', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            ['lesson_id' => 10, 'order' => 1, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 1', 'content_type' => 'letters', 'content' => 'Once upon a time, in a quaint village nestled among rolling hills, there lived a baker named Ella. She had a bakery filled with delicious treats: warm, fragrant breads, mouthwatering pastries, and, her specialty, luscious chocolate cakes!',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 2, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 2', 'content_type' => 'letters', 'content' => 'One day, as Ella was preparing her famous chocolate cake, she realized she was out of sugar. Panic set in, but Ella, being resourceful and determined, decided to embark on a journey to the nearby town to buy some sugar.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 3, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 3', 'content_type' => 'letters', 'content' => "She put on her apron, tied her shoes, and, with a basket in hand, ventured out into the bustling village. Along the way, she met a cheerful, singing bird who chirped, \"Why the long face, dear Ella?\" Ella sighed and replied, \"I've run out of sugar for my cakes.\"",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 4, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 4', 'content_type' => 'letters', 'content' => 'The bird, with a mischievous twinkle in its eye, said, "Worry not, Ella, for I know a hidden grove where sugar can be found." Intrigued, Ella followed the bird, and they walked through the forest, with branches rustling and leaves crunching beneath their feet.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 5, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 5', 'content_type' => 'letters', 'content' => 'As they arrived at the grove, Ella was astonished. It was a magical place, with sugar crystals glistening like diamonds on the trees. Ella, in awe, said, "Thank you, kind bird!" She filled her basket with sugar and returned home, where she baked the most extraordinary chocolate cake the village had ever tasted.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 6, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 6', 'content_type' => 'letters', 'content' => "Word of Ella's magical cake spread like wildfire, and people from all around the land flocked to her bakery. Ella's business flourished, and she was filled with happiness and gratitude.",  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 7, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up - 7', 'content_type' => 'letters', 'content' => 'Ella learned that sometimes, even in the face of adversity, unexpected adventures can lead to the sweetest rewards, and life, with its twists and turns, can be as delightful as her chocolate cakes.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 10, 'order' => 8, 'exercise_id' => 51, 'title' => 'Intermediate Wrap-up', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'en'],

            // ['lesson_id' => 1, 'order' => 1, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 1', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 2, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 2', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 3, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 3', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 4, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 4', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 5, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 5', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 6, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 6', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 7, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 7', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 8, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 8', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 9, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 9', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 10, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 10', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 11, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 11', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 1, 'order' => 12, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - 12', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
        ];

        foreach ($screens as $screenData) {
            Screen::create($screenData);
        }
    }
}
