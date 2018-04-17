const request$ = Rx.Observable.of('https://api.github.com/users');

const response$ = request$.flatMap(url => {
  return Rx.Observable.from(fetch(url)).flatMap(res =>
    Rx.Observable.from(res.json())
  );
});

const createSuggestion$ = res$ => {
  return res$.map(
    listUser => listUser[Math.floor(Math.random() * listUser.length)]
  );
};

const renderSuggestion = (user, selector) => {
  const el = document.querySelector(selector);
  const usernameEl = el.querySelector('.js-username');

  usernameEl.href = user.html_url;
  usernameEl.textContent = user.login;

  const imgEl = el.querySelector('img');
  imgEl.src = user.avatar_url;
};

// when working with event streams the idea is that we create them but without
// doing anything to them
const suggestion1$ = createSuggestion$(response$);
const suggestion2$ = createSuggestion$(response$);
const suggestion3$ = createSuggestion$(response$);

// Once we've created them, then we subscribe to them at which point we can do
// whatever we want with the events
suggestion1$.subscribe(user => renderSuggestion(user, '.js-suggestion-1'));
suggestion2$.subscribe(user => renderSuggestion(user, '.js-suggestion-2'));
suggestion3$.subscribe(user => renderSuggestion(user, '.js-suggestion-3'));
