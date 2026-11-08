"use client";

import { ReactNode, useEffect, useState } from "react";
import { Globe2, ArrowUpRight, Send, Headphones, Lightbulb } from "lucide-react";

const LOGO = "https://cdn.phototourl.com/member/2026-11-08-383f26a8-9dfb-4de1-a5a5-26c01229e09d.png";

const ru: Record<string, string> = {
  "About": "О платформе",
  "How it works": "Как это работает",
  "Security": "Безопасность",
  "Catalog": "Каталог",
  "Sign in": "Войти",
  "Explore catalog": "Открыть каталог",
  "Discover how it works": "Как это работает",
  "Your services. Your permissions. Your control.": "Ваши сервисы. Ваши разрешения. Ваш контроль.",
  "THE MCP CONNECTION PLATFORM": "ПЛАТФОРМА MCP-ПОДКЛЮЧЕНИЙ",
  "Give your AI": "Дайте своему ИИ",
  "new possibilities.": "новые возможности.",
  "Connect AI assistants to the tools and services you use. Discover integrations, manage access and create more powerful workflows with MCP.": "Подключайте ИИ-ассистентов к нужным инструментам и сервисам. Находите интеграции, управляйте доступом и создавайте более мощные сценарии с MCP.",
  "AI assistant": "ИИ-ассистент",
  "MCP tools": "Инструменты MCP",
  "Secure access": "Защищённый доступ",
  "DISCOVER": "ИЗУЧАЙТЕ",
  "CONNECT": "ПОДКЛЮЧАЙТЕ",
  "CONTROL": "УПРАВЛЯЙТЕ",
  "CREATE": "СОЗДАВАЙТЕ",
  "01 / THE PLATFORM": "01 / ПЛАТФОРМА",
  "ONE PLACE FOR YOUR AI WORKFLOWS": "ЕДИНОЕ МЕСТО ДЛЯ ВАШИХ ИИ-СЦЕНАРИЕВ",
  "Make your AI": "Заставьте ИИ",
  "work with you.": "работать вместе с вами.",
  "AI MCP Tools brings services and AI assistants closer together. Discover what is possible with a growing ecosystem of MCP connections.": "AI MCP Tools объединяет сервисы и ИИ-ассистентов. Открывайте новые возможности растущей экосистемы MCP-подключений.",
  "One control center": "Единый центр управления",
  "Discover integrations and organize your AI-connected services in one place.": "Находите интеграции и управляйте подключёнными к ИИ сервисами в одном месте.",
  "Built around MCP": "На основе MCP",
  "A standardized way for compatible AI assistants to work with external tools.": "Стандартный способ взаимодействия совместимых ИИ-ассистентов с внешними инструментами.",
  "Your access, your rules": "Ваш доступ — ваши правила",
  "Clear permissions and intentional access to connected services.": "Понятные разрешения и контролируемый доступ к подключённым сервисам.",
  "02 / HOW IT WORKS": "02 / КАК ЭТО РАБОТАЕТ",
  "THREE SIMPLE IDEAS": "ТРИ ПРОСТЫХ ШАГА",
  "From discovery": "От поиска",
  "to connection.": "к подключению.",
  "MCP creates a bridge between AI applications and external tools. AI MCP Tools helps make those connections easier to discover and manage.": "MCP создаёт мост между ИИ-приложениями и внешними инструментами. AI MCP Tools помогает находить подключения и управлять ими.",
  "Discover": "Найти",
  "Find an integration in the catalog and explore its available capabilities.": "Найдите интеграцию в каталоге и изучите её возможности.",
  "Connect": "Подключить",
  "Set up the MCP connection in a compatible AI application.": "Настройте MCP-подключение в совместимом ИИ-приложении.",
  "Use your tools": "Использовать инструменты",
  "Let your AI assistant work with authorized tools and services.": "Позвольте ИИ-ассистенту работать с разрешёнными инструментами и сервисами.",
  "03 / SECURITY": "03 / БЕЗОПАСНОСТЬ",
  "Access with": "Контролируйте",
  "confidence.": "доступ уверенно.",
  "Connecting services should never mean giving away control. Permissions, credentials and sensitive actions must be handled carefully.": "Подключение сервисов не должно означать потерю контроля. Разрешения, учётные данные и важные действия требуют внимательного управления.",
  "Clear access permissions": "Понятные разрешения доступа",
  "Protected credentials": "Защита учётных данных",
  "Transparent actions": "Прозрачность действий",
  "READY TO EXPLORE?": "ГОТОВЫ НАЧАТЬ?",
  "Find your next": "Найдите своё следующее",
  "AI connection.": "подключение ИИ.",
  "Explore the catalog and discover what your AI assistant can do.": "Изучите каталог и узнайте, на что способен ваш ИИ-ассистент.",
  "Open catalog": "Открыть каталог",
  "One platform. More possibilities for your AI.": "Одна платформа. Больше возможностей для вашего ИИ.",
  "Explore": "Обзор",
  "MCP catalog": "Каталог MCP",
  "Our Telegram channel": "Наш Telegram-канал",
  "Get in touch": "Связаться",
  "Support": "Поддержка",
  "Suggest a resource": "Предложить ресурс",
  "Legal": "Документы",
  "Privacy policy": "Политика конфиденциальности",
  "Terms of service": "Пользовательское соглашение",
  "All rights reserved.": "Все права защищены.",
  "Built for a more connected AI ecosystem.": "Создано для объединённой экосистемы ИИ.",
  "Back to home": "На главную",
  "Privacy Policy": "Политика конфиденциальности",
  "Terms of Service": "Пользовательское соглашение",
  "Effective date: November 9, 2026": "Дата вступления в силу: 9 ноября 2026 г.",
  "Contact support": "Связаться с поддержкой",
  "Home": "Главная",
  "WELCOME TO AI MCP TOOLS": "ДОБРО ПОЖАЛОВАТЬ В AI MCP TOOLS",
  "Your AI can do more.": "Ваш ИИ может больше.",
  "Meet a platform that connects your AI assistants with the services you use every day. One place to discover tools, manage connections and build new workflows.": "Платформа объединяет ИИ-ассистентов с сервисами, которыми вы пользуетесь каждый день. Находите инструменты, управляйте подключениями и создавайте новые сценарии.",
  "Find the tools you need.": "Найдите нужные инструменты.",
  "Explore the catalog, choose a service and see what its MCP integration can do. New categories can be added as the platform grows.": "Изучайте каталог, выбирайте сервисы и смотрите, что умеют их MCP-интеграции. По мере развития платформы будут появляться новые категории.",
  "Bring everything together.": "Объедините всё вместе.",
  "Connect compatible AI clients to your selected integrations through MCP. You stay in control of access and permissions.": "Подключайте совместимые ИИ-клиенты к выбранным интеграциям через MCP. Контроль доступа и разрешений остаётся у вас.",
  "Next": "Далее",
  "Back": "Назад",
  "Get started": "Начать",
  "OR SIGN IN": "ИЛИ ВОЙТИ",
  "Continue with Google": "Продолжить с Google",
  "Continue with Telegram": "Продолжить с Telegram",
  "Skip introduction": "Пропустить вступление",
  "Authentication setup required": "Требуется настройка авторизации",
  "Got it": "Понятно",
  "1. Information we may process": "1. Информация, которую мы можем обрабатывать",
  "2. How information may be used": "2. Как может использоваться информация",
  "3. Third-party services": "3. Сторонние сервисы",
  "4. MCP connections and credentials": "4. MCP-подключения и учётные данные",
  "5. Sharing and retention": "5. Передача и хранение данных",
  "6. Security": "6. Безопасность",
  "7. Your choices": "7. Ваш выбор",
  "8. Children": "8. Дети",
  "9. Changes to this policy": "9. Изменения политики",
  "10. Contact": "10. Контакты",
  "1. Acceptance of these Terms": "1. Принятие условий",
  "2. The Service": "2. Сервис",
  "3. Accounts and access": "3. Аккаунты и доступ",
  "4. Third-party accounts and permissions": "4. Сторонние аккаунты и разрешения",
  "5. AI clients, MCP tools, and actions": "5. ИИ-клиенты, MCP-инструменты и действия",
  "6. Acceptable use": "6. Допустимое использование",
  "7. Third-party services": "7. Сторонние сервисы",
  "8. Privacy": "8. Конфиденциальность",
  "9. Intellectual property": "9. Интеллектуальная собственность",
  "10. Availability, changes, and termination": "10. Доступность, изменения и прекращение работы",
  "11. Disclaimers": "11. Отказ от гарантий",
  "12. Limitation of liability": "12. Ограничение ответственности",
  "13. Changes to these Terms": "13. Изменения условий",
  "14. Contact": "14. Контакты",
  "AI MCP Tools · Legal": "AI MCP Tools · Документы",
  "Important:": "Важно:",
  "This page is a general terms template, not legal advice. Before public launch, have it reviewed and adapt it to the actual legal operator, jurisdiction, product features, data flows, and applicable consumer-protection requirements.": "Это общий шаблон условий, а не юридическая консультация. Перед публичным запуском документ необходимо проверить и адаптировать под фактического оператора, юрисдикцию, функции продукта, потоки данных и требования законодательства о защите потребителей.",

  "When you use AI MCP Tools, information may be processed to provide the website, account sign-in, and integrations. Depending on the features you use, this may include account identifiers and basic profile information returned by Google or Telegram during sign-in.": "При использовании AI MCP Tools информация может обрабатываться для работы сайта, входа в аккаунт и интеграций. В зависимости от функций это может включать идентификаторы аккаунта и основные данные профиля, полученные от Google или Telegram при входе.",
  "If you submit a support request or suggest a resource, the information you enter is sent to Tally, which hosts those forms. Please avoid including passwords, access tokens, bot tokens, or other secrets in form submissions.": "Если вы отправляете запрос в поддержку или предлагаете ресурс, введённые данные передаются Tally — сервису, на котором размещены формы. Не указывайте в формах пароли, токены доступа, токены ботов и другие секреты.",
  "Like most websites, our hosting and security infrastructure may process technical information such as IP address, browser and device details, request logs, and diagnostic data.": "Как и большинство сайтов, наша инфраструктура хостинга и безопасности может обрабатывать технические сведения: IP-адрес, данные браузера и устройства, журналы запросов и диагностические данные.",
  "Information may be used to operate and secure the website, authenticate users, respond to support requests, review resource suggestions, troubleshoot errors, and improve the service.": "Информация может использоваться для работы и защиты сайта, аутентификации пользователей, ответов на обращения, рассмотрения предложений, устранения ошибок и улучшения сервиса.",
  "If you connect an external service or use an MCP integration, the information required to perform the action you request may be processed by AI MCP Tools and by the relevant service provider.": "Если вы подключаете внешний сервис или используете MCP-интеграцию, сведения, необходимые для выполнения запрошенного действия, могут обрабатываться AI MCP Tools и соответствующим поставщиком сервиса.",
  "Sign-in may be provided by Google and Telegram. When you choose one of these options, that provider processes information under its own privacy policy and returns the information permitted by your authorization.": "Вход может выполняться через Google и Telegram. При выборе этого способа соответствующий поставщик обрабатывает информацию согласно собственной политике конфиденциальности и передаёт данные, разрешённые вашей авторизацией.",
  "Support and resource suggestion forms are hosted by Tally. Website hosting and deployment are provided through Vercel. These providers may process information as needed to deliver their services, subject to their own terms and privacy policies.": "Формы поддержки и предложений размещены в Tally. Хостинг и развёртывание сайта обеспечиваются через Vercel. Эти поставщики могут обрабатывать информацию, необходимую для оказания услуг, в соответствии со своими условиями и политиками конфиденциальности.",
  "AI assistants and external services that you choose to connect are separate services. Review their privacy terms before connecting them or sharing information.": "ИИ-ассистенты и внешние сервисы, которые вы подключаете, являются отдельными сервисами. Перед подключением и передачей информации ознакомьтесь с их политиками конфиденциальности.",
  "MCP integrations can involve access to third-party accounts, bots, workspaces, or other resources. Only connect services you are authorized to use, and grant only the permissions you need.": "MCP-интеграции могут получать доступ к сторонним аккаунтам, ботам, рабочим пространствам и другим ресурсам. Подключайте только те сервисы, которыми вправе пользоваться, и выдавайте только необходимые разрешения.",
  "Never share passwords, private keys, bot tokens, OAuth client secrets, or other credentials in public areas or support forms. The exact information handled by an integration depends on the integration's implementation and the permissions you grant.": "Никогда не передавайте пароли, приватные ключи, токены ботов, OAuth client secrets и другие учётные данные в публичных разделах или формах поддержки. Состав обрабатываемой интеграцией информации зависит от её реализации и выданных разрешений.",
  "We do not sell personal information. Information may be handled by service providers that support the operation of the website, or disclosed when required by law or reasonably necessary to protect the service, its users, or others.": "Мы не продаём персональную информацию. Данные могут обрабатываться поставщиками услуг, обеспечивающими работу сайта, либо раскрываться, когда этого требует закон или это разумно необходимо для защиты сервиса, пользователей или других лиц.",
  "Information is retained only for as long as reasonably needed for the purposes described in this policy, unless a longer period is required or permitted by law. Actual retention may also depend on the settings and policies of third-party providers.": "Информация хранится только столько, сколько разумно необходимо для целей, описанных в этой политике, если закон не требует или не допускает более длительный срок. Фактический срок хранения также может зависеть от настроек и политик сторонних поставщиков.",
  "We use reasonable measures intended to protect information. No website, network transmission, or storage system can be guaranteed to be completely secure.": "Мы применяем разумные меры для защиты информации. Ни один сайт, способ передачи данных или система хранения не могут гарантировать абсолютную безопасность.",
  "You can choose not to use social sign-in, forms, or particular integrations. You may also revoke an application's access through the relevant third-party provider's account settings. Revoking access may not delete information already held by that provider.": "Вы можете отказаться от входа через сторонние аккаунты, форм и отдельных интеграций. Также можно отозвать доступ приложения в настройках соответствующего стороннего сервиса. Отзыв доступа не обязательно удаляет информацию, уже сохранённую этим поставщиком.",
  "AI MCP Tools is not intended for children under the age at which they can legally consent to online services in their location. If you believe a child has submitted personal information, contact us through the support form.": "AI MCP Tools не предназначен для детей младше возраста, с которого в их регионе разрешено самостоятельно давать согласие на использование онлайн-сервисов. Если вы считаете, что ребёнок передал персональную информацию, свяжитесь с нами через форму поддержки.",
  "We may update this policy as the website and its integrations change. The revised version will be published on this page with an updated effective date.": "Мы можем обновлять эту политику по мере изменения сайта и его интеграций. Новая версия будет опубликована на этой странице с обновлённой датой вступления в силу.",
  "For privacy questions or requests, contact the AI MCP Tools team through the support form.": "По вопросам конфиденциальности или запросам обратитесь к команде AI MCP Tools через форму поддержки.",
  "These Terms of Service (\"Terms\") govern your access to and use of AI MCP Tools (the \"Service\"). By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the Service.": "Настоящее Пользовательское соглашение («Условия») регулирует доступ к AI MCP Tools («Сервис») и его использование. Получая доступ к Сервису или используя его, вы соглашаетесь с этими Условиями. Если вы не согласны, не используйте Сервис.",
  "If you use the Service on behalf of an organization, you confirm that you are authorized to accept these Terms on its behalf.": "Если вы используете Сервис от имени организации, вы подтверждаете, что уполномочены принять эти Условия от её имени.",
  "AI MCP Tools is a platform intended to provide access to tools and integrations using the Model Context Protocol (MCP). Features may include account access, integration setup, and tools that allow compatible AI clients to interact with third-party services.": "AI MCP Tools — платформа, предназначенная для доступа к инструментам и интеграциям с использованием Model Context Protocol (MCP). Функции могут включать вход в аккаунт, настройку интеграций и инструменты для взаимодействия совместимых ИИ-клиентов со сторонними сервисами.",
  "Features may be added, changed, limited, suspended, or discontinued. An integration or feature shown on the website may be experimental, unavailable, or subject to technical and third-party limitations. We do not promise that every integration, operation, or feature will always be available or will work with every AI client.": "Функции могут добавляться, изменяться, ограничиваться, приостанавливаться или прекращаться. Интеграция или функция на сайте может быть экспериментальной, недоступной либо зависеть от технических ограничений и сторонних поставщиков. Мы не гарантируем постоянную доступность каждой интеграции, операции или функции и совместимость со всеми ИИ-клиентами.",
  "Some features may require you to sign in or create an account through a supported identity provider. You are responsible for maintaining the security of your account and for activity carried out through your account.": "Для некоторых функций может потребоваться вход или создание аккаунта через поддерживаемого поставщика идентификации. Вы отвечаете за безопасность своего аккаунта и действия, выполняемые через него.",
  "You must provide accurate information when requested, keep your sign-in methods secure, and notify us through the support form if you believe your account has been accessed without your permission. We may restrict or suspend access when reasonably necessary to protect the Service, users, or third parties.": "Вы обязаны предоставлять точную информацию по запросу, защищать способы входа и сообщать нам через форму поддержки, если считаете, что к аккаунту получили доступ без разрешения. Мы можем ограничить или приостановить доступ, если это разумно необходимо для защиты Сервиса, пользователей или третьих лиц.",
  "You may connect or use third-party services only if you have the legal right and all permissions needed to do so. You are responsible for selecting the accounts, workspaces, bots, channels, groups, files, and other resources to which you grant access.": "Вы можете подключать и использовать сторонние сервисы, только если имеете на это законное право и все необходимые разрешения. Вы отвечаете за выбор аккаунтов, рабочих пространств, ботов, каналов, групп, файлов и других ресурсов, к которым предоставляете доступ.",
  "You must not use the Service to access another person's account or data without authorization, bypass access controls, or exceed permissions granted by a third-party service. Your use of each third-party service is also governed by that provider's terms, policies, and technical restrictions.": "Запрещено использовать Сервис для доступа к чужому аккаунту или данным без разрешения, обходить средства контроля доступа или превышать разрешения, выданные сторонним сервисом. Использование каждого стороннего сервиса также регулируется его условиями, политиками и техническими ограничениями.",
  "MCP tools may allow a compatible AI client or other connected application to request actions involving a third-party service. The actions available depend on the integration, permissions, configuration, and provider limitations.": "MCP-инструменты могут позволять совместимому ИИ-клиенту или другому подключённому приложению запрашивать действия в стороннем сервисе. Доступные действия зависят от интеграции, разрешений, конфигурации и ограничений поставщика.",
  "You are responsible for reviewing the actions you authorize and for checking important instructions, destinations, content, and results before and after an action is performed. AI-generated requests or outputs may be incomplete or incorrect. Do not rely on them without appropriate review, especially for actions that send messages, change settings, publish content, delete data, or affect other people.": "Вы отвечаете за проверку разрешённых вами действий, а также важных инструкций, адресатов, содержимого и результатов до и после выполнения. Запросы и результаты, созданные ИИ, могут быть неполными или ошибочными. Проверяйте их, особенно если действия отправляют сообщения, меняют настройки, публикуют контент, удаляют данные или затрагивают других людей.",
  "You are responsible for activity initiated through your account or connected credentials, subject to applicable law. Do not connect credentials or grant permissions unless you understand and accept the access they provide.": "С учётом применимого законодательства вы отвечаете за действия, инициированные через ваш аккаунт или подключённые учётные данные. Не подключайте учётные данные и не выдавайте разрешения, если не понимаете и не принимаете предоставляемый ими уровень доступа.",
  "You agree not to use the Service to violate any law or regulation; infringe another person's rights; send spam, threats, or deceptive content; distribute malware; interfere with or disrupt systems; probe or bypass security controls; access data without authorization; or abuse, overload, or impair the Service or a third-party service.": "Вы соглашаетесь не использовать Сервис для нарушения законов и правил; нарушения чужих прав; рассылки спама, угроз или вводящего в заблуждение контента; распространения вредоносного ПО; вмешательства в работу систем; обхода средств безопасности; несанкционированного доступа к данным; злоупотребления Сервисом или сторонними сервисами, их перегрузки или нарушения их работы.",
  "You must not reverse engineer, copy, resell, or misuse the Service except where applicable law permits or we have given you written permission. You must not use the Service in a way that violates the rules of a connected platform.": "Запрещено проводить обратную разработку, копировать, перепродавать или неправомерно использовать Сервис, кроме случаев, разрешённых законом или письменно согласованных с нами. Запрещено использовать Сервис способом, нарушающим правила подключённой платформы.",
  "The Service may rely on or link to third-party products and infrastructure, including identity providers, hosting providers, form services, AI clients, and platforms you connect. Those services are operated independently and may change or become unavailable.": "Сервис может использовать сторонние продукты и инфраструктуру или ссылаться на них, включая поставщиков идентификации, хостинга, форм, ИИ-клиентов и подключаемые платформы. Эти сервисы управляются независимо и могут изменяться или становиться недоступными.",
  "We do not control and are not responsible for third-party services, their content, security, policies, availability, or actions. You should review the applicable third-party terms and privacy notices before connecting or using them.": "Мы не контролируем сторонние сервисы и не отвечаем за их содержимое, безопасность, политики, доступность или действия. Перед подключением и использованием ознакомьтесь с условиями и политиками конфиденциальности соответствующих поставщиков.",
  "Our handling of information is described in the Privacy Policy. Please review it before using the Service.": "Порядок обработки информации описан в Политике конфиденциальности. Ознакомьтесь с ней перед использованием Сервиса.",
  "The Service, including its original design, branding, text, graphics, and software, is owned by or licensed to the Service operator and is protected by applicable intellectual-property laws. These Terms do not transfer ownership of that intellectual property to you.": "Сервис, включая оригинальный дизайн, брендинг, тексты, графику и программное обеспечение, принадлежит оператору Сервиса или используется им по лицензии и защищён применимыми законами об интеллектуальной собственности. Эти Условия не передают вам права собственности на такую интеллектуальную собственность.",
  "You retain rights to content and materials that you submit, to the extent you own those rights. You grant us only the limited rights reasonably needed to operate, maintain, and provide the features you choose to use, subject to the Privacy Policy and applicable law.": "Вы сохраняете права на отправляемые материалы в той мере, в какой они вам принадлежат. Вы предоставляете нам только ограниченные права, разумно необходимые для работы, поддержки и предоставления выбранных вами функций, с учётом Политики конфиденциальности и применимого законодательства.",
  "Third-party names, logos, and trademarks belong to their respective owners. Their appearance does not necessarily imply endorsement or affiliation.": "Названия, логотипы и товарные знаки третьих лиц принадлежат их владельцам. Их упоминание не обязательно означает одобрение или наличие партнёрских отношений.",
  "We may update, suspend, or discontinue all or part of the Service, including integrations, with or without notice where permitted by law. We may restrict or terminate access if we reasonably believe you have breached these Terms, created a security risk, or used the Service unlawfully.": "Мы можем обновлять, приостанавливать или прекращать работу всего Сервиса или его частей, включая интеграции, с уведомлением или без него, если это допускается законом. Мы можем ограничить или прекратить доступ, если обоснованно считаем, что вы нарушили эти Условия, создали угрозу безопасности или использовали Сервис незаконно.",
  "You may stop using the Service at any time. If you stop using it, you should also revoke permissions or disconnect credentials through the relevant third-party provider where appropriate.": "Вы можете прекратить использование Сервиса в любое время. При прекращении использования рекомендуется также отозвать разрешения или отключить учётные данные через соответствующего стороннего поставщика, если это применимо.",
  "To the extent permitted by applicable law, the Service is provided on an \"as is\" and \"as available\" basis. We do not make warranties that the Service will be uninterrupted, error-free, secure in every circumstance, compatible with every system, or suitable for a particular purpose.": "В пределах, допускаемых применимым законодательством, Сервис предоставляется на условиях «как есть» и «по мере доступности». Мы не гарантируем, что Сервис будет работать непрерывно, без ошибок, безопасно при любых обстоятельствах, совместимо с каждой системой или подходить для конкретной цели.",
  "We do not guarantee the accuracy or reliability of AI-generated outputs, the continued availability of third-party integrations, or that a requested third-party action will succeed.": "Мы не гарантируем точность или надёжность результатов, созданных ИИ, постоянную доступность сторонних интеграций или успешное выполнение запрошенного действия во внешнем сервисе.",
  "To the extent permitted by applicable law, the Service operator will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, goodwill, or business opportunities arising from or related to your use of or inability to use the Service.": "В пределах, допускаемых применимым законодательством, оператор Сервиса не несёт ответственности за косвенные, случайные, специальные, последующие, примерные или штрафные убытки, а также за потерю прибыли, дохода, данных, деловой репутации или коммерческих возможностей, возникшие в связи с использованием Сервиса или невозможностью его использования.",
  "To the extent permitted by applicable law, the Service operator's total liability for claims arising out of or relating to the Service or these Terms will be limited to the amount, if any, that you paid directly to the Service operator for the Service during the three months before the event giving rise to the claim.": "В пределах, допускаемых применимым законодательством, совокупная ответственность оператора Сервиса по требованиям, связанным с Сервисом или этими Условиями, ограничивается суммой, если таковая была, уплаченной вами непосредственно оператору за Сервис в течение трёх месяцев до события, послужившего основанием требования.",
  "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited, or affects rights that you may have under mandatory consumer-protection laws.": "Ничто в этих Условиях не исключает и не ограничивает ответственность, которую нельзя исключить или ограничить по закону, и не затрагивает права, предоставленные вам обязательными нормами о защите потребителей.",
  "We may revise these Terms from time to time. The updated version will be posted on this page with a revised effective date. Your continued use of the Service after updated Terms take effect means you accept the revised Terms, to the extent permitted by law.": "Мы можем время от времени пересматривать эти Условия. Обновлённая версия будет опубликована на этой странице с новой датой вступления в силу. Продолжение использования Сервиса после вступления изменений в силу означает принятие обновлённых Условий в пределах, допускаемых законом.",
  "For questions about these Terms or the Service, contact us using the support form.": "По вопросам об этих Условиях или Сервисе свяжитесь с нами через форму поддержки.",
  "Read the Privacy Policy": "Прочитать Политику конфиденциальности",
  "These terms explain the basic rules for accessing and using AI MCP Tools, including its MCP integrations and connected third-party services.": "Эти условия описывают основные правила доступа к AI MCP Tools и его использования, включая MCP-интеграции и подключённые сторонние сервисы.",
  "This policy explains what information may be processed when you use AI MCP Tools and how third-party services fit into that process.": "В этой политике описано, какая информация может обрабатываться при использовании AI MCP Tools и какую роль в этом играют сторонние сервисы."

};

const originalTextNodes = new WeakMap<Text, string>();

function translateTextNodes(language: "en" | "ru") {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    const current = node.nodeValue ?? "";
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, current);
    const source = originalTextNodes.get(node) ?? current;
    const trimmed = source.trim();
    const translated = language === "ru" ? ru[trimmed] : undefined;
    if (translated) {
      const leading = source.match(/^\\s*/)?.[0] ?? "";
      const trailing = source.match(/\\s*$/)?.[0] ?? "";
      const nextValue = `${leading}${translated}${trailing}`;
      if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
    } else if (language === "en" && node.nodeValue !== source) {
      node.nodeValue = source;
    }
  });
}

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "ru">("en");

  useEffect(() => {
    const saved = localStorage.getItem("aimcp-language");
    if (saved === "ru" || saved === "en") setLanguage(saved);
    const onChange = () => {
      const next = localStorage.getItem("aimcp-language");
      if (next === "ru" || next === "en") setLanguage(next);
    };
    window.addEventListener("aimcp-language-change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("aimcp-language-change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    translateTextNodes(language);
    const observer = new MutationObserver(() => translateTextNodes(language));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  function changeLanguage(next: "en" | "ru") {
    localStorage.setItem("aimcp-language", next);
    setLanguage(next);
    window.dispatchEvent(new Event("aimcp-language-change"));
    const catalogButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".catalog-nav-right button"));
    const matchingCatalogButton = catalogButtons.find((button) => button.textContent?.trim().toLowerCase() === next);
    if (matchingCatalogButton) matchingCatalogButton.click();
  }

  return (
    <>
      <div className="global-language-switch" aria-label="Language">
        <Globe2 size={15} />
        <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>EN</button>
        <span>/</span>
        <button className={language === "ru" ? "active" : ""} onClick={() => changeLanguage("ru")}>RU</button>
      </div>
      {children}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <a href="/" className="site-footer-logo">
              <img src={LOGO} alt="AI MCP Tools" />
              <span>AI MCP <b>TOOLS</b></span>
            </a>
            <p>{language === "ru" ? "Одна платформа. Больше возможностей для вашего ИИ." : "One platform. More possibilities for your AI."}</p>
          </div>
          <div className="site-footer-group">
            <h3>{language === "ru" ? "ОБЗОР" : "EXPLORE"}</h3>
            <a href="/catalog">{language === "ru" ? "Каталог MCP" : "MCP catalog"} <ArrowUpRight size={14}/></a>
            <a href="https://t.me/aimcptools" target="_blank" rel="noreferrer">{language === "ru" ? "Наш Telegram-канал" : "Our Telegram channel"} <Send size={14}/></a>
          </div>
          <div className="site-footer-group">
            <h3>{language === "ru" ? "СВЯЗАТЬСЯ" : "GET IN TOUCH"}</h3>
            <a href="https://tally.so/r/X5rybY" target="_blank" rel="noreferrer">{language === "ru" ? "Поддержка" : "Support"} <Headphones size={14}/></a>
            <a href="https://tally.so/r/OQlyNg" target="_blank" rel="noreferrer">{language === "ru" ? "Предложить ресурс" : "Suggest a resource"} <Lightbulb size={14}/></a>
          </div>
          <div className="site-footer-group">
            <h3>{language === "ru" ? "ДОКУМЕНТЫ" : "LEGAL"}</h3>
            <a href="/privacy">{language === "ru" ? "Политика конфиденциальности" : "Privacy policy"} <ArrowUpRight size={14}/></a>
            <a href="/terms">{language === "ru" ? "Пользовательское соглашение" : "Terms of service"} <ArrowUpRight size={14}/></a>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© 2026 AI MCP Tools. {language === "ru" ? "Все права защищены." : "All rights reserved."}</span>
          <span>{language === "ru" ? "Создано для объединённой экосистемы ИИ." : "Built for a more connected AI ecosystem."}</span>
        </div>
      </footer>
    </>
  );
}
