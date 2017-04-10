grunt test:browser --spec=components/signup/spec/**/*_spec.js

And then when I access http://127.0.0.1:4502/_SpecRunner.html I only see the 346 specs that match my glob.

Clicking on the name of a single one (e.g. http://127.0.0.1:4502/_SpecRunner.html?spec=Signup%20App%20%23render%20renders%20the%20header) runs just that test.



URLS:
>>
>> To run all tests, open the following URL:
>> http://127.0.0.1:4502/_SpecRunner.html
>>
>> Match spec file names:
>> http://127.0.0.1:4502/_SpecRunner.html?fileMatch=(draggable|groups)_list
>>
>> Match spec file paths:
>> http://127.0.0.1:4502/_SpecRunner.html?pathMatch=(core|models)
>>
>> Run each page of spec files sequentially:
>> http://127.0.0.1:4502/_SpecRunner.html?mode=page&follow=true
>>
>> Run each package sequentially:
>> http://127.0.0.1:4502/_SpecRunner.html?mode=package&follow=true
>>
>> Run each spec file sequentially:
>> http://127.0.0.1:4502/_SpecRunner.html?mode=file&follow=true
>>
>> GLOBAL OPTIONS:
>> &seed=RANDOM_STRING - run the specs in seeded order
>> PAGE OPTIONS:
>> &size=40 - sets page size
>> &index=0 - sets page index
>> &follow=true - run all following pages
>> &hideGreenCircles=true - hide green circles
>> PACKAGE OPTIONS
>> &filter=models - sets package
>> FILE OPTIONS
>> &filter=feeds%2Fspec%2Fui%2Fpublisher%2Fglobal%2Fbody_editor_spec - sets spec file
