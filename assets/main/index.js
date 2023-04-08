window.__require=function e(t,o,i){function c(a,r){if(!o[a]){if(!t[a]){var l=a.split("/");if(l=l[l.length-1],!t[l]){var s="function"==typeof __require&&__require;if(!r&&s)return s(l,!0);if(n)return n(l,!0);throw new Error("Cannot find module '"+a+"'")}a=l}var d=o[a]={exports:{}};t[a][0].call(d.exports,function(e){return c(t[a][1][e]||e)},d,d.exports,e,t,o,i)}return o[a].exports}for(var n="function"==typeof __require&&__require,a=0;a<i.length;a++)c(i[a]);return c}({AnimationFly:[function(e,t,o){"use strict";cc._RF.push(t,"3c3c59Fw+BL8a7hUJMbDr80","AnimationFly"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./player_control"),c=cc._decorator,n=c.ccclass,a=c.property,r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.skeleton=null,t.idle=null,t.walk=null,t.dance=null,t.jump=null,t.death=null,t.win=null,t.lose=null,t.chatSprite=[],t.chatBox=null,t.inter=null,t.jumping=!1,t.walking=!1,t.dancing=!1,t}var o;return __extends(t,e),o=t,Object.defineProperty(t,"instance",{get:function(){return o._instance},enumerable:!1,configurable:!0}),t.prototype.onLoad=function(){o._instance=this,this.skeleton.addClip(this.idle,"Idle")},t.prototype.start=function(){},t.prototype.onEnable=function(){this.jumping=!1,this.walking=!1,this.dancing=!1,this.playAnim()},t.prototype.playAnim=function(){this.jumping||(this.skeleton.play("Idle").wrapMode=cc.WrapMode.Loop,this.walking=!1,this.dancing=!1)},t.prototype.onWalk=function(){console.log(!this.jumping),console.log(!this.walking),this.jumping||this.walking||(console.log("Fly"),this.skeleton.play("Walk"),this.walking=!0)},t.prototype.onJump=function(){var e=this;this.jumping=!0,this.skeleton.play("Jump").wrapMode=cc.WrapMode.Normal,this.scheduleOnce(function(){e.jumping=!1,e.walking=!1,e.dancing||(i.default.instance.pressedDir?e.onWalk():e.playAnim())},1)},t.prototype.onDance=function(){this.skeleton.play("Dance"),this.dancing=!0},t.prototype.onLose=function(){},t.prototype.onWin=function(){},t._instance=null,__decorate([a(cc.SkeletonAnimation)],t.prototype,"skeleton",void 0),__decorate([a(cc.SkeletonAnimationClip)],t.prototype,"idle",void 0),__decorate([a(cc.SkeletonAnimationClip)],t.prototype,"walk",void 0),__decorate([a(cc.SkeletonAnimationClip)],t.prototype,"dance",void 0),__decorate([a(cc.SkeletonAnimationClip)],t.prototype,"jump",void 0),__decorate([a(cc.SkeletonAnimationClip)],t.prototype,"death",void 0),__decorate([a(cc.SkeletonAnimationClip)],t.prototype,"win",void 0),__decorate([a(cc.SkeletonAnimationClip)],t.prototype,"lose",void 0),__decorate([a([cc.SpriteFrame])],t.prototype,"chatSprite",void 0),__decorate([a(cc.Sprite)],t.prototype,"chatBox",void 0),o=__decorate([n],t)}(cc.Component);o.default=r,cc._RF.pop()},{"./player_control":"player_control"}],Animation:[function(e,t,o){"use strict";cc._RF.push(t,"6d33d5R+jlIfpyuUFg/JqFs","Animation"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./MainAudio"),n=e("./player_control"),a=cc._decorator,r=a.ccclass,l=a.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.skeleton=null,t.idle=null,t.walk=null,t.dance=null,t.jump=null,t.death=null,t.win=null,t.lose=null,t.chatSprite=[],t.chatBox=null,t.inter=null,t.jumping=!1,t.walking=!1,t.dancing=!1,t}var o;return __extends(t,e),o=t,Object.defineProperty(t,"instance",{get:function(){return o._instance},enumerable:!1,configurable:!0}),t.prototype.onLoad=function(){o._instance=this,this.skeleton.addClip(this.idle,"Idle"),this.skeleton.addClip(this.jump,"Jump"),this.skeleton.addClip(this.walk,"Walk"),this.skeleton.addClip(this.dance,"Dance"),this.skeleton.addClip(this.death,"Death"),this.skeleton.addClip(this.win,"Win"),this.skeleton.addClip(this.lose,"Lose")},t.prototype.start=function(){},t.prototype.onEnable=function(){this.jumping=!1,this.walking=!1,this.dancing=!1,this.playAnim()},t.prototype.playAnim=function(){this.jumping||(this.skeleton.play("Idle").wrapMode=cc.WrapMode.Loop,this.walking=!1,this.dancing=!1)},t.prototype.onWalk=function(){console.log(!this.jumping),console.log(!this.walking),this.jumping||this.walking||(console.log("Normal"),console.log(this.skeleton),this.skeleton.play("Walk"),this.walking=!0)},t.prototype.onJump=function(){var e=this;this.jumping=!0,this.skeleton.play("Jump").wrapMode=cc.WrapMode.Normal,c.default.instance.audioPlayer.playAudio(i.AudioPlayId.shoot,!1,.5),this.scheduleOnce(function(){e.jumping=!1,e.walking=!1,e.dancing||(n.default.instance.pressedDir?e.onWalk():e.playAnim())},.85)},t.prototype.onDance=function(){this.skeleton.play("Dance"),this.dancing=!0},t.prototype.onLose=function(){},t.prototype.onWin=function(){},t._instance=null,__decorate([l(cc.SkeletonAnimation)],t.prototype,"skeleton",void 0),__decorate([l(cc.SkeletonAnimationClip)],t.prototype,"idle",void 0),__decorate([l(cc.SkeletonAnimationClip)],t.prototype,"walk",void 0),__decorate([l(cc.SkeletonAnimationClip)],t.prototype,"dance",void 0),__decorate([l(cc.SkeletonAnimationClip)],t.prototype,"jump",void 0),__decorate([l(cc.SkeletonAnimationClip)],t.prototype,"death",void 0),__decorate([l(cc.SkeletonAnimationClip)],t.prototype,"win",void 0),__decorate([l(cc.SkeletonAnimationClip)],t.prototype,"lose",void 0),__decorate([l([cc.SpriteFrame])],t.prototype,"chatSprite",void 0),__decorate([l(cc.Sprite)],t.prototype,"chatBox",void 0),o=__decorate([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./MainAudio":"MainAudio","./player_control":"player_control"}],AudioManager:[function(e,t,o){"use strict";cc._RF.push(t,"aac877tW0JOg5eFc0ADjDVx","AudioManager"),Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(){}return Object.defineProperty(e,"RealMusicVolume",{get:function(){return e._MusicEnable?e._MusicVolume:0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"RealEffectVolume",{get:function(){return e._EffectEnable?e._EffectVolume:0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"MusicVolume",{get:function(){return e._MusicVolume},set:function(t){e._MusicVolume=t,e.arrAudioPlayer.forEach(function(e){e.setMusicVolume(t)})},enumerable:!1,configurable:!0}),Object.defineProperty(e,"EffectVolume",{get:function(){return e._EffectVolume},set:function(t){e._EffectVolume=t,e.arrAudioPlayer.forEach(function(e){e.setEffectVolume(t)})},enumerable:!1,configurable:!0}),Object.defineProperty(e,"EffectEnable",{get:function(){return e._EffectEnable},set:function(t){cc.log("EffectEnable: "+t),e._EffectEnable=t;var o=t?e._EffectVolume:0;e.arrAudioPlayer.forEach(function(e){e.setEffectVolume(o)})},enumerable:!1,configurable:!0}),Object.defineProperty(e,"MusicEnable",{get:function(){return e._MusicEnable},set:function(t){cc.log("MusicEnable: "+t),e._MusicEnable=t;var o=t?e._MusicVolume:0;e.arrAudioPlayer.forEach(function(e){e.setMusicVolume(o)})},enumerable:!1,configurable:!0}),e.add=function(t){e.arrAudioPlayer.push(t)},e.remove=function(t){var o=e.arrAudioPlayer.indexOf(t);-1!==o&&e.arrAudioPlayer.splice(o,1)},e._MusicVolume=1,e._EffectVolume=1,e._MusicEnable=!0,e._EffectEnable=!0,e.arrAudioPlayer=[],e}();o.default=i,cc._RF.pop()},{}],AudioPlayId:[function(e,t,o){"use strict";cc._RF.push(t,"1859bHnBo1NWbGY6mOpwEjL","AudioPlayId"),Object.defineProperty(o,"__esModule",{value:!0}),o.AudioPlayId=void 0,function(e){e[e.none=0]="none",e[e.home_music=1]="home_music",e[e.game_play_music=2]="game_play_music",e[e.button_click=20]="button_click",e[e.button_open=21]="button_open",e[e.game_lose=22]="game_lose",e[e.game_win=23]="game_win",e[e.boss_crying=50]="boss_crying",e[e.boss_die=51]="boss_die",e[e.boss_take_stick=52]="boss_take_stick",e[e.boss_die_fire=53]="boss_die_fire",e[e.boss_jump_win=54]="boss_jump_win",e[e.stealer_attack=60]="stealer_attack",e[e.stealer_die=61]="stealer_die",e[e.demon_punch=62]="demon_punch",e[e.dog_bite=70]="dog_bite",e[e.dog_die=71]="dog_die",e[e.dragon_die=80]="dragon_die",e[e.dragon_fire=81]="dragon_fire",e[e.dragon_fire_ball=82]="dragon_fire_ball",e[e.girl_die=90]="girl_die",e[e.girl_help=91]="girl_help",e[e.effect_lava_appear=100]="effect_lava_appear",e[e.effect_lava_x_water=101]="effect_lava_x_water",e[e.effect_rock1=102]="effect_rock1",e[e.effect_gems=103]="effect_gems",e[e.stick_block=150]="stick_block",e[e.stick_move=151]="stick_move",e[e.rope_cut=152]="rope_cut",e[e.shoot=153]="shoot",e[e.chest_open=154]="chest_open"}(o.AudioPlayId||(o.AudioPlayId={})),cc._RF.pop()},{}],AudioPlayer:[function(e,t,o){"use strict";cc._RF.push(t,"bf5f5Rvyw5IKb3sXf2bPpYR","AudioPlayer"),Object.defineProperty(o,"__esModule",{value:!0}),o.AudioPlay=o.AudioObject=void 0;var i=e("./AudioManager"),c=e("./AudioPlayId"),n=cc._decorator,a=n.ccclass,r=n.property,l=function(){function e(){this.name=c.AudioPlayId.none,this.audioClip=null,this.isMusic=!1}return __decorate([r({type:cc.Enum(c.AudioPlayId)})],e.prototype,"name",void 0),__decorate([r({type:cc.AudioClip})],e.prototype,"audioClip",void 0),__decorate([r(cc.Boolean)],e.prototype,"isMusic",void 0),__decorate([a("AudioObject")],e)}();o.AudioObject=l;var s=function(e,t,o){this.audioId=e,this.volume=t,this.isMusic=o};o.AudioPlay=s;var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.arrayAudioObj=[],t.maps=null,t.arrayMusic=[],t.arrayEffect=[],t}return __extends(t,e),t.prototype.playAudio=function(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=1);var c,n=this.getAudioObject(e);if(!n)return cc.error("playAudio: "+e),null;if(n.isMusic){var a=cc.audioEngine.play(n.audioClip,t,o*i.default.RealMusicVolume);c=new s(a,o,!0),this.arrayMusic.push(c)}else a=cc.audioEngine.play(n.audioClip,t,o*i.default.RealEffectVolume),c=new s(a,o,!1),this.arrayEffect.push(c);return c},t.prototype.stopAudioPlay=function(e){var t;e.isMusic?-1!==(t=this.arrayMusic.indexOf(e))&&(cc.audioEngine.stop(e.audioId),this.arrayMusic.splice(t,1)):-1!==(t=this.arrayEffect.indexOf(e))&&(cc.audioEngine.stop(e.audioId),this.arrayEffect.splice(t,1))},t.prototype.stopAudioPlayFade=function(e){var t;e.isMusic?-1!==(t=this.arrayMusic.indexOf(e))&&cc.tween().to(1,{scale:2,rotation:90},{progress:function(e,t,o,i){return e+(t-e)*i}}):(cc.tween(this.node).to(1,{scale:2,rotation:90},{progress:function(e,t,o,i){return console.log(o),e+(t-e)*i}}),-1!==(t=this.arrayEffect.indexOf(e))&&(cc.audioEngine.stop(e.audioId),this.arrayEffect.splice(t,1)))},t.prototype.setAudioPlayVolume=function(e,t){e.volume=t,e.isMusic?cc.audioEngine.setVolume(e.audioId,t*i.default.RealMusicVolume):cc.audioEngine.setVolume(e.audioId,t*i.default.RealEffectVolume)},t.prototype.setVolume=function(e){this.setMusicVolume(e),this.setEffectVolume(e)},t.prototype.setMusicVolume=function(e){this.arrayMusic.forEach(function(t){cc.audioEngine.setVolume(t.audioId,t.volume*e)})},t.prototype.setEffectVolume=function(e){this.arrayEffect.forEach(function(t){cc.audioEngine.setVolume(t.audioId,t.volume*e)})},t.prototype.stopAllAudio=function(){this.stopAllEffect(),this.stopAllMusic()},t.prototype.stopAllMusic=function(){this.arrayMusic.forEach(function(e){cc.audioEngine.stop(e.audioId)}),this.arrayMusic=[]},t.prototype.stopAllEffect=function(){this.arrayEffect.forEach(function(e){cc.audioEngine.stop(e.audioId)}),this.arrayEffect=[]},t.prototype.getAudioObject=function(e){return cc.log("getAudioObject: "+e),this.maps||this.initMaps(),this.maps.get(e)},t.prototype.initMaps=function(){var e=this;this.maps=new Map,this.arrayAudioObj.forEach(function(t){e.maps.set(t.name,t)})},t.prototype.onLoad=function(){i.default.add(this)},t.prototype.onDestroy=function(){i.default.remove(this),this.stopAllAudio()},__decorate([r([l])],t.prototype,"arrayAudioObj",void 0),__decorate([a],t)}(cc.Component);o.default=d,cc._RF.pop()},{"./AudioManager":"AudioManager","./AudioPlayId":"AudioPlayId"}],ColliderCallback:[function(e,t,o){"use strict";cc._RF.push(t,"eaeb1K9WzdHkJnMHSnDDu+U","ColliderCallback"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=(i.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.colliderEnterCb=null,t.colliderExitCb=null,t.colliderEnterCbStay=null,t}return __extends(t,e),t.prototype.setColliderCallback=function(e,t){void 0===t&&(t=null),this.colliderEnterCb=e,this.colliderExitCb=t},t.prototype.setColliderCallbackStay=function(e){this.colliderEnterCbStay=e},t.prototype.onCollisionEnter=function(e,t){this.colliderEnterCb&&this.colliderEnterCb(e,t)},t.prototype.onCollisionStay=function(e,t){this.colliderEnterCbStay&&this.colliderEnterCbStay(e,t)},t.prototype.onCollisionExit=function(e,t){this.colliderExitCb&&this.colliderExitCb(e,t)},__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],LoopOpacity:[function(e,t,o){"use strict";cc._RF.push(t,"7be8aCmdF5Nzpxdq4fJSOeH","LoopOpacity"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){cc.tween(this.node).repeatForever(cc.tween().to(.5,{opacity:0}).to(.5,{opacity:255})).start()},__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],MainAudio:[function(e,t,o){"use strict";cc._RF.push(t,"053a0DILKlJK7pd2G3MyPVI","MainAudio"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayer"),c=cc._decorator,n=c.ccclass,a=c.property,r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.audioPlayer=null,t.playingAudio=null,t}var o;return __extends(t,e),o=t,Object.defineProperty(t,"instance",{get:function(){return o._instance},enumerable:!1,configurable:!0}),t.prototype.onLoad=function(){o._instance=this},t._instance=null,__decorate([a(i.default)],t.prototype,"audioPlayer",void 0),o=__decorate([n],t)}(cc.Component);o.default=r,cc._RF.pop()},{"./AudioPlayer":"AudioPlayer"}],PhysicalEnable:[function(e,t,o){"use strict";cc._RF.push(t,"9c9bdcxTi1K5qmLK8lMwxbs","PhysicalEnable"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=i.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.gravityScale=1,t.isDebugPhysics=!1,t.isDebugCollider=!1,t}return __extends(t,e),t.prototype.onLoad=function(){cc.macro.ENABLE_TRANSPARENT_CANVAS=!0,this.physicsManager=cc.director.getPhysicsManager(),this.physicsManager3d=cc.director.getPhysics3DManager(),this.collisionManager=cc.director.getCollisionManager()},t.prototype.onEnable=function(){this.setPhysicsEnabled(!0)},t.prototype.onDisable=function(){this.setPhysicsEnabled(!1)},t.prototype.update=function(){},t.prototype.setPhysicsEnabled=function(e){this.physicsManager.enabled=e,this.physicsManager3d.enabled=e,this.collisionManager.enabled=e,this.isDebugCollider&&(this.collisionManager.enabledDebugDraw=!0),this.isDebugPhysics&&(this.physicsManager.debugDrawFlags=cc.PhysicsManager.DrawBits.e_aabbBit|cc.PhysicsManager.DrawBits.e_pairBit|cc.PhysicsManager.DrawBits.e_centerOfMassBit|cc.PhysicsManager.DrawBits.e_jointBit|cc.PhysicsManager.DrawBits.e_shapeBit)},t.REAL_GRAVITY_SCALE=1,__decorate([n(cc.Float)],t.prototype,"gravityScale",void 0),__decorate([n(cc.Boolean)],t.prototype,"isDebugPhysics",void 0),__decorate([n(cc.Boolean)],t.prototype,"isDebugCollider",void 0),__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],VideoControl:[function(e,t,o){"use strict";cc._RF.push(t,"248a5W2Z1tB7I5zro/rc2T9","VideoControl"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./MainAudio"),n=e("./player_control"),a=cc._decorator,r=a.ccclass,l=a.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.video=null,t.button=null,t.played=!1,t.image=null,t}return __extends(t,e),t.prototype.onCollisionEnter=function(e){var t=this;"Character"!=e.node.group||this.played||(this.video.node.active=!0,this.video.play(),this.played=!0,cc.tween(this.button.node).by(.5,{position:cc.v2(0,-20)}).start(),n.default.instance.playDance(),c.default.instance.audioPlayer.stopAudioPlay(c.default.instance.playingAudio),c.default.instance.audioPlayer.playAudio(i.AudioPlayId.dog_die),c.default.instance.audioPlayer.playAudio(i.AudioPlayId.dragon_die),this.scheduleOnce(function(){c.default.instance.playingAudio=c.default.instance.audioPlayer.playAudio(i.AudioPlayId.home_music,!0,.5),t.video.node.active=!1,t.image.active=!0},5))},__decorate([l(cc.VideoPlayer)],t.prototype,"video",void 0),__decorate([l(cc.RigidBody)],t.prototype,"button",void 0),__decorate([l(cc.Node)],t.prototype,"image",void 0),__decorate([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./MainAudio":"MainAudio","./player_control":"player_control"}],bomb_control:[function(e,t,o){"use strict";cc._RF.push(t,"939e41al8BDGLTPfhfPNoOG","bomb_control"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.Remove_Node=function(){this.node.destroy()},t.prototype.onBeginContact=function(e,t,o){"Player"==o.node.name&&this.node.getComponent(cc.Animation).play()},__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],camera_control:[function(e,t,o){"use strict";cc._RF.push(t,"836a3VkIVlFRo3hQeyQj/k0","camera_control"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=i.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Player_Node=null,t.blockNode=null,t.posX=null,t}return __extends(t,e),t.prototype.update=function(){var e=this.Player_Node.getPosition();e.y=cc.misc.clampf(e.y,0,220);var t=this.node.getPosition();this.posX=t.x,this.posX<e.x&&(this.blockNode.setPosition(cc.v2(t.x-682,t.y)),t.lerp(e,.1,t),this.node.setPosition(t))},__decorate([n(cc.Node)],t.prototype,"Player_Node",void 0),__decorate([n(cc.Node)],t.prototype,"blockNode",void 0),__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],explosion_force:[function(e,t,o){"use strict";cc._RF.push(t,"e6ec6uN/qhFhJvIS/Rg/Vss","explosion_force"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=i.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Bomb_Root=null,t}return __extends(t,e),t.prototype.onBeginContact=function(e,t,o){if(o.body.type===cc.RigidBodyType.Dynamic&&o.node!==this.Bomb_Root){var i=o.node.getPosition(),c=this.Bomb_Root.getPosition(),n=i.sub(c);n.normalizeSelf(),n.mulSelf(2e5),o.body.applyForceToCenter(n)}},__decorate([n(cc.Node)],t.prototype,"Bomb_Root",void 0),__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],main_game_control:[function(e,t,o){"use strict";cc._RF.push(t,"83aeb+1oXBGab873ioivyWY","main_game_control"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){var e=cc.director.getPhysicsManager();e.enabled=!0,e.gravity=cc.v2(0,-2e3)},__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],player_control_fly:[function(e,t,o){"use strict";cc._RF.push(t,"21350vAY7BHSaKCh4GPaJoq","player_control_fly"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./Animation"),c=e("./ColliderCallback"),n=cc._decorator,a=n.ccclass,r=n.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Bomb_Prefab=null,t.bodyCollider=null,t.spaceClicked=null,t.Character=null,t.Direction=0,t.On_The_Ground=!1,t.Velocity_Max_X=400,t.Walk_Force=7e3,t.Jump_Force=7e3,t.Left=-50,t.Right=50,t.pressedDir=!1,t}var o;return __extends(t,e),o=t,Object.defineProperty(t,"instance",{get:function(){return o._instance},enumerable:!1,configurable:!0}),t.prototype.onLoad=function(){o._instance=this,this.Rigid_Body=this.node.getComponent(cc.RigidBody),this.bodyCollider.setColliderCallback(this.onBodyCollider.bind(this))},t.prototype.onEnable=function(){var e=this;this.Direction=0,this.On_The_Ground=!1,this.Rigid_Body.linearVelocity=new cc.Vec2(0,0),this.Rigid_Body.type=cc.RigidBodyType.Static,this.scheduleOnce(function(){e.Rigid_Body.type=cc.RigidBodyType.Dynamic},.1),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyPressed,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyReleased,this)},t.prototype.onDisable=function(){var e=this;this.Direction=0,this.On_The_Ground=!1,this.Rigid_Body.linearVelocity=new cc.Vec2(0,0),this.Rigid_Body.type=cc.RigidBodyType.Static,this.scheduleOnce(function(){e.Rigid_Body.type=cc.RigidBodyType.Dynamic},.1),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyPressed,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyReleased,this)},t.prototype.onBodyCollider=function(){},t.prototype.onKeyPressed=function(e){switch(e.keyCode){case cc.macro.KEY.up:this.Rigid_Body.applyForceToCenter(cc.v2(0,this.Jump_Force),!0);break;case cc.macro.KEY.left:this.Character.rotationY=this.Left,this.Direction=-1;break;case cc.macro.KEY.right:this.Character.rotationY=this.Right,this.Direction=1;break;case cc.macro.KEY.down:this.Rigid_Body.applyForceToCenter(cc.v2(0,-this.Jump_Force),!0);break;case cc.macro.KEY.space:this.spaceClicked.active=!0}},t.prototype.onKeyReleased=function(e){switch(e.keyCode){case cc.macro.KEY.left:this.pressedDir=!1;case cc.macro.KEY.right:this.pressedDir=!1,this.Direction=0;break;case cc.macro.KEY.space:this.spaceClicked.active=!1}},t.prototype.onBeginContact=function(e,t){2===t.tag&&(this.On_The_Ground=!0)},t.prototype.update=function(){(this.Direction>0&&this.Rigid_Body.linearVelocity.x<this.Velocity_Max_X||this.Direction<0&&this.Rigid_Body.linearVelocity.x>-this.Velocity_Max_X)&&this.Rigid_Body.applyForceToCenter(cc.v2(this.Direction*this.Walk_Force,0),!0)},t.prototype.playDance=function(){this.Character.rotationY=0,i.default.instance.onDance()},t.prototype.Throw_Bomb=function(){var e=cc.instantiate(this.Bomb_Prefab);e.parent=this.node.parent;var t=this.node.getPosition();t.x+=70,e.setPosition(t),e.getComponent(cc.RigidBody).applyForceToCenter(cc.v2(14e4,2e5),!0)},t._instance=null,__decorate([r(cc.Prefab)],t.prototype,"Bomb_Prefab",void 0),__decorate([r(c.default)],t.prototype,"bodyCollider",void 0),__decorate([r(cc.Node)],t.prototype,"spaceClicked",void 0),__decorate([r(cc.Node)],t.prototype,"Character",void 0),o=__decorate([a],t)}(cc.Component);o.default=l,cc._RF.pop()},{"./Animation":"Animation","./ColliderCallback":"ColliderCallback"}],player_control:[function(e,t,o){"use strict";cc._RF.push(t,"eed8awe0ENGFo3UmlBC6EkJ","player_control"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./Animation"),c=e("./ColliderCallback"),n=cc._decorator,a=n.ccclass,r=n.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Bomb_Prefab=null,t.bodyCollider=null,t.spaceClicked=null,t.Character=null,t.Direction=0,t.On_The_Ground=!1,t.Velocity_Max_X=400,t.Walk_Force=15e3,t.Jump_Force=5e5,t.Left=-50,t.Right=50,t.pressedDir=!1,t}var o;return __extends(t,e),o=t,Object.defineProperty(t,"instance",{get:function(){return o._instance},enumerable:!1,configurable:!0}),t.prototype.onLoad=function(){o._instance=this,this.Rigid_Body=this.node.getComponent(cc.RigidBody),this.bodyCollider.setColliderCallback(this.onBodyCollider.bind(this))},t.prototype.onEnable=function(){var e=this;this.Direction=0,this.On_The_Ground=!1,this.Rigid_Body.linearVelocity=new cc.Vec2(0,0),this.Rigid_Body.type=cc.RigidBodyType.Static,this.scheduleOnce(function(){e.Rigid_Body.type=cc.RigidBodyType.Dynamic},.1),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyPressed,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyReleased,this),console.log(this.Rigid_Body.linearVelocity)},t.prototype.onDisable=function(){var e=this;this.Direction=0,this.On_The_Ground=!1,this.Rigid_Body.linearVelocity=new cc.Vec2(0,0),this.Rigid_Body.type=cc.RigidBodyType.Static,this.scheduleOnce(function(){e.Rigid_Body.type=cc.RigidBodyType.Dynamic},.1),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyPressed,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyReleased,this)},t.prototype.onBodyCollider=function(){},t.prototype.onKeyPressed=function(e){switch(e.keyCode){case cc.macro.KEY.up:this.On_The_Ground&&(i.default.instance.onJump(),this.Rigid_Body.applyForceToCenter(cc.v2(0,this.Jump_Force),!0),this.On_The_Ground=!1);break;case cc.macro.KEY.left:this.Character.rotationY=this.Left,i.default.instance.onWalk(),this.Direction=-1,this.pressedDir=!0;break;case cc.macro.KEY.right:this.Character.rotationY=this.Right,i.default.instance.onWalk(),this.Direction=1,this.pressedDir=!0;break;case cc.macro.KEY.space:this.spaceClicked.active=!0}},t.prototype.onKeyReleased=function(e){switch(e.keyCode){case cc.macro.KEY.left:i.default.instance.playAnim(),this.pressedDir=!1;case cc.macro.KEY.right:this.pressedDir=!1,i.default.instance.playAnim(),this.Direction=0;break;case cc.macro.KEY.space:this.spaceClicked.active=!1}},t.prototype.onBeginContact=function(e,t){2===t.tag&&(this.On_The_Ground=!0)},t.prototype.update=function(){(this.Direction>0&&this.Rigid_Body.linearVelocity.x<this.Velocity_Max_X||this.Direction<0&&this.Rigid_Body.linearVelocity.x>-this.Velocity_Max_X)&&this.Rigid_Body.applyForceToCenter(cc.v2(this.Direction*this.Walk_Force,0),!0)},t.prototype.playDance=function(){this.Character.rotationY=0,i.default.instance.onDance()},t.prototype.Throw_Bomb=function(){var e=cc.instantiate(this.Bomb_Prefab);e.parent=this.node.parent;var t=this.node.getPosition();t.x+=70,e.setPosition(t),e.getComponent(cc.RigidBody).applyForceToCenter(cc.v2(14e4,2e5),!0)},t._instance=null,__decorate([r(cc.Prefab)],t.prototype,"Bomb_Prefab",void 0),__decorate([r(c.default)],t.prototype,"bodyCollider",void 0),__decorate([r(cc.Node)],t.prototype,"spaceClicked",void 0),__decorate([r(cc.Node)],t.prototype,"Character",void 0),o=__decorate([a],t)}(cc.Component);o.default=l,cc._RF.pop()},{"./Animation":"Animation","./ColliderCallback":"ColliderCallback"}],scene1:[function(e,t,o){"use strict";cc._RF.push(t,"67091RUfYpKFpRQGyH4tWCA","scene1"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./MainAudio"),n=cc._decorator,a=n.ccclass,r=(n.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){},t.prototype.onEnable=function(){c.default.instance.playingAudio&&c.default.instance.audioPlayer.stopAudioPlay(c.default.instance.playingAudio),c.default.instance.playingAudio=c.default.instance.audioPlayer.playAudio(i.AudioPlayId.home_music,!0,.3)},t.prototype.changeScene1=function(){},__decorate([a],t)}(cc.Component));o.default=r,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./MainAudio":"MainAudio"}],scene2:[function(e,t,o){"use strict";cc._RF.push(t,"b0b67C1BYFMJJ/OQve+tZKq","scene2"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./ColliderCallback"),n=e("./MainAudio"),a=cc._decorator,r=a.ccclass,l=a.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Scene1=null,t.Scene2=null,t.Scene3=null,t.Text1=null,t.Text2=null,t.Text3=null,t.scene1Trigger=null,t.scene2Trigger=null,t}return __extends(t,e),t.prototype.onEnable=function(){n.default.instance.playingAudio&&n.default.instance.audioPlayer.stopAudioPlay(n.default.instance.playingAudio),n.default.instance.playingAudio=n.default.instance.audioPlayer.playAudio(i.AudioPlayId.boss_die,!0,.3),this.scene1Trigger.setColliderCallback(this.changeScene1.bind(this)),this.scene2Trigger.setColliderCallback(this.changeScene2.bind(this))},t.prototype.changeSceneAnim=function(e){var t=this;cc.tween(e).to(.4,{opacity:0}).call(function(){t.Scene1.active=!1}).start()},t.prototype.changeSceneAnim2=function(e){var t=this;cc.tween(e).to(.4,{position:cc.v2(0,0)}).call(function(){t.Scene1.active=!1}).start()},t.prototype.changeScene1=function(){var e=this;n.default.instance.audioPlayer.playAudio(i.AudioPlayId.effect_lava_x_water),this.changeSceneAnim(this.Scene1),cc.tween(this.Text1).to(.4,{opacity:0}).call(function(){e.Text1.active=!1,e.Text2.active=!0}).start()},t.prototype.changeScene2=function(){var e=this;n.default.instance.audioPlayer.playAudio(i.AudioPlayId.effect_lava_x_water),cc.tween(this.Text2).to(.4,{opacity:0}).call(function(){e.Text2.active=!1,e.Text3.active=!0}).start(),this.changeSceneAnim(this.Scene2),this.changeSceneAnim2(this.Scene3)},__decorate([l(cc.Node)],t.prototype,"Scene1",void 0),__decorate([l(cc.Node)],t.prototype,"Scene2",void 0),__decorate([l(cc.Node)],t.prototype,"Scene3",void 0),__decorate([l(cc.Node)],t.prototype,"Text1",void 0),__decorate([l(cc.Node)],t.prototype,"Text2",void 0),__decorate([l(cc.Node)],t.prototype,"Text3",void 0),__decorate([l(c.default)],t.prototype,"scene1Trigger",void 0),__decorate([l(c.default)],t.prototype,"scene2Trigger",void 0),__decorate([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./ColliderCallback":"ColliderCallback","./MainAudio":"MainAudio"}],scene3:[function(e,t,o){"use strict";cc._RF.push(t,"549330dcrxATrD5H857nND+","scene3"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./ColliderCallback"),n=e("./MainAudio"),a=cc._decorator,r=a.ccclass,l=a.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Scene1=null,t.Scene2=null,t.Scene3=null,t.scene1Trigger=null,t.scene2Trigger=null,t.scene3Trigger=null,t}return __extends(t,e),t.prototype.onEnable=function(){n.default.instance.playingAudio&&n.default.instance.audioPlayer.stopAudioPlay(n.default.instance.playingAudio),n.default.instance.playingAudio=n.default.instance.audioPlayer.playAudio(i.AudioPlayId.button_click,!0,.3),this.scene1Trigger.setColliderCallback(this.changeScene1.bind(this)),this.scene2Trigger.setColliderCallback(this.changeScene2.bind(this)),this.scene3Trigger.setColliderCallback(this.changeScene3.bind(this))},t.prototype.changeScene1=function(){this.scene1Trigger.node.active=!1,cc.tween(this.Scene1).to(.4,{opacity:255}).start(),n.default.instance.audioPlayer.playAudio(i.AudioPlayId.dog_bite)},t.prototype.changeScene2=function(){this.scene2Trigger.node.active=!1,cc.tween(this.Scene2).to(.4,{opacity:255}).start(),n.default.instance.audioPlayer.playAudio(i.AudioPlayId.dog_bite)},t.prototype.changeScene3=function(){this.scene3Trigger.node.active=!1,cc.tween(this.Scene3).to(.4,{opacity:255}).start(),n.default.instance.audioPlayer.playAudio(i.AudioPlayId.girl_die)},__decorate([l(cc.Node)],t.prototype,"Scene1",void 0),__decorate([l(cc.Node)],t.prototype,"Scene2",void 0),__decorate([l(cc.Node)],t.prototype,"Scene3",void 0),__decorate([l(c.default)],t.prototype,"scene1Trigger",void 0),__decorate([l(c.default)],t.prototype,"scene2Trigger",void 0),__decorate([l(c.default)],t.prototype,"scene3Trigger",void 0),__decorate([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./ColliderCallback":"ColliderCallback","./MainAudio":"MainAudio"}],scene4:[function(e,t,o){"use strict";cc._RF.push(t,"e5250/BzRtHwqUZhyDk806o","scene4"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./ColliderCallback"),n=e("./MainAudio"),a=cc._decorator,r=a.ccclass,l=a.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Scene1=null,t.Scene2=null,t.stick1=null,t.stick2=null,t.scene1Trigger=null,t.scene2Trigger=null,t}return __extends(t,e),t.prototype.onEnable=function(){n.default.instance.playingAudio&&n.default.instance.audioPlayer.stopAudioPlay(n.default.instance.playingAudio),n.default.instance.playingAudio=n.default.instance.audioPlayer.playAudio(i.AudioPlayId.game_play_music,!0,.3),this.scene1Trigger.setColliderCallback(this.changeScene1.bind(this)),this.scene2Trigger.setColliderCallback(this.changeScene2.bind(this))},t.prototype.changeScene1=function(e){"Rope"==e.node.group&&(n.default.instance.audioPlayer.playAudio(i.AudioPlayId.button_open),n.default.instance.audioPlayer.playAudio(i.AudioPlayId.chest_open),n.default.instance.audioPlayer.playAudio(i.AudioPlayId.rope_cut),cc.tween(this.Scene1).to(.4,{position:cc.v2(-321.973,-209.98)},{easing:"sineOutIn"}).start(),cc.tween(this.stick1).to(.4,{rotation:-70}).start())},t.prototype.changeScene2=function(e){console.log(e.node.group),"Rope"==e.node.group&&(n.default.instance.audioPlayer.playAudio(i.AudioPlayId.button_open),n.default.instance.audioPlayer.playAudio(i.AudioPlayId.stick_move),n.default.instance.audioPlayer.playAudio(i.AudioPlayId.stick_block),cc.tween(this.Scene2).to(.4,{position:cc.v2(313.927,-193.569)},{easing:"sineOutIn"}).start(),cc.tween(this.stick2).to(.4,{rotation:70}).start())},__decorate([l(cc.Node)],t.prototype,"Scene1",void 0),__decorate([l(cc.Node)],t.prototype,"Scene2",void 0),__decorate([l(cc.Node)],t.prototype,"stick1",void 0),__decorate([l(cc.Node)],t.prototype,"stick2",void 0),__decorate([l(c.default)],t.prototype,"scene1Trigger",void 0),__decorate([l(c.default)],t.prototype,"scene2Trigger",void 0),__decorate([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./ColliderCallback":"ColliderCallback","./MainAudio":"MainAudio"}],scene5:[function(e,t,o){"use strict";cc._RF.push(t,"4a041ErooFAbqgpLkwEcmcs","scene5"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./ColliderCallback"),n=e("./MainAudio"),a=cc._decorator,r=a.ccclass,l=a.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Scene1=null,t.Scene2=null,t.Scene3=null,t.scene1Trigger=null,t.scene2Trigger=null,t.scene3Trigger=null,t}return __extends(t,e),t.prototype.onEnable=function(){n.default.instance.playingAudio&&n.default.instance.audioPlayer.stopAudioPlay(n.default.instance.playingAudio),n.default.instance.playingAudio=n.default.instance.audioPlayer.playAudio(i.AudioPlayId.game_play_music,!0,.3)},t.prototype.changeScene1=function(){this.scene1Trigger.node.active=!1,cc.tween(this.Scene1).to(.4,{opacity:255}).start()},t.prototype.changeScene2=function(){this.scene2Trigger.node.active=!1,cc.tween(this.Scene2).to(.4,{opacity:255}).start()},t.prototype.changeScene3=function(){this.scene3Trigger.node.active=!1,cc.tween(this.Scene3).to(.4,{opacity:255}).start()},__decorate([l(cc.Node)],t.prototype,"Scene1",void 0),__decorate([l(cc.Node)],t.prototype,"Scene2",void 0),__decorate([l(cc.Node)],t.prototype,"Scene3",void 0),__decorate([l(c.default)],t.prototype,"scene1Trigger",void 0),__decorate([l(c.default)],t.prototype,"scene2Trigger",void 0),__decorate([l(c.default)],t.prototype,"scene3Trigger",void 0),__decorate([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./ColliderCallback":"ColliderCallback","./MainAudio":"MainAudio"}],scene6:[function(e,t,o){"use strict";cc._RF.push(t,"12db5F/9cJHsZ03H+WWXSWX","scene6"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./AudioPlayId"),c=e("./MainAudio"),n=cc._decorator,a=n.ccclass,r=n.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Scene1=null,t.Scene2=null,t.Scene3=null,t.Scene4=null,t.Scene5=null,t.Scene6=null,t.Scene7=null,t.Scene5cp=null,t}return __extends(t,e),t.prototype.onEnable=function(){var e=this;c.default.instance.playingAudio&&c.default.instance.audioPlayer.stopAudioPlay(c.default.instance.playingAudio),c.default.instance.playingAudio=c.default.instance.audioPlayer.playAudio(i.AudioPlayId.game_play_music,!0,.3),cc.tween(this.Scene1).to(.5,{opacity:255}).start(),cc.tween(this.Scene2).delay(.5).call(function(){e.Scene2.active=!0}).to(.5,{opacity:255}).start(),cc.tween(this.Scene3).delay(1).call(function(){e.Scene3.active=!0}).to(.5,{opacity:255}).start(),cc.tween(this.Scene4).delay(1.5).call(function(){e.Scene4.active=!0}).to(.5,{opacity:255}).start(),cc.tween(this.Scene5).delay(2).call(function(){e.Scene5.active=!0}).to(.5,{opacity:255}).start(),cc.tween(this.Scene6).delay(2.5).call(function(){e.Scene6.active=!0}).to(.5,{opacity:255}).start(),cc.tween(this.Scene5cp).delay(3).call(function(){e.Scene5cp.active=!0}).to(.5,{opacity:255}).start(),cc.tween(this.Scene7).delay(3.5).call(function(){e.Scene7.active=!0}).to(.5,{opacity:255}).start()},__decorate([r(cc.Node)],t.prototype,"Scene1",void 0),__decorate([r(cc.Node)],t.prototype,"Scene2",void 0),__decorate([r(cc.Node)],t.prototype,"Scene3",void 0),__decorate([r(cc.Node)],t.prototype,"Scene4",void 0),__decorate([r(cc.Node)],t.prototype,"Scene5",void 0),__decorate([r(cc.Node)],t.prototype,"Scene6",void 0),__decorate([r(cc.Node)],t.prototype,"Scene7",void 0),__decorate([r(cc.Node)],t.prototype,"Scene5cp",void 0),__decorate([a],t)}(cc.Component);o.default=l,cc._RF.pop()},{"./AudioPlayId":"AudioPlayId","./MainAudio":"MainAudio"}],scene_manager:[function(e,t,o){"use strict";cc._RF.push(t,"c6135LahWhLJ5A8kc2GJZv7","scene_manager"),Object.defineProperty(o,"__esModule",{value:!0});var i=e("./ColliderCallback"),c=e("./player_control"),n=e("./player_control_fly"),a=cc._decorator,r=a.ccclass,l=a.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.map1=null,t.mapNext=null,t.mapBack=null,t.CharacterBack=null,t.CharacterNext=null,t.boxNext=null,t.boxBack=null,t.startPos=new cc.Vec2(-489.81,-230.055),t.backPos=new cc.Vec2(524.011,-230.055),t.isScene1=!1,t.isScene3=!1,t}return __extends(t,e),t.prototype.start=function(){this.boxNext&&this.boxNext.setColliderCallback(this.onHitNext.bind(this)),this.boxBack&&this.boxBack.setColliderCallback(this.onHitBack.bind(this))},t.prototype.onHitNext=function(){this.CharacterNext&&(this.CharacterNext.active=!0,this.CharacterNext.setPosition(this.startPos),this.isScene1?this.CharacterNext.getComponent(n.default).Character.rotationY=50:this.CharacterNext.getComponent(c.default).Character.rotationY=50),this.map1.active=!1,this.mapNext.active=!0,this.CharacterBack&&(this.CharacterBack.active=!1)},t.prototype.onHitBack=function(){this.CharacterBack&&(this.CharacterBack.active=!0,this.isScene3?this.CharacterBack.getComponent(n.default).Character.rotationY=-50:this.CharacterBack.getComponent(c.default).Character.rotationY=-50,this.CharacterBack.setPosition(this.backPos)),this.mapBack.active=!0,this.map1.active=!1,this.CharacterNext&&(this.CharacterNext.active=!1)},__decorate([l(cc.Node)],t.prototype,"map1",void 0),__decorate([l(cc.Node)],t.prototype,"mapNext",void 0),__decorate([l(cc.Node)],t.prototype,"mapBack",void 0),__decorate([l(cc.Node)],t.prototype,"CharacterBack",void 0),__decorate([l(cc.Node)],t.prototype,"CharacterNext",void 0),__decorate([l(i.default)],t.prototype,"boxNext",void 0),__decorate([l(i.default)],t.prototype,"boxBack",void 0),__decorate([l(cc.Boolean)],t.prototype,"isScene1",void 0),__decorate([l(cc.Boolean)],t.prototype,"isScene3",void 0),__decorate([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./ColliderCallback":"ColliderCallback","./player_control":"player_control","./player_control_fly":"player_control_fly"}]},{},["Animation","AnimationFly","AudioManager","AudioPlayId","AudioPlayer","ColliderCallback","LoopOpacity","MainAudio","PhysicalEnable","VideoControl","bomb_control","camera_control","explosion_force","main_game_control","player_control","player_control_fly","scene1","scene2","scene3","scene4","scene5","scene6","scene_manager"]);