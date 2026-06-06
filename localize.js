(function () {

  var language = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  var isItalian = language.indexOf('it') === 0;


  var en = {
    'meta.home.title': 'Spelio | Budgeting app',
    'meta.home.description': 'Spelio is a budgeting app for planning income, expenses, savings goals and Premium subscriptions.',
    'meta.privacy.title': 'Privacy Policy | Spelio',
    'meta.privacy.description': 'Spelio Privacy Policy.',
    'meta.terms.title': 'Terms of Service | Spelio',
    'meta.terms.description': 'Spelio Terms of Service.',
    'nav.aria': 'Main navigation',
    'nav.features': 'Features',
    'nav.premium': 'Premium',
    'nav.app': 'App',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'footer.text': 'Personal finance app for planning income, expenses, savings and budgets.',
    'footer.legalAria': 'Legal documents',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'legal.back': 'Back to home',
    'legal.eyebrow': 'Legal document',
    'home.hero.eyebrow': 'Clear budgeting, calmer decisions',
    'home.hero.lede': 'Organize income, future expenses, savings goals and budgets in a dashboard you can check every day.',
    'home.hero.primaryCta': 'Explore the app',
    'home.hero.secondaryCta': 'View Premium',
    'home.hero.trustAria': 'Key points',
    'home.hero.trust.monthly': 'Monthly planning',
    'home.hero.trust.goals': 'Savings goals',
    'home.hero.trust.premium': 'Premium via App Store and Google Play',
    'home.preview.aria': 'Spelio app interface preview',
    'home.preview.alt': 'Full Spelio home screen with budget summary and monthly overview',
    'home.preview.badge': 'Budget',
    'home.preview.caption': 'Complete overview',
    'home.features.eyebrow': 'Core features',
    'home.features.title': 'A complete view of your money, without the noise.',
    'home.features.income.title': 'Future income and expenses',
    'home.features.income.text': 'Plan the month before it happens, keeping track of commitments you already know about.',
    'home.features.goals.title': 'Savings goals',
    'home.features.goals.text': 'Follow your progress and understand what is missing with clear indicators.',
    'home.features.budget.title': 'Category budgets',
    'home.features.budget.text': 'Organize home, food, transport and other categories with an immediate view.',
    'home.features.insights.title': 'Readable summaries',
    'home.features.insights.text': 'Turn scattered numbers into practical signals for making decisions with more control.',
    'premium.hero.eyebrow': 'Spelio Premium',
    'premium.hero.title': 'Spelio is useful for free. Premium makes it more powerful.',
    'premium.hero.text': 'Free gives you the essential tools to plan future expenses, income, spending and goals. Premium adds automations, unlimited months, personalization and more advanced analysis.',
    'premium.price.label': 'Premium',
    'premium.price.monthlyLine': 'From \u20AC2.99/month',
    'premium.price.annualLine': 'Or from \u20AC19.99/year with annual savings.',
    'premium.features.eyebrow': 'Why choose Premium',
    'premium.features.title': 'Advanced features for automating and personalizing your budget.',
    'premium.cards.months.title': 'Unlimited months',
    'premium.cards.months.text': 'Go beyond the 12-month limit and plan for as long as you want.',
    'premium.cards.recurring.title': 'Recurring income and expenses',
    'premium.cards.recurring.text': 'Automate recurring movements such as salary, rent, subscriptions and installments.',
    'premium.cards.goals.title': 'Multiple goals',
    'premium.cards.goals.text': 'Manage multiple savings goals at the same time.',
    'premium.cards.categories.title': 'Custom categories',
    'premium.cards.categories.text': 'Create categories with custom emoji and colors.',
    'premium.cards.alerts.title': 'Smart alerts',
    'premium.cards.alerts.text': 'Receive automatic alerts about future forecasts and items to review.',
    'premium.cards.charts.title': 'Advanced charts',
    'premium.cards.charts.text': 'More detailed analysis and visualizations to better understand your budget trend.',
    'premium.cards.wishes.title': 'Transform wishes',
    'premium.cards.wishes.text': 'Turn a wish into a concrete savings goal when you are ready to plan it.',
    'compare.eyebrow': 'Free vs Premium',
    'compare.title': 'Free covers the basics. Premium unlocks automation and advanced features.',
    'compare.aria': 'Comparison between Spelio Free and Spelio Premium',
    'compare.header.feature': 'Feature',
    'compare.included': 'Included',
    'compare.notIncluded': 'Not included',
    'compare.futureExpenses': 'Future expense planning',
    'compare.inOut': 'Income and expenses',
    'compare.baseCharts': 'Basic charts',
    'compare.wishlist': 'Wish list',
    'compare.oneGoal': 'One savings goal',
    'compare.notes': 'Expense notes',
    'compare.yearly': 'Annual summary',
    'compare.twelveMonths': 'Up to 12 months',
    'compare.unlimitedMonths': 'Unlimited months',
    'compare.recurring': 'Recurring income and expenses',
    'compare.multipleGoals': 'Multiple goals',
    'compare.customCategories': 'Custom categories',
    'compare.smartAlerts': 'Smart alerts',
    'compare.advancedCharts': 'Advanced charts',
    'compare.wishToGoal': 'Turn a wish into a goal',
    'premium.cta.aria': 'Spelio Premium pricing',
    'premium.cta.eyebrow': 'Premium',
    'premium.cta.title': 'Unlock advanced planning.',
    'premium.cta.text': 'Choose the monthly plan or the annual plan, designed for people who use Spelio all year.',
    'premium.cta.monthly': 'Monthly',
    'premium.cta.monthlyPrice': 'From \u20AC2.99/month',
    'premium.cta.monthlyText': 'Flexible payment, month by month.',
    'premium.cta.annual': 'Annual',
    'premium.cta.annualPrice': 'From \u20AC19.99/year',
    'premium.cta.annualText': 'The best value plan.',
    'premium.cta.savings': 'Save about 44% compared with monthly billing.',
    'premium.pricingNote': 'Actual prices may vary by country, currency and store. The final price is always shown by Google Play or the App Store before purchase.',
    'screens.eyebrow': 'App screenshots',
    'screens.title': 'Real Spelio screens, ready to explore.',
    'screens.dashboard.title': 'Dashboard',
    'screens.dashboard.text': 'A clear monthly overview, with budget and movements always readable.',
    'screens.dashboard.alt': 'Full Spelio home screen with monthly summary, budget and recent movements',
    'screens.planning.title': 'Planning',
    'screens.planning.text': 'Monthly details organized to understand income, expenses and expected balance.',
    'screens.planning.alt': 'Full Spelio monthly detail screen with income, expenses and period planning',
    'screens.premium.title': 'Advanced Premium',
    'screens.premium.text': 'Advanced charts and insights to better read your finances.',
    'screens.premium.alt': 'Full Spelio Premium screen with advanced charts and budget analysis',
    'privacy.title': 'Privacy Policy',
    'privacy.general.title': 'General information',
    'privacy.general.text': 'Spelio is a personal finance planning app designed to help users organize income, future expenses, budgets, savings goals and wishes. This Privacy Policy transparently describes how information connected to the app and Premium services is handled.',
    'privacy.data.title': 'Data collected',
    'privacy.data.text1': 'The app may process data entered by the user, such as amounts, categories, notes, income, expenses, savings goals, wishes and planning preferences. This data is used only to provide app features and show summaries, charts and forecasts.',
    'privacy.data.text2': 'Spelio does not require users to enter real banking data or bank account credentials. Users are responsible for the information they choose to add to the app.',
    'privacy.premium.title': 'Premium purchases',
    'privacy.premium.text': 'Premium subscriptions are managed through Google Play and Apple App Store. Payment, billing and renewal information is processed by those platforms under their own policies. Spelio may receive technical information needed to verify subscription status and enable Premium features.',
    'privacy.third.title': 'Third-party services',
    'privacy.third.text': 'The app may use third-party services for distribution, in-app purchases, technical analytics, notifications or app functionality. These services may process technical data under their own privacy notices. Users should review the policies of Google Play, Apple App Store and any integrated services.',
    'privacy.security.title': 'Data security',
    'privacy.security.text': 'Spelio adopts reasonable measures to protect user data and reduce unauthorized access, loss or misuse of information. No digital system can guarantee absolute security, so users should use protected devices and keep the app and operating system updated.',
    'privacy.rights.title': 'User rights',
    'privacy.rights.text': 'Users may request information about processed data, ask for corrections, deletion or restrictions when applicable, and manage Premium subscriptions directly through Google Play or Apple App Store. Privacy requests can be sent using the contacts indicated on this page.',
    'privacy.changes.title': 'Policy changes',
    'privacy.changes.text': 'This Privacy Policy may be updated over time to reflect changes to the app, Premium services, legal requirements or data processing practices. The updated version will be published on this page.',
    'privacy.contact.title': 'Contacts',
    'privacy.contact.text': 'For questions about privacy, data management or the use of Spelio, users can contact the Spelio team through the support channels shown in the app or on the official website.',
    'terms.title': 'Terms of Service',
    'terms.accept.title': 'Acceptance of terms',
    'terms.accept.text': 'Welcome to Spelio. By using this application, you agree to these Terms of Service. If you do not agree with these terms, you should not use the app.',
    'terms.use.title': 'Use of the app',
    'terms.use.text1': 'Spelio is a personal finance planning application that helps users organize future income, expenses, savings goals and budgets. The app is intended for personal planning and informational purposes only.',
    'terms.use.text2': 'Users are responsible for the accuracy of the data they enter into the app and for the financial decisions they make based on that data. Spelio does not provide financial, tax, legal or investment advice.',
    'terms.premium.title': 'Premium purchases',
    'terms.premium.text1': 'Premium subscriptions are managed through Google Play and Apple App Store. Prices, renewal rules, cancellation options and payment methods are controlled by the store used for the purchase.',
    'terms.premium.text2': 'Premium features may include advanced planning, recurring income and expenses, custom categories, multiple savings goals, smart alerts, advanced charts and other enhanced tools. Access to Premium features depends on an active subscription or entitlement.',
    'terms.liability.title': 'Limitation of liability',
    'terms.liability.text1': 'Spelio aims to provide useful planning tools, but it cannot guarantee that forecasts, summaries or calculations will always match real financial outcomes. Users should review their data carefully and make independent decisions.',
    'terms.liability.text2': 'To the maximum extent permitted by applicable law, Spelio is not liable for indirect losses, financial decisions, missed payments, incorrect user-entered data, store subscription issues or damages resulting from the use or inability to use the app.',
    'terms.ip.title': 'Intellectual property',
    'terms.ip.text': 'The Spelio name, interface, design, features, text, visual elements and related materials are protected by intellectual property rights. Users may not copy, modify, distribute, reverse engineer or reuse the app or its content except as permitted by law or by explicit authorization.',
    'terms.service.title': 'Service changes',
    'terms.service.text': 'Spelio may update, improve, remove or modify features over time, including Free and Premium functionality. These Terms of Service may also be updated in the future. Continued use of the app after updates means acceptance of the revised terms.',
    'terms.contact.title': 'Contacts',
    'terms.contact.text': 'For questions about these Terms of Service, Premium subscriptions or the use of Spelio, users can contact the Spelio team through the support channels available in the app or on the official website.'
  };

  function translate(map) {
    document.documentElement.lang = isItalian ? 'it' : 'en';
    if (!isItalian) {
      document.querySelectorAll('[data-i18n]').forEach(function (element) {
        var key = element.getAttribute('data-i18n');
        if (map[key]) element.innerHTML = map[key];
      });
      document.querySelectorAll('[data-i18n-attr]').forEach(function (element) {
        element.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
          var parts = pair.split(':');
          if (parts.length !== 2) return;
          var attr = parts[0].trim();
          var key = parts[1].trim();
          if (map[key]) element.setAttribute(attr, map[key]);
        });
      });
    }
    var title = document.querySelector('title');
    if (title) document.title = title.textContent;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { translate(en); });
  } else {
    translate(en);
  }
})();
