rspec /Users/jiayiliang/Dev/otter/spec/web/profile/edit_profile_1_spec.rb:9       必须要加line number，从哪个test开始。
gem install bundler
bundle install
bundle exec rspec spec/web/authentication/login_logout_spec.rb
ruby -v
跑otter的test之前一定要连上vpn

Otter有用的资料
https://github.com/natritmeyer/site_prism
https://github.int.yammer.com/yammer/otter/wiki/Help-keep-Otter-Fast-and-Stable

#---------------------------------------------------------
创建的otter test都要end with _spec.rb
可以建在otter的spec的web folder里

section :notifications_dropdown_panel, NotificationsPanel, :qaid, "notifications_dropdown_panel"
element :group_header, ".yj-nav-menu--group-header"
element :create_PMChat, "yj-nav-menu--group-header--link"

element就是将一个yamjs里的element（比如class什么的）变成otter能认识的element component
比如上面这个就是把 yj-nav-menu--group-header--link expose成 create_PMChat，这样就可以用create_PMChat来在otter中表示这个class。

#---------------------------------------------------------

feature "Edit Profile" do
  before :each do
    @user = QAClient.create_user          每个otter test run之前都要create一个fake user才能进行。
  end
scenario "A user can change their name and job title via edit profile", :p2 do
    step "Login" do
      @home_page = @user.login
      debugger                        可以加一个debugger，这样otter 跑起来的时候就会在这停。然后键入step是一步步往下走，continue是直接往下走。
      @home_page.left_nav.create_PMChat.click       ＃home_page的left_nav component的create_PMChat component; 进行一个click。
      //找到create_PMChat的过程，要先从@home_page这个所有东西都在的namespace开始找到定义create_PMChat的left_navfile，然后找到这个component里的create_PMChat。
    end
  end

scenario就相当于jasmine里的describe，这就是写一个test case。

#---------------------------------------------------------

让otter跑一个在experiment里。
1）：在terminal里输入这些。
Otter rspect testing:
EXPERIMENTS=direct_messaging__phase_one=Enabled rspec ./spec/web/signup/signup_usage_policy_spec.rb:12
2）：在 .env file里写这个： EXPERIMENTS: direct_messaging__phase_one=Enabled
# EXPERIMENTS: messaging_global_compose_reply=Enabled,messaging_global_compose_main_v3=New publisher + Shorter switcher labels + Prepopulated group + Fancy paperclip,messaging_global_compose_lightboxes=Enabled
#EXPERIMENTS_TREATMENT_INDEX: 0
EXPERIMENTS: direct_messaging__phase_one=Enabled
这个就让整个file都在experiment 开启的状态里了。

#---------------------------------------------------------
section :masthead, Web::Sections::Masthead, "header.main-header"
Web::Sections::Masthead表示Masthead 是Sections下面的component，which is Web下面的component。

#---------------------------------------------------------

expect(@home_page.left_nav.has_private_message_section?).to be(true)     这样看这个component有没有出现。
@home_page.left_nav.has_private_message_section?是能够return true 或者 false

Chris 说这种syntax好：
expect(@home_page).to have_create_message_lightbox
have_XXXXX    这种syntax等于has_XXXXX?    都能return true

#------------------------------------------------------------------------------------------

在 teamcity 里projects的otter里的One off 的最右边run button旁边的...按钮里，的parameters里，可以在Branch to Checkout (Otter/Otter_API)里
选择哪个branch来跑otter test。
Environment variables里的env.EXPERIMENTS里选择哪个experiment turned on
env.FRONTEND_RELEASE 里选那个mode来跑。

跑一个自己的test parallel 30遍，检查。
rake loop["30","SAUCE=true rspec spec/web/authentication/login_spec.rb:15"] > output.txt
这个需要在bash上跑，就直接打bash，或zsh在command line里切换。
加上sauce＝ture可以让otter在saucelab上测试，不用在local的browser上测试了。
#------------------------------------------------------------------------------------------

opt_out_private_message_education_banner(@user)
otter的机制是找页面上显示了什么，比如一个button被toast挡住了，这个button就在ottr里被block了，就出错了。上面这个就可以让otter
ignore这个toast，依旧觉得button有用，但是这个syntax应该是case by case 的，下一次就要再单写了。
