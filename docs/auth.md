---
sidebar_position: 2
---

# Authentication


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The first thing you need to do before you start interacting with Beem APIs using language based SDKs is authenticating your app with *access-key* and *secret-key* obtained from [BeemAfrica] official website just as shown in the example below;


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'PHP', value: 'php', },
  ]
}>

<TabItem value="py">

```py
>>> from BeemAfrica import Authorize, AirTime, OTP, SMS
>>> Authorize('access-key', 'secret-key')
```

</TabItem>

<TabItem value="js">

```js
Not yet(maybe its waiting for you)
```

</TabItem>
<TabItem value="php">

```php
Not yet(maybe its waiting for you)
```

</TabItem>
</Tabs>

:::note
This authentication part is very crucial because without it, you won't be able to interact with the rest of the APIs
:::