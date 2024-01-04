export enum BusinessEvents {
  GATEWAY_CONNECT = 'GATEWAY_CONNECT',
  GATEWAY_DISCONNECT = 'GATEWAY_DISCONNECT',

  VISITOR_ONLINE = 'VISITOR_ONLINE',
  VISITOR_OFFLINE = 'VISITOR_OFFLINE',

  AUTH_FAILED = 'AUTH_FAILED',

  COMMENT_CREATE = 'COMMENT_CREATE',
  COMMENT_DELETE = 'COMMENT_DELETE',

  POST_CREATE = 'POST_CREATE',
  POST_UPDATE = 'POST_UPDATE',
  POST_DELETE = 'POST_DELETE',

  NOTE_CREATE = 'NOTE_CREATE',
  NOTE_UPDATE = 'NOTE_UPDATE',
  NOTE_DELETE = 'NOTE_DELETE',

  PAGE_CREATE = 'PAGE_CREATE',
  PAGE_UPDATE = 'PAGE_UPDATE',
  PAGE_DELETE = 'PAGE_DELETE',

  TOPIC_CREATE = 'TOPIC_CREATE',
  TOPIC_UPDATE = 'TOPIC_UPDATE',
  TOPIC_DELETE = 'TOPIC_DELETE',

  CATEGORY_CREATE = 'CATEGORY_CREATE',
  CATEGORY_UPDATE = 'CATEGORY_UPDATE',
  CATEGORY_DELETE = 'CATEGORY_DELETE',

  SAY_CREATE = 'SAY_CREATE',
  SAY_DELETE = 'SAY_DELETE',
  SAY_UPDATE = 'SAY_UPDATE',

  LINK_APPLY = 'LINK_APPLY',

  DANMAKU_CREATE = 'DANMAKU_CREATE',

  RECENTLY_CREATE = 'RECENTLY_CREATE',
  RECENTLY_DELETE = 'RECENTLY_DELETE',

  // util
  CONTENT_REFRESH = 'CONTENT_REFRESH', // 内容更新或重置 页面需要重载

  // for admin
  IMAGE_REFRESH = 'IMAGE_REFRESH',
  IMAGE_FETCH = 'IMAGE_FETCH',

  ADMIN_NOTIFICATION = 'ADMIN_NOTIFICATION',

  STDOUT = 'STDOUT',

  // activity
  ACTIVITY_LIKE = 'activity_like',
}

export enum EventScope {
  ALL,
  TO_VISITOR,
  TO_ADMIN,
  TO_SYSTEM,
  TO_VISITOR_ADMIN,
  TO_SYSTEM_VISITOR,
  TO_SYSTEM_ADMIN,
}