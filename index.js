var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

function followersSimplified(num){
    if (num > 10000000){
        var numSimple = num.toString().slice(0,2);
        return numSimple + `M`
    }
}


var mainContainer = document.getElementById('mainContainer');
mainContainer.classList.add('mainContainer')

var headerContainer = document.getElementById('headerContainer');
headerContainer.classList.add('headerContainer');
headerContainer.innerHTML = `
    <div class = 'twitterName'>
        <div class = 'arrow'>
            <div class = 'background-arrow'>
                <i class="gg-arrow-left"></i>
            </div>
        </div>
        <div class = 'nameCheckmark'>
            <p class = 'checkMark'>${user1['displayName']}<i class="gg-check-o"></i></p>
            <p class = 'numberOfTweets'>13.6K Tweets</p>
        </div>
    </div>
`;
mainContainer.appendChild(headerContainer);

var photoContainer = document.getElementById('photoContainer');
photoContainer.classList.add('photoContainer');
photoContainer.innerHTML = `
    <div class = 'coverPhoto'></div> 
`;
mainContainer.appendChild(photoContainer);

var profileContainer = document.getElementById('profileContainer');
profileContainer.classList.add('profileContainer');
profileContainer.innerHTML = `
    <div class = 'profile'>
        <div class = 'profilePic'></div>
        <div class = 'followBtn'>
            <button type = "button"><span>Following</span></button>
        <div class = 'profileInfo'>
            <div class = 'mainName'>
                <h2>${user1.displayName}</h2>
                <i class="gg-check-o"></i>
            </div>
            <p class = 'gray'>${user1['userName']}</p>
            <p>Technoking of Tesla, Imperator of Mars<p>
            <div class = 'calender'>
                <i class="gg-calendar-dates"></i>
                <p>${'Joined ' + user1['joinedDate']}</p>
            </div>
        </div>
        <div class = 'followers'>
            <p class = 'numbers'>${user1['followingCount']}</p>
            <p class = 'gray'>Following</p>
            <p class = 'numbers'>${followersSimplified(user1['followerCount'])}</p>
            <p class = 'gray'>Followers</p>
        </div>
        <div class = 'tabs'>
            <div class = "background-tab-main">
                <p>Tweets</p>
            </div>
            <div class = "background-tab">
                <p>Tweets & replies</p>
            </div>
            <div class = "background-tab">
                <p>Media</p>
            </div>
            <div class = "background-tab">
                <p>Likes</p>
            </div>
    </div>
`
mainContainer.appendChild(profileContainer);

var tweetsContainer = document.getElementById('tweetsContainer');
tweetsContainer.classList.add('tweetsContainer');
mainContainer.appendChild(tweetsContainer);


for (var i = 0, l = user1.tweets.length; i < l; i++){
    var tweet = user1.tweets[i]
    var tweetValues = Object.values(tweet)
    var tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweetDiv');
    tweetDiv.innerHTML = `
        <div class = 'pp'></div>
        <div class = 'noPP'>
            <div class = 'nameAndTime'>
                <p class = 'displayName'>${user1.displayName}</p>
                <i class="gg-check-o"></i>
                <p class = 'marginP'>${user1.userName}</p>
                <p class = 'marginP'>${tweetValues[1]}</p>
            </div>
            <div class = 'actualTweet'>
                <p>${tweetValues[0]}</p>
            </div>
            <div class = 'tweetIcons'>
                <div class = "icon-background">
                    <i class="gg-comment"></i>
                </div>    
                <div class = "icon-background-2">
                    <i class="gg-repeat"></i>
                </div>
                <div class = "icon-background-3">
                    <i class="gg-heart"></i>
                </div>
                <div class = "icon-background">
                    <i class="gg-software-upload"></i>
                </div>
            </div>
        </div>
    `
    tweetsContainer.appendChild(tweetDiv);
}





